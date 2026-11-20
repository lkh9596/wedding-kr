import type { Metadata } from "next";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  metadataBase: new URL(`https://lkh9596.github.io${process.env.NEXT_PUBLIC_BASE_PATH || ""}`),
  title: "이건호 ♥ 에스더 결혼합니다",
  description: "2027년 4월 3일 토요일 오후 4시 20분 | KU컨벤션 웨딩홀 (건국대학교)",
  icons: {
    // Next doesn't prefix metadata icon paths with basePath, so do it here.
    icon: `${basePath}/favicon.svg`,
  },
  // The page lists phone and account numbers; keep it out of search results.
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "이건호 ♥ 에스더 결혼합니다",
    description: "2027년 4월 3일 토요일 오후 4시 20분 | KU컨벤션 웨딩홀 (건국대학교)",
    type: "website",
    images: [{ url: "/main.JPG", width: 1200, height: 1801, alt: "이건호 ♥ 에스더 결혼합니다" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning: the inline script below adds the `js` class
    // before React hydrates.
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* 700 is needed: h1/h2 use the browser-default bold. */}
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@400;500;700&family=Noto+Sans+KR:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.4/kakao.min.js" async />
      </head>
      <body>{children}</body>
    </html>
  );
}
