import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "5G UPF, 최대 처리량만 보면 안 되는 이유 — Kaloom 사례로 보는 실서비스 기반 검증",
  description: "Emblasoft-Kaloom 5G UPF 검증 사례를 바탕으로 N4/PFCP, N9, QoS, Usage Reporting, 장애·확장성 시험을 국내 통신사와 Private 5G 환경에 적용하는 방법을 설명합니다.",
  keywords: ["5G UPF","Kaloom","Emblasoft Evolver","PFCP","N4","N9","UPF Performance","Private 5G","MEC","CI/CD"],
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const sourceRequirements = [
  ["Large-scale IoT", "스마트 미터와 같은 대규모 IoT 단말 트래픽"],
  ["High-volume Data", "데이터 사용량이 큰 사용자 애플리케이션"],
  ["Autonomous Vehicle", "자율주행 관련 사용자 시나리오"],
  ["MEC Connectivity", "MEC 애플리케이션 연결성"],
  ["Low Latency", "저지연 서비스 트래픽"],
];

const sourceTests = [
  ["N4 Session", "IPv4/IPv6 Endpoint를 이용한 Session Establishment·Modification·Deletion 기능 검증"],
  ["PFCP Scale", "서로 다른 트래픽 부하에서 N4 기준 최대 50k PFCP messages/sec까지 성능·확장성·안정성 검증 — 2022년 Kaloom 사례에 보고된 시험 범위"],
  ["Robustness", "지속적인 트래픽 부하 상태에서 Negative Node Incident를 발생시켜 견고성 검증"],
  ["N9 Forwarding", "Intermediate UPF와 Session Anchor UPF 사이의 N9 Packet Routing·Forwarding 검증"],
  ["SDF Filtering", "Service Data Flow Filtering 기반 Application Detection 검증"],
  ["Handover", "Handover 시나리오에서 N4u Buffering과 End Marker 처리 검증"],
  ["Usage Reporting", "URR Trigger 설정 및 Report Statistics 수신을 통한 사용량 보고 검증"],
  ["QoS", "Quality of Service Enforcement 동작 검증"],
];

const domesticUseCases = [
  ["국내 이동통신사", "5G SA Core·Edge UPF·분산 UPF 환경에서 SMF-UPF 연동, N4 부하, N9 서비스 체인, QoS와 장애 전환을 실제 Busy Hour 트래픽 모델로 검증"],
  ["Private 5G", "공장·물류·병원·캠퍼스에서 영상, AGV/로봇, IoT, Edge Application 트래픽을 혼합해 Local UPF와 MEC 경로의 지연·손실·연속성 확인"],
  ["국내 UPF 벤더", "개발 단계에서 다른 5G Core 구성요소를 모두 보유하지 않아도 UPF를 Node Isolation 방식으로 반복 검증하고 CI/CD Release Gate로 활용"],
  ["SI·시험기관", "벤더별 자체 도구가 아닌 공통 시나리오와 KPI를 사용해 FAT/SAT·인수시험 결과를 객관적으로 비교"],
];

const pocSteps = [
  ["01", "기능 기준선", "N4 Session 생성·변경·삭제, IPv4/IPv6, QoS, SDF, Usage Reporting을 정상 조건에서 검증"],
  ["02", "실서비스 트래픽", "영상·대용량 데이터·IoT·저지연·MEC 트래픽을 혼합하고 세션 수와 트래픽 부하를 단계적으로 증가"],
  ["03", "Control/User Plane 동시 부하", "User Plane 처리량만 올리는 것이 아니라 PFCP 세션 처리와 실제 데이터 트래픽을 동시에 발생"],
  ["04", "장애·복구", "지속 부하 중 UPF·Link·Node 장애, Failover 또는 경로 변경을 주입하고 신규·기존 세션의 영향을 측정"],
  ["05", "N9·Edge 경로", "Intermediate UPF와 Session Anchor UPF, Edge/MEC 구성에서 N9 Forwarding과 지연 변화를 검증"],
  ["06", "자동 회귀", "합격된 시나리오를 CI/CD에 등록해 신규 Build와 설정 변경 때 동일 조건으로 반복"],
];

