import emailPlaceholder from './mail-edit-svgrepo-com-placeholder.svg';
import emailHover from './mail-edit-svgrepo-com.svg';
import styles from '@/styles/nav.module.css';

// img used rather than Image as nextjs wraps Image with position: relative and could not override with position: absolute

export const emailLogoPlaceholder = () => {
  return (
    <img
      alt="email symbol"
      className={`${styles.logo} ${styles.emailLogoPlaceholder}`}
      src={emailPlaceholder}
      height={25}
      width={25}
    />
  );
};

export const emailLogoHover = () => {
  return (
    <img
      alt="writing email symbol"
      className={`${styles.logo} ${styles.emailLogoHover}`}
      src={emailHover}
      height={25}
      width={25}
    />
  );
};
