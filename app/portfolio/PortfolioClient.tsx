"use client";

import { useState } from "react";
import styles from "./portfolio.module.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

type Lang = "ko" | "en";

const copy = {
  ko: {
    nav: ["소개", "경력", "성과", "자격"],
    contact: "연락하기",
    kicker: "ICT · TELECOM · DATA CENTER · BUSINESS LEADERSHIP",
    heroTitle1: "기술을 이해하고,",
    heroTitle2: "사업으로 만드는 사람.",
    heroLead: "30년 이상 통신·ICT 현장에서 네트워크 설계·구축·유지관리부터 글로벌 벤더 한국 사업총괄, 신규사업 개발까지 경험한 기술사업 리더입니다.",
    careerOverview: "경력 보기",
    stats: [["30+ yrs", "Telecom & ICT"], ["Country", "Manager Experience"], ["Special", "Grade ICT Engineer"]],
    profileLabel: "EXECUTIVE PROFILE",
    profileRole: "ICT & Telecom Business Leader",
    profileList: ["Tier-1 통신사 사업 리더십", "네트워크 설계 · 구축 · 유지관리", "Korea GTM & Country Management", "5G · SDDC · Data Center · Security"],
    location: "SEOUL METROPOLITAN AREA · KOREA",
    aboutEyebrow: "01 / PROFILE",
    aboutTitle: "기술과 사업의 경계를 넘나든 커리어",
    aboutText: "통신망 엔지니어링에서 시작해 글로벌 네트워크 벤더의 한국 사업 책임자와 신규사업 임원으로 역할을 확장해 왔습니다. 고객의 기술적 Pain Point를 파악하고, 해외 본사·국내 파트너·고객 조직을 연결해 실제 사업으로 전환하는 데 강점이 있습니다.",
    careerEyebrow: "02 / CAREER & PROJECTS",
    careerTitle: "경력별 실제 프로젝트와 사업 성과",
    careerText: "수치가 확인되는 성과는 숫자로, 기술사업 성과는 고객 문제·검증·상용화의 흐름으로 정리했습니다.",
    impactEyebrow: "03 / SELECTED IMPACT",
    impactTitle: "문제를 발견하고 상용화로 연결한 경험",
    impactText: "제품 설명보다 고객의 운영 문제를 먼저 정의하고 기술검증과 사업조건을 함께 설계해 신규 기술의 시장진입을 만들어 왔습니다.",
    domainEyebrow: "04 / DOMAIN MAP",
    domainTitle: "Infrastructure to Business Value",
    domainText: "네트워크 레이어의 기술적 이해를 고객 가치, 운영효율, 품질, 사업성과로 연결합니다.",
    credentialEyebrow: "05 / CREDENTIALS",
    credentialTitle: "기술경력을 뒷받침하는 공식 자격과 교육",
    credentialText: "사업 리더십뿐 아니라 정보통신 설계·구축·유지관리 경력을 공식 기술등급과 교육으로 지속적으로 보강하고 있습니다.",
    connectTitle: "기술과 사업을 함께 이해하는 리더가 필요하신가요?",
    connectText: "Telecom · Network · Data Center · New Business · Korea Market Development",
    footer: "ICT & Telecom Executive Portfolio",
  },
  en: {
    nav: ["About", "Career", "Impact", "Credentials"],
    contact: "Contact",
    kicker: "ICT · TELECOM · DATA CENTER · BUSINESS LEADERSHIP",
    heroTitle1: "I understand the technology",
    heroTitle2: "and turn it into business.",
    heroLead: "A technology-business leader with 30+ years across telecom and ICT, spanning network design, deployment and operations, Korea country leadership for global vendors, and new-business development.",
    careerOverview: "Career overview",
    stats: [["30+ yrs", "Telecom & ICT"], ["Country", "Manager Experience"], ["Special", "Grade ICT Engineer"]],
    profileLabel: "EXECUTIVE PROFILE",
    profileRole: "ICT & Telecom Business Leader",
    profileList: ["Tier-1 telecom account leadership", "Network design · build · maintenance", "Korea GTM & Country Management", "5G · SDDC · Data Center · Security"],
    location: "SEOUL METROPOLITAN AREA · KOREA",
    aboutEyebrow: "01 / PROFILE",
    aboutTitle: "A career connecting technology and business",
    aboutText: "I began in network engineering and grew into Korea country leadership and new-business executive roles for global technology vendors. My strength is identifying customer pain points and aligning overseas headquarters, Korean partners and customer organizations to create executable business outcomes.",
    careerEyebrow: "02 / CAREER & PROJECTS",
    careerTitle: "Projects and measurable outcomes by career stage",
    careerText: "Where verified metrics exist, I show them directly. For technical-business achievements, I focus on the path from customer problem to validation and commercialization.",
    impactEyebrow: "03 / SELECTED IMPACT",
    impactTitle: "From operational problem to commercialization",
    impactText: "I lead with the customer problem, then align technical validation and commercial conditions to bring new technologies into production.",
    domainEyebrow: "04 / DOMAIN MAP",
    domainTitle: "Infrastructure to Business Value",
    domainText: "I translate network-layer understanding into customer value, operational efficiency, service quality and commercial outcomes.",
    credentialEyebrow: "05 / CREDENTIALS",
    credentialTitle: "Credentials supporting hands-on technical experience",
    credentialText: "Alongside business leadership, I continue to reinforce my network design, deployment and maintenance background through formal ICT engineering credentials and training.",
    connectTitle: "Looking for a leader who understands both technology and business?",
    connectText: "Telecom · Network · Data Center · New Business · Korea Market Development",
    footer: "ICT & Telecom Executive Portfolio",
  },
} as const;

