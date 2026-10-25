const entries = [
  { time: '09:12:03', action: 'Inicio de sesión exitoso', user: 'andrea.gomez', source: '192.168.10.5' },
  { time: '09:14:15', action: 'Cambio de política de firewall', user: 'admin.noc', source: '10.0.0.8' },
  { time: '09:18:40', action: 'Bloqueo de IP sospechosa', user: 'sistema', source: '203.0.113.44' },
  { time: '09:22:11', action: 'Alta prioridad de alerta', user: 'jorge.perez', source: '172.16.5.17' },
];

export default function LogsModule() {
  return (
    <div className="space-y-6">
      <header className="rounded-2xl border border-slate-700 bg-slate-900/80 p-6 shadow-soft">
        <p className="text-sm uppercase tracking-[0.18em] text-slate-300">Equipo 6</p>
        <h1 className="mt-3 text-3xl font-bold text-white">Logs y Auditoría del Sistema</h1>
      </header>

      <section className="rounded-2xl border border-slate-700 bg-slate-900/80 p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">Eventos recientes</h2>
          <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">Últimas 24h</span>
        </div>

        <div className="space-y-3">
          {entries.map((entry) => (
            <div key={`${entry.time}-${entry.action}`} className="flex gap-4 rounded-xl border border-slate-700 bg-slate-950/60 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/15 text-xs font-semibold text-cyan-300">
                {entry.time.slice(0, 2)}
              </div>
              <div className="flex-1">
                <p className="text-white">{entry.action}</p>
                <div className="mt-2 flex flex-wrap gap-3 text-xs text-slate-400">
                  <span>Usuario: {entry.user}</span>
                  <span>Fuente: {entry.source}</span>
                  <span>Hora: {entry.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
