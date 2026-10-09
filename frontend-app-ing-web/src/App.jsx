import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './layouts/Layout'
import DetalleFactura from './pages/DetalleFactura'
import Facturacion from './pages/Facturacion'
import Huespedes from './pages/Huespedes'
import Login from './pages/Login'
import Panel from './pages/Panel'
import Proximamente from './pages/Proximamente'
import Registro from './pages/Registro'

function App() {
  return (
    <Routes>
      {/* Públicas */}
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Registro />} />

      {/* Protegidas: Layout redirige al login si no hay sesión */}
      <Route element={<Layout />}>
        <Route path="/panel" element={<Panel />} />
        <Route path="/facturacion" element={<Facturacion />} />
        <Route path="/facturacion/detalle" element={<DetalleFactura />} />
        <Route path="/huespedes" element={<Huespedes />} />
        <Route path="/habitaciones" element={<Proximamente titulo="Habitaciones & Tarifas" />} />
        <Route path="/reportes" element={<Proximamente titulo="Reportes Fiscales" />} />
        <Route path="/configuracion" element={<Proximamente titulo="Configuración" />} />
        <Route path="/perfil" element={<Proximamente titulo="Mi Perfil" />} />
      </Route>

      <Route path="*" element={<Navigate to="/panel" replace />} />
    </Routes>
  )
}

export default App
