# StayBill — Plan de trabajo

Plan para integrar las pantallas diseñadas en **Google Stitch** (proyecto *AQELION Hospitality Invoicing System*, ID `12124968923745413548`) con funcionalidad real, conectadas al backend Spring Boot.

> El avance de cada fase se registra en [ESTADO_DEL_PROYECTO.md](ESTADO_DEL_PROYECTO.md).

---

## 1. Qué es StayBill

Sistema web de **facturación hotelera**: registra habitaciones y huéspedes, abre una cuenta (folio) por cada estadía, acumula los consumos del huésped y al hacer el check-out genera la factura y registra el pago.

**Flujo principal del negocio:**

```
Habitación ──► Check-in (abre Folio) ──► Cargos/consumos ──► Check-out ──► Factura ──► Pago
                    ▲                                                          │
                 Huésped                                                 Panel / Reportes
```

**Stack:** React 19 + Vite + Tailwind v4 + React Router (frontend) · Java 21 + Spring Boot 4 + Spring Security + JPA (backend) · PostgreSQL.

---

## 2. Reglas del desarrollo

### 2.1 Estructura de carpetas del frontend (se respeta la existente)

```
src/
├── api/          Llamadas HTTP al backend, un archivo por módulo (authApi.js, huespedesApi.js...)
├── components/   Componentes reutilizables
│   ├── ui/           Piezas genéricas: Boton, Campo, Badge, Tarjeta, Modal, Tabla...
│   ├── panel/        Componentes propios del Panel de Control
│   ├── facturacion/  Componentes de Facturación y Detalle de factura
│   ├── huespedes/    Componentes de Huéspedes y Folios
│   └── habitaciones/ Componentes de Habitaciones
├── layouts/      Estructuras de página: Layout (menú + barra), AuthLayout (login/registro)
├── pages/        Una página por ruta. Solo arma componentes y maneja el estado de la pantalla
├── store/        Estado global de la app (sesión del usuario, token)
├── App.jsx       Rutas
├── main.jsx
└── index.css     Tema de Tailwind (generado desde Stitch)
```

### 2.2 Desarrollo basado en componentes

- **Una página = composición de componentes.** Las páginas que hoy son HTML convertido de Stitch (`Panel.jsx`, `Facturacion.jsx`, `DetalleFactura.jsx`, `Huespedes.jsx`) se van a dividir en componentes pequeños que reciben datos por `props`.
- **Los componentes no llaman a la API.** Solo las páginas llaman a `api/` y pasan los datos hacia abajo. Así los componentes son fáciles de reutilizar y probar.
- **Nada de datos escritos a mano en los componentes.** Mientras un endpoint no exista, la función de `api/` devuelve datos de ejemplo. Cuando el backend esté listo, solo se cambia esa función y la página no se toca.
- **Estados de pantalla obligatorios:** cada pantalla con datos debe mostrar *cargando*, *vacío* y *error*.
- Nombres en español, como el resto del proyecto (`FolioCard`, `TablaFacturas`, `formatearMoneda`).

### 2.3 Backend

- Capas ya usadas en el proyecto: `model` → `repository` → `service` → `controller`, más `dto` y `config`.
- Se mantiene la convención de columnas actual: `campo_tabla` (ej. `nom_usu`, `num_hab`, `tot_fac`).
- Errores con `ResponseStatusException` y códigos HTTP correctos (400, 401, 403, 404, 409).
- Todos los endpoints, salvo `/api/auth/**`, exigen sesión (token JWT a partir de la Fase 1).

### 2.4 Definición de "terminado" para cada tarea

1. Compila: `./mvnw compile` y `bun run build` sin errores. `bun run lint` sin errores.
2. Probado contra el backend real (no solo con datos de ejemplo).
3. Se ve igual que el diseño de Stitch.
4. **[ESTADO_DEL_PROYECTO.md](ESTADO_DEL_PROYECTO.md) actualizado.**

---

## 3. Modelo de datos (backend)

