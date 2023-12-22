'use client';

import { useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
const people = [
  {
    id: 1,
    name: 'ETH'
  },
  {
    id: 2,
    name: 'YIELD'
  },
  {
    id: 3,
    name: 'USD'
  }
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Bridge () {
    const [method, methodSelect] = useState<string>("deposit");
    const [balance, setBalance] = useState<number>(0.004343142);
    const [bridged, setBridged] = useState<number>(0.0);
    const [selected, setSelected] = useState(people[0]);

    const handleChange = (e) => {
        const val = e.target.value;
        if (val > balance) setBridged(balance);
        else setBridged(val);
    }
    return (
        <div className="w-full flex flex-col md:flex-row md:justify-around items-center justify-start">
            <div className="flex flex-col items-start justify-normal max-w-md gap-y-8 p-8 rounded-3xl" data-aos="fade-up" data-aos-delay="300">
                <p className="text-4xl font-bold leading-tight tracking-tighter text-white text-center">Bridge to Earn Yield + <span className="text-main">Blast Points</span></p>
                <p className="text-2xl leading-tight tracking-tighter text-start text-primary">You can earn Blast Points by briding ETH or stablecoins. Points can be redeemed for REDACTED in May.</p>
                <p className="text-2xl leading-tight tracking-tighter text-start text-primary">You will earn more Points over time based on how much you bridge.</p>
                <p className="text-sm leading-tight tracking-tighter text-start text-secondary pt-8 md:pt-40">Withdrawing from the bridge will be available after the Blast Mainnet launches in February.</p>
            </div>
            <div className="relative flex flex-col max-w-md px-8 py-2 rounded-2xl bg-gray-900 border border-gray-500" data-aos="fade-left" data-aos-delay="500">
                <div className="w-full flex items-start justify-center gap-8">
                    <div
                        className={`ml-4 uppercase py-4 border-b-[2px] text-3xl transition duration-300 cursor-pointer ${method == 'deposit' ? 'text-main border-primary' : 'text-primary border-white'}`}
                        onClick={() => methodSelect("deposit")}
                    >
                        Deposit
                    </div>
                    <div
                        className={`mr-4 uppercase py-4 border-b-[2px] text-3xl transition duration-300 cursor-pointer ${method == 'withdraw' ? 'text-main border-primary' : 'text-primary border-white'}`}
                        onClick={() => methodSelect("withdraw")}
                    >
                        Withdraw
                    </div>
                </div>
                <div className="border border-gray-500 mt-8 mb-4 p-4">
                    <div className="pb-4">
                        <p className="text-2xl text-primary"><span className="text-white font-bold">From:</span> Ethereum</p>
                    </div>
                    <div className="border text-5xl border-gray-400 rounded-md flex items-center gap-1">
                        <input type="text" className="w-[calc(100%-70px)] bg-transparent outline-none text-white text-center" placeholder="0.0" value={bridged} onChange={handleChange}/>
                        <Listbox value={selected} onChange={setSelected}>
                        {({ open }) => (
                            <>
                            <div className="relative">
                                <Listbox.Button className="relative w-[120px] h-[70px] cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6">
                                <span className="flex items-center">
                                    <span className="ml-3 block truncate text-xl">{selected.name}</span>
                                </span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                    <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </span>
                                </Listbox.Button>

                                <Transition
                                    show={open}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                        {people.map((person) => (
                                        <Listbox.Option
                                            key={person.id}
                                            className={({ active }) =>
                                            classNames(
                                                active ? 'bg-primary text-white' : 'text-gray-900',
                                                'relative cursor-default select-none py-2 pl-3 pr-9'
                                            )
                                            }
                                            value={person}
                                        >
                                            {({ selected, active }) => (
                                            <>
                                                <div className="flex items-center">
                                                <span
                                                    className={classNames(selected ? 'font-semibold' : 'font-normal', 'text-xl ml-3 block truncate')}
                                                >
                                                    {person.name}
                                                </span>
                                                </div>

                                                {selected ? (
                                                <span
                                                    className={classNames(
                                                    active ? 'text-white' : 'text-main',
                                                    'absolute inset-y-0 right-0 flex items-center pr-4'
                                                    )}
                                                >
                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                </span>
                                                ) : null}
                                            </>
                                            )}
                                        </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </Transition>
                            </div>
                            </>
                        )}
                        </Listbox>
                    </div>
                    <div className="text-secondary text-lg pt-2 flex items-center gap-4">
                        <p>Balance  <span className="text-primary text-xl font-bold">{balance.toFixed(5)}</span></p>
                        <a className="font-bold text-main text-xl hover:text-blue-300 cursor-pointer transition duration-300" onClick={() => setBridged(balance)}>MAX</a>
                    </div>
                    <div className="pt-8">
                        <p className="text-2xl text-primary"><span className="text-white font-bold">To:</span> Blast L2</p>
                    </div>
                    <div className="pt-2">
                        <p className="text-xl text-secondary">You will receive <span className="text-primary font-bold">{bridged} {selected.name}</span> + Yield + Spina for Points</p>
                    </div>
                </div>
                <div className="btn mt-4 mb-8 text-white border border-gray-500 cursor-pointer hover:bg-gray-700 transition duration-300">SUBMIT</div>
            </div>
        </div>
    );
}