// Initialize i18next
i18next
  .use(i18nextBrowserLanguageDetector)
  .use(i18nextXHRBackend)
  .init({
    fallbackLng: 'en',
    debug: true,
    backend: {
      // Load translations from a file
      loadPath: '/locales/{{lng}}.json'
    }
  }, function(err, t) {
    // Initialize the i18next DOM plugin
    jqueryI18next.init(i18next, $, {
      useOptionsAttr: true
    });

    // Translate the content
    $('body').localize();
  });

// Function to change language
function changeLanguage(lng) {
  i18next.changeLanguage(lng, function(err, t) {
    // Translate the content
    $('body').localize();
  });
}

// Event listener for language change
document.getElementById('languageSelector').addEventListener('change', function() {
  var selectedLang = this.value;
  changeLanguage(selectedLang);
});
