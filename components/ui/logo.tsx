import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <div className="flex flex-row items-center gap-2">
        <svg className="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient cx="21.152%" cy="86.063%" fx="21.152%" fy="86.063%" r="79.941%" id="footer-logo">
              <stop stopColor="#4FD1C5" offset="0%" />
              <stop stopColor="#81E6D9" offset="25.871%" />
              <stop stopColor="#338CF5" offset="100%" />
            </radialGradient>
          </defs>
          <rect width="32" height="32" rx="16" fill="url(#footer-logo)" fillRule="nonzero" />
        </svg>
        <h1 className="font-logo text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 tracking-wide">
          Next JS
        </h1>
      </div>
    </Link>
  )
}