| Entidad | Campos principales | Relación |
|---|---|---|
| **Usuario** *(existe)* | nombre, correo, contraseña (BCrypt), rol (`ADMIN`/`RECEPCION`/`USER`), estado | — |
| **Habitacion** | número, tipo (Estándar/Deluxe/Suite), piso, tarifa por noche, estado (Disponible/Ocupada/Limpieza/Mantenimiento) | — |
| **Huesped** | nombre, tipo y número de documento, correo, teléfono, empresa / razón social, NIF/RUC | — |
| **Folio** (estadía) | código (`FOL-2026-0001`), check-in, check-out previsto y real, adultos, estado (Abierto/Cerrado) | N:1 Huesped, N:1 Habitacion |
| **Cargo** (consumo) | fecha, concepto, categoría (Alojamiento/Restaurante/Spa/Minibar/Otros), cantidad, precio unitario, % IVA | N:1 Folio |
| **Factura** | número (`FAC-2026-00001`), tipo (Factura/Nota de crédito), fecha, base imponible, IVA, total, estado (Pendiente/Cobrada/Anulada) | 1:1 Folio, N:1 Huesped |
| **LineaFactura** | copia de los cargos al momento de facturar | N:1 Factura |
| **Pago** | fecha, monto, método (Tarjeta/Transferencia/Efectivo/Crédito) | N:1 Factura |

> Las integraciones fiscales que aparecen en el diseño (Veri\*Factu, SII, SAT, AFIP, certificados FNMT) y la sincronización con PMS externos **quedan fuera del alcance**. Esos bloques se mantienen como elementos visuales o se reemplazan por información real del sistema.

---

## 4. Endpoints

| Método | Ruta | Fase | Descripción |
|---|---|---|---|
| POST | `/api/auth/registro` | ✅ hecho | Crear cuenta |
| POST | `/api/auth/login` | ✅ hecho → 1 | Iniciar sesión (en Fase 1 devuelve token JWT) |
| GET | `/api/auth/me` | 1 | Usuario de la sesión actual |
| PUT | `/api/usuarios/me` | 1 | Editar mi perfil |
| PUT | `/api/usuarios/me/password` | 1 | Cambiar contraseña |
| GET/POST | `/api/habitaciones` | 3 | Listar (filtro por estado) / crear |
| PUT/DELETE | `/api/habitaciones/{id}` | 3 | Editar / dar de baja |
| GET/POST | `/api/huespedes` | 4 | Listar (búsqueda) / crear |
| GET/PUT | `/api/huespedes/{id}` | 4 | Ver / editar |
| GET | `/api/folios?estado=&q=` | 4 | Listar folios (Todas / Check-out hoy / Con saldo) |
| POST | `/api/folios` | 4 | Check-in: abre folio y ocupa la habitación |
| GET | `/api/folios/{id}` | 4 | Detalle del folio con sus cargos y totales |
| POST | `/api/folios/{id}/cargos` | 4 | Cargar consumo |
| DELETE | `/api/folios/{id}/cargos/{cargoId}` | 4 | Quitar cargo (solo si el folio está abierto) |
| POST | `/api/folios/{id}/checkout` | 5 | Cierra el folio, genera la factura, libera la habitación |
| GET | `/api/facturas?tipo=&estado=&desde=&hasta=&q=&page=` | 5 | Listado paginado con filtros |
| GET | `/api/facturas/{id}` | 5 | Detalle con líneas, pagos e historial |
| POST | `/api/facturas/{id}/pagos` | 5 | Registrar pago |
| POST | `/api/facturas/{id}/nota-credito` | 5 | Anular mediante nota de crédito |
| GET | `/api/dashboard/resumen?periodo=` | 6 | KPIs, últimas facturas, cobros por método, alertas |
| GET | `/api/reportes/ingresos?desde=&hasta=` | 7 | Ingresos por categoría y período |

---

## 5. Fases

### Fase 0 — Base del proyecto ✅
Ya está hecho: conexión de Stitch por MCP, tema de Tailwind generado desde los diseños, rutas, layouts, login y registro conectados a la API, y las 4 pantallas de Stitch convertidas a React (con datos de ejemplo).

---

