import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "건호 ♥ 에스더 결혼합니다",
  description: "2027년 4월 3일 토요일 오후 4시 20분 | KU컨벤션 웨딩홀",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "건호 ♥ 에스더 결혼합니다",
    description: "2027년 4월 3일 토요일 오후 4시 20분 | KU컨벤션 웨딩홀",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@200;300;400;500;600;700&family=Noto+Sans+KR:wght@100;300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
