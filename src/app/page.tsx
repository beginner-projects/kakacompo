'use client'

import WalletIconDiv from "@/components/WalletIconDiv/WalletIconDiv"
import FlashIconDiv from "@/components/FlashIconDiv/FlashIconDiv"
import BitcoinBalanceDiv from "@/components/BitcoinBalanceDiv/BitcoinBalanceDiv"
import Background from "@/components/Background/Background"


export default function Home() {
    return (
        <main className="overflow-hidden">
            <WalletIconDiv />
            <FlashIconDiv />
            <BitcoinBalanceDiv />
            <Background />
        </main>
    );
}







