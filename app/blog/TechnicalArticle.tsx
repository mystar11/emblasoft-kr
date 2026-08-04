import ArticleVisuals from "./ArticleVisuals";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export type ArticleSection = { title: string; paragraphs: string[]; points?: string[]; quote?: string };

export default function TechnicalArticle({ category, title, dek, lead, read, sections, closing }: {
  category: string; title: string; dek: string; lead: string; read: string; sections: ArticleSection[]; closing: string;
}) {
  const visualTopics: Record<string, string> = {
    "SERVICE ASSURANCE": "monitoring",
    "5G TEST STRATEGY": "nsa",
    "5G CORE": "upf",
    "5G-ADVANCED · 6G": "future",
    "MULTI-VENDOR": "multivendor",
    "INTEROPERABILITY": "interop",
    "LAB-TO-FIELD": "labfield",
  };
  const visualTopic = visualTopics[category];
  return <main className="articlePage">
    <header className="nav shell articleNav"><a className="brand" href={`${basePath}/`}><span className="brandMark">✣</span>emblasoft <b>KOREA</b></a><nav><a href={`${basePath}/`}>홈</a><a href={`${basePath}/blog/`}>전체 글</a></nav><a className="navCta" href="https://emblasoft.com/about/contact" target="_blank" rel="noreferrer">기술 문의</a></header>
    <article><section className="articleHero"><div className="articleShell"><p className="articleMeta">{category} <span>·</span> 2026.08.04 <span>·</span> {read} MIN READ</p><h1>{title}</h1><p className="articleDek">{dek}</p><div className="author"><b>BumJun Lee (BJ)</b><span>Emblasoft Korea</span></div></div></section>
      <div className="articleShell articleBody"><p className="articleLead">{lead}</p>
        {visualTopic && <ArticleVisuals topic={visualTopic} />}
        {sections.map((section, index) => <section key={section.title}><p className="sectionNo">{String(index + 1).padStart(2, "0")}</p><h2>{section.title}</h2>{section.paragraphs.map(p => <p key={p}>{p}</p>)}{section.points && <ul>{section.points.map(p => <li key={p}>{p}</li>)}</ul>}{section.quote && <blockquote>{section.quote}</blockquote>}</section>)}
        <section className="supportBox"><p className="sectionNo">EMBLASOFT KOREA</p><h2>시험 결과가 운영 판단으로 이어져야 합니다</h2><p>{closing}</p><div className="contactGrid"><div><small>AUTHOR</small><b>BumJun Lee (BJ)</b></div><div><small>OFFICIAL CONTACT</small><a href="https://emblasoft.com/about/contact" target="_blank" rel="noreferrer">Emblasoft 공식 문의 페이지</a></div></div></section>
      </div></article>
    <footer className="shell articleFooter"><div className="brand"><span className="brandMark">✣</span>emblasoft <b>KOREA</b></div><a href={`${basePath}/blog/`}>전체 글</a><small>© 2026 Emblasoft Korea</small></footer>
  </main>;
}
