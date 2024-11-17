import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Frontend master class DevAccelerator 🚀</h1>
      <Image
        className={styles.rotatingImage}
        src="/assets/react.png"
        alt="Masterclass DevAccelerator"
        width={300}
        height={300}
      />
      <p>Welcome to the Masterclass DevAccelerator!</p>
    </div>
  );
}
