import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import api from '../axios'
import { mensajeDeError } from '../store/auth'
import AuthLayout, { Alerta, BotonPrincipal, BotonVerPassword, Campo } from '../layouts/AuthLayout'

export default function Registro() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ nombre: '', correo: '', password: '', confirmar: '' })
  const [verPassword, setVerPassword] = useState(false)
  const [cargando, setCargando] = useState(false)
  const [error, setError] = useState('')

  const cambiar = (campo) => (e) => setForm({ ...form, [campo]: e.target.value })

  const passwordCorta = form.password.length > 0 && form.password.length < 8
  const noCoinciden = form.confirmar.length > 0 && form.confirmar !== form.password

  const registrar = async (e) => {
    e.preventDefault()
    if (form.password.length < 8 || form.password !== form.confirmar) return
    setError('')
    setCargando(true)
    try {
      await api.post('/api/auth/registro', {
        nom_usu: form.nombre.trim(),
        correo_usu: form.correo.trim(),
        pass_usu: form.password,
      })
      navigate('/login', { state: { registrado: true, correo: form.correo.trim() } })
    } catch (err) {
      setError(mensajeDeError(err, { 409: 'Este correo ya está registrado.' }))
    } finally {
      setCargando(false)
    }
  }

  return (
    <AuthLayout>
      <div className="mb-space-lg">
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-1">Crear cuenta</h2>
        <p className="font-body-md text-body-md text-on-surface-variant">Regístrate para empezar a usar StayBill.</p>
      </div>

      <form className="space-y-space-md" onSubmit={registrar}>
        <Campo
          id="nombre"
          label="Nombre completo"
          icono="person"
          placeholder="Ej. María López"
          autoComplete="name"
          required
          value={form.nombre}
          onChange={cambiar('nombre')}
        />

        <Campo
          id="correo"
          label="Correo electrónico"
          icono="alternate_email"
          type="email"
          placeholder="tucorreo@hotel.com"
          autoComplete="email"
          required
          value={form.correo}
          onChange={cambiar('correo')}
        />

        <Campo
          id="password"
          label="Contraseña"
          hint="Mín. 8 caracteres"
          icono="key"
          type={verPassword ? 'text' : 'password'}
          autoComplete="new-password"
          required
          value={form.password}
          onChange={cambiar('password')}
          error={passwordCorta ? 'La contraseña debe tener al menos 8 caracteres.' : ''}
        >
          <BotonVerPassword visible={verPassword} onClick={() => setVerPassword(!verPassword)} />
        </Campo>

        <Campo
          id="confirmar"
          label="Confirmar contraseña"
          icono="lock"
          type={verPassword ? 'text' : 'password'}
          autoComplete="new-password"
          required
          value={form.confirmar}
          onChange={cambiar('confirmar')}
          error={noCoinciden ? 'Las contraseñas no coinciden.' : ''}
        />

        {error && <Alerta>{error}</Alerta>}

        <div className="pt-space-sm">
          <BotonPrincipal cargando={cargando} textoCargando="Creando cuenta...">
            Crear cuenta
          </BotonPrincipal>
        </div>
      </form>

      <p className="mt-space-lg text-center font-body-md text-body-md text-on-surface-variant">
        ¿Ya tienes cuenta?{' '}
        <Link className="text-secondary font-semibold hover:underline" to="/login">
          Inicia sesión
        </Link>
      </p>
    </AuthLayout>
  )
}
