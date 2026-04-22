function setupNav() {
  const menuButton = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");
  if (!menuButton || !nav) return;
  menuButton.addEventListener("click", () => nav.classList.toggle("open"));
}

function createProductCard(product) {
  return `
    <article class="card product-card">
      <img loading="lazy" src="${product.image}" alt="${product.name}" />
      <p class="chip">${product.category}</p>
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p class="price">${STARTING_PRICE_LABEL}</p>
      <a class="btn btn-small" href="product.html?id=${product.id}">Order Now</a>
    </article>
  `;
}

function renderProductsPage() {
  if (typeof PRODUCTS === "undefined") return;
  const grid = document.getElementById("productsGrid");
  if (!grid) return;
  grid.innerHTML = PRODUCTS.map(createProductCard).join("");
}

function buildSelect(label, name, values) {
  return `
    <label>${label}
      <select name="${name}" required>
        ${values.map((value) => `<option value="${value}">${value}</option>`).join("")}
      </select>
    </label>
  `;
}

function renderProductDetail() {
  if (typeof PRODUCTS === "undefined") return;
  const container = document.getElementById("productDetail");
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const product = PRODUCTS.find((item) => item.id === id) || PRODUCTS[0];

  container.innerHTML = `
    <img class="product-image" src="${product.image}" alt="${product.name}" />
    <div>
      <p class="chip">${product.category}</p>
      <h1>${product.name}</h1>
      <p>${product.description}</p>
      <p class="price">${STARTING_PRICE_LABEL}</p>
      <form id="orderForm" class="order-form">
        ${buildSelect("Size", "size", product.options.size)}
        ${buildSelect("Style", "style", product.options.style)}
        <label>Name / Occasion
          <input name="occasion" type="text" placeholder="Ex: Birthday Gift for Priya" required />
        </label>
        <label>Upload Reference Image
          <input type="file" name="reference" accept="image/*" required />
        </label>
        <label>Extra Requirements
          <textarea name="requirements" rows="4" placeholder="Mention custom details here..."></textarea>
        </label>
        <div class="actions">
          <button type="button" id="whatsappOrder" class="btn">Order via WhatsApp</button>
        </div>
      </form>
    </div>
  `;

  const whatsappBtn = document.getElementById("whatsappOrder");
  whatsappBtn?.addEventListener("click", () => {
    const form = document.getElementById("orderForm");
    const formData = new FormData(form);
    const occasion = formData.get("occasion") || "";
    const requirements = formData.get("requirements") || "";
    const size = formData.get("size");
    const style = formData.get("style");

    const text = `Hi, I want to order ${product.name}. Here are my requirements. Size: ${size}, Style: ${style}, Occasion: ${occasion}, Notes: ${requirements}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  });
}

function setYear() {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
}

setupNav();
renderProductsPage();
renderProductDetail();
setYear();
