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
      <div className={styles.navLinksLg}>
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
          Weather
        </Link>
        <Link
          href="/students"
          className={styles.link}
          style={{ color: pathname === "/students" ? "#78281f" : "black" }}
        >
          students
        </Link>
      </div>

      <div className={styles.navLinksSm}>
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
          Weather
        </Link>
      </div>
    </nav>
  );
};
