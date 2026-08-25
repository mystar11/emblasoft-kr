"use client";

import { useState } from "react";
import styles from "./portfolio.module.css";

type Lang = "ko" | "en";

const text = {
  ko: {
    nav: ["프로필", "경력", "성과", "자격"],
    contact: "연락처",
    heroTitle: "Executive Profile",
    heroLead: "30년 이상의 통신·ICT 경력. 네트워크 설계·구축·유지관리, 글로벌 벤더 Korea Country Management, 신규사업 개발 및 사업화 경험 보유.",
    careerButton: "주요 경력",
    profileLabel: "EXECUTIVE PROFILE",
    profileRole: "Telecom & ICT Business Leader",
    profileList: [
      "Tier-1 통신사 사업 및 Key Account Management",
      "Network Design · Deployment · Maintenance",
      "Korea GTM · Country Management · Business Development",
      "5G · SDDC · Data Center · Service Assurance",
    ],
    aboutTitle: "전문 경력 요약",
    aboutText: "통신망 엔지니어링을 기반으로 글로벌 네트워크 벤더의 Korea Country Manager 및 신규사업 임원까지 수행. 고객 요구사항 분석, 기술검증, 상용화, 파트너 관리 및 사업 확대 전 과정에 대한 경험 보유.",
    careerTitle: "주요 경력 및 프로젝트",
    careerIntro: "회사별 역할, 주요 프로젝트 및 정량 성과를 중심으로 구성.",
    impactTitle: "핵심 사업 성과",
    impactIntro: "신규 기술의 도입, 검증, 상용화 및 매출 전환을 통해 창출한 대표 성과.",
    domainTitle: "전문 역량",
    domainText: "통신망 기술, Service Assurance, 데이터센터 인프라, 사업개발 및 파트너 생태계 전반의 전문역량 보유.",
    credentialTitle: "전문 자격 및 교육",
    credentialIntro: "정보통신 분야 공식 기술등급 및 관련 전문교육 내역.",
    training: "정보통신설비 유지보수 관리자 교육",
    trainingDetail: "제30기 · 비대면 실시간 화상교육",
    trainingDate: "2026.09.21–09.23",
    contactLabel: "CONTACT",
    connectTitle: "Telecom · Network · Data Center · Korea Market Development",
    connectText: "사업총괄 · 신규사업 개발 · 기술사업 · Country Management",
    footer: "Telecom & ICT Business Leadership Portfolio",
  },
  en: {
    nav: ["Profile", "Career", "Impact", "Credentials"],
    contact: "Contact",
    heroTitle: "Executive Profile",
    heroLead: "30+ years across telecom and ICT, covering network design, deployment and maintenance, Korea country management for global vendors, new-business development and commercialization.",
    careerButton: "Career Profile",
    profileLabel: "EXECUTIVE PROFILE",
    profileRole: "Telecom & ICT Business Leader",
    profileList: [
      "Tier-1 Telecom Business & Key Account Management",
      "Network Design · Deployment · Maintenance",
      "Korea GTM · Country Management · Business Development",
      "5G · SDDC · Data Center · Service Assurance",
    ],
    aboutTitle: "Professional Summary",
    aboutText: "Career progression from network engineering to Korea Country Manager and new-business executive roles with global technology vendors. Extensive experience across customer requirements, technical validation, commercialization, partner management and business expansion.",
    careerTitle: "Career & Key Projects",
    careerIntro: "Roles, key projects and measurable business outcomes by company.",
    impactTitle: "Selected Business Impact",
    impactIntro: "Representative results in technology introduction, validation, commercialization and revenue conversion.",
    domainTitle: "Core Expertise",
    domainText: "Expertise spanning telecom networks, service assurance, data-center infrastructure, business development and partner ecosystems.",
    credentialTitle: "Professional Credentials & Training",
    credentialIntro: "Formal ICT engineering grade and relevant professional training.",
    training: "ICT Facilities Maintenance Manager Training",
    trainingDetail: "30th Session · Live Remote Program",
    trainingDate: "2026.09.21–09.23",
    contactLabel: "CONTACT",
    connectTitle: "Telecom · Network · Data Center · Korea Market Development",
    connectText: "Business Leadership · New Business · Technical Business · Country Management",
    footer: "Telecom & ICT Business Leadership Portfolio",
  },
} as const;

