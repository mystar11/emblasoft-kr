import type { Metadata } from "next";
import styles from "./portfolio.module.css";

export const metadata: Metadata = {
  title: "BumJun Lee | ICT & Telecom Executive Portfolio",
  description:
    "BumJun Lee의 ICT·통신·네트워크 사업총괄 포트폴리오. 특급 정보통신기술자, 통신사·5G·SDDC·데이터센터·Service Assurance 및 한국 시장 사업개발 경험.",
};

const coreExpertise = [
  ["Telecom & Network", "Carrier IP, Broadband, 4G/5G, SDDC, Service Assurance"],
  ["Business Leadership", "Korea market entry, Country Management, GTM, P&L, partner ecosystem"],
  ["Project Execution", "Discovery, solution design, PoC, proposal, negotiation, deployment, operations"],
  ["Data Center & AI Infra", "Data-center networking, AI infrastructure, cloud and GPU ecosystem"],
  ["Security & New Business", "Cybersecurity, PQC, security acceleration, certification-led market development"],
  ["Public / Enterprise", "Tier-1 operators, public sector, enterprise and systems-integrator engagement"],
];

const career = [
  {
    period: "2026–Present",
    company: "Emblasoft",
    role: "Korea Market Development / Country Leadership",
    body: "한국 통신시장 대상 5G 시험·Service Assurance 솔루션의 GTM, 파트너 생태계와 고객 개발을 추진하고 있습니다.",
  },
  {
    period: "2017–2025",
    company: "NEWGENS",
    role: "Vice President · New Business Development",
    body: "통신·5G·SDDC·데이터센터·AI 인프라·보안 분야의 신규 솔루션 발굴, 사업화, 기술제안 및 전략 파트너십을 총괄했습니다.",
  },
  {
    period: "2012–2017",
    company: "Accedian Networks",
    role: "Country Manager, Korea",
    body: "Network Performance Monitoring과 Service Assurance 사업의 한국 시장 개발, Tier-1 통신사 Key Account 및 파트너 채널을 총괄했습니다.",
    note: "해외 본사 직접 고용 · 국내 별도 법인 없음",
  },
  {
    period: "2009–2012",
    company: "BTI Systems",
    role: "Country Manager, Korea",
    body: "Packet-Optical Transport, Mobile Backhaul, Data Center Connectivity의 한국 사업전략, 고객·채널 개발 및 상업협상을 책임졌습니다.",
    note: "해외 본사 직접 고용 · 국내 별도 법인 없음",
  },
  {
    period: "2000–2009",
    company: "Redback Networks / Ericsson",
    role: "Sales Engineering & Business Leadership",
    body: "KT·SKT·LGU+를 중심으로 Carrier IP, 초고속인터넷, 가입자 관리와 모바일 네트워크 신규기술의 설계·검증·상용화를 수행했습니다.",
  },
  {
    period: "Early Career",
    company: "Comtec System · British Telecom and others",
    role: "Network Engineering / Consulting",
    body: "정보통신망 구축·유지관리, 기업 WAN, 초고속 국가망과 데이터통신 기술을 기반으로 기술경력을 시작했습니다.",
  },
];

const highlights = [
  {
    tag: "KT / BROADBAND",
    title: "가입자 인증 구조의 상용 서비스 전환",
    text: "Redback SmartEdge 기반 초고속인터넷 환경에서 고객과 함께 가입자 인증 구조를 개선하고 검증·상용화까지 연결했습니다.",
  },
  {
    tag: "SKT / SERVICE ASSURANCE",
    title: "Active Monitoring 사업화",
    text: "통신망 품질을 상시 검증하기 위한 Active Measurement와 Service Assurance 기술을 국내에 소개하고 기술검증과 상용 적용을 추진했습니다.",
  },
  {
    tag: "5G / SDDC",
    title: "설계·구축·유지관리 전 과정 경험",
    text: "SKT·LGU+ 5G Mobile Network와 SKT SDDC Network에서 설계, 구축 및 유지관리 경험을 축적했습니다.",
  },
  {
    tag: "AI DATA CENTER",
    title: "데이터센터와 AI 인프라로 확장",
    text: "AI 기반 데이터센터 네트워크와 GPU·Cloud 인프라 사업개발을 통해 통신망 경험을 차세대 인프라 영역으로 확장하고 있습니다.",
  },
];

