"use client";
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../styles/SidebarB.module.css';

const navItems = [
  {
    label: "Dashboard",
    to: "/",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/df3534eff923327003b042a07dcd94f55c7f83d3?placeholderIfAbsent=true&apiKey=1e23877f7d2f4d89baf473e804c7faf9",
  },
  {
    label: "Evaluations",
    to: "/evaluations",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f4c82136d92f90d07aee670bd02815a8ea167ad8?placeholderIfAbsent=true&apiKey=1e23877f7d2f4d89baf473e804c7faf9",
    arrow: true,
  },
  {
    label: "Reviews",
    to: "/reviews",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d2a47c934a6f0e71ca9b3b2eac515be9cfb8bc76?placeholderIfAbsent=true&apiKey=1e23877f7d2f4d89baf473e804c7faf9",
    arrow: true,
  },
  {
    label: "Insights",
    to: "/insights",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3967c04d0e6c71805bae5cd51e32205e73175e85?placeholderIfAbsent=true&apiKey=1e23877f7d2f4d89baf473e804c7faf9",
    arrow: true,
  },
  {
    label: "Forum",
    to: "/forum",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5621f7c06d1e347ffb52a8bc0f6783f60d060f42?placeholderIfAbsent=true&apiKey=1e23877f7d2f4d89baf473e804c7faf9",
    arrow: true,
  },
  {
    label: "Help",
    to: "/help",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fa4a9fb28492441bbd63d3e6767c31eac41bb94d?placeholderIfAbsent=true&apiKey=1e23877f7d2f4d89baf473e804c7faf9",
    arrow: true,
  },
];

const arrowIcon = "https://cdn.builder.io/api/v1/image/assets/TEMP/9730dad53ed53ade2fb81ccdb37fd673269beafe?placeholderIfAbsent=true&apiKey=1e23877f7d2f4d89baf473e804c7faf9";
const reviewsArrowIcon = "https://cdn.builder.io/api/v1/image/assets/TEMP/fab3ead752a42c7ad003906e7d91af47c1066f80?placeholderIfAbsent=true&apiKey=1e23877f7d2f4d89baf473e804c7faf9";

const SidebarB: React.FC = () => {
  const location = useLocation();

  return (
    <aside className={styles.column}>
      <div className={styles.container}>
        <header className={styles.header}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7dd5777296874052dfb298047a7856370af4b41d?placeholderIfAbsent=true&apiKey=1e23877f7d2f4d89baf473e804c7faf9"
            alt="Dashboard Logo"
            className={styles.logo}
          />
          <div className={styles.titleWrapper}>
            <h1 className={styles.dashboard}>Dashboard</h1>
            <span className={styles.version}>v.01</span>
          </div>
        </header>

        <nav className={styles.navigation}>
          {navItems.map((item) => {
            const isActive = item.label === "Reviews" || location.pathname === item.to;
            return (
              <Link
                key={item.label}
                to={item.to}
                className={
                  isActive
                    ? `${styles.activeNavItem} ${styles.navItem} ${styles.navLink}`
                    : `${styles.navItem} ${styles.navLink}`
                }
                style={{ textDecoration: 'none' }}
              >
                <div className={styles.navContent}>
                  <img src={item.icon} alt={`${item.label} Icon`} className={styles.navIcon} />
                  <span>{item.label}</span>
                </div>
                {item.arrow && (
                  <img
                    src={
                      item.label === "Reviews"
                        ? reviewsArrowIcon
                        : arrowIcon
                    }
                    alt="Arrow Icon"
                    className={styles.arrowIcon}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <section className={styles.proUpgrade}>
          <p className={styles.upgradeText}>
            Upgrade to PRO to access all Features!
          </p>
          <button className={styles.upgradeButton}>
            Get Pro Now!
          </button>
        </section>

        <footer className={styles.userProfile}>
          <div className={styles.userInfo}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a19c0add794db8e6dfa4600070e24e33e3a47264?placeholderIfAbsent=true&apiKey=1e23877f7d2f4d89baf473e804c7faf9"
              alt="Designer Profile"
              className={styles.userAvatar}
            />
            <span className={styles.userRole}>Designer</span>
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a776b5d4e4c440a9dd7087be9c60b618afe93395?placeholderIfAbsent=true&apiKey=1e23877f7d2f4d89baf473e804c7faf9"
            alt="Settings"
            className={styles.settingsIcon}
          />
        </footer>
      </div>
    </aside>
  );
};

export default SidebarB;
