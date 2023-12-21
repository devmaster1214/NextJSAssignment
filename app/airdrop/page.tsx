"use client";

import InviteCode from "@/components/invite-code";
import Link from "next/link";
import { useState } from "react";

export default function Airdrop() {
    return (
        <section className="relative bg-background">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <InviteCode />
            </div>
        </section>
    );
}