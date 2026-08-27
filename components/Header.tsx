import Image from "next/image";
import styles from "./header.module.css";
import utilStyle from "../styles/utils.module.css"

const name = "Shin Code";

export default function Header() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Image
          src="/images/profile.png"
          alt="ブログ画像"
          width={150}
          height={200}
          className={utilStyle.borderCircle}
        />
        <h1 className={utilStyle.heading2Xl}>{name}</h1>
      </header>
    </div>
  );
}
