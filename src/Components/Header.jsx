import styles from '../sass/components/header/Header.module.scss';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className={styles.header}>
      <Link to="/" className={styles.brand}>Hops&Barley</Link>
      <Link to="/favorites" className={styles.favorites}>Favorites</Link>
    </nav>
  );
}

export default Header;
