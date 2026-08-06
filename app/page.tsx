const solutions = [
  { n: "01", title: "5G E2E Test & UE Emulation", text: "UE와 gNodeB 동작, Voice·Video·Data·IoT 트래픽을 재현해 RAN부터 서비스까지 검증합니다." },
  { n: "02", title: "Acceptance & Automation", text: "구축 검증, FAT/SAT, 인수시험과 회귀 테스트를 동일한 시나리오와 KPI로 자동화합니다." },
  { n: "03", title: "Active & Passive Monitoring", text: "Evolver의 능동형 시험과 nScan의 실제 가입자 트래픽 분석으로 운영 품질을 통합 관리합니다." },
];

const useCases = ["5G SA / NSA E2E validation", "UE & gNodeB emulation", "Private 5G acceptance", "VoLTE / IMS assurance", "Active / Passive monitoring", "5G-Advanced & 6G evolution"];

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Home() {
  return (
    <main>
      <header className="nav shell">
        <a className="brand" href="#top" aria-label="Emblasoft Korea home"><span className="brandMark">✣</span>emblasoft <b>KOREA</b></a>
        <nav aria-label="주요 메뉴"><a href="#solutions">솔루션</a><a href={`${basePath}/blog/`}>기술 블로그</a><a href="#demo">데모</a><a href="#community">커뮤니티</a></nav>
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

      <section className="blogFeature"><div className="shell blogFeatureGrid"><div><p className="eyebrow dark">LATEST TECH ARTICLE</p><h2>CPE 테스트, 아직도<br/>수작업으로 하나요?</h2><p>등록·재등록부터 SIP 오류, 유지보수 모드, 긴급통화까지 CPE 상태 변화를 자동화하고 CI/CD/CT로 연결하는 방법을 정리했습니다.</p></div><a className="articleLink" href={`${basePath}/blog/cpe-automation-sip-ims/`}><span>TECH-BLOG · 2026.08.06</span><b>기술 글 읽기</b><i>↗</i></a></div></section>

      <section className="lab" id="demo"><div className="shell labGrid"><div><p className="eyebrow">TRY BEFORE YOU DECIDE</p><h2>데모에서 PoC까지,<br/>필요한 만큼 시작하세요.</h2><p>초기 관심 단계부터 실제 고객 환경의 기술 검증까지 이어지는 단계별 체험 모델입니다.</p><a className="primary light" href="https://emblasoft.com/about/contact" target="_blank" rel="noreferrer">Korea Lab 데모 문의 ↗</a></div><ol><li><b>Instant Demo</b><span>핵심 기능과 활용 시나리오를 빠르게 확인</span></li><li><b>Korea Lab Edition</b><span>가이드와 샘플 트래픽으로 직접 테스트</span></li><li><b>Assisted PoC</b><span>고객 환경에 맞춘 기술 검증과 결과 분석</span></li></ol></div></section>

      <section className="section shell cases"><div><p className="eyebrow dark">FOCUS USE CASES</p><h2>우선 검토 분야</h2></div><div className="caseGrid">{useCases.map((x,i)=><div key={x}><span>0{i+1}</span>{x}</div>)}</div></section>

      <section className="community" id="community"><div className="shell communityInner"><div><p className="eyebrow dark">EMBLASOFT KOREA TEST LAB</p><h2>테스트 경험을 나누는<br/>기술 커뮤니티</h2></div><p>월간 기술 세션, 실전 테스트 시나리오, 한국 고객을 위한 자료를 통해 네트워크 엔지니어와 파트너가 함께 배우고 검증하는 공간을 준비합니다.</p><a className="darkButton" href="https://emblasoft.com/about/contact" target="_blank" rel="noreferrer">공식 문의 페이지 →</a></div></section>

      <footer className="shell"><div className="brand"><span className="brandMark">✣</span>emblasoft <b>KOREA</b></div><p>BumJun Lee (BJ) · Emblasoft Korea</p><a href="https://emblasoft.com/about/contact" target="_blank" rel="noreferrer">Emblasoft 공식 문의</a><small>© 2026 Emblasoft Korea. Network testing and service assurance.</small></footer>
    </main>
  );
}
