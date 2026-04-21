document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu
  const menuToggle = document.querySelector('.menu-toggle');
  const mobilePanel = document.querySelector('.mobile-panel');

  if (menuToggle && mobilePanel) {
    menuToggle.addEventListener('click', () => {
      mobilePanel.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', mobilePanel.classList.contains('open'));
    });
  }

  // Demo links
  document.querySelectorAll('[data-demo]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      alert('Демонстрационный прототип. Здесь может быть переход на билетную систему или webAR-сцену.');
    });
  });

  // AR scenes with QR codes
  const sceneButtons = document.querySelectorAll('[data-scene]');
  const sceneTitle = document.querySelector('[data-scene-title]');
  const sceneText = document.querySelector('[data-scene-text]');
  const qrImage = document.getElementById('qr-image');

  const scenes = {
    woland: {
      title: 'Появление Воланда',
      text: 'Отсканируйте QR-код, чтобы увидеть атмосферную AR-сцену с образом Воланда, цитатой и переходом к материалам о персонаже.',
      qr: 'images/qr-woland.png',
      alt: 'QR-код — Сцена Воланда'
    },
    margarita: {
      title: 'Полёт Маргариты',
      text: 'Отсканируйте QR-код, чтобы открыть визуальную сцену полёта — мотив свободы, превращения и мистического ночного путешествия.',
      qr: 'images/qr-margarita.png',
      alt: 'QR-код — Полёт Маргариты'
    },
    interview: {
      title: 'Интервью с актёром',
      text: 'Отсканируйте QR-код, чтобы посмотреть видеоинтервью с актёром: рассказ о роли, закулисье и процесс подготовки к спектаклю.',
      qr: 'images/qr-interview.png',
      alt: 'QR-код — Интервью с актёром'
    }
  };

  sceneButtons.forEach(button => {
    button.addEventListener('click', () => {
      const key = button.dataset.scene;
      const scene = scenes[key];

      // Update active button
      sceneButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Update title and text
      if (scene && sceneTitle && sceneText) {
        sceneTitle.textContent = scene.title;
        sceneText.textContent = scene.text;
      }

      // Update QR code image
      if (scene && qrImage) {
        qrImage.style.opacity = '0';
        setTimeout(() => {
          qrImage.src = scene.qr;
          qrImage.alt = scene.alt;
          qrImage.style.opacity = '1';
        }, 200);
      }
    });
  });
});