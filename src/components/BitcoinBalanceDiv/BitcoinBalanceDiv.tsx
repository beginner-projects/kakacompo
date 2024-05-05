'use client'

import { usePool } from "@/context/useBitcoinContext";
import styles from './BitcoinBalanceDiv.module.css';

export default function Home() {
    const { bitcoinPoolBalance } = usePool();

    // Function to format balance with commas remains unchanged
    const formatBalanceWithCommas = (bitcoinPoolBalance: number | null) => {
        if (bitcoinPoolBalance !== null) {
            return bitcoinPoolBalance.toLocaleString();
        } else {
            return "00"; // Or whatever default value you prefer
        }
    };

    // Determine the length of bitcoinPoolBalance
    const balanceLength = bitcoinPoolBalance ? bitcoinPoolBalance.toString().length : 0;

    return (

        <>
            {/* Render bitcoin pool balance */}
            <p className={styles.subTagBitcoinPool}>Bitcoin Pool (sats)</p>
            {/* Retain existing h1 styling and add length-based class */}
            <h1 className={`${styles.poolBalance} ${styles[`poolBalance${balanceLength}`]}`}>
                {formatBalanceWithCommas(bitcoinPoolBalance)}
            </h1>
        </>


    );
}







