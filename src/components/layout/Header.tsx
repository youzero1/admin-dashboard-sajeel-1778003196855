import { useLocation } from 'react-router-dom';
import { Bell, Search } from 'lucide-react';
import styles from '@/components/layout/Header.module.css';

const PAGE_TITLES: Record<string, string> = {
  '/overview': 'Overview',
  '/analytics': 'Analytics',
  '/users': 'Users',
  '/settings': 'Settings',
};

export default function Header() {
  const location = useLocation();
  const title = PAGE_TITLES[location.pathname] || 'Dashboard';

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <h1 className={styles.title}>{title}</h1>
        <span className={styles.date}>{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
      </div>
      <div className={styles.right}>
        <div className={styles.searchBox}>
          <Search size={14} className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search..."
            className={styles.searchInput}
          />
        </div>
        <button className={styles.iconBtn} type="button" aria-label="Notifications">
          <Bell size={18} />
          <span className={styles.badge}>3</span>
        </button>
      </div>
    </header>
  );
}
