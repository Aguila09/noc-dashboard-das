const user = {
  name: 'Andrea Gómez',
  role: 'Analista NOC',
  team: 'Operaciones de Seguridad',
  lastLogin: '2026-10-23 09:42:18',
  location: 'Bogotá, Colombia',
  permissions: ['Monitoreo en vivo', 'Gestión de alertas', 'Auditoría'],
};

export default function AuthModule() {
  return (
    <div className="space-y-6">
      <header className="rounded-2xl border border-slate-700 bg-slate-900/80 p-6 shadow-soft">
        <p className="text-sm uppercase tracking-[0.18em] text-cyan-400">Equipo 1</p>
        <h1 className="mt-3 text-3xl font-bold text-white">Autenticación y Perfil de Usuario</h1>
      </header>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <section className="rounded-2xl border border-slate-700 bg-slate-900/80 p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500/20 text-xl font-bold text-cyan-300">
              AG
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-white">{user.name}</h2>
              <p className="text-slate-300">{user.role}</p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-700 bg-slate-950/60 p-4">
              <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Equipo</p>
              <p className="mt-2 text-lg font-medium text-white">{user.team}</p>
            </div>
            <div className="rounded-xl border border-slate-700 bg-slate-950/60 p-4">
              <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Último acceso</p>
              <p className="mt-2 text-lg font-medium text-white">{user.lastLogin}</p>
            </div>
            <div className="rounded-xl border border-slate-700 bg-slate-950/60 p-4 sm:col-span-2">
              <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Ubicación</p>
              <p className="mt-2 text-lg font-medium text-white">{user.location}</p>
            </div>
          </div>
        </section>

        <aside className="rounded-2xl border border-slate-700 bg-slate-900/80 p-6">
          <h3 className="text-lg font-semibold text-white">Permisos</h3>
          <ul className="mt-4 space-y-3">
            {user.permissions.map((item) => (
              <li key={item} className="flex items-center gap-3 rounded-xl bg-slate-950/60 p-3 text-slate-200">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-400" />
                {item}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
}
