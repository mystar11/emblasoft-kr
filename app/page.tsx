const solutions = [
  { n: "01", title: "5G E2E Test & UE Emulation", text: "UE와 gNodeB 동작, Voice·Video·Data·IoT 트래픽을 재현해 RAN부터 서비스까지 검증합니다." },
  { n: "02", title: "Acceptance & Automation", text: "구축 검증, FAT/SAT, 인수시험과 회귀 테스트를 동일한 시나리오와 KPI로 자동화합니다." },
  { n: "03", title: "Active & Passive Monitoring", text: "Evolver의 능동형 시험과 nScan의 실제 가입자 트래픽 분석으로 운영 품질을 통합 관리합니다." },
];

const useCases = ["5G SA / NSA E2E validation", "UE & gNodeB emulation", "Private 5G acceptance", "VoLTE / IMS assurance", "Active / Passive monitoring", "5G-Advanced & 6G evolution"];

const productSuite = [
  { name: "Evolver", role: "기능 · 성능/부하 · 액티브 모니터링", text: "단말·가입자·코어망 노드를 에뮬레이션해 실제 서비스 절차와 트래픽을 재현합니다." },
  { name: "nScan", role: "패시브 모니터링", text: "상용망의 실제 세션을 수집·분석해 장애 구간과 품질 저하 원인을 확인합니다." },
  { name: "PureLoad", role: "애플리케이션 · IP 성능 시험", text: "사용자 관점에서 애플리케이션과 IP 서비스의 부하·응답 성능을 시험합니다." },
  { name: "Odin", role: "IMS 서비스 제공", text: "VoLTE·VoWiFi 제공에 필요한 가상화 기반 IMS 코어 솔루션입니다." },
];

