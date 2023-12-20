import InviteCode from "./invite-code";

export default function Landing() {
  return (
    <section className="relative bg-background">

      {/* Illustration behind landing page */}
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Landing content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-24 md:pb-32 pt-24">
            <h1 className="text-5xl md:text-6xl text-white font-bold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">The L2 that helps you earn more <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">ETH</span></h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">The only Ethereum L2 with native yield for ETH and stablecoins. Airdrop now live.</p>
            </div>
          </div>
          <div className="pb-12 md:pb-16 flex justify-center">
            <InviteCode />
          </div>
        </div>

      </div>
    </section>
  )
}