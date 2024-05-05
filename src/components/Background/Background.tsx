import styles from "./Background.module.css"
import Image from "next/image"

export default function Home() {
    return (
        <>
            {/* Render background images */}
            <Image className={styles.bgCircle} priority src="/darkmodebg.svg" alt="bg" width={450} height={50} />
            <Image className={styles.bgCircle768} priority src="/768bg.svg" alt="bg" width={768} height={656} />
            <Image className={styles.bgCircle1024} priority src="/1024bg.svg" alt="bg" width={1024} height={1024} />
            <Image className={styles.bgCircle1440} priority src="/1440bg.svg" alt="bg" width={1440} height={1440} />
        </>
    )
}