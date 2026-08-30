// ============================================
// ICSL CONTACT PAGE — INTERACTIONS
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Desktop "Service Area" dropdown ---------- */
  const serviceToggle = document.getElementById('serviceToggle');
  const serviceDropdown = serviceToggle.closest('.nav-dropdown');

  serviceToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    serviceDropdown.classList.toggle('open');
  });

  document.addEventListener('click', () => {
    serviceDropdown.classList.remove('open');
  });

  /* ---------- Mobile menu open / close ---------- */
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const closeMenuBtn = document.getElementById('closeMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileOverlay = document.getElementById('mobileOverlay');

  function openMobileMenu(){
    mobileMenu.classList.add('open');
    mobileOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeMobileMenu(){
    mobileMenu.classList.remove('open');
    mobileOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  hamburgerBtn.addEventListener('click', openMobileMenu);
  closeMenuBtn.addEventListener('click', closeMobileMenu);
  mobileOverlay.addEventListener('click', closeMobileMenu);

  /* ---------- Mobile accordion dropdowns ---------- */
  function setupMobileDropdown(toggleId, menuId){
    const toggle = document.getElementById(toggleId);
    const menu = document.getElementById(menuId);
    toggle.addEventListener('click', () => {
      menu.classList.toggle('open');
      toggle.classList.toggle('open');
    });
  }
  setupMobileDropdown('mobileServiceToggle', 'mobileServiceMenu');
  setupMobileDropdown('mobileFlagshipToggle', 'mobileFlagshipMenu');

  /* ---------- Contact form -> WhatsApp ---------- */
  const form = document.getElementById('terminalForm');
  const WHATSAPP_NUMBER = '8801813791709'; // Direct Relay number, no + or spaces

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('fullName').value.trim();
    const company = document.getElementById('company').value.trim();
    const teamSize = document.getElementById('teamSize').value.trim();
    const website = document.getElementById('website').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name) {
      document.getElementById('fullName').focus();
      return;
    }

    let text = `*New Enterprise Inquiry*%0A`;
    text += `Name: ${encodeURIComponent(name)}%0A`;
    if (company)  text += `Enterprise/Region: ${encodeURIComponent(company)}%0A`;
    if (teamSize) text += `Workforce Size: ${encodeURIComponent(teamSize)}%0A`;
    if (website)  text += `URL: ${encodeURIComponent(website)}%0A`;
    if (message)  text += `Message: ${encodeURIComponent(message)}`;

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
    window.open(waUrl, '_blank');
  });

});
