import { useTranslation } from 'react-i18next'
import styles from './BusinessAreas.module.css'

const BUSINESS_ICONS = [
  // Lightbulb
  <svg key="b1" width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
    <path d="M18 4C12.477 4 8 8.477 8 14c0 3.6 1.8 6.77 4.546 8.726V26a1 1 0 001 1h8.908a1 1 0 001-1v-3.274C26.2 20.77 28 17.6 28 14c0-5.523-4.477-10-10-10z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M13.545 27h8.91M15.545 31h4.91" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>,
  // Handshake
  <svg key="b2" width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
    <path d="M4 20l6-6 5 5 5-5 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 20c0 4.418 3.582 8 8 8s8-3.582 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M20 20c0 4.418 3.582 8 8 8s8-3.582 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M15 15l3-3 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  // Store/Cart
  <svg key="b3" width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
    <path d="M4 8h28l-3 14H7L4 8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M7 22l-2 6h26l-2-6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M13 8V6a5 5 0 0110 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>,
]

export default function BusinessAreas() {
  const { t } = useTranslation()

  const items = [
    { idx: 0, key: 'b1' },
    { idx: 1, key: 'b2' },
    { idx: 2, key: 'b3' },
  ]

  return (
    <section id="business" className={`section ${styles.business}`}>
      <div className="container">
        <p className="section-label">{t('business.section_label')}</p>
        <h2 className="section-title">{t('business.title')}</h2>

        <div className={styles.grid}>
          {items.map(({ idx, key }) => (
            <article key={key} className={styles.card}>
              <div className={styles.cardIcon}>{BUSINESS_ICONS[idx]}</div>
              <h3 className={styles.cardTitle}>{t(`business.${key}_title`)}</h3>
              <p className={styles.cardDesc}>{t(`business.${key}_desc1`)}</p>
              <p className={styles.cardDesc}>{t(`business.${key}_desc2`)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
