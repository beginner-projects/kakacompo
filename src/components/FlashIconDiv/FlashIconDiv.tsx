
import Image from "next/image";
import styles from './FlashIconDiv.module.css';



export default function Home() {


    return (
        <>
            <Image className={styles.flashIcon} src="/flash.svg" alt="logo" width={50} height={50} />
        </>

    );
}







