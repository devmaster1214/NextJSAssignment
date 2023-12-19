
export default function About() {
    return (
        <section className="relative bg-background">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                { /* About Next.js content */ }
                <div className="flex flex-col-reverse justify-center items-center gap-x-16 lg:flex-row gap-y-16 pt-24">
                    <div className="flex flex-1 px-8">
                        <img src="/nextjs.png" className="w-full"></img>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-4xl lg:text-5xl text-primary font-bold leading-tight tracking-none pb-8">Next.js helps you to build best website</h2>
                        <p className="text-xl lg:text-3xl text-secondary font-semibold leading-tight pb-8">Next. js helps improve SEO visibility by enabling server-side rendering</p>
                        <p className="text-xl lg:text-3xl text-secondary font-semibold leading-tight pb-8 uppercase">Backed by</p>
                        <div className="flex flex-row gap-x-16">
                            <img src="/node-logo.png" alt="NextJS" className="h-16"></img>
                            <img src="/tailwind-logo.png" alt="TailwindCSS" className="h-16"></img>
                        </div>
                    </div>
                </div>

                { /* Next vs React content */ }
                <div className="flex flex-col items-start gap-y-8 pt-20">
                    <h2 className="text-4xl lg:text-5xl text-primary font-bold leading-tight tracking-none">The major difference between Next JS and React JS is performance.</h2>
                    <p className="text-xl lg:text-3xl text-secondary font-semibold leading-tight">If we talk about Next. js applications, they are extremely fast because of the static destinations and server-side rendering.</p>
                    <div className="w-full flex flex-col items-center px-8">
                        <img src="/nextvsreact.webp"></img>
                    </div>
                </div>
                
                { /* How Next.js work content */ }
                <div className="flex flex-col items-start gap-y-16 pt-20">
                    <h2 className="text-4xl lg:text-5xl text-primary font-bold leading-tight tracking-none">How Next.js work?</h2>
                    <div className="w-full flex flex-col lg:flex-row gap-4 items-start">
                        <div className="flex-1">
                            <div className="flex flex-row items-center gap-4 pb-4">
                                <img src="/vite-logo.png" className="w-16"></img>
                                <h3 className="text-3xl text-primary font-semibold leading-tight uppercase">Vite</h3>
                            </div>
                            <p className="text-xl text-secondary font-medium leading-tight lg:pl-20">Our Next.js project migrated on Vite so improved speed and efficiency. Vite uses a faster build process and a unique approach to code splitting, which results in faster build times and faster load times for the end-user.</p>
                        </div>
                        <div className="flex-1">
                            <div className="flex flex-row items-center gap-4 pb-4">
                                <img src="/vite-logo.png" className="w-16"></img>
                                <h3 className="text-3xl text-primary font-semibold leading-tight uppercase">Vite</h3>
                            </div>
                            <p className="text-xl text-secondary font-medium leading-tight  lg:pl-20">Our Next.js project migrated on Vite so improved speed and efficiency. Vite uses a faster build process and a unique approach to code splitting, which results in faster build times and faster load times for the end-user.</p>
                        </div>
                        <div className="flex-1">
                            <div className="flex flex-row items-center gap-4 pb-4">
                                <img src="/vite-logo.png" className="w-16"></img>
                                <h3 className="text-3xl text-primary font-semibold leading-tight uppercase">Vite</h3>
                            </div>
                            <p className="text-xl text-secondary font-medium leading-tight lg:pl-20">Our Next.js project migrated on Vite so improved speed and efficiency. Vite uses a faster build process and a unique approach to code splitting, which results in faster build times and faster load times for the end-user.</p>
                        </div>
                    </div>
                    <p className="text-xl text-secondary font-medium leading-tight lg:mt-12">In the future, Next.js will provide built-in support for internationalization, simplifying the process of building and maintaining multilingual websites.</p>
                </div>

                { /* Why Next.js new content */ }
                <div className="flex flex-col items-start gap-y-8 pt-20 pb-16">
                    <h2 className="text-4xl lg:text-5xl text-primary font-bold leading-tight tracking-none">Why a new Next.js?</h2>
                    <p className="text-xl lg:text-2xl text-secondary font-semibold leading-tight">The risk-free rate on existing Next.js is 0%. It's time to change that</p>
                    <div className="w-full flex flex-col lg:flex-row gap-16 items-start">
                        <div className="border-l-2 border-primary">
                            <p className="text-xl text-primary font-medium leading-tight pl-4">Our Next.js project migrated on Vite so improved speed and efficiency. Vite uses a faster build process and a unique approach to code splitting, which results in faster build times and faster load times for the end-user.</p>
                        </div>
                        <div className="border-l-2 border-primary">
                            <p className="text-xl text-primary font-medium leading-tight pl-4">Our Next.js project migrated on Vite so improved speed and efficiency. Vite uses a faster build process and a unique approach to code splitting, which results in faster build times and faster load times for the end-user.</p>
                        </div>
                    </div>
                    <p className="text-xl text-secondary font-medium leading-tight lg:mt-12">In the future, Next.js will provide built-in support for internationalization, simplifying the process of building and maintaining multilingual websites.</p>
                </div>
            </div>
        </section>
    );
}