### Fase 1 — Autenticación completa y perfil
**Objetivo:** sesión segura con token. Hoy el login solo guarda el usuario en el navegador y el backend no protege nada más.

| Capa | Tareas |
|---|---|
| Backend | Agregar JWT (`jjwt`). El login devuelve `{ token, usuario }`. Filtro que valida el token en cada petición. `GET /api/auth/me`. Endpoints de perfil y de cambio de contraseña. Roles `ADMIN` / `RECEPCION` / `USER`. |
| `api/` | Mover `src/axios.js` a `api/cliente.js` con interceptores: agrega el token a cada petición y cierra la sesión si recibe un 401. Crear `api/authApi.js` y `api/usuariosApi.js`. |
| `store/` | `auth.js` guarda token + usuario. Agregar `estaAutenticado()` y `tieneRol()`. |
| `components/ui/` | Sacar de `AuthLayout` los componentes `Campo`, `Alerta`, `BotonPrincipal` y `BotonVerPassword` y moverlos a `ui/`. |
| `pages/` | **Mi Perfil** (`/perfil`): datos del usuario, editar nombre, cambiar contraseña. Diseño nuevo con Stitch. |
| `layouts/` | El menú muestra u oculta opciones según el rol. |

**Terminado cuando:** sin token, cualquier endpoint protegido responde 401; al recargar la página la sesión se mantiene; cerrar sesión borra el token.

---

### Fase 2 — Biblioteca de componentes
**Objetivo:** dividir las páginas convertidas de Stitch en componentes reutilizables, todavía con datos de ejemplo servidos desde `api/`.

| Carpeta | Componentes |
|---|---|
| `components/ui/` | `Boton`, `Campo`, `Select`, `Badge` (estados con colores), `Tarjeta`, `KpiCard`, `Tabla`, `Paginacion`, `Tabs`, `Modal`, `Spinner`, `EstadoVacio`, `Alerta`, `Icono` (Material Symbols) |
| `components/panel/` | `TablaUltimasFacturas`, `GraficoCobros` (dona), `AlertasProximas`, `OcupacionFolios`, `ModuloFiscal` |
| `components/facturacion/` | `FiltrosFacturas`, `TablaFacturas`, `BalanceVista`, `GraficoIngresos`, `LiquidacionRapida`, `FacturaDocumento` (área imprimible), `EstadoTributario`, `HistorialEventos`, `EnvioTelematico` |
| `components/huespedes/` | `TabsFolios`, `FolioCard`, `FolioDetalle`, `DesgloseCargos`, `ResumenLiquidacion` |
| `api/` | `facturasApi.js`, `foliosApi.js`, `dashboardApi.js`, que por ahora devuelven datos de ejemplo |
| Utilidades | `formatearMoneda`, `formatearFecha` (dentro de `components/ui/formato.js`) |

**Terminado cuando:** ninguna página pasa de ~150 líneas, todas se ven igual que antes y los datos llegan por `props`.

---

### Fase 3 — Habitaciones y tarifas
**Objetivo:** CRUD de habitaciones, base para poder hacer check-in.

| Capa | Tareas |
|---|---|
| Backend | Entidad `Habitacion`, repositorio, servicio, controlador. Validar que el número no se repita. |
| Stitch | Generar la pantalla "Habitaciones & Tarifas" con el MCP, usando el mismo sistema de diseño. |
| `api/` | `habitacionesApi.js` |
| `components/habitaciones/` | `TablaHabitaciones`, `FormHabitacion` (en `Modal`), `EstadoHabitacionBadge` |
| `pages/` | `Habitaciones.jsx` (reemplaza a "Próximamente") |

**Terminado cuando:** se puede crear, editar, filtrar por estado y dar de baja una habitación desde la UI.

---

### Fase 4 — Huéspedes y folios
**Objetivo:** la pantalla de Huéspedes funciona de verdad: check-in, consumos y saldo.

