import type { Metadata } from "next";
import PortfolioClientV2 from "./PortfolioClientV2";

export const metadata: Metadata = {
  title: "BumJun Lee | Telecom & ICT Portfolio",
  description:
    "BumJun Lee의 통신·ICT 포트폴리오. 정보통신 특급기술자, 글로벌 벤더 Korea Country Manager, Carrier IP, 5G, SDDC, Service Assurance 및 신규사업 개발 경험.",
};

export default function PortfolioPage() {
  return <PortfolioClientV2 />;
}
