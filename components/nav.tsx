import Link from 'next/link';
import styles from '@/styles/nav.module.css';


const navList = ['Home', 'About', 'Projects', 'Contact'];
    
const navItems = navList.map((item) =>  (
    <li className={styles.navItem} key={item}> 
                    <Link href={item.toLowerCase()}>
                        <a className={styles.anchor}>
                        <span className={styles.hiddenAnchor} aria-hidden="true" data-content={item}> </span>
                            {item}</a>
                    </Link>
                </li>
));
const NavMenu = () => {

    return(
        <div>
            { navItems }
        </div>
    )
}

export { NavMenu };