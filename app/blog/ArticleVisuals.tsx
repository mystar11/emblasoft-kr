type VisualConfig = {
  label: string;
  title: string;
  note: string;
  flow: { label: string; detail: string }[];
  compare: { item: string; left: string; right: string; decision: string }[];
  headers: [string, string, string, string];
  strengths: string[];
  limits: string[];
  kpis: string[];
  sources: { name: string; href: string }[];
};

const evolver = { name: "Evolver 공식 Product Overview", href: "https://emblasoft.com/resources/product-overviews/evolver-functional-performance-active-testing" };
const pureLoad = { name: "PureLoad 공식 제품 자료", href: "https://emblasoft.com/product/pureload" };
const nscan = { name: "nScan 공식 제품 자료", href: "https://emblasoft.com/product/nscan" };
const assurance = { name: "Service Assurance 공식 자료", href: "https://emblasoft.com/solution/service-assurance" };
const upf = { name: "Emblasoft 3GPP UPF 기술 자료", href: "https://emblasoft.com/blog/exploring-the-3gpp-upf-user-plane-function" };

const configs: Record<string, VisualConfig> = {
  ue: {
    label: "UE BEHAVIOUR MODEL", title: "패킷 부하가 아니라 가입자 여정을 재현합니다",
    note: "UE 상태 변화와 서비스 트래픽을 같은 시간축에 놓아야 제어·사용자 평면의 경합을 확인할 수 있습니다.",
    flow: [{label:"등록·인증",detail:"Registration · AKA"},{label:"상태 전환",detail:"Idle ↔ Connected"},{label:"이동성",detail:"Handover · Reselection"},{label:"서비스 혼합",detail:"Voice · Video · Data · IoT"},{label:"장애·재접속",detail:"Retry · Recovery"}],
    headers:["구분","단순 트래픽 생성","UE 에뮬레이션","적합한 용도"],
    compare:[
      {item:"제어 평면",left:"제한적",right:"등록·인증·세션 절차 재현",decision:"Core 기능·확장성"},
      {item:"사용자 행동",left:"고정 패킷 프로파일",right:"시간·상태 기반 모델",decision:"QoE·혼잡 재현"},
      {item:"반복성",left:"처리량 기준",right:"동일 가입자 여정 재실행",decision:"회귀·인수시험"},
    ],
    strengths:["실제 서비스 상태 변화를 반복 가능하게 재현", "제어 평면과 사용자 평면의 동시 병목 확인", "단말을 대량 확보하지 않고 규모 시험 가능"],
    limits:["현장 RF 특성은 별도 무선 계측이 필요", "잘못 설계한 행동 모델은 실제 수요를 왜곡", "실단말 호환성 시험을 완전히 대체하지는 않음"],
    kpis:["Registration success","Session setup time","Handover success","P95 latency","Packet loss","QoE per service"], sources:[evolver,pureLoad],
  },
  e2e: {
    label:"END-TO-END TEST BOUNDARY", title:"각 구간의 성공이 전체 서비스 성공을 보장하지는 않습니다",
    note:"UE에서 애플리케이션까지 공통 시나리오와 시간 기준을 사용해야 실패 구간을 정확히 좁힐 수 있습니다.",
    flow:[{label:"UE",detail:"행동·서비스"},{label:"RAN",detail:"무선·이동성"},{label:"Transport",detail:"지연·손실·QoS"},{label:"5G Core",detail:"SBA·정책·UPF"},{label:"Service",detail:"IMS·Edge·Cloud"}],
    headers:["시험 범위","개별 노드 시험","E2E 통합 시험","판단할 수 있는 것"],
    compare:[{item:"결함 위치",left:"대상 노드 내부",right:"노드·인터페이스 경계",decision:"상호운용 원인"},{item:"성능",left:"최대 처리량",right:"서비스 체인 전체 KPI",decision:"실제 병목"},{item:"변경 검증",left:"벤더별 결과",right:"동일 시나리오 회귀",decision:"릴리스 영향"}],
    strengths:["서비스 관점의 합격 기준 적용", "멀티벤더 경계 문제를 조기에 발견", "Lab·인수·운영 시나리오 재사용"],
    limits:["구성 복잡도와 데이터 정합 작업 증가", "시간 동기와 공통 식별자 설계가 필수", "원인 격리를 위해 노드 단위 시험도 병행"],
    kpis:["E2E setup success","Service latency","QoS compliance","Session continuity","Recovery time","Error cause"], sources:[evolver,assurance],
  },
  private5g: {
    label:"ACCEPTANCE GATE", title:"인수시험은 장비 확인이 아니라 업무 서비스 승인 절차입니다",
    note:"현장의 중요 업무, 허용 중단시간과 사용자 분포를 먼저 정의한 뒤 시험 항목과 합격선을 연결합니다.",
    flow:[{label:"업무 기준",detail:"서비스·SLA"},{label:"정상 조건",detail:"접속·QoS"},{label:"경계 조건",detail:"부하·이동"},{label:"장애 주입",detail:"Failover·복구"},{label:"인수 판정",detail:"증거·예외"}],
    headers:["검증 항목","사양 확인만 수행","서비스 기반 인수시험","권장 판정"],
    compare:[{item:"커버리지",left:"RSRP 중심",right:"업무 트래픽 성공과 함께 측정",decision:"구역별 서비스 성공률"},{item:"용량",left:"최대 처리량",right:"Busy Hour 서비스 믹스",decision:"P95/P99와 실패율"},{item:"복구",left:"이중화 구성 확인",right:"장애 주입 후 세션 영향",decision:"RTO·패킷 손실"}],
    strengths:["사용부서가 이해할 수 있는 인수 기준", "장애 시 운영 절차까지 실제 확인", "향후 회귀시험 기준선 확보"],
    limits:["현장별 서비스·단말 모델링이 필요", "운영망 보호를 위한 중단 조건 필수", "일회성 시험만으로 장기 품질은 보장 불가"],
    kpis:["Attach success","Coverage service rate","P95 latency","QoS priority","Failover time","Alarm visibility"], sources:[evolver,pureLoad,assurance],
  },
  monitoring: {
    label:"CLOSED-LOOP ASSURANCE", title:"관찰과 검증을 연결해야 장애 조치가 끝납니다",
    note:"nScan이 실가입자 트래픽에서 이상을 찾고 Evolver가 통제된 합성 세션으로 재현·확인하는 구조입니다.",
    flow:[{label:"Passive 탐지",detail:"실세션·추세"},{label:"영향 범위",detail:"가입자·서비스"},{label:"Active 재현",detail:"통제 시나리오"},{label:"수정",detail:"설정·릴리스"},{label:"재검증",detail:"Active + Passive"}],
    headers:["기준","Active Monitoring","Passive Monitoring","결합 시 가치"],
    compare:[{item:"데이터",left:"합성 UE·서비스",right:"실제 가입자 세션",decision:"의도와 현실 비교"},{item:"강점",left:"선제·반복 검증",right:"전체 현상·이력 분석",decision:"탐지부터 확인"},{item:"제약",left:"시나리오 밖 현상",right:"트래픽·수집 지점 의존",decision:"상호 보완"}],
    strengths:["장애 발생 전 서비스 경로 점검", "실제 실패 세션의 증거와 추세 확보", "수정 후 같은 조건으로 종료 판정"],
    limits:["공통 시간축과 세션 식별 기준 필요", "암호화·개인정보·보존 정책 고려", "합성 트래픽의 운영망 영향 관리"],
    kpis:["Availability","HTTP response","Jitter","Call failure","Slice SLA","MTTR"], sources:[assurance,nscan,evolver],
  },
  nsa: {
    label:"NSA / SA DECISION MAP", title:"NSA와 SA는 Core 구조와 실패 지점이 다릅니다",
    note:"같은 5G 무선 접속이라도 NSA는 LTE 앵커와 EPC 의존성을, SA는 5GC의 서비스 기반 절차와 슬라이스 정책을 검증합니다.",
    flow:[{label:"UE",detail:"NSA / SA capability"},{label:"RAN",detail:"eNB+gNB / gNB"},{label:"Control",detail:"EPC / 5GC SBA"},{label:"User Plane",detail:"S/P-GW / UPF"},{label:"Service",detail:"VoLTE / VoNR"}],
    headers:["시험 관점","5G NSA","5G SA","전환 시 주의점"],
    compare:[{item:"앵커",left:"LTE eNB·EPC",right:"NR gNB·5GC",decision:"접속 절차 분리"},{item:"음성",left:"VoLTE 중심",right:"VoNR·EPS fallback",decision:"연속성 검증"},{item:"정책",left:"기존 EPC 정책",right:"SBA·Slice·DNN",decision:"정책 매핑"}],
    strengths:["NSA 기존 자산 활용과 SA 신규 기능을 구분", "전환 구간의 음성·세션 문제 조기 발견", "단말·RAN·Core 조합별 기준선 확보"],
    limits:["벤더별 옵션과 배포 구조 차이가 큼", "모든 단말 조합을 전수 시험하기 어려움", "NSA 결과를 SA 합격 근거로 재사용할 수 없음"],
    kpis:["EN-DC setup","Registration","PDU session","VoNR setup","EPS fallback","Mobility continuity"], sources:[evolver,pureLoad],
  },
  upf: {
    label:"UPF ISOLATION TEST", title:"UPF 앞뒤의 망을 에뮬레이션해 성능 원인을 분리합니다",
    note:"Emblasoft 공식 UPF 자료는 gNodeB, 5G SBA Core와 N6 데이터 네트워크를 에뮬레이션하는 노드 격리 방식을 설명합니다.",
    flow:[{label:"UE·gNB",detail:"N1/N2/N3"},{label:"SMF",detail:"N4·PFCP"},{label:"UPF",detail:"PDR·FAR·QER"},{label:"N6 Network",detail:"App·Internet"},{label:"Analysis",detail:"KPI·오류"}],
    headers:["부하 모델","단순 Throughput","상태 기반 UPF 시험","확인 목적"],
    compare:[{item:"세션",left:"소수 고정 흐름",right:"대량 PDU session·PFCP",decision:"제어·데이터 확장성"},{item:"트래픽",left:"균일 패킷",right:"서비스·QoS·버스트 혼합",decision:"실사용 병목"},{item:"장애",left:"정상 경로",right:"UPF·N3/N6·CUPS 장애",decision:"복구와 세션 영향"}],
    strengths:["UPF를 독립적으로 기능·성능 검증", "N3/N4/N6 조건과 분산 UPF 모델링", "자동화된 장시간·회귀 부하 가능"],
    limits:["NIC·CPU pinning 등 환경 기준 고정 필요", "최대 PPS와 실제 서비스 품질은 별도 지표", "외부 DN과 보안 기능 영향도 함께 관리"],
    kpis:["Gbps/PPS","PDU sessions","PFCP rate","N3/N6 latency","Packet loss","Failover recovery"], sources:[upf,pureLoad,evolver],
  },
  future: {
    label:"EVOLUTION-READY TEST ASSET", title:"미래 규격보다 재사용 가능한 시험 자산을 먼저 준비합니다",
    note:"5G-Advanced와 6G 준비의 핵심은 특정 기능을 예측하는 것이 아니라 시나리오·데이터·자동화 경계를 유연하게 만드는 것입니다.",
    flow:[{label:"5G 기준선",detail:"현행 KPI"},{label:"모듈 시나리오",detail:"UE·서비스"},{label:"API 자동화",detail:"CI/CD/CT"},{label:"신규 기능",detail:"Rel-18+"},{label:"6G 확장",detail:"새 NF·KPI"}],
    headers:["준비 방식","일회성 전용 장비","소프트웨어·시나리오 자산","장기 효과"],
    compare:[{item:"확장",left:"프로토콜별 재구축",right:"노드·절차 모듈 추가",decision:"투자 보호"},{item:"자동화",left:"수동 캠페인",right:"API·회귀 파이프라인",decision:"변경 속도 대응"},{item:"데이터",left:"보고서 단위",right:"버전·기준선·추세",decision:"세대 간 비교"}],
    strengths:["현재 5G 투자와 미래 준비를 연결", "표준·벤더 변경에 단계적으로 대응", "Lab부터 운영까지 동일 KPI 체계 유지"],
    limits:["6G 세부 요구사항은 아직 변동 가능", "지원 프로토콜과 로드맵의 지속 검토 필요", "모든 미래 기능을 선구매할 필요는 없음"],
    kpis:["Scenario reuse","Automation rate","Regression time","Coverage by release","Data continuity","Integration effort"], sources:[evolver,assurance],
  },
  multivendor: {
    label:"MULTI-VENDOR BASELINE", title:"벤더별 결과가 아니라 동일 조건의 차이를 비교합니다",
    note:"벤더 릴리스와 옵션이 달라도 UE 행동, 트래픽, 시간, 판정 KPI를 고정하면 상호운용 결함을 재현할 수 있습니다.",
    flow:[{label:"공통 시나리오",detail:"UE·서비스"},{label:"조합 매트릭스",detail:"RAN·Core·UE"},{label:"동일 부하",detail:"시간·데이터"},{label:"차이 분석",detail:"절차·Cause"},{label:"골든 세트",detail:"회귀 자동화"}],
    headers:["관리 기준","벤더별 개별 시험","공통 기준선 시험","운영 효과"],
    compare:[{item:"KPI",left:"벤더 고유 명칭",right:"서비스 기준으로 정규화",decision:"객관적 비교"},{item:"결함",left:"상대 장비 원인 주장",right:"패킷·시간·Cause 증거",decision:"책임 구간 축소"},{item:"릴리스",left:"투입 후 확인",right:"골든 세트 사전 회귀",decision:"변경 위험 감소"}],
    strengths:["특정 벤더에 종속되지 않은 판정", "조합 폭증을 위험 기반으로 축소", "재현 가능한 증거로 협업 개선"],
    limits:["모든 조합의 전수 검증은 비현실적", "옵션·패치 수준의 정확한 형상 관리 필요", "표준 적합성이 상호운용성을 자동 보장하지 않음"],
    kpis:["Procedure success","Cause distribution","Handover","Session continuity","Release delta","Reproduction rate"], sources:[evolver,nscan],
  },
  interop: {
    label:"INTEROPERABILITY MATRIX", title:"브랜드 비교가 아니라 경계 절차를 검증합니다",
    note:"Ericsson·Samsung·Nokia 조합은 실제 적용 릴리스와 옵션에 따라 달라지므로, 공개 글에서는 일반화 대신 검증 방법과 증거 기준을 다룹니다.",
    flow:[{label:"UE 조합",detail:"Chipset·OS"},{label:"RAN 경계",detail:"Xn·N2/N3"},{label:"Core 연동",detail:"SBA·정책"},{label:"서비스",detail:"Voice·Data"},{label:"장애 전환",detail:"Fallback·Recovery"}],
    headers:["접근","브랜드별 기능 비교","경계 기반 상호운용","권장 증거"],
    compare:[{item:"이동성",left:"셀별 정상 확인",right:"벤더 경계 Handover",decision:"패킷·성공률·중단시간"},{item:"음성",left:"단일망 통화",right:"VoNR·VoLTE fallback",decision:"Call flow·미디어 KPI"},{item:"원인",left:"벤더 로그 개별 해석",right:"공통 시간축 상관분석",decision:"Cause·메시지 디코드"}],
    strengths:["브랜드 선입견 없이 실제 경계에 집중", "벤더 간 논쟁을 공통 증거로 전환", "핵심 조합을 골든 회귀 세트로 유지"],
    limits:["특정 벤더의 우열로 일반화할 수 없음", "실제 SW·파라미터·단말 버전이 결과 좌우", "상세 호환성은 고객 환경 PoC가 필요"],
    kpis:["Handover interruption","Call setup","Fallback time","PDU continuity","Cause code","Config delta"], sources:[evolver,nscan],
  },
  labfield: {
    label:"LAB-TO-FIELD CONTROL LOOP", title:"장소가 바뀌어도 서비스 기준과 증거는 이어져야 합니다",
    note:"Lab의 반복성, 현장의 현실성, 운영망의 지속 관찰을 하나의 시나리오 이력으로 연결합니다.",
    flow:[{label:"LAB",detail:"재현·격리"},{label:"Pre-production",detail:"상용 형상"},{label:"FAT/SAT",detail:"인수 기준"},{label:"LIVE",detail:"Active·Passive"},{label:"Feedback",detail:"Lab 재현"}],
    headers:["단계","주요 목적","허용 부하·변수","핵심 산출물"],
    compare:[{item:"Lab",left:"결함 격리",right:"높은 부하·장애 주입",decision:"재현 시나리오"},{item:"Field",left:"서비스 승인",right:"통제된 시간·범위",decision:"SAT·원복 기록"},{item:"Live",left:"지속 품질",right:"경량 Active+Passive",decision:"SLA·장애 이력"}],
    strengths:["시험 자산을 개통 후에도 재사용", "현장 장애를 Lab에서 통제 재현", "개발·시험·운영팀의 공통 기준 형성"],
    limits:["Lab과 상용 형상의 차이를 지속 관리", "운영망 시험은 중단·원복 통제가 필수", "환경 차이로 동일 수치가 나오지 않을 수 있음"],
    kpis:["Scenario portability","FAT/SAT delta","Field SLA","MTTD","MTTR","Fix verification"], sources:[evolver,assurance,nscan],
  },
};

