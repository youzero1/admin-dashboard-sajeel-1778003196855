import { useState } from 'react';
import styles from '@/pages/SettingsPage.module.css';

type Tab = 'profile' | 'notifications' | 'security' | 'appearance';

const TABS: { id: Tab; label: string }[] = [
  { id: 'profile', label: 'Profile' },
  { id: 'notifications', label: 'Notifications' },
  { id: 'security', label: 'Security' },
  { id: 'appearance', label: 'Appearance' },
];

export default function SettingsPage() {
  const [tab, setTab] = useState<Tab>('profile');

  return (
    <div className={styles.page}>
      <div className={styles.tabs}>
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            className={tab === t.id ? `${styles.tab} ${styles.activeTab}` : styles.tab}
            onClick={() => setTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'profile' && <ProfileSection />}
      {tab === 'notifications' && <NotificationsSection />}
      {tab === 'security' && <SecuritySection />}
      {tab === 'appearance' && <AppearanceSection />}
    </div>
  );
}

function ProfileSection() {
  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>Profile Settings</h2>
      <p className={styles.sectionDesc}>Manage your account information and preferences.</p>
      <div className={styles.avatarRow}>
        <div className={styles.bigAvatar}>JD</div>
        <div>
          <button type="button" className={styles.btnPrimary}>Upload Photo</button>
          <p className={styles.hint}>JPG, PNG or GIF — max 2MB</p>
        </div>
      </div>
      <div className={styles.formGrid}>
        <div className={styles.fieldGroup}>
          <label className={styles.label}>First Name</label>
          <input type="text" defaultValue="John" className={styles.input} />
        </div>
        <div className={styles.fieldGroup}>
          <label className={styles.label}>Last Name</label>
          <input type="text" defaultValue="Doe" className={styles.input} />
        </div>
        <div className={styles.fieldGroup}>
          <label className={styles.label}>Email</label>
          <input type="email" defaultValue="john@example.com" className={styles.input} />
        </div>
        <div className={styles.fieldGroup}>
          <label className={styles.label}>Role</label>
          <input type="text" defaultValue="Administrator" className={styles.input} readOnly />
        </div>
      </div>
      <div className={styles.actions}>
        <button type="button" className={styles.btnPrimary}>Save Changes</button>
        <button type="button" className={styles.btnGhost}>Cancel</button>
      </div>
    </div>
  );
}

function NotificationsSection() {
  const items = [
    { id: 'email_alerts', label: 'Email Alerts', desc: 'Receive email for important events' },
    { id: 'push_notifs', label: 'Push Notifications', desc: 'Browser push notifications' },
    { id: 'weekly_report', label: 'Weekly Report', desc: 'Summary delivered every Monday' },
    { id: 'security_alerts', label: 'Security Alerts', desc: 'Alerts for login and access events' },
  ];
  const [enabled, setEnabled] = useState<Record<string, boolean>>({ email_alerts: true, security_alerts: true });

  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>Notification Preferences</h2>
      <p className={styles.sectionDesc}>Choose how you want to be notified.</p>
      <div className={styles.toggleList}>
        {items.map((item) => (
          <div key={item.id} className={styles.toggleRow}>
            <div>
              <p className={styles.toggleLabel}>{item.label}</p>
              <p className={styles.toggleDesc}>{item.desc}</p>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={enabled[item.id] || false}
              className={enabled[item.id] ? `${styles.toggle} ${styles.toggleOn}` : styles.toggle}
              onClick={() => setEnabled((prev) => ({ ...prev, [item.id]: !prev[item.id] }))}
            >
              <span className={styles.toggleThumb} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function SecuritySection() {
  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>Security</h2>
      <p className={styles.sectionDesc}>Manage your password and authentication methods.</p>
      <div className={styles.formGrid}>
        <div className={styles.fieldGroup}>
          <label className={styles.label}>Current Password</label>
          <input type="password" placeholder="••••••••" className={styles.input} />
        </div>
        <div className={styles.fieldGroup}>
          <label className={styles.label}>New Password</label>
          <input type="password" placeholder="••••••••" className={styles.input} />
        </div>
        <div className={styles.fieldGroup}>
          <label className={styles.label}>Confirm Password</label>
          <input type="password" placeholder="••••••••" className={styles.input} />
        </div>
      </div>
      <div className={styles.actions}>
        <button type="button" className={styles.btnPrimary}>Update Password</button>
      </div>
      <div className={styles.divider} />
      <div className={styles.dangerZone}>
        <h3 className={styles.dangerTitle}>Danger Zone</h3>
        <p className={styles.dangerDesc}>Once you delete your account, there is no going back.</p>
        <button type="button" className={styles.btnDanger}>Delete Account</button>
      </div>
    </div>
  );
}

function AppearanceSection() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [accent, setAccent] = useState('#6366f1');

  const accents = ['#6366f1', '#10b981', '#3b82f6', '#a855f7', '#f59e0b', '#ef4444'];

  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>Appearance</h2>
      <p className={styles.sectionDesc}>Customize the look and feel of your dashboard.</p>

      <div className={styles.appearanceGroup}>
        <label className={styles.label}>Theme</label>
        <div className={styles.themeRow}>
          {(['dark', 'light'] as const).map((t) => (
            <button
              key={t}
              type="button"
              className={theme === t ? `${styles.themeBtn} ${styles.themeBtnActive}` : styles.themeBtn}
              onClick={() => setTheme(t)}
            >
              {t === 'dark' ? '🌙 Dark' : '☀️ Light'}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.appearanceGroup}>
        <label className={styles.label}>Accent Color</label>
        <div className={styles.colorPicker}>
          {accents.map((c) => (
            <button
              key={c}
              type="button"
              className={accent === c ? `${styles.colorBtn} ${styles.colorBtnActive}` : styles.colorBtn}
              style={{ background: c }}
              onClick={() => setAccent(c)}
              aria-label={c}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
