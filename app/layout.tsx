import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Emblasoft Korea | 5G 네트워크 통합 시험환경",
    template: "%s | Emblasoft Korea",
  },
  description:
    "Evolver·nScan·PureLoad·Odin을 중심으로 5G/IMS 기능 검증, 성능·부하 시험, 인수시험, Active/Passive Monitoring을 연결하는 Emblasoft Korea 솔루션을 소개합니다.",
  keywords: [
    "Emblasoft",
    "5G testing",
    "UE emulation",
    "Private 5G",
    "network monitoring",
    "5G Advanced",
    "6G testing",
    "Evolver",
    "nScan",
    "PureLoad",
    "IMS testing",
  ],
  robots: { index: true, follow: true },
  other: {
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
