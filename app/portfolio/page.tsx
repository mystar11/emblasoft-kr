import type { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
  title: "BumJun Lee | ICT & Telecom Executive Portfolio",
  description:
    "BumJun Lee의 ICT·통신·네트워크 사업총괄 포트폴리오. 특급 정보통신기술자, 통신사·5G·SDDC·데이터센터·Service Assurance 및 한국 시장 사업개발 경험.",
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