const careers = {
  ko: [
    {
      period: "2017–2025",
      company: "NEWGENS",
      role: "Vice President · New Business Development",
      body: "통신·5G·SDDC·데이터센터·AI 인프라·보안 분야 신규사업 개발, 기술제안, 전략 파트너십 및 사업화 총괄.",
      projects: [
        "KT·SKT·LGU+ 및 엔터프라이즈 고객 대상 신규 솔루션 제안·PoC·상용 수주",
        "SKT/LGU+ 5G Mobile Network 및 SKT SDDC 설계·구축·유지관리",
        "AI 데이터센터·GPU 인프라 사업개발 및 파트너 협업",
      ],
      metrics: ["Annual Sales US$3–5M", "Quota Attainment 100–120%"],
    },
    {
      period: "2012–2017",
      company: "Accedian Networks",
      role: "Country Manager, Korea",
      body: "Network Performance Monitoring 및 Service Assurance 한국 사업총괄. Tier-1 통신사 Key Account, 파트너 채널 및 본사 협업 관리.",
      projects: [
        "SK Telecom SLA 및 상시 네트워크 품질검증을 위한 Two-Way Active Measurement/TWAMP 솔루션 도입",
        "광모듈 통합형 Active Monitoring 기술검증, 상용 적용 및 사업 확대",
      ],
      metrics: ["5 Years Korea Leadership", "SKT Commercial Deployment"],
      note: "해외 본사 직접 고용 · 국내 별도 법인 없음",
    },
    {
      period: "2009–2012",
      company: "BTI Systems",
      role: "Country Manager, Korea",
      body: "Packet-Optical Transport, Mobile Backhaul 및 Data Center Connectivity 한국 사업전략, 고객개발, 채널 운영 및 상업협상 총괄.",
      projects: [
        "국내 통신사업자 대상 Packet-Optical Transport 및 Mobile Backhaul 사업개발",
        "한국 파트너 채널 구축, 기술평가·제안·상업협상 및 본사 Delivery Coordination",
      ],
      metrics: ["3 Years Korea Leadership", "Carrier / DC Connectivity"],
      note: "해외 본사 직접 고용 · 국내 별도 법인 없음",
    },
    {
      period: "2000–2009",
      company: "Redback Networks / Ericsson",
      role: "Sales Engineering & Business Leadership",
      body: "KT·SKT·LGU+ 대상 Carrier IP, 초고속인터넷 및 가입자 관리 기술의 설계, 검증, 상용화 및 사업개발 수행.",
      projects: [
        "KT ADSL 초고속인터넷의 Redback SMS 기반 가입자 인증구조 개선 및 신인증 방식 공동 개발",
        "SmartEdge 기반 DHCP 가입자 인증 기술 검증 및 상용서비스 전환",
      ],
      metrics: ["KT: US$5M Quota → US$28M", "560% of Target", "First Commercial Launch in Korea"],
    },
    {
      period: "1993–2000",
      company: "Comtec System · British Telecom",
      role: "Network Engineering / Consulting",
      body: "정보통신망 구축·유지관리, 기업 WAN, 초고속 국가망 및 데이터통신 분야 Network Engineering / Professional Services 수행.",
      projects: [
        "정보통신부 정보계·음성통합 네트워크 구축 및 유지관리",
        "초고속 국가망 ATM, B-ISDN, ADSL 기반 초고속인터넷 구축·유지관리",
        "기업·금융권 WAN 설계 및 Professional Services",
      ],
      metrics: ["Network Engineering", "Build · Operate · Maintain"],
    },
  ],
  en: [
    {
      period: "2017–2025",
      company: "NEWGENS",
      role: "Vice President · New Business Development",
      body: "Executive responsibility for new-business development, technical proposals, strategic partnerships and commercialization across telecom, 5G, SDDC, data centers, AI infrastructure and security.",
      projects: [
        "New-solution proposals, PoCs and commercial wins with KT, SK Telecom, LG U+ and enterprise customers",
        "Design, deployment and maintenance of SKT/LGU+ 5G mobile networks and SKT SDDC environments",
        "AI data-center and GPU infrastructure business development and partner engagement",
      ],
      metrics: ["Annual Sales US$3–5M", "Quota Attainment 100–120%"],
    },
    {
      period: "2012–2017",
      company: "Accedian Networks",
      role: "Country Manager, Korea",
      body: "Korea business leadership for Network Performance Monitoring and Service Assurance, including Tier-1 telecom accounts, partner channels and headquarters coordination.",
      projects: [
        "Introduction of Two-Way Active Measurement/TWAMP for SK Telecom SLA and continuous network-quality validation",
        "Technical validation, commercial deployment and business expansion of an optical-module-integrated Active Monitoring solution",
      ],
      metrics: ["5 Years Korea Leadership", "SKT Commercial Deployment"],
      note: "Directly employed by overseas HQ · no separate Korean legal entity",
    },
    {
      period: "2009–2012",
      company: "BTI Systems",
      role: "Country Manager, Korea",
      body: "Korea market strategy, customer development, channel management and commercial negotiations for Packet-Optical Transport, Mobile Backhaul and Data Center Connectivity.",
      projects: [
        "Packet-optical transport and mobile-backhaul business development with Korean carriers",
        "Partner-channel development, technical evaluation, proposals, commercial negotiations and HQ delivery coordination",
      ],
      metrics: ["3 Years Korea Leadership", "Carrier / DC Connectivity"],
      note: "Directly employed by overseas HQ · no separate Korean legal entity",
    },
    {
      period: "2000–2009",
      company: "Redback Networks / Ericsson",
      role: "Sales Engineering & Business Leadership",
      body: "Architecture, validation, commercialization and business development for Carrier IP, broadband and subscriber-management technologies with KT, SK Telecom and LG U+.",
      projects: [
        "Joint improvement of Redback SMS-based subscriber authentication for KT ADSL broadband",
        "Validation and commercialization of DHCP-based subscriber authentication using SmartEdge",
      ],
      metrics: ["KT: US$5M Quota → US$28M", "560% of Target", "First Commercial Launch in Korea"],
    },
    {
      period: "1993–2000",
      company: "Comtec System · British Telecom",
      role: "Network Engineering / Consulting",
      body: "Network Engineering and Professional Services across information-network deployment and maintenance, enterprise WANs and national broadband infrastructure.",
      projects: [
        "Deployment and maintenance of integrated data/voice networks for the Ministry of Information and Communication",
        "ATM national broadband, B-ISDN and ADSL broadband deployment and maintenance",
        "Enterprise and financial-sector WAN design and Professional Services",
      ],
      metrics: ["Network Engineering", "Build · Operate · Maintain"],
    },
  ],
} as const;

