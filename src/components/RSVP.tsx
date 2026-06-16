"use client";

import { useState } from "react";
import ScrollAnimation from "./ScrollAnimation";

// Submits to the existing Google Form so responses still land in the same
// Google Sheet. Field entry IDs are taken from that form:
//   성함        -> entry.1812976759
//   참석 여부   -> entry.1951290001  ("참석합니다" / "불참합니다")
//   참석 인원   -> entry.337409612   ("1명" ~ "4명")
const FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSdvKX3_EwzPlh-Fvo9IAW1t_UZG-WaXjY7Z_oC2WZSvm4sBMA/formResponse";

const ENTRY_NAME = "entry.1812976759";
const ENTRY_ATTENDANCE = "entry.1951290001";
const ENTRY_COUNT = "entry.337409612";

const ATTENDING = "참석합니다";
const NOT_ATTENDING = "불참합니다";
const COUNT_OPTIONS = ["1명", "2명", "3명", "4명"];

const goldFocus = "0 0 0 2px rgba(201,169,110,0.35)";

export default function RSVP() {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState<string | null>(null);
  const [count, setCount] = useState("1명");
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;
    setError(null);

    if (!name.trim()) {
      setError("성함을 입력해 주세요.");
      return;
    }
    if (!attendance) {
      setError("참석 여부를 선택해 주세요.");
      return;
    }

    setStatus("submitting");

    const body = new URLSearchParams();
    body.append(ENTRY_NAME, name.trim());
    body.append(ENTRY_ATTENDANCE, attendance);
    if (attendance === ATTENDING) {
      body.append(ENTRY_COUNT, count);
    }

    try {
      // Google Forms doesn't send CORS headers, so the response is opaque.
      // The POST still records the response; we treat completion as success.
      await fetch(FORM_ACTION, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      setStatus("done");
    } catch {
      setStatus("idle");
      setError("전송에 실패했습니다. 잠시 후 다시 시도해 주세요.");
    }
  };

  return (
    <section style={{ padding: "64px 24px" }}>
      <div className="section-divider" style={{ marginBottom: "32px" }}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M1 4L8 9L15 4"
            stroke="#C9A96E"
            strokeWidth="0.8"
            opacity="0.5"
          />
          <rect x="1" y="3" width="14" height="10" rx="1" stroke="#C9A96E" strokeWidth="0.8" opacity="0.5" />
        </svg>
      </div>

      <ScrollAnimation>
        <h2
          style={{ fontFamily: "var(--font-serif)", color: "var(--color-charcoal)", textAlign: "center", fontSize: "18px", marginBottom: "12px" }}
        >
          참석 여부
        </h2>
        <p
          style={{ fontFamily: "var(--font-sans)", textAlign: "center", fontSize: "12px", opacity: 0.5, marginBottom: "32px", lineHeight: 1.7 }}
        >
          축하해 주시는 마음 감사드립니다.
          <br />
          참석 여부를 알려주시면 준비에 큰 도움이 됩니다.
        </p>
      </ScrollAnimation>

      <ScrollAnimation delay={200}>
        <div
          style={{
            maxWidth: "400px",
            margin: "0 auto",
            borderRadius: "16px",
            backgroundColor: "rgba(255,255,255,0.6)",
            padding: "28px 24px",
          }}
        >
          {status === "done" ? (
            <div style={{ textAlign: "center", padding: "24px 8px" }}>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  margin: "0 auto 16px",
                  borderRadius: "9999px",
                  backgroundColor: "var(--color-deep-rose)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <p style={{ fontFamily: "var(--font-serif)", fontSize: "16px", color: "var(--color-charcoal)", marginBottom: "8px" }}>
                감사합니다
              </p>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "13px", opacity: 0.6, lineHeight: 1.7 }}>
                참석 여부가 전달되었습니다.
                <br />
                소중한 마음 감사드립니다.
              </p>
              <button
                type="button"
                onClick={() => {
                  setName("");
                  setAttendance(null);
                  setCount("1명");
                  setError(null);
                  setStatus("idle");
                }}
                style={{
                  marginTop: "20px",
                  padding: "10px 16px",
                  borderRadius: "9999px",
                  border: "1px solid rgba(201,169,110,0.65)",
                  backgroundColor: "transparent",
                  color: "var(--color-charcoal)",
                  fontFamily: "var(--font-sans)",
                  fontSize: "12px",
                }}
              >
                다른 분 참석 등록하기
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {/* 성함 */}
              <div>
                <label
                  htmlFor="rsvp-name"
                  style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "13px", color: "var(--color-charcoal)", marginBottom: "8px" }}
                >
                  성함
                </label>
                <input
                  id="rsvp-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength={50}
                  aria-invalid={!!error && !name.trim()}
                  placeholder="이름을 입력해 주세요"
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    borderRadius: "10px",
                    border: "1px solid rgba(201,169,110,0.35)",
                    backgroundColor: "rgba(250,243,235,0.8)",
                    fontFamily: "var(--font-sans)",
                    fontSize: "14px",
                    color: "var(--color-charcoal)",
                    outline: "none",
                  }}
                  onFocus={(e) => (e.currentTarget.style.boxShadow = goldFocus)}
                  onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
                />
              </div>

              {/* 참석 여부 */}
              <div>
                <span
                  style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "13px", color: "var(--color-charcoal)", marginBottom: "8px" }}
                >
                  참석 여부
                </span>
                <div role="radiogroup" aria-label="참석 여부" style={{ display: "flex", gap: "10px" }}>
                  {[ATTENDING, NOT_ATTENDING].map((option) => {
                    const selected = attendance === option;
                    return (
                      <button
                        key={option}
                        type="button"
                        role="radio"
                        aria-checked={selected}
                        className="rsvp-option"
                        onClick={() => setAttendance(option)}
                        style={{
                          flex: 1,
                          padding: "12px 0",
                          borderRadius: "10px",
                          fontFamily: "var(--font-sans)",
                          fontSize: "14px",
                          transition: "all 200ms",
                          border: selected ? "1px solid var(--color-deep-rose)" : "1px solid rgba(201,169,110,0.35)",
                          backgroundColor: selected ? "var(--color-deep-rose)" : "rgba(250,243,235,0.8)",
                          color: selected ? "#fff" : "var(--color-charcoal)",
                        }}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 참석 인원 */}
              {attendance === ATTENDING && (
                <div>
                  <span
                    style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "13px", color: "var(--color-charcoal)", marginBottom: "8px" }}
                  >
                    참석 인원
                  </span>
                  <div role="radiogroup" aria-label="참석 인원" style={{ display: "flex", gap: "8px" }}>
                    {COUNT_OPTIONS.map((option) => {
                      const selected = count === option;
                      return (
                        <button
                          key={option}
                          type="button"
                          role="radio"
                          aria-checked={selected}
                          className="rsvp-option"
                          onClick={() => setCount(option)}
                          style={{
                            flex: 1,
                            padding: "10px 0",
                            borderRadius: "9999px",
                            fontFamily: "var(--font-sans)",
                            fontSize: "13px",
                            transition: "all 200ms",
                            border: selected ? "1px solid var(--color-gold)" : "1px solid rgba(201,169,110,0.35)",
                            backgroundColor: selected ? "rgba(201,169,110,0.18)" : "rgba(250,243,235,0.8)",
                            color: "var(--color-charcoal)",
                          }}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {error && (
                <p
                  role="alert"
                  aria-live="polite"
                  style={{ fontFamily: "var(--font-sans)", fontSize: "12px", color: "var(--color-deep-rose)", textAlign: "center" }}
                >
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                style={{
                  width: "100%",
                  padding: "14px 0",
                  borderRadius: "10px",
                  border: "none",
                  backgroundColor: "var(--color-charcoal)",
                  color: "#fff",
                  fontFamily: "var(--font-sans)",
                  fontSize: "14px",
                  letterSpacing: "0.05em",
                  opacity: status === "submitting" ? 0.6 : 1,
                  transition: "opacity 200ms",
                }}
              >
                {status === "submitting" ? "전송 중…" : "전달하기"}
              </button>
            </form>
          )}
        </div>
      </ScrollAnimation>
    </section>
  );
}