const expertise = {
  ko: [
    ["Telecom & Network", "Carrier IP, Broadband, 4G/5G, SDDC, Service Assurance"],
    ["Business Leadership", "Korea market entry, Country Management, GTM, P&L, partner ecosystem"],
    ["Project Execution", "Discovery, solution design, PoC, proposal, negotiation, deployment, operations"],
    ["Data Center & AI Infra", "Data-center networking, AI infrastructure, cloud and GPU ecosystem"],
    ["Security & New Business", "Cybersecurity, PQC, security acceleration, certification-led market development"],
    ["Public / Enterprise", "Tier-1 operators, public sector, enterprise and systems-integrator engagement"],
  ],
  en: [
    ["Telecom & Network", "Carrier IP, broadband, 4G/5G, SDDC and service assurance"],
    ["Business Leadership", "Korea market entry, country management, GTM, P&L and partner ecosystems"],
    ["Project Execution", "Discovery, solution design, PoC, proposal, negotiation, deployment and operations"],
    ["Data Center & AI Infra", "Data-center networking, AI infrastructure, cloud and GPU ecosystems"],
    ["Security & New Business", "Cybersecurity, PQC, security acceleration and certification-led market development"],
    ["Public / Enterprise", "Tier-1 operators, public sector, enterprises and systems integrators"],
  ],
} as const;

