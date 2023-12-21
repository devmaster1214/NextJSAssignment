'use client';

import { useState } from "react";
import VerificationInput from "react-verification-input";

export default function InviteCode () {
  const [inviteCode, setInviteCode] = useState<string>("");
  
  return (
      <div className="flex flex-col items-center justify-normal max-w-md gap-y-8 p-8 rounded-3xl border-sky-500 border-2" data-aos="fade-up" data-aos-delay="500">
        <p className="text-4xl font-bold leading-tight tracking-tighter text-[#2dd4bf] text-center">EARLY ACCESS AIRDROP</p>
        <p className="text-xl leading-tight tracking-tighter max-w-[256px] text-center text-secondary">Enter your invite code to claim your airdrop</p>
        <VerificationInput 
          value={inviteCode}
          onChange={setInviteCode}
          classNames={{
            character: "rounded-lg bg-transparent border-white text-primary",
          }}
          />
        <div className="max-w-xs mx-auto sm:max-w-none">
          <a className="btn text-white bg-primary hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0 uppercase" href="#0">Enter Invite Code</a>
        </div>
    </div>
  );
}