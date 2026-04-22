const WHATSAPP_NUMBER = "919394683474";

function setupNav() {
  const menuButton = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");
  if (!menuButton || !nav) return;
  menuButton.addEventListener("click", () => nav.classList.toggle("open"));
}

function formatCurrency(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(value);
}

function createProductCard(product) {
  return `
    <article class="card product-card">
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p class="price">${formatCurrency(product.price)}</p>
      <a class="btn btn-small" href="product.html?id=${product.id}">View Details</a>
    </article>
  `;
}

function renderProductsPage() {
  if (typeof PRODUCTS === "undefined") return;
  const sections = {
    portraitsGrid: PRODUCTS.filter((p) => p.category === "portraits"),
    sketchesGrid: PRODUCTS.filter((p) => p.category === "sketches"),
    mandalaGrid: PRODUCTS.filter((p) => p.category === "mandala")
  };

  Object.entries(sections).forEach(([elementId, list]) => {
    const el = document.getElementById(elementId);
    if (!el) return;
    el.innerHTML = list.map(createProductCard).join("");
  });
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
      <p class="eyebrow">${product.category.toUpperCase()}</p>
      <h1>${product.name}</h1>
      <p>${product.description}</p>
      <p class="price">${formatCurrency(product.price)}</p>
      <form id="orderForm" class="order-form">
        ${buildSelect("Size", "size", product.options.size)}
        ${buildSelect("Style", "style", product.options.style)}
        <label>Additional requirements
          <textarea name="requirements" rows="4" placeholder="Mention people count, background color, delivery date, etc."></textarea>
        </label>
        <label>Upload reference image
          <input type="file" name="reference" accept="image/*" required />
        </label>
        <div class="actions">
          <button type="button" id="whatsappOrder" class="btn">Order via WhatsApp</button>
          <button type="button" id="payNow" class="btn btn-outline">Pay with Razorpay</button>
        </div>
      </form>
    </div>
  `;

  const whatsappBtn = document.getElementById("whatsappOrder");
  whatsappBtn?.addEventListener("click", () => {
    const form = document.getElementById("orderForm");
    const formData = new FormData(form);
    const requirements = formData.get("requirements") || "";
    const size = formData.get("size");
    const style = formData.get("style");

    const text = `Hi, I want to order ${product.name}. Here are my requirements. Size: ${size}, Style: ${style}, Notes: ${requirements}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  });

  const payNowBtn = document.getElementById("payNow");
  payNowBtn?.addEventListener("click", () => {
    if (typeof Razorpay === "undefined") {
      alert("Razorpay failed to load. Please try WhatsApp order.");
      return;
    }

    const options = {
      key: "rzp_test_1DP5mmOlF5G5ag",
      amount: product.price * 100,
      currency: "INR",
      name: "Nibedita Art Club",
      description: product.name,
      image: product.image,
      handler: function () {
        alert("Payment captured in demo mode. We will contact you shortly on WhatsApp.");
      },
      theme: { color: "#8f2d56" }
    };

    const rzp = new Razorpay(options);
    rzp.open();
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
