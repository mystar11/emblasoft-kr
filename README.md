# Emblasoft Korea Tech Blog

한국 시장을 위한 Emblasoft 소개 및 네트워크 테스팅 기술 블로그입니다.

- 기업 및 솔루션 소개
- 5G E2E 시험, UE 에뮬레이션, 트래픽 모델링 기술 아티클
- 반응형 웹 디자인
- GitHub Pages 자동 배포
- 정적 사이트 출력

게시 방법과 글 추가 방법은 [TECH_BLOG_GUIDE.md](TECH_BLOG_GUIDE.md)를 참고하세요.

## 로컬 실행

Node.js 22 이상이 필요합니다.

```bash
npm ci
npm run dev
```

## 정적 사이트 빌드

```bash
npm run build
```

`main` 브랜치에 커밋하면 GitHub Actions가 빌드 결과를 GitHub Pages에 자동 배포합니다.