const impacts = {
  ko: [
    ["KT / BROADBAND", "US$5M → US$28M", "가입자 인증 구조 상용화", "KT ADSL 가입자 인증구조 개선 및 DHCP 기반 신인증 방식 상용화. US$5M Quota 대비 US$28M 매출 달성(560%)."],
    ["SKT / SERVICE ASSURANCE", "COMMERCIALIZED", "Active Monitoring 상용화", "TWAMP 기반 Two-Way Active Measurement 기능을 광모듈에 통합한 솔루션의 국내 도입, 기술검증 및 상용 적용."],
    ["NEWGENS / SALES", "US$3–5M / YEAR", "신규사업 매출 및 목표 달성", "연간 US$3–5M 매출 및 100–120% Quota Attainment. 5G·SDDC·AI 인프라 신규사업 확대."],
    ["5G / SDDC", "DESIGN → O&M", "설계·구축·유지관리 전 단계", "SKT·LGU+ 5G Mobile Network 및 SKT SDDC 설계·구축·유지관리 전 단계 수행."],
  ],
  en: [
    ["KT / BROADBAND", "US$5M → US$28M", "Subscriber Authentication Commercialization", "Commercialization of an improved KT ADSL subscriber-authentication architecture using DHCP-based authentication. US$28M revenue against a US$5M quota (560%)."],
    ["SKT / SERVICE ASSURANCE", "COMMERCIALIZED", "Active Monitoring Commercialization", "Introduction, technical validation and commercial deployment of an optical-module-integrated Two-Way Active Measurement/TWAMP solution."],
    ["NEWGENS / SALES", "US$3–5M / YEAR", "New-Business Revenue & Quota Delivery", "US$3–5M annual sales with 100–120% quota attainment, supporting expansion across 5G, SDDC and AI infrastructure."],
    ["5G / SDDC", "DESIGN → O&M", "Full Lifecycle Delivery", "Design, deployment and maintenance across SKT/LGU+ 5G mobile networks and SKT SDDC environments."],
  ],
} as const;

