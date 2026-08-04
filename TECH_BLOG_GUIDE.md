# Emblasoft Korea Tech Blog 운영 가이드

## GitHub Pages 게시

1. GitHub에서 새 저장소를 만듭니다. 예: `emblasoft-korea-tech-blog`
2. 이 폴더의 전체 파일을 저장소 `main` 브랜치에 올립니다.
3. 저장소의 **Settings → Pages → Build and deployment → Source**를 **GitHub Actions**로 선택합니다.
4. `Actions` 탭의 **Deploy Emblasoft Korea Tech Blog** 작업이 완료되면 Pages 주소로 접속합니다.

저장소 이름이 `계정명.github.io`이면 루트 주소에, 그 외에는 `계정명.github.io/저장소명/`에 자동 게시됩니다.

## 기술 글 추가

현재 글은 `app/blog/<영문-slug>/page.tsx`에 있습니다.

1. 기존 글 폴더를 복사해 새 영문 slug로 이름을 바꿉니다.
2. 제목, 날짜, 요약, 본문을 수정합니다.
3. `app/blog/page.tsx`의 `posts` 배열 상단에 새 글 정보를 추가합니다.
4. 변경사항을 `main`에 올리면 자동으로 다시 게시됩니다.

권장 카테고리: `5G E2E TEST`, `PRIVATE 5G`, `UE EMULATION`, `MONITORING`, `AUTOMATION`, `5G-ADVANCED & 6G`.

## 로컬 확인

Node.js 22 이상에서 다음 명령을 사용합니다.

```bash
npm ci
npm run dev
```

정적 게시 결과 확인:

```bash
npx next build
```

결과는 `out/` 폴더에 생성됩니다.

## 공개 전 확인

- Emblasoft 본사의 로고·브랜드 및 `Emblasoft Korea` 표기 승인
- 작성자 직함과 연락처
- 공식 제품 사양과 표현
- 개인정보처리방침 및 분석 도구 사용 여부
