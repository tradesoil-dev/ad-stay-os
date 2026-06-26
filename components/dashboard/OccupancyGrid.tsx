import type { OccupancyState } from "@/types";
import { occupancyWeek } from "@/lib/data";

const cellColor: Record<OccupancyState, string> = {
  occupied: "bg-primary",
  arriving: "bg-gold",
  vacant: "bg-line",
};

export default function OccupancyGrid() {
  const { days, units, grid } = occupancyWeek;
  const template: React.CSSProperties = {
    gridTemplateColumns: `8rem repeat(${days.length}, minmax(0, 1fr))`,
  };

  return (
    <div>
      {/* Day header */}
      <div className="mb-3 grid items-end gap-1.5" style={template}>
        <div />
        {days.map((day, i) => (
          <div key={i} className="text-center">
            <p
              className={`text-xs font-semibold ${
                day.today ? "text-primary" : "text-subtle"
              }`}
            >
              {day.label}
            </p>
            <p className="text-[11px] text-subtle/70">{day.date}</p>
          </div>
        ))}
      </div>

      {/* Unit rows */}
      <div className="space-y-1.5">
        {units.map((unit, ui) => (
          <div key={unit} className="grid items-center gap-1.5" style={template}>
            <p className="truncate text-sm text-ink">{unit}</p>
            {grid[ui].map((state, ci) => (
              <div
                key={ci}
                className={`h-6 rounded-md ${cellColor[state]}`}
                title={`${unit} · ${days[ci].label}${days[ci].date}: ${state}`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
