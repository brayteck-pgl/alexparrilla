/* ALEX PARRILLA - interacciones sencillas en JavaScript puro.
   Agrega el número real de WhatsApp en formato internacional, sin + ni espacios.
   Ejemplo de formato: 57 seguido del número. No uses un número ficticio.
*/
const WHATSAPP_NUMBER = "";

const menuToggle = document.querySelector("#menuToggle");
const mainNav = document.querySelector("#mainNav");
const navLinks = document.querySelectorAll("#mainNav a");
const filterButtons = document.querySelectorAll("[data-filter]");
const productCards = document.querySelectorAll(".product-card");
const eventForm = document.querySelector("#eventForm");
const formMessage = document.querySelector("#formMessage");
const toast = document.querySelector("#toast");
const currentYear = document.querySelector("#currentYear");
const whatsappButtons = document.querySelectorAll("[data-whatsapp]");

let toastTimeout;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");

  window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 4200);
}

// Abrir WhatsApp solamente cuando el número real esté configurado.
function openWhatsApp(message) {
  if (!WHATSAPP_NUMBER) {
    showToast("Falta configurar el número real de WhatsApp en app.js.");
    return false;
  }

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  return true;
}

whatsappButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    openWhatsApp("Hola, ALEX PARRILLA. Quiero conocer más información del restaurante.");
  });
});

// Abrir y cerrar el menú de navegación en pantallas pequeñas.
if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"
    );
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Abrir menú de navegación");
    });
  });
}

// Filtrar las tarjetas del menú por categoría.
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.filter;

    filterButtons.forEach((filterButton) => {
      const isSelected = filterButton === button;
      filterButton.classList.toggle("is-active", isSelected);
      filterButton.setAttribute("aria-pressed", String(isSelected));
    });

    productCards.forEach((card) => {
      const matchesFilter =
        selectedFilter === "todos" || card.dataset.category === selectedFilter;
      card.hidden = !matchesFilter;
    });
  });
});

// Preparar una consulta para WhatsApp. Sin número real, no se envía ni se almacena.
if (eventForm) {
  eventForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!eventForm.checkValidity()) {
      eventForm.reportValidity();
      return;
    }

    const formData = new FormData(eventForm);
    const name = String(formData.get("nombre")).trim();
    const phone = String(formData.get("telefono")).trim();
    const type = String(formData.get("tipo"));
    const guests = String(formData.get("personas"));
    const details = String(formData.get("detalles")).trim() || "Sin información adicional";

    const message = [
      "Hola, ALEX PARRILLA. Quiero consultar por un evento.",
      `Nombre: ${name}`,
      `Teléfono: ${phone}`,
      `Servicio: ${type}`,
      `Número de personas: ${guests}`,
      `Detalles: ${details}`
    ].join("\n");

    const opened = openWhatsApp(message);
    if (opened) {
      formMessage.textContent = "Se preparó tu consulta en una nueva pestaña de WhatsApp.";
    } else {
      formMessage.textContent =
        "La consulta está validada. Para abrir WhatsApp, primero agrega el número real del restaurante en app.js.";
    }
  });
}

// Actualizar automáticamente el año del pie de página.
if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}
