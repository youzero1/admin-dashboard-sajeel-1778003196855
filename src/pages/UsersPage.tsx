import { useState } from 'react';
import UserTable from '@/components/ui/UserTable';
import styles from '@/pages/UsersPage.module.css';
import type { TableUser } from '@/types';
import { Search, UserPlus } from 'lucide-react';

const ALL_USERS: TableUser[] = [
  { id: '1', name: 'Alice Carter', email: 'alice@example.com', role: 'Admin', status: 'active', joined: 'Jan 12, 2024', avatar: 'AC' },
  { id: '2', name: 'Bob Martinez', email: 'bob@example.com', role: 'Editor', status: 'active', joined: 'Feb 3, 2024', avatar: 'BM' },
  { id: '3', name: 'Carol Lee', email: 'carol@example.com', role: 'Viewer', status: 'inactive', joined: 'Mar 18, 2024', avatar: 'CL' },
  { id: '4', name: 'David Kim', email: 'david@example.com', role: 'Editor', status: 'pending', joined: 'Apr 22, 2024', avatar: 'DK' },
  { id: '5', name: 'Eva Nguyen', email: 'eva@example.com', role: 'Admin', status: 'active', joined: 'May 7, 2024', avatar: 'EN' },
  { id: '6', name: 'Frank Wilson', email: 'frank@example.com', role: 'Viewer', status: 'active', joined: 'Jun 1, 2024', avatar: 'FW' },
  { id: '7', name: 'Grace Patel', email: 'grace@example.com', role: 'Editor', status: 'pending', joined: 'Jul 14, 2024', avatar: 'GP' },
  { id: '8', name: 'Henry Brown', email: 'henry@example.com', role: 'Viewer', status: 'inactive', joined: 'Aug 29, 2024', avatar: 'HB' },
];

const FILTERS = ['All', 'Active', 'Inactive', 'Pending'] as const;
type Filter = typeof FILTERS[number];

export default function UsersPage() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<Filter>('All');

  const filtered = ALL_USERS.filter((u) => {
    const matchSearch =
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase());
    const matchFilter =
      filter === 'All' || u.status === filter.toLowerCase();
    return matchSearch && matchFilter;
  });

  return (
    <div className={styles.page}>
      <div className={styles.topBar}>
        <div className={styles.searchBox}>
          <Search size={14} className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search users..."
            className={styles.searchInput}
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
          />
        </div>
        <div className={styles.actions}>
          <div className={styles.filters}>
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                className={filter === f ? `${styles.filterBtn} ${styles.active}` : styles.filterBtn}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
          <button type="button" className={styles.addBtn}>
            <UserPlus size={15} />
            Add User
          </button>
        </div>
      </div>

      <div className={styles.summary}>
        <span className={styles.count}>{filtered.length} users</span>
      </div>

      <UserTable users={filtered} />
    </div>
  );
}
