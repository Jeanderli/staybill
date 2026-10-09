// Pantalla generada desde Google Stitch: "AQELION — Huéspedes & Cuentas"
// Los datos son de ejemplo (el backend aún no tiene facturas ni huéspedes).
export default function Huespedes() {
  return (
    <>
      <div className="flex flex-col w-full pb-16">
        {/* Top Navigation & Operations Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 py-6 border-b border-[#E7E1D7]">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-[#FAF8F5] text-[#8F7049] border border-[#E7E1D7] text-[10px] font-semibold uppercase tracking-[0.14em]">
                Recepción &amp; Tesorería de Lujo
              </span>
              <span className="text-[#CBC6BD] text-xs">
                •
              </span>
              <span className="text-xs text-[#7A776F] font-medium">
                Turno Matutino: 07:00 - 15:00
              </span>
            </div>
            <h1 className="font-display text-2xl lg:text-3xl text-[#191816] tracking-tight font-medium">
              Huéspedes &amp; Folios de Cuenta
            </h1>
            <p className="text-xs text-[#7A776F]">
              Conciliación de consumos, imputación departamental y liquidación de folios previa a facturación electrónica.
            </p>
          </div>
          {/* Quick Global Actions */}
          <div className="flex items-center flex-wrap gap-2.5">
            <button className="flex items-center gap-2 h-10 px-4 rounded-lg bg-[#FFFFFF] border border-[#E7E1D7] hover:bg-[#F6F3EE] text-[#191816] text-xs font-semibold transition-all shadow-[0_1px_3px_rgba(25,24,22,0.03)]" type="button">
              <span className="material-symbols-outlined text-base leading-none text-[#8F7049]">
                account_balance_wallet
              </span>
              <span>
                Cerrar Cuentas del Día
              </span>
            </button>
            <button className="flex items-center gap-2 h-10 px-4 rounded-lg bg-[#191816] text-[#FFFFFF] hover:bg-[#2C2A26] text-xs font-semibold transition-all shadow-sm" type="button">
              <span className="material-symbols-outlined text-base leading-none text-[#C5A880]">
                person_add
              </span>
              <span>
                + Nuevo Folio / Check-in
              </span>
            </button>
          </div>
        </div>
        {/* Operational Metric Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 my-6">
          <div className="p-5 rounded-xl bg-[#FFFFFF] border border-[#E7E1D7] shadow-[0_2px_8px_rgba(25,24,22,0.02)] flex flex-col justify-between">
            <div className="flex items-center justify-between text-[#7A776F] text-[10px] uppercase font-semibold tracking-[0.15em]">
              <span>
                Folios Abiertos
              </span>
              <span className="material-symbols-outlined text-base text-[#C5A880]">
                hotel
              </span>
            </div>
            <div className="my-2 flex items-baseline gap-2">
              <span className="font-display text-2xl text-[#191816] font-medium">
                34
              </span>
              <span className="text-xs text-[#7A776F]">
                de 42 suites (81%)
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[#3B6E52] text-xs font-medium">
              <span className="material-symbols-outlined text-sm leading-none">
                trending_up
              </span>
              <span>
                +4 check-ins previstos hoy
              </span>
            </div>
          </div>
          <div className="p-5 rounded-xl bg-[#FFFFFF] border border-[#E7E1D7] shadow-[0_2px_8px_rgba(25,24,22,0.02)] flex flex-col justify-between">
            <div className="flex items-center justify-between text-[#7A776F] text-[10px] uppercase font-semibold tracking-[0.15em]">
              <span>
                Cargos Acumulados Hoy
              </span>
              <span className="material-symbols-outlined text-base text-[#C5A880]">
                point_of_sale
              </span>
            </div>
            <div className="my-2 flex items-baseline gap-2">
              <span className="font-display text-2xl text-[#191816] font-medium">
                8.420,00 €
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[#3B6E52] text-xs font-medium">
              <span className="material-symbols-outlined text-sm leading-none">
                credit_card
              </span>
              <span>
                62 transacciones POS verificadas
              </span>
            </div>
          </div>
          <div className="p-5 rounded-xl bg-[#FFFFFF] border border-[#E7E1D7] shadow-[0_2px_8px_rgba(25,24,22,0.02)] flex flex-col justify-between">
            <div className="flex items-center justify-between text-[#7A776F] text-[10px] uppercase font-semibold tracking-[0.15em]">
              <span>
                Pendiente de Liquidar
              </span>
              <span className="material-symbols-outlined text-base text-[#B46E28]">
                priority_high
              </span>
            </div>
            <div className="my-2 flex items-baseline gap-2">
              <span className="font-display text-2xl text-[#B46E28] font-medium">
                2.140,50 €
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[#B46E28] text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B46E28] animate-pulse" />
              <span>
                3 check-outs prioritarios (12:00h)
              </span>
            </div>
          </div>
          <div className="p-5 rounded-xl bg-[#FFFFFF] border border-[#E7E1D7] shadow-[0_2px_8px_rgba(25,24,22,0.02)] flex flex-col justify-between">
            <div className="flex items-center justify-between text-[#7A776F] text-[10px] uppercase font-semibold tracking-[0.15em]">
              <span>
                Facturación Corporativa
              </span>
              <span className="material-symbols-outlined text-base text-[#C5A880]">
                apartment
              </span>
            </div>
            <div className="my-2 flex items-baseline gap-2">
              <span className="font-display text-2xl text-[#191816] font-medium">
                14 Cuentas
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[#7A776F] text-xs font-medium">
              <span className="material-symbols-outlined text-sm leading-none text-[#3B6E52]">
                verified
              </span>
              <span>
                Crédito corporativo con NIF validado
              </span>
            </div>
          </div>
        </div>
        {/* Main Split Architecture: Folio Directory (Left 60%) + Active Inspector (Right 40%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* LEFT: Folios Ledger & Stay Roster */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* Filter Bar */}
            <div className="p-2 rounded-xl bg-[#FFFFFF] border border-[#E7E1D7] shadow-[0_1px_4px_rgba(25,24,22,0.02)] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2">
              <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0">
                <button className="px-3 py-1.5 rounded-lg bg-[#191816] text-[#FFFFFF] text-xs font-medium whitespace-nowrap">
                  Todas (34)
                </button>
                <button className="px-3 py-1.5 rounded-lg text-[#7A776F] hover:bg-[#F6F3EE] hover:text-[#191816] text-xs font-medium whitespace-nowrap transition-colors">
                  Check-out Hoy (3)
                </button>
                <button className="px-3 py-1.5 rounded-lg text-[#7A776F] hover:bg-[#F6F3EE] hover:text-[#191816] text-xs font-medium whitespace-nowrap transition-colors">
                  Con Saldo Pendiente
                </button>
                <button className="px-3 py-1.5 rounded-lg text-[#7A776F] hover:bg-[#F6F3EE] hover:text-[#191816] text-xs font-medium whitespace-nowrap transition-colors">
                  Empresas / NIF
                </button>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative w-full sm:w-48">
                  <span className="material-symbols-outlined absolute left-2.5 top-2 text-[#9A968F] text-base">
                    filter_list
                  </span>
                  {' '}
                  <input className="w-full h-8 pl-8 pr-2 text-xs rounded-lg bg-[#FAF8F5] border border-[#E7E1D7] text-[#191816] placeholder:text-[#9A968F] focus:outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880]" placeholder="Filtrar folio..." type="text" />
                </div>
              </div>
            </div>
            {/* Folio Cards List */}
            <div className="flex flex-col gap-3" id="folio-roster">
              {/* Card 1: Alert Check-out Hoy (Mariana & Pedro Silva) - HIGHLIGHTED / SELECTED STATE */}
              <div className="p-5 rounded-xl bg-[#FFFFFF] border-2 border-[#191816] shadow-[0_4px_16px_rgba(25,24,22,0.06)] transition-all cursor-pointer relative overflow-hidden ring-1 ring-[#191816]/10">
                <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#191816]" />
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div className="flex items-start gap-3.5 pl-2">
                    <div className="w-12 h-12 rounded-lg bg-[#FAF8F5] border border-[#E7E1D7] text-[#191816] flex flex-col items-center justify-center">
                      <span className="font-display text-base font-semibold leading-none">
                        310
                      </span>
                      <span className="text-[9px] uppercase tracking-wider font-semibold text-[#8F7049] mt-0.5">
                        Deluxe
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-display text-base text-[#191816] font-medium">
                          Mariana &amp; Pedro Silva
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FBF1E6] text-[#B46E28] border border-[#B46E28]/20 text-[11px] font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#B46E28]" />
                          Check-out Hoy 12:00
                        </span>
                      </div>
                      <div className="flex items-center gap-2.5 mt-1 text-[#7A776F] text-xs">
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm text-[#8F7049]">
                            calendar_month
                          </span>
                          20 Oct → 24 Oct (4 noches)
                        </span>
                        <span>
                          •
                        </span>
                        <span>
                          2 Adultos
                        </span>
                        <span>
                          •
                        </span>
                        <span className="text-[#9A968F] font-mono text-[11px]">
                          #FOL-2024-0310
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right sm:pl-2 flex sm:flex-col items-baseline sm:items-end justify-between">
                    <span className="text-[10px] text-[#7A776F] uppercase tracking-[0.14em] font-semibold">
                      Saldo Acumulado
                    </span>
                    <span className="font-display text-xl text-[#B46E28] font-semibold">
                      890,00 €
                    </span>
                  </div>
                </div>
                {/* Micro Breakdown tags */}
                <div className="flex items-center justify-between mt-4 pt-3.5 border-t border-[#E7E1D7] flex-wrap gap-2 pl-2">
                  <div className="flex items-center gap-1.5 text-xs text-[#7A776F] flex-wrap">
                    <span className="px-2 py-0.5 rounded bg-[#FAF8F5] border border-[#E7E1D7] text-[11px]">
                      Hab: 620,00 €
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#FAF8F5] border border-[#E7E1D7] text-[11px]">
                      Spa &amp; Wellness: 190,00 €
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#FAF8F5] border border-[#E7E1D7] text-[11px]">
                      Room Service: 80,00 €
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-1.5 rounded-lg bg-[#FAF8F5] border border-[#E7E1D7] text-[#191816] text-xs font-medium hover:bg-[#F3EFEA] transition-colors">
                      Ver Movimientos
                    </button>
                    <button className="px-3.5 py-1.5 rounded-lg bg-[#191816] text-[#FFFFFF] text-xs font-semibold hover:bg-[#2C2A26] transition-colors flex items-center gap-1.5 shadow-sm">
                      <span className="material-symbols-outlined text-sm leading-none text-[#C5A880]">
                        receipt
                      </span>
                      <span>
                        Liquidación Express
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              {/* Card 2: Dr. Javier Navarro (Habitación 402) */}
              <div className="p-5 rounded-xl bg-[#FFFFFF] border border-[#E7E1D7] hover:border-[#C5A880]/60 shadow-[0_1px_4px_rgba(25,24,22,0.02)] hover:shadow-md transition-all cursor-pointer relative overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div className="flex items-start gap-3.5">
                    <div className="w-12 h-12 rounded-lg bg-[#FAF8F5] border border-[#E7E1D7] text-[#191816] flex flex-col items-center justify-center">
                      <span className="font-display text-base font-semibold leading-none">
                        402
                      </span>
                      <span className="text-[9px] uppercase tracking-wider font-semibold text-[#7A776F] mt-0.5">
                        Suite
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-display text-base text-[#191816] font-medium">
                          Dr. Javier Navarro
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EDF5F0] text-[#3B6E52] border border-[#3B6E52]/20 text-[11px] font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#3B6E52]" />
                          Activo - Sin Facturar
                        </span>
                      </div>
                      <div className="flex items-center gap-2.5 mt-1 text-[#7A776F] text-xs">
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm text-[#8F7049]">
                            calendar_month
                          </span>
                          22 Oct → 25 Oct (3 noches)
                        </span>
                        <span>
                          •
                        </span>
                        <span>
                          1 Huésped
                        </span>
                        <span>
                          •
                        </span>
                        <span className="text-[#9A968F] font-mono text-[11px]">
                          #FOL-2024-0402
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right flex sm:flex-col items-baseline sm:items-end justify-between">
                    <span className="text-[10px] text-[#7A776F] uppercase tracking-[0.14em] font-semibold">
                      Saldo Acumulado
                    </span>
                    <span className="font-display text-xl text-[#191816] font-semibold">
                      640,00 €
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4 pt-3.5 border-t border-[#E7E1D7] flex-wrap gap-2">
                  <div className="flex items-center gap-1.5 text-xs text-[#7A776F] flex-wrap">
                    <span className="px-2 py-0.5 rounded bg-[#FAF8F5] border border-[#E7E1D7] text-[11px]">
                      Hospedaje: 450,00 €
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#FAF8F5] border border-[#E7E1D7] text-[11px]">
                      Restaurante Gourmet: 140,00 €
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#FAF8F5] border border-[#E7E1D7] text-[11px]">
                      Lavandería: 50,00 €
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-1.5 rounded-lg bg-[#FAF8F5] border border-[#E7E1D7] text-[#191816] text-xs font-medium hover:bg-[#F3EFEA] transition-colors">
                      Detalles
                    </button>
                    <button className="px-3.5 py-1.5 rounded-lg bg-[#191816] text-[#FFFFFF] text-xs font-semibold hover:bg-[#2C2A26] transition-colors shadow-sm">
                      Emitir Factura
                    </button>
                  </div>
                </div>
              </div>
              {/* Card 3: Markus Weber (Habitación 108) - CORPORATE INVOICING */}
              <div className="p-5 rounded-xl bg-[#FFFFFF] border border-[#E7E1D7] hover:border-[#C5A880]/60 shadow-[0_1px_4px_rgba(25,24,22,0.02)] hover:shadow-md transition-all cursor-pointer relative overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div className="flex items-start gap-3.5">
                    <div className="w-12 h-12 rounded-lg bg-[#FAF8F5] border border-[#E7E1D7] text-[#191816] flex flex-col items-center justify-center">
                      <span className="font-display text-base font-semibold leading-none">
                        108
                      </span>
                      <span className="text-[9px] uppercase tracking-wider font-semibold text-[#7A776F] mt-0.5">
                        Exec
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-display text-base text-[#191816] font-medium">
                          Markus Weber
                        </span>
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#FAF8F5] text-[#191816] border border-[#E7E1D7] text-[11px] font-medium">
                          <span className="material-symbols-outlined text-xs text-[#8F7049]">
                            domain
                          </span>
                          Siemens AG (DE-29831920)
                        </span>
                      </div>
                      <div className="flex items-center gap-2.5 mt-1 text-[#7A776F] text-xs">
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm text-[#8F7049]">
                            calendar_month
                          </span>
                          21 Oct → 28 Oct (7 noches)
                        </span>
                        <span>
                          •
                        </span>
                        <span className="text-[#3B6E52] font-medium">
                          Crédito B2B Aprobado
                        </span>
                        <span>
                          •
                        </span>
                        <span className="text-[#9A968F] font-mono text-[11px]">
                          #FOL-2024-0108
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right flex sm:flex-col items-baseline sm:items-end justify-between">
                    <span className="text-[10px] text-[#7A776F] uppercase tracking-[0.14em] font-semibold">
                      Saldo Acumulado
                    </span>
                    <span className="font-display text-xl text-[#191816] font-semibold">
                      1.250,00 €
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4 pt-3.5 border-t border-[#E7E1D7] flex-wrap gap-2">
                  <div className="flex items-center gap-1.5 text-xs text-[#7A776F] flex-wrap">
                    <span className="px-2 py-0.5 rounded bg-[#FAF8F5] border border-[#E7E1D7] text-[11px]">
                      Hospedaje: 1.050,00 €
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#FAF8F5] border border-[#E7E1D7] text-[11px]">
                      Business Lounge: 200,00 €
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-1.5 rounded-lg bg-[#FAF8F5] border border-[#E7E1D7] text-[#191816] text-xs font-medium hover:bg-[#F3EFEA] transition-colors">
                      Imputar a Empresa
                    </button>
                    <button className="px-3 py-1.5 rounded-lg bg-[#F6F3EE] border border-[#E7E1D7] text-[#191816] text-xs font-medium hover:bg-[#191816] hover:text-[#FFFFFF] transition-colors">
                      Ver Folio Master
                    </button>
                  </div>
                </div>
              </div>
              {/* Card 4: Lucía Domínguez (Habitación 205) */}
              <div className="p-5 rounded-xl bg-[#FFFFFF] border border-[#E7E1D7] hover:border-[#C5A880]/60 shadow-[0_1px_4px_rgba(25,24,22,0.02)] hover:shadow-md transition-all cursor-pointer relative overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div className="flex items-start gap-3.5">
                    <div className="w-12 h-12 rounded-lg bg-[#FAF8F5] border border-[#E7E1D7] text-[#191816] flex flex-col items-center justify-center">
                      <span className="font-display text-base font-semibold leading-none">
                        205
                      </span>
                      <span className="text-[9px] uppercase tracking-wider font-semibold text-[#7A776F] mt-0.5">
                        Std
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-display text-base text-[#191816] font-medium">
                          Lucía Domínguez
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EDF5F0] text-[#3B6E52] border border-[#3B6E52]/20 text-[11px] font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#3B6E52]" />
                          Activo
                        </span>
                      </div>
                      <div className="flex items-center gap-2.5 mt-1 text-[#7A776F] text-xs">
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm text-[#8F7049]">
                            calendar_month
                          </span>
                          24 Oct → 26 Oct (2 noches)
                        </span>
                        <span>
                          •
                        </span>
                        <span>
                          1 Huésped
                        </span>
                        <span>
                          •
                        </span>
                        <span className="text-[#9A968F] font-mono text-[11px]">
                          #FOL-2024-0205
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right flex sm:flex-col items-baseline sm:items-end justify-between">
                    <span className="text-[10px] text-[#7A776F] uppercase tracking-[0.14em] font-semibold">
                      Saldo Acumulado
                    </span>
                    <span className="font-display text-xl text-[#191816] font-semibold">
                      220,00 €
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4 pt-3.5 border-t border-[#E7E1D7] flex-wrap gap-2">
                  <div className="flex items-center gap-1.5 text-xs text-[#7A776F] flex-wrap">
                    <span className="px-2 py-0.5 rounded bg-[#FAF8F5] border border-[#E7E1D7] text-[11px]">
                      Hospedaje: 180,00 €
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#FAF8F5] border border-[#E7E1D7] text-[11px]">
                      Minibar: 40,00 €
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-1.5 rounded-lg bg-[#FAF8F5] border border-[#E7E1D7] text-[#191816] text-xs font-medium hover:bg-[#F3EFEA] transition-colors">
                      Detalles
                    </button>
                    <button className="px-3.5 py-1.5 rounded-lg bg-[#191816] text-[#FFFFFF] text-xs font-semibold hover:bg-[#2C2A26] transition-colors">
                      Emitir Factura
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* RIGHT: Inspector Panel - Detalle de Cuenta Hab. 310 */}
          <div className="lg:col-span-5 sticky top-24 flex flex-col gap-4">
            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E7E1D7] shadow-[0_8px_30px_rgba(25,24,22,0.04)]">
              {/* Inspector Title & Metadata Header */}
              <div className="flex items-start justify-between pb-5 border-b border-[#E7E1D7]">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-[#191816] text-[#FFFFFF] flex items-center justify-center font-display font-semibold text-lg border border-[#C5A880]/30">
                    310
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="font-display text-lg text-[#191816] font-semibold">
                        Mariana &amp; Pedro Silva
                      </h2>
                    </div>
                    <p className="text-xs text-[#7A776F]">
                      Hab. Deluxe Vista Mar • Folio Abierto #FOL-0310
                    </p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#FBF1E6] text-[#B46E28] border border-[#B46E28]/25 text-xs font-semibold">
                  Salida Hoy
                </span>
              </div>
              {/* Quick Room Folio Visual Snapshot */}
              <div className="grid grid-cols-2 gap-3 my-4 p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E7E1D7]">
                <div>
                  <span className="block text-[10px] text-[#7A776F] uppercase tracking-[0.14em] font-semibold">
                    Check-in
                  </span>
                  {' '}
                  <span className="text-xs text-[#191816] font-semibold mt-0.5 block">
                    20 Oct, 14:30
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] text-[#7A776F] uppercase tracking-[0.14em] font-semibold">
                    Check-out Límite
                  </span>
                  {' '}
                  <span className="text-xs text-[#B46E28] font-semibold mt-0.5 block">
                    24 Oct, 12:00 (Hoy)
                  </span>
                </div>
              </div>
              {/* Accounting Charges Ledger Breakdown */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-[#7A776F] uppercase tracking-[0.16em] font-semibold">
                    Desglose de Consumos &amp; Cargos
                  </span>
                  <button className="text-[#8F7049] hover:text-[#191816] text-xs font-semibold hover:underline flex items-center gap-1 transition-colors">
                    <span className="material-symbols-outlined text-sm">
                      tune
                    </span>
                    <span>
                      Reconciliar
                    </span>
                  </button>
                </div>
                <div className="mt-2 divide-y divide-[#E7E1D7] overflow-hidden rounded-xl border border-[#E7E1D7] bg-[#FFFFFF]">
                  {/* Line Item 1 */}
                  <div className="p-3.5 flex items-center justify-between text-xs hover:bg-[#FAF8F5] transition-colors">
                    <div className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-base text-[#C5A880] mt-0.5">
                        bed
                      </span>
                      <div>
                        <div className="text-xs font-semibold text-[#191816]">
                          Alojamiento (4 Noches)
                        </div>
                        <div className="text-[11px] text-[#868380]">
                          20 Oct - 24 Oct • Cod. 7001 (IVA 10%)
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold text-[#191816]">
                        620,00 €
                      </span>
                    </div>
                  </div>
                  {/* Line Item 2 */}
                  <div className="p-3.5 flex items-center justify-between text-xs hover:bg-[#FAF8F5] transition-colors">
                    <div className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-base text-[#C5A880] mt-0.5">
                        spa
                      </span>
                      <div>
                        <div className="text-xs font-semibold text-[#191816]">
                          Circuito Termal &amp; Masaje Relax
                        </div>
                        <div className="text-[11px] text-[#868380]">
                          22 Oct, 17:15 • Ticket SPA-892 (IVA 21%)
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold text-[#191816]">
                        190,00 €
                      </span>
                    </div>
                  </div>
                  {/* Line Item 3 */}
                  <div className="p-3.5 flex items-center justify-between text-xs hover:bg-[#FAF8F5] transition-colors">
                    <div className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-base text-[#C5A880] mt-0.5">
                        room_service
                      </span>
                      <div>
                        <div className="text-xs font-semibold text-[#191816]">
                          Cena Room Service - Menú Degustación
                        </div>
                        <div className="text-[11px] text-[#868380]">
                          23 Oct, 21:40 • Comanda #4412 (IVA 10%)
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold text-[#191816]">
                        80,00 €
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Inline Action for Quick Adjustment */}
              <div className="flex items-center gap-2 mt-2">
                <button className="flex-1 py-2 px-3 rounded-lg bg-[#FAF8F5] border border-[#E7E1D7] hover:bg-[#F3EFEA] text-[#191816] text-xs font-medium flex items-center justify-center gap-1.5 transition-colors" type="button">
                  <span className="material-symbols-outlined text-sm text-[#8F7049]">
                    add_circle
                  </span>
                  <span>
                    Cargar Consumo
                  </span>
                </button>
                <button className="flex-1 py-2 px-3 rounded-lg bg-[#FAF8F5] border border-[#E7E1D7] hover:bg-[#F3EFEA] text-[#191816] text-xs font-medium flex items-center justify-center gap-1.5 transition-colors" type="button">
                  <span className="material-symbols-outlined text-sm text-[#8F7049]">
                    percent
                  </span>
                  <span>
                    Descuento / Bono
                  </span>
                </button>
              </div>
              {/* Invoicing & Fiscal Options Form */}
              <div className="mt-4 pt-4 border-t border-[#E7E1D7]">
                <label className="block text-[10px] text-[#7A776F] uppercase tracking-[0.16em] font-semibold mb-2.5">
                  Modalidad de Facturación Fiscal
                </label>
                <div className="grid grid-cols-2 gap-2 mb-3.5">
                  <label className="flex items-center gap-2 p-2.5 rounded-lg bg-[#FAF8F5] border border-[#C5A880]/50 cursor-pointer hover:bg-[#F6F3EE] transition-all">
                    <input defaultChecked className="text-[#191816] focus:ring-[#C5A880] accent-[#191816]" name="fiscal_mode" type="radio" />
                    <span className="text-xs font-medium text-[#191816]">
                      Consumidor Final (Simplificada)
                    </span>
                  </label>
                  <label className="flex items-center gap-2 p-2.5 rounded-lg bg-[#FAF8F5] border border-[#E7E1D7] cursor-pointer hover:bg-[#F6F3EE] transition-all">
                    <input className="text-[#191816] focus:ring-[#C5A880] accent-[#191816]" name="fiscal_mode" type="radio" />
                    <span className="text-xs font-medium text-[#191816]">
                      Con Razón Social / CIF
                    </span>
                  </label>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between text-[#7A776F]">
                    <span>
                      Base Imponible (Hospedaje 10%)
                    </span>
                    <span className="text-[#191816] font-medium">
                      636,36 €
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[#7A776F]">
                    <span>
                      Base Imponible (Servicios 21%)
                    </span>
                    <span className="text-[#191816] font-medium">
                      157,02 €
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[#7A776F]">
                    <span>
                      Impuestos Agregados (IVA Total)
                    </span>
                    <span className="text-[#191816] font-medium">
                      96,62 €
                    </span>
                  </div>
                  <div className="pt-3 border-t border-[#E7E1D7] flex items-baseline justify-between">
                    <span className="font-display text-sm font-semibold text-[#191816]">
                      Total a Liquidar
                    </span>
                    <span className="font-display text-2xl font-bold text-[#191816]">
                      890,00 €
                    </span>
                  </div>
                </div>
              </div>
              {/* Settlement Execution Buttons */}
              <div className="mt-5 flex flex-col gap-2">
                <button className="w-full py-3 px-4 rounded-xl bg-[#191816] text-[#FFFFFF] hover:bg-[#2C2A26] font-semibold text-xs flex items-center justify-center gap-2 shadow-[0_2px_8px_rgba(25,24,22,0.15)] transition-all transform active:scale-[0.99] tracking-wide" type="button">
                  <span className="material-symbols-outlined text-base text-[#C5A880]">
                    check_circle
                  </span>
                  <span>
                    Generar Factura Final y Check-out
                  </span>
                </button>
                <div className="flex items-center gap-2">
                  <button className="flex-1 py-2 px-3 rounded-lg bg-[#FAF8F5] border border-[#E7E1D7] text-[#191816] hover:bg-[#F3EFEA] text-xs font-medium flex items-center justify-center gap-1.5 transition-colors" type="button">
                    <span className="material-symbols-outlined text-sm text-[#8F7049]">
                      print
                    </span>
                    <span>
                      Proforma PDF
                    </span>
                  </button>
                  <button className="flex-1 py-2 px-3 rounded-lg bg-[#FAF8F5] border border-[#E7E1D7] text-[#191816] hover:bg-[#F3EFEA] text-xs font-medium flex items-center justify-center gap-1.5 transition-colors" type="button">
                    <span className="material-symbols-outlined text-sm text-[#8F7049]">
                      call_split
                    </span>
                    <span>
                      Dividir Cuenta
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
