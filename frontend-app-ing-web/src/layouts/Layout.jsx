// Menú lateral + barra superior de las pantallas internas (diseño de Stitch: Panel de Control)
import { Navigate, NavLink, Outlet, useNavigate } from 'react-router-dom'
import { cerrarSesion, getUsuario } from '../store/auth'
import Logo from '../components/Logo'

const SECCIONES = [
  {
    titulo: 'Principal',
    links: [
      { to: '/panel', icono: 'dashboard', texto: 'Panel de Control' },
      { to: '/facturacion', icono: 'receipt_long', texto: 'Facturación & Comprobantes' },
      { to: '/huespedes', icono: 'badge', texto: 'Huéspedes & Cuentas' },
    ],
  },
  {
    titulo: 'Gestión',
    links: [
      { to: '/habitaciones', icono: 'hotel', texto: 'Habitaciones & Tarifas' },
      { to: '/reportes', icono: 'account_balance', texto: 'Reportes Fiscales' },
    ],
  },
  {
    titulo: 'Sistema',
    links: [
      { to: '/configuracion', icono: 'settings', texto: 'Configuración' },
      { to: '/perfil', icono: 'person', texto: 'Mi Perfil' },
    ],
  },
]

function iniciales(nombre = '') {
  return nombre.split(' ').filter(Boolean).slice(0, 2).map((p) => p[0].toUpperCase()).join('') || '?'
}

export default function Layout() {
  const navigate = useNavigate()
  const usuario = getUsuario()

  // Si no hay sesión, al login
  if (!usuario) return <Navigate to="/login" replace />

  const salir = () => {
    cerrarSesion()
    navigate('/login', { replace: true })
  }

  return (
    <>
      <aside className="fixed left-0 top-0 h-screen w-72 bg-surface-container-lowest border-r border-outline-variant/60 shadow-[2px_0_16px_rgba(28,27,25,0.03)] z-50 flex flex-col justify-between overflow-y-auto">
        <div className="flex flex-col">
          <div className="h-20 px-space-lg flex items-center gap-space-sm bg-surface-container-lowest border-b border-outline-variant/50">
            <Logo className="w-9 h-9" />
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-on-surface font-semibold tracking-wider leading-none">AQELION</span>
              <span className="font-label-sm text-[10px] text-bronze-accent uppercase tracking-[0.14em] mt-1 font-semibold">Atelier &amp; Facturación</span>
            </div>
          </div>

          {SECCIONES.map((seccion) => (
            <div className="px-space-md pt-space-lg" key={seccion.titulo}>
              <span className="px-space-sm font-label-sm text-[10px] text-outline uppercase tracking-[0.14em] block mb-space-xs font-semibold">
                {seccion.titulo}
              </span>
              <nav className="flex flex-col gap-1">
                {seccion.links.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      isActive
                        ? 'flex items-center gap-space-sm px-space-sm py-2.5 transition-colors bg-primary-container text-surface-container-lowest font-label-md text-label-md rounded-lg shadow-sm'
                        : 'flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-label-md text-label-md'
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span className={`material-symbols-outlined text-lg leading-none ${isActive ? 'text-bronze-accent' : 'text-outline'}`}>
                          {link.icono}
                        </span>
                        <span className={isActive ? 'tracking-wide' : ''}>{link.texto}</span>
                      </>
                    )}
                  </NavLink>
                ))}
              </nav>
            </div>
          ))}
        </div>

        <div className="p-space-md flex flex-col gap-space-sm bg-surface-container-low/60 border-t border-outline-variant/60">
          <div className="flex items-center justify-between px-space-sm py-2 rounded-lg bg-surface-container-lowest border border-outline-variant/50 shadow-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sage animate-pulse" />
              <span className="font-label-sm text-label-sm text-on-surface font-medium">API Facturación</span>
            </div>
            <span className="font-label-sm text-[11px] text-sage font-semibold uppercase tracking-wider">En línea</span>
          </div>
          <button
            className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-error hover:bg-error-container/30 transition-colors font-label-md text-label-md cursor-pointer"
            type="button"
            onClick={salir}
          >
            <span className="material-symbols-outlined text-lg leading-none">logout</span>
            <span>Cerrar sesión</span>
          </button>
        </div>
      </aside>

      <div className="pl-72">
        <header className="fixed top-0 left-72 right-0 h-20 bg-surface-container-lowest/85 backdrop-blur-xl border-b border-outline-variant/60 shadow-[0_2px_12px_rgba(28,27,25,0.02)] z-40 flex items-center justify-between px-space-lg">
          <div className="flex items-center gap-space-md flex-1 max-w-lg">
            <div className="relative w-full flex items-center">
              <span className="material-symbols-outlined absolute left-3.5 text-outline text-lg pointer-events-none">search</span>
              <input
                className="w-full h-10 pl-10 pr-12 rounded-lg bg-surface-container-low/80 border border-outline-variant/50 text-on-surface placeholder:text-outline font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-lowest focus:border-secondary transition-all"
                placeholder="Buscar factura, habitación o huésped..."
                type="text"
              />
              <kbd className="absolute right-3 px-1.5 py-0.5 rounded bg-surface-container border border-outline-variant/70 text-on-surface-variant font-label-sm text-[10px]">⌘K</kbd>
            </div>
          </div>
          <div className="flex items-center gap-space-md">
            <button
              className="flex items-center gap-space-xs h-10 px-space-md bg-primary-container text-surface-container-lowest border border-primary-container rounded-lg font-label-md text-label-md hover:bg-secondary transition-all shadow-[0_2px_6px_rgba(25,24,22,0.12)] cursor-pointer"
              type="button"
              onClick={() => navigate('/facturacion')}
            >
              <span className="material-symbols-outlined text-lg leading-none text-secondary-fixed">add</span>
              <span className="tracking-wide">Nueva Factura</span>
            </button>
            <button
              aria-label="Notificaciones"
              className="relative p-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface border border-transparent hover:border-outline-variant/50 transition-colors"
              type="button"
            >
              <span className="material-symbols-outlined text-xl leading-none">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-cognac ring-2 ring-surface-container-lowest" />
            </button>
            <div className="flex items-center gap-space-sm pl-space-xs border-l border-outline-variant/50 py-1">
              <div className="text-right hidden xl:block">
                <div className="font-label-md text-label-md text-on-surface leading-tight font-semibold">{usuario.nom_usu}</div>
                <div className="font-label-sm text-[11px] text-bronze-accent leading-tight tracking-wider uppercase">{usuario.rol_usu}</div>
              </div>
              <div className="w-9 h-9 rounded-full bg-secondary-container text-secondary ring-2 ring-outline-variant flex items-center justify-center font-label-md text-label-md font-semibold">
                {iniciales(usuario.nom_usu)}
              </div>
            </div>
          </div>
        </header>

        <main className="w-full pt-20 bg-background px-space-lg min-h-screen">
          <Outlet />
        </main>
      </div>
    </>
  )
}
