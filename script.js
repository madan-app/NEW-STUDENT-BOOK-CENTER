/* ==========================================================================
   NEW STUDENT BOOK CENTER — SITE LOGIC
   You should not need to edit this file to add products — see products.js.
   The only things you may want to change here are in the SHOP_CONFIG block
   right below (WhatsApp number, shop name, Google Maps link).
   ========================================================================== */

// ---------------------------------------------------------------------------
// SHOP CONFIG — change these if your WhatsApp number or Maps link changes
// ---------------------------------------------------------------------------
const SHOP_CONFIG = {
  name: "NEW STUDENT BOOK CENTER",
  whatsappNumber: "919900300409", // country code + number, no + or spaces
  mapsLink: "https://maps.app.goo.gl/pV2Trx1P8Lyo2HLn9",
  fallbackImage: "images/placeholder.jpg"
};

// ---------------------------------------------------------------------------
// STATE
// ---------------------------------------------------------------------------
let cart = loadCart();
let activeCategory = "All";
let searchTerm = "";

// ---------------------------------------------------------------------------
// INIT
// ---------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  setWhatsappLink("heroWhatsapp", buildGeneralEnquiryMessage());
  setWhatsappLink("locationWhatsapp", buildGeneralEnquiryMessage());
  setWhatsappLink("footerWhatsapp", buildGeneralEnquiryMessage());

  renderCategoryChips();
  renderNewArrivals();
  renderBestSellers();
  renderAllProducts();
  updateCartUI();
  initHeroSlideshow();

  // header interactions
  document.getElementById("navToggle").addEventListener("click", toggleMobileNav);
  document.getElementById("searchToggle").addEventListener("click", toggleSearchBar);
  document.getElementById("searchInput").addEventListener("input", onSearchInput);

  // cart drawer
  document.getElementById("cartToggle").addEventListener("click", openCart);
  document.getElementById("cartClose").addEventListener("click", closeCart);
  document.getElementById("overlay").addEventListener("click", closeCart);
  document.getElementById("cartWhatsappBtn").addEventListener("click", sendCartToWhatsapp);
  document.getElementById("cartClearBtn").addEventListener("click", clearCart);

  // product modal
  document.getElementById("modalClose").addEventListener("click", closeModal);
  document.getElementById("modalOverlay").addEventListener("click", (e) => {
    if (e.target.id === "modalOverlay") closeModal();
  });

  // image lightbox
  document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
  document.getElementById("lightboxOverlay").addEventListener("click", (e) => {
    if (e.target.id === "lightboxOverlay") closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    closeLightbox();
    closeModal();
    closeCart();
  });
});

// ---------------------------------------------------------------------------
// RENDER: category chips (auto-generated from products.js)
// ---------------------------------------------------------------------------
function renderCategoryChips() {
  const categories = ["All", ...new Set(PRODUCTS.map((p) => p.category))];
  const wrap = document.getElementById("categoryChips");
  wrap.innerHTML = "";
  categories.forEach((cat) => {
    const chip = document.createElement("button");
    chip.className = "chip" + (cat === activeCategory ? " active" : "");
    chip.textContent = cat;
    chip.addEventListener("click", () => {
      activeCategory = cat;
      renderCategoryChips();
      renderAllProducts();
    });
    wrap.appendChild(chip);
  });
}

// ---------------------------------------------------------------------------
// RENDER: product sections
// ---------------------------------------------------------------------------
function renderNewArrivals() {
  const items = PRODUCTS.filter((p) => p.newArrival);
  renderGrid("newArrivalsGrid", items);
}

function renderBestSellers() {
  const items = PRODUCTS.filter((p) => p.bestSeller);
  renderGrid("bestSellersGrid", items);
}

function renderAllProducts() {
  let items = PRODUCTS.slice();

  if (activeCategory !== "All") {
    items = items.filter((p) => p.category === activeCategory);
  }

  if (searchTerm.trim() !== "") {
    const term = searchTerm.trim().toLowerCase();
    items = items.filter(
      (p) =>
        p.name.toLowerCase().includes(term) ||
        p.category.toLowerCase().includes(term) ||
        (p.description && p.description.toLowerCase().includes(term))
    );
  }

  renderGrid("allProductsGrid", items);

  document.getElementById("resultsCount").textContent =
    items.length + (items.length === 1 ? " product" : " products");
  document.getElementById("emptyState").hidden = items.length !== 0;
}

function renderGrid(elementId, items) {
  const grid = document.getElementById(elementId);
  grid.innerHTML = "";
  items.forEach((product) => grid.appendChild(buildProductCard(product)));
}