const comparisonRows = [
  { name: "Keysight / Ixia 계열", strength: "RF·RAN·L1~L7·보안·대용량 성능을 폭넓게 시험", evolver: "IMS·VoLTE·RCS·SMS·5G Core의 가입자·호 흐름을 서비스 절차로 재현" },
  { name: "EXFO", strength: "광·전송·필드 계측과 토폴로지·QoS/QoE 분석에 강점", evolver: "기능·회귀·부하 시험과 상용망 액티브 모니터링에 같은 시나리오 활용" },
  { name: "일반 트래픽 발생기", strength: "IP 처리량과 단순 프로토콜 부하 시험에 효율적", evolver: "2G/3G부터 5G까지 제어·사용자 평면과 다중벤더 연동을 조합" },
];

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Home() {
  return (
    <main>
      <header className="nav shell">
        <a className="brand" href="#top" aria-label="Emblasoft Korea home"><span className="brandMark">✣</span>emblasoft <b>KOREA</b></a>
        <nav aria-label="주요 메뉴"><a href="#solutions">솔루션</a><a href="#portfolio">제품군</a><a href="#comparison">비교</a><a href={`${basePath}/blog/`}>기술 블로그</a><a href="#demo">PoC</a></nav>
        <a className="navCta" href="https://emblasoft.com/about/contact" target="_blank" rel="noreferrer">데모 신청</a>
      </header>

      <section className="hero" id="top">
        <div className="shell heroGrid">
          <div className="heroCopy">
            <p className="eyebrow">NETWORK TESTING, MADE ACTIONABLE</p>
            <h1>복잡한 네트워크를<br/><em>확신</em>으로 바꿉니다.</h1>
            <p className="lead">UE·gNodeB 에뮬레이션과 실제 트래픽 모델링으로 RAN–전송–Core–서비스를 검증하고, 구축·인수시험부터 Active/Passive Monitoring까지 하나의 환경으로 연결합니다.</p>
            <div className="actions"><a className="primary" href="https://emblasoft.com/about/contact" target="_blank" rel="noreferrer">데모 체험 요청 <span>↗</span></a><a className="secondary" href={`${basePath}/blog/5g-integrated-test-environment/`}>통합 시험환경 알아보기 →</a></div>
            <div className="proof"><span><b>5G</b> End-to-End</span><span><b>Lab</b> to Field</span><span><b>Future</b> 5G-A · 6G</span></div>
          </div>
          <div className="signal" aria-label="네트워크 성능 시각화">
            <div className="signalTop"><span>LIVE NETWORK VIEW</span><i>● ACTIVE</i></div>
            <div className="chart"><div className="gridLines"/><svg viewBox="0 0 600 260" role="img" aria-label="실시간 네트워크 지표 그래프"><path className="area" d="M0 210 C80 190 95 70 165 105 S255 220 320 140 S410 35 465 95 S540 175 600 55 L600 260 L0 260Z"/><path className="line" d="M0 210 C80 190 95 70 165 105 S255 220 320 140 S410 35 465 95 S540 175 600 55"/></svg><span className="ping p1"/><span className="ping p2"/><span className="ping p3"/></div>
            <div className="metrics"><div><small>THROUGHPUT</small><strong>98.7 <i>Gbps</i></strong><span>▲ 4.2%</span></div><div><small>LATENCY</small><strong>0.84 <i>ms</i></strong><span>Stable</span></div><div><small>SESSIONS</small><strong>1.2 <i>M</i></strong><span>Live</span></div></div>
          </div>
        </div>
      </section>

      <section className="section shell" id="solutions">
        <div className="sectionHead"><div><p className="eyebrow dark">WHAT WE ENABLE</p><h2>한국 네트워크 환경을 위한<br/>검증과 인사이트</h2></div><p>단순한 트래픽 생성을 넘어, 고객 경험에 영향을 주는 문제를 발견하고 검증 가능한 데이터로 전환합니다.</p></div>
        <div className="cards">{solutions.map((s)=><article key={s.n}><span>{s.n}</span><div className="icon">{s.n === "01" ? "⌁" : s.n === "02" ? "◫" : "◎"}</div><h3>{s.title}</h3><p>{s.text}</p><a href="#demo">Learn more →</a></article>)}</div>
      </section>

      <section className="portfolio section" id="portfolio">
        <div className="shell">
          <div className="portfolioHead"><div><p className="eyebrow dark">EMBLASOFT SOLUTION SUITE</p><h2>랩 검증부터 상용망 품질까지<br/>하나의 포트폴리오로 연결합니다.</h2></div><p>Evolver를 중심으로 능동 시험, 패시브 분석, 애플리케이션 성능 시험, IMS 코어를 목적에 맞게 조합합니다.</p></div>
          <div className="portfolioGrid">{productSuite.map((item,i)=><article key={item.name}><span>0{i+1}</span><h3>{item.name}</h3><b>{item.role}</b><p>{item.text}</p></article>)}</div>
          <div className="journey">
            <div className="journeyTitle"><p className="eyebrow">ONE SCENARIO, LAB TO FIELD</p><h3>검증한 시나리오와 KPI를 상용망까지 이어서 사용합니다.</h3></div>
            <div className="journeyFlow">
              <div><span>01</span><small>LAB</small><b>기능 구현 · 장애 재현</b><p>신규 기능과 프로토콜 절차를 단일 노드 또는 구간별로 검증합니다.</p></div><i>→</i>
              <div><span>02</span><small>PRE-PRODUCTION</small><b>업그레이드 · 부하 확인</b><p>회귀 시험과 피크 트래픽 시험으로 상용 적용 전 위험을 확인합니다.</p></div><i>→</i>
              <div><span>03</span><small>PRODUCTION</small><b>주요 서비스 상시 점검</b><p>합성 트랜잭션을 주기적으로 실행해 서비스 품질 변화를 확인합니다.</p></div>
            </div>
            <p className="journeyNote">동일 시나리오 재사용 · KPI 기준 통일 · REST API 연동 · 수정 후 재검증</p>
          </div>
        </div>
      </section>

      <section className="homeComparison" id="comparison">
        <div className="shell">
          <div className="comparisonHead"><div><p className="eyebrow dark">WHERE EVOLVER FITS</p><h2>기존 계측 장비를 대체하기보다,<br/>서비스 검증의 빈틈을 채웁니다.</h2></div><p>각 도구의 강점을 유지하면서 Evolver가 서비스 절차·회귀·운영 품질 검증을 담당하는 방식입니다.</p></div>
          <div className="homeCompare">
            <div className="compareRow compareHeader"><b>기존 테스트 솔루션</b><span>기존 도구의 강점</span><strong>Emblasoft Evolver가 보완하는 영역</strong></div>
            {comparisonRows.map((row)=><div className="compareRow" key={row.name}><b>{row.name}</b><span>{row.strength}</span><strong>{row.evolver}</strong></div>)}
          </div>
          <p className="roleNote">역할 분담 <b>RF·전송 계측은 기존 도구</b><i>+</i><b>서비스 절차·회귀·운영 품질 검증은 Evolver</b></p>
          <div className="caseProof">
            <div><strong>수천만 대</strong><span>유럽 통신사 CPE 환경<br/>업데이트·보안 패치·신규 장비 반복 검증</span></div>
            <div><strong>약 300개</strong><span>유럽 Tier 1 MNO<br/>RCS 다중 프로토콜 자동 시험 시나리오</span></div>
            <div><strong>80 Gb/s</strong><span>Tier 1 고객 대상<br/>상태 기반 모바일 트래픽 성능 시험</span></div>
          </div>
          <small className="caseSource">※ 수치와 표현은 첨부된 Emblasoft 공식 공개 사례 자료 기준입니다.</small>
        </div>
      </section>

      <section className="blogFeature"><div className="shell blogFeatureGrid"><div><p className="eyebrow dark">LATEST TECH ARTICLE</p><h2>CPE 테스트, 아직도<br/>수작업으로 하나요?</h2><p>등록·재등록부터 SIP 오류, 유지보수 모드, 긴급통화까지 CPE 상태 변화를 자동화하고 CI/CD/CT로 연결하는 방법을 정리했습니다.</p></div><a className="articleLink" href={`${basePath}/blog/cpe-automation-sip-ims/`}><span>TECH-BLOG · 2026.08.06</span><b>기술 글 읽기</b><i>↗</i></a></div></section>

      <section className="lab" id="demo"><div className="shell labGrid"><div><p className="eyebrow">TRY BEFORE YOU DECIDE</p><h2>데모에서 PoC까지,<br/>필요한 만큼 시작하세요.</h2><p>기존 계측 환경은 유지하면서 서비스 절차·회귀·액티브 모니터링 영역부터 검증합니다.</p><a className="primary light" href="https://emblasoft.com/about/contact" target="_blank" rel="noreferrer">Korea Lab PoC 문의 ↗</a></div><ol><li><b>보완 영역 선정</b><span>IMS/VoLTE 회귀, 다중벤더 연동, 상용망 액티브 모니터링 중 우선순위를 정합니다.</span></li><li><b>비교 기준 합의</b><span>시험 준비 시간, 시나리오 재사용, 핵심 KPI, 자동화·운영 연계를 함께 봅니다.</span></li><li><b>기존 도구와 역할 분담</b><span>RF·전송 계측은 기존 장비, 서비스 절차 검증은 Evolver로 역할을 나눕니다.</span></li></ol></div></section>

      <section className="section shell cases"><div><p className="eyebrow dark">FOCUS USE CASES</p><h2>우선 검토 분야</h2></div><div className="caseGrid">{useCases.map((x,i)=><div key={x}><span>0{i+1}</span>{x}</div>)}</div></section>

      <section className="community" id="community"><div className="shell communityInner"><div><p className="eyebrow dark">EMBLASOFT KOREA TEST LAB</p><h2>테스트 경험을 나누는<br/>기술 커뮤니티</h2></div><p>월간 기술 세션, 실전 테스트 시나리오, 한국 고객을 위한 자료를 통해 네트워크 엔지니어와 파트너가 함께 배우고 검증하는 공간을 준비합니다.</p><a className="darkButton" href="https://emblasoft.com/about/contact" target="_blank" rel="noreferrer">공식 문의 페이지 →</a></div></section>

      <footer className="shell"><div className="brand"><span className="brandMark">✣</span>emblasoft <b>KOREA</b></div><p>BumJun Lee (BJ) · Emblasoft Korea</p><a href="https://emblasoft.com/about/contact" target="_blank" rel="noreferrer">Emblasoft 공식 문의</a><small>© 2026 Emblasoft Korea. Network testing and service assurance.</small></footer>
    </main>
  );
}
