/* Language switch (Arabic / English) shared by index.html and admin.html */
(function () {
  var D = {
    ar: {
      pageTitle: "مكتبة الحكايات",
      adminTitle: "لوحة رفع الكتب",
      langBtn: "English",
      eyebrow: "قصص للأطفال بقلم كاتبها",
      siteName: "مكتبة الحكايات",
      lead: "كتب صغيرة لقلوب كبيرة. اختر حكاية، افتحها واقرأها قبل النوم.",
      browse: "تصفّح الكتب",
      shelfTitle: "رفّ الكتب",
      filterLabel: "تصفية حسب العمر",
      all: "كل الكتب",
      "age_3-5": "3 - 5 سنوات",
      "age_6-8": "6 - 8 سنوات",
      "age_9-12": "9 - 12 سنة",
      readBook: "اقرأ الكتاب",
      coverAlt: "غلاف كتاب ",
      emptyTitle: "الرفّ ينتظر حكاياته",
      emptyMsg: "الكتب الجديدة ستظهر هنا قريبًا. عد بعد قليل لتقرأ أولى الحكايات.",
      loading: "جارٍ تحميل الكتب…",
      loadFail: "تعذّر تحميل قائمة الكتب. افتح الموقع من رابط الاستضافة وليس من الملف مباشرة.",
      footer: "جميع القصص من تأليف صاحب الموقع. اقرأها واستمتع بها.",

      aEyebrow: "خاصة بصاحب الموقع",
      aLead: "ارفع كتابًا جديدًا أو احذف كتابًا قديمًا. التغييرات تُحفظ مباشرة في مستودع الموقع على ⁦GitHub⁩.",
      connTitle: "1. ربط الموقع بحسابك",
      connNote: "تحتاج مفتاح وصول (⁦Token⁩) من ⁦GitHub⁩ لمستودع الموقع فقط. المفتاح يُحفظ في متصفحك على هذا الجهاز ولا يُرسل لأي جهة غير ⁦GitHub⁩. لا تشاركه مع أحد.",
      cOwner: "اسم المستخدم على ⁦GitHub⁩",
      cRepo: "اسم المستودع (⁦Repository⁩)",
      cBranch: "الفرع (⁦Branch⁩)",
      cToken: "مفتاح الوصول (⁦Token⁩)",
      cRemember: "تذكّر هذه البيانات على هذا الجهاز",
      cSave: "حفظ وتحميل الكتب",
      addTitle: "2. إضافة كتاب جديد",
      addNote: "ملف الكتاب بصيغة ⁦PDF⁩ وحجمه حتى 25 ميغابايت. صورة الغلاف اختيارية وتُصغَّر تلقائيًا. اكتب العنوان والنبذة بالعربية أو الإنجليزية أو بالاثنتين.",
      fTitleAr: "عنوان القصة (عربي)",
      fTitleEn: "عنوان القصة (إنجليزي)",
    fCategoryAr: "التصنيف (عربي، اختياري)",
    fCategoryEn: "التصنيف (إنجليزي، اختياري)",
      fAge: "الفئة العمرية",
      fPdf: "ملف الكتاب (⁦PDF⁩)",
      fSumAr: "نبذة قصيرة (عربي)",
      fSumEn: "نبذة قصيرة (إنجليزي)",
      fCover: "صورة الغلاف (اختياري)",
      fPhTitleAr: "مثال: الأرنب الذي أحب النجوم",
      fPhTitleEn: "Example: The Rabbit Who Loved Stars",
      fPhSumAr: "اكتب سطرين عن القصة",
      fPhSumEn: "Write two lines about the story",
      fSubmit: "رفع الكتاب",
      listTitle: "3. الكتب الحالية",
      backSite: "العودة إلى الموقع",
      noBooks: "لا توجد كتب بعد. أضف أول كتاب من النموذج بالأعلى.",
      del: "حذف",
      delConfirm: "تأكيد الحذف",
      mNeedConn: "املأ اسم المستخدم والمستودع والمفتاح.",
      mChecking: "جارٍ التحقق من الاتصال…",
      mConnected: "تم الاتصال. عدد الكتب الحالي: ",
      mLinkFirst: "اربط الموقع بحسابك من الخطوة الأولى.",
      mNeedTitle: "اكتب عنوان القصة أولًا (بالعربية أو الإنجليزية).",
      mNeedPdf: "اختر ملف الكتاب بصيغة PDF.",
      mPdfBig: "ملف الكتاب أكبر من 25 ميغابايت. اضغطه أولًا.",
      mUpPdf: "جارٍ رفع ملف الكتاب…",
      mUpCover: "جارٍ رفع الغلاف…",
      mUpList: "جارٍ تحديث قائمة الكتب…",
      mDone: "تمت إضافة الكتاب. سيظهر في الموقع بعد نحو دقيقة، عندما ينتهي ⁦GitHub Pages⁩ من التحديث.",
      mDeleted: "تم حذف الكتاب.",
      e401: "المفتاح غير صحيح أو انتهت صلاحيته.",
      e403: "المفتاح لا يملك صلاحية الكتابة على هذا المستودع.",
      e404: "لم أجد المستودع أو الفرع. راجع اسم المستخدم والمستودع والمفتاح.",
      e409: "تعارض أثناء الحفظ. أعد المحاولة.",
      eNet: "تعذّر الاتصال بـ GitHub. تأكد من الإنترنت وأعد المحاولة.",
      eOther: "حدث خطأ غير متوقع. أعد المحاولة."
    },
    en: {
      pageTitle: "Story Library",
      adminTitle: "Book Upload Panel",
      langBtn: "العربية",
      eyebrow: "Children's stories by their author",
      siteName: "Story Library",
      lead: "Small books for big hearts. Pick a story, open it and read it before bed.",
      browse: "Browse books",
      shelfTitle: "The Bookshelf",
      filterLabel: "Filter by age",
      all: "All books",
      "age_3-5": "Ages 3 - 5",
      "age_6-8": "Ages 6 - 8",
      "age_9-12": "Ages 9 - 12",
      readBook: "Read the book",
      coverAlt: "Cover of ",
      emptyTitle: "The shelf is waiting for its stories",
      emptyMsg: "New books will appear here soon. Come back in a little while to read the first stories.",
      loading: "Loading books…",
      loadFail: "Could not load the book list. Open the site from its hosting link, not directly from the file.",
      footer: "All stories are written by the site owner. Read them and enjoy.",

      aEyebrow: "For the site owner only",
      aLead: "Upload a new book or delete an old one. Changes are saved directly to the site's repository on GitHub.",
      connTitle: "1. Connect the site to your account",
      connNote: "You need a GitHub access token for the site's repository only. The token is kept in your browser on this device and is sent only to GitHub. Do not share it with anyone.",
      cOwner: "GitHub username",
      cRepo: "Repository name",
      cBranch: "Branch",
      cToken: "Access token",
      cRemember: "Remember these details on this device",
      cSave: "Save and load books",
      addTitle: "2. Add a new book",
      addNote: "The book file must be a PDF up to 25 MB. The cover image is optional and is shrunk automatically. Write the title and summary in Arabic, English or both.",
      fTitleAr: "Story title (Arabic)",
      fTitleEn: "Story title (English)",
    fCategoryAr: "Category (Arabic, optional)",
    fCategoryEn: "Category (English, optional)",
      fAge: "Age group",
      fPdf: "Book file (PDF)",
      fSumAr: "Short summary (Arabic)",
      fSumEn: "Short summary (English)",
      fCover: "Cover image (optional)",
      fPhTitleAr: "مثال: الأرنب الذي أحب النجوم",
      fPhTitleEn: "Example: The Rabbit Who Loved Stars",
      fPhSumAr: "اكتب سطرين عن القصة",
      fPhSumEn: "Write two lines about the story",
      fSubmit: "Upload book",
      listTitle: "3. Current books",
      backSite: "Back to the site",
      noBooks: "No books yet. Add the first one from the form above.",
      del: "Delete",
      delConfirm: "Confirm delete",
      mNeedConn: "Fill in the username, repository and token.",
      mChecking: "Checking the connection…",
      mConnected: "Connected. Number of books: ",
      mLinkFirst: "Connect the site to your account in step 1 first.",
      mNeedTitle: "Write the story title first (Arabic or English).",
      mNeedPdf: "Choose the book file as a PDF.",
      mPdfBig: "The book file is larger than 25 MB. Compress it first.",
      mUpPdf: "Uploading the book file…",
      mUpCover: "Uploading the cover…",
      mUpList: "Updating the book list…",
      mDone: "Book added. It will show on the site in about a minute, once GitHub Pages finishes updating.",
      mDeleted: "Book deleted.",
      e401: "The token is wrong or has expired.",
      e403: "The token does not have write access to this repository.",
      e404: "Repository or branch not found. Check the username, repository and token.",
      e409: "Conflict while saving. Try again.",
      eNet: "Could not reach GitHub. Check your internet and try again.",
      eOther: "Something unexpected went wrong. Try again."
    }
  };

  Object.assign(D.ar, {
    setupTitle: "إنشاء حساب الإدارة",
    setupNote: "اختر اسم مستخدم وكلمة مرور لصفحة الرفع. يُحفظ مفتاح ⁦GitHub⁩ مشفّرًا بكلمة مرورك على هذا الجهاز فقط. تحتاج مفتاح ⁦Token⁩ من ⁦GitHub⁩ لمستودع الموقع وحده.",
    loginTitle: "تسجيل الدخول",
    loginNote: "ادخل باسم المستخدم وكلمة المرور اللذين أنشأتهما.",
    lUser: "اسم المستخدم",
    lPass: "كلمة المرور",
    lPassNew: "كلمة المرور (8 أحرف على الأقل)",
    lSetupBtn: "إنشاء الحساب",
    lLoginBtn: "دخول",
    lLogout: "تسجيل الخروج",
    lReset: "نسيت كلمة المرور أو أريد البدء من جديد",
    lResetConfirm: "تأكيد: سيُمسح الحساب المحفوظ على هذا الجهاز",
    eWrong: "اسم المستخدم أو كلمة المرور غير صحيحة.",
    ePassShort: "كلمة المرور يجب ألا تقل عن 8 أحرف.",
    eNoCrypto: "المتصفح لا يدعم التشفير هنا. افتح الصفحة من رابط الموقع (⁦https⁩).",
    mNeedUser: "اكتب اسم المستخدم وكلمة المرور.",
    connInfo: "المستودع: "
  });
  Object.assign(D.en, {
    setupTitle: "Create the admin account",
    setupNote: "Choose a username and password for the upload page. Your GitHub token is stored encrypted with your password on this device only. You need a GitHub token for the site's repository alone.",
    loginTitle: "Log in",
    loginNote: "Enter the username and password you created.",
    lUser: "Username",
    lPass: "Password",
    lPassNew: "Password (at least 8 characters)",
    lSetupBtn: "Create account",
    lLoginBtn: "Log in",
    lLogout: "Log out",
    lReset: "Forgot the password or want to start over",
    lResetConfirm: "Confirm: the account saved on this device will be erased",
    eWrong: "The username or password is incorrect.",
    ePassShort: "The password must be at least 8 characters.",
    eNoCrypto: "This browser cannot encrypt here. Open the page from the site link (https).",
    mNeedUser: "Enter the username and password.",
    connInfo: "Repository: "
  });

  Object.assign(D.ar, {
    homeLabel: "الصفحة الرئيسية لمكتبة الحكايات", navLabel: "التنقل الرئيسي", navStories: "القصص", navAbout: "عن المكتبة", navAdmin: "إدارة المكتبة",
    heroTitleStart: "هيا نكتشف", heroTitleAccent: "حكاية جميلة", welcomeNote: "اقرأ، تخيّل، واستمتع!",
    sectionKicker: "رفّنا الصغير", sectionIntro: "اختر حكايتك القادمة من هنا", searchLabel: "ابحث عن قصة بالعنوان", filterLabel: "تصفية حسب التصنيف",
    searchPlaceholder: "ابحث عن قصة بالعنوان...", loadingTitle: "نجهّز الرفّ للقصص", loadErrorTitle: "لم نتمكن من تحميل القصص",
    noResultsTitle: "لم نعثر على نتائج", noSearchResults: "جرّب كلمة أخرى أو أزل بعض التصنيفات.",
    clearSearch: "مسح البحث والتصفية", emptyMsg: "لا توجد قصص منشورة بعد. ستجد هنا كل قصة جديدة عند إضافتها.",
    emptyTitle: "هذه الحديقة تنتظر حكاياتها", storyDetails: "اكتشف القصة", untitledStory: "قصة بلا عنوان",
    summaryUnavailable: "لا يوجد وصف لهذه القصة حتى الآن.", aboutTitle: "مرحبًا بك في مكتبة الحكايات",
    aboutText: "مكتبة بسيطة تجمع القصص المنشورة للصغار. اختر قصة، تعرّف عليها، ثم افتح كتابها لبدء القراءة.",
    backTop: "إلى الأعلى ↑", storyBack: "العودة إلى القصص", storyRead: "افتح الكتاب واقرأه",
    storyAbout: "عن هذه القصة", storyMissing: "لم نعثر على هذه القصة. ربما أزيلت من المكتبة.",
    storyMissingTitle: "هذه القصة غير متاحة", storyNoFile: "لا يوجد ملف قراءة لهذه القصة حتى الآن.",
    storyCategory: "التصنيف", storyText: "نص القصة", storyAudio: "استمع إلى القصة", storyGallery: "صور من القصة",
    previousImage: "الصورة السابقة", nextImage: "الصورة التالية", imageCount: "صورة",
    pdfFallback: "إذا لم يظهر الكتاب هنا، افتحه في نافذة جديدة.", pdfOpenNew: "فتح الكتاب في نافذة جديدة",
    footer: "حكاية جميلة قد تجعل يومك أجمل."
  });
  Object.assign(D.en, {
    homeLabel: "Story Library home", navLabel: "Main navigation", navStories: "Stories", navAbout: "About", navAdmin: "Library admin",
    heroTitleStart: "Let's discover", heroTitleAccent: "a lovely story", welcomeNote: "Read, imagine and enjoy!",
    sectionKicker: "Our little bookshelf", sectionIntro: "Choose your next story", searchLabel: "Search stories by title", filterLabel: "Filter by category",
    searchPlaceholder: "Search stories by title...", loadingTitle: "Getting the bookshelf ready", loadErrorTitle: "We couldn't load the stories",
    noResultsTitle: "No stories found", noSearchResults: "Try another word or remove a filter.",
    clearSearch: "Clear search and filters", emptyMsg: "There are no published stories yet. New stories will appear here when added.",
    emptyTitle: "This garden is waiting for stories", storyDetails: "Discover the story", untitledStory: "Untitled story",
    summaryUnavailable: "There is no description for this story yet.", aboutTitle: "Welcome to the Story Library",
    aboutText: "A simple library of published stories for children. Choose a story, learn about it, then open its book to start reading.",
    backTop: "Back to top ↑", storyBack: "Back to stories", storyRead: "Open and read the book",
    storyAbout: "About this story", storyMissing: "We couldn't find this story. It may have been removed from the library.",
    storyMissingTitle: "This story is unavailable", storyNoFile: "There is no reading file for this story yet.",
    storyCategory: "Category", storyText: "The story", storyAudio: "Listen to the story", storyGallery: "Story pictures",
    previousImage: "Previous image", nextImage: "Next image", imageCount: "image",
    pdfFallback: "If the book does not appear here, open it in a new window.", pdfOpenNew: "Open book in a new window",
    footer: "A lovely story can make your day brighter."
  });

  var KEY = "stories-lang";
  var lang = "ar";
  try { var s = localStorage.getItem(KEY); if (s === "ar" || s === "en") lang = s; } catch (e) {}
  var listeners = [];

  function t(k) { return (D[lang] && D[lang][k]) || D.ar[k] || k; }

  function apply() {
    var root = document.documentElement;
    root.setAttribute("lang", lang);
    root.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    var isAdmin = !!document.getElementById("admin-marker");
    document.title = t(isAdmin ? "adminTitle" : "pageTitle");
    document.querySelectorAll("[data-i18n]").forEach(function (n) { n.textContent = t(n.getAttribute("data-i18n")); });
    document.querySelectorAll("[data-i18n-ph]").forEach(function (n) { n.setAttribute("placeholder", t(n.getAttribute("data-i18n-ph"))); });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (n) { n.setAttribute("aria-label", t(n.getAttribute("data-i18n-aria"))); });
    listeners.forEach(function (fn) { fn(); });
  }

  function set(l) {
    lang = l === "en" ? "en" : "ar";
    try { localStorage.setItem(KEY, lang); } catch (e) {}
    apply();
  }

  /* يختار النص المناسب للغة الحالية، ويرجع للغة الأخرى إن لم يوجد */
  function pick(b, field) {
    var ar = b[field] || "", en = b[field + "En"] || "";
    return lang === "en" ? (en || ar) : (ar || en);
  }

  window.I18N = {
    t: t,
    pick: pick,
    on: function (fn) { listeners.push(fn); },
    get lang() { return lang; }
  };

  document.addEventListener("click", function (ev) {
    var b = ev.target.closest && ev.target.closest("#lang-btn");
    if (b) set(lang === "ar" ? "en" : "ar");
  });

  apply();
})();
