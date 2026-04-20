import { useTranslation } from 'react-i18next'
import styles from './About.module.css'

const CARDS = [
  {
    key: 'dev',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 16l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    key: 'design',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="24" height="24" rx="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="16" r="5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 4v4M16 24v4M4 16h4M24 16h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    key: 'production',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M4 24V14l8-8h8l8 8v10H4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <rect x="12" y="18" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    key: 'ecommerce',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="12" cy="26" r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="24" cy="26" r="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 4h4l4 14h14l4-10H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function About() {
  const { t } = useTranslation()

  return (
    <section id="brand" className={`section ${styles.about}`}>
      <div className="container">
        <p className="section-label">{t('about.section_label')}</p>
        <h2 className={`section-title ${styles.mission}`}>{t('about.mission')}</h2>

        <div className={styles.grid}>
          {CARDS.map(({ key, icon }) => (
            <article key={key} className={styles.card}>
              <div className={styles.cardIcon}>{icon}</div>
              <h3 className={styles.cardTitle}>{t(`about.card_${key}`)}</h3>
              <p className={styles.cardDesc}>{t(`about.card_${key}_desc`)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