const domains = [
  "Information & Communications Facilities",
  "Carrier IP / MPLS / Broadband",
  "4G LTE / 5G Mobile Network",
  "SDDC / Data Center Networking",
  "Network Performance & SLA Assurance",
  "Active / Passive Monitoring",
  "Private 5G / Cloud Infrastructure",
  "AI / GPU Infrastructure",
  "Cybersecurity / PQC",
  "Technical Sales & Value Engineering",
  "Program / Project Management",
  "Partner & Channel Development",
];

export default function PortfolioPage() {
  return (
    <main className={styles.page}>
      <header className={styles.nav}>
        <a className={styles.brand} href="#top" aria-label="BumJun Lee portfolio home">
          <span>BJ</span>
          <b>BUMJUN LEE</b>
        </a>
        <nav aria-label="Portfolio navigation">
          <a href="#about">About</a>
          <a href="#career">Career</a>
          <a href="#impact">Impact</a>
          <a href="#credentials">Credentials</a>
        </nav>
        <a className={styles.contactButton} href="mailto:bjlee210@gmail.com">Contact</a>
      </header>

      <section className={styles.hero} id="top">
        <div className={styles.heroGlow} />
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>ICT · TELECOM · DATA CENTER · BUSINESS LEADERSHIP</p>
            <h1>
              기술을 이해하고,<br />
              <em>사업으로 만드는</em> 사람.
            </h1>
            <p className={styles.lead}>
              30년 이상 통신·ICT 현장에서 네트워크 설계·구축·유지관리부터 글로벌 벤더 한국 사업총괄, 신규사업 개발까지 경험한 기술사업 리더입니다.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primary} href="#career">Career overview <span>↓</span></a>
              <a className={styles.secondary} href="https://www.linkedin.com/in/bumjun-lee-8b30562/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a className={styles.secondary} href="https://github.com/mystar11" target="_blank" rel="noreferrer">GitHub ↗</a>
            </div>
            <div className={styles.heroStats}>
              <div><strong>30+ yrs</strong><span>Telecom & ICT</span></div>
              <div><strong>Country</strong><span>Manager Experience</span></div>
              <div><strong>Special</strong><span>Grade ICT Engineer</span></div>
            </div>
          </div>

          <aside className={styles.profileCard} aria-label="Professional profile">
            <div className={styles.monogram}>BJ</div>
            <p>EXECUTIVE PROFILE</p>
            <h2>BumJun Lee</h2>
            <h3>ICT & Telecom Business Leader</h3>
            <ul>
              <li><span>01</span> Tier-1 Telecom Account Leadership</li>
              <li><span>02</span> Network Design · Build · Maintenance</li>
              <li><span>03</span> Korea GTM & Country Management</li>
              <li><span>04</span> 5G · SDDC · Data Center · Security</li>
            </ul>
            <div className={styles.available}>SEOUL METROPOLITAN AREA · KOREA</div>
          </aside>
        </div>
      </section>

      <section className={styles.section} id="about">
        <div className={styles.sectionHeading}>
          <div><span>01 / PROFILE</span><h2>기술과 사업의 경계를<br />넘나든 커리어</h2></div>
          <p>
            통신망 엔지니어링에서 시작해 글로벌 네트워크 벤더의 한국 사업 책임자와 신규사업 임원으로 역할을 확장해 왔습니다. 고객의 기술적 Pain Point를 파악하고, 해외 본사·국내 파트너·고객 조직을 연결해 실제 사업으로 전환하는 데 강점이 있습니다.
          </p>
        </div>
        <div className={styles.expertiseGrid}>
          {coreExpertise.map(([title, text], i) => (
            <article key={title}>
              <span>0{i + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.careerSection} id="career">
        <div className={styles.section}>
          <div className={styles.sectionHeading}>
            <div><span>02 / CAREER</span><h2>현장 기술에서<br />한국 사업총괄까지</h2></div>
            <p>초고속인터넷과 Carrier IP에서 5G, Service Assurance, SDDC, 데이터센터와 보안까지 기술영역을 확장하면서 동시에 시장개발과 사업총괄 역량을 쌓았습니다.</p>
          </div>
          <div className={styles.timeline}>
            {career.map((item) => (
              <article key={`${item.period}-${item.company}`}>
                <time>{item.period}</time>
                <div>
                  <h3>{item.company}</h3>
                  <b>{item.role}</b>
                  <p>{item.body}</p>
                  {item.note && <small>{item.note}</small>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} id="impact">
        <div className={styles.sectionHeading}>
          <div><span>03 / SELECTED IMPACT</span><h2>문제를 발견하고<br />상용화로 연결한 경험</h2></div>
          <p>제품 설명보다 고객의 운영 문제를 먼저 정의하고, 기술검증과 사업조건을 함께 설계하는 방식으로 신규 기술의 시장진입을 만들어 왔습니다.</p>
        </div>
        <div className={styles.highlightGrid}>
          {highlights.map((item) => (
            <article key={item.title}>
              <span>{item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.darkSection}>
        <div className={styles.section}>
          <div className={styles.domainGrid}>
            <div>
              <span>04 / DOMAIN MAP</span>
              <h2>Infrastructure to<br />Business Value</h2>
              <p>네트워크 레이어의 기술적 이해를 고객 가치, 운영효율, 품질, 사업성과로 연결합니다.</p>
            </div>
            <div className={styles.domainTags}>
              {domains.map((domain) => <span key={domain}>{domain}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section} id="credentials">
        <div className={styles.sectionHeading}>
          <div><span>05 / CREDENTIALS</span><h2>기술경력을 뒷받침하는<br />공식 자격과 교육</h2></div>
          <p>사업 리더십뿐 아니라 정보통신 설계·구축·유지관리 경력을 공식 기술등급과 교육으로 지속적으로 보강하고 있습니다.</p>
        </div>
        <div className={styles.credentials}>
          <article>
            <small>PROFESSIONAL GRADE</small>
            <h3>정보통신 특급기술자</h3>
            <p>한국정보통신공사협회 · 정보통신기술자 경력수첩</p>
            <b>Issued 2025.09</b>
          </article>
          <article>
            <small>EDUCATION</small>
            <h3>경희대학교 대학원</h3>
            <p>전자공학과 · 석사</p>
            <b>1993</b>
          </article>
          <article>
            <small>UPCOMING TRAINING</small>
            <h3>정보통신설비 유지보수 관리자 교육</h3>
            <p>비대면 실시간 화상교육 제30기</p>
            <b>2026.09.21–09.23 · 수료 예정</b>
          </article>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div>
          <span>LET&apos;S CONNECT</span>
          <h2>기술과 사업을 함께 이해하는<br />리더가 필요하신가요?</h2>
          <p>Telecom · Network · Data Center · New Business · Korea Market Development</p>
        </div>
        <div className={styles.contactLinks}>
          <a href="mailto:bjlee210@gmail.com"><small>EMAIL</small><b>bjlee210@gmail.com</b><span>↗</span></a>
          <a href="https://www.linkedin.com/in/bumjun-lee-8b30562/" target="_blank" rel="noreferrer"><small>LINKEDIN</small><b>BumJun Lee</b><span>↗</span></a>
          <a href="https://github.com/mystar11" target="_blank" rel="noreferrer"><small>GITHUB</small><b>mystar11</b><span>↗</span></a>
        </div>
      </section>

      <footer className={styles.footer}>
        <b>BUMJUN LEE</b>
        <span>ICT & Telecom Executive Portfolio · 2026</span>
      </footer>
    </main>
  );
}
