// Guarda el usuario que inició sesión en el navegador (localStorage)
const KEY = 'staybill_usuario'

export function getUsuario() {
  try {
    return JSON.parse(localStorage.getItem(KEY))
  } catch {
    return null
  }
}

export function guardarUsuario(usuario) {
  localStorage.setItem(KEY, JSON.stringify(usuario))
}

export function cerrarSesion() {
  localStorage.removeItem(KEY)
}

// Traduce los errores de la API a mensajes para el usuario
export function mensajeDeError(error, mensajes = {}) {
  if (!error.response) return 'No se pudo conectar con el servidor. ¿Está corriendo el backend?'
  const { status, data } = error.response
  return mensajes[status] ?? data?.message ?? 'Ocurrió un error inesperado. Intenta de nuevo.'
}
