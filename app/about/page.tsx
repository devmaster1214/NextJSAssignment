import Link from "next/link";

export default function About() {
    return (
        <section className="relative bg-background">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                { /* About Next.js content */ }
                <div className="flex flex-col-reverse justify-center items-center gap-x-16 lg:flex-row gap-y-16 pt-24">
                    <div className="flex flex-1 px-8" data-aos="zoom-in">
                        <img src="/images/nextjs.png" className="w-full"></img>
                    </div>
                    <div className="flex-1" data-aos="fade-left" data-aos-delay="500">
                        <h2 className="text-4xl lg:text-5xl text-primary font-bold leading-tight tracking-none pb-8">Next.js helps you to build best website</h2>
                        <p className="text-xl lg:text-3xl text-secondary font-semibold leading-tight pb-8">Next. js helps improve SEO visibility by enabling server-side rendering</p>
                        <p className="text-xl lg:text-3xl text-secondary font-semibold leading-tight pb-8 uppercase">Backed by</p>
                        <div className="flex flex-row gap-x-16">
                            <img src="/images/node-logo.png" alt="NextJS" className="h-16"></img>
                            <img src="/images/tailwind-logo.png" alt="TailwindCSS" className="h-16"></img>
                        </div>
                    </div>
                </div>

                { /* Next vs React content */ }
                <div className="flex flex-col items-start gap-y-8 pt-20">
                    <h2 className="text-4xl lg:text-5xl text-primary font-bold leading-tight tracking-none" data-aos="fade-up">The major difference between Next JS and React JS is performance.</h2>
                    <h3 className="text-xl lg:text-3xl text-secondary font-semibold leading-tight" data-aos="fade-up">If we talk about Next. js applications, they are extremely fast because of the static destinations and server-side rendering.</h3>
                    <div className="w-full flex flex-col items-center px-8" data-aos="zoom-in-up">
                        <img src="/images/nextvsreact.webp"></img>
                    </div>
                </div>
                
                { /* How Next.js work content */ }
                <div className="flex flex-col items-start gap-y-16 pt-20">
                    <h2 className="text-4xl lg:text-5xl text-primary font-bold leading-tight tracking-none" data-aos="fade-up">How Next.js work?</h2>
                    <div className="w-full flex flex-col lg:flex-row gap-4 items-start">
                        <div className="flex-1" data-aos="fade-right">
                            <div className="flex flex-row items-center gap-4 pb-4">
                                <img src="/images/vite-logo.png" className="w-16"></img>
                                <h3 className="text-3xl text-primary font-semibold leading-tight uppercase">Vite</h3>
                            </div>
                            <p className="text-xl text-secondary font-medium leading-tight lg:pl-20">Our Next.js project migrated on Vite so improved speed and efficiency. Vite uses a faster build process and a unique approach to code splitting, which results in faster build times and faster load times for the end-user.</p>
                        </div>
                        <div className="flex-1" data-aos="fade-right" data-aos-delay="300">
                            <div className="flex flex-row items-center gap-4 pb-4">
                                <img src="/images/vite-logo.png" className="w-16"></img>
                                <h3 className="text-3xl text-primary font-semibold leading-tight uppercase">Vite</h3>
                            </div>
                            <p className="text-xl text-secondary font-medium leading-tight  lg:pl-20">Our Next.js project migrated on Vite so improved speed and efficiency. Vite uses a faster build process and a unique approach to code splitting, which results in faster build times and faster load times for the end-user.</p>
                        </div>
                        <div className="flex-1" data-aos="fade-right" data-aos-delay="600">
                            <div className="flex flex-row items-center gap-4 pb-4">
                                <img src="/images/vite-logo.png" className="w-16"></img>
                                <h3 className="text-3xl text-primary font-semibold leading-tight uppercase">Vite</h3>
                            </div>
                            <p className="text-xl text-secondary font-medium leading-tight lg:pl-20">Our Next.js project migrated on Vite so improved speed and efficiency. Vite uses a faster build process and a unique approach to code splitting, which results in faster build times and faster load times for the end-user.</p>
                        </div>
                    </div>
                    <p className="text-xl text-secondary font-medium leading-tight lg:mt-12" data-aos="fade-down">In the future, Next.js will provide built-in support for internationalization, simplifying the process of building and maintaining multilingual websites.</p>
                </div>

                { /* Why Next.js new content */ }
                <div className="flex flex-col items-start gap-y-8 pt-20">
                    <h2 className="text-4xl lg:text-5xl text-primary font-bold leading-tight tracking-none" data-aos="fade-up">Why a new Next.js?</h2>
                    <h3 className="text-xl lg:text-2xl text-secondary font-semibold leading-tight" data-aos="fade-up">The risk-free rate on existing Next.js is 0%. It's time to change that</h3>
                    <div className="w-full flex flex-col lg:flex-row gap-16 items-start">
                        <div className="border-l-2 border-primary" data-aos="fade-right">
                            <p className="text-xl text-primary font-medium leading-tight pl-4">Our Next.js project migrated on Vite so improved speed and efficiency. Vite uses a faster build process and a unique approach to code splitting, which results in faster build times and faster load times for the end-user.</p>
                        </div>
                        <div className="border-l-2 border-primary" data-aos="fade-right" data-aos-delay="300">
                            <p className="text-xl text-primary font-medium leading-tight pl-4">Our Next.js project migrated on Vite so improved speed and efficiency. Vite uses a faster build process and a unique approach to code splitting, which results in faster build times and faster load times for the end-user.</p>
                        </div>
                    </div>
                    <p className="text-xl text-secondary font-medium leading-tight lg:mt-12" data-aos="fade-down">In the future, Next.js will provide built-in support for internationalization, simplifying the process of building and maintaining multilingual websites.</p>
                </div>
                
                { /* Who we are */ }
                <div className="flex flex-col items-start gap-y-16 pt-20">
                    <h2 className="text-4xl lg:text-5xl text-primary font-bold leading-tight tracking-none" data-aos="fade-up">Who we are</h2>
                    <div className="w-full flex flex-col gap-16 items-start">
                        <div className="flex flex-col lg:flex-row items-center justify-stretch gap-8" data-aos="fade-right">
                            <div className="flex flex-row lg:flex-col items-center gap-8 min-w-[400px]">
                                <img src="/images/letterhead/letterhead-pacman.webp" alt="Pacman" className="h-10 w-auto"></img>
                                <img src="/images/letterhead/letterhead-blur.webp" alt="Blur" className="h-10 w-auto"></img>
                            </div>
                            <div className="self-stretch hidden lg:block lg:w-1.5 lg:h-auto bg-primary"></div>
                            <div className="border-primary">
                                <p className="text-xl text-primary font-medium leading-tight pl-4">Our Next.js project migrated on Vite so improved speed and efficiency. Vite uses a faster build process and a unique approach to code splitting, which results in faster build times and faster load times for the end-user.</p>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row items-center justify-stretch gap-8" data-aos="fade-left">
                            <div className="flex flex-row lg:flex-col flex-wrap justify-center items-center gap-8 min-w-[400px]">
                                <img src="/images/letterhead/letterhead-mit.webp" alt="Mit" className="h-10 w-auto"></img>
                                <img src="/images/letterhead/letterhead-ntu.webp" alt="Ntu" className="h-10 w-auto"></img>
                                <img src="/images/letterhead/letterhead-snu.webp" alt="Snu" className="h-10 w-auto"></img>
                                <img src="/images/letterhead/letterhead-yc.webp" alt="Yc " className="h-10 w-auto"></img>
                                <img src="/images/letterhead/letterhead-makerdao.webp" alt="Makerdao" className="h-10 w-auto"></img>
                            </div>
                            <div className="self-stretch hidden lg:block lg:w-1.5 lg:h-auto bg-primary"></div>
                            <div className="border-primary">
                                <p className="text-xl text-primary font-medium leading-tight pl-4">Our Next.js project migrated on Vite so improved speed and efficiency. Vite uses a faster build process and a unique approach to code splitting, which results in faster build times and faster load times for the end-user.</p>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row items-center justify-stretch gap-8" data-aos="fade-right">
                            <div className="flex flex-row lg:flex-col items-center gap-8 min-w-[400px]">
                                <img src="/images/letterhead/letterhead-paradigm.webp" alt="paradigm" className="h-10 w-auto"></img>
                                <img src="/images/letterhead/letterhead-standard-crypto.webp" alt="Standard-crypto" className="h-10 w-auto"></img>
                            </div>
                            <div className="self-stretch hidden lg:block lg:w-1.5 lg:h-auto bg-primary"></div>
                            <div className="border-primary">
                                <p className="text-xl text-primary font-medium leading-tight pl-4">Our Next.js project migrated on Vite so improved speed and efficiency. Vite uses a faster build process and a unique approach to code splitting, which results in faster build times and faster load times for the end-user.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Airdrop timeline */}
                <div className="pt-20">
                    <h2 className="text-4xl lg:text-5xl text-primary font-bold leading-tight tracking-none pb-8" data-aos="fade-up">Airdrop timeline</h2>
                    <h3 className="text-2xl text-secondary font-semibold leading-tight pb-8" data-aos="fade-up">The Blast Community Airdrop is split between Early Access Members (50%) and Developers (50%).</h3>
                    <p className="text-xl text-primary font-semibold leading-tight max-w-3xl pb-16" data-aos="fade-up">The Early Access airdrop is now live. You can earn airdrop points by bridging to Blast and inviting friends. Airdrop points can be redeemed in May.</p>
                    <img src="/images/blast-timeline-about.webp" className="w-full pb-16" data-aos="zoom-out"></img>
                    <p className="text-xl text-primary font-semibold leading-tight pb-16" data-aos="fade-down">The developer airdrop goes live in January when the Blast Testnet launches. Learn more in our <Link href="/devs" className=" text-blue-600 font-bold transition duration-300 hover:text-blue-300">developer docs.</Link></p>
                </div>

                {/* Go to airdrop */}
                <div className="w-full flex flex-col items-center pt-20 pb-32" data-aos="zoom-in-down">
                    <h2 className="text-5xl text-primary leading-tight font-bold pb-8">Have an Early Access Invite?</h2>
                    <Link href="/" className="btn-sm text-primary bg-sky-500 hover:bg-primary transition duration-300 px-8">
                        <span className="text-xl uppercase tracking-widest font-semibold">Claim your airdrop</span>
                    </Link>
                    <p className="text-lg text-secondary leading-tight font-semibold pt-8 text-center"><Link href="/devs" className="font-bold text-blue-600 hover:text-blue-300 transition duration-300">Click here</Link> if you're a developer</p>
                </div>
            </div>
        </section>
    );
}