const careers = {
  ko: [
    {
      period: "2026–Present", company: "Emblasoft", role: "Korea Market Development / Country Leadership",
      body: "한국 통신시장 대상 5G 시험·Service Assurance 솔루션의 GTM, 파트너 생태계와 고객 개발을 추진하고 있습니다.",
      projects: ["국내 Tier-1 통신사·Private 5G·SI 채널 대상 Evolver/Service Assurance 사업개발", "유럽 본사 Sales·Pre-sales·Marketing 조직과 한국 시장 진입 전략 및 PoC 기획"],
      metrics: ["2026 Korea GTM", "5G / IMS / Service Assurance"],
    },
    {
      period: "2017–2025", company: "NEWGENS", role: "Vice President · New Business Development",
      body: "통신·5G·SDDC·데이터센터·AI 인프라·보안 분야의 신규 솔루션 발굴, 사업화, 기술제안 및 전략 파트너십을 총괄했습니다.",
      projects: ["KT·SKT·LGU+ 및 엔터프라이즈 고객 대상 신규 솔루션 제안·검증·수주", "SKT/LGU+ 5G Mobile Network 및 SKT SDDC 설계·구축·유지관리", "AI 데이터센터·GPU 인프라 신규사업 개발"],
      metrics: ["Annual sales US$3–5M", "100–120% quota attainment"],
    },
    {
      period: "2012–2017", company: "Accedian Networks", role: "Country Manager, Korea",
      body: "Network Performance Monitoring과 Service Assurance 사업의 한국 시장 개발, Tier-1 통신사 Key Account 및 파트너 채널을 총괄했습니다.",
      projects: ["SK Telecom의 SLA·상시 품질확인 요구에 맞춰 Two-Way Active Measurement/TWAMP 기반 솔루션 도입", "광모듈 통합형 Active Monitoring 기술검증, 상용 적용 및 사업 확대"],
      metrics: ["5 years Korea leadership", "SKT commercial deployment"],
      note: "해외 본사 직접 고용 · 국내 별도 법인 없음",
    },
    {
      period: "2009–2012", company: "BTI Systems", role: "Country Manager, Korea",
      body: "Packet-Optical Transport, Mobile Backhaul, Data Center Connectivity의 한국 사업전략, 고객·채널 개발 및 상업협상을 책임졌습니다.",
      projects: ["국내 통신사업자 대상 Packet-Optical Transport 및 Mobile Backhaul 사업개발", "한국 파트너 채널 구축, 기술평가·제안·상업협상·본사 Delivery alignment 총괄"],
      metrics: ["3 years Korea leadership", "Carrier / DC connectivity"],
      note: "해외 본사 직접 고용 · 국내 별도 법인 없음",
    },
    {
      period: "2000–2009", company: "Redback Networks / Ericsson", role: "Sales Engineering & Business Leadership",
      body: "KT·SKT·LGU+를 중심으로 Carrier IP, 초고속인터넷, 가입자 관리와 모바일 네트워크 신규기술의 설계·검증·상용화를 수행했습니다.",
      projects: ["KT ADSL 초고속인터넷의 Redback SMS 기반 가입자 인증구조 개선 및 신인증 방식 공동 개발", "SmartEdge 기반 DHCP 가입자 인증 기술의 검증·상용 서비스 전환"],
      metrics: ["KT project: US$5M quota → US$28M", "560% of target", "First commercial launch in Korea"],
    },
    {
      period: "1993–2000", company: "Comtec System · British Telecom", role: "Network Engineering / Consulting",
      body: "정보통신망 구축·유지관리, 기업 WAN, 초고속 국가망과 데이터통신 기술을 기반으로 기술경력을 시작했습니다.",
      projects: ["정보통신부 정보계·음성통합 네트워크 구축 및 유지관리", "초고속 국가망 ATM, B-ISDN, ADSL 기반 초고속인터넷 구축·유지관리", "기업·금융권 WAN 설계 및 Professional Services"],
      metrics: ["Network engineering foundation", "Build · operate · maintain"],
    },
  ],
  en: [
    {
      period: "2026–Present", company: "Emblasoft", role: "Korea Market Development / Country Leadership",
      body: "Leading Korea GTM, partner development and customer engagement for 5G testing and service-assurance solutions.",
      projects: ["Developing Evolver and service-assurance opportunities with Tier-1 operators, Private 5G customers and Korean SIs", "Coordinating Korea market-entry and PoC planning with European sales, presales and marketing teams"],
      metrics: ["2026 Korea GTM", "5G / IMS / Service Assurance"],
    },
    {
      period: "2017–2025", company: "NEWGENS", role: "Vice President · New Business Development",
      body: "Led new-solution discovery, commercialization, technical proposals and strategic partnerships across telecom, 5G, SDDC, data centers, AI infrastructure and security.",
      projects: ["Advanced new solutions with KT, SK Telecom, LG U+ and enterprise customers from proposal through validation and commercial closure", "Designed, deployed and maintained SKT/LGU+ 5G mobile networks and SKT SDDC environments", "Developed AI data-center and GPU infrastructure opportunities"],
      metrics: ["Annual sales US$3–5M", "100–120% quota attainment"],
    },
    {
      period: "2012–2017", company: "Accedian Networks", role: "Country Manager, Korea",
      body: "Led Korea market development, Tier-1 telecom accounts and partner channels for network performance monitoring and service assurance.",
      projects: ["Introduced Two-Way Active Measurement/TWAMP to address SK Telecom's SLA and continuous quality-monitoring needs", "Led validation and commercialization of an optical-module-integrated active-monitoring solution"],
      metrics: ["5 years Korea leadership", "SKT commercial deployment"],
      note: "Directly employed by overseas HQ · no separate Korean legal entity",
    },
    {
      period: "2009–2012", company: "BTI Systems", role: "Country Manager, Korea",
      body: "Owned Korean market strategy, customer/channel development and commercial engagement for packet-optical transport, mobile backhaul and data-center connectivity.",
      projects: ["Developed packet-optical transport and mobile-backhaul opportunities with Korean carriers", "Built partner coverage and led technical evaluations, proposals, negotiations and delivery alignment with HQ"],
      metrics: ["3 years Korea leadership", "Carrier / DC connectivity"],
      note: "Directly employed by overseas HQ · no separate Korean legal entity",
    },
    {
      period: "2000–2009", company: "Redback Networks / Ericsson", role: "Sales Engineering & Business Leadership",
      body: "Led architecture, validation and commercialization of carrier IP, broadband subscriber-management and mobile-network technologies with KT, SK Telecom and LG U+.",
      projects: ["Worked with KT to redesign the Redback SMS-based subscriber-authentication architecture for ADSL broadband", "Validated and commercialized DHCP-based subscriber authentication using SmartEdge"],
      metrics: ["KT project: US$5M quota → US$28M", "560% of target", "First commercial launch in Korea"],
    },
    {
      period: "1993–2000", company: "Comtec System · British Telecom", role: "Network Engineering / Consulting",
      body: "Built the technical foundation of my career through information-network deployment and maintenance, enterprise WANs and national broadband infrastructure.",
      projects: ["Built and maintained integrated data/voice networks for the Ministry of Information and Communication", "Delivered ATM national broadband, B-ISDN and ADSL broadband network projects", "Provided enterprise and financial-sector WAN design and professional services"],
      metrics: ["Network engineering foundation", "Build · operate · maintain"],
    },
  ],
} as const;

