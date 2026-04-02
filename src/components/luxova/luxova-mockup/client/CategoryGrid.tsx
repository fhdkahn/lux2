"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { CategoryItem, CategoryKey } from "../luxova-data";
import { IesMiniDiagram } from "../ies/IesMiniDiagram";

const filters: Array<{ key: CategoryKey; label: string }> = [
  { key: "all", label: "All" },
  { key: "downlights", label: "Downlights" },
  { key: "wall", label: "Wall" },
  { key: "linear", label: "Linear" }
];

export function CategoryGrid({ items }: { items: CategoryItem[] }) {
  const [active, setActive] = useState<CategoryKey>("all");

  const filtered = useMemo(() => {
    if (active === "all") return items;
    return items.filter((it) => it.category === active);
  }, [active, items]);

  return (
    <div className="lux-block">
      <div className="lux-grid12 lux-filters" role="tablist" aria-label="Product categories">
        {filters.map((f) => {
          const isActive = f.key === active;
          return (
            <button
              key={f.key}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(f.key)}
              className={`lux-btn lux-filterBtn ${isActive ? "lux-filterBtnActive" : ""}`}
              style={{ gridColumn: "span 3" }}
            >
              <span className="lux-tech">{f.label}</span>
            </button>
          );
        })}
      </div>

      <div className="lux-grid12 lux-catGrid">
        {filtered.map((it) => (
          <div key={it.id} className="lux-catCard lux-cardHover group" style={{ gridColumn: "span 3" }}>
            <div className="lux-catThumb">
              <Image
                src={it.thumbnailUrl}
                alt={it.thumbnailAlt}
                fill
                sizes="(max-width: 980px) 50vw, 25vw"
                unoptimized
              />
              <div className="lux-catTint" />
            </div>

            <div className="lux-catBody">
              <div className="lux-caption">{it.category.toUpperCase()}</div>
              <div className="lux-catFamily lux-h3">{it.familyName}</div>
              <div className="lux-muted">{it.briefSpec}</div>

              <div className="lux-catMetaRow">
                <span className="lux-tech">
                  LM <span className="lux-spec">{it.lumens}</span>
                </span>
                <span className="lux-tech">
                  CRI <span className="lux-spec">{it.cri}</span>
                </span>
                <span className="lux-tech">
                  BEAM <span className="lux-spec">{it.beamDeg}°</span>
                </span>
              </div>
            </div>

            <div className="lux-catHoverOverlay">
              <div className="lux-hoverTop">
                <div>
                  <div className="lux-caption lux-gold">ON HOVER • SPEC DATA</div>
                  <div className="lux-tech">
                    LUMENS <span className="lux-spec">{it.lumens}</span> • CRI{" "}
                    <span className="lux-spec">{it.cri}</span>
                  </div>
                </div>
                <div className="lux-hoverDiagram">
                  <IesMiniDiagram beamDeg={it.beamDeg} label={`${it.beamDeg}° BEAM`} />
                </div>
              </div>
              <div className="lux-hoverBottom lux-tech">
                Cut-off model: <span className="lux-spec">SPEC-GRADE</span> • Spill control:{" "}
                <span className="lux-spec">DISCIPLINED</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