function buildProductCard(product) {
  const card = document.createElement("div");
  card.className = "product-card";

  const badges = [];
  if (product.newArrival) badges.push('<span class="badge badge-new">New</span>');
  if (product.bestSeller) badges.push('<span class="badge badge-best">Best Seller</span>');
  if (product.discount) badges.push(`<span class="badge badge-discount">${escapeHtml(product.discount)}</span>`);

  const priceHtml = product.price > 0
    ? `<span class="price-now">${formatPrice(product.price)}</span>` +
      (product.oldPrice ? `<span class="price-old">${formatPrice(product.oldPrice)}</span>` : "")
    : `<span class="price-now">Enquire</span>`;

  card.innerHTML = `
    <div class="card-image-wrap">
      <img src="${product.image}" alt="${escapeHtml(product.name)}" loading="lazy"
           onerror="this.onerror=null;this.src='${SHOP_CONFIG.fallbackImage}';">
      <div class="card-badges">${badges.join("")}</div>
    </div>
    <div class="card-body">
      <p class="card-category">${escapeHtml(product.category)}</p>
      <h3 class="card-name">${escapeHtml(product.name)}</h3>
      <p class="card-desc">${escapeHtml(product.description || "")}</p>
      <div class="card-price-row">${priceHtml}</div>
      <div class="card-actions">
        <button class="btn btn-primary btn-buy">Buy</button>
        <button class="btn btn-ghost btn-add">Add</button>
        <button class="btn card-view" aria-label="View details">👁</button>
      </div>
    </div>
  `;

  // Clicking the photo opens the full-size image directly.
  card.querySelector(".card-image-wrap").addEventListener("click", (e) => {
    e.stopPropagation();
    openLightbox(product.image);
  });

  // Clicking anywhere else on the card (name, description, price) opens product details.
  card.querySelector(".card-body").addEventListener("click", (e) => {
    if (e.target.closest(".card-actions")) return; // buttons handle themselves
    openProductModal(product);
  });

  card.querySelector(".btn-buy").addEventListener("click", (e) => {
    e.stopPropagation();
    addToCartAndOpenCart(product, 1);
  });
  card.querySelector(".btn-add").addEventListener("click", (e) => {
    e.stopPropagation();
    addToCartAndOpenCart(product, 1);
  });
  card.querySelector(".card-view").addEventListener("click", (e) => {
    e.stopPropagation();
    openProductModal(product);
  });

  return card;
}

// ---------------------------------------------------------------------------
// PRODUCT MODAL (View Details) — centered, with photo gallery
// ---------------------------------------------------------------------------
function openProductModal(product) {
  const content = document.getElementById("modalContent");
  const gallery = (product.images && product.images.length > 0) ? product.images : [product.image];

  const priceHtml = product.price > 0
    ? `<span class="price-now">${formatPrice(product.price)}</span>` +
      (product.oldPrice ? `<span class="price-old">${formatPrice(product.oldPrice)}</span>` : "")
    : `<span class="price-now">Enquire in-store</span>`;

  const thumbsHtml = gallery.length > 1
    ? `<div class="modal-thumbs">
        ${gallery.map((src, i) => `
          <div class="modal-thumb${i === 0 ? " active" : ""}" data-src="${src}">
            <img src="${src}" alt="${escapeHtml(product.name)} photo ${i + 1}"
                 onerror="this.onerror=null;this.src='${SHOP_CONFIG.fallbackImage}';">
          </div>
        `).join("")}
      </div>`
    : "";

  content.innerHTML = `
    <div class="modal-body">
      <div class="modal-gallery">
        <div class="modal-img" id="modalMainImg">
          <img src="${gallery[0]}" alt="${escapeHtml(product.name)}"
               onerror="this.onerror=null;this.src='${SHOP_CONFIG.fallbackImage}';">
        </div>
        ${thumbsHtml}
      </div>
      <div class="modal-info">
        <p class="card-category">${escapeHtml(product.category)}</p>
        <h2>${escapeHtml(product.name)}</h2>
        <div class="modal-price-row">${priceHtml}</div>
        <p class="modal-desc">${escapeHtml(product.description || "")}</p>
        <div class="modal-qty">
          <span>Quantity</span>
          <button class="qty-btn" id="modalQtyMinus">−</button>
          <span class="qty-value" id="modalQtyValue">1</span>
          <button class="qty-btn" id="modalQtyPlus">+</button>
        </div>
        <div class="modal-actions">
          <button class="btn btn-primary btn-block" id="modalAddBtn">Add to Cart</button>
        </div>
      </div>
    </div>
  `;

  // clicking the main image opens the full-size lightbox
  let currentImage = gallery[0];
  const mainImgEl = content.querySelector("#modalMainImg");
  mainImgEl.addEventListener("click", () => openLightbox(currentImage));

  // thumbnail switching
  content.querySelectorAll(".modal-thumb").forEach((thumb) => {
    thumb.addEventListener("click", () => {
      currentImage = thumb.getAttribute("data-src");
      mainImgEl.querySelector("img").src = currentImage;
      content.querySelectorAll(".modal-thumb").forEach((t) => t.classList.remove("active"));
      thumb.classList.add("active");
    });
  });

  let qty = 1;
  const qtyValueEl = content.querySelector("#modalQtyValue");
  content.querySelector("#modalQtyMinus").addEventListener("click", () => {
    qty = Math.max(1, qty - 1);
    qtyValueEl.textContent = qty;
  });
  content.querySelector("#modalQtyPlus").addEventListener("click", () => {
    qty += 1;
    qtyValueEl.textContent = qty;
  });
  content.querySelector("#modalAddBtn").addEventListener("click", () => {
    addToCartAndOpenCart(product, qty);
    closeModal();
  });

  document.getElementById("modalOverlay").classList.add("open");
}

