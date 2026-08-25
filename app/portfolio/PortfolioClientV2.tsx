"use client";

import { useState } from "react";
import styles from "./portfolio.module.css";

type Lang = "ko" | "en";

const text = {
  ko: {
    nav: ["소개", "경력", "성과", "자격"],
    contact: "연락하기",
    heroTitle: "통신·ICT 30년, 기술에서 사업까지.",
    heroLead: "네트워크 설계·구축·유지관리에서 글로벌 벤더 한국 사업총괄, 신규사업 개발까지 경험한 기술사업 리더입니다.",
    aboutTitle: "기술과 사업, 두 영역의 경험",
    aboutText: "통신망 엔지니어링에서 시작해 글로벌 네트워크 벤더의 한국 사업 책임자와 신규사업 임원으로 역할을 확장했습니다. 고객의 기술적 문제를 파악하고 해외 본사·국내 파트너·고객 조직을 연결해 실제 사업으로 전환하는 데 강점이 있습니다.",
    careerTitle: "경력과 주요 프로젝트",
    careerIntro: "검증 가능한 성과는 수치로, 기술사업은 고객 문제에서 검증·상용화까지의 흐름으로 정리했습니다.",
    impactTitle: "주요 사업 성과",
    impactIntro: "기술 검증을 실제 상용화와 매출로 연결한 대표 사례입니다.",
    domainTitle: "핵심 전문영역",
    domainText: "네트워크 기술 이해를 고객 가치, 운영 품질, 사업성과로 연결합니다.",
    credentialTitle: "전문 자격",
    credentialIntro: "정보통신 설계·구축·유지관리 경험을 공식 기술등급과 전문교육으로 보강하고 있습니다.",
    training: "정보통신설비 유지보수 관리자 교육",
    trainingDetail: "비대면 실시간 화상교육 제30기",
    trainingDate: "2026.09.21–09.23",
    connectTitle: "Telecom · Network · Data Center · Korea Market Development",
  },
  en: {
    nav: ["About", "Career", "Impact", "Credentials"],
    contact: "Contact",
    heroTitle: "30 Years in Telecom & ICT. From Technology to Business.",
    heroLead: "A technology-business leader with experience spanning network design, deployment and maintenance, Korea country leadership for global vendors, and new-business development.",
    aboutTitle: "Experience across technology and business",
    aboutText: "I began in network engineering and expanded into Korea country leadership and new-business executive roles for global technology vendors. My strength is identifying customer problems and aligning global headquarters, Korean partners and customer organizations to create real business outcomes.",
    careerTitle: "Career and key projects",
    careerIntro: "Verified achievements are shown with metrics; technical-business achievements are presented from customer problem through validation and commercialization.",
    impactTitle: "Selected business results",
    impactIntro: "Representative cases where technical validation was converted into commercialization and revenue.",
    domainTitle: "Core expertise",
    domainText: "Connecting network technology with customer value, operational quality and business results.",
    credentialTitle: "Professional credentials",
    credentialIntro: "Formal ICT engineering credentials and professional training support hands-on design, deployment and maintenance experience.",
    training: "ICT Facilities Maintenance Manager Training",
    trainingDetail: "Live remote training · 30th session",
    trainingDate: "2026.09.21–09.23",
    connectTitle: "Telecom · Network · Data Center · Korea Market Development",
  },
} as const;

