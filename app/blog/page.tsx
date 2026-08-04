import type { Metadata } from "next";

export const metadata: Metadata = { title: "기술 블로그", description: "5G·5G-Advanced·6G 네트워크 시험, UE 에뮬레이션, 자동화 및 서비스 보증 인사이트" };

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const posts = [
  { slug: "private-5g-acceptance-test-checklist", category: "PRIVATE 5G", date: "2026.08.04", read: "9 MIN", title: "Private 5G 구축 전 인수시험 체크리스트", summary: "커버리지와 처리량을 넘어 UE 등록, 서비스 품질, 장애복구, 보안과 운영 가시성까지 확인하는 실무 체크리스트입니다.", tags: ["Private 5G", "Acceptance Test", "KPI"] },
  { slug: "5g-integrated-test-environment", category: "5G E2E TEST", date: "2026.08.04", read: "8 MIN", title: "5G 네트워크 통합 시험환경은 어떻게 구축해야 하는가", summary: "UE 에뮬레이션부터 인수시험, Active/Passive Monitoring까지 하나의 검증 체계로 연결하는 방법을 소개합니다.", tags: ["5G", "UE Emulation", "Monitoring"] },
  { slug: "why-real-ue-traffic-models-matter", category: "TEST STRATEGY", date: "2026.08.04", read: "5 MIN", title: "실제 UE 행동과 트래픽 모델이 중요한 이유", summary: "단순 처리량 시험을 넘어 가입자 행동, 서비스 믹스, 장애 조건을 함께 검증해야 하는 이유를 정리합니다.", tags: ["UE", "Traffic Model", "QoE"] },
];

export default function BlogIndex() {
  return <main className="blogIndex">
    <header className="nav shell articleNav"><a className="brand" href={`${basePath}/`}><span className="brandMark">✣</span>emblasoft <b>KOREA</b></a><nav><a href={`${basePath}/`}>홈</a><a href={`${basePath}/blog/`}>기술 블로그</a><a href="https://emblasoft.com/about/contact" target="_blank" rel="noreferrer">기술 문의</a></nav></header>
    <section className="blogIndexHero"><div className="shell"><p className="eyebrow">EMBLASOFT KOREA TECH BLOG</p><h1>네트워크 시험을<br/>현장의 언어로 설명합니다.</h1><p>5G E2E 검증, UE·gNodeB 에뮬레이션, 자동화, Active/Passive Monitoring과 5G-Advanced·6G 진화에 관한 기술 인사이트입니다.</p></div></section>
    <section className="shell blogList"><div className="blogListHead"><div><p className="eyebrow dark">LATEST ARTICLES</p><h2>기술 아티클</h2></div><p>현장에서 바로 활용할 수 있는 시험 설계와 운영 노하우를 공유합니다.</p></div>
      <div className="postGrid">{posts.map((post, i) => <article className={i === 0 ? "featuredPost" : ""} key={post.slug}><div className="postMeta"><span>{post.category}</span><span>{post.date} · {post.read}</span></div><h3>{post.title}</h3><p>{post.summary}</p><div className="postFooter"><div>{post.tags.map(tag => <small key={tag}>#{tag}</small>)}</div><a href={`${basePath}/blog/${post.slug}/`}>읽기 →</a></div></article>)}</div>
    </section>
    <footer className="shell articleFooter"><div className="brand"><span className="brandMark">✣</span>emblasoft <b>KOREA</b></div><p>Network testing and service assurance</p><small>© 2026 Emblasoft Korea</small></footer>
  </main>;
}
