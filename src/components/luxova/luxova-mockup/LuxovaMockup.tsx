import Image from "next/image";
import { CategoryGrid } from "./client/CategoryGrid";
import { FeaturedProductsTable } from "./client/FeaturedProductsTable";
import { ContactSection } from "./client/ContactSection";
import { FixtureCrossSection } from "./diagram/FixtureCrossSection";
import { luxovaData } from "./luxova-data";

export function LuxovaMockup() {
  return (
    <div className="lux-grid-overlay">
      <Hero />
      <Trust />
      <ProductCategories />
      <Applications />
      <WhyChooseUs />
      <FeaturedProducts />
      <Catalogue />
      <About />
      <Testimonials />
      <Contact />
    </div>
  );
}

function Hero() {
  const { hero } = luxovaData;

  const positions: Record<string, { top: string; left: string }> = {
    c1: { top: "18%", left: "66%" },
    c2: { top: "40%", left: "78%" },
    c3: { top: "64%", left: "60%" }
  };

  return (
    <section className="lux-hero lux-container">
        <div className="lux-heroBg" aria-hidden="true">
        <Image
          src={hero.facadeBackgroundUrl}
          alt={hero.facadeBackgroundAlt}
          fill
          priority
          sizes="100vw"
          unoptimized
        />
        <div className="lux-heroShade" />
        <div className="lux-heroGrid" />
      </div>

      <div className="lux-grid12 lux-heroLayout">
        <div className="lux-heroLeft" style={{ gridColumn: "span 5" }}>
          <div className="lux-caption">PROFESSIONAL ARCHITECTURAL LIGHTING</div>
          <h1 className="lux-h1" style={{ margin: "10px 0 0" }}>
            Luxova
          </h1>
          <div className="lux-tech" style={{ marginTop: 10 }}>
            SPEC-GRADE LIGHTING
          </div>

          <p className="lux-muted" style={{ margin: "18px 0 0", maxWidth: 540 }}>
            Editorial, engineering-forward optics for projects that require clean cut-off, documented beam
            discipline, and IES alignment for real-world coordination.
          </p>

          <div className="lux-heroStats" style={{ marginTop: 26 }}>
            <div className="lux-pill lux-tech">
              BEAM <span className="lux-spec">18°-120°</span>
            </div>
            <div className="lux-pill lux-tech" style={{ marginLeft: 10 }}>
              CRI <span className="lux-spec">90+</span>
            </div>
            <div className="lux-pill lux-tech" style={{ marginLeft: 10 }}>
              DOCUMENTATION <span className="lux-spec">IES/.LM</span>
            </div>
          </div>

          <div className="lux-heroBottom" style={{ marginTop: 30 }}>
            <div className="lux-caption lux-gold">NEXT: SPEC DOWNLOADS</div>
            <div className="lux-tech lux-muted" style={{ marginTop: 8 }}>
              Hover cards for lumens / CRI / beam spread.
            </div>
          </div>
        </div>

        <div className="lux-heroRight" style={{ gridColumn: "span 7" }}>
          <div className="lux-heroImgCard">
            <div className="lux-heroImg">
              <Image
                src={hero.productDetailImageUrl}
                alt={hero.productDetailImageAlt}
                fill
                sizes="65vw"
                unoptimized
              />
              <div className="lux-heroImgOverlay" />
              <div className="lux-heroCallouts">
                {hero.callouts.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    className="lux-callout group"
                    style={{
                      top: positions[c.id]?.top ?? "20%",
                      left: positions[c.id]?.left ?? "70%"
                    }}
                  >
                    <span className="lux-calloutLabel lux-tech">{c.label}</span>
                    <span className="lux-calloutValue lux-spec">{c.value}</span>
                    <span className="lux-calloutHint lux-tech">{c.hint}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="lux-heroImgFooter lux-tech">
              VIEW: OPTICS & THERMAL CONTROL • DOCS: IES + LM-79
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Trust() {
  const { trust } = luxovaData;
  return (
    <section className="lux-section lux-container">
      <div className="lux-grid12">
        <div style={{ gridColumn: "span 4" }}>
          <div className="lux-caption">TRUST</div>
          <h2 className="lux-h2" style={{ margin: "10px 0 0" }}>
            Documented for specifiers
          </h2>
          <div className="lux-tech lux-muted" style={{ marginTop: 10 }}>
            Measured performance + repeatable IES outputs.
          </div>
        </div>

        <div style={{ gridColumn: "span 8" }}>
          <div className="lux-marqueeCard lux-card-solid">
            <div className="lux-marquee" aria-label="Trusted by logos marquee">
              <div className="lux-marqueeTrack">
                {[...trust.scrollingLogos, ...trust.scrollingLogos].map((t, idx) => (
                  <span key={`${t}-${idx}`} className="lux-marqueeItem lux-tech">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="lux-badgesRow" aria-label="Certification badges">
              {trust.certificationBadges.map((b) => (
                <span key={b} className="lux-pill lux-tech lux-borderGold">
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductCategories() {
  const { categories } = luxovaData;
  return (
    <section className="lux-section lux-container">
      <div className="lux-grid12">
        <div style={{ gridColumn: "span 4" }}>
          <div className="lux-caption">PRODUCT CATEGORIES</div>
          <h2 className="lux-h2" style={{ margin: "10px 0 0" }}>
            Families, optics, IES
          </h2>
          <div className="lux-tech lux-muted" style={{ marginTop: 10 }}>
            Hover cards for lumens, CRI, and beam spread.
          </div>
        </div>
        <div style={{ gridColumn: "span 8" }}>
          <CategoryGrid items={categories.items} />
        </div>
      </div>
    </section>
  );
}

function Applications() {
  const { applications } = luxovaData;
  return (
    <section className="lux-section">
      <div className="lux-container">
        <div className="lux-grid12">
          <div style={{ gridColumn: "span 12" }}>
            <div className="lux-caption">APPLICATIONS</div>
            <h2 className="lux-h2" style={{ margin: "10px 0 0" }}>
              Facade, gallery, and perimeter
            </h2>
          </div>
        </div>

        <div className="lux-grid12 lux-appWall">
          {applications.items.map((it) => (
            <div key={it.id} className="lux-appTile group">
              <div className="lux-appImg">
                <Image src={it.imageUrl} alt={it.imageAlt} fill sizes="33vw" unoptimized />
              </div>
              <div className="lux-appOverlay">
                <div className="lux-appTooltip lux-tech">
                  <div className="lux-caption lux-gold" style={{ marginBottom: 6 }}>
                    PROJECT
                  </div>
                  <div className="lux-h3" style={{ fontSize: 16 }}>
                    {it.projectName}
                  </div>
                  <div className="lux-muted" style={{ marginTop: 8 }}>
                    {it.productUsed}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="lux-section lux-container">
      <div className="lux-grid12">
        <div style={{ gridColumn: "span 6" }}>
          <div className="lux-caption">WHY CHOOSE US</div>
          <h2 className="lux-h2" style={{ margin: "10px 0 0" }}>
            Optics + thermal engineering
          </h2>
          <div className="lux-tech lux-muted" style={{ marginTop: 10 }}>
            A system view that specifiers can verify.
          </div>

          <div style={{ marginTop: 22 }}>
            <FixtureCrossSection />
          </div>
        </div>

        <div style={{ gridColumn: "span 6" }}>
          <div className="lux-card-solid lux-whyRight">
            <div className="lux-caption lux-gold">ENGINEERING TERMS</div>
            <ul className="lux-bullets">
              <li>
                <span className="lux-tech">CUT-OFF GEOMETRY</span>
                <span className="lux-muted"> • reduced spill & clean task control</span>
              </li>
              <li>
                <span className="lux-tech">BEAM UNIFORMITY</span>
                <span className="lux-muted"> • verified spread and verge behavior</span>
              </li>
              <li>
                <span className="lux-tech">THERMAL HEADROOM</span>
                <span className="lux-muted"> • Lx retention with real heat profiles</span>
              </li>
              <li>
                <span className="lux-tech">DRIVER STABILITY</span>
                <span className="lux-muted"> • low flicker optics mapping</span>
              </li>
              <li>
                <span className="lux-tech">IES AUTOMATION</span>
                <span className="lux-muted"> • repeatable file outputs per variant</span>
              </li>
              <li>
                <span className="lux-tech">CRI BIN ALIGNMENT</span>
                <span className="lux-muted"> • spec-grade color fidelity</span>
              </li>
            </ul>

            <div className="lux-whyFooter lux-tech">
              Output documentation: <span className="lux-spec">IES</span> + <span className="lux-spec">LM-79</span> +{" "}
              <span className="lux-spec">LM-80</span>.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedProducts() {
  const { featured } = luxovaData;
  return (
    <section className="lux-section lux-container">
      <div className="lux-grid12">
        <div style={{ gridColumn: "span 4" }}>
          <div className="lux-caption">FEATURED PRODUCTS</div>
          <h2 className="lux-h2" style={{ margin: "10px 0 0" }}>
            Compare by specs
          </h2>
          <div className="lux-tech lux-muted" style={{ marginTop: 10 }}>
            Hover rows for the mini IES diagram.
          </div>
        </div>
        <div style={{ gridColumn: "span 8" }}>
          <FeaturedProductsTable products={featured.products} />
        </div>
      </div>
    </section>
  );
}

function Catalogue() {
  const { catalogue } = luxovaData;
  return (
    <section className="lux-section lux-container">
      <div className="lux-grid12">
        <div style={{ gridColumn: "span 4" }}>
          <div className="lux-caption">CATALOGUE</div>
          <h2 className="lux-h2" style={{ margin: "10px 0 0" }}>
            Spec sheets & IES exports
          </h2>
          <div className="lux-tech lux-muted" style={{ marginTop: 10 }}>
            Downloads are mock links for the editorial prototype.
          </div>
        </div>

        <div style={{ gridColumn: "span 8" }}>
          <div className="lux-grid12 lux-catCards">
            {catalogue.cards.map((c) => (
              <div key={c.id} className="lux-catDl lux-card-solid" style={{ gridColumn: "span 4" }}>
                <div className="lux-catDlCover">
                  <Image src={c.coverImageUrl} alt={c.coverImageAlt} fill sizes="33vw" unoptimized />
                  <div className="lux-catDlShade" />
                </div>
                <div className="lux-catDlBody">
                  <div className="lux-caption lux-gold">SPEC SHEET</div>
                  <div className="lux-h3" style={{ marginTop: 8 }}>
                    {c.title}
                  </div>
                  <div className="lux-tech lux-muted" style={{ marginTop: 8 }}>
                    {c.subtitle}
                  </div>

                  <div className="lux-catDlMeta">
                    <div className="lux-tech">
                      Latest revision date: <span className="lux-spec">{c.revisionDate}</span>
                    </div>
                  </div>

                  <div className="lux-catDlActions">
                    <a
                      className="lux-btn lux-btnGold"
                      href={`data:text/plain;charset=utf-8,${encodeURIComponent(c.iesContent)}`}
                      download={c.iesFilename}
                    >
                      Download .IES file
                    </a>
                    <a
                      className="lux-btn"
                      href={`data:text/plain;charset=utf-8,${encodeURIComponent("Mock PDF - editorial prototype")}`}
                      download={`${c.title.replace(/\s+/g, "_")}.pdf`}
                    >
                      Download PDF (mock)
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const { timeline } = luxovaData;
  return (
    <section className="lux-section lux-container">
      <div className="lux-grid12">
        <div style={{ gridColumn: "span 4" }}>
          <div className="lux-caption">ABOUT</div>
          <h2 className="lux-h2" style={{ margin: "10px 0 0" }}>
            Credibility timeline
          </h2>
          <div className="lux-tech lux-muted" style={{ marginTop: 10 }}>
            ISO, patents, lab verification, and R&D milestones.
          </div>
        </div>

        <div style={{ gridColumn: "span 8" }}>
          <div className="lux-timeline">
            {timeline.items.map((t, idx) => (
              <div key={t.id} className={`lux-timelineItem ${idx % 2 === 0 ? "isLeft" : "isRight"}`}>
                <div className="lux-timelineYear lux-tech lux-gold">{t.year}</div>
                <div className="lux-timelineLabel lux-h3">{t.label}</div>
                <div className="lux-muted" style={{ marginTop: 8 }}>
                  {t.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const { testimonials } = luxovaData;
  return (
    <section className="lux-section lux-container">
      <div className="lux-grid12">
        <div style={{ gridColumn: "span 12" }}>
          <div className="lux-caption">TESTIMONIALS</div>
          <h2 className="lux-h2" style={{ margin: "10px 0 0" }}>
            Engineers trust the file
          </h2>
        </div>

        {testimonials.items.map((t) => (
          <div key={t.id} className="lux-tCard lux-card-solid" style={{ gridColumn: "span 4" }}>
            <div className="lux-tech lux-gold">QUOTE</div>
            <div className="lux-tQuote">{t.quote}</div>
            <div className="lux-tAuthor lux-tech" style={{ marginTop: 14 }}>
              {t.author} • {t.role}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const { contact } = luxovaData;
  return (
    <section className="lux-section lux-container">
      <div className="lux-grid12">
        <div style={{ gridColumn: "span 12" }}>
          <div className="lux-caption">CONTACT</div>
          <h2 className="lux-h2" style={{ margin: "10px 0 0" }}>
            Spec desk + coordinate handoff
          </h2>
        </div>
        <div style={{ gridColumn: "span 12", marginTop: 18 }}>
          <ContactSection
            officeCoordinates={contact.officeCoordinates}
            officeAddress={contact.officeAddress}
            chatSeed={contact.chatSeed}
          />
        </div>
      </div>
    </section>
  );
}

