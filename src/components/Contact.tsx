"use client";

import ScrollAnimation from "./ScrollAnimation";

interface Person {
  label: string;
  name: string;
  phone: string;
}

const groom: Person = { label: "신랑", name: "이건호", phone: "010-9639-9596" };

const groomParents: { title: string; people: Person[] } = {
  title: "신랑 측 혼주",
  people: [
    { label: "아버지", name: "이한행", phone: "010-8892-7125" },
    { label: "어머니", name: "박경숙", phone: "010-7474-8791" },
  ],
};

function ContactRow({ person }: { person: Person }) {
  const tel = person.phone.replace(/[^0-9+]/g, "");
  return (
    <div
      style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", borderRadius: "8px", backgroundColor: "rgba(250,243,235,0.8)" }}
    >
      <div>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "12px", opacity: 0.5, marginBottom: "4px" }}>
          {person.label}
        </p>
        <p style={{ fontFamily: "var(--font-sans)", color: "var(--color-charcoal)", fontSize: "14px" }}>
          {person.name}
        </p>
      </div>
      <div style={{ display: "flex", gap: "8px" }}>
        <a
          href={`tel:${tel}`}
          aria-label={`${person.name}에게 전화하기`}
          style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", borderRadius: "9999px", backgroundColor: "var(--color-deep-rose)", color: "#fff" }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" />
          </svg>
        </a>
        <a
          href={`sms:${tel}`}
          aria-label={`${person.name}에게 문자하기`}
          style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", borderRadius: "9999px", backgroundColor: "rgba(201,169,110,0.18)", color: "var(--color-charcoal)" }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <section style={{ padding: "48px 24px" }}>
      <div className="section-divider" style={{ marginBottom: "32px" }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="0.8" opacity="0.5">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" />
        </svg>
      </div>

      <ScrollAnimation>
        <h2
          style={{ fontFamily: "var(--font-serif)", color: "var(--color-charcoal)", textAlign: "center", fontSize: "18px", marginBottom: "12px" }}
        >
          연락처
        </h2>
        <p
          style={{ fontFamily: "var(--font-sans)", textAlign: "center", fontSize: "12px", opacity: 0.5, marginBottom: "32px" }}
        >
          궁금한 점이 있으시면 편하게 연락 주세요
        </p>
      </ScrollAnimation>

      <ScrollAnimation delay={200}>
        <div style={{ maxWidth: "360px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* 신랑 */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <ContactRow person={groom} />
          </div>

          {/* 신랑 측 혼주 */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "13px", color: "var(--color-charcoal)", paddingLeft: "4px" }}>
              {groomParents.title}
            </p>
            {groomParents.people.map((person) => (
              <ContactRow key={person.label} person={person} />
            ))}
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
}
