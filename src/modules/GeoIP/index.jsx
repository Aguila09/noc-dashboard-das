const locations = [
  { city: 'Bogotá', ip: '181.57.22.10', risk: 'Normal', x: '26%', y: '30%' },
  { city: 'São Paulo', ip: '177.54.12.44', risk: 'Alerta', x: '48%', y: '58%' },
  { city: 'Madrid', ip: '80.14.66.8', risk: 'Normal', x: '62%', y: '32%' },
  { city: 'Londres', ip: '81.3.173.77', risk: 'Malicioso', x: '55%', y: '22%' },
];

const riskStyles = {
  Normal: 'bg-emerald-500/15 text-emerald-300',
  Alerta: 'bg-amber-500/15 text-amber-300',
  Malicioso: 'bg-red-500/15 text-red-300',
};

export default function GeoIPModule() {
  return (
    <div className="space-y-6">
      <header className="rounded-2xl border border-slate-700 bg-slate-900/80 p-6 shadow-soft">
        <p className="text-sm uppercase tracking-[0.18em] text-amber-400">Equipo 5</p>
        <h1 className="mt-3 text-3xl font-bold text-white">Mapa de Geolocalización de IPs</h1>
      </header>

      <section className="rounded-2xl border border-slate-700 bg-slate-900/80 p-6">
        <div className="relative h-[420px] overflow-hidden rounded-2xl border border-slate-700 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.12),_transparent_55%),linear-gradient(135deg,_#0f172a,_#111827)]">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(148,163,184,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.25) 1px, transparent 1px)', backgroundSize: '44px 44px' }} />

          {locations.map((location) => (
            <div
              key={location.city}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: location.x, top: location.y }}
            >
              <div className="flex flex-col items-center">
                <span className="h-4 w-4 rounded-full border-2 border-white bg-cyan-400 shadow-lg shadow-cyan-500/50" />
                <div className="mt-2 rounded-lg border border-slate-700 bg-slate-950/80 px-2 py-1 text-xs text-slate-100">
                  <p className="font-semibold">{location.city}</p>
                  <p>{location.ip}</p>
                  <span className={`mt-1 inline-flex rounded-full px-2 py-0.5 ${riskStyles[location.risk]}`}>
                    {location.risk}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
