
export default function InviteCode () {
    return (
        <div className="flex flex-col items-center justify-normal max-w-md gap-y-8 p-8 rounded-3xl bg-opacity-50 backdrop-blur-lg bg-background" data-aos="zoom-y-out" data-aos-delay="500">
            <p className="text-4xl font-bold leading-tight tracking-tighter text-[#2dd4bf] text-center">EARLY ACCESS AIRDROP</p>
            <p className="text-xl leading-tight tracking-tighter max-w-[256px] text-center text-secondary">Enter your invite code to claim your airdrop</p>
            <div className="flex flex-row items-center gap-2">
              <div className="rounded-2xl border-2 border-white w-14 h-16"></div>
              <div className="rounded-2xl border-2 border-white w-14 h-16"></div>
              <div className="rounded-2xl border-2 border-white w-14 h-16"></div>
              <div className="rounded-2xl border-2 border-white w-14 h-16"></div>
              <div className="rounded-2xl border-2 border-white w-14 h-16"></div>
              <div className="rounded-2xl border-2 border-white w-14 h-16"></div>
            </div>
            <div className="max-w-xs mx-auto sm:max-w-none">
              <a className="btn text-white bg-primary hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0 uppercase" href="#0">Enter Invite Code</a>
            </div>
        </div>
    );
}