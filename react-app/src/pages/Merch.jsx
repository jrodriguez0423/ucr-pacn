import React, { useState } from 'react'

const SHOPIFY_BASE_URL = 'https://ucr-pacn.myshopify.com/cart'

const SIZE_VARIANTS = {
  Small: '43066053951578',
  Medium: '43066053984346',
  Large: '43066054017114',
  'X-Large': '43066054049882',
  '2XL': '43066054082650',
}

const INITIAL_QUANTITIES = Object.keys(SIZE_VARIANTS).reduce((sizes, size) => {
  sizes[size] = 0
  return sizes
}, {})

function normalizeQuantity(value) {
  const parsed = Number.parseInt(value, 10)

  if (Number.isNaN(parsed) || parsed < 0) {
    return 0
  }

  return parsed
}

export default function Merch() {
  const [quantities, setQuantities] = useState(INITIAL_QUANTITIES)
  const [zoomedImage, setZoomedImage] = useState(null)

  function updateQuantity(size, nextValue) {
    setQuantities((current) => ({
      ...current,
      [size]: normalizeQuantity(nextValue),
    }))
  }

  function handleBuyNow() {
    const cartItems = Object.entries(quantities)
      .map(([size, value]) => [size, normalizeQuantity(value)])
      .filter(([, quantity]) => quantity > 0)
      .map(([size, quantity]) => `${SIZE_VARIANTS[size]}:${quantity}`)

    if (cartItems.length === 0) {
      return
    }

    window.location.href = `${SHOPIFY_BASE_URL}/${cartItems.join(',')}`
  }

  const hasSelectedItems = Object.values(quantities).some((value) => normalizeQuantity(value) > 0)

  return (
    <section className="merch-page">
      <div className="container merch-layout">
        <div className="merch-copy">
          <p className="merch-eyebrow">PACN Merch</p>
          <h1>UC Riverside PACN 37 Official Show Hoodie</h1>
          <p className="merch-description">
            Color: Vintage Dark Brown
            <br />
            Add one or more hoodie sizes, then continue directly to Shopify checkout with everything in a single cart.
          </p>
          <button
            type="button"
            className="merch-image-button"
            onClick={() =>
              setZoomedImage({
                src: '/images/merch.png',
                alt: 'Front and back view of the UCR PACN Someday hoodie',
                label: 'Hoodie Preview',
              })
            }
            aria-label="Zoom in on hoodie preview"
          >
            <div className="merch-image-frame">
              <img
                src="/images/merch.png"
                alt="Front and back view of the UCR PACN Someday hoodie"
                className="merch-image"
              />
            </div>
          </button>
        </div>

        <div className="merch-card">
          <div className="merch-product-header">
            <div>
              <p className="merch-product-label">Order Form</p>
              <h2>Choose Your Sizes</h2>
              <p className="merch-price">$50</p>
            </div>
          </div>

          <div className="merch-size-chart">
            <p className="merch-product-label">Size Chart</p>
            <button
              type="button"
              className="merch-image-button"
              onClick={() =>
                setZoomedImage({
                  src: '/images/size chart.png',
                  alt: 'Size chart for the UCR PACN hoodie',
                  label: 'Size Chart',
                })
              }
              aria-label="Zoom in on hoodie size chart"
            >
              <div className="merch-image-frame merch-size-chart-frame">
                <img
                  src="/images/size chart.png"
                  alt="Size chart for the UCR PACN hoodie"
                  className="merch-image"
                />
              </div>
            </button>
          </div>

          <div className="merch-field">
            <label className="merch-label">Choose quantities by size</label>
            <div className="size-grid" aria-label="Select hoodie quantities by size">
              {Object.keys(SIZE_VARIANTS).map((size) => (
                <div
                  key={size}
                  className={`size-card${normalizeQuantity(quantities[size]) > 0 ? ' is-selected' : ''}`}
                >
                  <span className="size-card-label">{size}</span>
                  <div className="quantity-stepper" aria-label={`${size} quantity controls`}>
                    <button
                      type="button"
                      className="quantity-button"
                      onClick={() => updateQuantity(size, quantities[size] - 1)}
                      aria-label={`Decrease ${size} quantity`}
                    >
                      -
                    </button>
                    <span className="quantity-value" aria-live="polite">
                      {normalizeQuantity(quantities[size])}
                    </span>
                    <button
                      type="button"
                      className="quantity-button"
                      onClick={() => updateQuantity(size, quantities[size] + 1)}
                      aria-label={`Increase ${size} quantity`}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="merch-helper">
            Leave a size at <strong>0</strong> to exclude it from the order.
          </p>

          <button
            type="button"
            className="btn merch-buy-button"
            onClick={handleBuyNow}
            disabled={!hasSelectedItems}
          >
            Buy Now
          </button>
        </div>
      </div>

      {zoomedImage ? (
        <div
          className="merch-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={zoomedImage.label}
          onClick={() => setZoomedImage(null)}
        >
          <button
            type="button"
            className="merch-lightbox-close"
            onClick={() => setZoomedImage(null)}
            aria-label="Close zoomed image"
          >
            Close
          </button>
          <div className="merch-lightbox-content" onClick={(event) => event.stopPropagation()}>
            <img src={zoomedImage.src} alt={zoomedImage.alt} className="merch-lightbox-image" />
          </div>
        </div>
      ) : null}
    </section>
  )
}
