'use client'

import { useMetaMask } from "@/context/useMetaMask"; // Update the import path
import Image from "next/image";
import styles from './WalletIconDiv.module.css';
import { formatAddress } from "@/utils/index.js";
import SPDBalance from '@/components/SPDBalance/SPDBalance'


export default function Home() {
    const { wallet, connectMetaMask } = useMetaMask();



    return (

        <div className="text-white">
            {/* Render the connect wallet button if not connected */}
            {!wallet.accounts.length && (
                <h4 onClick={connectMetaMask}>
                    <Image className={styles.walletIcon} priority={true} src="/wallet.svg" alt="wallet" width={90} height={90} />
                    <span className={styles.connectWallet}>Connect</span>
                    <p className={styles.spdBalanceDisplay}>
                        <SPDBalance />
                    </p>
                </h4>
            )}

            {/* Render the connected wallet address if connected */}
            {wallet.accounts.length > 0 && (
                <h4>
                    <Image className={styles.walletIcon} src="/wallet.svg" alt="wallet" width={90} height={90} />
                    {/* addressAfterConnecting */}
                    <p className={styles.connectWallet}>{formatAddress(wallet.accounts[0])}</p>
                    <p className={styles.spdBalanceDisplay}>
                        <SPDBalance />
                    </p>
                </h4>
            )}
        </div>


    );
}







