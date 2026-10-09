// Estructura de Login y Registro (diseño de Stitch: "AQELION — Iniciar Sesión")
import Logo from '../components/Logo'

const PUNTOS = [
  {
    icono: 'verified_user',
    titulo: 'Cumplimiento fiscal garantizado',
    texto: 'Emisión homologada de facturas con código QR dinámico y registro inalterable.',
  },
  {
    icono: 'sync_alt',
    titulo: 'Folios y huéspedes sincronizados',
    texto: 'Cargos de habitación, consumos y pagos en una sola cuenta por estadía.',
  },
  {
    icono: 'account_balance',
    titulo: 'Auditoría y cierre contable instantáneo',
    texto: 'Conciliación de depósitos, créditos de agencia y City Ledger con un clic.',
  },
]

export default function AuthLayout({ children }) {
  return (
    <main className="w-full min-h-screen bg-background flex items-center justify-center p-space-md">
      <div className="w-full max-w-6xl mx-auto overflow-hidden rounded-2xl bg-surface-container-lowest shadow-xl flex flex-col lg:flex-row">
        {/* Columna izquierda: marca */}
        <div className="hidden lg:flex w-5/12 bg-primary-container text-inverse-on-surface p-space-xl flex-col justify-between relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-champagne opacity-20 blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-sage opacity-20 blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="flex items-center gap-space-sm mb-space-xl">
              <Logo />
              <div className="flex items-baseline">
                <span className="font-headline-sm text-[22px] tracking-wider font-bold text-surface-container-lowest">AQELION</span>
                <span className="ml-1.5 font-label-sm text-label-sm text-champagne uppercase tracking-widest">Hospitality</span>
              </div>
            </div>

            <h1 className="font-display-lg text-[40px] leading-[48px] text-surface-container-lowest mb-space-md">
              Gestión de folios y facturación hotelera sin fricción.
            </h1>
            <p className="font-body-md text-body-md text-surface-dim opacity-90 max-w-sm mb-space-lg">
              Controla estadías, huéspedes y comprobantes desde un solo panel.
            </p>

            <div className="space-y-space-md">
              {PUNTOS.map((p) => (
                <div className="flex items-start gap-3" key={p.titulo}>
                  <div className="w-8 h-8 rounded-lg bg-surface-container/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-champagne" style={{ fontVariationSettings: "'FILL' 1" }}>
                      {p.icono}
                    </span>
                  </div>
                  <div>
                    <h2 className="font-label-md text-label-md text-surface-container-lowest font-medium">{p.titulo}</h2>
                    <p className="font-body-sm text-body-sm text-surface-dim opacity-80">{p.texto}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 pt-space-xl flex items-center gap-2 text-surface-dim opacity-75">
            <span className="material-symbols-outlined text-base">domain</span>
            <span className="font-body-sm text-body-sm">StayBill · Sistema de facturación hotelera</span>
          </div>
        </div>

        {/* Columna derecha: formulario */}
        <div className="w-full lg:w-7/12 bg-surface-container-lowest p-space-lg lg:p-space-xl flex flex-col justify-center">
          <div className="max-w-md w-full mx-auto py-space-lg">{children}</div>
        </div>
      </div>
    </main>
  )
}

// Campo de texto con ícono, como los inputs del diseño
export function Campo({ id, label, icono, hint, error, children, ...props }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <label className="font-label-md text-label-md font-medium text-on-surface" htmlFor={id}>
          {label}
        </label>
        {hint && <span className="font-label-sm text-label-sm text-on-surface-variant">{hint}</span>}
      </div>
      <div
        className={`relative flex items-center bg-surface-container-low rounded-xl px-3 py-2 shadow-sm focus-within:bg-surface-container-lowest focus-within:shadow-md transition-all border ${
          error ? 'border-error' : 'border-transparent'
        }`}
      >
        <span className="material-symbols-outlined text-on-surface-variant mr-2.5">{icono}</span>
        <input
          id={id}
          className="w-full bg-transparent border-0 p-0 font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:ring-0"
          {...props}
        />
        {children}
      </div>
      {error && <p className="mt-1 font-body-sm text-body-sm text-error">{error}</p>}
    </div>
  )
}

export function BotonVerPassword({ visible, onClick }) {
  return (
    <button
      className="p-1 hover:bg-surface-container rounded text-on-surface-variant focus:outline-none cursor-pointer"
      title={visible ? 'Ocultar contraseña' : 'Mostrar contraseña'}
      type="button"
      onClick={onClick}
    >
      <span className="material-symbols-outlined text-base">{visible ? 'visibility_off' : 'visibility'}</span>
    </button>
  )
}

export function Alerta({ tipo = 'error', children }) {
  const estilos = tipo === 'error' ? 'bg-error-container text-on-error-container' : 'bg-sage-light text-sage'
  return (
    <div className={`p-3 rounded-xl flex items-center gap-2 ${estilos}`} role="alert">
      <span className="material-symbols-outlined text-base">{tipo === 'error' ? 'error' : 'check_circle'}</span>
      <span className="font-body-sm text-body-sm">{children}</span>
    </div>
  )
}

export function BotonPrincipal({ cargando, textoCargando, children }) {
  return (
    <button
      className="w-full py-3 px-space-md bg-primary-container text-surface-container-lowest rounded-xl font-label-md text-label-md font-semibold tracking-wide shadow-md hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-champagne transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-wait"
      disabled={cargando}
      type="submit"
    >
      {cargando ? (
        <>
          <span className="material-symbols-outlined text-base animate-spin">progress_activity</span>
          <span>{textoCargando}</span>
        </>
      ) : (
        <>
          <span>{children}</span>
          <span className="material-symbols-outlined text-base">arrow_forward</span>
        </>
      )}
    </button>
  )
}
