import Link from 'next/link';
import styles from '@/styles/nav.module.css';

const NavMenu = () => {

    return(
        <div>
            <ul className={styles.navList}>
                <li className={styles.navItem}> 
                    <Link href="/">
                        <a className={styles.anchor}>
                        <span className={styles.hiddenAnchor} aria-hidden="true" data-content="Home"> </span>
                            Home</a>
                    </Link>
                </li>
                <li className={styles.navItem}> 
                    <Link href="/about">
                        <a className={styles.anchor}>
                        <span className={styles.hiddenAnchor} aria-hidden="true" data-content="About"> </span>
                        About</a>
                    </Link>
                </li>
                <li className={styles.navItem}> 
                    <Link href="/projects">
                        <a className={styles.anchor}>
                        <span className={styles.hiddenAnchor} aria-hidden="true" data-content="Projects"> </span>
                        Projects</a>
                    </Link>
                </li>
                <li className={styles.navItem}> 
                    <Link href="/contact">
                        <a className={styles.anchor}>
                        <span className={styles.hiddenAnchor} aria-hidden="true" data-content="Contact"> </span>
                        Contact</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export { NavMenu };
