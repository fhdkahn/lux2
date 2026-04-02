"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { FeaturedProduct } from "../luxova-data";
import { IesMiniDiagram } from "../ies/IesMiniDiagram";

export function FeaturedProductsTable({ products }: { products: FeaturedProduct[] }) {
  const [compareIds, setCompareIds] = useState<Set<string>>(() => new Set());

  const compareCount = compareIds.size;

  const toggle = (id: string, nextChecked: boolean) => {
    setCompareIds((prev) => {
      const copy = new Set(prev);
      if (nextChecked) copy.add(id);
      else copy.delete(id);
      return copy;
    });
  };

  const compareSummary = useMemo(() => {
    if (compareCount === 0) return "No products selected for compare.";
    if (compareCount === 1) return "1 product selected for compare.";
    return `${compareCount} products selected for compare.`;
  }, [compareCount]);

  return (
    <div className="lux-block">
      <div className="lux-tableHeader lux-grid12" aria-hidden="true">
        <div className="lux-caption" style={{ gridColumn: "span 2" }}>
          IMAGE
        </div>
        <div className="lux-caption" style={{ gridColumn: "span 5" }}>
          PRODUCT
        </div>
        <div className="lux-caption" style={{ gridColumn: "span 1" }}>
          W
        </div>
        <div className="lux-caption" style={{ gridColumn: "span 2" }}>
          BEAM
        </div>
        <div className="lux-caption" style={{ gridColumn: "span 1" }}>
          CRI
        </div>
        <div className="lux-caption" style={{ gridColumn: "span 1" }}>
          CMP
        </div>
      </div>

      <div className="lux-tableRows" role="table" aria-label="Featured products list">
        {products.map((p) => {
          const checked = compareIds.has(p.id);
          return (
            <div key={p.id} className="lux-compareRow lux-grid12 group">
              <div className="lux-tableCell lux-cellImg" style={{ gridColumn: "span 2" }}>
                <div className="lux-thumb16 lux-card-solid">
                  <Image src={p.imageUrl} alt={p.imageAlt} fill sizes="20vw" unoptimized />
                </div>
              </div>

              <div className="lux-tableCell lux-cellName" style={{ gridColumn: "span 5" }}>
                <div className="lux-tech lux-muted">{p.series.toUpperCase()}</div>
                <div className="lux-h3" style={{ fontSize: 16 }}>
                  {p.name}
                </div>
                <div className="lux-rowDiagram" aria-hidden="true">
                  <IesMiniDiagram beamDeg={p.beamDeg} label={`${p.beamDeg}°`} />
                </div>
              </div>

              <div className="lux-tableCell lux-cellNum" style={{ gridColumn: "span 1" }}>
                <div className="lux-tech">
                  <span className="lux-spec">{p.wattageW}</span> W
                </div>
              </div>

              <div className="lux-tableCell lux-cellNum" style={{ gridColumn: "span 2" }}>
                <div className="lux-tech">
                  <span className="lux-spec">{p.beamDeg}</span>°
                  <span className="lux-muted2" style={{ marginLeft: 10 }}>
                    SPILL DISCIPLINE
                  </span>
                </div>
              </div>

              <div className="lux-tableCell lux-cellNum" style={{ gridColumn: "span 1" }}>
                <div className="lux-tech">
                  <span className="lux-spec">{p.cri}</span>+
                </div>
              </div>

              <div className="lux-tableCell lux-cellCmp" style={{ gridColumn: "span 1" }}>
                <label className="lux-compareBox">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => toggle(p.id, e.target.checked)}
                  />
                  <span className="lux-compareFake" aria-hidden="true" />
                </label>
              </div>
            </div>
          );
        })}
      </div>

      <div className="lux-toast" role="status" aria-live="polite" style={{ marginTop: 14 }}>
        {compareSummary}
      </div>
    </div>
  );
}