function closeModal() {
  document.getElementById("modalOverlay").classList.remove("open");
}

// ---------------------------------------------------------------------------
// IMAGE LIGHTBOX (full-size photo view)
// ---------------------------------------------------------------------------
function openLightbox(src) {
  const img = document.getElementById("lightboxImage");
  img.src = src;
  img.onerror = () => { img.onerror = null; img.src = SHOP_CONFIG.fallbackImage; };
  document.getElementById("lightboxOverlay").classList.add("open");
}

function closeLightbox() {
  document.getElementById("lightboxOverlay").classList.remove("open");
}

// ---------------------------------------------------------------------------
// CART: storage + core actions
// ---------------------------------------------------------------------------
function loadCart() {
  try {
    const saved = localStorage.getItem("nsbc_cart");
    return saved ? JSON.parse(saved) : [];
  } catch (e) {
    return [];
  }
}

function saveCart() {
  try {
    localStorage.setItem("nsbc_cart", JSON.stringify(cart));
  } catch (e) {
    /* localStorage unavailable — cart just won't persist across visits */
  }
}

function addToCart(productId, quantity) {
  const existing = cart.find((item) => item.id === productId);
  if (existing) {
    existing.qty += quantity;
  } else {
    cart.push({ id: productId, qty: quantity });
  }
  saveCart();
  updateCartUI();
}

// Adds a product to the cart AND slides the cart drawer open — used by every
// Buy / Add button on the site, per the site's "browse → cart → WhatsApp" flow.
function addToCartAndOpenCart(product, qty) {
  addToCart(product.id, qty || 1);
  openCart();
}

function updateQuantity(productId, delta) {
  const item = cart.find((i) => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter((i) => i.id !== productId);
  }
  saveCart();
  updateCartUI();
}

function removeFromCart(productId) {
  cart = cart.filter((i) => i.id !== productId);
  saveCart();
  updateCartUI();
}

function clearCart() {
  if (cart.length === 0) return;
  if (!confirm("Clear all items from your cart?")) return;
  cart = [];
  saveCart();
  updateCartUI();
}

function getCartDetails() {
  return cart
    .map((item) => {
      const product = PRODUCTS.find((p) => p.id === item.id);
      if (!product) return null;
      return { product, qty: item.qty, lineTotal: product.price * item.qty };
    })
    .filter(Boolean);
}

function getCartTotal() {
  return getCartDetails().reduce((sum, item) => sum + item.lineTotal, 0);
}

function getCartCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

// ---------------------------------------------------------------------------
// CART: UI
// ---------------------------------------------------------------------------
function updateCartUI() {
  document.getElementById("cartCount").textContent = getCartCount();

  const details = getCartDetails();
  const itemsWrap = document.getElementById("cartItems");

  if (details.length === 0) {
    itemsWrap.innerHTML = '<p class="cart-empty">Your cart is empty. Add a product to get started!</p>';
  } else {
    itemsWrap.innerHTML = "";
    details.forEach(({ product, qty, lineTotal }) => {
      const row = document.createElement("div");
      row.className = "cart-item";
      row.innerHTML = `
        <img src="${product.image}" alt="${escapeHtml(product.name)}"
             onerror="this.onerror=null;this.src='${SHOP_CONFIG.fallbackImage}';">
        <div class="cart-item-info">
          <p class="cart-item-name">${escapeHtml(product.name)}</p>
          <p class="cart-item-price">${formatPrice(product.price)} each</p>
          <div class="qty-control">
            <button class="qty-btn" data-action="minus">−</button>
            <span class="qty-value">${qty}</span>
            <button class="qty-btn" data-action="plus">+</button>
            <button class="cart-item-remove">Remove</button>
          </div>
        </div>
        <div class="cart-item-total">${formatPrice(lineTotal)}</div>
      `;
      row.querySelector('[data-action="minus"]').addEventListener("click", () => updateQuantity(product.id, -1));
      row.querySelector('[data-action="plus"]').addEventListener("click", () => updateQuantity(product.id, 1));
      row.querySelector(".cart-item-remove").addEventListener("click", () => removeFromCart(product.id));
      itemsWrap.appendChild(row);
    });
  }

  document.getElementById("cartTotal").textContent = formatPrice(getCartTotal());
}

