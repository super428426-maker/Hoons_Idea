import Image from "next/image";
import { NaverMapLogo, KakaoMapLogo, GoogleMapLogo } from "./map-icons";

/* ── 지도 서비스 로고 이미지 ── */


function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* 로고 */}
          <div className="flex items-center gap-2">
            <span className="text-xl font-black tracking-tight">idea</span>
            <span className="text-xs text-muted-foreground font-medium hidden sm:block">
              AI 맛집 탐색기
            </span>
          </div>

          {/* 지도 서비스 버튼들 */}
          <nav className="flex items-center gap-1">
            <MapButton label="Naver">
              <NaverMapLogo />
            </MapButton>
            <MapButton label="Kakao">
              <KakaoMapLogo />
            </MapButton>
            <MapButton label="Google">
              <GoogleMapLogo />
            </MapButton>
          </nav>
        </div>
      </div>
    </header>
  );
}

function MapButton({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  return (
    <button
      aria-label={`${label} Map으로 보기`}
      className="
        flex items-center gap-1.5 rounded-lg px-3 py-2
        text-foreground/80 hover:text-foreground
        hover:bg-foreground/5 active:bg-foreground/10
        transition-all duration-150 cursor-pointer
        border border-transparent hover:border-border
      "
    >
      {children}
    </button>
  );
}

export { Navbar };