const highlights = {
  ko: [
    ["KT / BROADBAND", "US$5M → US$28M", "가입자 인증 구조의 상용 서비스 전환", "Redback SmartEdge 기반 초고속인터넷 환경에서 KT와 가입자 인증구조를 개선하고 검증·상용화까지 연결했습니다."],
    ["SKT / SERVICE ASSURANCE", "COMMERCIALIZED", "Active Monitoring 사업화", "TWAMP 기반 Two-Way Active Measurement 기능을 광모듈에 통합한 솔루션을 도입해 기술검증과 상용 적용을 추진했습니다."],
    ["NEWGENS / SALES", "US$3–5M / YEAR", "신규사업 매출과 복합 프로젝트 리딩", "연간 3–5M달러 규모 매출을 수행하며 100–120% 수준의 목표 달성과 통신·5G·SDDC·AI 인프라 신규사업을 추진했습니다."],
    ["5G / SDDC", "DESIGN → O&M", "설계·구축·유지관리 전 과정", "SKT·LGU+ 5G Mobile Network와 SKT SDDC Network에서 설계, 구축 및 유지관리 경험을 축적했습니다."],
  ],
  en: [
    ["KT / BROADBAND", "US$5M → US$28M", "Commercialized a new subscriber-authentication architecture", "Worked with KT to improve, validate and commercialize the subscriber-authentication architecture in a Redback SmartEdge broadband environment."],
    ["SKT / SERVICE ASSURANCE", "COMMERCIALIZED", "Brought Active Monitoring into production", "Introduced an optical-module-integrated Two-Way Active Measurement/TWAMP solution and led technical validation through commercial deployment."],
    ["NEWGENS / SALES", "US$3–5M / YEAR", "Built new business and complex infrastructure pursuits", "Delivered US$3–5M in annual sales with 100–120% quota attainment while developing telecom, 5G, SDDC and AI-infrastructure opportunities."],
    ["5G / SDDC", "DESIGN → O&M", "Full lifecycle from design through maintenance", "Built hands-on experience across design, deployment and maintenance for SKT/LGU+ 5G mobile networks and SKT SDDC."],
  ],
} as const;

