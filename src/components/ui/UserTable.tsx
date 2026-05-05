import clsx from 'clsx';
import styles from '@/components/ui/UserTable.module.css';
import type { TableUser } from '@/types';

type UserTableProps = {
  users: TableUser[];
};

export default function UserTable({ users }: UserTableProps) {
  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>User</th>
            <th>Role</th>
            <th>Status</th>
            <th>Joined</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>
                <div className={styles.userCell}>
                  <div className={styles.avatar}>{u.avatar}</div>
                  <div className={styles.userInfo}>
                    <span className={styles.userName}>{u.name}</span>
                    <span className={styles.userEmail}>{u.email}</span>
                  </div>
                </div>
              </td>
              <td>
                <span className={styles.role}>{u.role}</span>
              </td>
              <td>
                <span className={clsx(styles.status, styles[u.status])}>
                  {u.status}
                </span>
              </td>
              <td>
                <span className={styles.joined}>{u.joined}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