function openCart() {
  document.getElementById("cartDrawer").classList.add("open");
  document.getElementById("overlay").classList.add("open");
}

function closeCart() {
  document.getElementById("cartDrawer").classList.remove("open");
  document.getElementById("overlay").classList.remove("open");
}

// ---------------------------------------------------------------------------
// WHATSAPP MESSAGE BUILDING
// ---------------------------------------------------------------------------
function buildGeneralEnquiryMessage() {
  return `Hello ${SHOP_CONFIG.name}, I have a question about your products. Could you please help?`;
}

function buildCartMessage() {
  const details = getCartDetails();
  const lines = details.map((item, idx) => {
    const lineTotal = item.product.price > 0 ? formatPrice(item.lineTotal) : "Price on confirmation";
    return `${idx + 1}. ${item.product.name} x ${item.qty} — ${lineTotal}`;
  });

  const total = getCartTotal();

  return (
    `Hello ${SHOP_CONFIG.name},\n\n` +
    `I would like to place an order:\n\n` +
    `${lines.join("\n")}\n\n` +
    `Total: ${formatPrice(total)}\n\n` +
    `Please confirm availability and order details.`
  );
}

function sendCartToWhatsapp() {
  if (cart.length === 0) {
    showToast("Your cart is empty");
    return;
  }
  const message = buildCartMessage();
  openWhatsapp(message);
}

function openWhatsapp(message) {
  const url = `https://wa.me/${SHOP_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener");
}

function setWhatsappLink(elementId, message) {
  const el = document.getElementById(elementId);
  if (!el) return;
  el.href = `https://wa.me/${SHOP_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

// ---------------------------------------------------------------------------
// SEARCH + MOBILE NAV
// ---------------------------------------------------------------------------
function toggleSearchBar() {
  const bar = document.getElementById("searchBar");
  bar.classList.toggle("open");
  if (bar.classList.contains("open")) {
    document.getElementById("searchInput").focus();
  }
}

function onSearchInput(e) {
  searchTerm = e.target.value;
  renderAllProducts();
  document.getElementById("shop").scrollIntoView({ behavior: "smooth", block: "start" });
}

function toggleMobileNav() {
  const nav = document.getElementById("mainNav");
  const btn = document.getElementById("navToggle");
  const isOpen = nav.classList.toggle("open");
  btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
}

// ---------------------------------------------------------------------------
// HERO SLIDESHOW — auto-advances every 5 seconds, with clickable dots
// ---------------------------------------------------------------------------
function initHeroSlideshow() {
  const slideshow = document.getElementById("heroSlideshow");
  if (!slideshow) return;

  const slides = Array.from(slideshow.querySelectorAll(".hero-slide"));
  const dotsWrap = document.getElementById("heroSlideshowDots");
  if (slides.length === 0) return;

  let current = 0;
  const intervalMs = 5000;
  let timer = null;

  slides.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.className = "hero-dot" + (i === 0 ? " active" : "");
    dot.setAttribute("aria-label", `Show photo ${i + 1}`);
    dot.addEventListener("click", () => {
      goToSlide(i);
      restartTimer();
    });
    dotsWrap.appendChild(dot);
  });
  const dots = Array.from(dotsWrap.querySelectorAll(".hero-dot"));

  function goToSlide(index) {
    slides[current].classList.remove("active");
    dots[current].classList.remove("active");
    current = index;
    slides[current].classList.add("active");
    dots[current].classList.add("active");
  }

  function nextSlide() {
    goToSlide((current + 1) % slides.length);
  }

  function restartTimer() {
    clearInterval(timer);
    timer = setInterval(nextSlide, intervalMs);
  }

  restartTimer();
}

// ---------------------------------------------------------------------------
// HELPERS
// ---------------------------------------------------------------------------
function formatPrice(amount) {
  return "₹" + Number(amount).toLocaleString("en-IN");
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => toast.classList.remove("show"), 2200);
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}
