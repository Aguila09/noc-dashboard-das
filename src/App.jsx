import { NavLink, Route, Routes } from 'react-router-dom';

import AuthModule from './modules/Auth';
import TrafficModule from './modules/Traffic';
import AlertsModule from './modules/Alerts';
import DevicesModule from './modules/Devices';
import GeoIPModule from './modules/GeoIP';
import LogsModule from './modules/Logs';

const navigation = [
  { label: 'Inicio', to: '/' },
  { label: 'Autenticación', to: '/auth' },
  { label: 'Tráfico', to: '/traffic' },
  { label: 'Alertas', to: '/alerts' },
  { label: 'Dispositivos', to: '/devices' },
  { label: 'Geolocalización', to: '/geoip' },
  { label: 'Logs', to: '/logs' },
];

function DashboardHome() {
  return (
    <div className="space-y-6">
      <header className="rounded-2xl border border-slate-700 bg-slate-900/80 p-6 shadow-soft">
        <p className="text-sm uppercase tracking-[0.18em] text-cyan-400">NOC Dashboard</p>
        <h1 className="mt-3 text-3xl font-bold text-white">Panel de Monitoreo de Seguridad de Redes</h1>
        <p className="mt-3 max-w-2xl text-slate-300">
          Arquitectura modular para 6 equipos desarrollando componentes independientes en un flujo de trabajo adaptativo con integración final centralizada.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {[
          { title: 'Autenticación', body: 'Gestión de usuarios, sesiones y perfil.', tone: 'from-cyan-500/20 to-blue-600/10' },
          { title: 'Tráfico de Red', body: 'Consumo de ancho de banda y patrones de transferencia.', tone: 'from-violet-500/20 to-purple-600/10' },
          { title: 'Alertas', body: 'Amenazas, riesgo y actividad sospechosa.', tone: 'from-rose-500/20 to-red-600/10' },
          { title: 'Dispositivos', body: 'Estado operativo de nodos y infraestructura.', tone: 'from-emerald-500/20 to-green-600/10' },
          { title: 'Geolocalización', body: 'Ubicación de IPs y comportamiento geográfico.', tone: 'from-amber-500/20 to-yellow-600/10' },
          { title: 'Logs', body: 'Auditoría, trazabilidad y análisis forense.', tone: 'from-slate-500/20 to-slate-600/10' },
        ].map((card) => (
          <div
            key={card.title}
            className={`rounded-2xl border border-slate-700 bg-gradient-to-br ${card.tone} p-5`}
          >
            <p className="text-sm uppercase tracking-[0.16em] text-slate-300">Módulo</p>
            <h2 className="mt-3 text-xl font-semibold text-white">{card.title}</h2>
            <p className="mt-2 text-sm text-slate-300">{card.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 lg:flex-row">
        <aside className="lg:w-72">
          <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-5 shadow-soft">
            <p className="text-xs uppercase tracking-[0.24em] text-cyan-400">Sistema</p>
            <h2 className="mt-3 text-2xl font-bold text-white">NOC</h2>
            <nav className="mt-6 space-y-2">
              {navigation.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `block rounded-xl px-3 py-2 text-sm transition ${
                      isActive
                        ? 'bg-cyan-500/15 text-cyan-300 ring-1 ring-cyan-500/40'
                        : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        </aside>

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<DashboardHome />} />
            <Route path="/auth" element={<AuthModule />} />
            <Route path="/traffic" element={<TrafficModule />} />
            <Route path="/alerts" element={<AlertsModule />} />
            <Route path="/devices" element={<DevicesModule />} />
            <Route path="/geoip" element={<GeoIPModule />} />
            <Route path="/logs" element={<LogsModule />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