const domains = ["Information & Communications Facilities", "Carrier IP / MPLS / Broadband", "4G LTE / 5G Mobile Network", "SDDC / Data Center Networking", "Network Performance & SLA Assurance", "Active / Passive Monitoring", "Private 5G / Cloud Infrastructure", "AI / GPU Infrastructure", "Cybersecurity / PQC", "Technical Sales & Value Engineering", "Program / Project Management", "Partner & Channel Development"];

export default function PortfolioClient() {
  const [lang, setLang] = useState<Lang>("ko");
  const t = copy[lang];
  const exp = expertise[lang];
  const career = careers[lang];
  const impact = highlights[lang];

  return (
    <main className={styles.page} lang={lang}>
      <header className={styles.nav}>
        <a className={styles.brand} href="#top" aria-label="BumJun Lee portfolio home"><span>BJ</span><b>BUMJUN LEE</b></a>
        <nav aria-label="Portfolio navigation"><a href="#about">{t.nav[0]}</a><a href="#career">{t.nav[1]}</a><a href="#impact">{t.nav[2]}</a><a href="#credentials">{t.nav[3]}</a></nav>
        <div className={styles.navRight}>
          <div className={styles.langSwitch} aria-label="Language switch"><button className={lang === "ko" ? styles.activeLang : ""} onClick={() => setLang("ko")}>KR</button><button className={lang === "en" ? styles.activeLang : ""} onClick={() => setLang("en")}>EN</button></div>
          <a className={styles.contactButton} href="mailto:bjlee210@gmail.com">{t.contact}</a>
        </div>
      </header>

      <section className={styles.hero} id="top"><div className={styles.heroGlow} /><div className={styles.heroGrid}>
        <div className={styles.heroCopy}><p className={styles.kicker}>{t.kicker}</p><h1>{t.heroTitle1}<br/><em>{t.heroTitle2}</em></h1><p className={styles.lead}>{t.heroLead}</p>
          <div className={styles.heroActions}><a className={styles.primary} href="#career">{t.careerOverview} <span>↓</span></a><a className={styles.secondary} href="https://www.linkedin.com/in/bumjun-lee-8b30562/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a className={styles.secondary} href="https://github.com/mystar11" target="_blank" rel="noreferrer">GitHub ↗</a></div>
          <div className={styles.heroStats}>{t.stats.map(([a,b]) => <div key={b}><strong>{a}</strong><span>{b}</span></div>)}</div>
        </div>
        <aside className={styles.profileCard} aria-label="Professional profile"><div className={styles.profilePhotoWrap}><img className={styles.profilePhoto} src={`${basePath}/profile-bumjun.jpg`} alt="BumJun Lee illustrated profile" /></div><p>{t.profileLabel}</p><h2>BumJun Lee</h2><h3>{t.profileRole}</h3><ul>{t.profileList.map((x,i)=><li key={x}><span>0{i+1}</span>{x}</li>)}</ul><div className={styles.available}>{t.location}</div></aside>
      </div></section>

      <section className={styles.section} id="about"><div className={styles.sectionHeading}><div><span>{t.aboutEyebrow}</span><h2>{t.aboutTitle}</h2></div><p>{t.aboutText}</p></div><div className={styles.expertiseGrid}>{exp.map(([title,text],i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

      <section className={styles.careerSection} id="career"><div className={styles.section}><div className={styles.sectionHeading}><div><span>{t.careerEyebrow}</span><h2>{t.careerTitle}</h2></div><p>{t.careerText}</p></div><div className={styles.timeline}>{career.map((item)=><article key={`${item.period}-${item.company}`}><time>{item.period}</time><div><h3>{item.company}</h3><b>{item.role}</b><p>{item.body}</p><ul className={styles.projectList}>{item.projects.map(p=><li key={p}>{p}</li>)}</ul><div className={styles.metricRow}>{item.metrics.map(m=><strong key={m}>{m}</strong>)}</div>{"note" in item && item.note && <small>{item.note}</small>}</div></article>)}</div></div></section>

      <section className={styles.section} id="impact"><div className={styles.sectionHeading}><div><span>{t.impactEyebrow}</span><h2>{t.impactTitle}</h2></div><p>{t.impactText}</p></div><div className={styles.highlightGrid}>{impact.map(([tag,metric,title,text])=><article key={title}><span>{tag}</span><strong className={styles.bigMetric}>{metric}</strong><h3>{title}</h3><p>{text}</p></article>)}</div></section>

      <section className={styles.darkSection}><div className={styles.section}><div className={styles.domainGrid}><div><span>{t.domainEyebrow}</span><h2>{t.domainTitle}</h2><p>{t.domainText}</p></div><div className={styles.domainTags}>{domains.map(d=><span key={d}>{d}</span>)}</div></div></div></section>

      <section className={styles.section} id="credentials"><div className={styles.sectionHeading}><div><span>{t.credentialEyebrow}</span><h2>{t.credentialTitle}</h2></div><p>{t.credentialText}</p></div><div className={styles.credentials}>
        <article><small>PROFESSIONAL GRADE</small><h3>{lang === "ko" ? "정보통신 특급기술자" : "Special Grade ICT Engineer"}</h3><p>{lang === "ko" ? "한국정보통신공사협회 · 정보통신기술자 경력수첩" : "Korea Information & Communication Contractors Association"}</p><b>Issued 2025.09</b></article>
        <article><small>EDUCATION</small><h3>{lang === "ko" ? "경희대학교 대학원" : "Kyung Hee University Graduate School"}</h3><p>{lang === "ko" ? "전자공학과 · 석사" : "M.S. · Electronics Engineering"}</p><b>1993</b></article>
        <article><small>UPCOMING TRAINING</small><h3>{lang === "ko" ? "정보통신설비 유지보수 관리자 교육" : "ICT Facilities Maintenance Manager Training"}</h3><p>{lang === "ko" ? "비대면 실시간 화상교육 제30기" : "Live remote training · 30th session"}</p><b>{lang === "ko" ? "2026.09.21–09.23 · 수료 예정" : "2026.09.21–09.23 · Scheduled"}</b></article>
      </div></section>

      <section className={styles.contactSection}><div><span>LET&apos;S CONNECT</span><h2>{t.connectTitle}</h2><p>{t.connectText}</p></div><div className={styles.contactLinks}><a href="mailto:bjlee210@gmail.com"><small>EMAIL</small><b>bjlee210@gmail.com</b><span>↗</span></a><a href="https://www.linkedin.com/in/bumjun-lee-8b30562/" target="_blank" rel="noreferrer"><small>LINKEDIN</small><b>linkedin.com/in/bumjun-lee-8b30562</b><span>↗</span></a><a href="https://github.com/mystar11" target="_blank" rel="noreferrer"><small>GITHUB</small><b>github.com/mystar11</b><span>↗</span></a></div></section>
      <footer className={styles.footer}><b>BUMJUN LEE</b><span>{t.footer}</span></footer>
    </main>
  );
}
