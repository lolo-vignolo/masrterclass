"use client";

import Link from "next/link";
import styles from "./navbar.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image
          src="/assets/logo.jpeg"
          alt="Masterclass DevAccelerator"
          width={50}
          height={50}
        />
        <h1 className={styles.title}>Masterclass DevAccelerator</h1>
      </div>
      <div className={styles.navLinks}>
        <Link
          href="/"
          className={styles.link}
          style={{ color: pathname === "/" ? "#78281f" : "black" }}
        >
          Home
        </Link>
        <Link
          href="/apicall"
          className={styles.link}
          style={{ color: pathname === "/apicall" ? "#78281f" : "black" }}
        >
          API Call
        </Link>
      </div>
    </nav>
  );
};
