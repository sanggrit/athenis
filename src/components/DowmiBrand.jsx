import { useTranslation } from 'react-i18next'
import styles from './DowmiBrand.module.css'

const PRODUCTS = ['p1', 'p2', 'p3']

function ProductCard({ pKey }) {
  const { t } = useTranslation()
  return (
    <article className={styles.productCard}>
      <div className={styles.productImage} aria-label={t(`dowmi.${pKey}_name`)}>
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <rect x="8" y="14" width="32" height="24" rx="3" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
          <circle cx="24" cy="26" r="7" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
          <circle cx="24" cy="26" r="3" fill="rgba(255,255,255,0.2)" />
          <rect x="18" y="10" width="12" height="4" rx="2" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
        </svg>
        <span className={styles.imagePlaceholderText}>Product Image</span>
      </div>
      <div className={styles.productInfo}>
        <h3 className={styles.productName}>{t(`dowmi.${pKey}_name`)}</h3>
        <p className={styles.productDesc}>{t(`dowmi.${pKey}_desc`)}</p>
      </div>
    </article>
  )
}

export default function DowmiBrand() {
  const { t } = useTranslation()

  return (
    <section id="dowmi" className={`section ${styles.dowmi}`}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.headerText}>
            <p className="section-label">{t('dowmi.section_label')}</p>
            <div className={styles.titleRow}>
              <h2 className={`section-title section-title--light ${styles.title}`}>
                {t('dowmi.title')}
              </h2>
              <span className={styles.badge} aria-label="Amazon Best Seller">
                ★ {t('dowmi.badge')}
              </span>
            </div>
            <p className={styles.description}>{t('dowmi.description')}</p>
          </div>
        </div>

        <div className={styles.products}>
          {PRODUCTS.map((pKey) => (
            <ProductCard key={pKey} pKey={pKey} />
          ))}
        </div>

        <div className={styles.cta}>
          <a
            href="#"
            className="btn btn-gold"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t('dowmi.cta')}
          >
            {t('dowmi.cta')}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
