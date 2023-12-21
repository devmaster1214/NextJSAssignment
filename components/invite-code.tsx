'use client';

import { useState } from "react";

export default function InviteCode () {
  const [inviteCode, setInviteCode] = useState<string>("");
  
  return (
      <div className="flex flex-col items-center justify-normal max-w-md gap-y-8 p-8 rounded-3xl border-sky-500 border-2" data-aos="fade-up" data-aos-delay="500">
        <p className="text-4xl font-bold leading-tight tracking-tighter text-[#2dd4bf] text-center">EARLY ACCESS AIRDROP</p>
        <p className="text-xl leading-tight tracking-tighter max-w-[256px] text-center text-secondary">Enter your invite code to claim your airdrop</p>
        <input type="text" value={inviteCode} onChange={(e) => setInviteCode(e.target.value)} className="max-w-[240px] text-center text-4xl text-primary py-2 border-b-2 border-text uppercase bg-transparent focus-visible:outline-none focus:border-primary transition duration-300"></input>
        <div className="max-w-xs mx-auto sm:max-w-none">
          <a className="btn text-white bg-primary hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0 uppercase" href="#0">Enter Invite Code</a>
        </div>
    </div>
  );
}