import { useTranslation } from 'react-i18next'
import styles from './Hero.module.css'

export default function Hero() {
  const { t } = useTranslation()

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className={styles.hero} aria-label="Hero">
      <div className={styles.overlay} aria-hidden="true" />
      <div className={`container ${styles.content}`}>
        <p className={styles.eyebrow}>ATHENIS × DOWMI</p>
        <h1 className={styles.slogan}>{t('hero.slogan')}</h1>
        <p className={styles.sub}>{t('hero.sub')}</p>
        <div className={styles.ctas}>
          <button className="btn btn-gold" onClick={() => scrollTo('dowmi')}>
            {t('hero.cta_dowmi')}
          </button>
          <button className="btn btn-outline btn-outline--light" onClick={() => scrollTo('contact')}>
            {t('hero.cta_contact')}
          </button>
        </div>
      </div>
      <div className={styles.scrollHint} aria-hidden="true">
        <span className={styles.scrollLine} />
      </div>
    </section>
  )
}
