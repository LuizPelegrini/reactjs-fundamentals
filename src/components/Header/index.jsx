import styles from './styles.module.css';

import logo from '../../assets/ignite-symbol.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Ignite Logo" />
    </header>
  );
}