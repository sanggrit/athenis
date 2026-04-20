import { useTranslation } from 'react-i18next'
import styles from './WhyDowmi.module.css'

const METRICS = [
  { key: 'w1', icon: '★' },
  { key: 'w2', icon: '🌍' },
  { key: 'w3', icon: '💬' },
  { key: 'w4', icon: '📦' },
]

export default function WhyDowmi() {
  const { t } = useTranslation()

  return (
    <section className={`section ${styles.why}`}>
      <div className="container">
        <p className="section-label">{t('why.section_label')}</p>
        <h2 className={`section-title section-title--light`}>{t('why.title')}</h2>

        <div className={styles.grid}>
          {METRICS.map(({ key, icon }) => (
            <article key={key} className={styles.card}>
              <span className={styles.icon} aria-hidden="true">{icon}</span>
              <p className={styles.value}>{t(`why.${key}_value`)}</p>
              <p className={styles.label}>{t(`why.${key}_label`)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
