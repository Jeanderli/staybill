// Pantalla generada desde Google Stitch: "AQELION — Detalle de Factura & Vista PDF"
// Los datos son de ejemplo (el backend aún no tiene facturas ni huéspedes).
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function DetalleFactura() {
  const [menuAbierto, setMenuAbierto] = useState(false)

  // Cierra el menú de "Opciones" al hacer clic en cualquier otro lado
  useEffect(() => {
    if (!menuAbierto) return
    const cerrar = () => setMenuAbierto(false)
    document.addEventListener('click', cerrar)
    return () => document.removeEventListener('click', cerrar)
  }, [menuAbierto])

  return (
    <>
      <div className="flex flex-col w-full">
        {/* Interactive & Print Media CSS Styles */}
        {/* Top Action & Breadcrumb Sticky Bar */}
        <div className="no-print w-full bg-surface-container-lowest border border-outline-variant/60 shadow-[0_2px_12px_rgba(25,24,22,0.03)] px-space-lg py-3 flex flex-col md:flex-row md:items-center justify-between gap-space-md mb-space-lg rounded-xl mt-4">
          {/* Breadcrumb & Status */}
          <div className="flex flex-wrap items-center gap-space-sm">
            <Link className="inline-flex items-center gap-1.5 font-body-md text-[13px] text-warm-slate hover:text-obsidian transition-colors" to="/facturacion">
              <span className="material-symbols-outlined text-base">
                arrow_back
              </span>
              <span>
                Volver a Facturación
              </span>
            </Link>
            <span className="text-outline-variant font-body-md">
              /
            </span>
            <span className="font-headline-sm text-[17px] font-semibold text-obsidian tracking-tight">
              FAC-2024-10492
            </span>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-sage-status-bg text-sage-status border border-sage-status/20">
              <span className="w-1.5 h-1.5 rounded-full bg-sage-status animate-pulse" />
              <span className="font-label-caps text-[10px] uppercase tracking-wider font-semibold">
                Veri*Factu / SII Válido
              </span>
            </div>
            <span className="inline-flex items-center px-2 py-0.5 rounded bg-surface-container text-warm-slate border border-outline-variant/60 font-body-sm text-[11px] font-medium">
              Original v1.2
            </span>
          </div>
          {/* Direct Action Controls */}
          <div className="flex items-center gap-2.5 flex-wrap">
            <button className="inline-flex items-center gap-1.5 h-9 px-3.5 rounded-lg border border-outline-variant bg-surface-container-lowest hover:bg-surface-container-low text-obsidian font-body-md text-body-md transition-colors cursor-pointer" type="button" onClick={() => window.print()}>
              <span className="material-symbols-outlined text-base text-warm-slate">
                print
              </span>
              <span>
                Imprimir Factura
              </span>
            </button>
            <button className="inline-flex items-center gap-1.5 h-9 px-4 rounded-lg bg-obsidian hover:bg-obsidian/90 text-on-primary font-body-md text-body-md transition-colors shadow-sm cursor-pointer" id="downloadPdfBtn" type="button" onClick={() => window.print()}>
              <span className="material-symbols-outlined text-base text-champagne">
                picture_as_pdf
              </span>
              <span>
                Descargar PDF
              </span>
            </button>
            <div className="relative inline-block text-left" id="moreActionsDropdown">
              <button className="inline-flex items-center gap-1 h-9 px-3 rounded-lg border border-outline-variant/70 bg-surface-container-low hover:bg-surface-container text-obsidian font-body-md text-body-md transition-colors cursor-pointer" id="dropdownToggleBtn" type="button" onClick={(e) => { e.stopPropagation(); setMenuAbierto(!menuAbierto) }}>
                <span className="material-symbols-outlined text-base text-warm-slate">
                  more_horiz
                </span>
                <span className="hidden sm:inline">
                  Opciones
                </span>
              </button>
              <div className={`${menuAbierto ? '' : 'hidden'} absolute right-0 mt-2 w-56 rounded-xl bg-surface-container-lowest border border-outline-variant shadow-lg z-50 py-1.5 transition-all`} id="dropdownMenu">
                <a className="flex items-center gap-2.5 px-4 py-2 font-body-md text-body-md text-obsidian hover:bg-surface-container-low" href="#">
                  <span className="material-symbols-outlined text-base text-secondary">
                    mail
                  </span>
                  <span>
                    Enviar por Email
                  </span>
                </a>
                {' '}
                <a className="flex items-center gap-2.5 px-4 py-2 font-body-md text-body-md text-obsidian hover:bg-surface-container-low" href="#">
                  <span className="material-symbols-outlined text-base text-warm-slate">
                    code
                  </span>
                  <span>
                    Descargar XML / Facturae
                  </span>
                </a>
                {' '}
                <a className="flex items-center gap-2.5 px-4 py-2 font-body-md text-body-md text-obsidian hover:bg-surface-container-low" href="#">
                  <span className="material-symbols-outlined text-base text-warm-slate">
                    qr_code_2
                  </span>
                  <span>
                    Ficha Técnica Veri*Factu
                  </span>
                </a>
                <div className="my-1 border-t border-outline-variant" />
                <a className="flex items-center gap-2.5 px-4 py-2 font-body-md text-body-md text-error hover:bg-error-container hover:text-on-error-container" href="#">
                  <span className="material-symbols-outlined text-base">
                    restart_alt
                  </span>
                  <span>
                    Generar Nota de Crédito
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Workspace Grid (Document Canvas + Audit Sidebar) */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start pb-space-xl">
          {/* A4 Document Canvas Wrapper (8 Cols Desktop) */}
          <div className="xl:col-span-8 flex justify-center w-full">
            <div className="w-full max-w-[850px] bg-surface-container-lowest border border-outline-variant shadow-[0_4px_24px_rgba(25,24,22,0.04)] rounded-lg p-6 sm:p-10 md:p-12 text-on-surface" id="print-area">
              {/* Document Top Branding & Fiscal Header */}
              <div className="flex flex-col md:flex-row justify-between items-start gap-6 pb-6 border-b border-outline-variant">
                {/* Hotel Issuer Identity */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-obsidian text-champagne flex items-center justify-center shadow-sm">
                      <span className="material-symbols-outlined text-2xl">
                        hotel_class
                      </span>
                    </div>
                    <div>
                      <span className="font-headline-lg text-[22px] tracking-tight text-obsidian block leading-tight">
                        AQELION GRAND MIRAMAR
                      </span>
                      {' '}
                      <span className="font-label-caps text-[10px] uppercase tracking-widest text-secondary block mt-0.5">
                        Luxury Resort &amp; Thalasso Palace
                      </span>
                    </div>
                  </div>
                  <div className="pt-2 text-warm-slate font-body-sm text-body-sm leading-relaxed space-y-0.5">
                    <p className="font-semibold text-obsidian">
                      AQELION HOSPITALITY SUITES S.L.
                    </p>
                    <p>
                      NIF/CIF:
                      {' '}
                      <span className="font-medium text-obsidian">
                        B-84920194
                      </span>
                      {' '}
                      · Reg. Turístico: H-MA-01429
                    </p>
                    <p>
                      Paseo Marítimo Pablo Picasso, 142 · 29016 Málaga (España)
                    </p>
                    <p>
                      Tel: +34 951 882 000 · Email: billing@aqelion-miramar.com
                    </p>
                    <p className="text-[11px] text-warm-slate/80">
                      Reg. Mercantil de Málaga, Tomo 4.819, Folio 112, Hoja MA-99120
                    </p>
                  </div>
                </div>
                {/* Document Voucher Box */}
                <div className="w-full md:w-auto bg-surface-container-low/70 border border-outline-variant/80 rounded-xl p-4 sm:p-5 flex flex-col gap-2 min-w-[270px]">
                  <div className="flex items-center justify-between gap-2 border-b border-outline-variant pb-2">
                    <span className="font-label-caps text-[10px] uppercase tracking-widest text-warm-slate font-semibold">
                      Comprobante Fiscal
                    </span>
                    <span className="px-2 py-0.5 rounded bg-sage-status-bg text-sage-status border border-sage-status/20 font-label-caps text-[10px] tracking-wider font-semibold">
                      PAGADA
                    </span>
                  </div>
                  <div>
                    <span className="font-label-caps text-[10px] text-warm-slate uppercase tracking-wider block">
                      Factura Ordinaria
                    </span>
                    <p className="font-headline-md text-headline-md text-obsidian tracking-tight leading-none mt-1">
                      FAC-2024-10492
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 pt-2 text-warm-slate font-body-sm text-body-sm">
                    <div>
                      <span className="font-body-sm text-[11px] block text-warm-slate/80">
                        Fecha Emisión:
                      </span>
                      {' '}
                      <span className="text-obsidian font-medium">
                        24/10/2024 10:30
                      </span>
                    </div>
                    <div>
                      <span className="font-body-sm text-[11px] block text-warm-slate/80">
                        Fecha Devengo:
                      </span>
                      {' '}
                      <span className="text-obsidian font-medium">
                        24/10/2024
                      </span>
                    </div>
                    <div className="col-span-2 pt-1 border-t border-outline-variant/70">
                      <span className="font-body-sm text-[11px] block text-warm-slate/80">
                        Código Seguro Verificación (CSV):
                      </span>
                      {' '}
                      <span className="font-mono text-[11px] text-obsidian">
                        CSV-9948-AK82-10492-X
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Client Information & Reservation Context (Two Column Card) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-6">
                {/* Client Details */}
                <div className="bg-surface-container-low/40 border border-outline-variant/80 rounded-xl p-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-outline-variant">
                      <span className="font-label-caps text-[10px] uppercase tracking-wider text-secondary font-semibold">
                        Facturar a (Cliente / Huésped)
                      </span>
                      <span className="material-symbols-outlined text-base text-secondary">
                        corporate_fare
                      </span>
                    </div>
                    <p className="font-headline-sm text-headline-sm text-obsidian leading-snug">
                      Grand Travel Agency S.L.
                    </p>
                    <p className="font-body-sm text-body-sm text-warm-slate mt-0.5">
                      Huésped principal:
                      {' '}
                      <strong className="text-obsidian font-medium">
                        Elena Rostova
                      </strong>
                      {' '}
                      &amp; Acompañante
                    </p>
                    <div className="mt-3 space-y-1 font-body-sm text-body-sm text-warm-slate">
                      <p>
                        NIF/CIF:
                        {' '}
                        <span className="text-obsidian font-medium">
                          B-84920194
                        </span>
                        {' '}
                        · DNI/Pas: 49201948-K
                      </p>
                      <p>
                        Av. Diagonal 640, 6º Planta · 08017 Barcelona (España)
                      </p>
                      <p>
                        Email: facturacion@grandtravel.com
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 pt-2 border-t border-outline-variant flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    <span className="text-[12px] text-warm-slate">
                      Cuenta Comercial VIP Corporate Tier 1
                    </span>
                  </div>
                </div>
                {/* Stay & Room Reservation Info */}
                <div className="bg-surface-container-low/40 border border-outline-variant/80 rounded-xl p-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-outline-variant">
                      <span className="font-label-caps text-[10px] uppercase tracking-wider text-secondary font-semibold">
                        Detalles de Estancia &amp; PMS
                      </span>
                      <span className="material-symbols-outlined text-base text-secondary">
                        meeting_room
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[11px] text-warm-slate/80 uppercase font-label-caps">
                          Alojamiento
                        </span>
                        <p className="font-headline-sm text-headline-sm text-obsidian">
                          Suite Presidencial 402
                        </p>
                        <p className="text-[12px] text-warm-slate">
                          Ocean Deluxe Wing · Cama King Size
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-[11px] text-warm-slate/80 uppercase font-label-caps">
                          Folio PMS
                        </span>
                        <p className="font-body-md text-body-md font-semibold text-secondary">
                          #FOL-2024-0310
                        </p>
                        <p className="text-[12px] text-warm-slate">
                          Res: RES-88491
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mt-3 pt-2 border-t border-outline-variant text-warm-slate font-body-sm text-body-sm">
                      <div>
                        <span className="block text-[11px] text-warm-slate/80">
                          Check-in:
                        </span>
                        {' '}
                        <span className="text-obsidian font-medium">
                          19 Oct 2024 (15:00)
                        </span>
                      </div>
                      <div>
                        <span className="block text-[11px] text-warm-slate/80">
                          Check-out:
                        </span>
                        {' '}
                        <span className="text-obsidian font-medium">
                          24 Oct 2024 (10:00)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 pt-2 border-t border-outline-variant flex items-center justify-between text-[12px] text-warm-slate">
                    <span>
                      Duración:
                      {' '}
                      <strong className="text-obsidian font-medium">
                        5 Noches / 2 Huéspedes
                      </strong>
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface-container-high border border-outline-variant text-[11px] font-medium text-obsidian">
                      Aloj. + Desayuno Buffet
                    </span>
                  </div>
                </div>
              </div>
              {/* Breakdown Ledger Table */}
              <div className="mt-2 overflow-x-auto rounded-xl border border-outline-variant">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-surface-container-low text-warm-slate font-label-caps text-[10px] uppercase tracking-wider border-b border-outline-variant">
                      <th className="py-3 px-3">
                        Fecha
                      </th>
                      <th className="py-3 px-3">
                        Concepto / Servicio Hotelero
                      </th>
                      <th className="py-3 px-2 text-center">
                        Cant.
                      </th>
                      <th className="py-3 px-3 text-right">
                        Precio Ud.
                      </th>
                      <th className="py-3 px-2 text-center">
                        Dto.
                      </th>
                      <th className="py-3 px-3 text-right">
                        Base Imp.
                      </th>
                      <th className="py-3 px-2 text-center">
                        IVA
                      </th>
                      <th className="py-3 px-3 text-right">
                        Subtotal
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant font-body-sm text-body-sm">
                    {/* Item 1: Alojamiento */}
                    <tr className="hover:bg-surface-container-low/40 transition-colors">
                      <td className="py-3.5 px-3 text-warm-slate whitespace-nowrap align-top">
                        19-24 Oct
                      </td>
                      <td className="py-3.5 px-3 align-top">
                        <span className="font-medium text-obsidian block text-[14px]">
                          Alojamiento Suite Presidencial 402
                        </span>
                        {' '}
                        <span className="text-warm-slate text-[12px]">
                          Estancia 5 noches · Tarifa VIP Corporate contratada
                        </span>
                      </td>
                      <td className="py-3.5 px-2 text-center align-top font-medium text-obsidian">
                        5
                      </td>
                      <td className="py-3.5 px-3 text-right align-top font-mono text-[13px] text-obsidian">
                        320,00 €
                      </td>
                      <td className="py-3.5 px-2 text-center align-top text-warm-slate">
                        0%
                      </td>
                      <td className="py-3.5 px-3 text-right align-top font-mono text-[13px] text-obsidian">
                        1.600,00 €
                      </td>
                      <td className="py-3.5 px-2 text-center align-top">
                        <span className="px-1.5 py-0.5 rounded bg-surface-container text-obsidian font-mono text-[11px] font-medium border border-outline-variant/60">
                          10%
                        </span>
                      </td>
                      <td className="py-3.5 px-3 text-right align-top font-medium text-obsidian font-mono text-[14px]">
                        1.760,00 €
                      </td>
                    </tr>
                    {/* Item 2: Restauración */}
                    <tr className="hover:bg-surface-container-low/40 transition-colors">
                      <td className="py-3.5 px-3 text-warm-slate whitespace-nowrap align-top">
                        20 Oct
                      </td>
                      <td className="py-3.5 px-3 align-top">
                        <span className="font-medium text-obsidian block text-[14px]">
                          Restaurante "L'Horizon" · Menú Degustación
                        </span>
                        {' '}
                        <span className="text-warm-slate text-[12px]">
                          Ticket POS Comanda #9412 · Cargo directo a folio
                        </span>
                      </td>
                      <td className="py-3.5 px-2 text-center align-top font-medium text-obsidian">
                        2
                      </td>
                      <td className="py-3.5 px-3 text-right align-top font-mono text-[13px] text-obsidian">
                        65,00 €
                      </td>
                      <td className="py-3.5 px-2 text-center align-top text-warm-slate">
                        0%
                      </td>
                      <td className="py-3.5 px-3 text-right align-top font-mono text-[13px] text-obsidian">
                        130,00 €
                      </td>
                      <td className="py-3.5 px-2 text-center align-top">
                        <span className="px-1.5 py-0.5 rounded bg-surface-container text-obsidian font-mono text-[11px] font-medium border border-outline-variant/60">
                          10%
                        </span>
                      </td>
                      <td className="py-3.5 px-3 text-right align-top font-medium text-obsidian font-mono text-[14px]">
                        143,00 €
                      </td>
                    </tr>
                    {/* Item 3: Spa */}
                    <tr className="hover:bg-surface-container-low/40 transition-colors">
                      <td className="py-3.5 px-3 text-warm-slate whitespace-nowrap align-top">
                        21 Oct
                      </td>
                      <td className="py-3.5 px-3 align-top">
                        <span className="font-medium text-obsidian block text-[14px]">
                          Spa &amp; Wellness Circuit + Masaje Dúo
                        </span>
                        {' '}
                        <span className="text-warm-slate text-[12px]">
                          Tratamiento termal de hidroterapia 90 min
                        </span>
                      </td>
                      <td className="py-3.5 px-2 text-center align-top font-medium text-obsidian">
                        1
                      </td>
                      <td className="py-3.5 px-3 text-right align-top font-mono text-[13px] text-obsidian">
                        120,00 €
                      </td>
                      <td className="py-3.5 px-2 text-center align-top text-warm-slate">
                        0%
                      </td>
                      <td className="py-3.5 px-3 text-right align-top font-mono text-[13px] text-obsidian">
                        120,00 €
                      </td>
                      <td className="py-3.5 px-2 text-center align-top">
                        <span className="px-1.5 py-0.5 rounded bg-surface-container-high text-obsidian font-mono text-[11px] font-medium border border-outline-variant/60">
                          21%
                        </span>
                      </td>
                      <td className="py-3.5 px-3 text-right align-top font-medium text-obsidian font-mono text-[14px]">
                        145,20 €
                      </td>
                    </tr>
                    {/* Item 4: Minibar */}
                    <tr className="hover:bg-surface-container-low/40 transition-colors">
                      <td className="py-3.5 px-3 text-warm-slate whitespace-nowrap align-top">
                        22 Oct
                      </td>
                      <td className="py-3.5 px-3 align-top">
                        <span className="font-medium text-obsidian block text-[14px]">
                          Minibar Premium Habitación 402
                        </span>
                        {' '}
                        <span className="text-warm-slate text-[12px]">
                          Botella Cava Brut Nature &amp; Frutos secos selección
                        </span>
                      </td>
                      <td className="py-3.5 px-2 text-center align-top font-medium text-obsidian">
                        1
                      </td>
                      <td className="py-3.5 px-3 text-right align-top font-mono text-[13px] text-obsidian">
                        35,00 €
                      </td>
                      <td className="py-3.5 px-2 text-center align-top text-warm-slate">
                        0%
                      </td>
                      <td className="py-3.5 px-3 text-right align-top font-mono text-[13px] text-obsidian">
                        35,00 €
                      </td>
                      <td className="py-3.5 px-2 text-center align-top">
                        <span className="px-1.5 py-0.5 rounded bg-surface-container-high text-obsidian font-mono text-[11px] font-medium border border-outline-variant/60">
                          21%
                        </span>
                      </td>
                      <td className="py-3.5 px-3 text-right align-top font-medium text-obsidian font-mono text-[14px]">
                        42,35 €
                      </td>
                    </tr>
                    {/* Item 5: Transfer */}
                    <tr className="hover:bg-surface-container-low/40 transition-colors">
                      <td className="py-3.5 px-3 text-warm-slate whitespace-nowrap align-top">
                        23 Oct
                      </td>
                      <td className="py-3.5 px-3 align-top">
                        <span className="font-medium text-obsidian block text-[14px]">
                          Chauffeur Privado Aeropuerto AGP
                        </span>
                        {' '}
                        <span className="text-warm-slate text-[12px]">
                          Vehículo Mercedes Clase V ejecutivo · Trayecto ida
                        </span>
                      </td>
                      <td className="py-3.5 px-2 text-center align-top font-medium text-obsidian">
                        1
                      </td>
                      <td className="py-3.5 px-3 text-right align-top font-mono text-[13px] text-obsidian">
                        75,00 €
                      </td>
                      <td className="py-3.5 px-2 text-center align-top text-warm-slate">
                        0%
                      </td>
                      <td className="py-3.5 px-3 text-right align-top font-mono text-[13px] text-obsidian">
                        75,00 €
                      </td>
                      <td className="py-3.5 px-2 text-center align-top">
                        <span className="px-1.5 py-0.5 rounded bg-surface-container-high text-obsidian font-mono text-[11px] font-medium border border-outline-variant/60">
                          21%
                        </span>
                      </td>
                      <td className="py-3.5 px-3 text-right align-top font-medium text-obsidian font-mono text-[14px]">
                        90,75 €
                      </td>
                    </tr>
                    {/* Item 6: Tasa Turística */}
                    <tr className="hover:bg-surface-container-low/40 transition-colors">
                      <td className="py-3.5 px-3 text-warm-slate whitespace-nowrap align-top">
                        19-24 Oct
                      </td>
                      <td className="py-3.5 px-3 align-top">
                        <span className="font-medium text-obsidian block text-[14px]">
                          Impuesto sobre Estancias en Alojamientos Turísticos
                        </span>
                        {' '}
                        <span className="text-warm-slate text-[12px]">
                          Tasa legal obligatoria: 4,00 € por noche y huésped (5 n x 2 p)
                        </span>
                      </td>
                      <td className="py-3.5 px-2 text-center align-top font-medium text-obsidian">
                        10
                      </td>
                      <td className="py-3.5 px-3 text-right align-top font-mono text-[13px] text-obsidian">
                        4,00 €
                      </td>
                      <td className="py-3.5 px-2 text-center align-top text-warm-slate">
                        0%
                      </td>
                      <td className="py-3.5 px-3 text-right align-top font-mono text-[13px] text-obsidian">
                        40,00 €
                      </td>
                      <td className="py-3.5 px-2 text-center align-top">
                        <span className="px-1.5 py-0.5 rounded bg-surface-container text-warm-slate font-mono text-[11px] border border-outline-variant/60">
                          Exento
                        </span>
                      </td>
                      <td className="py-3.5 px-3 text-right align-top font-medium text-obsidian font-mono text-[14px]">
                        40,00 €
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* Financial Totals & Tax Table Split */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-6 pt-4 border-t border-outline-variant">
                {/* Tax Breakdown Matrix (Left 7 cols) */}
                <div className="md:col-span-7 space-y-3">
                  <span className="font-label-caps text-[10px] uppercase tracking-wider text-warm-slate font-semibold">
                    Desglose Tributario (Régimen General)
                  </span>
                  <div className="rounded-xl overflow-hidden border border-outline-variant bg-surface-container-lowest">
                    <table className="w-full text-left text-[12px]">
                      <thead>
                        <tr className="bg-surface-container-low text-warm-slate font-label-caps text-[10px] uppercase border-b border-outline-variant">
                          <th className="py-2.5 px-3">
                            Régimen / Tipo
                          </th>
                          <th className="py-2.5 px-3 text-right">
                            Base Imponible
                          </th>
                          <th className="py-2.5 px-3 text-right">
                            Cuota Impuesto
                          </th>
                          <th className="py-2.5 px-3 text-right">
                            Total Tramo
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-outline-variant">
                        <tr>
                          <td className="py-2.5 px-3 text-obsidian font-medium">
                            IVA Reducido Hostelería (10%)
                          </td>
                          <td className="py-2.5 px-3 text-right text-warm-slate font-mono">
                            1.730,00 €
                          </td>
                          <td className="py-2.5 px-3 text-right text-obsidian font-mono">
                            173,00 €
                          </td>
                          <td className="py-2.5 px-3 text-right text-obsidian font-mono font-semibold">
                            1.903,00 €
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2.5 px-3 text-obsidian font-medium">
                            IVA General Servicios (21%)
                          </td>
                          <td className="py-2.5 px-3 text-right text-warm-slate font-mono">
                            230,00 €
                          </td>
                          <td className="py-2.5 px-3 text-right text-obsidian font-mono">
                            48,30 €
                          </td>
                          <td className="py-2.5 px-3 text-right text-obsidian font-mono font-semibold">
                            278,30 €
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2.5 px-3 text-warm-slate">
                            Tasa Turística / Exento (0%)
                          </td>
                          <td className="py-2.5 px-3 text-right text-warm-slate font-mono">
                            40,00 €
                          </td>
                          <td className="py-2.5 px-3 text-right text-warm-slate/70 font-mono">
                            0,00 €
                          </td>
                          <td className="py-2.5 px-3 text-right text-obsidian font-mono font-semibold">
                            40,00 €
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* Payment Confirmation Note */}
                  <div className="p-3.5 bg-surface-container-low/70 border border-outline-variant/80 rounded-xl flex items-center justify-between gap-3 text-warm-slate font-body-sm text-body-sm">
                    <div className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-xl text-sage-status">
                        credit_card
                      </span>
                      <div>
                        <p className="font-medium text-obsidian">
                          Cobro Concluído: Visa Corp **** 4821
                        </p>
                        <p className="text-[12px] text-warm-slate">
                          Liquidación ID: TX-78192 · Terminal POS 02-FrontDesk
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-label-caps text-[10px] text-sage-status uppercase tracking-wider block font-semibold">
                        Saldo Pendiente
                      </span>
                      {' '}
                      <span className="font-headline-sm text-headline-sm text-sage-status font-mono font-semibold">
                        0,00 €
                      </span>
                    </div>
                  </div>
                </div>
                {/* Final Aggregate Totals (Right 5 cols) */}
                <div className="md:col-span-5 bg-surface-container-low/70 border border-outline-variant/80 rounded-xl p-5 flex flex-col justify-between">
                  <div className="space-y-2.5 text-warm-slate font-body-sm text-body-sm">
                    <div className="flex justify-between items-center">
                      <span>
                        Base Imponible Neta:
                      </span>
                      <span className="font-mono text-[14px] text-obsidian font-medium">
                        2.000,00 €
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>
                        Total IVA Repercutido:
                      </span>
                      <span className="font-mono text-[14px] text-obsidian font-medium">
                        221,30 €
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>
                        Tasas Turísticas Exentas:
                      </span>
                      <span className="font-mono text-[14px] text-obsidian font-medium">
                        40,00 €
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-warm-slate/70 text-[12px]">
                      <span>
                        Descuentos y Bonificaciones:
                      </span>
                      <span className="font-mono">
                        0,00 €
                      </span>
                    </div>
                  </div>
                  <div className="pt-4 mt-4 border-t border-outline-variant">
                    <div className="flex justify-between items-baseline">
                      <span className="font-label-caps text-[11px] uppercase tracking-widest text-warm-slate font-bold">
                        TOTAL FACTURA
                      </span>
                      <div className="text-right">
                        <span className="font-headline-lg text-[28px] text-obsidian font-bold tracking-tight">
                          2.261,30 €
                        </span>
                        {' '}
                        <span className="block text-[11px] text-warm-slate mt-0.5">
                          Impuestos incluidos según legislación vigente
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Official Veri*Factu Seal & Legal Regulatory Footer */}
              <div className="mt-8 pt-6 border-t border-outline-variant grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                {/* Official QR Code representation */}
                <div className="md:col-span-3 flex flex-col items-center sm:items-start">
                  <div className="p-2 bg-surface-container-lowest border border-outline-variant rounded-lg shadow-sm">
                    {/* Geometric SVG representing official Veri*Factu QR */}
                    <svg className="w-24 h-24 text-obsidian" fill="currentColor" viewBox="0 0 100 100">
                      <path d="M0 0h32v32H0zM6 6h20v20H6zm4 4h12v12H10zm58-10h32v32H68zM74 6h20v20H74zm4 4h12v12H78zM0 68h32v32H0zm6 6h20v20H6zm4 4h12v12H10zm40-74h12v12H50zm-10 18h10v10H40zm20 0h12v10H60zm-30 8h8v16h-8zm18 6h12v8H48zm18 0h16v6H66zm16 10h18v16H82zm-22 10h14v8H60zm-20 8h10v12H40zm16 8h16v14H56zm28 0h16v16H84zm-44 8h12v8H40z" />
                    </svg>
                  </div>
                  <span className="text-[10px] text-warm-slate uppercase tracking-wider mt-1.5 font-label-caps text-center sm:text-left font-semibold">
                    Veri*Factu AEAT · Ley 11/2021
                  </span>
                </div>
                {/* Blockchain Ledger & Security Footprint */}
                <div className="md:col-span-9 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-base">
                      verified
                    </span>
                    <span className="font-label-caps text-[11px] uppercase tracking-wide text-obsidian font-bold">
                      Comprobante con Huella Digital Criptográfica Encadenada
                    </span>
                  </div>
                  <p className="font-mono text-[10px] text-warm-slate leading-tight break-all">
                    SHA256: 8f492b6a9c118471e4cb8008d519ac29031efaa026d36ef581dc4177d85c49b0 | Firma: CERT-FNMT-948102-AQELION-2024
                  </p>
                  <p className="font-body-sm text-body-sm text-[11px] text-warm-slate leading-relaxed">
                    AQELION HOSPITALITY SUITES S.L., de conformidad con el RGPD (UE) 2016/679, trata sus datos para la prestación del servicio de alojamiento y cumplimiento de obligaciones fiscales y contables. Dispone de derechos de acceso, rectificación y supresión enviando un correo a dpo@aqelion-miramar.com. Este documento electrónico tiene plena validez fiscal y mercantil conforme al RD 1619/2012.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Audit Sidebar & Fiscal Traceability Panel (4 Cols Desktop - Non Print) */}
          <div className="xl:col-span-4 no-print space-y-space-md w-full">
            {/* Quick Status Card */}
            <div className="bg-surface-container-lowest border border-outline-variant/80 rounded-xl p-space-md shadow-[0_2px_12px_rgba(25,24,22,0.03)]">
              <div className="flex items-center justify-between pb-space-sm mb-space-sm border-b border-outline-variant">
                <span className="font-label-caps text-[10px] uppercase tracking-wider text-warm-slate font-semibold">
                  Estado en la Agencia Tributaria
                </span>
                <span className="material-symbols-outlined text-sage-status text-xl">
                  cloud_done
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-sage-status-bg border border-sage-status/20 flex items-center justify-center text-sage-status">
                  <span className="material-symbols-outlined text-lg">
                    check
                  </span>
                </div>
                <div>
                  <span className="font-headline-sm text-[16px] font-semibold text-obsidian block leading-tight">
                    Transmitida con Éxito
                  </span>
                  {' '}
                  <span className="font-body-sm text-[12px] text-warm-slate">
                    Entrada Registro SII: #SII-20241024-00918
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-outline-variant text-[12px]">
                <div>
                  <span className="text-warm-slate/80 block text-[11px]">
                    Latencia respuesta:
                  </span>
                  {' '}
                  <span className="font-mono text-obsidian font-semibold">
                    142 ms
                  </span>
                </div>
                <div>
                  <span className="text-warm-slate/80 block text-[11px]">
                    Certificado:
                  </span>
                  {' '}
                  <span className="text-obsidian font-medium">
                    AC FNMT Usuarios
                  </span>
                </div>
              </div>
            </div>
            {/* Historical Event Timeline Card */}
            <div className="bg-surface-container-lowest border border-outline-variant/80 rounded-xl p-space-md shadow-[0_2px_12px_rgba(25,24,22,0.03)]">
              <span className="font-label-caps text-[10px] uppercase tracking-wider text-warm-slate font-semibold block mb-space-md">
                Historial de Eventos del Documento
              </span>
              <div className="relative pl-5 space-y-4 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-outline-variant">
                {/* Event 1 */}
                <div className="relative">
                  <span className="absolute -left-5 top-1 w-2.5 h-2.5 rounded-full bg-sage-status ring-4 ring-surface-container-lowest" />
                  <div className="flex flex-col">
                    <span className="font-medium text-obsidian text-[13px]">
                      Verificación Veri*Factu SII Aceptada
                    </span>
                    <span className="text-[11px] text-warm-slate">
                      Hoy, 10:31:04 · Servidor AEAT Producción
                    </span>
                  </div>
                </div>
                {/* Event 2 */}
                <div className="relative">
                  <span className="absolute -left-5 top-1 w-2.5 h-2.5 rounded-full bg-secondary ring-4 ring-surface-container-lowest" />
                  <div className="flex flex-col">
                    <span className="font-medium text-obsidian text-[13px]">
                      Factura Generada &amp; Firmada Digitalmente
                    </span>
                    <span className="text-[11px] text-warm-slate">
                      Hoy, 10:30:12 · Por Alejandro Morales (Recepción)
                    </span>
                  </div>
                </div>
                {/* Event 3 */}
                <div className="relative">
                  <span className="absolute -left-5 top-1 w-2.5 h-2.5 rounded-full bg-obsidian ring-4 ring-surface-container-lowest" />
                  <div className="flex flex-col">
                    <span className="font-medium text-obsidian text-[13px]">
                      Cobro Total Asentado Folio #FOL-2024-0310
                    </span>
                    <span className="text-[11px] text-warm-slate">
                      Hoy, 09:15:20 · TPVM Visa Corp (2.261,30 €)
                    </span>
                  </div>
                </div>
                {/* Event 4 */}
                <div className="relative">
                  <span className="absolute -left-5 top-1 w-2.5 h-2.5 rounded-full bg-outline-variant ring-4 ring-surface-container-lowest" />
                  <div className="flex flex-col">
                    <span className="font-medium text-warm-slate text-[13px]">
                      Check-out Efectuado Hab. 402
                    </span>
                    <span className="text-[11px] text-warm-slate/70">
                      Hoy, 09:05:00 · Llaves electrónicas devueltas
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Email Delivery Status Card */}
            <div className="bg-surface-container-lowest border border-outline-variant/80 rounded-xl p-space-md shadow-[0_2px_12px_rgba(25,24,22,0.03)]">
              <div className="flex items-center justify-between mb-3">
                <span className="font-label-caps text-[10px] uppercase tracking-wider text-warm-slate font-semibold">
                  Envío Telemático
                </span>
                <span className="px-2 py-0.5 rounded bg-sage-status-bg text-sage-status border border-sage-status/20 font-label-caps text-[10px] font-semibold">
                  Entregado
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-obsidian">
                Copia en formato PDF y Facturae XML enviada a:
              </p>
              <div className="mt-2 p-2.5 bg-surface-container-low border border-outline-variant/70 rounded-lg flex items-center justify-between">
                <span className="font-mono text-[12px] text-obsidian truncate">
                  facturacion@grandtravel.com
                </span>
                <span className="material-symbols-outlined text-base text-sage-status">
                  done_all
                </span>
              </div>
              <p className="text-[11px] text-warm-slate mt-1.5">
                Abierto por el destinatario a las 10:44 hrs
              </p>
              <button className="w-full mt-3 h-8 rounded-lg border border-outline-variant bg-surface-container-low hover:bg-surface-container text-obsidian font-body-md text-[13px] transition-colors flex items-center justify-center gap-1.5 cursor-pointer">
                <span className="material-symbols-outlined text-base text-warm-slate">
                  forward_to_inbox
                </span>
                <span>
                  Reenviar a otro correo
                </span>
              </button>
            </div>
            {/* Quick Context Info (Hotel Room Photo Preview) */}
            <div className="bg-surface-container-lowest border border-outline-variant/80 rounded-xl p-space-md shadow-[0_2px_12px_rgba(25,24,22,0.03)] space-y-3">
              <span className="font-label-caps text-[10px] uppercase tracking-wider text-warm-slate font-semibold block">
                Referencia Habitacional
              </span>
              <div className="relative w-full h-32 rounded-lg overflow-hidden border border-outline-variant">
                <img className="w-full h-full object-cover" data-alt="Luxurious presidential hotel suite with ocean view balcony, plush king bed, marble floors, modern minimalist design with subtle navy and golden hues in bright daylight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxO21Ow8f0JHu6cDb8vtasKf5cytZzZu3btGT3pl5dMPmRo9-bs2ZMOJg2q79ClkWyNQxlmWPAjJfP9As2jr3iXWTopNV6B82Ff5fgHeQv4HuwUBs_IBq2r1a7N6whKVLC9NsfepLDKGeGHIAatNFYJp8ig2xmvKYah5UoMZHfh2ph2URHPuMXrkDYM6neqnEvYtcNe0jWCcZt4acaBVjmsExaMwETHpsiBcZijEtQ4sel-0tMyGqsjQ" />
                <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded bg-obsidian/85 backdrop-blur-sm text-on-primary font-body-sm text-[11px] font-medium border border-champagne/30">
                  Habitación 402 · Suite Presidencial
                </div>
              </div>
              <div className="flex items-center justify-between text-warm-slate font-body-sm text-body-sm">
                <span>
                  Servicio de Limpieza:
                </span>
                <span className="text-sage-status font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-sage-status" />
                  Revisada / Disponible
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Interactive Dropdown & Action Scripts */}
      </div>
    </>
  )
}