const careers = {
  ko: [
    {
      period: "2017–2025",
      company: "NEWGENS",
      role: "Vice President · New Business Development",
      body: "통신·5G·SDDC·데이터센터·AI 인프라·보안 분야 신규사업, 기술제안 및 전략 파트너십을 총괄했습니다.",
      projects: [
        "KT·SKT·LGU+ 및 엔터프라이즈 고객 대상 신규 솔루션 제안·검증·수주",
        "SKT/LGU+ 5G Mobile Network 및 SKT SDDC 설계·구축·유지관리",
        "AI 데이터센터·GPU 인프라 신규사업 개발",
      ],
      metrics: ["Annual sales US$3–5M", "100–120% quota attainment"],
    },
    {
      period: "2012–2017",
      company: "Accedian Networks",
      role: "Country Manager, Korea",
      body: "Network Performance Monitoring과 Service Assurance 사업의 한국 시장 개발, Tier-1 통신사 Key Account 및 파트너 채널을 총괄했습니다.",
      projects: [
        "SK Telecom의 SLA·상시 품질확인을 위한 Two-Way Active Measurement/TWAMP 솔루션 도입",
        "광모듈 통합형 Active Monitoring 기술검증, 상용 적용 및 사업 확대",
      ],
      metrics: ["5 years Korea leadership", "SKT commercial deployment"],
      note: "해외 본사 직접 고용 · 국내 별도 법인 없음",
    },
    {
      period: "2009–2012",
      company: "BTI Systems",
      role: "Country Manager, Korea",
      body: "Packet-Optical Transport, Mobile Backhaul, Data Center Connectivity의 한국 사업전략, 고객·채널 개발 및 상업협상을 책임졌습니다.",
      projects: [
        "국내 통신사업자 대상 Packet-Optical Transport 및 Mobile Backhaul 사업개발",
        "한국 파트너 채널 구축, 기술평가·제안·상업협상 및 본사 Delivery alignment 총괄",
      ],
      metrics: ["3 years Korea leadership", "Carrier / DC connectivity"],
      note: "해외 본사 직접 고용 · 국내 별도 법인 없음",
    },
    {
      period: "2000–2009",
      company: "Redback Networks / Ericsson",
      role: "Sales Engineering & Business Leadership",
      body: "KT·SKT·LGU+를 중심으로 Carrier IP, 초고속인터넷, 가입자 관리 신규기술의 설계·검증·상용화를 수행했습니다.",
      projects: [
        "KT ADSL 초고속인터넷의 Redback SMS 기반 가입자 인증구조 개선 및 신인증 방식 공동 개발",
        "SmartEdge 기반 DHCP 가입자 인증 기술의 검증 및 상용서비스 전환",
      ],
      metrics: ["KT: US$5M quota → US$28M", "560% of target", "First commercial launch in Korea"],
    },
    {
      period: "1993–2000",
      company: "Comtec System · British Telecom",
      role: "Network Engineering / Consulting",
      body: "정보통신망 구축·유지관리, 기업 WAN, 초고속 국가망과 데이터통신 기술을 기반으로 기술경력을 시작했습니다.",
      projects: [
        "정보통신부 정보계·음성통합 네트워크 구축 및 유지관리",
        "초고속 국가망 ATM, B-ISDN, ADSL 기반 초고속인터넷 구축·유지관리",
        "기업·금융권 WAN 설계 및 Professional Services",
      ],
      metrics: ["Network engineering foundation", "Build · operate · maintain"],
    },
  ],
  en: [
    {
      period: "2017–2025",
      company: "NEWGENS",
      role: "Vice President · New Business Development",
      body: "Led new business, technical proposals and strategic partnerships across telecom, 5G, SDDC, data centers, AI infrastructure and security.",
      projects: [
        "Advanced new solutions with KT, SK Telecom, LG U+ and enterprise customers from proposal through validation and commercial closure",
        "Designed, deployed and maintained SKT/LGU+ 5G mobile networks and SKT SDDC environments",
        "Developed AI data-center and GPU infrastructure opportunities",
      ],
      metrics: ["Annual sales US$3–5M", "100–120% quota attainment"],
    },
    {
      period: "2012–2017",
      company: "Accedian Networks",
      role: "Country Manager, Korea",
      body: "Led Korea market development, Tier-1 telecom accounts and partner channels for network performance monitoring and service assurance.",
      projects: [
        "Introduced Two-Way Active Measurement/TWAMP to address SK Telecom SLA and continuous quality-monitoring needs",
        "Led validation and commercialization of an optical-module-integrated Active Monitoring solution",
      ],
      metrics: ["5 years Korea leadership", "SKT commercial deployment"],
      note: "Directly employed by overseas HQ · no separate Korean legal entity",
    },
    {
      period: "2009–2012",
      company: "BTI Systems",
      role: "Country Manager, Korea",
      body: "Owned Korean market strategy, customer/channel development and commercial engagement for packet-optical transport, mobile backhaul and data-center connectivity.",
      projects: [
        "Developed packet-optical transport and mobile-backhaul opportunities with Korean carriers",
        "Built partner coverage and led technical evaluations, proposals, negotiations and HQ delivery alignment",
      ],
      metrics: ["3 years Korea leadership", "Carrier / DC connectivity"],
      note: "Directly employed by overseas HQ · no separate Korean legal entity",
    },
    {
      period: "2000–2009",
      company: "Redback Networks / Ericsson",
      role: "Sales Engineering & Business Leadership",
      body: "Led architecture, validation and commercialization of carrier IP and broadband subscriber-management technologies with KT, SK Telecom and LG U+.",
      projects: [
        "Worked with KT to improve the Redback SMS-based subscriber-authentication architecture for ADSL broadband",
        "Validated and commercialized DHCP-based subscriber authentication using SmartEdge",
      ],
      metrics: ["KT: US$5M quota → US$28M", "560% of target", "First commercial launch in Korea"],
    },
    {
      period: "1993–2000",
      company: "Comtec System · British Telecom",
      role: "Network Engineering / Consulting",
      body: "Built my technical foundation through information-network deployment and maintenance, enterprise WANs and national broadband infrastructure.",
      projects: [
        "Built and maintained integrated data/voice networks for the Ministry of Information and Communication",
        "Delivered ATM national broadband, B-ISDN and ADSL broadband projects",
        "Provided enterprise and financial-sector WAN design and professional services",
      ],
      metrics: ["Network engineering foundation", "Build · operate · maintain"],
    },
  ],
} as const;

