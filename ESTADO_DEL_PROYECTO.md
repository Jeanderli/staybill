# StayBill — Estado del proyecto

> Se actualiza con **cada avance**. El detalle de cada fase está en [PLAN_DE_TRABAJO.md](PLAN_DE_TRABAJO.md).

**Última actualización:** 2026-10-05
**Fase actual:** Fase 1 — Autenticación completa y perfil (sin empezar)

## Resumen

| Fase | Nombre | Estado | Avance |
|---|---|---|---|
| 0 | Base del proyecto | ✅ Terminada | 100% |
| 1 | Autenticación completa y perfil | ⏳ Pendiente | 0% |
| 2 | Biblioteca de componentes | ⏳ Pendiente | 0% |
| 3 | Habitaciones y tarifas | ⏳ Pendiente | 0% |
| 4 | Huéspedes y folios | ⏳ Pendiente | 0% |
| 5 | Facturación, comprobantes y pagos | ⏳ Pendiente | 0% |
| 6 | Panel de control | ⏳ Pendiente | 0% |
| 7 | Reportes y configuración | ⏳ Pendiente | 0% |
| 8 | Calidad y despliegue | ⏳ Pendiente | 0% |

Leyenda: ✅ Terminada · 🔄 En progreso · ⏳ Pendiente · ⚠️ Bloqueada

## Bloqueos actuales

- ⚠️ **El backend no arranca en local:** PostgreSQL rechaza la contraseña `12345` de `application.properties`. Hay que poner la contraseña real del usuario `postgres` y confirmar que existe la base `staybill`. Mientras tanto no se puede probar nada contra la base de datos.

---

## Checklist por fase

### Fase 0 — Base del proyecto ✅
- [x] Endpoint `POST /api/auth/registro` con contraseña encriptada (BCrypt) y control de correo duplicado (409)
- [x] Endpoint `POST /api/auth/login` (401 credenciales incorrectas, 403 cuenta inactiva)
- [x] `SecurityConfig`: rutas públicas, CORS para `localhost:5173`, `/error` público
- [x] Java 21 en el `pom.xml`
- [x] MCP de Google Stitch conectado a Claude Code
- [x] 5 pantallas de Stitch descargadas en `frontend-app-ing-web/stitch/`
- [x] Tailwind v4 con el tema generado desde Stitch (`src/index.css`)
- [x] React Router con rutas protegidas
- [x] `layouts/Layout.jsx` (menú + barra superior) y `layouts/AuthLayout.jsx`
- [x] Login y Registro conectados a la API
- [x] Panel, Facturación, Detalle de factura y Huéspedes convertidos a React (datos de ejemplo)
- [ ] Probar login y registro contra la base real → **bloqueado** (ver arriba)

### Fase 1 — Autenticación completa y perfil
- [ ] Backend: dependencia JWT y servicio de tokens
- [ ] Backend: filtro JWT en `SecurityConfig`
- [ ] Backend: el login devuelve `{ token, usuario }`
- [ ] Backend: `GET /api/auth/me`
- [ ] Backend: `PUT /api/usuarios/me` y `PUT /api/usuarios/me/password`
- [ ] Backend: roles `ADMIN` / `RECEPCION` / `USER`
- [ ] `api/cliente.js` (mover `src/axios.js`) con interceptores de token y 401
- [ ] `api/authApi.js`, `api/usuariosApi.js`
- [ ] `store/auth.js` con token, `estaAutenticado()` y `tieneRol()`
- [ ] `components/ui/`: `Campo`, `Alerta`, `Boton`, `BotonVerPassword` (sacados de `AuthLayout`)
- [ ] Diseñar "Mi Perfil" en Stitch
- [ ] `pages/Perfil.jsx`
- [ ] Menú según el rol del usuario

### Fase 2 — Biblioteca de componentes
- [ ] `components/ui/`: `Boton`, `Campo`, `Select`, `Badge`, `Tarjeta`, `KpiCard`, `Tabla`, `Paginacion`, `Tabs`, `Modal`, `Spinner`, `EstadoVacio`, `Alerta`, `Icono`
- [ ] `components/ui/formato.js` (`formatearMoneda`, `formatearFecha`)
- [ ] `components/panel/*` y `Panel.jsx` refactorizado
- [ ] `components/facturacion/*` y `Facturacion.jsx` + `DetalleFactura.jsx` refactorizados
- [ ] `components/huespedes/*` y `Huespedes.jsx` refactorizado
- [ ] `api/` con datos de ejemplo (`facturasApi`, `foliosApi`, `dashboardApi`)
- [ ] Estados de cargando / vacío / error en cada página

### Fase 3 — Habitaciones y tarifas
- [ ] Backend: entidad, repositorio, servicio y controlador de `Habitacion`
- [ ] Diseñar "Habitaciones & Tarifas" en Stitch
- [ ] `api/habitacionesApi.js`
- [ ] `components/habitaciones/`: `TablaHabitaciones`, `FormHabitacion`, `EstadoHabitacionBadge`
- [ ] `pages/Habitaciones.jsx`

### Fase 4 — Huéspedes y folios
- [ ] Backend: `Huesped`, `Folio`, `Cargo` con sus endpoints
- [ ] Backend: check-in (ocupa la habitación + cargo de alojamiento automático)
- [ ] `api/huespedesApi.js`, `api/foliosApi.js` reales
- [ ] `ModalCheckIn`, `ModalCargarConsumo`
- [ ] `Huespedes.jsx` con filtros, búsqueda y detalle del folio

### Fase 5 — Facturación, comprobantes y pagos
- [ ] Backend: `Factura`, `LineaFactura`, `Pago`
- [ ] Backend: checkout transaccional con numeración correlativa
- [ ] Backend: listado paginado y filtros, pagos, nota de crédito
- [ ] `Facturacion.jsx` con datos reales y paginación
- [ ] Ruta `/facturacion/:id` y `DetalleFactura.jsx` real
- [ ] `ModalRegistrarPago`
- [ ] Botón "Generar Factura Final y Check-out" conectado

### Fase 6 — Panel de control
- [ ] Backend: `GET /api/dashboard/resumen`
- [ ] `Panel.jsx` con datos reales y selector de período

### Fase 7 — Reportes y configuración
- [ ] Backend: reporte de ingresos y gestión de usuarios
- [ ] Diseñar "Reportes" y "Configuración" en Stitch
- [ ] `pages/Reportes.jsx`, `pages/Configuracion.jsx`

### Fase 8 — Calidad y despliegue
- [ ] Pruebas backend (JUnit) y frontend
- [ ] Ajustes responsive (1366 px y tablet)
- [ ] Contraseña de la base en variable de entorno
- [ ] Docker (frontend, backend, PostgreSQL)
- [ ] Caddy con HTTPS
- [ ] Evaluar Supabase

---

## Registro de avances

Lo más reciente va arriba.

### 2026-10-05 — Plan de trabajo creado
- Creados `PLAN_DE_TRABAJO.md` y este archivo.

### 2026-10-05 — Fase 0 terminada
- Login (`/api/auth/login`) y seguridad en el backend; Java 21.
- Stitch conectado por MCP; 5 pantallas descargadas y convertidas a React con Tailwind.
- Rutas, layouts, login y registro conectados a la API.
- Verificado: `./mvnw compile`, `bun run build` y `bun run lint` sin errores; las pantallas se ven bien en el navegador.
- Pendiente: prueba real contra PostgreSQL (bloqueada por la contraseña).
