/* Shared site settings loader and safe theme applier for the public pages. */
(function () {
  var DEFAULTS = {
    siteName: { ar: "مكتبة الحكايات", en: "Story Library" },
    texts: {
      eyebrow: { ar: "قصص للأطفال بقلم كاتبها", en: "Children's stories by their author" },
      heroTitle: { ar: "هيا نكتشف حكاية جميلة", en: "Let's discover a lovely story" },
      heroSubtitle: { ar: "كتب صغيرة لقلوب كبيرة. اختر حكاية، افتحها واقرأها قبل النوم.", en: "Small books for big hearts. Pick a story, open it and read it before bed." },
      welcomeText: { ar: "اقرأ، تخيّل، واستمتع!", en: "Read, imagine and enjoy!" },
      browse: { ar: "تصفّح الكتب", en: "Browse books" },
      sectionKicker: { ar: "رفّنا الصغير", en: "Our little bookshelf" },
      shelfTitle: { ar: "رفّ الكتب", en: "The Bookshelf" },
      sectionIntro: { ar: "اختر حكايتك القادمة من هنا", en: "Choose your next story" },
      aboutTitle: { ar: "مرحبًا بك في مكتبة الحكايات", en: "Welcome to the Story Library" },
      aboutText: { ar: "مكتبة بسيطة تجمع القصص المنشورة للصغار. اختر قصة، تعرّف عليها، ثم افتح كتابها لبدء القراءة.", en: "A simple library of published stories for children. Choose a story, learn about it, then open its book to start reading." },
      footer: { ar: "حكاية جميلة قد تجعل يومك أجمل.", en: "A lovely story can make your day brighter." }
    },
    quotes: [],
    featuredQuoteId: "",
    theme: {
      primary: "#7252a0", secondary: "#ef816c", background: "#fffaf2",
      text: "#303048", button: "#7252a0", card: "#ffffff",
      font: "cairo", headingSize: "medium", bodySize: "medium"
    }
  };

  function clone(value) { return JSON.parse(JSON.stringify(value)); }
  function isObject(value) { return value && typeof value === "object" && !Array.isArray(value); }
  function text(value, fallback) { return typeof value === "string" ? value.slice(0, 2000) : fallback; }
  function pair(value, fallback) {
    value = isObject(value) ? value : {};
    return { ar: text(value.ar, fallback.ar), en: text(value.en, fallback.en) };
  }
  function color(value, fallback) { return typeof value === "string" && /^#[0-9a-f]{6}$/i.test(value) ? value.toLowerCase() : fallback; }
  function normalize(raw) {
    var result = clone(DEFAULTS);
    raw = isObject(raw) ? raw : {};
    result.siteName = pair(raw.siteName, DEFAULTS.siteName);
    result.texts = {};
    Object.keys(DEFAULTS.texts).forEach(function (key) { result.texts[key] = pair(raw.texts && raw.texts[key], DEFAULTS.texts[key]); });
    result.quotes = Array.isArray(raw.quotes) ? raw.quotes.slice(0, 100).map(function (quote, index) {
      quote = isObject(quote) ? quote : {};
      return {
        id: text(quote.id, "quote-" + index).slice(0, 100),
        text: pair(quote.text, { ar: "", en: "" }),
        author: pair(quote.author, { ar: "", en: "" })
      };
    }).filter(function (quote) { return quote.text.ar.trim() || quote.text.en.trim(); }) : [];
    result.featuredQuoteId = text(raw.featuredQuoteId, "");
    if (!result.quotes.some(function (quote) { return quote.id === result.featuredQuoteId; })) result.featuredQuoteId = result.quotes.length ? result.quotes[0].id : "";
    var theme = isObject(raw.theme) ? raw.theme : {};
    ["primary", "secondary", "background", "text", "button", "card"].forEach(function (key) {
      result.theme[key] = color(theme[key], DEFAULTS.theme[key]);
    });
    result.theme.font = ["cairo", "system", "serif"].indexOf(theme.font) >= 0 ? theme.font : DEFAULTS.theme.font;
    result.theme.headingSize = ["small", "medium", "large"].indexOf(theme.headingSize) >= 0 ? theme.headingSize : DEFAULTS.theme.headingSize;
    result.theme.bodySize = ["small", "medium", "large"].indexOf(theme.bodySize) >= 0 ? theme.bodySize : DEFAULTS.theme.bodySize;
    return result;
  }
  function localized(value, lang) { return value && (value[lang] || value[lang === "en" ? "ar" : "en"]) || ""; }
  function apply(config) {
    config = normalize(config);
    var lang = window.I18N && I18N.lang === "en" ? "en" : "ar";
    document.querySelectorAll("[data-site-text]").forEach(function (element) {
      var key = element.getAttribute("data-site-text");
      var value = key === "siteName" ? localized(config.siteName, lang) : localized(config.texts[key], lang);
      element.textContent = value;
    });
    if (document.body && document.body.id === "top") document.title = localized(config.siteName, lang);
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", localized(config.texts.aboutText, lang));
    var root = document.documentElement;
    root.style.setProperty("--color-primary", config.theme.primary);
    root.style.setProperty("--color-secondary", config.theme.secondary);
    root.style.setProperty("--color-page", config.theme.background);
    root.style.setProperty("--color-ink", config.theme.text);
    root.style.setProperty("--color-button", config.theme.button);
    root.style.setProperty("--color-paper", config.theme.card);
    var fonts = {
      cairo: { body: '"Cairo", "Segoe UI", Tahoma, Arial, sans-serif', display: lang === "en" ? '"Fredoka", "Cairo", "Segoe UI", Tahoma, sans-serif' : '"Cairo", "Segoe UI", Tahoma, sans-serif' },
      system: { body: 'Tahoma, Arial, "Segoe UI", sans-serif', display: '"Trebuchet MS", Tahoma, Arial, sans-serif' },
      serif: { body: 'Georgia, "Times New Roman", Tahoma, serif', display: 'Georgia, "Times New Roman", Tahoma, serif' }
    }[config.theme.font];
    root.style.setProperty("--font-body", fonts.body);
    root.style.setProperty("--font-display", fonts.display);
    root.style.setProperty("--heading-scale", { small: "0.9", medium: "1", large: "1.12" }[config.theme.headingSize]);
    root.style.setProperty("--body-scale", { small: "0.9", medium: "1", large: "1.1" }[config.theme.bodySize]);

    var quote = config.quotes.find(function (item) { return item.id === config.featuredQuoteId; }) || config.quotes[0];
    var section = document.getElementById("quote-section");
    if (section) {
      section.hidden = !quote;
      if (quote) {
        var quoteText = document.getElementById("featured-quote-text");
        var quoteAuthor = document.getElementById("featured-quote-author");
        var author = localized(quote.author, lang);
        quoteText.textContent = localized(quote.text, lang);
        quoteAuthor.textContent = author;
        quoteAuthor.hidden = !author;
      }
    }
  }
  function load() {
    return fetch("site-config.json?v=" + Date.now()).then(function (response) {
      if (!response.ok) throw new Error("site-config " + response.status);
      return response.json();
    }).then(normalize).catch(function () { return clone(DEFAULTS); });
  }
  window.SiteConfig = { defaults: function () { return clone(DEFAULTS); }, normalize: normalize, clone: clone, apply: apply, load: load };
})();
