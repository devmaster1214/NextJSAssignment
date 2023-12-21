"use client";

import LeaderBoard from "@/components/leaderboard";
import RecentJoin from "@/components/recentjoin";

export default function Leaderboard() {
    return (
        <section className="relative bg-background h-[100vh]">
            <div className="absolute left-1/2 top-1/4 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="100vw" height="100vh" viewBox="0 0 1440 779" fill="none">
                <g filter="url(#filter0_f_4775_12747)">
                    <path d="M712.907 653.679C345.785 669.171 -113.638 440.656 -297.459 324.462L-435 579.783C-302.216 672.195 100.459 909 712.907 909C1313.59 909 1804.15 679.33 1975 538.504L1828.38 300C1609.52 411.438 1080.03 638.186 712.907 653.679Z" fill="url(#paint0_linear_4775_12747)"/>
                </g>
                <defs>
                    <filter id="filter0_f_4775_12747" x="-735" y="0" width="3010" height="1209" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_4775_12747"/>
                    </filter>
                    <linearGradient id="paint0_linear_4775_12747" x1="1698.26" y1="587.187" x2="-269.153" y2="554.677" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#9B0AF3"/>
                    <stop offset="1" stopColor="#1179FC"/>
                    </linearGradient>
                </defs>
                </svg>
            </div>

            <div className="px-6 lg:px-36 h-full flex">
                <div className="pt-12 md:pt-20 w-full h-full">
                    <div className="relative w-full h-full flex flex-col lg:flex-row-reverse justify-start lg:justify-center gap-4 lg:gap-24 py-4 lg:py-12">
                        <RecentJoin />
                        <LeaderBoard />
                    </div>
                </div>
            </div>
        </section>
    );
}