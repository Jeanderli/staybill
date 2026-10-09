// Isotipo de AQELION (triángulo con círculo), tomado del diseño de Stitch
export default function Logo({ className = 'w-10 h-10' }) {
  return (
    <div className={`${className} rounded-xl bg-primary-container flex items-center justify-center p-2 shadow-md`}>
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
        <polygon fill="#c5a880" points="12 3 21 20 3 20" />
        <circle cx="12" cy="14" fill="#ffffff" r="3.5" />
      </svg>
    </div>
  )
}
