import ArticleVisuals from "../ArticleVisuals";

const scope = [
  ["UE EMULATION", "등록·인증·이동·Handover", "Voice · Video · Data · IoT"],
  ["RAN / TRANSPORT", "gNodeB와 전송 구간", "Latency · Loss · QoS"],
  ["5G CORE", "Control & User Plane", "SBA · Slice · Policy"],
  ["SERVICE / APP", "IMS · Edge · Cloud", "E2E KPI · QoE"],
];

const traffic = ["VoNR / VoLTE 음성", "실시간 영상·스트리밍", "웹·대용량 데이터", "IoT 주기·버스트 트래픽", "Edge 애플리케이션", "Slice별 QoS 모델"];
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function IntegratedTestArticle() {
  return <main className="articlePage">
    <header className="nav shell articleNav"><a className="brand" href={`${basePath}/`}><span className="brandMark">✣</span>emblasoft <b>KOREA</b></a><nav><a href={`${basePath}/`}>홈</a><a href={`${basePath}/blog/`}>전체 글</a><a href="#monitoring">모니터링</a><a href="#future">5G-A·6G</a></nav><a className="navCta" href="https://emblasoft.com/about/contact" target="_blank" rel="noreferrer">기술 문의</a></header>

    <article>
      <section className="articleHero"><div className="articleShell"><p className="articleMeta">TECH-BLOG <span>·</span> 2026.08 <span>·</span> 8 MIN READ</p><h1>5G Core부터 RAN까지<br/>통합 시험하는 방법</h1><p className="articleDek">UE 에뮬레이션·트래픽 모델링·인수시험·Active/Passive Monitoring을 하나의 검증 체계로 연결하고, 5G-Advanced와 6G로 확장하는 방법</p><div className="author"><b>BumJun Lee (BJ)</b><span>Emblasoft 한국지사장</span></div></div></section>

      <div className="articleShell articleBody">
        <p className="articleLead">5G 시험은 특정 Core 노드나 UPF의 성능 확인만으로 끝나지 않습니다. 실제 UE 동작과 서비스 트래픽을 재현하고 RAN, 전송망, Core, IMS와 애플리케이션까지 전체 서비스 체인을 검증해야 합니다. 구축 단계의 시험환경에서 공식 인수시험, 운영 단계의 통합 모니터링까지 연결되어야 시험 자산의 가치가 커집니다.</p>
        <ArticleVisuals topic="e2e" />

        <section id="architecture"><p className="sectionNo">01</p><h2>시험 대상은 5G 전체 서비스 체인</h2><p>실제 가입자 서비스는 UE와 RAN에서 시작해 전송망, 5G Core, IMS, Edge·Cloud 애플리케이션을 연속적으로 통과합니다. 개별 장비나 단일 인터페이스의 규격 적합성만으로는 가입자 QoE와 E2E 품질을 설명하기 어렵습니다.</p>
          <div className="networkFlow">{scope.map((s,i)=><div className="flowWrap" key={s[0]}><div className="flowNode"><small>{s[0]}</small><b>{s[1]}</b><span>{s[2]}</span></div>{i<scope.length-1&&<i>→</i>}</div>)}</div>
          <div className="dualPanel"><div><small>EVOLVER · ACTIVE</small><h3>의도한 조건을 생성</h3><p>UE·gNodeB 에뮬레이션, 기능·성능·확장성·장애·회귀·인수시험</p></div><div className="passive"><small>nSCAN · PASSIVE</small><h3>실제 전체 세션을 관찰</h3><p>실제 가입자 시그널링과 사용자 평면, KPI, 장애·품질 분석</p></div></div>
        </section>

        <section><p className="sectionNo">02</p><h2>UE 에뮬레이션과 트래픽 모델링</h2><p>Emblasoft Evolver는 gNodeB 측에서 UE 활동을 에뮬레이션합니다. RAN이 준비되기 전에도 합성 트래픽으로 네트워크 기능과 서비스 체인을 시험할 수 있으며, 등록·이동·재접속·Handover와 동시 세션 증가를 실제 서비스 패턴과 결합할 수 있습니다.</p><div className="trafficGrid">{traffic.map((x,i)=><div key={x}><span>0{i+1}</span><b>{x}</b></div>)}</div>
          <blockquote>시험 설계는 “인터페이스가 응답하는가”보다 “실제 UE와 서비스가 다양한 부하와 장애 조건에서도 목표 KPI와 QoE를 유지하는가”에서 시작해야 합니다.</blockquote>
        </section>

        <section><p className="sectionNo">03</p><h2>구축 검증과 공식 인수시험을 자동화</h2><p>동일한 시나리오를 Sanity, Functional, Performance, Acceptance, Soak Test로 확장하면 구축 검증부터 FAT/SAT, 공식 인수시험과 업그레이드 회귀 시험까지 일관된 합격 기준을 적용할 수 있습니다.</p><div className="steps">{[["01","변경 감지"],["02","환경 준비"],["03","자동 실행"],["04","판정·리포트"],["05","운영 연계"]].map((x,i)=><div key={x[0]}><span>{x[0]}</span><b>{x[1]}</b>{i<4&&<i>→</i>}</div>)}</div><p>REST API를 통해 CI/CD/CT와 연계하고, 시험 결과를 이전 릴리스와 비교해 성능 저하와 회귀 결함을 조기에 식별할 수 있습니다.</p></section>

        <section id="monitoring"><p className="sectionNo">04</p><h2>Active와 Passive Monitoring을 결합</h2><p>Evolver Active Monitoring은 분산 에이전트가 의도한 UE 행동과 서비스 트래픽을 주기적으로 생성해 서비스·슬라이스·위치별 KPI와 SLA를 선제적으로 확인합니다. nScan은 실제 가입자의 제어·사용자 평면 트래픽을 24×7 수집·분석해 모든 세션과 시그널링을 증거 기반으로 보여줍니다.</p><div className="lifecycle"><div><small>LAB</small><b>Replicate · Debug</b><span>결함 재현과 기능 확인</span></div><i>→</i><div><small>PRE-PRODUCTION</small><b>Validate · Accept</b><span>E2E·부하·인수 검증</span></div><i>→</i><div className="live"><small>LIVE NETWORK</small><b>Monitor · Assure</b><span>실제 KPI와 선제적 품질 관리</span></div></div></section>

        <section id="future"><p className="sectionNo">05</p><h2>5G-Advanced와 6G를 위한 시험 자산</h2><p>5G에서 만든 UE 행동, 트래픽 모델, 시나리오 라이브러리와 자동화 체계는 5G-Advanced와 6G 시험환경의 출발점이 됩니다. 신규 표준 절차·인터페이스·서비스·KPI를 단계적으로 추가하고, 가상화·클라우드 네이티브 구조와 API를 통해 새로운 NF와 시험 도구를 통합할 수 있습니다.</p><div className="futureRoad"><div><b>5G SA / NSA</b><span>현재 E2E 자산</span></div><i>→</i><div><b>5G-ADVANCED</b><span>Rel-18+ 기능 확장</span></div><i>→</i><div><b>6G TEST ENV.</b><span>신규 트래픽·KPI 통합</span></div></div></section>

        <section className="supportBox"><p className="sectionNo">KOREA SUPPORT</p><h2>국내 기술지원</h2><p>Emblasoft Korea는 고객 토폴로지와 요구사항 분석, UE·트래픽 모델 설계, 시험환경 구축, FAT/SAT 및 인수시험 수행, Active/Passive Monitoring 최적화, 결과 해석과 교육을 지원합니다.</p><div className="contactGrid"><div><small>한국 담당</small><b>BumJun Lee (BJ)</b></div><div><small>CONTACT</small><a href="https://emblasoft.com/about/contact" target="_blank" rel="noreferrer">Emblasoft 공식 문의 페이지</a></div></div></section>
      </div>
    </article>
    <footer className="shell articleFooter"><div className="brand"><span className="brandMark">✣</span>emblasoft <b>KOREA</b></div><a href={`${basePath}/blog/`}>전체 글</a><small>© 2026 Emblasoft Korea</small></footer>
  </main>
}
