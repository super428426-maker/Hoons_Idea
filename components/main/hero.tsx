import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

/* ── SVG 아이콘 ── */
const SparklesSVG = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" className="fill-current" />
    <path d="M19 14L19.75 17.25L23 18L19.75 18.75L19 22L18.25 18.75L15 18L18.25 17.25L19 14Z" className="fill-current opacity-50" />
  </svg>
);

const ArrowRightSVG = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19M19 12L12 5M19 12L12 19" className="stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SearchSVG = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="11" cy="11" r="7" className="stroke-current stroke-2" />
    <path d="M20 20L16.65 16.65" className="stroke-current stroke-2" strokeLinecap="round" />
  </svg>
);

/* ── 지도 미리보기 컴포넌트 ── */
const MapPreview = () => (
  <div className="relative w-full h-full rounded-xl overflow-hidden border border-border shadow-md bg-muted min-h-[260px]">
    {/* 지도 배경 격자 패턴 */}
    <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M 24 0 L 0 0 0 24" fill="none" className="stroke-current stroke-[0.5]" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
      {/* 도로 */}
      <line x1="0" y1="40%" x2="100%" y2="40%" className="stroke-current stroke-[3px] opacity-40" />
      <line x1="0" y1="70%" x2="100%" y2="70%" className="stroke-current stroke-2 opacity-30" />
      <line x1="30%" y1="0" x2="30%" y2="100%" className="stroke-current stroke-[3px] opacity-40" />
      <line x1="65%" y1="0" x2="65%" y2="100%" className="stroke-current stroke-2 opacity-30" />
    </svg>

    {/* 지도 마커들 */}
    <MapMarker x="30%" y="38%" label="삼청동 갈비집" rating="4.8" highlighted />
    <MapMarker x="65%" y="42%" label="광화문 국밥" rating="4.5" />
    <MapMarker x="48%" y="62%" label="인사동 파스타" rating="4.6" />
    <MapMarker x="20%" y="65%" label="북촌 스시" rating="4.7" />
  </div>
);

const MapMarker = ({
  x,
  y,
  label,
  rating,
  highlighted = false,
}: {
  x: string;
  y: string;
  label: string;
  rating: string;
  highlighted?: boolean;
}) => (
  <div
    className="absolute -translate-x-1/2 -translate-y-full group"
    style={{ left: x, top: y }}
  >
    {/* 말풍선 툴팁 */}
    <div
      className={`
        absolute bottom-full left-1/2 -translate-x-1/2 mb-1
        opacity-0 group-hover:opacity-100 transition-opacity duration-150
        bg-background border border-border rounded-lg px-2 py-1 shadow-md
        whitespace-nowrap text-xs font-medium pointer-events-none z-20
        ${highlighted ? "opacity-100" : ""}
      `}
    >
      <p className="text-foreground">{label}</p>
      <p className="text-muted-foreground">★ {rating}</p>
    </div>
    {/* 핀 */}
    <svg
      width={highlighted ? 28 : 22}
      height={highlighted ? 36 : 28}
      viewBox="0 0 28 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-transform duration-200 ${highlighted ? "drop-shadow-md" : "opacity-70 hover:opacity-100 hover:scale-110"}`}
    >
      <path
        d="M14 0C6.268 0 0 6.268 0 14C0 24.5 14 36 14 36C14 36 28 24.5 28 14C28 6.268 21.732 0 14 0Z"
        className={highlighted ? "fill-primary" : "fill-muted-foreground"}
      />
      <circle cx="14" cy="14" r="6" className="fill-white" />
    </svg>
  </div>
);

/* ── 검색 조건 태그 ── */
const ConditionTag = ({ label }: { label: string }) => (
  <span className="inline-flex items-center gap-1 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground shadow-sm">
    {label}
  </span>
);

