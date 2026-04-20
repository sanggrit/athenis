import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './Header.module.css'

export default function Header() {
  const { t, i18n } = useTranslation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleLang = () => {
    const next = i18n.language === 'ko' ? 'en' : 'ko'
    i18n.changeLanguage(next)
    localStorage.setItem('lang', next)
  }

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  const navItems = [
    { key: 'brand', id: 'brand' },
    { key: 'dowmi', id: 'dowmi' },
    { key: 'business', id: 'business' },
    { key: 'contact', id: 'contact' },
  ]

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <button
          className={styles.logo}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Athenis 홈으로"
        >
          ATHENIS
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`} aria-label="주요 메뉴">
          {navItems.map(({ key, id }) => (
            <button key={key} className={styles.navLink} onClick={() => scrollTo(id)}>
              {t(`nav.${key}`)}
            </button>
          ))}
        </nav>

        <div className={styles.actions}>
          <div className={styles.langToggle} role="group" aria-label="언어 선택">
            <button
              className={`${styles.langBtn} ${i18n.language === 'ko' ? styles.langActive : ''}`}
              onClick={() => { i18n.changeLanguage('ko'); localStorage.setItem('lang', 'ko') }}
              aria-pressed={i18n.language === 'ko'}
            >
              KO
            </button>
            <span className={styles.langDivider} aria-hidden="true">|</span>
            <button
              className={`${styles.langBtn} ${i18n.language === 'en' ? styles.langActive : ''}`}
              onClick={() => { i18n.changeLanguage('en'); localStorage.setItem('lang', 'en') }}
              aria-pressed={i18n.language === 'en'}
            >
              EN
            </button>
          </div>

          <button
            className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerOpen : ''}`}
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label={isMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={isMenuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
