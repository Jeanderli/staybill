// Pantalla generada desde Google Stitch: "AQELION — Facturación & Comprobantes"
// Los datos son de ejemplo (el backend aún no tiene facturas ni huéspedes).
import { useNavigate } from 'react-router-dom'

export default function Facturacion() {
  const navigate = useNavigate()
  const verDetalle = () => navigate('/facturacion/detalle')

  return (
    <>
      <div className="flex flex-col w-full pb-space-xl">
        {/* Sub-header / Operational Bar */}
        <section className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md py-space-md border-b border-[#e6e0d5]">
          <div className="flex flex-col">
            <div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-[11px] uppercase tracking-[0.14em] mb-1">
              <span>
                Gestión Financiera
              </span>
              <span className="text-[#c5a880]">
                /
              </span>
              <span className="text-[#755a34] font-semibold">
                Módulo Fiscal
              </span>
            </div>
            <h1 className="font-headline-lg text-3xl text-on-surface tracking-tight font-headline-md font-medium">
              Facturación &amp; Comprobantes Fiscales
            </h1>
            <p className="font-body-sm text-sm text-on-surface-variant mt-0.5">
              Emisión, control tributario y seguimiento de facturas electrónicas, boletas y notas de crédito con validación gubernamental.
            </p>
          </div>
          {/* Primary Actions */}
          <div className="flex flex-wrap items-center gap-space-sm">
            <button className="flex items-center gap-space-xs h-9 px-space-md bg-[#ffffff] border border-[#e6e0d5] text-[#191816] hover:bg-[#f6f3ee] hover:border-[#c5a880] rounded font-label-md text-xs uppercase tracking-wider transition-all shadow-[0_1px_2px_rgba(0,0,0,0.03)]" type="button">
              <span className="material-symbols-outlined text-base text-[#755a34]">
                cloud_sync
              </span>
              <span>
                Sincronizar AFIP / SAT / SII
              </span>
            </button>
            <button className="flex items-center gap-space-xs h-9 px-space-md bg-[#ffffff] border border-[#e6e0d5] text-[#191816] hover:bg-[#f6f3ee] rounded font-label-md text-xs uppercase tracking-wider transition-all shadow-[0_1px_2px_rgba(0,0,0,0.03)]" type="button">
              <span className="material-symbols-outlined text-base text-[#755a34]">
                download
              </span>
              <span>
                Libro Contable
              </span>
            </button>
            <button className="flex items-center gap-space-xs h-9 px-space-md bg-[#191816] text-[#ffffff] border border-[#c5a880] hover:bg-[#2a2824] transition-all rounded font-label-md text-xs uppercase tracking-wider shadow-sm" type="button">
              <span className="material-symbols-outlined text-base text-[#c5a880]">
                add_circle
              </span>
              <span>
                Emitir Nueva Factura
              </span>
            </button>
          </div>
        </section>
        {/* Metric Quick Cards (Institutional Restraint) */}
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-md my-space-md">
          <div className="bg-[#ffffff] rounded border border-[#ece7de] p-space-md shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="font-label-sm text-[11px] uppercase tracking-[0.14em] text-on-surface-variant font-medium">
                Facturado Este Mes
              </span>
              <span className="w-7 h-7 rounded bg-[#f4eedf] border border-[#e6e0d5] flex items-center justify-center text-[#755a34]">
                <span className="material-symbols-outlined text-sm">
                  payments
                </span>
              </span>
            </div>
            <div className="my-space-xs">
              <div className="font-currency-display text-3xl font-medium text-on-surface">
                128.450,20 €
              </div>
            </div>
            <div className="flex items-center gap-1.5 font-label-sm text-xs text-[#3b6e52]">
              <span className="material-symbols-outlined text-base">
                trending_up
              </span>
              <span>
                +8.4% vs período anterior
              </span>
            </div>
          </div>
          <div className="bg-[#ffffff] rounded border border-[#ece7de] p-space-md shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="font-label-sm text-[11px] uppercase tracking-[0.14em] text-on-surface-variant font-medium">
                IVA Declarado (Q4)
              </span>
              <span className="w-7 h-7 rounded bg-[#f4eedf] border border-[#e6e0d5] flex items-center justify-center text-[#755a34]">
                <span className="material-symbols-outlined text-sm">
                  account_balance
                </span>
              </span>
            </div>
            <div className="my-space-xs">
              <div className="font-currency-display text-3xl font-medium text-on-surface">
                26.974,54 €
              </div>
            </div>
            <div className="flex items-center gap-1.5 font-label-sm text-xs text-on-surface-variant">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#c5a880]" />
              <span>
                Tipo impositivo medio 21%
              </span>
            </div>
          </div>
          <div className="bg-[#ffffff] rounded border border-[#ece7de] p-space-md shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="font-label-sm text-[11px] uppercase tracking-[0.14em] text-on-surface-variant font-medium">
                Cobros Pendientes
              </span>
              <span className="w-7 h-7 rounded bg-[#fdf3e9] border border-[#fae2c8] flex items-center justify-center text-[#b46e28]">
                <span className="material-symbols-outlined text-sm">
                  hourglass_top
                </span>
              </span>
            </div>
            <div className="my-space-xs">
              <div className="font-currency-display text-3xl font-medium text-[#b46e28]">
                4.892,10 €
              </div>
            </div>
            <div className="flex items-center gap-1.5 font-label-sm text-xs text-on-surface-variant">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#b46e28]" />
              <span>
                3 folios en crédito corporativo
              </span>
            </div>
          </div>
          <div className="bg-[#ffffff] rounded border border-[#ece7de] p-space-md shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="font-label-sm text-[11px] uppercase tracking-[0.14em] text-on-surface-variant font-medium">
                Estado Pasarela Fiscal
              </span>
              <span className="w-7 h-7 rounded bg-[#edf5f0] border border-[#d2e7da] flex items-center justify-center text-[#3b6e52]">
                <span className="material-symbols-outlined text-sm">
                  verified_user
                </span>
              </span>
            </div>
            <div className="my-space-xs flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#3b6e52]" />
              <div className="font-headline-sm text-xl font-medium text-on-surface">
                Sincronizado
              </div>
            </div>
            <div className="flex items-center gap-1 font-label-sm text-xs text-on-surface-variant">
              <span>
                Último ping hace 2 min (SAT &amp; AEAT)
              </span>
            </div>
          </div>
        </section>
        {/* Filter & Utility Toolbar */}
        <section className="bg-[#ffffff] rounded border border-[#ece7de] p-space-sm shadow-[0_2px_8px_rgba(0,0,0,0.02)] mb-space-sm flex flex-col lg:flex-row items-center gap-space-sm">
          {/* Search Bar */}
          <div className="relative w-full lg:flex-1">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-base pointer-events-none">
              search
            </span>
            {' '}
            <input className="w-full h-9 pl-9 pr-4 rounded bg-[#fbf9f6] border border-[#e6e0d5] text-on-surface placeholder:text-outline font-body-sm text-xs focus:outline-none focus:border-[#c5a880] focus:bg-[#ffffff] transition-colors" placeholder="Buscar por folio, RFC/NIF, huésped, empresa o habitación..." type="text" />
          </div>
          {/* Segmented Filter Dropdowns */}
          <div className="flex flex-wrap items-center gap-space-xs w-full lg:w-auto">
            {/* Comprobante Selector */}
            <div className="relative flex-1 sm:flex-none">
              <select className="w-full sm:w-auto h-9 px-3 pr-8 rounded bg-[#fbf9f6] border border-[#e6e0d5] text-on-surface font-label-md text-xs appearance-none cursor-pointer focus:outline-none focus:border-[#c5a880]">
                <option value="all">
                  Tipo: Todos
                </option>
                <option value="fac_a">
                  Factura A (Corporativa)
                </option>
                <option value="fac_b">
                  Factura B (Consumidor)
                </option>
                <option value="boleta">
                  Boleta de Venta
                </option>
                <option value="nc">
                  Nota de Crédito (NC)
                </option>
              </select>
              {' '}
              <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-base">
                expand_more
              </span>
            </div>
            {/* Estado Selector */}
            <div className="relative flex-1 sm:flex-none">
              <select className="w-full sm:w-auto h-9 px-3 pr-8 rounded bg-[#fbf9f6] border border-[#e6e0d5] text-on-surface font-label-md text-xs appearance-none cursor-pointer focus:outline-none focus:border-[#c5a880]">
                <option value="all">
                  Estado: Todos
                </option>
                <option value="paid">
                  Pagado &amp; Emitido
                </option>
                <option value="pending">
                  Pendiente de Cobro
                </option>
                <option value="credit">
                  Crédito Abierto
                </option>
                <option value="canceled">
                  Anulada / NC
                </option>
              </select>
              {' '}
              <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-base">
                expand_more
              </span>
            </div>
            {/* Date Range Trigger */}
            <button className="h-9 px-3 rounded bg-[#fbf9f6] border border-[#e6e0d5] text-on-surface hover:bg-[#f5f1ea] font-label-md text-xs flex items-center gap-2" type="button">
              <span className="material-symbols-outlined text-sm text-[#755a34]">
                calendar_today
              </span>
              <span>
                20 Oct - 26 Oct 2024
              </span>
            </button>
            {/* Refresh / Reset */}
            <button className="h-9 w-9 flex items-center justify-center rounded bg-[#fbf9f6] border border-[#e6e0d5] text-on-surface-variant hover:text-on-surface hover:bg-[#f5f1ea] transition-colors" title="Restablecer filtros" type="button">
              <span className="material-symbols-outlined text-base">
                restart_alt
              </span>
            </button>
          </div>
        </section>
        {/* Financial Ledger Table */}
        <section className="bg-[#ffffff] rounded border border-[#ece7de] shadow-[0_2px_8px_rgba(0,0,0,0.02)] overflow-hidden mt-space-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#f6f3ee] border-b border-[#ece7de] text-[#636058] font-label-sm text-[11px] uppercase tracking-[0.12em]">
                  <th className="py-3 px-space-md font-semibold">
                    Folio Fiscal
                  </th>
                  <th className="py-3 px-space-md font-semibold">
                    Fecha &amp; Hora
                  </th>
                  <th className="py-3 px-space-md font-semibold">
                    Huésped / Razón Social
                  </th>
                  <th className="py-3 px-space-md font-semibold">
                    Concepto / Estadía
                  </th>
                  <th className="py-3 px-space-md text-right font-semibold">
                    Base Imponible
                  </th>
                  <th className="py-3 px-space-md text-right font-semibold">
                    Impuestos
                  </th>
                  <th className="py-3 px-space-md text-right font-semibold">
                    Total
                  </th>
                  <th className="py-3 px-space-md font-semibold">
                    Pago
                  </th>
                  <th className="py-3 px-space-md font-semibold">
                    Estado Fiscal
                  </th>
                  <th className="py-3 px-space-md text-center font-semibold">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#ece7de] text-on-surface font-body-sm text-xs">
                {/* Row 1 */}
                <tr className="hover:bg-[#fbf9f6] transition-colors group">
                  <td className="py-3.5 px-space-md whitespace-nowrap">
                    <div className="flex items-center gap-1.5 font-medium text-on-surface">
                      <span className="material-symbols-outlined text-[#755a34] text-sm">
                        receipt
                      </span>
                      <span className="tracking-tight font-semibold">
                        FAC-10492
                      </span>
                    </div>
                  </td>
                  <td className="py-3.5 px-space-md whitespace-nowrap text-on-surface-variant">
                    <div>
                      24 Oct 2024
                    </div>
                    <div className="text-[10px] text-[#8c877d]">
                      10:30 hrs
                    </div>
                  </td>
                  <td className="py-3.5 px-space-md">
                    <div className="font-medium text-on-surface">
                      Grand Travel Agency S.L.
                    </div>
                    <div className="font-label-sm text-[11px] text-on-surface-variant">
                      B-84920194 • Mayorista
                    </div>
                  </td>
                  <td className="py-3.5 px-space-md">
                    <div className="text-on-surface font-normal">
                      Suite Presidencial
                    </div>
                    <div className="text-on-surface-variant text-[11px]">
                      5 noches • Tarifa Corporativa VIP
                    </div>
                  </td>
                  <td className="py-3.5 px-space-md text-right font-currency-table text-xs whitespace-nowrap">
                    1.850,00 €
                  </td>
                  <td className="py-3.5 px-space-md text-right font-currency-table text-xs text-on-surface-variant whitespace-nowrap">
                    388,50 €
                    {' '}
                    <span className="text-[10px] text-[#8c877d]">
                      (21%)
                    </span>
                  </td>
                  <td className="py-3.5 px-space-md text-right whitespace-nowrap font-medium text-sm text-on-surface">
                    2.238,50 €
                  </td>
                  <td className="py-3.5 px-space-md whitespace-nowrap">
                    <span className="inline-flex items-center gap-1 text-on-surface-variant">
                      <span className="material-symbols-outlined text-sm text-[#755a34]">
                        account_balance
                      </span>
                      <span>
                        Transferencia
                      </span>
                    </span>
                  </td>
                  <td className="py-3.5 px-space-md whitespace-nowrap">
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded border border-[#d2e7da] font-label-sm text-[11px] bg-[#edf5f0] text-[#3b6e52]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3b6e52]" />
                      <span>
                        Emitida &amp; Declarada
                      </span>
                    </span>
                  </td>
                  <td className="py-3.5 px-space-md text-center whitespace-nowrap">
                    <div className="flex items-center justify-center gap-1">
                      <button className="p-1 rounded text-on-surface-variant hover:text-[#755a34] hover:bg-[#f6f3ee] transition-colors" title="Descargar PDF/XML" type="button">
                        <span className="material-symbols-outlined text-base">
                          download
                        </span>
                      </button>
                      <button className="p-1 rounded text-on-surface-variant hover:text-on-surface hover:bg-[#f6f3ee] transition-colors" title="Ver Detalle Folio" type="button" onClick={verDetalle}>
                        <span className="material-symbols-outlined text-base">
                          visibility
                        </span>
                      </button>
                      <button className="p-1 rounded text-on-surface-variant hover:text-on-surface hover:bg-[#f6f3ee] transition-colors" title="Reenviar por Email" type="button">
                        <span className="material-symbols-outlined text-base">
                          mail
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
                {/* Row 2 */}
                <tr className="bg-[#faf8f4]/60 hover:bg-[#fbf9f6] transition-colors group">
                  <td className="py-3.5 px-space-md whitespace-nowrap">
                    <div className="flex items-center gap-1.5 font-medium text-on-surface">
                      <span className="material-symbols-outlined text-[#755a34] text-sm">
                        receipt
                      </span>
                      <span className="tracking-tight font-semibold">
                        FAC-10491
                      </span>
                    </div>
                  </td>
                  <td className="py-3.5 px-space-md whitespace-nowrap text-on-surface-variant">
                    <div>
                      24 Oct 2024
                    </div>
                    <div className="text-[10px] text-[#8c877d]">
                      09:15 hrs
                    </div>
                  </td>
                  <td className="py-3.5 px-space-md">
                    <div className="font-medium text-on-surface">
                      Ing. Roberto Gómez
                    </div>
                    <div className="font-label-sm text-[11px] text-on-surface-variant">
                      45.892.110-K • Huésped Registrado
                    </div>
                  </td>
                  <td className="py-3.5 px-space-md">
                    <div className="text-on-surface font-normal">
                      Hab. Ejecutiva 312
                    </div>
                    <div className="text-on-surface-variant text-[11px]">
                      2 noches + Room Service Minibar
                    </div>
                  </td>
                  <td className="py-3.5 px-space-md text-right font-currency-table text-xs whitespace-nowrap">
                    320,00 €
                  </td>
                  <td className="py-3.5 px-space-md text-right font-currency-table text-xs text-on-surface-variant whitespace-nowrap">
                    67,20 €
                    {' '}
                    <span className="text-[10px] text-[#8c877d]">
                      (21%)
                    </span>
                  </td>
                  <td className="py-3.5 px-space-md text-right whitespace-nowrap font-medium text-sm text-on-surface">
                    387,20 €
                  </td>
                  <td className="py-3.5 px-space-md whitespace-nowrap">
                    <span className="inline-flex items-center gap-1 text-on-surface-variant">
                      <span className="material-symbols-outlined text-sm text-[#755a34]">
                        credit_card
                      </span>
                      <span>
                        Visa •••• 4821
                      </span>
                    </span>
                  </td>
                  <td className="py-3.5 px-space-md whitespace-nowrap">
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded border border-[#d2e7da] font-label-sm text-[11px] bg-[#edf5f0] text-[#3b6e52]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3b6e52]" />
                      <span>
                        Cobrado
                      </span>
                    </span>
                  </td>
                  <td className="py-3.5 px-space-md text-center whitespace-nowrap">
                    <div className="flex items-center justify-center gap-1">
                      <button className="p-1 rounded text-on-surface-variant hover:text-[#755a34] hover:bg-[#f6f3ee] transition-colors" title="Descargar PDF/XML" type="button">
                        <span className="material-symbols-outlined text-base">
                          download
                        </span>
                      </button>
                      <button className="p-1 rounded text-on-surface-variant hover:text-on-surface hover:bg-[#f6f3ee] transition-colors" title="Ver Detalle Folio" type="button" onClick={verDetalle}>
                        <span className="material-symbols-outlined text-base">
                          visibility
                        </span>
                      </button>
                      <button className="p-1 rounded text-on-surface-variant hover:text-on-surface hover:bg-[#f6f3ee] transition-colors" title="Reenviar por Email" type="button">
                        <span className="material-symbols-outlined text-base">
                          mail
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
                {/* Row 3 */}
                <tr className="hover:bg-[#fbf9f6] transition-colors group">
                  <td className="py-3.5 px-space-md whitespace-nowrap">
                    <div className="flex items-center gap-1.5 font-medium text-on-surface">
                      <span className="material-symbols-outlined text-[#755a34] text-sm">
                        receipt
                      </span>
                      <span className="tracking-tight font-semibold">
                        FAC-10490
                      </span>
                    </div>
                  </td>
                  <td className="py-3.5 px-space-md whitespace-nowrap text-on-surface-variant">
                    <div>
                      23 Oct 2024
                    </div>
                    <div className="text-[10px] text-[#8c877d]">
                      18:40 hrs
                    </div>
                  </td>
                  <td className="py-3.5 px-space-md">
                    <div className="font-medium text-on-surface">
                      Sofía Valenzuela
                    </div>
                    <div className="font-label-sm text-[11px] text-on-surface-variant">
                      Consumidor Final (DNI: 78.431.002)
                    </div>
                  </td>
                  <td className="py-3.5 px-space-md">
                    <div className="text-on-surface font-normal">
                      Hab. Estándar 104
                    </div>
                    <div className="text-on-surface-variant text-[11px]">
                      1 noche • Check-out expreso
                    </div>
                  </td>
                  <td className="py-3.5 px-space-md text-right font-currency-table text-xs whitespace-nowrap">
                    110,00 €
                  </td>
                  <td className="py-3.5 px-space-md text-right font-currency-table text-xs text-on-surface-variant whitespace-nowrap">
                    23,10 €
                    {' '}
                    <span className="text-[10px] text-[#8c877d]">
                      (21%)
                    </span>
                  </td>
                  <td className="py-3.5 px-space-md text-right whitespace-nowrap font-medium text-sm text-on-surface">
                    133,10 €
                  </td>
                  <td className="py-3.5 px-space-md whitespace-nowrap">
                    <span className="inline-flex items-center gap-1 text-on-surface-variant">
                      <span className="material-symbols-outlined text-sm text-[#755a34]">
                        storefront
                      </span>
                      <span>
                        En mostrador
                      </span>
                    </span>
                  </td>
                  <td className="py-3.5 px-space-md whitespace-nowrap">
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded border border-[#fae2c8] font-label-sm text-[11px] bg-[#fdf3e9] text-[#b46e28]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#b46e28]" />
                      <span>
                        Pendiente Cobro
                      </span>
                    </span>
                  </td>
                  <td className="py-3.5 px-space-md text-center whitespace-nowrap">
                    <div className="flex items-center justify-center gap-1">
                      <button className="px-2.5 py-1 rounded bg-[#191816] text-[#ffffff] border border-[#c5a880]/50 font-label-sm text-[11px] hover:bg-[#2a2824] transition-colors shadow-sm" type="button">
                        Cobrar
                      </button>
                      <button className="p-1 rounded text-on-surface-variant hover:text-on-surface hover:bg-[#f6f3ee] transition-colors" title="Enviar enlace de pago" type="button">
                        <span className="material-symbols-outlined text-base">
                          link
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
                {/* Row 4 */}
                <tr className="bg-[#faf8f4]/60 hover:bg-[#fbf9f6] transition-colors group">
                  <td className="py-3.5 px-space-md whitespace-nowrap">
                    <div className="flex items-center gap-1.5 font-medium text-on-surface">
                      <span className="material-symbols-outlined text-[#755a34] text-sm">
                        receipt
                      </span>
                      <span className="tracking-tight font-semibold">
                        FAC-10489
                      </span>
                    </div>
                  </td>
                  <td className="py-3.5 px-space-md whitespace-nowrap text-on-surface-variant">
                    <div>
                      23 Oct 2024
                    </div>
                    <div className="text-[10px] text-[#8c877d]">
                      14:05 hrs
                    </div>
                  </td>
                  <td className="py-3.5 px-space-md">
                    <div className="font-medium text-on-surface">
                      Consultores Andinos SAC
                    </div>
                    <div className="font-label-sm text-[11px] text-on-surface-variant">
                      RUC: 20491823901 • City Ledger
                    </div>
                  </td>
                  <td className="py-3.5 px-space-md">
                    <div className="text-on-surface font-normal">
                      Bloque Corporativo (4 habs)
                    </div>
                    <div className="text-on-surface-variant text-[11px]">
                      Habs 201-204 • Evento de Finanzas
                    </div>
                  </td>
                  <td className="py-3.5 px-space-md text-right font-currency-table text-xs whitespace-nowrap">
                    1.420,00 €
                  </td>
                  <td className="py-3.5 px-space-md text-right font-currency-table text-xs text-on-surface-variant whitespace-nowrap">
                    298,20 €
                    {' '}
                    <span className="text-[10px] text-[#8c877d]">
                      (21%)
                    </span>
                  </td>
                  <td className="py-3.5 px-space-md text-right whitespace-nowrap font-medium text-sm text-on-surface">
                    1.718,20 €
                  </td>
                  <td className="py-3.5 px-space-md whitespace-nowrap">
                    <span className="inline-flex items-center gap-1 text-on-surface-variant">
                      <span className="material-symbols-outlined text-sm text-[#755a34]">
                        schedule
                      </span>
                      <span>
                        Crédito 15 días
                      </span>
                    </span>
                  </td>
                  <td className="py-3.5 px-space-md whitespace-nowrap">
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded border border-[#e6e0d5] font-label-sm text-[11px] bg-[#f6f3ee] text-on-surface-variant">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8c877d]" />
                      <span>
                        Facturado Pendiente
                      </span>
                    </span>
                  </td>
                  <td className="py-3.5 px-space-md text-center whitespace-nowrap">
                    <div className="flex items-center justify-center gap-1">
                      <button className="p-1 rounded text-on-surface-variant hover:text-[#755a34] hover:bg-[#f6f3ee] transition-colors" title="Descargar Factura" type="button">
                        <span className="material-symbols-outlined text-base">
                          description
                        </span>
                      </button>
                      <button className="p-1 rounded text-on-surface-variant hover:text-on-surface hover:bg-[#f6f3ee] transition-colors" title="Estado de Cuenta" type="button">
                        <span className="material-symbols-outlined text-base">
                          folder_open
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
                {/* Row 5 (Credit Note) */}
                <tr className="hover:bg-[#fbf9f6] transition-colors group">
                  <td className="py-3.5 px-space-md whitespace-nowrap text-[#9f3a38]">
                    <div className="flex items-center gap-1.5 font-medium">
                      <span className="material-symbols-outlined text-[#9f3a38] text-sm">
                        assignment_return
                      </span>
                      <span className="tracking-tight font-semibold">
                        NC-00120
                      </span>
                    </div>
                  </td>
                  <td className="py-3.5 px-space-md whitespace-nowrap text-on-surface-variant">
                    <div>
                      22 Oct 2024
                    </div>
                    <div className="text-[10px] text-[#8c877d]">
                      11:20 hrs
                    </div>
                  </td>
                  <td className="py-3.5 px-space-md">
                    <div className="font-medium text-on-surface">
                      Elena Rostova
                    </div>
                    <div className="font-label-sm text-[11px] text-on-surface-variant">
                      Pasaporte 49201948 • Huésped Int.
                    </div>
                  </td>
                  <td className="py-3.5 px-space-md">
                    <div className="text-[#9f3a38] font-normal">
                      Reembolso Cancelación
                    </div>
                    <div className="text-on-surface-variant text-[11px]">
                      Reserva #9401 • Retiro Anticipado
                    </div>
                  </td>
                  <td className="py-3.5 px-space-md text-right font-currency-table text-xs text-[#9f3a38] whitespace-nowrap">
                    -85,00 €
                  </td>
                  <td className="py-3.5 px-space-md text-right font-currency-table text-xs text-[#9f3a38] whitespace-nowrap">
                    -17,85 €
                    {' '}
                    <span className="text-[10px] text-[#9f3a38]/80">
                      (21%)
                    </span>
                  </td>
                  <td className="py-3.5 px-space-md text-right whitespace-nowrap font-medium text-sm text-[#9f3a38]">
                    -102,85 €
                  </td>
                  <td className="py-3.5 px-space-md whitespace-nowrap">
                    <span className="inline-flex items-center gap-1 text-on-surface-variant">
                      <span className="material-symbols-outlined text-sm text-[#755a34]">
                        replay
                      </span>
                      <span>
                        Reverso Tarjeta
                      </span>
                    </span>
                  </td>
                  <td className="py-3.5 px-space-md whitespace-nowrap">
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded border border-[#f5d5d5] font-label-sm text-[11px] bg-[#fcf1f1] text-[#9f3a38]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#9f3a38]" />
                      <span>
                        Nota de Crédito
                      </span>
                    </span>
                  </td>
                  <td className="py-3.5 px-space-md text-center whitespace-nowrap">
                    <div className="flex items-center justify-center gap-1">
                      <button className="p-1 rounded text-on-surface-variant hover:text-[#9f3a38] hover:bg-[#f6f3ee] transition-colors" title="Descargar NC" type="button">
                        <span className="material-symbols-outlined text-base">
                          download
                        </span>
                      </button>
                      <button className="p-1 rounded text-on-surface-variant hover:text-on-surface hover:bg-[#f6f3ee] transition-colors" title="Ver Motivo de Anulación" type="button">
                        <span className="material-symbols-outlined text-base">
                          info
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Summary Balance Bar (Tabular Totals) */}
          <div className="bg-[#f6f3ee] border-t border-[#ece7de] px-space-md py-space-sm flex flex-col md:flex-row md:items-center justify-between gap-space-md">
            <div className="flex items-center gap-2 text-on-surface-variant font-label-md text-xs uppercase tracking-wider">
              <span className="material-symbols-outlined text-base text-[#755a34]">
                calculate
              </span>
              <span>
                Balance de vista actual:
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-space-lg">
              <div className="flex items-baseline gap-2">
                <span className="font-label-sm text-[11px] uppercase tracking-wider text-on-surface-variant">
                  Subtotal Base:
                </span>
                <span className="font-currency-table text-xs text-on-surface font-semibold">
                  3.615,00 €
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-label-sm text-[11px] uppercase tracking-wider text-on-surface-variant">
                  IVA Acumulado:
                </span>
                <span className="font-currency-table text-xs text-on-surface font-semibold">
                  759,15 €
                </span>
              </div>
              <div className="flex items-baseline gap-2 bg-[#ffffff] border border-[#e6e0d5] px-3 py-1 rounded shadow-sm">
                <span className="font-label-sm text-[11px] uppercase tracking-wider text-[#755a34] font-medium">
                  Total Neto en Pantalla:
                </span>
                <span className="font-currency-display text-base text-[#191816] font-semibold">
                  4.374,15 €
                </span>
              </div>
            </div>
          </div>
          {/* Pagination & Meta Footer */}
          <div className="bg-[#ffffff] border-t border-[#ece7de] px-space-md py-space-sm flex flex-col sm:flex-row items-center justify-between gap-space-sm">
            <div className="font-label-md text-xs text-on-surface-variant">
              Mostrando
              {' '}
              <span className="font-semibold text-on-surface">
                1 a 5
              </span>
              {' '}
              de
              {' '}
              <span className="font-semibold text-on-surface">
                1.280
              </span>
              {' '}
              comprobantes emitidos
            </div>
            <div className="flex items-center gap-1">
              <button className="h-8 px-2.5 rounded border border-[#e6e0d5] bg-[#ffffff] text-on-surface-variant hover:text-on-surface hover:bg-[#f6f3ee] font-label-md text-xs disabled:opacity-40 transition-colors" disabled type="button">
                Anterior
              </button>
              <button className="h-8 w-8 rounded bg-[#191816] text-[#ffffff] font-label-md text-xs font-medium" type="button">
                1
              </button>
              <button className="h-8 w-8 rounded border border-[#e6e0d5] bg-[#ffffff] text-on-surface-variant hover:bg-[#f6f3ee] hover:text-on-surface font-label-md text-xs transition-colors" type="button">
                2
              </button>
              <button className="h-8 w-8 rounded border border-[#e6e0d5] bg-[#ffffff] text-on-surface-variant hover:bg-[#f6f3ee] hover:text-on-surface font-label-md text-xs transition-colors" type="button">
                3
              </button>
              <span className="px-1 text-on-surface-variant">
                ...
              </span>
              <button className="h-8 w-8 rounded border border-[#e6e0d5] bg-[#ffffff] text-on-surface-variant hover:bg-[#f6f3ee] hover:text-on-surface font-label-md text-xs transition-colors" type="button">
                256
              </button>
              <button className="h-8 px-2.5 rounded border border-[#e6e0d5] bg-[#ffffff] text-on-surface-variant hover:text-on-surface hover:bg-[#f6f3ee] font-label-md text-xs transition-colors" type="button">
                Siguiente
              </button>
            </div>
          </div>
        </section>
        {/* Hospitality Context Mosaic (Bottom Auxiliary Insights) */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-space-md mt-space-md">
          {/* Folio & Revenue Distribution SVG Chart */}
          <div className="bg-[#ffffff] rounded border border-[#ece7de] p-space-md shadow-[0_2px_8px_rgba(0,0,0,0.02)] lg:col-span-2 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-space-sm">
              <div className="flex flex-col">
                <span className="font-headline-sm text-lg text-on-surface font-headline-md font-medium">
                  Composición de Ingresos Facturados
                </span>
                <span className="font-body-sm text-xs text-on-surface-variant">
                  Distribución entre alojamiento, gastronomía, eventos y servicios wellness
                </span>
              </div>
              <span className="font-label-sm text-[11px] text-[#755a34] uppercase tracking-wider font-semibold">
                Últimos 7 Días
              </span>
            </div>
            <div className="w-full h-36 flex items-end gap-3 pt-4">
              {/* SVG Sparkline & Bar Hybrid */}
              <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 600 120">
                {/* Background Grid lines */}
                <line className="text-[#ece7de]" stroke="currentColor" strokeDasharray="3 3" strokeWidth="1" x1="0" x2="600" y1="20" y2="20" />
                <line className="text-[#ece7de]" stroke="currentColor" strokeDasharray="3 3" strokeWidth="1" x1="0" x2="600" y1="60" y2="60" />
                <line className="text-[#ece7de]" stroke="currentColor" strokeDasharray="3 3" strokeWidth="1" x1="0" x2="600" y1="100" y2="100" />
                {/* Bars for Daily Folios */}
                <rect className="fill-[#f2ebd9]" height="70" rx="2" width="34" x="25" y="40" />
                <rect className="fill-[#f2ebd9]" height="85" rx="2" width="34" x="110" y="25" />
                <rect className="fill-[#f2ebd9]" height="55" rx="2" width="34" x="195" y="55" />
                <rect className="fill-[#e5dfd2]" height="95" rx="2" width="34" x="280" y="15" />
                <rect className="fill-[#f2ebd9]" height="80" rx="2" width="34" x="365" y="30" />
                <rect className="fill-[#f2ebd9]" height="65" rx="2" width="34" x="450" y="45" />
                <rect className="fill-[#191816]" height="100" rx="2" width="34" x="535" y="10" />
                {/* Smooth Area Overlay */}
                <path className="fill-[#c5a880]/10" d="M 42 45 Q 127 20, 212 55 T 382 30 T 552 10 L 552 110 L 42 110 Z" />
                <path className="text-[#755a34]" d="M 42 45 Q 127 20, 212 55 T 382 30 T 552 10" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <div className="grid grid-cols-4 gap-2 pt-space-sm text-center">
              <div className="bg-[#f6f3ee] border border-[#ece7de] rounded p-2">
                <div className="font-label-sm text-[11px] text-on-surface-variant uppercase tracking-wider">
                  Alojamiento (Hab.)
                </div>
                <div className="font-currency-table text-sm text-on-surface font-semibold mt-0.5">
                  74%
                </div>
              </div>
              <div className="bg-[#f6f3ee] border border-[#ece7de] rounded p-2">
                <div className="font-label-sm text-[11px] text-on-surface-variant uppercase tracking-wider">
                  Restauración &amp; Bar
                </div>
                <div className="font-currency-table text-sm text-on-surface font-semibold mt-0.5">
                  16%
                </div>
              </div>
              <div className="bg-[#f6f3ee] border border-[#ece7de] rounded p-2">
                <div className="font-label-sm text-[11px] text-on-surface-variant uppercase tracking-wider">
                  Salas &amp; Convenciones
                </div>
                <div className="font-currency-table text-sm text-on-surface font-semibold mt-0.5">
                  7%
                </div>
              </div>
              <div className="bg-[#f6f3ee] border border-[#ece7de] rounded p-2">
                <div className="font-label-sm text-[11px] text-on-surface-variant uppercase tracking-wider">
                  Spa &amp; Traslados
                </div>
                <div className="font-currency-table text-sm text-on-surface font-semibold mt-0.5">
                  3%
                </div>
              </div>
            </div>
          </div>
          {/* Quick Operations & Direct Settlement */}
          <div className="bg-[#ffffff] rounded border border-[#ece7de] p-space-md shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="material-symbols-outlined text-[#755a34] text-xl">
                  bolt
                </span>
                <span className="font-headline-sm text-lg text-on-surface font-headline-md font-medium">
                  Liquidación Rápida
                </span>
              </div>
              <p className="font-body-sm text-xs text-on-surface-variant mb-space-sm">
                Herramientas instantáneas para el equipo de recepción y conserjería.
              </p>
              <div className="flex flex-col gap-space-xs">
                <button className="w-full p-2.5 rounded bg-[#fbf9f6] border border-[#ece7de] hover:bg-[#f5f1ea] hover:border-[#c5a880] text-left transition-colors flex items-center justify-between group" type="button">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#755a34] text-base">
                      call_split
                    </span>
                    <span className="font-label-md text-xs text-on-surface font-medium">
                      Dividir Folio (Split Billing)
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant text-sm group-hover:translate-x-0.5 transition-transform">
                    chevron_right
                  </span>
                </button>
                <button className="w-full p-2.5 rounded bg-[#fbf9f6] border border-[#ece7de] hover:bg-[#f5f1ea] hover:border-[#c5a880] text-left transition-colors flex items-center justify-between group" type="button">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#755a34] text-base">
                      domain
                    </span>
                    <span className="font-label-md text-xs text-on-surface font-medium">
                      Transferir a Cuenta Maestra (Master Folio)
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant text-sm group-hover:translate-x-0.5 transition-transform">
                    chevron_right
                  </span>
                </button>
                <button className="w-full p-2.5 rounded bg-[#fbf9f6] border border-[#ece7de] hover:bg-[#f5f1ea] hover:border-[#c5a880] text-left transition-colors flex items-center justify-between group" type="button">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#755a34] text-base">
                      history_edu
                    </span>
                    <span className="font-label-md text-xs text-on-surface font-medium">
                      Auditoría Fiscal Nocturna (Night Audit)
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant text-sm group-hover:translate-x-0.5 transition-transform">
                    chevron_right
                  </span>
                </button>
              </div>
            </div>
            {/* Quick Status Footer Notice */}
            <div className="mt-space-md p-2.5 rounded bg-[#f6f3ee] border border-[#e6e0d5] flex items-center gap-2">
              <span className="material-symbols-outlined text-[#755a34] text-base">
                lock_clock
              </span>
              <div className="text-[11px] text-on-surface leading-tight">
                Cierre fiscal programado hoy a las
                {' '}
                <strong>
                  23:59 hrs
                </strong>
                . Folios sin cerrar se moverán a pre-facturación.
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
