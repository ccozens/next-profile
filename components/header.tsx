import NavMenu from "./nav/nav";
import styles from '@/styles/header.module.css';

const Header = () => {

    return (
       
      <header>
        <div className={styles.name}>CHRIS <br />COZENS</div>
        <div className={styles.nav}> 
          <NavMenu /> 
        </div>
        
      </header>
    )
};


export default Header;