export default function ArticleVisuals({ topic }: { topic: keyof typeof configs }) {
  const c = configs[topic];
  return <section className="expertVisual" aria-label={`${c.title} 시각 자료`}>
    <div className="visualIntro"><div><p className="sectionNo">VISUAL GUIDE · EMBLASOFT OFFICIAL SOURCES</p><h2>{c.title}</h2></div><p>{c.note}</p></div>
    <div className="visualFlow">{c.flow.map((step,index)=><div className="visualFlowWrap" key={step.label}><div className="visualFlowNode"><span>{String(index+1).padStart(2,"0")}</span><b>{step.label}</b><small>{step.detail}</small></div>{index<c.flow.length-1&&<i>→</i>}</div>)}</div>
    <div className="comparisonTable" role="region" aria-label="비교표" tabIndex={0}><table><thead><tr>{c.headers.map(h=><th key={h}>{h}</th>)}</tr></thead><tbody>{c.compare.map(r=><tr key={r.item}><th>{r.item}</th><td>{r.left}</td><td>{r.right}</td><td>{r.decision}</td></tr>)}</tbody></table></div>
    <div className="tradeoffGrid"><div className="strength"><small>적합한 점</small><h3>이 접근이 유리한 경우</h3><ul>{c.strengths.map(x=><li key={x}>{x}</li>)}</ul></div><div className="limit"><small>설계 시 주의</small><h3>함께 고려할 제약</h3><ul>{c.limits.map(x=><li key={x}>{x}</li>)}</ul></div></div>
    <div className="kpiStrip"><b>판정 KPI</b>{c.kpis.map(k=><span key={k}>{k}</span>)}</div>
    <aside className="officialSources"><div><small>OFFICIAL MATERIALS</small><b>이 도식은 Emblasoft 공식 공개자료의 기능 설명을 바탕으로 재구성했습니다.</b></div><div>{c.sources.map(s=><a key={s.href} href={s.href} target="_blank" rel="noreferrer">{s.name} ↗</a>)}</div></aside>
  </section>;
}
