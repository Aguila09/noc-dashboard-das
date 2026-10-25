import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const bandwidthData = {
  labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
  datasets: [
    {
      label: 'Entrada (Mbps)',
      data: [120, 180, 210, 260, 230, 280],
      borderColor: '#38bdf8',
      backgroundColor: 'rgba(56, 189, 248, 0.2)',
      tension: 0.35,
      fill: true,
    },
    {
      label: 'Salida (Mbps)',
      data: [90, 140, 170, 200, 190, 240],
      borderColor: '#a78bfa',
      backgroundColor: 'rgba(167, 139, 250, 0.2)',
      tension: 0.35,
      fill: true,
    },
  ],
};

const utilizationData = {
  labels: ['Core', 'Edge', 'DMZ', 'VPN', 'DNS'],
  datasets: [
    {
      label: 'Uso de enlace (%)',
      data: [62, 73, 42, 88, 58],
      backgroundColor: ['#22c55e', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6'],
    },
  ],
};

export default function TrafficModule() {
  return (
    <div className="space-y-6">
      <header className="rounded-2xl border border-slate-700 bg-slate-900/80 p-6 shadow-soft">
        <p className="text-sm uppercase tracking-[0.18em] text-violet-400">Equipo 2</p>
        <h1 className="mt-3 text-3xl font-bold text-white">Tráfico de Red</h1>
      </header>

      <div className="grid gap-6 xl:grid-cols-2">
        <section className="rounded-2xl border border-slate-700 bg-slate-900/80 p-6">
          <h2 className="text-xl font-semibold text-white">Ancho de banda</h2>
          <div className="mt-5 h-72">
            <Line
              data={bandwidthData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { labels: { color: '#cbd5e1' } } },
                scales: {
                  x: { ticks: { color: '#cbd5e1' }, grid: { color: 'rgba(148, 163, 184, 0.12)' } },
                  y: { ticks: { color: '#cbd5e1' }, grid: { color: 'rgba(148, 163, 184, 0.12)' } },
                },
              }}
            />
          </div>
        </section>

        <section className="rounded-2xl border border-slate-700 bg-slate-900/80 p-6">
          <h2 className="text-xl font-semibold text-white">Utilización por enlace</h2>
          <div className="mt-5 h-72">
            <Bar
              data={utilizationData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                  x: { ticks: { color: '#cbd5e1' }, grid: { display: false } },
                  y: { ticks: { color: '#cbd5e1' }, grid: { color: 'rgba(148, 163, 184, 0.12)' } },
                },
              }}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