const kpis = [
  ["PFCP 처리", "Session Establishment/Modification/Deletion 성공률, 초당 PFCP 처리량, 응답 지연"],
  ["User Plane", "Gbps·pps, Packet Loss, p95/p99 Latency, 서비스별 처리량"],
  ["Session Scale", "동시 PDU Session 수, 초당 세션 생성·삭제율, 장시간 Session Stability"],
  ["QoS", "5QI/QFI 정책 적용, 우선순위·Rate Enforcement, 혼잡 시 서비스별 영향"],
  ["N9", "I-UPF ↔ PSA-UPF Packet Forwarding, 경로 변경 시 손실·지연·세션 연속성"],
  ["Usage Reporting", "URR Trigger와 Report Statistics의 정확성·누락 여부"],
  ["Resilience", "장애 중 세션 유지율, 신규 세션 성공률, Failover/Recovery Time"],
  ["Automation", "자동 실행률, 반복 시험시간, Release별 Regression 결과 비교 가능성"],
];

export default function KaloomUpfArticle(){
  return <main className="articlePage">
    <header className="nav shell articleNav">
      <a className="brand" href={`${basePath}/`}><span className="brandMark">✣</span>emblasoft <b>KOREA</b></a>
      <nav><a href={`${basePath}/`}>홈</a><a href={`${basePath}/blog/`}>전체 글</a><a href="#case">Kaloom 사례</a><a href="#korea">국내 적용</a><a href="#poc">PoC 설계</a></nav>
      <a className="navCta" href="https://emblasoft.com/about/contact" target="_blank" rel="noreferrer">기술 문의</a>
    </header>

    <article>
      <section className="articleHero"><div className="articleShell">
        <p className="articleMeta">5G CORE · CASE STUDY <span>·</span> 2026.08.11 <span>·</span> 13 MIN READ</p>
        <h1>5G UPF, 최대 처리량만<br/>보면 안 되는 이유</h1>
        <p className="articleDek">Kaloom 사례로 보는 N4/PFCP·N9·QoS·Usage Reporting·장애 조건을 결합한 실서비스 기반 UPF 검증과 국내 적용 방법</p>
        <div className="author"><b>BumJun Lee (BJ)</b><span>Emblasoft Korea</span></div>
      </div></section>

      <div className="articleShell articleBody">
        <p className="articleLead">UPF 시험에서 가장 먼저 보는 숫자는 대개 Gbps와 pps입니다. 그러나 상용 5G UPF는 단순한 IP Forwarder가 아닙니다. SMF가 N4/PFCP로 세션을 생성·수정·삭제하는 동안 실제 사용자 트래픽을 전달하고, QoS, Application Detection, Usage Reporting, Handover와 분산 UPF 간 N9 Forwarding까지 동시에 처리해야 합니다. Emblasoft와 Kaloom의 2022년 사례는 UPF를 실제 서비스 조건에 가깝게 검증하려면 기능시험과 성능시험, Control Plane과 User Plane, 정상 상태와 장애 상태를 분리해서 보면 안 된다는 점을 잘 보여줍니다.</p>

        <section id="case">
          <p className="sectionNo">01 · SOURCE CASE STUDY</p>
          <h2>Kaloom은 왜 UPF만 따로 떼어 검증했을까</h2>
          <p>5G의 CUPS(Control and User Plane Separation)는 세션 제어를 SMF에 두고 UPF를 필요한 위치에 분산 배치할 수 있게 합니다. 특히 Edge에 UPF를 배치하면 저지연 서비스와 Local Breakout에 유리하지만, Cloud-native UPF는 Microservices, Shared Infrastructure, Kubernetes Orchestration과 결합되므로 기능과 실시간 데이터 처리 문제를 동시에 해결해야 합니다.</p>
          <p>Kaloom은 자체 Cloud-native UPF를 DevOps 기반의 확장형 시험환경에서 지속적으로 검증해야 했습니다. 사례의 핵심은 Emblasoft가 UPF 외의 5G 환경을 에뮬레이션하여 DUT(Device Under Test)인 Kaloom UPF를 Node Isolation 방식으로 시험했다는 것입니다. 즉 실제 AMF·SMF·RAN·UE·데이터 서비스 전체를 별도로 준비하지 않아도 UPF가 기대한 기능과 성능을 내는지 반복 검증할 수 있었습니다.</p>
          <div className="dualPanel">
            <div><small>EMBLASOFT SIMULATED NETWORK</small><h3>시험환경을 필요한 만큼 에뮬레이션</h3><p>UE, RAN, AMF, SMF, AUSF, UDM, NRF와 관련 5G Network Interface를 구성해 UPF 주변의 실제 망 동작을 재현합니다.</p></div>
            <div className="passive"><small>DEVICE UNDER TEST</small><h3>Kaloom Cloud-native UPF</h3><p>실제 UPF를 N4·N3·N6·N9 경로에 배치하고 기능·성능·확장성·안정성을 독립적으로 검증합니다.</p></div>
          </div>
        </section>

        <section>
          <p className="sectionNo">02 · TRAFFIC MODEL</p>
          <h2>“현실적인 트래픽”이 필요한 이유</h2>
          <p>원문에서 Kaloom이 요구한 트래픽은 단일 Throughput Benchmark가 아니었습니다. 서로 다른 서비스가 UPF에 주는 부하 특성이 다르기 때문에 IoT, 대용량 사용자 애플리케이션, 자율주행 사례, MEC 연결, 저지연 트래픽을 각각 모델링했습니다.</p>
          <div className="trafficGrid">
            {sourceRequirements.map(([title,body],index)=><div key={title}><span>0{index+1}</span><b>{title}</b><small style={{display:"block",marginTop:"8px",color:"#667b85",lineHeight:1.7}}>{body}</small></div>)}
          </div>
          <p>국내 환경에서도 같은 원칙이 적용됩니다. 대용량 영상 트래픽이 높은 Gbps를 만들더라도 작은 패킷 중심의 IoT·제어 트래픽이나 많은 동시 세션이 UPF CPU와 Session Table에 주는 부담은 전혀 다릅니다. 따라서 실제 Busy Hour 용량을 판단하려면 평균 패킷 크기 하나나 최대 Gbps 하나로 시험 조건을 단순화해서는 안 됩니다.</p>
        </section>

        <section>
          <p className="sectionNo">03 · WHAT WAS ACTUALLY TESTED</p>
          <h2>Kaloom 사례에서 실제로 검증한 항목</h2>
          <p>아래 항목은 2022년 Emblasoft–Kaloom Case Study에 명시된 시험 범위입니다. 특히 “최대 50k PFCP messages/sec”는 이 사례에서 보고된 N4 시험 범위이며, 현재 모든 제품·구성에 대한 일반적인 성능 보장값을 의미하지는 않습니다.</p>
          <div className="trafficGrid">
            {sourceTests.map(([title,body],index)=><div key={title}><span>{String(index+1).padStart(2,"0")}</span><b>{title}</b><small style={{display:"block",marginTop:"8px",color:"#667b85",lineHeight:1.7}}>{body}</small></div>)}
          </div>
          <blockquote>UPF 시험의 핵심은 “얼마나 빠른가”가 아니라, 실제 운영 기능과 세션 제어가 동작하는 상태에서 얼마나 안정적으로 목표 성능을 유지하는가입니다.</blockquote>
        </section>

        <section>
          <p className="sectionNo">04 · TEST ARCHITECTURE</p>
          <h2>N4만 보는 것이 아니라 N3·N6·N9까지 함께 봅니다</h2>
          <p>원문 2페이지의 구성도는 시험환경을 Endpoints, RAN, Core Network, Data Network로 나누고, Emblasoft가 UE와 RAN, AMF·SMF 등 Core 기능을 에뮬레이션하며 Kaloom UPF를 실제 시험대상으로 배치한 구조를 보여줍니다. 첫 번째 UPF를 Intermediate UPF로, 두 번째 UPF를 Session Anchor UPF로 구성하면 N9 경로도 함께 검증할 수 있습니다.</p>
          <div className="networkFlow">
            <div className="flowWrap"><div className="flowNode"><small>EMULATED</small><b>UE / RAN</b><span>N1 · N2 · N3</span></div><i>→</i></div>
            <div className="flowWrap"><div className="flowNode"><small>EMULATED</small><b>AMF / SMF</b><span>N4 · SBA</span></div><i>→</i></div>
            <div className="flowWrap"><div className="flowNode"><small>DUT</small><b>I-UPF / PSA-UPF</b><span>N3 · N4 · N9 · N6</span></div><i>→</i></div>
            <div className="flowWrap"><div className="flowNode"><small>SERVICE</small><b>Data / MEC</b><span>Application Traffic</span></div></div>
          </div>
          <p>이 구조의 장점은 UPF 개발팀이 전체 상용 5G Core를 구축할 때까지 기다리지 않고도 Session Control과 User Traffic을 결합한 시험을 시작할 수 있다는 점입니다. 반대로 통신사 입장에서는 특정 벤더 UPF를 공통 시나리오에 넣어 기능과 용량을 독립적으로 평가하는 데 활용할 수 있습니다.</p>
        </section>

        <section id="korea">
          <p className="sectionNo">05 · KOREAN MARKET APPLICATION</p>
          <h2>국내에서는 어떻게 적용할 수 있을까</h2>
          <p>이하 내용은 Kaloom 사례에 직접 적힌 국내 구축 사례가 아니라, 해당 시험방법을 한국 통신망과 Private 5G 환경에 적용할 때의 제안입니다. 국내는 상용 이동통신망, 기업용 Private 5G, Edge/MEC, 다양한 Core 벤더가 공존하므로 “특정 장비를 최대 부하로 밀어보는 시험”보다 실제 서비스 믹스와 멀티벤더 경계조건을 반영한 검증이 더 중요합니다.</p>
          <div className="trafficGrid">
            {domesticUseCases.map(([title,body],index)=><div key={title}><span>0{index+1}</span><b>{title}</b><small style={{display:"block",marginTop:"8px",color:"#667b85",lineHeight:1.7}}>{body}</small></div>)}
          </div>
        </section>

        <section>
          <p className="sectionNo">06 · OPERATOR SCENARIO</p>
          <h2>국내 이동통신사: Edge UPF와 분산 Core 검증</h2>
          <p>국내 이동통신사에서 우선 적용하기 좋은 영역은 Central UPF와 Edge UPF가 함께 존재하는 분산 구조입니다. 하나의 대용량 Flow만 발생시키는 대신 일반 인터넷, 영상, 저지연 B2B, IoT와 MEC 트래픽을 서로 다른 UE 그룹으로 구성하고, SMF가 세션을 생성·변경하는 동안 User Plane 부하를 단계적으로 증가시킵니다.</p>
          <p>그 과정에서 UPF가 CPU·NIC·Session Capacity의 한계에 접근할 때 PFCP 응답 지연이 먼저 증가하는지, PDU Session 성공률이 떨어지는지, 특정 QoS Flow만 영향을 받는지, 또는 User Plane Packet Loss가 먼저 증가하는지 확인해야 합니다. 장애 또는 Scale-out 이벤트를 함께 발생시키면 정상 상태의 최고성능이 아니라 실제 상용 설계에 필요한 Headroom과 복구 성능을 평가할 수 있습니다.</p>
        </section>

        <section>
          <p className="sectionNo">07 · PRIVATE 5G SCENARIO</p>
          <h2>Private 5G: 최대 Gbps보다 서비스 경로와 지연이 중요합니다</h2>
          <p>Private 5G는 전국망과 비교하면 전체 세션 규모가 작을 수 있지만 UPF가 공장·물류·병원·캠퍼스의 핵심 Edge 경로가 되는 경우가 많습니다. 예를 들어 영상 분석, AGV·로봇 제어, 센서 IoT와 업무 단말이 동일한 Local UPF를 사용하면 각각의 트래픽 특성이 다르고, MEC Application까지의 지연과 패킷 손실이 실제 서비스 품질을 좌우합니다.</p>
          <p>따라서 Private 5G 인수시험에서는 UE 등록과 PDU Session뿐 아니라 Local UPF–MEC 경로, QoS 우선순위, 트래픽 집중 시 저지연 서비스의 영향, UPF 장애와 복구, Usage Reporting까지 하나의 서비스 시나리오로 묶어 검증하는 것이 효과적입니다.</p>
        </section>

        <section id="poc">
          <p className="sectionNo">08 · RECOMMENDED POC</p>
          <h2>국내 고객을 위한 6단계 UPF PoC</h2>
          <p>Kaloom 사례를 국내 환경에 적용할 때는 처음부터 최고 부하를 목표로 잡기보다 기능 기준선을 먼저 만들고, 실제 서비스 믹스와 Control/User Plane 부하를 결합한 뒤, 마지막에 장애와 자동화까지 확장하는 편이 좋습니다.</p>
          <div className="trafficGrid">
            {pocSteps.map(([no,title,body])=><div key={no}><span>{no}</span><b>{title}</b><small style={{display:"block",marginTop:"8px",color:"#667b85",lineHeight:1.7}}>{body}</small></div>)}
          </div>
        </section>

        <section>
          <p className="sectionNo">09 · KPI DESIGN</p>
          <h2>Pass/Fail을 무엇으로 판단할 것인가</h2>
          <p>UPF PoC에서 특정 Gbps 하나를 합격기준으로 두면 실제 운영 위험을 놓칠 수 있습니다. 기능·제어·사용자 평면·장애·자동화 KPI를 함께 정의하고, 각 수치는 고객의 설계용량과 SLA를 기준으로 합의해야 합니다.</p>
          <div style={{overflowX:"auto",margin:"40px 0"}}>
            <div style={{minWidth:"760px",borderTop:"2px solid #0b3547"}}>
              <div style={{display:"grid",gridTemplateColumns:"0.8fr 2fr",background:"#082f42",color:"#fff"}}><b style={{padding:"16px"}}>영역</b><b style={{padding:"16px"}}>주요 KPI</b></div>
              {kpis.map(([area,body])=><div key={area} style={{display:"grid",gridTemplateColumns:"0.8fr 2fr",borderBottom:"1px solid #cadde3"}}><b style={{padding:"17px 16px",background:"#f1f7f9",fontSize:"14px"}}>{area}</b><span style={{padding:"17px 16px",color:"#435f6a",fontSize:"14px",lineHeight:1.65}}>{body}</span></div>)}
            </div>
          </div>
        </section>

        <section>
          <p className="sectionNo">10 · CI/CD AND DEVOPS</p>
          <h2>시험을 Release Process 안으로 넣어야 효과가 커집니다</h2>
          <p>Kaloom 사례는 기능시험과 성능시험을 KPI 기반 자동화 Framework로 실행하고, CI/CD Flow 안에서 자동 Test Case 수가 증가할 때 여러 시험을 서로 충돌 없이 병렬 실행해 매일 또는 필요한 빈도로 수행하는 것을 중요하게 다룹니다.</p>
          <p>국내 UPF 개발·도입 환경에서도 이 부분이 핵심입니다. 신규 Software Build, Kubernetes Image, Network Parameter 또는 Policy가 바뀔 때마다 핵심 N4·N9·QoS·Usage Reporting·Robustness Scenario를 자동 실행하고 이전 Release와 비교하면, 시험은 최종 검수 단계가 아니라 개발과 운영의 지속적인 품질 게이트가 됩니다.</p>
          <div className="steps">
            {[ ["01","Build"],["02","Deploy"],["03","Evolver Test"],["04","KPI Gate"],["05","Promote / Rollback"] ].map((step,index)=><div key={step[0]}><span>{step[0]}</span><b>{step[1]}</b>{index<4&&<i>→</i>}</div>)}
          </div>
        </section>

        <section>
          <p className="sectionNo">11 · EXPECTED BENEFITS</p>
          <h2>국내 고객이 기대할 수 있는 효과</h2>
          <p>Kaloom 사례에서 Emblasoft는 배포 전에 UPF를 반복 검증함으로써 운영 시스템의 Fault를 최소화하고, 명확한 Dimensioning·Scalability 전략을 확보하며, 제품 역량을 영업 과정에서도 입증할 수 있다고 설명합니다. 국내 적용 시에도 핵심 기대효과는 단순한 시험 자동화보다 “실제 서비스 조건에서 검증된 용량과 안정성을 증명하는 것”에 있습니다.</p>
          <div className="dualPanel">
            <div><small>TECHNICAL VALUE</small><h3>실제 운영조건에 가까운 검증</h3><p>N4/PFCP와 User Plane, QoS, N9, Usage Reporting, 장애를 결합해 기능과 성능 사이의 공백을 줄입니다.</p></div>
            <div className="passive"><small>BUSINESS VALUE</small><h3>도입·인수·Release 판단의 근거</h3><p>동일한 KPI와 자동화 Scenario를 사용해 벤더 비교, 용량계획, Release 승인과 고객 Demo의 객관적인 근거를 확보할 수 있습니다.</p></div>
          </div>
        </section>

        <section>
          <p className="sectionNo">SOURCE NOTE</p>
          <h2>자료 출처와 해석 범위</h2>
          <p>본 글의 Kaloom 시험 요구사항, N4/PFCP 최대 50k messages/sec, N9, SDF Filtering, N4u Buffering·End Marker, URR Usage Reporting, QoS와 CI/CD 자동화 관련 내용은 Emblasoft의 2022년 3월 Case Study “Verification of UPF nodes in 5G — How Emblasoft worked with Kaloom to model user scenarios and test cases”를 기반으로 정리했습니다.</p>
          <p>국내 이동통신사, Private 5G, 국내 UPF 벤더와 SI에 대한 적용 시나리오는 해당 사례의 시험방법을 한국 환경에 맞춰 확장한 제안이며 Kaloom 원문에 기재된 국내 구축 실적을 의미하지 않습니다. 또한 사례에 기재된 50k PFCP messages/sec는 당시 Kaloom 검증 사례의 시험 범위이므로 현재 제품의 일반적인 최대성능 보장값으로 해석해서는 안 됩니다.</p>
        </section>

        <section className="supportBox">
          <p className="sectionNo">EMBLASOFT KOREA</p>
          <h2>UPF 성능은 실제 서비스 조건에서 검증해야 합니다</h2>
          <p>Emblasoft Korea는 고객의 UPF 구조, 예상 가입자·세션 수, Busy Hour 트래픽, QoS·MEC 구성과 장애복구 요구사항을 기준으로 기능·성능·확장성·Robustness를 결합한 PoC와 인수시험 시나리오를 설계할 수 있습니다.</p>
          <div className="contactGrid"><div><small>AUTHOR</small><b>BumJun Lee (BJ)</b></div><div><small>OFFICIAL CONTACT</small><a href="https://emblasoft.com/about/contact" target="_blank" rel="noreferrer">Emblasoft 공식 문의 페이지</a></div></div>
        </section>
      </div>
    </article>

    <footer className="shell articleFooter"><div className="brand"><span className="brandMark">✣</span>emblasoft <b>KOREA</b></div><a href={`${basePath}/blog/`}>전체 글</a><small>© 2026 Emblasoft Korea</small></footer>
  </main>
}
