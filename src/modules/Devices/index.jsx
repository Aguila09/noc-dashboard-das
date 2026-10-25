const nodes = [
  { name: 'Core Router', status: 'Operativo', load: '68%', zone: 'Norte' },
  { name: 'Firewall Edge', status: 'Advertencia', load: '81%', zone: 'Centro' },
  { name: 'Switch DMZ', status: 'Operativo', load: '52%', zone: 'Este' },
  { name: 'Gateway VPN', status: 'Caído', load: '0%', zone: 'Sur' },
];

const statusColor = {
  Operativo: 'bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/30',
  Advertencia: 'bg-amber-500/15 text-amber-300 ring-1 ring-amber-500/30',
  Caído: 'bg-red-500/15 text-red-300 ring-1 ring-red-500/30',
};

export default function DevicesModule() {
  return (
    <div className="space-y-6">
      <header className="rounded-2xl border border-slate-700 bg-slate-900/80 p-6 shadow-soft">
        <p className="text-sm uppercase tracking-[0.18em] text-emerald-400">Equipo 4</p>
        <h1 className="mt-3 text-3xl font-bold text-white">Estado de Dispositivos / Nodos</h1>
      </header>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {nodes.map((node) => (
          <div key={node.name} className="rounded-2xl border border-slate-700 bg-slate-900/80 p-5">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">{node.name}</h2>
              <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${statusColor[node.status]}`}>
                {node.status}
              </span>
            </div>
            <p className="mt-5 text-sm text-slate-400">Zona</p>
            <p className="text-xl font-medium text-white">{node.zone}</p>
            <p className="mt-4 text-sm text-slate-400">Carga</p>
            <p className="text-2xl font-semibold text-cyan-300">{node.load}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
