import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './DowmiBrand.module.css'

const PRODUCTS = [
  {
    key: 'p1',
    image: '/images/product1.jpg',
    link: 'https://www.amazon.com/dp/B09NW8ZZ47',
    price: '$13.79',
    rating: 4.5,
    reviews: 1643,
  },
  {
    key: 'p2',
    image: '/images/product2.jpg',
    link: 'https://www.amazon.com/dp/B0DCVKMCLQ',
    price: null,
    rating: null,
    reviews: null,
  },
  {
    key: 'p3',
    image: '/images/product3.jpg',
    link: 'https://www.amazon.com/dp/B0CN6QPVKW',
    price: null,
    rating: null,
    reviews: null,
  },
]

function StarRating({ rating }) {
  return (
    <span className={styles.stars} aria-label={`${rating}점 만점 5점`}>
      {[1, 2, 3, 4, 5].map((i) => {
        const isFull = i <= Math.floor(rating)
        const isHalf = !isFull && i === Math.ceil(rating) && rating % 1 >= 0.5
        return (
          <span
            key={i}
            className={styles.star}
            style={{ opacity: isFull ? 1 : isHalf ? 0.5 : 0.2 }}
            aria-hidden="true"
          >
            ★
          </span>
        )
      })}
    </span>
  )
}

function ProductImage({ src, alt }) {
  const [errored, setErrored] = useState(false)

  if (!errored) {
    return (
      <img
        src={src}
        alt={alt}
        className={styles.productImg}
        onError={() => setErrored(true)}
      />
    )
  }

  return (
    <div className={styles.productImgPlaceholder} aria-label={alt}>
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <rect x="8" y="14" width="32" height="24" rx="3" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
        <circle cx="24" cy="26" r="7" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
        <circle cx="24" cy="26" r="3" fill="rgba(255,255,255,0.2)" />
        <rect x="18" y="10" width="12" height="4" rx="2" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
      </svg>
      <span className={styles.imgPlaceholderText}>Product Image</span>
    </div>
  )
}

function ProductCard({ product }) {
  const { t } = useTranslation()
  const { key, image, link, price, rating, reviews } = product

  return (
    <article className={styles.productCard}>
      <div className={styles.productImageWrap}>
        <ProductImage src={image} alt={t(`dowmi.${key}_name`)} />
      </div>
      <div className={styles.productInfo}>
        <h3 className={styles.productName}>{t(`dowmi.${key}_name`)}</h3>
        <p className={styles.productDesc}>{t(`dowmi.${key}_desc`)}</p>

        {(rating || price) && (
          <div className={styles.productMeta}>
            {rating && (
              <span className={styles.ratingRow}>
                <StarRating rating={rating} />
                <span className={styles.ratingText}>
                  {rating} ({reviews?.toLocaleString()} {t('dowmi.reviews')})
                </span>
              </span>
            )}
            {price && <span className={styles.price}>{price}</span>}
          </div>
        )}

        <a
          href={link}
          className={`btn btn-outline ${styles.amazonBtn}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${t('dowmi.view_on_amazon')} — ${t(`dowmi.${key}_name`)}`}
        >
          {t('dowmi.view_on_amazon')}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
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

        <div className={styles.ranksGallery}>
          {[
            { src: '/images/rank-us-bestseller.png', captionKey: 'rank_us_bestseller_caption' },
            { src: '/images/rank-us-gift.png',       captionKey: 'rank_us_gift_caption' },
            { src: '/images/rank-japan.png',          captionKey: 'rank_japan_caption' },
          ].map(({ src, captionKey }) => (
            <figure key={captionKey} className={styles.rankCard}>
              <div className={styles.rankImgWrap}>
                <img
                  src={src}
                  alt={t(`dowmi.${captionKey}`)}
                  className={styles.rankImg}
                />
              </div>
              <figcaption className={styles.rankCaption}>
                {t(`dowmi.${captionKey}`)}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className={styles.products}>
          {PRODUCTS.map((product) => (
            <ProductCard key={product.key} product={product} />
          ))}
        </div>

        <div className={styles.cta}>
          <a
            href="https://www.amazon.com/stores/DOWMI"
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
