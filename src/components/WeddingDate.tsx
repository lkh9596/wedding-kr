"use client";

import ScrollAnimation from "./ScrollAnimation";

const DAYS_OF_WEEK = ["일", "월", "화", "수", "목", "금", "토"];

function generateCalendarDays() {
  // April 2027
  const year = 2027;
  const month = 3; // 0-indexed
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const weddingDay = 3;

  const days: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  return { days, weddingDay };
}

function handleAddToCalendar() {
  const event = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Wedding//KR//EN",
    "BEGIN:VEVENT",
    "DTSTART:20270403T072000Z",
    "DTEND:20270403T092000Z",
    "SUMMARY:건호 ♥ 에스더 결혼식",
    "LOCATION:KU컨벤션 웨딩홀, 서울 광진구 아차산로36길 5",
    "DESCRIPTION:이건호 & 에스더 결혼식\\n2027년 4월 3일 토요일 오후 4시 20분\\nKU컨벤션 웨딩홀",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([event], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "건호에스더_결혼식.ics";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export default function WeddingDate() {
  const { days, weddingDay } = generateCalendarDays();

  return (
    <section className="py-16 px-6" style={{ backgroundColor: "var(--color-soft-pink)" }}>
      <div className="section-divider mb-8">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="5" stroke="#C9A96E" strokeWidth="0.8" opacity="0.5" />
          <circle cx="8" cy="8" r="2" stroke="#C9A96E" strokeWidth="0.6" opacity="0.4" />
        </svg>
      </div>

      <ScrollAnimation>
        <h2
          className="text-center text-lg mb-2"
          style={{ fontFamily: "var(--font-serif)", color: "var(--color-charcoal)" }}
        >
          예식 안내
        </h2>
      </ScrollAnimation>

      <ScrollAnimation delay={100}>
        <p
          className="text-center text-[15px] mt-4 mb-2"
          style={{ fontFamily: "var(--font-serif)", color: "var(--color-charcoal)" }}
        >
          2027년 4월 3일 토요일
        </p>
        <p
          className="text-center text-[15px] mb-8"
          style={{ fontFamily: "var(--font-serif)", color: "var(--color-deep-rose)" }}
        >
          오후 4시 20분
        </p>
      </ScrollAnimation>

      {/* Mini Calendar */}
      <ScrollAnimation delay={200}>
        <div className="max-w-[300px] mx-auto mb-8">
          <p
            className="text-center text-sm mb-4 tracking-wider"
            style={{ color: "var(--color-gold)", fontFamily: "var(--font-serif)" }}
          >
            APRIL 2027
          </p>

          {/* Day headers */}
          <div className="grid grid-cols-7 gap-0 text-center text-xs mb-2">
            {DAYS_OF_WEEK.map((day, i) => (
              <div
                key={day}
                className="py-1"
                style={{
                  fontFamily: "var(--font-sans)",
                  color: i === 0 ? "var(--color-deep-rose)" : "var(--color-charcoal)",
                  opacity: 0.5,
                }}
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar days */}
          <div className="grid grid-cols-7 gap-0 text-center text-sm">
            {days.map((day, i) => (
              <div
                key={i}
                className="py-[6px] relative flex items-center justify-center"
                style={{
                  fontFamily: "var(--font-sans)",
                  color:
                    day === weddingDay
                      ? "#fff"
                      : i % 7 === 0
                      ? "var(--color-deep-rose)"
                      : "var(--color-charcoal)",
                  opacity: day ? (day === weddingDay ? 1 : 0.6) : 0,
                }}
              >
                {day === weddingDay && (
                  <div
                    className="absolute w-7 h-7 rounded-full"
                    style={{ backgroundColor: "var(--color-deep-rose)" }}
                  />
                )}
                <span className="relative z-10 text-xs">{day}</span>
              </div>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      {/* D-day counter placeholder */}
      <ScrollAnimation delay={300}>
        <p className="text-center text-xs opacity-50 mb-6" style={{ fontFamily: "var(--font-sans)" }}>
          KU컨벤션 웨딩홀
        </p>
      </ScrollAnimation>

      {/* Add to Calendar */}
      <ScrollAnimation delay={400}>
        <div className="flex justify-center">
          <button
            onClick={handleAddToCalendar}
            className="btn-calendar flex items-center gap-2 px-6 py-3 rounded-full text-sm"
            style={{
              fontFamily: "var(--font-sans)",
              backgroundColor: "rgba(255,255,255,0.7)",
              color: "var(--color-charcoal)",
              border: "1px solid rgba(201,169,110,0.3)",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            캘린더에 추가
          </button>
        </div>
      </ScrollAnimation>
    </section>
  );
}