function Hero() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">

          {/* ── 왼쪽: 텍스트 영역 ── */}
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline" className="gap-1.5">
                <SparklesSVG />
                AI 맛집 탐색기
              </Badge>
            </div>

            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-['var(--font-noto-sans-kr)'] font-bold">
                조건만 말하면,{" "}
                <span className="relative inline-block z-10">
                  지도
                  <span className="absolute bottom-[0.1em] left-[-2%] w-[104%] h-[0.35em] bg-[#FEE500] dark:bg-[#FEE500]/80 -z-10 rounded-sm" />
                </span>
                에 찾아줘요
              </h1>
              <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left font-['var(--font-noto-sans-kr)'] font-light">
                "강남, 2인, 조용한 분위기, 예산 3만원" — idea가 웹을 검색해
                딱 맞는 식당을 찾아 지도에 바로 표시합니다.
              </p>
            </div>

            {/* 검색 조건 예시 태그들 */}
            <div className="flex flex-wrap gap-2">
              <ConditionTag label="📍 현재 위치 기반" />
              <ConditionTag label="👥 인원수" />
              <ConditionTag label="💰 예산" />
              <ConditionTag label="🌙 분위기" />
              <ConditionTag label="🍜 음식 종류" />
            </div>

            <div className="flex flex-row gap-4">
              <Button size="lg" className="gap-2" variant="outline">
                <SearchSVG />
                데모 체험하기
              </Button>
              <Button size="lg" className="gap-2">
                무료로 시작하기
                <ArrowRightSVG />
              </Button>
            </div>

            {/* 신뢰 지표 */}
            <div className="flex items-center gap-6 pt-2">
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight">12만+</span>
                <span className="text-xs text-muted-foreground">식당 탐색 완료</span>
              </div>
              <div className="w-px h-8 bg-border" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight">95%</span>
                <span className="text-xs text-muted-foreground">조건 일치율</span>
              </div>
              <div className="w-px h-8 bg-border" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight">5초</span>
                <span className="text-xs text-muted-foreground">평균 탐색 시간</span>
              </div>
            </div>
          </div>

          {/* ── 오른쪽: 지도 + 검색 결과 카드 ── */}
          <div className="grid grid-cols-2 gap-4">
            {/* 지도 미리보기 (상단 좌) */}
            <div className="col-span-2 relative">
              <MapPreview />
              {/* AI 탐색 중 뱃지 */}
              <div className="absolute top-3 left-3 bg-background border border-border rounded-lg px-3 py-1.5 shadow-md flex items-center gap-2 z-10">
                <div className="flex gap-0.5">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    />
                  ))}
                </div>
                <span className="text-xs font-medium whitespace-nowrap">AI 탐색 중...</span>
              </div>
            </div>

            {/* 검색 결과 카드 1 */}
            <ResultCard
              name="삼청동 갈비집"
              tags={["한식", "2인", "조용함"]}
              rating="4.8"
              price="₩₩"
              distance="도보 5분"
              highlighted
            />
            {/* 검색 결과 카드 2 */}
            <ResultCard
              name="광화문 국밥"
              tags={["한식", "혼밥 가능"]}
              rating="4.5"
              price="₩"
              distance="도보 8분"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const ResultCard = ({
  name,
  tags,
  rating,
  price,
  distance,
  highlighted = false,
}: {
  name: string;
  tags: string[];
  rating: string;
  price: string;
  distance: string;
  highlighted?: boolean;
}) => (
  <div
    className={`rounded-xl border p-3 flex flex-col gap-1.5 shadow-sm bg-background ${
      highlighted ? "border-foreground/30 ring-1 ring-foreground/10" : "border-border"
    }`}
  >
    <div className="flex items-start justify-between gap-1">
      <p className="text-sm font-semibold leading-tight">{name}</p>
      <span className="text-xs font-medium text-muted-foreground shrink-0">★ {rating}</span>
    </div>
    <div className="flex flex-wrap gap-1">
      {tags.map((t) => (
        <span key={t} className="text-[10px] bg-muted text-muted-foreground rounded px-1.5 py-0.5 font-medium">
          {t}
        </span>
      ))}
    </div>
    <div className="flex items-center justify-between mt-0.5">
      <span className="text-xs text-muted-foreground">{distance}</span>
      <span className="text-xs font-medium">{price}</span>
    </div>
  </div>
);

export { Hero };