const impacts = {
  ko: [
    ["KT / BROADBAND", "US$5M → US$28M", "가입자 인증 구조 상용화", "KT와 가입자 인증구조를 개선하고 신인증 방식을 검증·상용화하여 목표 대비 560%의 사업성과를 기록했습니다."],
    ["SKT / SERVICE ASSURANCE", "COMMERCIALIZED", "Active Monitoring 사업화", "TWAMP 기반 Two-Way Active Measurement 기능을 광모듈에 통합해 기술검증과 상용 적용을 추진했습니다."],
    ["NEWGENS / SALES", "US$3–5M / YEAR", "신규사업 매출", "연간 3–5M달러 규모 매출과 100–120% 목표 달성을 기반으로 5G·SDDC·AI 인프라 신규사업을 확대했습니다."],
    ["5G / SDDC", "DESIGN → O&M", "설계·구축·유지관리", "SKT·LGU+ 5G Mobile Network와 SKT SDDC에서 설계, 구축 및 유지관리 경험을 축적했습니다."],
  ],
  en: [
    ["KT / BROADBAND", "US$5M → US$28M", "Subscriber authentication commercialization", "Worked with KT to improve and commercialize subscriber authentication, delivering 560% of the project target."],
    ["SKT / SERVICE ASSURANCE", "COMMERCIALIZED", "Active Monitoring commercialization", "Introduced optical-module-integrated Two-Way Active Measurement/TWAMP and led validation through commercial deployment."],
    ["NEWGENS / SALES", "US$3–5M / YEAR", "New-business revenue", "Delivered US$3–5M annual sales at 100–120% quota attainment while expanding 5G, SDDC and AI-infrastructure opportunities."],
    ["5G / SDDC", "DESIGN → O&M", "Design, deployment and maintenance", "Built full-lifecycle experience for SKT/LGU+ 5G mobile networks and SKT SDDC."],
  ],
} as const;

const domains = ["Carrier IP / Broadband", "4G LTE / 5G", "SDDC / Data Center", "Service Assurance", "Active Monitoring / TWAMP", "AI / GPU Infrastructure", "Cybersecurity / PQC", "Technical Sales", "Program / Project Management", "Korea GTM", "Partner & Channel Development"];

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
            <button onClick={() => setLang("ko")} style={{border:0,borderRadius:999,padding:"7px 10px",fontWeight:800,cursor:"pointer",background:lang==="ko"?"#122132":"transparent",color:lang==="ko"?"#fff":"#68798a"}}>KR</button>
            <button onClick={() => setLang("en")} style={{border:0,borderRadius:999,padding:"7px 10px",fontWeight:800,cursor:"pointer",background:lang==="en"?"#122132":"transparent",color:lang==="en"?"#fff":"#68798a"}}>EN</button>
          </div>
          <a className={styles.contactButton} href="mailto:bjlee210@gmail.com">{t.contact}</a>
        </div>
      </header>

      <section className={styles.hero} id="top">
        <div className={styles.heroGlow}/>
        <div className={styles.heroGrid} style={{paddingTop:52,paddingBottom:70,alignItems:"start"}}>
          <div className={styles.heroCopy} style={{paddingTop:14}}>
            <p className={styles.kicker}>ICT · TELECOM · DATA CENTER · BUSINESS LEADERSHIP</p>
            <h1 style={{fontSize:"clamp(38px, 4.8vw, 62px)",lineHeight:1.04,maxWidth:760,letterSpacing:"-.05em"}}>{t.heroTitle}</h1>
            <p className={styles.lead} style={{marginTop:24,maxWidth:720}}>{t.heroLead}</p>
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
          <aside className={styles.profileCard} style={{marginTop:8}}>
            <div className={styles.monogram}>BJ</div>
            <p>EXECUTIVE PROFILE</p><h2>BumJun Lee</h2><h3>ICT & Telecom Business Leader</h3>
            <ul><li><span>01</span> Tier-1 Telecom Account Leadership</li><li><span>02</span> Network Design · Build · Maintenance</li><li><span>03</span> Korea GTM & Country Management</li><li><span>04</span> 5G · SDDC · Data Center · Security</li></ul>
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

      <section className={styles.contactSection}><div><span>LET&apos;S CONNECT</span><h2>{t.connectTitle}</h2><p>ICT · Telecom · Network · Data Center</p></div><div className={styles.contactLinks}><a href="mailto:bjlee210@gmail.com"><small>EMAIL</small><b>bjlee210@gmail.com</b><span>↗</span></a><a href="https://www.linkedin.com/in/bumjun-lee-8b30562/" target="_blank" rel="noreferrer"><small>LINKEDIN</small><b>linkedin.com/in/bumjun-lee-8b30562</b><span>↗</span></a><a href="https://github.com/mystar11" target="_blank" rel="noreferrer"><small>GITHUB</small><b>github.com/mystar11</b><span>↗</span></a></div></section>
      <footer className={styles.footer}><b>BUMJUN LEE</b><span>ICT & Telecom Executive Portfolio</span></footer>
    </main>
  );
}
