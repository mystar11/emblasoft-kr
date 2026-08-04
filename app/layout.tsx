import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Emblasoft Korea | 5G 네트워크 통합 시험환경",
    template: "%s | Emblasoft Korea",
  },
  description:
    "UE·gNodeB 에뮬레이션, 실제 트래픽 모델링, 인수시험, Active/Passive Monitoring을 연결하는 5G 네트워크 통합 시험 솔루션을 소개합니다.",
  keywords: [
    "Emblasoft",
    "5G testing",
    "UE emulation",
    "Private 5G",
    "network monitoring",
    "5G Advanced",
    "6G testing",
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
