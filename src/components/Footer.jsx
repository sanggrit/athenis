import { useTranslation } from 'react-i18next'
import styles from './Footer.module.css'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <p className={styles.logo}>ATHENIS</p>
            <p className={styles.tagline}>Innovation for Better Living</p>
          </div>

          <nav className={styles.links} aria-label="푸터 링크">
            <div className={styles.linkGroup}>
              <p className={styles.linkGroupTitle}>DOWMI</p>
              <a
                href="#"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t('footer.amazon')}
              >
                {t('footer.amazon')}
              </a>
            </div>
            <div className={styles.linkGroup}>
              <p className={styles.linkGroupTitle}>Social</p>
              <a
                href="#"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                {t('footer.instagram')}
              </a>
            </div>
            <div className={styles.linkGroup}>
              <p className={styles.linkGroupTitle}>Legal</p>
              <a href="#" className={styles.link} aria-label={t('footer.privacy')}>
                {t('footer.privacy')}
              </a>
            </div>
          </nav>
        </div>

        <div className={styles.bottom}>
          <p className={styles.bizInfo}>{t('footer.business_info')}</p>
          <p className={styles.bizInfo}>{t('footer.address')}</p>
          <p className={styles.copyright}>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  )
}
