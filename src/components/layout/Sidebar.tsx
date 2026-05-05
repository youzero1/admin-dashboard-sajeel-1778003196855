import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  BarChart3,
  Users,
  Settings,
  Zap,
} from 'lucide-react';
import styles from '@/components/layout/Sidebar.module.css';

type NavEntry = {
  label: string;
  path: string;
  icon: React.ReactNode;
};

const navItems: NavEntry[] = [
  { label: 'Overview', path: '/overview', icon: <LayoutDashboard size={18} /> },
  { label: 'Analytics', path: '/analytics', icon: <BarChart3 size={18} /> },
  { label: 'Users', path: '/users', icon: <Users size={18} /> },
  { label: 'Settings', path: '/settings', icon: <Settings size={18} /> },
];

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.brand}>
        <div className={styles.brandIcon}>
          <Zap size={18} fill="currentColor" />
        </div>
        <span className={styles.brandName}>Nexus</span>
      </div>

      <nav className={styles.nav}>
        <span className={styles.navGroup}>Main Menu</span>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
            }
          >
            <span className={styles.navIcon}>{item.icon}</span>
            <span className={styles.navLabel}>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className={styles.footer}>
        <div className={styles.avatar}>JD</div>
        <div className={styles.userInfo}>
          <span className={styles.userName}>John Doe</span>
          <span className={styles.userRole}>Administrator</span>
        </div>
      </div>
    </aside>
  );
}