const domains = [
  "Carrier IP / Broadband",
  "4G LTE / 5G",
  "SDDC / Data Center",
  "Service Assurance",
  "Active Monitoring / TWAMP",
  "AI / GPU Infrastructure",
  "Cybersecurity / PQC",
  "Technical Sales",
  "Program / Project Management",
  "Korea GTM",
  "Partner & Channel Development",
];

export default function PortfolioClientV2() {
  const [lang, setLang] = useState<Lang>("ko");
  const t = text[lang];
  const career = careers[lang];
  const impact = impacts[lang];

  return (
    <main className={styles.page} lang={lang}>
      <header className={styles.nav}>
        <a className={styles.brand} href="#top"><span>BJ</span><b>BUMJUN LEE</b></a>
        <nav><a href="#about">{t.nav[0]}</a><a href="#career">{t.nav[1]}</a><a href="#impact">{t.nav[2]}</a><a href="#credentials">{t.nav[3]}</a></nav>
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          <div style={{display:"flex",border:"1px solid #dce4ea",borderRadius:999,padding:3}}>
            <button onClick={() => setLang("ko")} style={{border:0,borderRadius:999,padding:"7px 10px",background:lang === "ko" ? "#122132" : "transparent",color:lang === "ko" ? "#fff" : "#68798a",fontWeight:800,cursor:"pointer"}}>KR</button>
            <button onClick={() => setLang("en")} style={{border:0,borderRadius:999,padding:"7px 10px",background:lang === "en" ? "#122132" : "transparent",color:lang === "en" ? "#fff" : "#68798a",fontWeight:800,cursor:"pointer"}}>EN</button>
          </div>
          <a className={styles.contactButton} href="mailto:bjlee210@gmail.com">{t.contact}</a>
        </div>
      </header>

      <section className={styles.hero} id="top">
        <div className={styles.heroGlow} />
        <div className={styles.heroGrid} style={{paddingTop:64,paddingBottom:72,alignItems:"start"}}>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>BUMJUN LEE · EXECUTIVE PORTFOLIO</p>
            <h1 style={{fontSize:"clamp(40px,5vw,64px)",lineHeight:1.06,maxWidth:760}}>{t.heroTitle}</h1>
            <p className={styles.lead} style={{maxWidth:760}}>{t.heroLead}</p>
            <div className={styles.heroActions}>
              <a className={styles.primary} href="#career">{t.careerButton} <span>↓</span></a>
              <a className={styles.secondary} href="https://www.linkedin.com/in/bumjun-lee-8b30562/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a className={styles.secondary} href="https://github.com/mystar11" target="_blank" rel="noreferrer">GitHub ↗</a>
            </div>
            <div className={styles.heroStats}>
              <div><strong>30+ Years</strong><span>Telecom & ICT</span></div>
              <div><strong>Country Manager</strong><span>Korea Leadership</span></div>
              <div><strong>Special Grade</strong><span>ICT Engineer</span></div>
            </div>
          </div>
          <aside className={styles.profileCard} style={{marginTop:8}}>
            <div className={styles.monogram}>BJ</div>
            <p>{t.profileLabel}</p><h2>BumJun Lee</h2><h3>{t.profileRole}</h3>
            <ul>{t.profileList.map((item, i) => <li key={item}><span>0{i + 1}</span>{item}</li>)}</ul>
            <div className={styles.available}>SEOUL METROPOLITAN AREA · KOREA</div>
          </aside>
        </div>
      </section>

      <section className={styles.section} id="about">
        <div className={styles.sectionHeading}><div><span>01 / PROFILE</span><h2>{t.aboutTitle}</h2></div><p>{t.aboutText}</p></div>
        <div className={styles.expertiseGrid}>
          {[["Telecom & Network","Carrier IP · Broadband · 4G/5G · SDDC"],["Business Leadership","Country Management · Korea GTM · P&L"],["Project Execution","PoC · Proposal · Negotiation · Deployment"],["Service Assurance","SLA · Active Monitoring · TWAMP"],["Data Center & AI","DC Network · Cloud · GPU Infrastructure"],["Partner Ecosystem","Global Vendor · SI · Channel · Tier-1 Operator"]].map(([a,b],i)=><article key={a}><span>0{i+1}</span><h3>{a}</h3><p>{b}</p></article>)}
        </div>
      </section>

      <section className={styles.careerSection} id="career"><div className={styles.section}>
        <div className={styles.sectionHeading}><div><span>02 / CAREER</span><h2>{t.careerTitle}</h2></div><p>{t.careerIntro}</p></div>
        <div className={styles.timeline}>{career.map((item)=><article key={`${item.period}-${item.company}`}><time>{item.period}</time><div><h3>{item.company}</h3><b>{item.role}</b><p>{item.body}</p><ul style={{margin:"12px 0 0",paddingLeft:18,color:"#536578",fontSize:12,lineHeight:1.75}}>{item.projects.map(p=><li key={p}>{p}</li>)}</ul><div style={{marginTop:9}}>{item.metrics.map(m=><strong key={m} style={{display:"inline-block",border:"1px solid #cfd9e1",borderRadius:999,padding:"6px 10px",margin:"5px 6px 0 0",fontSize:10,color:"#1261ff"}}>{m}</strong>)}</div>{item.note && <small>{item.note}</small>}</div></article>)}</div>
      </div></section>

      <section className={styles.section} id="impact">
        <div className={styles.sectionHeading}><div><span>03 / IMPACT</span><h2>{t.impactTitle}</h2></div><p>{t.impactIntro}</p></div>
        <div className={styles.highlightGrid}>{impact.map(([tag,metric,title,desc])=><article key={title}><span>{tag}</span><strong style={{display:"block",marginTop:26,fontSize:28,letterSpacing:"-.04em",color:"#1261ff"}}>{metric}</strong><h3 style={{marginTop:18}}>{title}</h3><p>{desc}</p></article>)}</div>
      </section>

      <section className={styles.darkSection}><div className={styles.section}><div className={styles.domainGrid}><div><span>04 / EXPERTISE</span><h2>{t.domainTitle}</h2><p>{t.domainText}</p></div><div className={styles.domainTags}>{domains.map(d=><span key={d}>{d}</span>)}</div></div></div></section>

      <section className={styles.section} id="credentials">
        <div className={styles.sectionHeading}><div><span>05 / CREDENTIALS</span><h2>{t.credentialTitle}</h2></div><p>{t.credentialIntro}</p></div>
        <div className={styles.credentials} style={{gridTemplateColumns:"repeat(2, minmax(0, 1fr))",maxWidth:800}}>
          <article><small>PROFESSIONAL GRADE</small><h3>{lang === "ko" ? "정보통신 특급기술자" : "Special Grade ICT Engineer"}</h3><p>{lang === "ko" ? "한국정보통신공사협회 · 정보통신기술자 경력수첩" : "Korea Information & Communication Contractors Association"}</p><b>Issued 2025.09</b></article>
          <article><small>PROFESSIONAL TRAINING</small><h3>{t.training}</h3><p>{t.trainingDetail}</p><b>{t.trainingDate}</b></article>
        </div>
      </section>

      <section className={styles.contactSection}><div><span>{t.contactLabel}</span><h2>{t.connectTitle}</h2><p>{t.connectText}</p></div><div className={styles.contactLinks}><a href="mailto:bjlee210@gmail.com"><small>EMAIL</small><b>bjlee210@gmail.com</b><span>↗</span></a><a href="https://www.linkedin.com/in/bumjun-lee-8b30562/" target="_blank" rel="noreferrer"><small>LINKEDIN</small><b>linkedin.com/in/bumjun-lee-8b30562</b><span>↗</span></a><a href="https://github.com/mystar11" target="_blank" rel="noreferrer"><small>GITHUB</small><b>github.com/mystar11</b><span>↗</span></a></div></section>
      <footer className={styles.footer}><b>BUMJUN LEE</b><span>{t.footer}</span></footer>
    </main>
  );
}