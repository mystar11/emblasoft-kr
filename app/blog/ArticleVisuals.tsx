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


type TestExample = {
  environment: string;
  topology: string[];
  load: string[];
  procedure: string[];
  results: { metric: string; threshold: string; expected: string; interpretation: string }[];
};

const examples: Record<string, TestExample> = {
  ue: {
    environment: "5G SA Lab · 5GC 1식 · gNodeB 에뮬레이션 · 데이터/IMS 애플리케이션 서버",
    topology: ["Evolver에서 UE·gNodeB 동작 생성", "N2/N3를 통해 실제 5GC에 연결", "N6 뒤 PureLoad 서비스 서버 배치", "코어·호스트·서비스 KPI를 동일 NTP 기준으로 수집"],
    load: ["10,000 UE, 200 UE/s 단계적 등록", "Web 40% · Video 25% · VoNR 15% · IoT 15% · Bulk 5%", "20분 정상 부하 → 10분 Busy Hour 150% → 30분 안정화", "UE 10%는 이동·Idle 전환, 2%는 재접속 시나리오 수행"],
    procedure: ["기준 부하에서 등록·PDU Session 기준선 측정", "서비스 믹스와 이동성 동시 실행", "등록 폭주와 재접속 이벤트 주입", "서비스별 P95/P99 및 실패 Cause 비교"],
    results: [
      {metric:"Registration 성공률",threshold:"≥ 99.5%",expected:"99.6~99.9%",interpretation:"정상 예상. 실패 Cause가 특정 시간대에 집중되면 AMF·UDM·인증 구간을 확인합니다."},
      {metric:"PDU Session 성공률",threshold:"≥ 99.5%",expected:"99.5~99.8%",interpretation:"정상 예상. 서비스 믹스 투입 후 하락하면 SMF·UPF 자원과 정책을 점검합니다."},
      {metric:"서비스 지연 P95",threshold:"기준선 대비 +10% 이내",expected:"+3~8%",interpretation:"허용 범위 예상. Busy Hour에서만 초과하면 큐잉·QoS 경합 가능성이 큽니다."},
      {metric:"Handover 성공률",threshold:"≥ 99.0%",expected:"99.2~99.7%",interpretation:"정상 예상. 단말군별 차이가 크면 UE capability와 대상 셀 설정을 분리해 봅니다."},
    ],
  },
  e2e: {
    environment: "5G SA E2E · UE/gNodeB–Transport–5GC–IMS/Edge/Cloud",
    topology: ["2개 셀·5,000 UE를 Evolver로 구성", "전송 구간에 지연·손실 주입기 배치", "실제 AMF/SMF/UPF와 IMS·Edge 앱 연결", "각 구간 로그와 E2E 서비스 결과를 공통 세션 ID로 상관분석"],
    load: ["정상 3,000 UE, 피크 5,000 UE", "VoNR·영상·웹·IoT를 15:25:45:15로 혼합", "전송 지연 +10 ms, 손실 0.1% 경계조건 적용", "UPF 경로 전환과 gNodeB Handover를 부하 중 수행"],
    procedure: ["구간별 단독 기준선 확보", "동일 UE 여정으로 E2E 정상 시험", "Transport·RAN·Core 장애를 한 번에 한 조건씩 주입", "KPI 저하가 시작된 최초 구간과 최종 서비스 영향을 연결"],
    results: [
      {metric:"E2E 서비스 성공률",threshold:"≥ 99.5%",expected:"99.6~99.8%",interpretation:"정상 예상. 개별 노드는 정상인데 미달하면 인터페이스·정책 경계를 우선 확인합니다."},
      {metric:"E2E 지연 P95",threshold:"≤ 35 ms (예시 SLA)",expected:"24~31 ms",interpretation:"정상 예상. N3 이전과 N6 이후를 나눠 병목을 격리합니다."},
      {metric:"세션 연속성",threshold:"≥ 99.0%",expected:"99.2~99.6%",interpretation:"전환 중 일부 손실은 가능하나 서비스 재설정이 반복되면 Handover·UPF 경로를 확인합니다."},
      {metric:"장애 복구시간",threshold:"≤ 5초",expected:"2.5~4.5초",interpretation:"목표 범위 예상. 알람은 빠르나 서비스가 늦게 복구되면 제어·사용자 평면을 분리 분석합니다."},
    ],
  },
  private5g: {
    environment: "스마트팩토리 Private 5G · 3개 셀 · 이중화 Core/UPF · Edge 업무 서버",
    topology: ["현장 단말 50대와 에뮬레이션 UE 550대 혼합", "AGV·영상·센서·작업자 단말을 별도 DNN/QoS로 구성", "이중화 UPF와 Edge 애플리케이션 연결", "음영 구역·셀 경계·전송 장애 지점에서 측정"],
    load: ["AGV 100 · 영상 80 · 센서 300 · 작업자 단말 120", "정상 60%, 교대시간 100%, 순간 130% 부하", "AGV 이동 중 Handover와 영상 업링크 동시 실행", "UPF·백홀 장애 각 1회, 8시간 Soak Test"],
    procedure: ["업무별 허용 지연과 중단시간 확정", "구역별 정상·경계 RF 조건 시험", "교대시간 동시 등록과 서비스 우선순위 검증", "장애 복구·알람·운영자 조치 기록 후 인수 판정"],
    results: [
      {metric:"업무 서비스 성공률",threshold:"≥ 99.9%",expected:"99.92~99.98%",interpretation:"정상 예상. RF가 양호한데 미달하면 DNN·QoS·Edge 앱을 확인합니다."},
      {metric:"AGV 제어 지연 P95",threshold:"≤ 20 ms",expected:"12~18 ms",interpretation:"목표 범위 예상. 영상 부하 시 초과하면 우선순위와 업링크 자원 배분을 점검합니다."},
      {metric:"Handover 중단시간",threshold:"≤ 50 ms",expected:"25~45 ms",interpretation:"정상 예상. 특정 셀 경계에서만 초과하면 이웃셀·무선 파라미터 문제일 가능성이 큽니다."},
      {metric:"이중화 복구시간",threshold:"≤ 3초",expected:"1.5~2.8초",interpretation:"인수 가능 예상. 기존 세션 손실 여부는 평균값과 별도로 판정해야 합니다."},
    ],
  },
  monitoring: {
    environment: "3개 지역 Active Agent · Core/서비스 Passive 수집 · 통합 Service Assurance",
    topology: ["지역별 Evolver Active Agent에서 등록·웹·음성 시험", "nScan이 N2/N3 및 핵심 서비스 세션 관찰", "알람·구성 변경·NF 자원 데이터를 같은 시간축으로 연결", "Passive 이상을 Active 시나리오로 재현하고 수정 후 재검증"],
    load: ["지역별 5분 간격 경량 Active 트랜잭션", "24×7 Passive 관찰, 가입자 데이터는 정책에 따라 익명화", "HTTP·DNS·IMS·PDU Session 시나리오 운영", "월 1회 장애·변경 회귀 캠페인 수행"],
    procedure: ["정상 7일 기준선과 시간대별 편차 정의", "Active SLA 위반 또는 Passive 이상치로 사건 생성", "동일 지역·DNN·서비스 조건을 Active로 재현", "수정 전후 Active 결과와 Passive 추세를 함께 종료 증거로 보존"],
    results: [
      {metric:"서비스 가용성",threshold:"≥ 99.95%",expected:"99.96~99.99%",interpretation:"정상 예상. Active만 실패하면 시험 경로, Passive도 동반되면 실제 영향으로 판단합니다."},
      {metric:"이상 탐지시간 MTTD",threshold:"≤ 5분",expected:"1~5분",interpretation:"시험 주기 내 탐지 예상. 더 빠른 탐지는 주기와 운영망 부하의 균형이 필요합니다."},
      {metric:"재현 성공률",threshold:"≥ 80%",expected:"80~90%",interpretation:"반복 장애는 높은 재현율이 예상되며 일회성 무선·단말 이슈는 Passive 증거를 유지합니다."},
      {metric:"수정 확인시간",threshold:"≤ 30분",expected:"10~25분",interpretation:"자동 재검증 기준. Passive 추세 정상화에는 관찰창이 추가로 필요할 수 있습니다."},
    ],
  },
  nsa: {
    environment: "NSA Option 3x와 SA 병행 Lab · eNB/gNB · EPC/5GC · IMS",
    topology: ["NSA UE는 LTE Anchor와 EN-DC로 연결", "SA UE는 NR과 5GC에 직접 등록", "VoLTE·VoNR·EPS Fallback 경로를 모두 구성", "동일 단말군·서비스로 NSA/SA 결과를 비교"],
    load: ["NSA 500 UE + SA 500 UE", "데이터 70% · 음성 20% · 이동성 10%", "EN-DC 설정·해제, SA Registration, EPS Fallback 반복", "NSA→SA 전환 전후 동일 Busy Hour 부하 적용"],
    procedure: ["NSA와 SA의 독립 기준선 측정", "단말 capability별 조합 매트릭스 실행", "음성·데이터 동시 사용 중 이동성 검증", "전환 후 성공률·지연·Cause 분포 비교"],
    results: [
      {metric:"NSA EN-DC 성공률",threshold:"≥ 99.0%",expected:"99.2~99.7%",interpretation:"정상 예상. eNB/gNB 조합별 편차가 있으면 X2·무선 설정을 확인합니다."},
      {metric:"SA Registration",threshold:"≥ 99.5%",expected:"99.6~99.9%",interpretation:"정상 예상. NSA 결과와 직접 비교하지 않고 SA 절차 자체로 판정합니다."},
      {metric:"VoNR 설정 성공률",threshold:"≥ 99.0%",expected:"99.1~99.6%",interpretation:"IMS·QoS Flow까지 포함한 결과입니다. 단말군별 EPS Fallback 비율도 함께 봅니다."},
      {metric:"EPS Fallback 시간",threshold:"≤ 2.5초",expected:"1.6~2.3초",interpretation:"목표 범위 예상. 통화 성공만이 아니라 체감 설정시간을 별도로 관리합니다."},
    ],
  },
  upf: {
    environment: "UPF 단독 검증 · Evolver UE/gNodeB/5GC 에뮬레이션 · PureLoad N6 서비스",
    topology: ["N3 측 UE·gNodeB 트래픽 생성", "N4 측 PFCP 세션·정책 제어", "시험 대상 UPF의 PDR/FAR/QER 기능 활성화", "N6 애플리케이션과 양방향 트래픽 측정"],
    load: ["100만 PDU Session, 10,000 session/s ramp", "64B~1,500B IMIX, DL:UL=70:30", "QoS·NAT·사용량 보고 기능을 실제 설정대로 활성화", "60분 성능 + 24시간 Soak + UPF failover"],
    procedure: ["기능 비활성 기준선과 운영 기능 활성 결과 분리", "세션·Gbps·pps를 동시에 단계 상승", "80% 목표 부하에서 SLA 유지 여부 확인", "장시간 메모리·CPU 추세와 장애 복구 결과 분석"],
    results: [
      {metric:"지속 처리량",threshold:"설계용량의 ≥ 80%",expected:"82~88%",interpretation:"운영 기능을 켠 상태의 예시입니다. 하드웨어·NIC·패킷 크기에 따라 반드시 재산정합니다."},
      {metric:"PDU Session 성공률",threshold:"≥ 99.5%",expected:"99.6~99.9%",interpretation:"PFCP rate 상승 구간에서 하락하면 SMF–UPF 제어 확장성을 확인합니다."},
      {metric:"패킷 손실",threshold:"≤ 0.1%",expected:"0.01~0.08%",interpretation:"정상 범위 예상. 소형 패킷에서만 증가하면 pps·NIC 큐 병목 가능성이 큽니다."},
      {metric:"Failover 복구",threshold:"≤ 5초",expected:"2~4.5초",interpretation:"신규·기존 세션을 구분해 판정하며 세션 재설정 폭증도 함께 측정합니다."},
    ],
  },
  future: {
    environment: "5G SA 기준선 + Rel-18 기능 모듈 + API 기반 자동 회귀 파이프라인",
    topology: ["현행 UE·서비스 골든 시나리오 저장", "프로토콜·NF별 모듈을 독립 버전 관리", "CI/CD 이벤트로 Evolver 시험 자동 실행", "결과 스키마를 유지하며 Rel-18+·6G 항목 확장"],
    load: ["핵심 50개 골든 시나리오", "야간 Sanity 10개 · 주간 Regression 50개", "릴리스별 KPI 기준선과 Cause 분포 저장", "신규 기능은 기존 세트 영향 확인 후 별도 부하 모델 추가"],
    procedure: ["5G 기준선과 재사용 가능한 입력·결과 형식 정의", "Rel-18 기능을 독립 모듈로 추가", "자동화율·실행시간·재현성을 릴리스마다 측정", "6G 요구가 확정될 때 기존 자산의 재사용·교체 범위를 판단"],
    results: [
      {metric:"시나리오 재사용률",threshold:"≥ 70%",expected:"75~85%",interpretation:"초기 5G-A 확장 예시입니다. 프로토콜 종속 스크립트가 많으면 낮아집니다."},
      {metric:"자동 실행률",threshold:"≥ 80%",expected:"85~95%",interpretation:"환경 준비까지 API화한 경우 예상. 수동 장비 설정은 별도 작업으로 남을 수 있습니다."},
      {metric:"회귀 소요시간",threshold:"기존 대비 ≥ 50% 단축",expected:"55~70% 단축",interpretation:"병렬화와 자동 판정 효과이며 실제 시간은 Lab 자원 수에 좌우됩니다."},
      {metric:"결과 추적성",threshold:"릴리스·형상 100% 연결",expected:"100%",interpretation:"미래 기능 자체의 성능이 아니라 시험 자산 준비도를 판단하는 핵심 기준입니다."},
    ],
  },
  multivendor: {
    environment: "국내 상용망형 Multi-vendor Lab · RAN 2종 · Core 2종 · 주요 UE chipset 3종",
    topology: ["RAN–Core–UE 조합을 위험 기반 매트릭스로 구성", "Evolver가 모든 조합에 동일 UE 여정·부하 제공", "nScan으로 경계 메시지·Cause·세션 연속성 수집", "통과 시나리오를 골든 회귀 세트로 등록"],
    load: ["핵심 조합 12개, 시나리오 40개", "Registration·PDU·Handover·Voice·Failover 포함", "정상 1,000 UE, Busy Hour 2,000 UE", "신규 릴리스와 이전 릴리스를 동일 조건으로 A/B 비교"],
    procedure: ["벤더 고유 KPI를 공통 서비스 KPI로 정규화", "조합별 정상·경계·장애 조건 실행", "실패 시 공통 시간축의 패킷·Cause로 경계 격리", "수정 후 동일 seed로 재실행해 재현·해결 확인"],
    results: [
      {metric:"핵심 절차 성공률",threshold:"≥ 99.5%",expected:"99.6~99.8%",interpretation:"정상 조합 예상. 특정 조합만 미달하면 벤더 경계·옵션 차이를 우선 봅니다."},
      {metric:"골든 세트 통과율",threshold:"100%",expected:"100%",interpretation:"기존 통과 조합의 회귀 기준입니다. 한 건의 실패도 릴리스 승인 전 분석 대상입니다."},
      {metric:"결함 재현률",threshold:"≥ 90%",expected:"90~98%",interpretation:"동일 데이터·시간·형상 관리가 된 경우 예상되는 범위입니다."},
      {metric:"원인 구간 식별",threshold:"≤ 4시간",expected:"1~4시간",interpretation:"벤더별 로그만 비교할 때보다 공통 증거가 있는 경우의 목표 예시입니다."},
    ],
  },
  interop: {
    environment: "Ericsson·Samsung·Nokia 혼합 가정 Lab · 실제 적용 SW/옵션 기준",
    topology: ["벤더 경계 셀과 RAN–Core 조합을 명시", "주요 UE chipset·OS 버전을 고정", "N2/N3/Xn·IMS 경계의 패킷과 로그 수집", "브랜드 점수가 아닌 경계 절차별 합격표 작성"],
    load: ["경계 Handover 1,000회/조합", "VoNR·VoLTE·EPS Fallback 각 200회", "PDU Session 유지 상태에서 셀 이동·장애 전환", "부하 30%·70%·100%에서 동일 절차 반복"],
    procedure: ["단일 벤더 기준선과 혼합 경계 결과를 분리", "SW·패치·파라미터를 시험 ID에 고정", "실패 메시지와 무선·Core Cause를 공통 시간축으로 분석", "수정 후 동일 UE·seed·부하로 재검증"],
    results: [
      {metric:"경계 Handover 성공률",threshold:"≥ 99.0%",expected:"99.1~99.6%",interpretation:"정상 예상 범위. 특정 방향만 낮으면 소스·타깃 설정 비대칭을 확인합니다."},
      {metric:"서비스 중단 P95",threshold:"≤ 60 ms",expected:"35~55 ms",interpretation:"데이터 서비스 예시입니다. 음성과 URLLC 계열은 별도 기준이 필요합니다."},
      {metric:"Fallback 성공률",threshold:"≥ 99.0%",expected:"99.2~99.7%",interpretation:"IMS와 단말 capability를 포함합니다. 브랜드 전체의 우열로 일반화할 수 없습니다."},
      {metric:"원인 미확정 비율",threshold:"≤ 5%",expected:"1~4%",interpretation:"공통 패킷·로그 증거가 확보된 시험 캠페인의 목표 범위입니다."},
    ],
  },
  labfield: {
    environment: "Lab → Pre-production → FAT/SAT → Live Network의 동일 시나리오 체계",
    topology: ["Lab에서 UE·망·서비스를 통제 재현", "Pre-production에 상용 SW·정책·형상 반영", "현장 SAT는 통제된 UE와 낮은 부하로 실행", "Live에서 Active/Passive 결과를 Lab 재현 입력으로 환류"],
    load: ["Lab 5,000 UE · 장애/피크 부하 허용", "Pre-production 2,000 UE · 상용 형상 회귀", "현장 SAT 50 UE · 지정 시간·원복 절차", "Live Active는 5분 주기 경량 트랜잭션"],
    procedure: ["동일 시나리오 ID와 KPI 스키마를 단계별 유지", "환경 차이는 변수로 기록하고 숨기지 않음", "FAT/SAT 결과 차이를 허용범위와 함께 승인", "운영 장애를 Passive 증거로 저장해 Lab에서 재현"],
    results: [
      {metric:"시나리오 이식률",threshold:"≥ 80%",expected:"82~90%",interpretation:"동일 시나리오 로직을 유지하고 환경 변수만 바꾸는 경우의 예시입니다."},
      {metric:"FAT–SAT KPI 편차",threshold:"≤ 10%",expected:"3~9%",interpretation:"RF·전송 환경 차이를 반영한 목표 범위이며 원인을 기록해야 합니다."},
      {metric:"현장 SLA 통과율",threshold:"100% 핵심 항목",expected:"100%",interpretation:"핵심 서비스는 예외 승인보다 원인 해결 후 재시험이 원칙입니다."},
      {metric:"운영 장애 재현률",threshold:"≥ 70%",expected:"70~85%",interpretation:"일회성 RF·외부망 요인은 완전 재현이 어려워 Passive 증거를 함께 사용합니다."},
    ],
  },
};

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
  const e = examples[topic];
  return <section className="expertVisual" aria-label={`${c.title} 시각 자료`}>
    <div className="visualIntro"><div><p className="sectionNo">VISUAL GUIDE · EMBLASOFT OFFICIAL SOURCES</p><h2>{c.title}</h2></div><p>{c.note}</p></div>
    <div className="visualFlow">{c.flow.map((step,index)=><div className="visualFlowWrap" key={step.label}><div className="visualFlowNode"><span>{String(index+1).padStart(2,"0")}</span><b>{step.label}</b><small>{step.detail}</small></div>{index<c.flow.length-1&&<i>→</i>}</div>)}</div>
    <div className="comparisonTable" role="region" aria-label="비교표" tabIndex={0}><table><thead><tr>{c.headers.map(h=><th key={h}>{h}</th>)}</tr></thead><tbody>{c.compare.map(r=><tr key={r.item}><th>{r.item}</th><td>{r.left}</td><td>{r.right}</td><td>{r.decision}</td></tr>)}</tbody></table></div>
    <div className="tradeoffGrid"><div className="strength"><small>적합한 점</small><h3>이 접근이 유리한 경우</h3><ul>{c.strengths.map(x=><li key={x}>{x}</li>)}</ul></div><div className="limit"><small>설계 시 주의</small><h3>함께 고려할 제약</h3><ul>{c.limits.map(x=><li key={x}>{x}</li>)}</ul></div></div>
    <div className="kpiStrip"><b>판정 KPI</b>{c.kpis.map(k=><span key={k}>{k}</span>)}</div>
    <div className="testExample">
      <div className="exampleHeading"><div><p className="sectionNo">PRACTICAL TEST EXAMPLE</p><h3>실제 구성 예시와 예상 테스트 결과</h3></div><p>아래 수치는 이해를 돕기 위한 설계 예시이며 Emblasoft의 보장 성능이 아닙니다. 최종 합격선은 대상 장비, 용량, SW 버전, RF·전송 조건과 고객 SLA를 반영해 PoC에서 확정해야 합니다.</p></div>
      <div className="exampleEnvironment"><small>예시 대상 환경</small><b>{e.environment}</b></div>
      <div className="exampleColumns">
        <div><small>구성·연결</small><ol>{e.topology.map(x=><li key={x}>{x}</li>)}</ol></div>
        <div><small>UE·트래픽 부하</small><ol>{e.load.map(x=><li key={x}>{x}</li>)}</ol></div>
        <div><small>실행 절차</small><ol>{e.procedure.map(x=><li key={x}>{x}</li>)}</ol></div>
      </div>
      <div className="resultTable" role="region" aria-label="예상 테스트 결과표" tabIndex={0}><table><thead><tr><th>측정 KPI</th><th>예시 합격 기준</th><th>정상 예상 결과</th><th>결과 해석</th></tr></thead><tbody>{e.results.map(r=><tr key={r.metric}><th>{r.metric}</th><td>{r.threshold}</td><td>{r.expected}</td><td>{r.interpretation}</td></tr>)}</tbody></table></div>
      <div className="resultLegend"><span><i className="passDot"/>정상 범위: 합격선 충족</span><span><i className="warnDot"/>경계 결과: 추세·상위 백분위 확인</span><span><i className="failDot"/>실패 결과: Cause·구간별 증거 분석</span></div>
    </div>
    <aside className="officialSources"><div><small>OFFICIAL MATERIALS</small><b>이 도식은 Emblasoft 공식 공개자료의 기능 설명을 바탕으로 재구성했습니다.</b></div><div>{c.sources.map(s=><a key={s.href} href={s.href} target="_blank" rel="noreferrer">{s.name} ↗</a>)}</div></aside>
  </section>;
}
