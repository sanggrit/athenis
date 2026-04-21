import { useState, useEffect, Fragment } from 'react'
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

  const setLang = (lang) => {
    i18n.changeLanguage(lang)
    localStorage.setItem('lang', lang)
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
            {['ko', 'en', 'zh'].map((lang, idx, arr) => (
              <Fragment key={lang}>
                <button
                  className={`${styles.langBtn} ${i18n.language === lang ? styles.langActive : ''}`}
                  onClick={() => setLang(lang)}
                  aria-pressed={i18n.language === lang}
                >
                  {lang.toUpperCase()}
                </button>
                {idx < arr.length - 1 && (
                  <span className={styles.langDivider} aria-hidden="true">|</span>
                )}
              </Fragment>
            ))}
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
