"use client";

import { useMemo, useState, type FormEvent } from "react";

type ChatMessage = { id: string; from: "user" | "agent"; text: string };

export function ContactSection({
  officeCoordinates,
  officeAddress,
  chatSeed
}: {
  officeCoordinates: string;
  officeAddress: string;
  chatSeed: Array<{ id: string; from: string; text: string }>;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [toast, setToast] = useState<string | null>(null);

  const [chatOpen, setChatOpen] = useState(true);
  const initialChat = useMemo<ChatMessage[]>(() => {
    return chatSeed.map((m) => ({
      ...m,
      from: m.from === "agent" ? "agent" : "user"
    }));
  }, [chatSeed]);

  const [chatMessages, setChatMessages] = useState<ChatMessage[]>(initialChat);
  const [chatDraft, setChatDraft] = useState("");

  const [copied, setCopied] = useState(false);

  const emailOk = useMemo(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()), [email]);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setToast(null);

    const n = name.trim();
    const em = email.trim();
    const m = message.trim();
    if (!n) return setToast("Name is required.");
    if (!emailOk) return setToast("Enter a valid email address.");
    if (m.length < 10) return setToast("Message must be at least 10 characters.");

    // Mock submission: show a spec-request acknowledgement.
    setToast(`Request received. We will respond with CRI/beam options for your project.`);
    setName("");
    setEmail("");
    setMessage("");
  };

  const sendChat = () => {
    const text = chatDraft.trim();
    if (!text) return;
    const nextUser: ChatMessage = { id: `u-${Date.now()}`, from: "user", text };
    const nextAgent: ChatMessage = {
      id: `a-${Date.now() + 1}`,
      from: "agent",
      text:
        "Understood. Share the target mounting height and surface reflectance, and we’ll match the closest IES + beam spread."
    };
    setChatMessages((prev) => [...prev, nextUser, nextAgent]);
    setChatDraft("");
  };

  const copyCoords = async () => {
    try {
      await navigator.clipboard.writeText(officeCoordinates);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      setToast("Clipboard unavailable in this environment.");
    }
  };

  return (
    <div className="lux-block">
      <div className="lux-grid12">
        <div className="lux-surface lux-cardSolidSpan" style={{ gridColumn: "span 5" }}>
          <div className="lux-caption lux-gold">CONTACT</div>
          <div className="lux-h2" style={{ fontSize: 26, marginTop: 6 }}>
            Spec-ready coordination
          </div>
          <div className="lux-tech" style={{ marginTop: 10 }}>
            Engineers get CRI + beam + IES file alignment.
          </div>

          <form onSubmit={submit} className="lux-form">
            <label className="lux-formLabel">
              <span className="lux-tech">NAME</span>
              <input
                className="lux-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                aria-label="Name"
              />
            </label>

            <label className="lux-formLabel">
              <span className="lux-tech">EMAIL</span>
              <input
                className="lux-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                aria-label="Email"
                inputMode="email"
              />
            </label>

            <label className="lux-formLabel">
              <span className="lux-tech">MESSAGE</span>
              <textarea
                className="lux-input lux-textarea"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Project scope, mounting height, beam preference…"
                aria-label="Message"
              />
            </label>

            <div className="lux-formActions">
              <button className="lux-btn lux-btnGold" type="submit">
                SEND REQUEST
              </button>
              <div className="lux-tech lux-muted" style={{ maxWidth: 280 }}>
                Typical reply: <span className="lux-spec">24</span> hours.
              </div>
            </div>

            {toast ? (
              <div className="lux-toast" role="status" aria-live="polite" style={{ marginTop: 12 }}>
                {toast}
              </div>
            ) : null}
          </form>
        </div>

        <div className="lux-surface" style={{ gridColumn: "span 4" }}>
          <div className="lux-caption lux-gold">LIVE CHAT (MOCK)</div>
          <div className="lux-h2" style={{ fontSize: 22, marginTop: 6 }}>
            Quick optic verification
          </div>

          <div className="lux-chatWrap" data-open={chatOpen ? "true" : "false"}>
            <div className="lux-chatHeader">
              <div className="lux-tech">
                EST. RESPONSE <span className="lux-spec">30</span> min
              </div>
              <button
                className="lux-btn lux-btnSmall"
                type="button"
                onClick={() => setChatOpen((v) => !v)}
              >
                {chatOpen ? "MINIMIZE" : "OPEN"}
              </button>
            </div>

            {chatOpen ? (
              <>
                <div className="lux-chatMessages" role="log" aria-label="Chat messages">
                  {chatMessages.map((m) => (
                    <div
                      key={m.id}
                      className={`lux-chatMsg ${m.from === "agent" ? "lux-chatAgent" : "lux-chatUser"}`}
                    >
                      <div className="lux-chatMsgText">{m.text}</div>
                    </div>
                  ))}
                </div>

                <div className="lux-chatComposer">
                  <input
                    className="lux-input"
                    value={chatDraft}
                    onChange={(e) => setChatDraft(e.target.value)}
                    placeholder="Ask for beam spread, CRI bins, UGR…"
                    aria-label="Chat message"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") sendChat();
                    }}
                  />
                  <button className="lux-btn lux-btnGold lux-btnSmall" type="button" onClick={sendChat}>
                    SEND
                  </button>
                </div>
              </>
            ) : null}
          </div>
        </div>

        <div className="lux-surface" style={{ gridColumn: "span 3" }}>
          <div className="lux-caption lux-gold">OFFICE</div>
          <div className="lux-h2" style={{ fontSize: 20, marginTop: 6 }}>
            Coordinates & spec desk
          </div>
          <div className="lux-tech" style={{ marginTop: 12, color: "rgba(246,241,230,.78)" }}>
            {officeAddress}
          </div>
          <div className="lux-toast" style={{ marginTop: 14 }}>
            <div className="lux-tech">
              LAT/LON <span className="lux-spec">{officeCoordinates}</span>
            </div>
            <div style={{ marginTop: 10 }}>
              <button className="lux-btn lux-btnSmall" type="button" onClick={copyCoords}>
                {copied ? "COPIED" : "COPY"}
              </button>
            </div>
          </div>
          <div className="lux-tech lux-muted" style={{ marginTop: 12 }}>
            For site planning: export coordinates to BIM model overlays.
          </div>
        </div>
      </div>
    </div>
  );
}

