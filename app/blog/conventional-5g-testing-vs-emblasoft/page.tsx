import type { Metadata } from "next";
import ArticleVisuals from "../ArticleVisuals";

export const metadata: Metadata = {
  title: "기존 5G 테스트 방식이 놓치는 것과 Emblasoft의 해결 방법",
  description: "기존 장비 중심·단편적 5G 시험의 한계를 분석하고, UE 에뮬레이션, 트래픽 모델링, 자동화, Active/Passive Monitoring을 결합한 Emblasoft 문제 해결 방법과 기대효과를 설명합니다.",
  keywords: [
    "5G 네트워크 테스트",
    "UE 에뮬레이션",
    "5G Core 시험",
    "UPF 성능시험",
    "Private 5G 인수시험",
    "Active Monitoring",
    "Passive Monitoring",
    "Emblasoft Evolver",
    "Emblasoft nScan",
  ],
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const limitations = [
  ["장비 단위 시험", "노드별 기능과 인터페이스 응답은 확인하지만, 가입자 서비스의 전체 경로와 벤더 간 상호작용은 놓치기 쉽습니다."],
  ["단순 패킷 부하", "최대 처리량은 측정할 수 있어도 등록·인증·세션 생성·이동·재접속이 만드는 제어 평면 부하를 충분히 재현하지 못합니다."],
  ["소수 실제 단말", "현실성은 높지만 대량 동시 접속, 반복 재현, 장애 조건과 다양한 가입자 행동을 체계적으로 만들기 어렵습니다."],
  ["수작업 인수시험", "시험자별 절차와 판정 기준이 달라지고, 업그레이드 이후 동일 조건의 회귀시험을 반복하기 어렵습니다."],
  ["Passive Monitoring 단독", "실제 장애의 증거는 확보하지만, 사용자가 문제를 경험하기 전에 의도한 서비스 경로를 선제적으로 검증하기 어렵습니다."],
  ["Lab와 운영망의 분리", "연구실에서 사용한 시나리오와 KPI가 현장 인수 및 운영 단계로 이어지지 않아 시험 자산이 일회성으로 끝납니다."],
];

const comparison = [
  ["시험 관점", "장비·인터페이스 중심", "가입자·서비스·E2E 품질 중심"],
  ["가입자 모델", "소수 단말 또는 단순 세션", "실제 UE 상태 전이와 서비스 행동을 대규모로 모델링"],
  ["트래픽", "단일 유형·정상 상태 위주", "음성·영상·데이터·IoT·버스트·장애 조건의 혼합"],
  ["시험 범위", "Core, RAN, 전송, 서비스별 분리", "UE/gNodeB부터 5G Core, IMS, Edge·Cloud까지 연계"],
  ["자동화", "수동 실행과 개별 리포트", "시나리오 자동 실행, 반복 판정, REST API 기반 CI/CD/CT 연계"],
  ["운영 검증", "장애 발생 후 분석", "Active Monitoring으로 선제 검증하고 nScan으로 실제 세션을 증거 기반 분석"],
  ["재사용", "프로젝트 종료 후 시험 자산 소멸", "Lab → FAT/SAT → 인수시험 → 회귀시험 → 운영 모니터링으로 재사용"],
];

const problemSolutions = [
  {
    problem: "시험은 통과했지만 상용망에서 장애가 발생",
    cause: "Core, RAN, 전송, IMS와 애플리케이션을 서로 다른 조건과 도구로 분리 시험해 전체 서비스 경로의 상호작용을 확인하지 못합니다.",
    solution: "Evolver로 UE와 gNodeB의 동작, 5G Core 인터페이스와 실제 서비스 트래픽을 하나의 E2E 시나리오로 구성합니다. 필요한 구간은 에뮬레이션하고 실제 장비와 혼합해 단계적으로 검증합니다.",
    output: "어느 서비스·가입자 그룹·NF·인터페이스에서 품질이 저하되는지 동일한 타임라인으로 확인할 수 있습니다.",
  },
  {
    problem: "최대 처리량은 충족하지만 가입자 체감 품질이 불안정",
    cause: "단일 대용량 흐름 중심의 부하시험은 세션 수, UE 상태 변화, QoS Flow, 작은 패킷, 버스트와 정책 변경이 결합된 실제 부하를 반영하지 못합니다.",
    solution: "등록·인증·PDU Session·이동·재접속 등 Stateful UE 행동과 음성·영상·데이터·IoT 트래픽을 혼합하고, 부하 증가 중 정책 변경과 장애를 함께 주입합니다.",
    output: "UPF 처리량뿐 아니라 접속 성공률, 세션 생성률, p95/p99 지연, 손실, 서비스별 QoE와 용량 한계를 함께 판정합니다.",
  },
  {
    problem: "특정 장애가 간헐적으로 발생해 재현이 어려움",
    cause: "실제 단말과 수작업 절차만으로는 동일한 가입자 수, 타이밍, 오류 응답과 장애 전환 조건을 반복하기 어렵습니다.",
    solution: "문제가 발생한 가입자 행동과 트래픽 패턴을 Evolver 시나리오로 저장해 동일 조건으로 반복 실행하고, 경계값을 단계적으로 변경합니다.",
    output: "간헐 장애를 재현 가능한 결함으로 전환하고 수정 전후 결과를 동일 기준으로 비교할 수 있습니다.",
  },
  {
    problem: "멀티벤더 경계에서 책임 구간과 원인을 특정하기 어려움",
    cause: "벤더별 시험 도구와 KPI 정의가 달라 동일한 조건의 비교가 어렵고, 각 장비 로그만으로 전체 세션 흐름을 연결하기 어렵습니다.",
    solution: "동일한 UE·서비스 시나리오와 공통 KPI를 Samsung, Ericsson, Nokia 및 다양한 Core 조합에 적용하고, nScan으로 실제 제어·사용자 평면 세션을 분석합니다.",
    output: "벤더별 결과를 공통 기준으로 비교하고 실패 시점, Cause Code, 영향 세션과 인터페이스를 근거로 책임 구간을 좁힐 수 있습니다.",
  },
  {
    problem: "업그레이드와 구성 변경 때마다 회귀시험이 지연",
    cause: "시험 절차와 판정이 담당자의 경험과 수작업에 의존해 전체 항목을 반복하기 어렵고 결과 형식도 일관되지 않습니다.",
    solution: "Sanity, Functional, Performance, Failover, Soak 시나리오를 자동화하고 REST API를 통해 CI/CD/CT 및 오케스트레이션 과정과 연계합니다.",
    output: "변경 직후 자동 검증과 기준선 비교가 가능해지고, 회귀 결함을 상용 반영 전에 식별할 수 있습니다.",
  },
  {
    problem: "사용자 신고 이후에야 서비스 이상을 인지",
    cause: "Passive Monitoring만으로는 실제 트래픽이 없거나 암호화·표본 제한이 있는 서비스 경로를 지속적으로 검증하기 어렵습니다.",
    solution: "Evolver Active Agent가 위치·서비스·슬라이스별로 의도한 트랜잭션을 주기적으로 실행하고, nScan이 실제 가입자 트래픽을 실시간 분석합니다.",
    output: "서비스 이상을 선제적으로 탐지하고, 실제 고객 영향과 장애 원인을 결합해 MTTD와 MTTR을 개선할 수 있습니다.",
  },
];

const expectedBenefits = [
  ["결함 조기 발견", "Lab·Pre-production에서 실제 가입자 행동과 장애 조건을 재현해 상용망 유출 결함을 줄입니다.", "배포 후 발견 결함 수, 시험 단계별 결함 발견 비율"],
  ["시험주기 단축", "반복 시험과 결과 판정을 자동화해 야간·주말에도 동일 시나리오를 실행할 수 있습니다.", "전체 시험 소요시간, 수작업 실행시간, 자동화 시험 비율"],
  ["회귀 커버리지 향상", "변경 때마다 핵심 서비스와 경계·장애 조건을 동일하게 재실행해 누락을 줄입니다.", "릴리스당 실행 시나리오 수, 자동 회귀 커버리지"],
  ["용량계획 정확도 향상", "서비스 믹스, 세션 규모와 UE 상태를 반영해 장비의 실질적인 용량 한계와 병목을 확인합니다.", "세션당 자원 사용량, 처리량·지연 변곡점, Headroom"],
  ["장애 탐지시간 개선", "Active Monitoring으로 사용자 신고 전에 서비스 경로와 KPI 이상을 확인합니다.", "MTTD, SLA 위반 탐지시간, 선제 탐지 비율"],
  ["원인 분석시간 개선", "nScan의 실제 세션 분석과 Active 시험 결과를 결합해 장애 범위와 원인을 빠르게 좁힙니다.", "MTTR, 원인 미확정 장애 비율, 재현 소요시간"],
  ["인수시험의 객관성", "합격 기준, 실행 조건과 원시 결과를 표준화해 구축사·운영사·벤더 간 해석 차이를 줄입니다.", "재시험 건수, 예외 승인 건수, 인수 분쟁 항목"],
  ["시험 자산 재사용", "Lab에서 만든 시나리오를 FAT/SAT, 인수, 회귀와 운영 모니터링까지 이어서 사용합니다.", "재사용 시나리오 비율, 신규 시험 작성시간"],
  ["5G-A·6G 준비", "기존 UE·트래픽·자동화 자산에 신규 인터페이스, 서비스와 KPI를 단계적으로 추가합니다.", "신규 기능 시험 준비기간, 기존 자산 재사용률"],
];

const architecture = [
  ["UE / gNodeB", "등록·인증·이동·Handover", "가입자 상태와 트래픽 생성"],
  ["RAN / TRANSPORT", "무선·전송 품질과 장애", "Latency · Loss · QoS"],
  ["5G CORE / IMS", "AMF·SMF·UPF·PCF·SBA", "Control & User Plane"],
  ["SERVICE / APP", "Voice·Video·Data·IoT", "Edge · Cloud · QoE"],
];

const scenarioSteps = [
  ["01", "기준선 정의", "서비스별 성공률, 지연, 손실, 처리량, 복구시간과 합격 조건을 사전에 정의합니다."],
  ["02", "UE 행동 모델링", "정상 등록, 반복 재접속, 이동, Idle/Connected 전환, 비정상 인증과 대량 동시 접속을 구성합니다."],
  ["03", "트래픽 믹스 구성", "VoNR/VoLTE, 실시간 영상, 웹·대용량 데이터, IoT 주기·버스트 트래픽을 혼합합니다."],
  ["04", "부하와 장애 결합", "세션 증가 중 링크 단절, NF 재시작, UPF 전환, 정책 변경과 Handover를 계획적으로 주입합니다."],
  ["05", "자동 판정과 비교", "시험 결과를 기준선·이전 릴리스와 비교하고 회귀 결함 및 성능 저하를 자동 식별합니다."],
  ["06", "운영 단계 연계", "동일 시나리오를 Active Monitoring으로 전환하고 nScan의 실트래픽 분석과 연계합니다."],
];

const exampleKpis = [
  ["Registration Success Rate", "예: 99.95% 이상", "정상·대량 동시 등록 및 재접속 조건"],
  ["Session Establishment", "예: 99.9% 이상", "PDU Session 생성과 정책 적용 성공률"],
  ["User Plane Latency", "예: p95 20 ms 이하", "시험 구간과 서비스 특성에 따라 별도 정의"],
  ["Packet Loss", "예: 0.1% 이하", "정상 부하와 장애 전환 구간을 분리 측정"],
  ["Handover Success", "예: 99.5% 이상", "서비스 연속성과 순간 손실을 함께 확인"],
  ["Failover Recovery", "예: 5초 이내", "세션 유지 여부와 서비스 복구시간을 동시 측정"],
  ["UPF Throughput", "설계 용량 충족", "단일 대용량 흐름이 아니라 서비스 믹스와 세션 규모 조건"],
  ["Soak Stability", "2~24시간 이상", "메모리·CPU 증가, 세션 누수, 지연 악화를 장시간 관찰"],
];

const customerUseCases = [
  ["이동통신사", "멀티벤더 5G SA/NSA, Core·IMS 업그레이드, 로밍·정책·슬라이싱, 운영망 서비스 보증"],
  ["Private 5G 사업자", "공장·물류·병원·캠퍼스의 구축 전 검증, FAT/SAT, 인수시험, 장애복구와 SLA 확인"],
  ["장비·솔루션 벤더", "AMF·SMF·UPF·PCF·SEPP 등 5G NF 기능·성능·확장성 검증과 DevOps 회귀시험"],
  ["SI·시험기관", "고객별 토폴로지와 합격 기준을 표준화하고 반복 가능한 시험 패키지와 결과 보고서 제공"],
];

export default function ConventionalTestingVsEmblasoftArticle() {
  return <main className="articlePage">
    <header className="nav shell articleNav">
      <a className="brand" href={`${basePath}/`}><span className="brandMark">✣</span>emblasoft <b>KOREA</b></a>
      <nav>
        <a href={`${basePath}/`}>홈</a>
        <a href={`${basePath}/blog/`}>전체 글</a>
        <a href="#limitations">기존 방식의 한계</a>
        <a href="#solution">해결 방법</a>
        <a href="#benefits">기대효과</a>
        <a href="#scenario">시험 예시</a>
      </nav>
      <a className="navCta" href="https://emblasoft.com/about/contact" target="_blank" rel="noreferrer">기술 문의</a>
    </header>

    <article>
      <section className="articleHero">
        <div className="articleShell">
          <p className="articleMeta">TEST MODERNIZATION <span>·</span> 2026.08.06 <span>·</span> 17 MIN READ</p>
          <h1>기존 5G 테스트 방식이<br/>놓치는 것</h1>
          <p className="articleDek">장비 단위 시험과 단순 부하 측정을 넘어, 실제 가입자 행동·서비스 트래픽·장애 조건을 통합해 문제를 해결하는 Emblasoft의 접근 방법과 기대효과</p>
          <div className="author"><b>BumJun Lee (BJ)</b><span>Emblasoft 한국지사장</span></div>
        </div>
      </section>

      <div className="articleShell articleBody">
        <p className="articleLead">5G 시험에서 가장 위험한 결과는 시험이 실패하는 것이 아니라, 시험은 통과했지만 상용 환경에서 문제가 발생하는 것입니다. 개별 장비의 기능 확인, 최대 처리량 측정, 소수 실제 단말 시험만으로는 수많은 가입자의 상태 변화와 멀티벤더 상호작용, 장애 전환 중의 서비스 품질까지 설명하기 어렵습니다. 이제 시험의 기준을 “장비가 응답하는가”에서 “실제 가입자 서비스가 다양한 조건에서도 목표 품질을 유지하는가”로 바꿔야 합니다.</p>

        <ArticleVisuals topic="e2e" />

        <section id="limitations">
          <p className="sectionNo">01 · WHY CONVENTIONAL TESTING FALLS SHORT</p>
          <h2>기존 시험 방식은 왜 상용망의 문제를 놓치는가</h2>
          <p>기존 방식이 잘못되었다기보다, 각 도구와 절차가 확인할 수 있는 범위가 제한적이라는 점이 문제입니다. 프로토콜 적합성 시험은 규격 준수 여부를 확인하는 데 필요하고, 패킷 생성기는 링크와 사용자 평면의 처리 한계를 측정하는 데 유용하며, 실제 단말 시험은 특정 모델의 사용자 경험을 확인하는 데 강점이 있습니다. 그러나 이 결과들을 별도로 관리하면 전체 서비스 관점의 공백이 생깁니다.</p>
          <div className="trafficGrid">
            {limitations.map(([title, body], index) => <div key={title}><span>0{index + 1}</span><b>{title}</b><small style={{display:"block", marginTop:"8px", color:"#667b85", lineHeight:1.7}}>{body}</small></div>)}
          </div>
          <blockquote>5G 장애는 한 장비의 명확한 고장보다, 정상으로 보이는 여러 구성요소 사이의 타이밍·정책·용량·상태 불일치에서 발생하는 경우가 많습니다.</blockquote>
        </section>

        <section>
          <p className="sectionNo">02 · THE HIDDEN GAPS</p>
          <h2>최대 처리량만으로는 서비스 품질을 설명할 수 없습니다</h2>
          <p>UPF가 목표 Gbps를 처리했다고 해서 네트워크 전체가 준비되었다고 판단할 수는 없습니다. 실제 환경에서는 세션 수, 패킷 크기 분포, 상·하향 비율, QoS Flow, 정책 변경, NAT·방화벽 처리, 암호화, 버스트 트래픽과 장애 전환이 동시에 영향을 줍니다. 또한 제어 평면에서는 등록 폭주, 인증 실패, PDU Session 생성, 이동성 이벤트와 NF 재시작이 사용자 평면 성능에 직접적인 영향을 줍니다.</p>
          <p>소수의 실제 단말만 사용하는 경우에도 비슷한 한계가 있습니다. 실제 단말은 현실적인 무선과 애플리케이션 동작을 보여주지만, 수천·수만 가입자의 동시 행동을 정확한 시점에 반복하거나 특정 오류와 경계 조건을 매번 동일하게 재현하기 어렵습니다. 따라서 실제 단말과 대규모 UE 에뮬레이션은 대체 관계가 아니라 상호 보완 관계로 설계해야 합니다.</p>
          <div className="dualPanel">
            <div><small>CONVENTIONAL POINT TEST</small><h3>부분별 정상 여부 확인</h3><p>노드 단위 기능, 단일 인터페이스, 최대 처리량, 소수 단말, 정상 상태 중심의 일회성 결과</p></div>
            <div className="passive"><small>SUBSCRIBER-CENTRIC E2E TEST</small><h3>서비스 전체의 품질 확인</h3><p>가입자 상태, 제어·사용자 평면, 멀티벤더 경계, 부하·장애·복구와 QoE를 하나의 시나리오로 검증</p></div>
          </div>
        </section>

        <section id="solution">
          <p className="sectionNo">03 · EMBLASOFT APPROACH</p>
          <h2>Emblasoft는 시험을 하나의 서비스 수명주기로 연결합니다</h2>
          <p>Emblasoft Evolver는 5G, 4G, IMS와 레거시 환경에서 제어 평면과 사용자 평면의 기능시험, 성능시험, 회귀시험과 Active Monitoring을 자동화하는 소프트웨어 기반 플랫폼입니다. 실제 가입자의 상태 변화와 통화·메시징·데이터 서비스 흐름을 모델링하고, UE를 gNodeB 측에서 에뮬레이션해 5G Core와 서비스 체인을 반복 가능한 조건으로 검증할 수 있습니다.</p>
          <p>운영망에서는 Active Monitoring과 Passive Monitoring의 역할을 분리하면서도 결과를 연결하는 것이 중요합니다. Evolver의 분산 Active Agent는 의도한 가입자 행동과 서비스 트랜잭션을 주기적으로 발생시켜 특정 위치·서비스·슬라이스의 가용성과 KPI를 선제적으로 확인합니다. nScan은 실제 가입자의 제어 평면과 사용자 평면 트래픽을 실시간으로 수집·분석해 개별 실패 세션과 용량 이상, 장애 원인을 증거 기반으로 보여줍니다.</p>
          <div className="lifecycle">
            <div><small>LAB</small><b>Replicate · Debug</b><span>NF와 서비스 기능, 경계·오류 조건 재현</span></div><i>→</i>
            <div><small>PRE-PRODUCTION</small><b>Validate · Accept</b><span>성능·확장성·장애·FAT/SAT·인수시험</span></div><i>→</i>
            <div className="live"><small>LIVE NETWORK</small><b>Monitor · Assure</b><span>Active/Passive Monitoring과 SLA 검증</span></div>
          </div>
        </section>

        <section>
          <p className="sectionNo">04 · PROBLEM SOLVING MAP</p>
          <h2>엠블라 솔루션을 이용한 문제 해결 방법</h2>
          <p>문제 해결은 도구의 기능을 나열하는 것으로 끝나지 않습니다. 장애가 발생하는 조건을 재현하고, 영향을 받는 가입자와 서비스 범위를 측정하며, 수정 이후 동일 조건으로 재검증하는 폐쇄형 검증 과정이 필요합니다. Evolver와 nScan은 이 과정을 시험환경과 운영망에 걸쳐 연결합니다.</p>
          <div style={{display:"grid", gap:"18px", marginTop:"42px"}}>
            {problemSolutions.map((item, index) => <article key={item.problem} style={{border:"1px solid #c9dde4", background:index % 2 === 0 ? "#f7fbfc" : "#fff", padding:"28px"}}>
              <div style={{display:"flex", gap:"16px", alignItems:"flex-start", marginBottom:"20px"}}><span style={{color:"#229abc", fontSize:"11px", letterSpacing:"1px", fontWeight:700}}>CASE 0{index + 1}</span><h3 style={{margin:0, fontSize:"20px"}}>{item.problem}</h3></div>
              <div style={{display:"grid", gridTemplateColumns:"1fr 1.2fr 1fr", gap:"18px"}}>
                <div><small style={{color:"#8a5555", fontWeight:700, letterSpacing:"1px"}}>원인</small><p style={{fontSize:"14px", lineHeight:1.75, marginBottom:0}}>{item.cause}</p></div>
                <div style={{background:"#eaf7fa", padding:"18px"}}><small style={{color:"#168db6", fontWeight:700, letterSpacing:"1px"}}>EMBLASOFT 해결</small><p style={{fontSize:"14px", lineHeight:1.75, marginBottom:0, color:"#244f5f"}}>{item.solution}</p></div>
                <div><small style={{color:"#2e8a64", fontWeight:700, letterSpacing:"1px"}}>검증 결과</small><p style={{fontSize:"14px", lineHeight:1.75, marginBottom:0}}>{item.output}</p></div>
              </div>
            </article>)}
          </div>
        </section>

        <section id="benefits">
          <p className="sectionNo">05 · EXPECTED BENEFITS</p>
          <h2>고객이 기대할 수 있는 효과</h2>
          <p>기대효과는 단순히 “시험이 편해진다”는 수준이 아니라, 품질 위험과 운영비용을 객관적인 지표로 관리할 수 있게 되는 것입니다. 실제 개선 폭은 고객의 기존 자동화 수준, 시험 범위, 네트워크 규모와 운영 프로세스에 따라 달라지므로 도입 전 기준선을 측정하고 PoC에서 목표값을 합의해야 합니다.</p>
          <div style={{overflowX:"auto", margin:"40px 0"}}>
            <div style={{minWidth:"780px", borderTop:"2px solid #0b3547"}}>
              <div style={{display:"grid", gridTemplateColumns:"0.8fr 1.5fr 1.2fr", background:"#082f42", color:"#fff"}}>
                <b style={{padding:"16px"}}>기대효과</b><b style={{padding:"16px"}}>고객 가치</b><b style={{padding:"16px"}}>측정 지표 예시</b>
              </div>
              {expectedBenefits.map(([benefit, value, measure]) => <div key={benefit} style={{display:"grid", gridTemplateColumns:"0.8fr 1.5fr 1.2fr", borderBottom:"1px solid #cadde3"}}>
                <b style={{padding:"17px 16px", background:"#f1f7f9", fontSize:"14px"}}>{benefit}</b>
                <span style={{padding:"17px 16px", color:"#435f6a", fontSize:"14px", lineHeight:1.65}}>{value}</span>
                <span style={{padding:"17px 16px", color:"#14617a", fontSize:"13px", lineHeight:1.65, background:"#f1fafb"}}>{measure}</span>
              </div>)}
            </div>
          </div>
          <div className="dualPanel">
            <div><small>TECHNICAL EFFECT</small><h3>상용 장애 가능성을 시험 단계에서 축소</h3><p>실제 UE 행동, 멀티서비스 부하, 장애와 복구 조건을 결합해 단순 기능 확인으로는 찾기 어려운 경계 결함과 성능 저하를 조기에 발견합니다.</p></div>
            <div className="passive"><small>BUSINESS & OPERATION EFFECT</small><h3>출시 속도와 운영 효율을 동시에 개선</h3><p>자동 회귀시험, 객관적인 인수 기준과 선제적 서비스 감시를 통해 반복 공수, 장애 대응시간, 재시험과 품질 분쟁을 줄이는 기반을 만듭니다.</p></div>
          </div>
        </section>

        <section>
          <p className="sectionNo">06 · BEFORE AND AFTER</p>
          <h2>기존 방식과 Emblasoft 통합 검증 방식 비교</h2>
          <div style={{overflowX:"auto", margin:"40px 0"}}>
            <div style={{minWidth:"720px", borderTop:"2px solid #0b3547"}}>
              <div style={{display:"grid", gridTemplateColumns:"0.8fr 1.25fr 1.55fr", background:"#082f42", color:"#fff"}}><b style={{padding:"16px"}}>비교 항목</b><b style={{padding:"16px"}}>기존 시험 방식</b><b style={{padding:"16px"}}>Emblasoft 통합 검증</b></div>
              {comparison.map(([item, before, after]) => <div key={item} style={{display:"grid", gridTemplateColumns:"0.8fr 1.25fr 1.55fr", borderBottom:"1px solid #cadde3"}}><b style={{padding:"17px 16px", background:"#f1f7f9", fontSize:"14px"}}>{item}</b><span style={{padding:"17px 16px", color:"#667b85", fontSize:"14px", lineHeight:1.65}}>{before}</span><span style={{padding:"17px 16px", color:"#164c5d", fontSize:"14px", lineHeight:1.65, background:"#f1fafb"}}>{after}</span></div>)}
            </div>
          </div>
        </section>

        <section>
          <p className="sectionNo">07 · REPRESENTATIVE ARCHITECTURE</p>
          <h2>대표적인 통합 시험 구성</h2>
          <p>시험 대상은 특정 Core 노드에 국한되지 않습니다. UE의 등록과 서비스 요청에서 시작해 RAN·전송 구간, 5G Core와 IMS, Edge·Cloud 애플리케이션까지 실제 서비스 경로를 구성합니다. Evolver는 필요한 네트워크 기능과 가입자 행동을 에뮬레이션하고, 실제 장비가 준비되지 않은 구간은 시뮬레이션으로 대체해 단계적으로 시험환경을 확장할 수 있습니다.</p>
          <div className="networkFlow">{architecture.map((node, index) => <div className="flowWrap" key={node[0]}><div className="flowNode"><small>{node[0]}</small><b>{node[1]}</b><span>{node[2]}</span></div>{index < architecture.length - 1 && <i>→</i>}</div>)}</div>
          <div className="dualPanel"><div><small>EVOLVER · ACTIVE</small><h3>의도한 조건을 생성</h3><p>UE/gNodeB 에뮬레이션, 서비스 트래픽, 부하·오류·장애 주입, 자동 판정과 회귀시험</p></div><div className="passive"><small>nSCAN · PASSIVE</small><h3>실제 세션을 관찰</h3><p>운영망 제어·사용자 평면 수집, 실패 세션 추적, KPI·용량 이상과 Root Cause 분석</p></div></div>
        </section>

        <section id="scenario">
          <p className="sectionNo">08 · PRACTICAL TEST SCENARIO</p>
          <h2>실제 적용 가능한 시험 시나리오 예시</h2>
          <p>다음은 5G SA 또는 Private 5G 환경에서 적용할 수 있는 예시입니다. 가정은 10,000개의 에뮬레이션 UE, 음성·영상·데이터·IoT 트래픽 혼합, 두 개 이상의 장비 조합, 2시간 이상의 부하 유지와 계획된 장애 주입입니다. 실제 규모와 합격 기준은 고객 토폴로지, 서비스 SLA와 장비 용량에 따라 조정해야 합니다.</p>
          <div className="trafficGrid">{scenarioSteps.map(([no, title, body]) => <div key={no}><span>{no}</span><b>{title}</b><small style={{display:"block", marginTop:"8px", color:"#667b85", lineHeight:1.7}}>{body}</small></div>)}</div>
          <blockquote>핵심은 부하시험, 기능시험, 장애시험을 별도로 끝내지 않고 동일한 가입자와 서비스 흐름 안에서 결합하는 것입니다.</blockquote>
        </section>

        <section>
          <p className="sectionNo">09 · KPI AND EXPECTED OUTPUT</p>
          <h2>예상 시험 결과와 판정 방식</h2>
          <p>아래 수치는 제품의 보장 성능이나 특정 고객의 실측 결과가 아니라, 시험계획을 수립할 때 사용할 수 있는 예시 합격 기준입니다. 평균값만 보지 않고 p95·p99와 최대값, 정상 상태와 장애 전환 구간, 서비스 유형과 가입자 그룹을 분리해 분석해야 실제 병목을 찾을 수 있습니다.</p>
          <div className="trafficGrid">{exampleKpis.map(([name, target, condition], index) => <div key={name}><span>0{index + 1}</span><b>{name}</b><strong style={{display:"block", color:"#168db6", marginTop:"8px", fontSize:"14px"}}>{target}</strong><small style={{display:"block", marginTop:"6px", color:"#667b85", lineHeight:1.6}}>{condition}</small></div>)}</div>
          <p>최종 결과 보고서는 단순 Pass/Fail 표만 제공해서는 부족합니다. 부하 증가에 따른 KPI 변화, 장애 발생 시점과 복구 곡선, 실패 세션의 원인 코드, NF·인터페이스별 영향 범위, 이전 릴리스 대비 차이와 재현 절차를 함께 제시해야 개발팀·운영팀·구축사가 동일한 근거로 조치할 수 있습니다.</p>
        </section>

        <section>
          <p className="sectionNo">10 · AUTOMATION AND REGRESSION</p>
          <h2>수작업 인수시험을 반복 가능한 자산으로 전환합니다</h2>
          <p>5G Core와 클라우드 네이티브 NF는 소프트웨어 업데이트, 정책 변경, 인프라 패치와 오케스트레이션 변경이 빈번합니다. 한 번의 인수시험을 통과한 사실만으로 이후 품질을 보장할 수 없습니다. 동일한 UE 행동, 트래픽 모델과 장애 조건을 자동 시나리오로 저장하고, 변경 전후 결과를 비교하는 회귀시험 체계가 필요합니다.</p>
          <div className="steps">{[["01","변경 감지"],["02","환경 준비"],["03","자동 실행"],["04","KPI 판정"],["05","리포트·운영 연계"]].map((step, index) => <div key={step[0]}><span>{step[0]}</span><b>{step[1]}</b>{index < 4 && <i>→</i>}</div>)}</div>
          <p>Evolver의 REST API와 자동화 기능을 CI/CD/CT 및 오케스트레이션 체계와 연계하면, 신규 빌드와 구성 변경 이후 Sanity Test부터 기능·성능·장애·회귀시험까지 단계적으로 실행할 수 있습니다. 이를 통해 시험 결과가 담당자의 경험에 머무르지 않고 조직의 표준 검증 자산으로 축적됩니다.</p>
        </section>

        <section>
          <p className="sectionNo">11 · WHERE IT FITS IN KOREA</p>
          <h2>한국 고객 환경에서의 적용 포인트</h2>
          <div className="trafficGrid">{customerUseCases.map(([title, body], index) => <div key={title}><span>0{index + 1}</span><b>{title}</b><small style={{display:"block", marginTop:"8px", color:"#667b85", lineHeight:1.7}}>{body}</small></div>)}</div>
          <p>국내 환경에서는 Samsung, Ericsson, Nokia 등 서로 다른 장비와 릴리스가 혼재하고, 4G·5G NSA·5G SA·IMS 서비스가 동시에 운영되는 경우가 많습니다. 따라서 단일 벤더의 정상 시나리오만 확인하기보다 벤더 경계, 세대 간 연동, 정책과 로밍, 장애 전환 시의 세션 연속성을 공통 시험 기준으로 관리해야 합니다.</p>
        </section>

        <section>
          <p className="sectionNo">12 · CONCLUSION</p>
          <h2>시험 장비가 아니라 검증 체계를 선택해야 합니다</h2>
          <p>네트워크 시험의 목적은 많은 테스트 케이스를 실행하는 것이 아니라, 상용 서비스의 위험을 배포 전에 발견하고 운영 중 품질을 지속적으로 증명하는 것입니다. 이를 위해서는 실제 UE의 상태와 서비스 행동을 재현하는 에뮬레이션, 현실적인 트래픽 모델, Core부터 서비스까지의 E2E 검증, 자동화된 인수·회귀시험, Active와 Passive Monitoring의 결합이 필요합니다.</p>
          <p>Emblasoft는 Evolver와 nScan을 중심으로 Lab, Pre-production, 현장 인수와 운영망 서비스 보증을 하나의 수명주기로 연결합니다. 5G에서 구축한 시나리오와 자동화 자산은 향후 5G-Advanced와 6G 기능, 새로운 서비스와 KPI를 추가하는 기반으로 재사용할 수 있습니다.</p>
        </section>

        <section>
          <p className="sectionNo">OFFICIAL REFERENCES</p>
          <h2>관련 공식 자료</h2>
          <ul>
            <li><a href="https://emblasoft.com/product/fully-automated-5g-4g-ims-testing/" target="_blank" rel="noreferrer">Emblasoft Evolver — 자동화된 기능·성능시험과 Active Monitoring</a></li>
            <li><a href="https://emblasoft.com/product/nscan" target="_blank" rel="noreferrer">Emblasoft nScan — 운영망 실트래픽 기반 Passive Monitoring</a></li>
            <li><a href="https://emblasoft.com/use-cases/5g-nodes" target="_blank" rel="noreferrer">5G Core Nodes — UE/gNodeB 에뮬레이션과 5G Core 검증</a></li>
            <li><a href="https://emblasoft.com/resources/case-studies" target="_blank" rel="noreferrer">Emblasoft Case Studies — 5G Core, UPF, 멀티벤더 검증 사례</a></li>
          </ul>
        </section>

        <section className="supportBox">
          <p className="sectionNo">DESIGN YOUR TEST STRATEGY</p>
          <h2>현재 시험환경의 공백부터 진단해 보십시오</h2>
          <p>Emblasoft Korea는 고객의 네트워크 토폴로지, 기존 시험도구, 서비스 SLA와 운영 절차를 분석해 UE·트래픽 모델 설계, 5G E2E 시험환경, FAT/SAT·인수시험 자동화, Active/Passive Monitoring과 회귀시험 체계를 제안합니다.</p>
          <div className="contactGrid"><div><small>한국 담당</small><b>BumJun Lee (BJ)</b></div><div><small>CONTACT</small><a href="https://emblasoft.com/about/contact" target="_blank" rel="noreferrer">Emblasoft 공식 문의 페이지</a></div></div>
        </section>
      </div>
    </article>

    <footer className="shell articleFooter"><div className="brand"><span className="brandMark">✣</span>emblasoft <b>KOREA</b></div><a href={`${basePath}/blog/`}>전체 글</a><small>© 2026 Emblasoft Korea</small></footer>
  </main>;
}
