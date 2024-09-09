const sections = document.querySelectorAll("section");

// Configuración inicial para que las secciones estén ocultas
sections.forEach(section => {
  section.style.opacity = 0;
  section.style.transition = "opacity 1s ease-out, transform 1.5s ease-out"; // Aumenta la duración a 2 segundos
  section.style.transform = "translateY(100px)"; // Desplazamiento inicial
});

// Función que maneja las intersecciones de las secciones
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)"; // Aparece suavemente
    } else {
      entry.target.style.opacity = 0;
      entry.target.style.transform = "translateY(100px)"; // Desaparece suavemente
    }
  });
}, {
  threshold: 0.1 // Inicia cuando el 10% de la sección es visible
});

// Aplica el observer a todas las secciones
sections.forEach(section => {
  observer.observe(section);
});
