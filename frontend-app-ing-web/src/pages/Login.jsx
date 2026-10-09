import { useState } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import api from '../axios'
import { getUsuario, guardarUsuario, mensajeDeError } from '../store/auth'
import AuthLayout, { Alerta, BotonPrincipal, BotonVerPassword, Campo } from '../layouts/AuthLayout'

export default function Login() {
  const navigate = useNavigate()
  const location = useLocation()
  const [correo, setCorreo] = useState(location.state?.correo ?? '')
  const [password, setPassword] = useState('')
  const [verPassword, setVerPassword] = useState(false)
  const [cargando, setCargando] = useState(false)
  const [error, setError] = useState('')

  // Si ya hay sesión, directo al panel
  if (getUsuario()) return <Navigate to="/panel" replace />

  const ingresar = async (e) => {
    e.preventDefault()
    setError('')
    setCargando(true)
    try {
      const { data } = await api.post('/api/auth/login', { correo_usu: correo, pass_usu: password })
      guardarUsuario(data)
      navigate('/panel', { replace: true })
    } catch (err) {
      setError(
        mensajeDeError(err, {
          401: 'Correo o contraseña incorrectos.',
          403: 'Tu cuenta está inactiva. Contacta al administrador.',
        }),
      )
    } finally {
      setCargando(false)
    }
  }

  return (
    <AuthLayout>
      <div className="mb-space-lg">
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-1">Acceso al Sistema</h2>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Ingresa tus credenciales de operador, recepcionista o auditor de hotel.
        </p>
      </div>

      {location.state?.registrado && !error && (
        <div className="mb-space-md">
          <Alerta tipo="exito">¡Cuenta creada con éxito! Ya puedes iniciar sesión.</Alerta>
        </div>
      )}

      <form className="space-y-space-md" onSubmit={ingresar}>
        <Campo
          id="correo"
          label="Correo electrónico"
          icono="alternate_email"
          type="email"
          placeholder="tucorreo@hotel.com"
          autoComplete="email"
          required
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />

        <Campo
          id="password"
          label="Contraseña"
          icono="key"
          type={verPassword ? 'text' : 'password'}
          placeholder="••••••••••••"
          autoComplete="current-password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        >
          <BotonVerPassword visible={verPassword} onClick={() => setVerPassword(!verPassword)} />
        </Campo>

        {error && <Alerta>{error}</Alerta>}

        <div className="pt-space-sm">
          <BotonPrincipal cargando={cargando} textoCargando="Verificando...">
            Ingresar al Panel
          </BotonPrincipal>
        </div>
      </form>

      <p className="mt-space-lg text-center font-body-md text-body-md text-on-surface-variant">
        ¿No tienes cuenta?{' '}
        <Link className="text-secondary font-semibold hover:underline" to="/registro">
          Regístrate
        </Link>
      </p>
    </AuthLayout>
  )
}
