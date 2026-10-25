const alerts = [
  { severity: 'Alta', title: 'Escaneo de puertos masivo', source: '203.0.113.44', status: 'Mitigada' },
  { severity: 'Media', title: 'Intento de acceso no autorizado', source: '198.51.100.12', status: 'Investigando' },
  { severity: 'Crítica', title: 'Ransomware detectado en nodo 3', source: '10.0.0.18', status: 'Aislado' },
  { severity: 'Baja', title: 'Conexión anómala DNS', source: '172.16.8.55', status: 'Monitorizado' },
];

const severityStyles = {
  Crítica: 'bg-red-500/15 text-red-300 ring-1 ring-red-500/30',
  Alta: 'bg-amber-500/15 text-amber-300 ring-1 ring-amber-500/30',
  Media: 'bg-yellow-500/15 text-yellow-300 ring-1 ring-yellow-500/30',
  Baja: 'bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/30',
};

export default function AlertsModule() {
  return (
    <div className="space-y-6">
      <header className="rounded-2xl border border-slate-700 bg-slate-900/80 p-6 shadow-soft">
        <p className="text-sm uppercase tracking-[0.18em] text-rose-400">Equipo 3</p>
        <h1 className="mt-3 text-3xl font-bold text-white">Alertas y Amenazas Activas</h1>
      </header>

      <section className="rounded-2xl border border-slate-700 bg-slate-900/80 p-6">
        <div className="grid gap-4 md:grid-cols-4">
          {[
            { label: 'Críticas', value: '03' },
            { label: 'Altas', value: '12' },
            { label: 'Medias', value: '27' },
            { label: 'Bajas', value: '48' },
          ].map((stat) => (
            <div key={stat.label} className="rounded-xl border border-slate-700 bg-slate-950/60 p-4">
              <p className="text-sm text-slate-400">{stat.label}</p>
              <p className="mt-2 text-3xl font-semibold text-white">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 overflow-hidden rounded-xl border border-slate-700">
          <table className="min-w-full divide-y divide-slate-700 text-left text-sm">
            <thead className="bg-slate-950/70 text-slate-300">
              <tr>
                <th className="px-4 py-3 font-medium">Severidad</th>
                <th className="px-4 py-3 font-medium">Alerta</th>
                <th className="px-4 py-3 font-medium">Origen</th>
                <th className="px-4 py-3 font-medium">Estado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700 bg-slate-900/60 text-slate-200">
              {alerts.map((alert) => (
                <tr key={`${alert.title}-${alert.source}`}>
                  <td className="px-4 py-3">
                    <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${severityStyles[alert.severity]}`}>
                      {alert.severity}
                    </span>
                  </td>
                  <td className="px-4 py-3">{alert.title}</td>
                  <td className="px-4 py-3">{alert.source}</td>
                  <td className="px-4 py-3 text-slate-300">{alert.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
