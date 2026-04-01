import { useState } from 'react'

const products = [
  {
    id: 'grano-500',
    name: 'Blend Armandita Grano 500 gr',
    category: 'grano',
    price: 340,
    image: '/assets/blend-grano.jpg',
    description: 'Variedad: Bourbon, caturra y mundo maya. Cultivado a 1,300 msnm con puntaje en taza de 86. Notas: acidez media, cuerpo intenso con notas a moras, cacao y frutas secas.',
  },
  {
    id: 'grano-250',
    name: 'Blend Armandita Grano 250 gr',
    category: 'grano',
    price: 180,
    image: '/assets/blend-grano.jpg',
    description: 'Variedad: Bourbon, caturra y mundo maya. Cultivado a 1,300 msnm con puntaje en taza de 86. Notas: acidez media, cuerpo intenso con notas a moras, cacao y frutas secas.',
  },
  {
    id: 'molido-500',
    name: 'Blend Armandita Molido 500 gr',
    category: 'molido',
    price: 340,
    image: '/assets/blend-molido.jpg',
    description: 'Variedad: Bourbon, caturra y mundo maya. Cultivado a 1,300 msnm con puntaje en taza de 86. Notas: acidez media, cuerpo intenso con notas a moras, cacao y frutas secas.',
  },
  {
    id: 'molido-250',
    name: 'Blend Armandita Molido 250 gr',
    category: 'molido',
    price: 180,
    image: '/assets/blend-molido.jpg',
    description: 'Variedad: Bourbon, caturra y mundo maya. Cultivado a 1,300 msnm con puntaje en taza de 86. Notas: acidez media, cuerpo intenso con notas a moras, cacao y frutas secas.',
  },
]

const categories = [
  { key: 'todos', label: 'Todos los productos' },
  { key: 'grano', label: 'Café en grano' },
  { key: 'molido', label: 'Café molido' },
]

function formatMXN(n) {
  return `$${n.toFixed(2)}`
}

export default function ProductsSection() {
  const [filter, setFilter] = useState('todos')
  const [cart, setCart] = useState({})
  const [quickView, setQuickView] = useState(null)

  const filtered = filter === 'todos' ? products : products.filter(p => p.category === filter)

  const addToCart = (id) => {
    setCart(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }))
  }

  const removeFromCart = (id) => {
    setCart(prev => {
      const next = { ...prev }
      if (next[id] > 1) next[id]--
      else delete next[id]
      return next
    })
  }

  const cartItems = Object.entries(cart)
    .map(([id, qty]) => ({ product: products.find(p => p.id === id), qty }))
    .filter(i => i.product)

  const cartTotal = cartItems.reduce((sum, i) => sum + i.product.price * i.qty, 0)
  const cartCount = cartItems.reduce((sum, i) => sum + i.qty, 0)

  const sendWhatsApp = () => {
    if (cartItems.length === 0) return
    const lines = cartItems.map(
      i => `• ${i.product.name} x${i.qty} — ${formatMXN(i.product.price * i.qty)}`
    )
    const msg = `¡Hola! Me gustaría hacer un pedido:\n\n${lines.join('\n')}\n\nTotal: ${formatMXN(cartTotal)}`
    const url = `https://wa.me/526634316007?text=${encodeURIComponent(msg)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="products" id="products">
      <div className="container">
        <div className="section-header dark">
          <h2>Productos Destacados</h2>
          <hr />
        </div>

        {/* Categories */}
        <div className="products-categories">
          {categories.map(c => (
            <button
              key={c.key}
              className={`products-cat-btn ${filter === c.key ? 'active' : ''}`}
              onClick={() => setFilter(c.key)}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="products-grid">
          {filtered.map(p => (
            <div key={p.id} className="product-card">
              <div className="product-card-image" onClick={() => setQuickView(p)}>
                <img src={p.image} alt={p.name} />
                <span className="product-quick-view">+ Vista rápida</span>
              </div>
              <div className="product-card-body">
                <h4 className="product-name">{p.name}</h4>
                <p className="product-price">{formatMXN(p.price)} MXN</p>
                <button className="btn-add-cart" onClick={() => addToCart(p.id)}>
                  Agregar al carrito
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Cart summary */}
        {cartCount > 0 && (
          <div className="cart-summary">
            <h3 className="cart-summary-title">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
              Tu pedido ({cartCount} {cartCount === 1 ? 'producto' : 'productos'})
            </h3>
            <div className="cart-items">
              {cartItems.map(({ product, qty }) => (
                <div key={product.id} className="cart-item">
                  <span className="cart-item-name">{product.name}</span>
                  <div className="cart-item-controls">
                    <button className="cart-qty-btn" onClick={() => removeFromCart(product.id)}>−</button>
                    <span className="cart-item-qty">{qty}</span>
                    <button className="cart-qty-btn" onClick={() => addToCart(product.id)}>+</button>
                  </div>
                  <span className="cart-item-subtotal">{formatMXN(product.price * qty)}</span>
                </div>
              ))}
            </div>
            <div className="cart-total">
              <span>Total</span>
              <span>{formatMXN(cartTotal)} MXN</span>
            </div>
            <button className="btn btn-whatsapp cart-whatsapp-btn" onClick={sendWhatsApp}>
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Pedir por WhatsApp
            </button>
          </div>
        )}
      </div>

      {/* Quick view modal */}
      {quickView && (
        <div className="lightbox-overlay" onClick={() => setQuickView(null)}>
          <div className="product-modal" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setQuickView(null)} aria-label="Cerrar">&times;</button>
            <div className="product-modal-inner">
              <div className="product-modal-image">
                <img src={quickView.image} alt={quickView.name} />
              </div>
              <div className="product-modal-info">
                <h3>{quickView.name}</h3>
                <p className="product-modal-price">{formatMXN(quickView.price)} MXN</p>
                <p className="product-modal-desc">{quickView.description}</p>
                <button className="btn-add-cart" onClick={() => { addToCart(quickView.id); setQuickView(null) }}>
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
