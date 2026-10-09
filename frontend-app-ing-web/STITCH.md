# StayBill — Prompts para Google Stitch

Documento para generar las pantallas web de **StayBill** en [Google Stitch](https://stitch.withgoogle.com).
Copia primero el bloque **"Sistema de diseño"** como contexto, y luego pega el prompt de cada pantalla (una por una).

---

## 1. Contexto de la aplicación

- **Nombre:** StayBill
- **Tipo:** Aplicación web cliente-servidor (React + Vite en el frontend, Spring Boot + PostgreSQL en el backend).
- **Objetivo actual:** Autenticación y registro de usuarios.
- **Plataforma:** Web, responsive (escritorio primero, debe verse bien en móvil).
- **Idioma de la interfaz:** Español.

### Datos del usuario (modelo `Usuario`)

| Campo backend  | Etiqueta en UI       | Tipo / regla                          |
|----------------|----------------------|---------------------------------------|
| `nom_usu`      | Nombre completo      | Texto, obligatorio                    |
| `correo_usu`   | Correo electrónico   | Email, obligatorio, único             |
| `pass_usu`     | Contraseña           | Password, obligatorio, mín. 8 caract. |
| `rol_usu`      | Rol                  | `USER` por defecto (no se muestra en registro) |
| `estado_usu`   | Estado               | Activo / Inactivo (solo lectura)      |

### Endpoints

- `POST /api/auth/registro` → registra un usuario.
- `POST /api/auth/login` → inicio de sesión.

---

## 2. Sistema de diseño (pegar primero en Stitch)

```
Design system for a web app called "StayBill".
Style: clean, modern, minimal SaaS. Lots of white space, soft shadows, rounded corners (12px cards, 8px inputs and buttons).
Colors:
- Primary: #AA3BFF (purple) — main buttons, links, focus rings
- Primary soft background: rgba(170, 59, 255, 0.1)
- Text headings: #08060D
- Body text: #6B6375
- Background: #FFFFFF, secondary surface #F4F3EC
- Borders: #E5E4E7
- Error: #DC2626, Success: #16A34A
Dark mode: background #16171D, surfaces #1F2028, borders #2E303A, headings #F3F4F6, body #9CA3AF, primary #C084FC.
Typography: system-ui / Inter. Headings weight 500-600, tight letter spacing. Body 16px.
Components: text inputs with label above, helper/error text below, password field with show/hide eye icon, full-width primary button, secondary outline button, toast notifications.
All UI text in Spanish.
```

---

## 3. Pantallas

### 3.1 Inicio de sesión (Login)

```
Create a desktop login page for "StayBill" using the design system.
Layout: split screen. Left half: purple (#AA3BFF) gradient panel with the StayBill logo, the tagline "Gestiona tus estadías y facturación en un solo lugar" and a simple abstract illustration. Right half: centered white card (max width 420px).
Card content (Spanish):
- Title "Iniciar sesión"
- Subtitle "Bienvenido de nuevo, ingresa tus datos"
- Input "Correo electrónico" (placeholder: tucorreo@ejemplo.com)
- Input "Contraseña" with show/hide icon
- Row: checkbox "Recordarme" and link "¿Olvidaste tu contraseña?"
- Primary full-width button "Ingresar"
- Footer text: "¿No tienes cuenta? Regístrate" (link)
Show an inline error state example below the password: "Correo o contraseña incorrectos".
On mobile, hide the left panel and show only the card.
```

### 3.2 Registro

```
Create a desktop sign-up page for "StayBill" using the same split layout as the login page.
Card content (Spanish):
- Title "Crear cuenta"
- Subtitle "Regístrate para comenzar a usar StayBill"
- Input "Nombre completo"
- Input "Correo electrónico"
- Input "Contraseña" with show/hide icon and a password strength bar (débil / media / fuerte) and hint "Mínimo 8 caracteres"
- Input "Confirmar contraseña"
- Checkbox "Acepto los términos y condiciones"
- Primary full-width button "Crear cuenta"
- Footer text: "¿Ya tienes cuenta? Inicia sesión" (link)
Include validation states: one field with error "Este correo ya está registrado".
```

### 3.3 Registro exitoso

```
Create a confirmation screen for "StayBill" after a successful sign-up.
Centered card with a green check icon, title "¡Cuenta creada con éxito!", text "Ya puedes iniciar sesión con tu correo y contraseña." and a primary button "Ir a iniciar sesión".
```

### 3.4 Panel principal (después del login)

```
Create a simple dashboard for "StayBill" shown after login.
Layout: left sidebar (logo StayBill, menu items: "Inicio", "Mi perfil", "Configuración", and "Cerrar sesión" at the bottom). Top bar with a greeting "Hola, {Nombre}" and a user avatar with dropdown.
Main area: welcome card, and 3 summary cards ("Estado de la cuenta: Activa", "Rol: USER", "Último acceso").
All text in Spanish. Clean and minimal.
```

### 3.5 Mi perfil

```
Create a "Mi perfil" page for "StayBill" inside the same dashboard layout.
Card with avatar placeholder, read-only fields: "Nombre completo", "Correo electrónico", "Rol" (badge), "Estado" (green badge "Activo" or gray "Inactivo").
Buttons: "Editar perfil" (primary) and "Cambiar contraseña" (outline).
```

---

## 4. Consejos para usar Stitch

1. Genera primero **Login**; luego en las demás pantallas pide "use the same style as the previous screen" para mantener consistencia.
2. Si algo sale en inglés, añade: `All visible text must be in Spanish.`
3. Para la versión móvil, cambia "desktop" por "mobile" en el prompt o usa el modo Mobile de Stitch.
4. Exporta el código (HTML/Tailwind) o a Figma y adáptalo a componentes React en `src/`.