| Capa | Tareas |
|---|---|
| Backend | Entidades `Huesped`, `Folio`, `Cargo`. Al hacer check-in la habitación pasa a Ocupada y se genera automáticamente el cargo de alojamiento (noches × tarifa). Cálculo de saldo, base e IVA. |
| `api/` | `huespedesApi.js`, `foliosApi.js` con datos reales |
| `components/huespedes/` | `ModalCheckIn` (buscar o crear huésped y elegir habitación disponible), `ModalCargarConsumo`, y conectar `TabsFolios`, `FolioCard` y `FolioDetalle` |
| `pages/` | `Huespedes.jsx`: lista, filtros (Todas / Check-out hoy / Con saldo), búsqueda, selección del folio y panel de detalle |

**Terminado cuando:** desde la UI se hace un check-in, se cargan consumos y el saldo se actualiza solo.

---

### Fase 5 — Facturación, comprobantes y pagos
**Objetivo:** check-out que genera la factura; listado y detalle de facturas reales.

| Capa | Tareas |
|---|---|
| Backend | Entidades `Factura`, `LineaFactura`, `Pago`. `POST /folios/{id}/checkout` en una sola transacción: cierra el folio → crea la factura con numeración correlativa → libera la habitación. Listado paginado con filtros. Pagos parciales o totales (estado Pendiente → Cobrada). Nota de crédito. |
| `api/` | `facturasApi.js` real |
| `components/facturacion/` | Conectar `FiltrosFacturas`, `TablaFacturas` y `Paginacion`. Agregar `ModalRegistrarPago` y `FacturaDocumento` con datos reales. |
| `pages/` | `Facturacion.jsx` con datos reales. La ruta del detalle pasa de `/facturacion/detalle` a `/facturacion/:id`. Imprimir o guardar como PDF con `window.print()`. "Generar Factura Final y Check-out" en Huéspedes llama al checkout. |

**Terminado cuando:** el ciclo completo funciona desde la UI: check-in → consumos → check-out → factura → pago → factura Cobrada.

---

### Fase 6 — Panel de control
**Objetivo:** KPIs y gráficos con datos reales.

| Capa | Tareas |
|---|---|
| Backend | `GET /api/dashboard/resumen?periodo=hoy|semana|mes`: facturación del período, pendiente de cobro, ocupación, cobros por método, últimas facturas y alertas (check-outs del día, facturas vencidas). |
| `api/` | `dashboardApi.js` real |
| `pages/` | `Panel.jsx`: el selector Hoy / Semana / Mes cambia los datos. "Nueva Factura" en la barra superior lleva a Huéspedes. |

**Terminado cuando:** los números del panel coinciden con los datos cargados en las fases 3 a 5.

---

### Fase 7 — Reportes y configuración
| Capa | Tareas |
|---|---|
| Backend | `GET /api/reportes/ingresos`. Gestión de usuarios (solo `ADMIN`). |
| Stitch | Generar las pantallas "Reportes Fiscales" y "Configuración". |
| `pages/` | `Reportes.jsx` (ingresos por categoría y fechas, exportar CSV) y `Configuracion.jsx` (datos del hotel, % de IVA, usuarios). |

---

### Fase 8 — Calidad y despliegue
- **Pruebas:** backend con JUnit (servicios de folio, checkout y facturación); frontend con pruebas de componentes clave.
- **Responsive:** el diseño de Stitch es para pantallas de 2560 px. Hay que ajustar las tablas y el menú para laptop (1366 px) y tablet.
- **Seguridad:** sacar la contraseña de la base de `application.properties` a una variable de entorno.
- **Despliegue (pendiente desde el README):** Docker para frontend, backend y PostgreSQL; **Caddy** como proxy inverso con HTTPS. Más adelante, evaluar **Supabase**.

---

## 6. Orden y dependencias

```
Fase 0 ✅ ─► Fase 1 ─► Fase 2 ─► Fase 3 ─► Fase 4 ─► Fase 5 ─► Fase 6 ─► Fase 7 ─► Fase 8
                         (componentes)  (habitaciones) (folios)  (facturas)  (panel)
```

Las fases 1 y 2 se pueden hacer en paralelo. Las fases 3 a 6 van en orden porque cada una usa los datos de la anterior.
