// Página temporal para las secciones del menú que todavía no tienen diseño
export default function Proximamente({ titulo }) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-32 gap-space-sm">
      <span className="material-symbols-outlined text-5xl text-bronze-accent">construction</span>
      <h1 className="font-headline-lg text-headline-lg text-on-surface">{titulo}</h1>
      <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
        Esta sección todavía está en construcción.
      </p>
    </div>
  )
}
