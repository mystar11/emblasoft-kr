import type { Metadata } from "next";
import PortfolioClientV2 from "../portfolio/PortfolioClientV2";

export const metadata: Metadata = {
  title: "BumJun Lee | Executive Profile",
  description:
    "Executive profile of BumJun Lee, covering telecom and ICT leadership, Korea country management, network engineering, business development and major commercial achievements.",
};

export default function ExecutiveProfilePage() {
  return <PortfolioClientV2 />;
}
