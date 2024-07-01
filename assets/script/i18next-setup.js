document.addEventListener('DOMContentLoaded', function () {
  i18next.use(i18nextHttpBackend).init({
      lng: 'en', // Ngôn ngữ mặc định
      fallbackLng: 'en', // Ngôn ngữ fallback
      debug: true,
      ns: ['translation'], // Namespace mặc định
      defaultNS: 'translation', // Sử dụng namespace mặc định
      backend: {
          loadPath:'/assets/locales/{{lng}}.json' // Đường dẫn tới các tệp JSON
      }
  });

  function updateContent() {
      document.querySelectorAll('[data-i18n]').forEach(function (element) {
          const translationKey = element.getAttribute('data-i18n');
          const translatedText = i18next.t(translationKey);
          console.log(`Translating ${translationKey} to ${translatedText}`);
          element.innerText = translatedText;
      });
  }

  document.getElementById('en-button').addEventListener('click', function () {
      i18next.changeLanguage('en', (err, t) => {
          if (err) return console.error(err);
          updateContent();
      });
  });

  document.getElementById('vi-button').addEventListener('click', function () {
      i18next.changeLanguage('vi', (err, t) => {
          if (err) return console.error(err);
          updateContent();
      });
  });

  const tabs = document.querySelectorAll('.tab');
  const content = document.querySelectorAll('.tab-content');

  tabs.forEach((tab, index) => {
      tab.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector('.tab.active').classList.remove('active');
          document.querySelector('.tab-content.active').classList.remove('active');
          this.classList.add('active');
          content[index].classList.add('active');
      });
  });
});