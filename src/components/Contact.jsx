import { useState, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import ReCAPTCHA from 'react-google-recaptcha'
import styles from './Contact.module.css'

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID || 'xgorznre'
const RECAPTCHA_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || ''
const HAS_RECAPTCHA = !!RECAPTCHA_KEY

const INITIAL_FORM = { name: '', email: '', inquiryType: '', message: '' }

export default function Contact() {
  const { t } = useTranslation()
  const recaptchaRef = useRef(null)
  const [form, setForm] = useState(INITIAL_FORM)
  const [recaptchaValue, setRecaptchaValue] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const isValid =
    form.name.trim() &&
    form.email.trim() &&
    form.inquiryType &&
    form.message.trim() &&
    (!HAS_RECAPTCHA || recaptchaValue)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!isValid) return
    setStatus('loading')

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...form,
          ...(recaptchaValue && { 'g-recaptcha-response': recaptchaValue }),
        }),
      })
      if (res.ok) {
        setStatus('success')
        setForm(INITIAL_FORM)
        recaptchaRef.current?.reset()
        setRecaptchaValue('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.info}>
            <p className="section-label">{t('contact.section_label')}</p>
            <h2 className="section-title">{t('contact.title')}</h2>
            <p className={styles.sub}>{t('contact.sub')}</p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="contact-name" className={styles.label}>
                  {t('contact.name')}
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  className={styles.input}
                  placeholder={t('contact.name_placeholder')}
                  value={form.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="contact-email" className={styles.label}>
                  {t('contact.email')}
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  className={styles.input}
                  placeholder={t('contact.email_placeholder')}
                  value={form.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                />
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="contact-type" className={styles.label}>
                {t('contact.inquiry_type')}
              </label>
              <select
                id="contact-type"
                name="inquiryType"
                className={styles.select}
                value={form.inquiryType}
                onChange={handleChange}
                required
              >
                <option value="">{t('contact.type_default')}</option>
                <option value="product">{t('contact.type_product')}</option>
                <option value="distribution">{t('contact.type_distribution')}</option>
                <option value="media">{t('contact.type_media')}</option>
                <option value="other">{t('contact.type_other')}</option>
              </select>
            </div>

            <div className={styles.field}>
              <label htmlFor="contact-message" className={styles.label}>
                {t('contact.message')}
              </label>
              <textarea
                id="contact-message"
                name="message"
                className={styles.textarea}
                placeholder={t('contact.message_placeholder')}
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            {HAS_RECAPTCHA && (
              <div className={styles.recaptcha}>
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={RECAPTCHA_KEY}
                  onChange={setRecaptchaValue}
                  onExpired={() => setRecaptchaValue('')}
                  theme="light"
                />
                {!recaptchaValue && (
                  <p className={styles.recaptchaHint}>{t('contact.recaptcha_hint')}</p>
                )}
              </div>
            )}

            {status === 'success' && (
              <p className={styles.successMsg} role="alert">{t('contact.success')}</p>
            )}
            {status === 'error' && (
              <p className={styles.errorMsg} role="alert">{t('contact.error')}</p>
            )}

            <button
              type="submit"
              className={`btn btn-primary ${styles.submitBtn}`}
              disabled={!isValid || status === 'loading'}
              aria-busy={status === 'loading'}
            >
              {status === 'loading' ? t('contact.submitting') : t('contact.submit')}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
