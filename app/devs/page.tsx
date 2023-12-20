"use client";

import Link from "next/link";
import { useState } from "react";

export default function Devs() {
    const [seleted, codeSelect] = useState<Number>(0);
    return (
        <section className="relative bg-background">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                { /*  */ }
                <div className="flex flex-col-reverse justify-center items-center gap-x-16 lg:flex-row gap-y-16 pt-24">
                    <div className="flex flex-1 px-8" data-aos="zoom-in">
                        <img src="/images/techring.png" className="w-full"></img>
                    </div>
                    <div className="flex-1" data-aos="fade-left" data-aos-delay="500">
                        <h2 className="text-4xl lg:text-5xl text-primary font-bold leading-tight tracking-none pb-8">Build with yield</h2>
                        <p className="text-xl lg:text-3xl text-secondary font-semibold leading-tight pb-8">Blast is an L2 with native yield for ETH and stablecoins. Yield makes it possible to create new revenue streams and provide novel rewards for end-users.</p>
                    </div>
                </div>

                { /*  */ }
                <div className="flex flex-col items-start gap-y-16 pt-20">
                    <h2 className="text-4xl lg:text-5xl text-primary font-bold leading-tight tracking-none" data-aos="fade-up">An evm-compatible L2 designed to help you and your users earn more.</h2>
                    <div className="w-full flex flex-col lg:flex-row gap-4 items-start">
                        <div className="flex-1" data-aos="fade-right">
                            <div className="flex flex-row items-center gap-4 pb-4">
                                <img src="/images/eth.png" className="w-16"></img>
                                <h3 className="text-3xl text-primary font-semibold leading-tight uppercase">NATIVE YIELD</h3>
                            </div>
                            <p className="text-xl text-secondary font-medium leading-tight lg:pl-20">Yield as a primitive unlocks new business models for Dapps. ETH and stablecoins bridged to Blast automatically earn yield. Dapps can easily monetize deposits with a single config.</p>
                        </div>
                        <div className="flex-1" data-aos="fade-right" data-aos-delay="300">
                            <div className="flex flex-row items-center gap-4 pb-4">
                                <img src="/images/eth.png" className="w-16"></img>
                                <h3 className="text-3xl text-primary font-semibold leading-tight uppercase">GAS FEE REVENUE</h3>
                            </div>
                            <p className="text-xl text-secondary font-medium leading-tight  lg:pl-20">Other L2s keep revenue from gas fees for themselves. Blast gives this revenue back to developers programatically. Keep this revenue for yourself or use it to subsidize gas fees for your users.</p>
                        </div>
                        <div className="flex-1" data-aos="fade-right" data-aos-delay="600">
                            <div className="flex flex-row items-center gap-4 pb-4">
                                <img src="/images/eth.png" className="w-16"></img>
                                <h3 className="text-3xl text-primary font-semibold leading-tight uppercase">AIRDROP</h3>
                            </div>
                            <p className="text-xl text-secondary font-medium leading-tight lg:pl-20">50% of the Blast Airdrop has been reserved for developers. The Developer Airdrop launches in January along with the Blast Testnet.</p>
                        </div>
                    </div>
                </div>

                { /*  */ }
                <div className="flex flex-col items-start gap-y-8 pt-20">
                    <h2 className="text-4xl lg:text-5xl text-primary font-bold leading-tight tracking-none" data-aos="fade-up">If you've deployed on mainnet or any L2, you can easily deploy on Blast.</h2>
                    <h3 className="text-xl lg:text-3xl text-secondary font-semibold leading-tight" data-aos="fade-up">Blast is EVM equivalent, so you can build Dapps on Blast without learning a new toolkit. All your code, tools, and infrastructure work out of the box.</h3>
                    <div className="flex flex-row gap-8" data-aos="fade-up">
                        <div className={`p-4 text-xl text-primary font-semibold leading-tight rounded-3xl bg-primary hover:bg-sky-500 transition duration-300 cursor-pointer ${seleted == 0 && 'bg-secondary text-gray-950'}`} onClick={() => codeSelect(0)}>Automatic Yield</div>
                        <div className={`p-4 text-xl text-primary font-semibold leading-tight rounded-3xl bg-primary hover:bg-sky-500 transition duration-300 cursor-pointer ${seleted == 1 && 'bg-secondary text-gray-950'}`} onClick={() => codeSelect(1)}>Claimable Yield</div>
                        <div className={`p-4 text-xl text-primary font-semibold leading-tight rounded-3xl bg-primary hover:bg-sky-500 transition duration-300 cursor-pointer ${seleted == 2 && 'bg-secondary text-gray-950'}`} onClick={() => codeSelect(2)}>Earn Gas Free Revenue</div>
                    </div>
                    <div className="w-full flex flex-col items-center" data-aos="fade-up">
                        { seleted == 0
                            ? <img src="/images/code-1.png" alt="Developer code 1" className="rounded-2xl"></img>
                            : seleted == 1
                                ? <img src="/images/code-2.png" alt="Developer code 2" className="rounded-2xl"></img>
                                : <img src="/images/code-3.png" alt="Developer code 3" className="rounded-2xl"></img>
                        }
                    </div>
                    <p className="w-full text-3xl text-center text-primary font-semibold" data-aos="fade-up">Compatable with</p>
                    <div className="w-full flex flex-row justify-center items-center gap-8">
                        <img src="/images/letterhead/letterhead-hardhat.webp" alt="Hardhat"></img>
                        <img src="/images/letterhead/letterhead-foundry.webp" alt="foundry"></img>
                    </div>
                </div>

                { /*  */ }
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
                
                {/*  */}
                <div className="pt-20">
                    <h2 className="text-4xl lg:text-5xl text-primary font-bold leading-tight tracking-none pb-8" data-aos="fade-up">It's time to ditch other L2s</h2>
                    <h3 className="text-2xl text-secondary font-semibold leading-tight pb-16" data-aos="fade-up">Blast has the same features you love on other L2s while providing 10x more value.</h3>
                    <img src="/images/blast-l2-comparison_en.webp" alt="Blast L2 Comparison" className="w-full pb-16" data-aos="zoom-out"></img>
                </div>

                { /*  */ }
                <div className="flex flex-col items-start gap-y-16 pt-20">
                    <div className="w-full flex flex-col gap-16 items-start">
                        <div className="flex flex-col lg:flex-row items-center justify-stretch gap-8" data-aos="fade-right">
                            <div className="flex flex-row lg:flex-col items-center gap-8 min-w-[320px]">
                                <img src="/images/illustration-liquidity.webp" alt="Illustration-liquidity"></img>
                            </div>  
                            <div className="pl-4">
                                <h3 className="text-3xl text-secondary font-medium leading-tight pb-8">$938M LIQUIDITY WAITING FOR YOU</h3>
                                <p className="text-3xl text-primary font-medium leading-tight">82,669 users have deposited $938M to Blast in anticipation of the mainnet launch in February. When the Blast mainnet launches, the bridge contract will unlock and release all those users and funds to your dapps.</p>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row items-center justify-stretch gap-8" data-aos="fade-right">
                            <div className="flex flex-row lg:flex-col items-center gap-8 min-w-[320px]">
                                <img src="/images/illustration-airdrop.webp" alt="Illustration-airdrop"></img>
                            </div>  
                            <div className="pl-4">
                                <h3 className="text-3xl text-secondary font-medium leading-tight pb-8">BLAST DEVELOPER AIRDROP</h3>
                                <p className="text-3xl text-primary font-medium leading-tight">The Blast Developer Airdrop goes live in January, when the Blast Testnet launches. 50% of the Blast airdrop has been allocated for developers. Instructions on how to claim the airdrop and how it works will be shared upon testnet launch.</p>
                            </div>
                        </div>
                        <img src="/images/blast-timeline-devs.webp" alt="Blast timeline devs" className="w-full pb-16" data-aos="zoom-out"></img>
                        <div className="flex flex-col lg:flex-row items-center justify-stretch gap-8" data-aos="fade-right">
                            <div className="flex flex-row lg:flex-col items-center gap-8 min-w-[320px]">
                                <img src="/images/illustration-community.webp" alt="Illustration-community"></img>
                            </div>  
                            <div className="pl-4">
                                <h3 className="text-3xl text-secondary font-medium leading-tight pb-8">JOIN THE COMMUNITY</h3>
                                <p className="text-3xl text-primary font-medium leading-tight pb-8">In the meantime, join our developer community on Discord to learn more about Blast (also so you don't miss the airdrop).</p>
                                <Link href="/airdrop" className="btn-sm text-primary bg-sky-500 hover:bg-primary transition duration-300 px-8">
                                    <span className="text-xl uppercase tracking-widest font-semibold">Join Blast Discord</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Go to airdrop */}
                <div className="w-full flex flex-col items-center pt-20 pb-32" data-aos="zoom-in-down">
                    <h2 className="text-5xl text-primary leading-tight font-bold pb-8">Need More Info?</h2>
                    <p className="text-lg text-secondary leading-tight font-semibold max-w-2xl pb-8 text-center">More docs will be available when the Blast Developer Airdrop and Testnet launches in January. In the meantime, join our Discord to learn more.</p>
                    <Link href="/airdrop" className="btn-sm text-primary bg-sky-500 hover:bg-primary transition duration-300 px-8">
                        <span className="text-xl uppercase tracking-widest font-semibold">Join Blast Discord</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}