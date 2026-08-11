import type { Metadata } from "next";
import ArticleVisuals from "../ArticleVisuals";

export const metadata: Metadata = {
  title: "Private 5G는 구축보다 검증이 중요하다",
  description: "국내 이음5G 환경에서 Smart Factory, 발전소, 병원, 철도, 캠퍼스, FWA 등 실제 산업 서비스를 기준으로 Private 5G를 검증하는 방법과 Emblasoft 적용 방안을 설명합니다.",
  keywords: ["이음5G", "Private 5G", "특화망", "Smart Factory", "5G 인수시험", "UE 에뮬레이션", "Emblasoft Evolver", "Active Monitoring", "5G QoS"],
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const verticals = [
  ["Smart Factory", "AGV·AMR, Machine Vision, 설비 데이터", "이동 중 세션 연속성, Uplink 영상 부하, 지연, QoS, 다수 단말 동시 접속"],
  ["발전·Utility", "MC-PTT, 비상통신, 이동형 영상", "주망 장애 전환, 중요 서비스 우선순위, 복구시간, 비상 상태의 서비스 지속성"],
  ["철도·교통", "이동 영상, AI 안전감시", "고속 이동 Handover, Cell Edge 품질, 영상 Uplink 연속성, 서비스 중단시간"],
  ["병원", "IoT·Wearable, AI CCTV, 응급서비스", "서비스 가용성, 단말 인증, 중요 트래픽 우선순위, 장애 시 영향 범위"],
  ["Campus", "Intranet, AR/VR, AI CCTV", "다수 사용자 동시접속, Hotspot 부하, Mobility, 서비스별 QoS"],
  ["공공·FWA", "CCTV, 화재·안전센서, 유선 대체", "장시간 안정성, Uplink 중심 용량, 장애·복구, 원격 사이트 품질"],
];

const testLayers = [
  ["01", "ACCESS", "UE 등록·인증·재접속, Cell 선택, 이동성, Handover"],
  ["02", "RAN", "무선 품질, TDD DL/UL 구성, 셀 용량, 다수 UE 동시 부하"],
  ["03", "5G CORE", "AMF·SMF·UPF, PDU Session, QoS, 정책, 장애·복구"],
  ["04", "TRANSPORT", "RAN-Core/MEC 연결, 지연·손실, 링크 절체와 경로 변경"],
  ["05", "MEC / APP", "영상분석, 로봇제어, IoT, 업무 애플리케이션의 실제 응답"],
  ["06", "OPERATIONS", "Alarm, SLA, Active/Passive Monitoring, 변경 후 회귀시험"],
];

const deploymentModels = [
  ["On-Premises 독립형", "RAN, Core, UPF, MEC를 현장에 배치", "데이터 로컬성·저지연에 유리하지만 현장 전체 장애·이중화와 운영절차를 직접 검증해야 함"],
  ["Control Plane 공유형", "현장 UPF/MEC + 외부 또는 중앙 Control Plane", "백홀 장애·지연이 Registration과 Session 제어에 미치는 영향, Local Breakout 지속성 검증 필요"],
  ["Core 공유형", "현장 RAN 중심, Core/UPF를 중앙 또는 사업자 영역과 공유", "WAN 지연·장애, 데이터 경로, SLA와 서비스 복구를 E2E로 검증해야 함"],
];

const pocSteps = [
  ["01", "업무 서비스 정의", "AGV, CCTV, IoT, AR/VR 등 실제 업무를 트래픽 프로파일과 KPI로 변환"],
  ["02", "UE 행동 모델 정의", "정상 등록, 대량 접속, 이동, 재접속, 오류·비정상 단말을 그룹별 구성"],
  ["03", "Baseline 측정", "정상 상태에서 Registration, PDU Session, Latency, Loss, Throughput, QoS 기준선 확보"],
  ["04", "복합 부하 생성", "Uplink 영상, 제어트래픽, IoT, 일반 데이터와 Busy Hour·Burst를 혼합"],
  ["05", "장애 주입", "UPF/Core/Transport 장애, 경로 전환, Cell/Link 장애, 소프트웨어 변경 조건 검증"],
  ["06", "운영 전환", "인수시험 시나리오를 회귀시험 및 Active Monitoring으로 재사용"],
];

const kpis = [
  ["Access", "Registration/PDU Session Success Rate, Setup Time, Re-attach"],
  ["Mobility", "Handover Success, Service Interruption Time, Cell-edge 품질"],
  ["User Plane", "DL/UL Throughput, p95/p99 Latency, Packet Loss, Jitter"],
  ["QoS", "5QI/QFI 적용, 서비스별 우선순위, 혼잡 시 중요 트래픽 보호"],
  ["Resilience", "Failover Time, Session Continuity, Recovery Time, 재접속 폭주"],
  ["Application", "영상 Frame/Bitrate, Robot/Control 응답, MEC 처리시간, 업무 성공률"],
  ["Operations", "Alarm 발생시간, MTTD, MTTR, 자동 회귀시험 커버리지"],
];

export default function Private5GIndustryValidationArticle(){
  return <main className="articlePage">
    <header className="nav shell articleNav">
      <a className="brand" href={`${basePath}/`}><span className="brandMark">✣</span>emblasoft <b>KOREA</b></a>
      <nav><a href={`${basePath}/`}>홈</a><a href={`${basePath}/blog/`}>전체 글</a><a href="#vertical">산업별 검증</a><a href="#architecture">시험 구조</a><a href="#poc">PoC</a></nav>
      <a className="navCta" href="https://emblasoft.com/about/contact" target="_blank" rel="noreferrer">기술 문의</a>
    </header>

    <article>
      <section className="articleHero"><div className="articleShell">
        <p className="articleMeta">PRIVATE 5G · INDUSTRY 4.0 <span>·</span> 2026.08.11 <span>·</span> 15 MIN READ</p>
        <h1>Private 5G는 구축보다<br/>검증이 중요하다</h1>
        <p className="articleDek">Smart Factory부터 발전소·병원·철도까지 — 국내 이음5G를 실제 서비스 기준으로 검증하는 방법</p>
        <div className="author"><b>BumJun Lee (BJ)</b><span>Emblasoft Korea</span></div>
      </div></section>

      <div className="articleShell articleBody">
        <p className="articleLead">Private 5G의 가치는 기지국이 정상적으로 올라오고 단말이 접속된다는 사실만으로 증명되지 않습니다. 공장에서는 AGV가 멈추지 않아야 하고, 발전소에서는 유선망 장애 중에도 비상통신이 살아 있어야 하며, 병원과 철도에서는 중요한 영상·센서 데이터가 혼잡이나 이동 중에도 필요한 품질을 유지해야 합니다. 따라서 국내 이음5G의 시험 기준은 장비 중심에서 실제 업무 서비스 중심으로 전환되어야 합니다.</p>

        <ArticleVisuals topic="private5g" />

        <section>
          <p className="sectionNo">01 · FROM CONNECTIVITY TO SERVICE ASSURANCE</p>
          <h2>“5G가 연결된다”와 “업무가 정상 동작한다”는 다른 문제입니다</h2>
          <p>Private 5G는 eMBB, 저지연 통신, 대규모 단말 연결, 이동성, MEC와 보안성을 산업 현장에 적용하기 위해 도입됩니다. 그러나 실제 구축에서는 하나의 네트워크 안에 서로 성격이 다른 서비스가 공존합니다. Machine Vision은 높은 Uplink 대역폭을 요구하고, AGV·AMR은 이동성과 안정적인 제어 지연이 중요하며, IoT 센서는 대역폭은 작아도 많은 수의 단말이 동시에 등록하거나 주기적으로 데이터를 전송할 수 있습니다.</p>
          <p>이 때문에 단순 Coverage Test와 Speed Test만으로는 인수 여부를 판단하기 어렵습니다. 동일한 무선 품질에서도 동시 UE 수, TDD DL/UL 비율, Core 부하, MEC 위치, QoS 정책과 장애 상태에 따라 업무 서비스의 결과가 달라질 수 있기 때문입니다.</p>
          <blockquote>Private 5G의 합격 기준은 “장비가 정상인가?”가 아니라 “업무 서비스가 최악의 운영 조건에서도 요구 KPI를 만족하는가?”여야 합니다.</blockquote>
        </section>

        <section id="vertical">
          <p className="sectionNo">02 · VERTICAL-SPECIFIC VALIDATION</p>
          <h2>산업별로 시험해야 할 네트워크가 다릅니다</h2>
          <p>국내 Private 5G 구축 사례를 보면 제조, 에너지, 의료, 교육, 교통, 공공안전 등 다양한 Vertical이 존재합니다. 같은 5G SA망을 사용하더라도 핵심 서비스와 실패의 영향이 다르므로, 시험 시나리오도 Vertical별로 달라야 합니다.</p>
          <div style={{overflowX:"auto",margin:"38px 0"}}><div style={{minWidth:"820px",borderTop:"2px solid #0b3547"}}>
            <div style={{display:"grid",gridTemplateColumns:"0.8fr 1.1fr 1.8fr",background:"#082f42",color:"#fff"}}><b style={{padding:"16px"}}>Vertical</b><b style={{padding:"16px"}}>대표 서비스</b><b style={{padding:"16px"}}>핵심 검증 포인트</b></div>
            {verticals.map(([v,s,t])=><div key={v} style={{display:"grid",gridTemplateColumns:"0.8fr 1.1fr 1.8fr",borderBottom:"1px solid #cadde3"}}><b style={{padding:"16px",background:"#f1f7f9",fontSize:"14px"}}>{v}</b><span style={{padding:"16px",fontSize:"14px",lineHeight:1.65}}>{s}</span><span style={{padding:"16px",fontSize:"14px",lineHeight:1.65,color:"#164c5d",background:"#f5fbfc"}}>{t}</span></div>)}
          </div></div>
        </section>

        <section>
          <p className="sectionNo">03 · UPLINK MATTERS</p>
          <h2>산업망에서는 Downlink보다 Uplink가 더 중요한 경우가 많습니다</h2>
          <p>일반 소비자 모바일 서비스는 Downlink 트래픽 비중이 높은 경우가 많지만, 산업 현장은 반대인 경우가 적지 않습니다. Machine Vision 카메라, AI CCTV, 이동형 로봇 영상, 원격감시와 센서 데이터는 현장에서 Edge/MEC 또는 관제센터 방향으로 지속적으로 데이터를 전송합니다.</p>
          <p>따라서 Private 5G의 용량검증은 단일 Peak Throughput 숫자가 아니라 실제 TDD 구성과 Uplink 트래픽 믹스를 반영해야 합니다. 여러 카메라가 동시에 고화질 스트림을 전송하는 동안 AGV 제어 트래픽과 IoT 데이터가 경쟁했을 때, 중요한 서비스의 지연과 손실이 SLA 안에 유지되는지를 확인해야 합니다.</p>
        </section>

        <section>
          <p className="sectionNo">04 · DEPLOYMENT MODEL CHANGES THE TEST</p>
          <h2>On-Premises와 Core 공유형은 시험 포인트가 다릅니다</h2>
          <p>국내 이음5G는 현장 독립형뿐 아니라 Control Plane 또는 Core 기능을 중앙·외부에서 공유하는 형태로 설계할 수 있습니다. 비용과 운영 모델은 달라질 수 있지만, 시험 측면에서는 각 구조가 서로 다른 장애 영역을 만듭니다.</p>
          <div className="trafficGrid">{deploymentModels.map(([title,arch,risk],i)=><div key={title}><span>0{i+1}</span><b>{title}</b><small style={{display:"block",marginTop:"8px",color:"#3e6471",lineHeight:1.65}}>{arch}</small><small style={{display:"block",marginTop:"9px",color:"#788a91",lineHeight:1.65}}>{risk}</small></div>)}</div>
          <p>특히 Control Plane 공유형이나 Core 공유형에서는 백홀 지연·단절이 발생했을 때 현장 서비스가 어디까지 유지되는지가 중요합니다. Local UPF와 MEC가 있어도 신규 UE 등록이나 Session 제어가 중앙 Control Plane에 의존한다면, 단순 데이터 경로 시험만으로는 실제 장애 영향을 판단할 수 없습니다.</p>
        </section>

        <section id="architecture">
          <p className="sectionNo">05 · E2E VALIDATION ARCHITECTURE</p>
          <h2>시험 범위는 UE에서 애플리케이션까지 이어져야 합니다</h2>
          <p>Private 5G는 CPE·UE, RAN, Transport, 5G Core, MEC와 업무 애플리케이션이 하나의 서비스 체인을 구성합니다. 어느 한 구간만 독립적으로 통과해도 전체 업무가 실패할 수 있으므로 E2E 시험은 각 계층의 KPI를 하나의 타임라인으로 묶어야 합니다.</p>
          <div className="trafficGrid">{testLayers.map(([no,title,body])=><div key={no}><span>{no}</span><b>{title}</b><small style={{display:"block",marginTop:"8px",color:"#667b85",lineHeight:1.7}}>{body}</small></div>)}</div>
        </section>

        <section>
          <p className="sectionNo">06 · HOW EMBLASOFT FITS</p>
          <h2>Emblasoft는 실제 서비스 조건을 반복 가능한 시험으로 만듭니다</h2>
          <p>Private 5G 인수시험의 어려움은 실제 단말을 몇 대 연결하는 것이 아니라, 수십·수백·수천 개의 단말이 서로 다른 상태와 서비스를 동시에 사용할 때의 동작을 반복적으로 재현하는 데 있습니다. Evolver를 활용하면 UE 등록·세션·이동성 등 Stateful 동작과 서비스 트래픽을 시나리오화하고, 동일 조건을 기능시험·성능시험·회귀시험에서 반복 사용할 수 있습니다.</p>
          <div className="dualPanel">
            <div><small>EVOLVER · ACTIVE VALIDATION</small><h3>의도한 조건을 만들어 검증</h3><p>UE 행동, 서비스 트래픽, 부하 증가, 오류·장애 조건을 반복 생성하고 KPI와 Pass/Fail 기준을 자동화합니다.</p></div>
            <div className="passive"><small>nSCAN · PASSIVE ASSURANCE</small><h3>실제 운영 세션을 분석</h3><p>운영 단계에서 실제 제어·사용자 평면 세션을 분석해 실패 범위와 원인을 좁히고 Active 시험 결과와 연결합니다.</p></div>
          </div>
          <p>정확한 UE 규모, 지원 인터페이스와 특정 Private 5G 장비 연동 범위는 고객 토폴로지와 Emblasoft 제품 버전에 따라 확인해야 합니다. PoC에서는 실제 대상 장비와 필요한 프로토콜·API를 먼저 확정하는 것이 바람직합니다.</p>
        </section>

        <section>
          <p className="sectionNo">07 · SERVICE-BASED TEST MODELS</p>
          <h2>실제 산업 서비스를 트래픽 모델로 바꾸는 방법</h2>
          <p><b>AGV·AMR:</b> 일정한 이동 경로를 따라 Cell을 이동하면서 제어 패킷과 Telemetry를 지속 전송하고, 이동 중 영상 스트림이 함께 존재하도록 구성합니다. Handover 성공 여부만 보지 않고 순간적인 제어 지연과 패킷 손실을 함께 측정합니다.</p>
          <p><b>Machine Vision·AI CCTV:</b> 다수의 Uplink 영상 스트림을 발생시키고, 동시에 일반 데이터와 IoT 트래픽을 추가해 혼잡 상태에서 영상 Bitrate·지연·Frame 손실이 어떻게 변하는지 확인합니다.</p>
          <p><b>MC-PTT·비상통신:</b> 일반 트래픽이 포화된 상태에서 중요 통신을 발생시키고 QoS 우선순위가 실제 User Plane에서 보장되는지 확인합니다. 유선 또는 주 경로 장애 이후 Private 5G로 절체되는 서비스라면 전환시간과 통신 재개시간까지 포함해야 합니다.</p>
          <p><b>IoT·센서:</b> 단말당 데이터량이 작더라도 많은 단말이 동시에 재접속하거나 동일 주기에 데이터를 전송하는 상황을 구성해 Registration Storm과 Control Plane 부하를 검증합니다.</p>
        </section>

        <section>
          <p className="sectionNo">08 · FAILURE IS PART OF ACCEPTANCE</p>
          <h2>장애시험을 선택 항목으로 두면 안 됩니다</h2>
          <p>산업 현장에서 중요한 것은 장애가 전혀 발생하지 않는 네트워크가 아니라 장애가 발생해도 서비스가 허용 가능한 시간 안에 복구되는 네트워크입니다. 따라서 FAT/SAT와 최종 인수시험에는 정상 부하 상태에서 장애를 주입하는 시나리오가 포함되어야 합니다.</p>
          <ul><li>UPF 또는 5G Core NF 장애와 재기동</li><li>RAN-Core Transport 링크 손실과 복구</li><li>Primary/Secondary 경로 또는 이중화 전환</li><li>MEC/Application 장애 시 서비스 영향</li><li>대량 UE 재접속과 Session 재생성</li><li>소프트웨어 Upgrade·Policy 변경 이후 Regression</li></ul>
          <p>이때 단순 장비 Alarm 발생 여부보다 기존 세션 유지율, 신규 세션 성공률, 중요한 업무 트래픽의 지연·손실과 정상화 시간을 중심으로 판정해야 합니다.</p>
        </section>

        <section id="poc">
          <p className="sectionNo">09 · RECOMMENDED POC</p>
          <h2>국내 Private 5G 고객을 위한 6단계 검증 PoC</h2>
          <div className="trafficGrid">{pocSteps.map(([no,title,body])=><div key={no}><span>{no}</span><b>{title}</b><small style={{display:"block",marginTop:"8px",color:"#667b85",lineHeight:1.7}}>{body}</small></div>)}</div>
          <p>PoC의 목적은 Evolver의 최대 성능 숫자를 보여주는 것이 아니라 고객의 실제 업무와 네트워크 구성에서 반복 가능한 합격 기준을 만드는 것입니다. 이를 위해 첫 단계에서 현재 서비스의 정상 기준과 장애 허용범위를 고객과 함께 정의해야 합니다.</p>
        </section>

        <section>
          <p className="sectionNo">10 · KPI FRAMEWORK</p>
          <h2>Private 5G 인수시험에서 남겨야 할 KPI</h2>
          <div style={{overflowX:"auto",margin:"36px 0"}}><div style={{minWidth:"700px",borderTop:"2px solid #0b3547"}}>
            <div style={{display:"grid",gridTemplateColumns:"0.7fr 2fr",background:"#082f42",color:"#fff"}}><b style={{padding:"16px"}}>영역</b><b style={{padding:"16px"}}>대표 KPI</b></div>
            {kpis.map(([a,b])=><div key={a} style={{display:"grid",gridTemplateColumns:"0.7fr 2fr",borderBottom:"1px solid #cadde3"}}><b style={{padding:"16px",background:"#f1f7f9",fontSize:"14px"}}>{a}</b><span style={{padding:"16px",fontSize:"14px",lineHeight:1.65}}>{b}</span></div>)}
          </div></div>
          <p>모든 KPI에 동일한 목표를 적용할 필요는 없습니다. 예를 들어 AI CCTV와 일반 사무 트래픽, AGV 제어와 비상통신은 업무 영향도가 다르므로 서비스별 SLO와 우선순위를 별도로 정의해야 합니다.</p>
        </section>

        <section>
          <p className="sectionNo">11 · FROM FAT/SAT TO LIVE NETWORK</p>
          <h2>인수시험 시나리오는 운영망에서도 계속 사용해야 합니다</h2>
          <p>Private 5G는 구축 이후에도 장비 소프트웨어, Core 정책, MEC 애플리케이션과 단말이 지속적으로 변경됩니다. 준공 시점의 시험 결과만 남기면 몇 달 뒤 변경된 환경에서 동일한 품질을 보장할 방법이 없습니다.</p>
          <p>가장 효율적인 방법은 FAT/SAT에서 사용한 핵심 서비스 시나리오를 자동 회귀시험으로 보존하고, 일부는 Production Active Monitoring으로 전환하는 것입니다. 정상 상태의 KPI 기준선을 지속적으로 비교하면 고객 신고 이전에 이상을 발견하고, Passive Monitoring 데이터와 결합해 장애 원인을 빠르게 좁힐 수 있습니다.</p>
        </section>

        <section>
          <p className="sectionNo">12 · CONCLUSION</p>
          <h2>Private 5G 경쟁력은 장비 목록보다 검증 체계에서 결정됩니다</h2>
          <p>국내 이음5G는 Smart Factory, 에너지, 의료, 캠퍼스, 철도와 공공안전 등 실제 업무 시스템으로 확장되고 있습니다. 이 단계에서는 단순히 RAN과 Core를 구축하는 능력보다 해당 네트워크가 업무 SLA를 지속적으로 만족한다는 것을 증명하는 능력이 더 중요해집니다.</p>
          <p>Emblasoft의 적용 포인트는 특정 Private 5G 벤더를 대체하는 것이 아니라, UE부터 RAN·Core·MEC·Application까지의 서비스 결과를 독립적으로 검증하고 그 시험 자산을 인수·회귀·운영 모니터링까지 재사용하는 데 있습니다.</p>
        </section>

        <section>
          <p className="sectionNo">SOURCE NOTE</p>
          <h2>자료 활용에 대한 안내</h2>
          <p>본 글은 국내 Private 5G 산업 동향과 구축 사례를 담은 기술자료를 참고하여 일반적인 시험·검증 관점으로 재구성한 해설입니다. 특정 공급사의 원본 슬라이드, 구성도, 제품 사양표 또는 이미지를 복제하지 않았으며, 실제 적용 시에는 대상 네트워크의 최신 사양과 고객 요구사항을 기준으로 별도 설계가 필요합니다.</p>
        </section>

        <section className="supportBox"><p className="sectionNo">PRIVATE 5G VALIDATION</p><h2>구축이 끝난 뒤가 아니라, 구축 전에 검증 구조를 설계하십시오</h2><p>Emblasoft Korea는 고객의 Private 5G 토폴로지와 실제 업무 서비스를 기준으로 UE·트래픽 모델, FAT/SAT, 장애·복구시험, 자동 회귀시험과 Active/Passive Monitoring을 연결하는 검증 체계를 설계합니다.</p><div className="contactGrid"><div><small>AUTHOR</small><b>BumJun Lee (BJ)</b></div><div><small>OFFICIAL CONTACT</small><a href="https://emblasoft.com/about/contact" target="_blank" rel="noreferrer">Emblasoft 공식 문의 페이지</a></div></div></section>
      </div>
    </article>

    <footer className="shell articleFooter"><div className="brand"><span className="brandMark">✣</span>emblasoft <b>KOREA</b></div><a href={`${basePath}/blog/`}>전체 글</a><small>© 2026 Emblasoft Korea</small></footer>
  </main>
}
