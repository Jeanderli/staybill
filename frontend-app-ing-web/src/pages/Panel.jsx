// Pantalla generada desde Google Stitch: "AQELION — Panel de Control"
// Los datos son de ejemplo (el backend aún no tiene facturas ni huéspedes).
export default function Panel() {
  return (
    <>
      <div className="flex flex-col w-full pb-space-xl">
        {/* Top Bar / Subheader Navigation */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md py-space-lg">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-space-xs">
              <span className="font-label-sm text-[11px] uppercase tracking-[0.14em] text-bronze-accent font-semibold">
                Resumen General
              </span>
              <span className="text-outline-variant">
                •
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sage" />
                Sincronizado en tiempo real
              </span>
            </div>
            <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
              Panel de Facturación &amp; Operaciones
            </h1>
          </div>
          <div className="flex flex-wrap items-center gap-space-sm">
            {/* Date Picker Mock */}
            <div className="flex items-center gap-2 bg-surface-container-lowest px-space-md py-2 rounded-lg border border-outline-variant/60 shadow-[0_1px_4px_rgba(28,27,25,0.03)]">
              <span className="material-symbols-outlined text-bronze-accent text-lg">
                calendar_today
              </span>
              <span className="font-label-md text-label-md text-on-surface font-medium">
                Hoy, 24 Octubre 2024
              </span>
            </div>
            {/* Segmented Range Filter */}
            <div className="flex items-center bg-surface-container-low p-1 rounded-lg border border-outline-variant/50">
              <button className="px-space-sm py-1.5 rounded font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface transition-colors" type="button">
                Hoy
              </button>
              <button className="px-space-sm py-1.5 rounded font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface transition-colors" type="button">
                Esta semana
              </button>
              <button className="px-space-sm py-1.5 rounded bg-surface-container-lowest font-label-sm text-label-sm text-on-surface shadow-sm font-semibold border border-outline-variant/60" type="button">
                Mes actual
              </button>
            </div>
            {/* Action Button */}
            <button className="flex items-center gap-1.5 px-space-md py-2 bg-surface-container-lowest text-on-surface border border-outline-variant/60 rounded-lg font-label-md text-label-md hover:bg-surface-container-low transition-colors shadow-[0_1px_4px_rgba(28,27,25,0.03)]" type="button">
              <span className="material-symbols-outlined text-lg text-bronze-accent">
                file_download
              </span>
              <span>
                Exportar fiscal
              </span>
            </button>
          </div>
        </div>
        {/* 4 Metric KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-gutter mb-space-xl">
          {/* KPI 1 */}
          <div className="bg-surface-container-lowest rounded-xl p-space-md border border-outline-variant/60 shadow-[0_2px_8px_rgba(28,27,25,0.03)] relative overflow-hidden flex flex-col justify-between">
            <div className="flex items-center justify-between mb-space-sm">
              <span className="font-label-sm text-[11px] text-outline uppercase tracking-[0.12em] font-semibold">
                Facturación del Mes
              </span>
              <div className="w-8 h-8 rounded-lg bg-bronze-light flex items-center justify-center text-bronze-accent">
                <span className="material-symbols-outlined text-lg">
                  payments
                </span>
              </div>
            </div>
            <div className="mb-space-sm">
              <span className="font-currency-display text-currency-display text-on-surface tracking-tight font-semibold">
                48.920,00 €
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-sage-light text-sage font-label-sm text-label-sm font-semibold border border-sage/20">
                <span className="material-symbols-outlined text-xs">
                  trending_up
                </span>
                +12.4%
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                vs. mes anterior
              </span>
            </div>
          </div>
          {/* KPI 2 */}
          <div className="bg-surface-container-lowest rounded-xl p-space-md border border-outline-variant/60 shadow-[0_2px_8px_rgba(28,27,25,0.03)] relative overflow-hidden flex flex-col justify-between">
            <div className="flex items-center justify-between mb-space-sm">
              <span className="font-label-sm text-[11px] text-outline uppercase tracking-[0.12em] font-semibold">
                Pendiente de Cobro
              </span>
              <div className="w-8 h-8 rounded-lg bg-cognac-light flex items-center justify-center text-cognac">
                <span className="material-symbols-outlined text-lg">
                  pending_actions
                </span>
              </div>
            </div>
            <div className="mb-space-sm">
              <span className="font-currency-display text-currency-display text-on-surface tracking-tight font-semibold">
                4.350,00 €
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-cognac-light text-cognac font-label-sm text-label-sm font-semibold border border-cognac/20">
                <span className="w-1.5 h-1.5 rounded-full bg-cognac" />
                6 comprobantes
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                por conciliar
              </span>
            </div>
          </div>
          {/* KPI 3 */}
          <div className="bg-surface-container-lowest rounded-xl p-space-md border border-outline-variant/60 shadow-[0_2px_8px_rgba(28,27,25,0.03)] relative overflow-hidden flex flex-col justify-between">
            <div className="flex items-center justify-between mb-space-sm">
              <span className="font-label-sm text-[11px] text-outline uppercase tracking-[0.12em] font-semibold">
                Ocupación / RevPAR
              </span>
              <div className="w-8 h-8 rounded-lg bg-bronze-light flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-lg">
                  hotel_class
                </span>
              </div>
            </div>
            <div className="mb-space-sm flex items-baseline gap-2">
              <span className="font-currency-display text-currency-display text-on-surface tracking-tight font-semibold">
                84.2%
              </span>
              <span className="font-body-lg text-body-lg text-outline font-medium">
                / 115,00 €
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-sage-light text-sage font-label-sm text-label-sm font-semibold border border-sage/20">
                <span className="material-symbols-outlined text-xs">
                  arrow_upward
                </span>
                +3.1%
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                42/50 hab. activas
              </span>
            </div>
          </div>
          {/* KPI 4 */}
          <div className="bg-surface-container-lowest rounded-xl p-space-md border border-outline-variant/60 shadow-[0_2px_8px_rgba(28,27,25,0.03)] relative overflow-hidden flex flex-col justify-between">
            <div className="flex items-center justify-between mb-space-sm">
              <span className="font-label-sm text-[11px] text-outline uppercase tracking-[0.12em] font-semibold">
                Transmisión Fiscal
              </span>
              <div className="w-8 h-8 rounded-lg bg-sage-light flex items-center justify-center text-sage">
                <span className="material-symbols-outlined text-lg">
                  verified
                </span>
              </div>
            </div>
            <div className="mb-space-sm">
              <span className="font-currency-display text-currency-display text-on-surface tracking-tight font-semibold">
                218 Facturas
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-sage-light text-sage font-label-sm text-label-sm font-semibold border border-sage/20">
                <span className="material-symbols-outlined text-xs">
                  done_all
                </span>
                100% validadas
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                AEAT / Hacienda
              </span>
            </div>
          </div>
        </div>
        {/* Main Content Grid (8 Cols / 4 Cols) */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-gutter items-start">
          {/* Left Column (8 cols): Recent Invoices & Folio Ledger */}
          <div className="xl:col-span-8 flex flex-col gap-space-lg">
            <div className="bg-surface-container-lowest rounded-xl p-space-md border border-outline-variant/60 shadow-[0_2px_8px_rgba(28,27,25,0.03)]">
              {/* Table Header & Filter Row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-space-md border-b border-outline-variant/40">
                <div>
                  <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                    Últimas Facturas y Comprobantes
                  </h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Flujo de facturación electrónica y liquidaciones recientes
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="px-space-sm py-1.5 bg-surface-container-low hover:bg-surface-container text-on-surface font-label-sm text-label-sm rounded-lg border border-outline-variant/60 flex items-center gap-1 transition-colors" type="button">
                    <span className="material-symbols-outlined text-sm text-bronze-accent">
                      filter_list
                    </span>
                    <span>
                      Filtrar
                    </span>
                  </button>
                  <button className="px-space-sm py-1.5 bg-surface-container-low hover:bg-surface-container text-on-surface font-label-sm text-label-sm rounded-lg border border-outline-variant/60 flex items-center gap-1 transition-colors" type="button">
                    <span className="material-symbols-outlined text-sm text-bronze-accent">
                      tune
                    </span>
                    <span>
                      Columnas
                    </span>
                  </button>
                </div>
              </div>
              {/* Invoices Table */}
              <div className="overflow-x-auto -mx-space-md px-space-md">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-surface-container-low/70 text-on-surface-variant font-label-sm text-[11px] uppercase tracking-[0.08em]">
                      <th className="py-3 px-space-sm rounded-l-lg font-semibold">
                        Comprobante
                      </th>
                      <th className="py-3 px-space-sm font-semibold">
                        Huésped / Razón Social
                      </th>
                      <th className="py-3 px-space-sm font-semibold">
                        Concepto / Estancia
                      </th>
                      <th className="py-3 px-space-sm font-semibold">
                        Fecha
                      </th>
                      <th className="py-3 px-space-sm text-right font-semibold">
                        Importe Total
                      </th>
                      <th className="py-3 px-space-sm text-center font-semibold">
                        Estado
                      </th>
                      <th className="py-3 px-space-sm rounded-r-lg text-right font-semibold">
                        Acciones
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/50 font-body-sm text-body-sm">
                    {/* Row 1 */}
                    <tr className="hover:bg-surface-container-low/40 transition-colors group">
                      <td className="py-space-md px-space-sm">
                        <div className="font-headline-sm text-headline-sm text-on-surface font-semibold group-hover:text-secondary transition-colors">
                          FAC-2024-0892
                        </div>
                        <div className="font-label-sm text-label-sm text-outline">
                          B2B Electrónica
                        </div>
                      </td>
                      <td className="py-space-md px-space-sm">
                        <div className="font-label-md text-label-md text-on-surface font-medium">
                          Hotel Boutique Alameda
                        </div>
                        <div className="font-body-sm text-body-sm text-on-surface-variant">
                          NIF: B-82910394
                        </div>
                      </td>
                      <td className="py-space-md px-space-sm">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-surface-container-low border border-outline-variant/60 text-on-surface font-label-sm text-[11px]">
                          <span className="material-symbols-outlined text-xs text-bronze-accent">
                            meeting_room
                          </span>
                          Hab. Suite 402 (3N)
                        </span>
                      </td>
                      <td className="py-space-md px-space-sm text-on-surface-variant whitespace-nowrap">
                        24 Oct 2024, 11:20
                      </td>
                      <td className="py-space-md px-space-sm text-right">
                        <span className="font-currency-table text-currency-table text-on-surface font-semibold">
                          1.480,00 €
                        </span>
                        <div className="font-label-sm text-[11px] text-outline">
                          IVA 10% incl.
                        </div>
                      </td>
                      <td className="py-space-md px-space-sm text-center">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-sage-light text-sage font-label-sm text-label-sm font-semibold border border-sage/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-sage" />
                          Pagada
                        </span>
                      </td>
                      <td className="py-space-md px-space-sm text-right whitespace-nowrap">
                        <div className="flex items-center justify-end gap-1">
                          <button className="p-1.5 rounded text-on-surface-variant hover:text-secondary hover:bg-bronze-light transition-colors" title="Descargar PDF" type="button">
                            <span className="material-symbols-outlined text-base">
                              picture_as_pdf
                            </span>
                          </button>
                          <button className="p-1.5 rounded text-on-surface-variant hover:text-secondary hover:bg-bronze-light transition-colors" title="Enviar Email" type="button">
                            <span className="material-symbols-outlined text-base">
                              forward_to_inbox
                            </span>
                          </button>
                          <button className="p-1.5 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" title="Ver Folio" type="button">
                            <span className="material-symbols-outlined text-base">
                              more_vert
                            </span>
                          </button>
                        </div>
                      </td>
                    </tr>
                    {/* Row 2 */}
                    <tr className="hover:bg-surface-container-low/40 transition-colors group">
                      <td className="py-space-md px-space-sm">
                        <div className="font-headline-sm text-headline-sm text-on-surface font-semibold group-hover:text-secondary transition-colors">
                          FAC-2024-0891
                        </div>
                        <div className="font-label-sm text-label-sm text-outline">
                          Factura Huésped
                        </div>
                      </td>
                      <td className="py-space-md px-space-sm">
                        <div className="font-label-md text-label-md text-on-surface font-medium">
                          Carlos Mendoza Ruiz
                        </div>
                        <div className="font-body-sm text-body-sm text-on-surface-variant">
                          DNI: 48920194K
                        </div>
                      </td>
                      <td className="py-space-md px-space-sm">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-surface-container-low border border-outline-variant/60 text-on-surface font-label-sm text-[11px]">
                          <span className="material-symbols-outlined text-xs text-bronze-accent">
                            restaurant
                          </span>
                          Restaurante &amp; Rooftop
                        </span>
                      </td>
                      <td className="py-space-md px-space-sm text-on-surface-variant whitespace-nowrap">
                        24 Oct 2024, 09:45
                      </td>
                      <td className="py-space-md px-space-sm text-right">
                        <span className="font-currency-table text-currency-table text-on-surface font-semibold">
                          245,50 €
                        </span>
                        <div className="font-label-sm text-[11px] text-outline">
                          IVA 21% incl.
                        </div>
                      </td>
                      <td className="py-space-md px-space-sm text-center">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cognac-light text-cognac font-label-sm text-label-sm font-semibold border border-cognac/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-cognac" />
                          Pendiente
                        </span>
                      </td>
                      <td className="py-space-md px-space-sm text-right whitespace-nowrap">
                        <div className="flex items-center justify-end gap-1">
                          <button className="p-1.5 rounded text-on-surface-variant hover:text-secondary hover:bg-bronze-light transition-colors" title="Descargar PDF" type="button">
                            <span className="material-symbols-outlined text-base">
                              picture_as_pdf
                            </span>
                          </button>
                          <button className="p-1.5 rounded text-on-surface-variant hover:text-cognac hover:bg-cognac-light transition-colors" title="Enviar Cobro" type="button">
                            <span className="material-symbols-outlined text-base">
                              send
                            </span>
                          </button>
                          <button className="p-1.5 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" title="Ver Folio" type="button">
                            <span className="material-symbols-outlined text-base">
                              more_vert
                            </span>
                          </button>
                        </div>
                      </td>
                    </tr>
                    {/* Row 3 */}
                    <tr className="hover:bg-surface-container-low/40 transition-colors group">
                      <td className="py-space-md px-space-sm">
                        <div className="font-headline-sm text-headline-sm text-on-surface font-semibold group-hover:text-secondary transition-colors">
                          FAC-2024-0890
                        </div>
                        <div className="font-label-sm text-label-sm text-outline">
                          Crédito Corporativo
                        </div>
                      </td>
                      <td className="py-space-md px-space-sm">
                        <div className="font-label-md text-label-md text-on-surface font-medium">
                          TechCorp Latam S.L.
                        </div>
                        <div className="font-body-sm text-body-sm text-on-surface-variant">
                          NIF: B-99382109
                        </div>
                      </td>
                      <td className="py-space-md px-space-sm">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-surface-container-low border border-outline-variant/60 text-on-surface font-label-sm text-[11px]">
                          <span className="material-symbols-outlined text-xs text-bronze-accent">
                            meeting_room
                          </span>
                          Hab. Deluxe 201 + Sala
                        </span>
                      </td>
                      <td className="py-space-md px-space-sm text-on-surface-variant whitespace-nowrap">
                        23 Oct 2024, 18:30
                      </td>
                      <td className="py-space-md px-space-sm text-right">
                        <span className="font-currency-table text-currency-table text-on-surface font-semibold">
                          2.890,00 €
                        </span>
                        <div className="font-label-sm text-[11px] text-outline">
                          Vence 26 Oct
                        </div>
                      </td>
                      <td className="py-space-md px-space-sm text-center">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-semibold border border-outline-variant">
                          <span className="w-1.5 h-1.5 rounded-full bg-outline" />
                          En Proceso
                        </span>
                      </td>
                      <td className="py-space-md px-space-sm text-right whitespace-nowrap">
                        <div className="flex items-center justify-end gap-1">
                          <button className="p-1.5 rounded text-on-surface-variant hover:text-secondary hover:bg-bronze-light transition-colors" title="Descargar PDF" type="button">
                            <span className="material-symbols-outlined text-base">
                              picture_as_pdf
                            </span>
                          </button>
                          <button className="p-1.5 rounded text-on-surface-variant hover:text-secondary hover:bg-bronze-light transition-colors" title="Enviar Email" type="button">
                            <span className="material-symbols-outlined text-base">
                              forward_to_inbox
                            </span>
                          </button>
                          <button className="p-1.5 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" title="Ver Folio" type="button">
                            <span className="material-symbols-outlined text-base">
                              more_vert
                            </span>
                          </button>
                        </div>
                      </td>
                    </tr>
                    {/* Row 4 */}
                    <tr className="hover:bg-surface-container-low/40 transition-colors group">
                      <td className="py-space-md px-space-sm">
                        <div className="font-headline-sm text-headline-sm text-on-surface font-semibold group-hover:text-secondary transition-colors">
                          FAC-2024-0889
                        </div>
                        <div className="font-label-sm text-label-sm text-outline">
                          Factura Simplificada
                        </div>
                      </td>
                      <td className="py-space-md px-space-sm">
                        <div className="font-label-md text-label-md text-on-surface font-medium">
                          Elena Valenzuela
                        </div>
                        <div className="font-body-sm text-body-sm text-on-surface-variant">
                          Pasaporte: E-991204
                        </div>
                      </td>
                      <td className="py-space-md px-space-sm">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-surface-container-low border border-outline-variant/60 text-on-surface font-label-sm text-[11px]">
                          <span className="material-symbols-outlined text-xs text-bronze-accent">
                            spa
                          </span>
                          Spa &amp; Wellness Thermal
                        </span>
                      </td>
                      <td className="py-space-md px-space-sm text-on-surface-variant whitespace-nowrap">
                        23 Oct 2024, 15:10
                      </td>
                      <td className="py-space-md px-space-sm text-right">
                        <span className="font-currency-table text-currency-table text-on-surface font-semibold">
                          180,00 €
                        </span>
                        <div className="font-label-sm text-[11px] text-outline">
                          TPV Tarjeta
                        </div>
                      </td>
                      <td className="py-space-md px-space-sm text-center">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-sage-light text-sage font-label-sm text-label-sm font-semibold border border-sage/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-sage" />
                          Pagada
                        </span>
                      </td>
                      <td className="py-space-md px-space-sm text-right whitespace-nowrap">
                        <div className="flex items-center justify-end gap-1">
                          <button className="p-1.5 rounded text-on-surface-variant hover:text-secondary hover:bg-bronze-light transition-colors" title="Descargar PDF" type="button">
                            <span className="material-symbols-outlined text-base">
                              picture_as_pdf
                            </span>
                          </button>
                          <button className="p-1.5 rounded text-on-surface-variant hover:text-secondary hover:bg-bronze-light transition-colors" title="Enviar Email" type="button">
                            <span className="material-symbols-outlined text-base">
                              forward_to_inbox
                            </span>
                          </button>
                          <button className="p-1.5 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" title="Ver Folio" type="button">
                            <span className="material-symbols-outlined text-base">
                              more_vert
                            </span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* Table Footer / Pagination */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pt-space-md text-on-surface-variant font-label-sm text-label-sm border-t border-outline-variant/40">
                <span>
                  Mostrando 4 de 218 facturas generadas este mes
                </span>
                <div className="flex items-center gap-1">
                  <button className="px-2.5 py-1 rounded bg-surface-container-low hover:bg-surface-container text-on-surface border border-outline-variant/60 transition-colors disabled:opacity-40" disabled type="button">
                    Anterior
                  </button>
                  <span className="px-2.5 py-1 font-semibold text-on-surface">
                    Página 1 de 55
                  </span>
                  <button className="px-2.5 py-1 rounded bg-surface-container-low hover:bg-surface-container text-on-surface border border-outline-variant/60 transition-colors" type="button">
                    Siguiente
                  </button>
                </div>
              </div>
            </div>
            {/* Quick Room Billing Status Widget */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
              {/* Room Status Summary */}
              <div className="bg-surface-container-lowest rounded-xl p-space-md border border-outline-variant/60 shadow-[0_2px_8px_rgba(28,27,25,0.03)]">
                <div className="flex items-center justify-between mb-space-sm">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                    Ocupación &amp; Folios Abiertos
                  </h3>
                  <span className="material-symbols-outlined text-bronze-accent">
                    bed
                  </span>
                </div>
                <div className="space-y-space-sm">
                  <div className="flex items-center justify-between text-body-sm font-body-sm">
                    <span className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-sage" />
                      <span>
                        Habitaciones con folio activo
                      </span>
                    </span>
                    <span className="font-semibold text-on-surface">
                      42 habs. (84%)
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-surface-container-low overflow-hidden border border-outline-variant/40">
                    <div className="h-full bg-sage rounded-full" style={{ width: "84%" }} />
                  </div>
                  <div className="flex items-center justify-between text-body-sm font-body-sm pt-2">
                    <span className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
                      <span>
                        Cargos a habitación pendientes hoy
                      </span>
                    </span>
                    <span className="font-semibold text-on-surface">
                      1.820,40 €
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-surface-container-low overflow-hidden border border-outline-variant/40">
                    <div className="h-full bg-secondary rounded-full" style={{ width: "45%" }} />
                  </div>
                </div>
              </div>
              {/* Tax Certification Status */}
              <div className="bg-surface-container-lowest rounded-xl p-space-md border border-outline-variant/60 shadow-[0_2px_8px_rgba(28,27,25,0.03)] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-space-xs">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      Módulo Fiscal &amp; Certificados
                    </h3>
                    <span className="material-symbols-outlined text-sage">
                      security
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Conexión con servidores tributarios y firma digital automática.
                  </p>
                </div>
                <div className="p-space-sm rounded-lg bg-surface-container-low/70 border border-outline-variant/60 flex items-center justify-between mt-space-sm">
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-bronze-accent">
                      encrypted
                    </span>
                    <div>
                      <div className="font-label-md text-label-md text-on-surface font-medium">
                        Certificado FNMT - Válido
                      </div>
                      <div className="font-label-sm text-[11px] text-outline">
                        Vence: 18 Dic 2025 (419 días)
                      </div>
                    </div>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-sage-light text-sage font-label-sm text-label-sm font-semibold border border-sage/20">
                    Activo
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Right Column (4 cols): Breakdown & High-Priority Actions */}
          <div className="xl:col-span-4 flex flex-col gap-space-lg">
            {/* Collection Breakdown by Method */}
            <div className="bg-surface-container-lowest rounded-xl p-space-md border border-outline-variant/60 shadow-[0_2px_8px_rgba(28,27,25,0.03)]">
              <div className="flex items-center justify-between mb-space-md">
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                    Cobros por Método
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Distribución de ingresos del mes
                  </p>
                </div>
                <span className="material-symbols-outlined text-bronze-accent">
                  pie_chart
                </span>
              </div>
              {/* SVG Donut Chart Minimal in Warm Bronze/Cognac Luxury Palette */}
              <div className="flex items-center justify-center py-space-sm relative">
                <svg className="w-36 h-36 transform -rotate-90" viewBox="0 0 100 100">
                  {/* Background circle */}
                  <circle className="text-surface-container-low" cx="50" cy="50" fill="transparent" r="38" stroke="currentColor" strokeWidth="12" />
                  {/* Credit Card: 62% -> 238.76 total perimeter, 62% is ~148 */}
                  <circle className="text-secondary" cx="50" cy="50" fill="transparent" r="38" stroke="currentColor" strokeDasharray="238.76" strokeDashoffset="0" strokeLinecap="round" strokeWidth="12" />
                  {/* Bank Transfer: 25% -> offset 148, length ~59.6 */}
                  <circle className="text-bronze-accent" cx="50" cy="50" fill="transparent" r="38" stroke="currentColor" strokeDasharray="238.76" strokeDashoffset="-148" strokeWidth="12" />
                  {/* Cash: 13% -> offset 207.6, length ~31 */}
                  <circle className="text-secondary-fixed-dim" cx="50" cy="50" fill="transparent" r="38" stroke="currentColor" strokeDasharray="238.76" strokeDashoffset="-207.6" strokeWidth="12" />
                </svg>
                <div className="absolute flex flex-col items-center justify-center text-center">
                  <span className="font-headline-md text-headline-md text-on-surface font-semibold leading-none">
                    100%
                  </span>
                  <span className="font-label-sm text-[10px] text-outline uppercase tracking-wider mt-0.5">
                    Liquidado
                  </span>
                </div>
              </div>
              {/* Breakdown List */}
              <div className="space-y-space-sm pt-space-md border-t border-outline-variant/40">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-low/50 border border-outline-variant/40">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-secondary" />
                    <span className="font-label-md text-label-md text-on-surface font-medium">
                      Tarjeta TPV / Online
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="font-label-md text-label-md text-on-surface font-semibold">
                      30.330,40 €
                    </span>
                    {' '}
                    <span className="font-label-sm text-label-sm text-on-surface-variant block">
                      62.0%
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-low/50 border border-outline-variant/40">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-bronze-accent" />
                    <span className="font-label-md text-label-md text-on-surface font-medium">
                      Transferencia B2B
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="font-label-md text-label-md text-on-surface font-semibold">
                      12.230,00 €
                    </span>
                    {' '}
                    <span className="font-label-sm text-label-sm text-on-surface-variant block">
                      25.0%
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-low/50 border border-outline-variant/40">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-secondary-fixed-dim" />
                    <span className="font-label-md text-label-md text-on-surface font-medium">
                      Efectivo en Recepción
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="font-label-md text-label-md text-on-surface font-semibold">
                      6.359,60 €
                    </span>
                    {' '}
                    <span className="font-label-sm text-label-sm text-on-surface-variant block">
                      13.0%
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Actionable Billing Alerts */}
            <div className="bg-surface-container-lowest rounded-xl p-space-md border border-outline-variant/60 shadow-[0_2px_8px_rgba(28,27,25,0.03)]">
              <div className="flex items-center justify-between mb-space-md">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-cognac">
                    notifications_active
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                    Alertas Próximas
                  </h3>
                </div>
                <span className="px-2 py-0.5 rounded bg-cognac-light text-cognac font-label-sm text-label-sm font-semibold border border-cognac/20">
                  3 pendientes
                </span>
              </div>
              <div className="space-y-space-sm">
                {/* Alert 1 */}
                <div className="p-space-sm rounded-lg bg-surface-container-low/60 hover:bg-surface-container transition-colors flex flex-col gap-1 border border-outline-variant/50">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-[10px] text-cognac font-bold uppercase tracking-wider">
                      Check-out sin liquidar
                    </span>
                    <span className="font-label-sm text-label-sm text-outline">
                      Hoy, 12:00
                    </span>
                  </div>
                  <div className="font-label-md text-label-md text-on-surface font-semibold">
                    Hab. 305 — Pendiente 240,00 €
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Minibar &amp; servicio de lavandería sin imputar a factura final.
                  </p>
                  <div className="pt-1.5 flex items-center gap-2">
                    <button className="px-3 py-1 bg-primary text-surface-container-lowest rounded font-label-sm text-label-sm hover:bg-secondary transition-colors" type="button">
                      Liquidar Folio
                    </button>
                    <button className="px-3 py-1 bg-surface-container-lowest border border-outline-variant/70 text-on-surface rounded font-label-sm text-label-sm hover:bg-surface-container-high transition-colors" type="button">
                      Ver Hab. 305
                    </button>
                  </div>
                </div>
                {/* Alert 2 */}
                <div className="p-space-sm rounded-lg bg-surface-container-low/60 hover:bg-surface-container transition-colors flex flex-col gap-1 border border-outline-variant/50">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-[10px] text-outline font-bold uppercase tracking-wider">
                      Vencimiento Crédito
                    </span>
                    <span className="font-label-sm text-label-sm text-cognac font-semibold">
                      En 48 horas
                    </span>
                  </div>
                  <div className="font-label-md text-label-md text-on-surface font-semibold">
                    TechCorp Latam — Factura #0890
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Plazo de pago a 30 días próximo a caducar. Total: 2.890,00 €
                  </p>
                  <div className="pt-1.5 flex items-center gap-2">
                    <button className="px-3 py-1 bg-surface-container-lowest border border-outline-variant/70 text-on-surface rounded font-label-sm text-label-sm hover:bg-surface-container-high transition-colors" type="button">
                      Reenviar Recordatorio
                    </button>
                  </div>
                </div>
                {/* Alert 3 */}
                <div className="p-space-sm rounded-lg bg-surface-container-low/60 hover:bg-surface-container transition-colors flex flex-col gap-1 border border-outline-variant/50">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-[10px] text-sage font-bold uppercase tracking-wider">
                      Cierre de Caja Diario
                    </span>
                    <span className="font-label-sm text-label-sm text-outline">
                      Programado 23:59
                    </span>
                  </div>
                  <div className="font-label-md text-label-md text-on-surface font-semibold">
                    Arqueo Z &amp; Conciliación Bancaria
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Generación automática de asiento contable y remesa TPV.
                  </p>
                </div>
              </div>
            </div>
            {/* Live Hospitality Support Banner */}
            <div className="rounded-xl p-space-md bg-primary-container text-surface-container-lowest border border-outline-variant/20 flex items-center justify-between shadow-[0_4px_16px_rgba(28,27,25,0.12)]">
              <div className="flex flex-col gap-0.5">
                <span className="font-label-sm text-[10px] text-bronze-accent uppercase tracking-[0.14em] font-semibold">
                  Soporte Auditoría
                </span>
                <span className="font-headline-sm text-headline-sm text-surface-container-lowest font-semibold">
                  Mesa de Ayuda Fiscal AQELION
                </span>
                <span className="font-body-sm text-body-sm text-on-primary-container">
                  Disponible 24/7 para incidencias de transmisión.
                </span>
              </div>
              <button className="px-space-md py-2 rounded-lg bg-secondary text-surface-container-lowest border border-secondary/50 font-label-md text-label-md hover:bg-bronze-accent transition-colors shrink-0 shadow-sm" type="button">
                Contactar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
