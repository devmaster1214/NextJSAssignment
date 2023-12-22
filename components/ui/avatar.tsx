'use client';

import { useState, useRef, Fragment } from "react";
import { Dialog, Transition } from '@headlessui/react'

let userName = "hero";

export default function Avatar () {
    const [points, setPoints] = useState<Number>(0);
    const [username, setUsername] = useState<string>(userName);
    const [userid, setUserid] = useState<string>("0x7c3b390a3");

    const [open, setOpen] = useState(false);
  
    const cancelButtonRef = useRef(null);


    return (
        <>
            <div className="hidden lg:flex flex-row items-center gap-4">
                <p className="hidden xl:block text-xl text-primary uppercase pr-4">{points} points</p>
                <img src="/images/avatar/user.png" className="w-12 rounded-full cursor-pointer" onClick={() => setOpen(true) }/>
                <div>
                    <p className="text-xl text-primary">{userName}</p>
                    <p className="text-lg text-secondary">{userid}</p>
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

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
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
                                            Edit profile
                                        </Dialog.Title>
                                        <div className="mt-8">
                                            <div className="flex items-center justify-center">
                                                <img src="/images/avatar/user.png" className="w-48 rounded-full my-4"/>
                                            </div>
                                            <div className="px-8">
                                                <input type="text" className="w-full p-2 text-xl text-center text-gray-500 focus:text-black border border-gray-400 outline-none rounded-md" value={username} onChange={(e) => setUsername(e.target.value) }/>
                                            </div>
                                            <div className="w-full flex justify-center py-4">
                                                <div className="btn px-4 py-2 text-xl text-white cursor-pointer bg-blue-700 hover:bg-primary uppercase" onClick={() => { userName = username; setOpen(false); } }>Save changes</div>
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