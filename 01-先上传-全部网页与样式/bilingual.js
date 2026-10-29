// Keep the current section when the visitor changes language.
document.querySelectorAll('.language-switch a[data-language]').forEach(link => {
  link.addEventListener('click', () => {
    if (!window.location.hash) return;
    const destination = new URL(link.getAttribute('href'), window.location.href);
    destination.hash = window.location.hash;
    link.href = destination.href;
  });
});
