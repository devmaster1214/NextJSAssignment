'use client';

import { useState, useRef, Fragment } from "react";
import { Dialog, Transition } from '@headlessui/react'
import VerificationInput from "react-verification-input";
import { useRouter } from "next/navigation";

export default function InviteCode () {
  const [inviteCode, setInviteCode] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(true);
  const router = useRouter();
  
  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);
  
  return (
    <>
      <div className="flex flex-col items-center justify-normal max-w-md gap-y-8 p-8 rounded-3xl border-sky-500 border-2" data-aos="fade-up" data-aos-delay="500">
        <p className="text-4xl font-bold leading-tight tracking-tighter text-[#2dd4bf] text-center">EARLY ACCESS AIRDROP</p>
        <p className="text-xl leading-tight tracking-tighter max-w-[256px] text-center text-secondary">Enter your invite code to claim your airdrop</p>
        <VerificationInput 
          value={inviteCode}
          onChange={(e) => { setInviteCode(e); setDisabled(true); } }
          onComplete={()=> setDisabled(false) }
          classNames={{
            character: "rounded-lg bg-transparent border-white text-primary",
          }}
          />
        <div className="max-w-xs mx-auto sm:max-w-none flex flex-col items-center">
          <button className={`btn text-white w-full mb-4 sm:w-auto sm:mb-0 uppercase ${disabled ? 'bg-blue-300 cursor-default' : 'bg-blue-700 hover:bg-primary' }`} onClick={() => router.push('/airdrop') } disabled={disabled}>Enter Invite Code</button>
          <p className="text-secondary text-md pt-4">OR</p>
          <p className="text-white text-3xl font-bold py-2 uppercase">Already joined?</p>
          <button className="btn text-white w-full bg-teal-500 hover:bg-secondary mb-4 sm:w-auto sm:mb-0" onClick={() => setOpen(true) }>Connect Wallet to Continue</button>
        </div>
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
            <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                      <div className="w-full">
                          <div className="mt-3 text-center sm:mt-0 sm:text-left">
                            <Dialog.Title as="h2" className="text-2xl font-semibold leading-6 text-gray-900 uppercase text-center">
                              Connect a Wallet
                            </Dialog.Title>
                            <div>
                              <p className="text-lg text-secondary pt-6 pb-2">Recommended</p>
                              <div className="flex flex-col items-start gap-4">
                                <a className="btn-sm w-full rounded-md justify-start gap-2 cursor-pointer hover:bg-primary" href="/airdrop">
                                  <img src="/images/metamask.png" className="w-6 rounded-md"/>
                                  <p className="font-bold text-xl font-gray-900">MetaMask</p>
                                </a>
                                <a className="btn-sm w-full rounded-md justify-start gap-2 cursor-pointer hover:bg-primary" href="/airdrop">
                                  <img src="/images/wallet.svg" className="w-6 rounded-md"/>
                                  <p className="font-bold text-xl font-gray-900">WalletConnect</p>
                                </a>
                              </div>
                              <div className="w-full flex items-center justify-between pt-6 pb-2">
                                <p className="text-lg text-secondary">New to Ethereum wallets?</p>
                                <p className="text-lg text-main font-bold hover:text-blue-400 cursor-pointer">Learn more</p>
                              </div>
                            </div>
                          </div>
                      </div>
                  </div>
                </Dialog.Panel>
                </Transition.Child>
            </div>
            </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}