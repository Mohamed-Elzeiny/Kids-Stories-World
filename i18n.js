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
      e403: "رفض GitHub الطلب. تحقق من صلاحيات المفتاح أو حدود الطلبات. تفاصيل GitHub:",
      e404: "لم يتم العثور على مسار الملف المطلوب. تفاصيل GitHub:",
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
      e403: "GitHub refused the request. Check token permissions or rate limits. GitHub details:",
      e404: "The requested file path was not found. GitHub details:",
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

  Object.assign(D.ar, {
    homePage: "الصفحة الرئيسية", siteSettingsTitle: "إعدادات الموقع", settingsNote: "تُحفظ التغييرات في مستودع الموقع عبر GitHub. إذا تعذر الحفظ، ستظهر رسالة توضح السبب.",
    settingsIdentity: "هوية الموقع", settingsHomeText: "نصوص الصفحة الرئيسية", siteNameAr: "اسم الموقع بالعربية", siteNameEn: "اسم الموقع بالإنجليزية",
    settingEyebrow: "عبارة قصيرة (عربي)", settingEyebrowEn: "عبارة قصيرة (إنجليزي)", settingHeroTitleAr: "العنوان الرئيسي (عربي)", settingHeroTitleEn: "العنوان الرئيسي (إنجليزي)",
    settingSubtitleAr: "العنوان الفرعي (عربي)", settingSubtitleEn: "العنوان الفرعي (إنجليزي)", settingWelcomeAr: "النص الترحيبي (عربي)", settingWelcomeEn: "النص الترحيبي (إنجليزي)",
    settingBrowseAr: "نص زر القصص (عربي)", settingBrowseEn: "نص زر القصص (إنجليزي)", settingKickerAr: "عبارة قسم القصص (عربي)", settingKickerEn: "عبارة قسم القصص (إنجليزي)",
    settingShelfAr: "عنوان قسم القصص (عربي)", settingShelfEn: "عنوان قسم القصص (إنجليزي)", settingSectionIntroAr: "وصف قسم القصص (عربي)", settingSectionIntroEn: "وصف قسم القصص (إنجليزي)",
    settingAboutTitleAr: "عنوان التعريف (عربي)", settingAboutTitleEn: "عنوان التعريف (إنجليزي)", settingAboutTextAr: "وصف الموقع (عربي)", settingAboutTextEn: "وصف الموقع (إنجليزي)", settingFooterAr: "نص التذييل (عربي)", settingFooterEn: "نص التذييل (إنجليزي)",
    settingsQuotes: "الاقتباسات", quoteNote: "أضف اقتباساتك واكتب النسختين اللغويتين. اختر الاقتباس الذي يظهر في الصفحة الرئيسية.", quoteTextAr: "الاقتباس (عربي)", quoteTextEn: "الاقتباس (إنجليزي)", quoteAuthorAr: "صاحب الاقتباس (اختياري، عربي)", quoteAuthorEn: "صاحب الاقتباس (اختياري، إنجليزي)", quoteAdd: "إضافة الاقتباس", quoteUpdate: "حفظ الاقتباس", quoteCancel: "إلغاء التعديل", quoteEmpty: "لا توجد اقتباسات مضافة.", quoteFeature: "عرض في الرئيسية", quoteEdit: "تعديل", quoteDelete: "حذف", quoteNeedText: "اكتب الاقتباس بالعربية أو الإنجليزية أولًا.",
    settingsAppearance: "ستايل الألوان والخطوط", paletteNote: "اختر ستايل ألوان متناسقًا لتطبيقه على الموقع بالكامل.", paletteLabel: "أنماط الألوان", paletteCustomNotice: "الألوان المحفوظة حاليًا لا تطابق نمطًا جاهزًا. اختر نمطًا لتوحيد الألوان.", paletteStorybook: "حكايات بنفسجية", paletteOcean: "نسيم المحيط", paletteMeadow: "حديقة خضراء", paletteBerry: "توت وورود", paletteSunrise: "شروق دافئ", settingFont: "نوع الخط", fontCairo: "القاهرة / Cairo", fontSystem: "خط النظام", fontSerif: "خط كلاسيكي", headingSize: "حجم العناوين", bodySize: "حجم النصوص", sizeSmall: "صغير", sizeMedium: "متوسط", sizeLarge: "كبير", settingsPreview: "معاينة مباشرة", previewCopy: "تظهر الألوان والخطوط هنا مباشرة أثناء التعديل.",
    saveSettings: "حفظ الإعدادات", cancelSettings: "إلغاء التعديلات", settingsLoading: "جارٍ تحميل إعدادات الموقع…", settingsLoaded: "تم تحميل الإعدادات المحفوظة.", settingsNotFound: "لا يوجد ملف إعدادات محفوظ بعد. ستُستخدم القيم الافتراضية ويمكن حفظها لإنشاء الملف.", settingsLoadError: "تعذر تحميل إعدادات الموقع من GitHub. لن يُسمح بالحفظ قبل إعادة الاتصال.", settingsUnsaved: "توجد تعديلات غير محفوظة.", settingsSaving: "جارٍ حفظ الإعدادات في GitHub…", settingsSaveSuccess: "تم التحقق من حفظ الإعدادات في GitHub وقراءتها مجددًا.", settingsSaveFailure: "لم يتم حفظ الإعدادات في GitHub: ", settingsVerifyFailure: "أرسل GitHub طلب الحفظ، لكن تعذر تأكيد القيم بقراءتها مجددًا: "
  });
  Object.assign(D.en, {
    homePage: "Home", siteSettingsTitle: "Site Settings", settingsNote: "Changes are saved to the site repository through GitHub. If saving fails, the reason will be shown.",
    settingsIdentity: "Site identity", settingsHomeText: "Homepage text", siteNameAr: "Site name in Arabic", siteNameEn: "Site name in English",
    settingEyebrow: "Short intro (Arabic)", settingEyebrowEn: "Short intro (English)", settingHeroTitleAr: "Main heading (Arabic)", settingHeroTitleEn: "Main heading (English)",
    settingSubtitleAr: "Subtitle (Arabic)", settingSubtitleEn: "Subtitle (English)", settingWelcomeAr: "Welcome text (Arabic)", settingWelcomeEn: "Welcome text (English)",
    settingBrowseAr: "Stories button (Arabic)", settingBrowseEn: "Stories button (English)", settingKickerAr: "Stories section label (Arabic)", settingKickerEn: "Stories section label (English)",
    settingShelfAr: "Stories section heading (Arabic)", settingShelfEn: "Stories section heading (English)", settingSectionIntroAr: "Stories section description (Arabic)", settingSectionIntroEn: "Stories section description (English)",
    settingAboutTitleAr: "About heading (Arabic)", settingAboutTitleEn: "About heading (English)", settingAboutTextAr: "Site description (Arabic)", settingAboutTextEn: "Site description (English)", settingFooterAr: "Footer text (Arabic)", settingFooterEn: "Footer text (English)",
    settingsQuotes: "Quotes", quoteNote: "Add your own quotes in both languages and choose which one appears on the homepage.", quoteTextAr: "Quote (Arabic)", quoteTextEn: "Quote (English)", quoteAuthorAr: "Quote author (optional, Arabic)", quoteAuthorEn: "Quote author (optional, English)", quoteAdd: "Add quote", quoteUpdate: "Save quote", quoteCancel: "Cancel edit", quoteEmpty: "No quotes have been added.", quoteFeature: "Show on homepage", quoteEdit: "Edit", quoteDelete: "Delete", quoteNeedText: "Enter the quote in Arabic or English first.",
    settingsAppearance: "Color styles and fonts", paletteNote: "Choose a coordinated color style to apply across the site.", paletteLabel: "Color styles", paletteCustomNotice: "The saved colors do not match a preset. Choose a style to apply a coordinated palette.", paletteStorybook: "Purple Storybook", paletteOcean: "Ocean Breeze", paletteMeadow: "Green Meadow", paletteBerry: "Berry Blossoms", paletteSunrise: "Warm Sunrise", settingFont: "Font family", fontCairo: "Cairo", fontSystem: "System font", fontSerif: "Classic serif", headingSize: "Heading size", bodySize: "Body text size", sizeSmall: "Small", sizeMedium: "Medium", sizeLarge: "Large", settingsPreview: "Live preview", previewCopy: "Colors and fonts preview here while you edit.",
    saveSettings: "Save settings", cancelSettings: "Cancel changes", settingsLoading: "Loading site settings…", settingsLoaded: "Saved settings loaded.", settingsNotFound: "No settings file exists yet. Defaults are shown; save to create the file.", settingsLoadError: "Could not load site settings from GitHub. Saving is disabled until the connection is restored.", settingsUnsaved: "You have unsaved changes.", settingsSaving: "Saving settings to GitHub…", settingsSaveSuccess: "Settings were saved to GitHub and verified by reading them back.", settingsSaveFailure: "Settings were not saved to GitHub: ", settingsVerifyFailure: "GitHub accepted the save request, but I could not confirm the values by reading them back: "
  });

  D.ar.siteConfigLoadError = "تعذر تحميل إعدادات المظهر المحفوظة. تُعرض الألوان الافتراضية مؤقتًا.";
  D.en.siteConfigLoadError = "The saved appearance settings could not be loaded. Default colors are shown temporarily.";

  Object.assign(D.ar, {
    lReconfigure: "تغيير مستودع GitHub", reconfigureTitle: "تحديث اتصال GitHub", reconfigureNote: "أدخل كلمة مرور الإدارة للتحقق من الحساب، ثم حدّث بيانات المستودع ومفتاح الوصول.",
    lReconfigureSubmit: "التحقق وحفظ الاتصال", reconfigurePrompt: "أدخل بيانات المستودع ومفتاح الوصول الجديد، ثم اضغط زر التحقق.",
    eRepoMissing: "لم يتم العثور على المستودع بهذا الاسم أو لا يمكن الوصول إليه بهذا المفتاح.",
    eBranchMissing: "تم العثور على المستودع، لكن الفرع المحدد غير موجود أو لا يمكن الوصول إليه.",
    eContentsMissing: "المستودع والفرع موجودان، لكن تعذرت قراءة books.json. تحقق من وجود الملف وصلاحية Contents للقراءة. تفاصيل GitHub:",
    eWrite404: "لم يقبل GitHub تحديث الملف. تحقق من صلاحية Contents للمفتاح ومسار الملف والفرع. تفاصيل GitHub:",
    eVault: "تعذر حفظ بيانات الاتصال في هذا المتصفح. تحقق من مساحة التخزين المتاحة وإعدادات الخصوصية."
  });
  Object.assign(D.en, {
    lReconfigure: "Change GitHub repository", reconfigureTitle: "Update GitHub connection", reconfigureNote: "Enter your admin password to verify this account, then update the repository details and access token.",
    lReconfigureSubmit: "Verify and save connection", reconfigurePrompt: "Enter the repository details and new access token, then verify the connection.",
    eRepoMissing: "The repository was not found under this name or cannot be accessed with this token.",
    eBranchMissing: "The repository was found, but the selected branch is missing or inaccessible.",
    eContentsMissing: "The repository and branch exist, but books.json could not be read. Check that the file exists and the token has Contents read permission. GitHub details:",
    eWrite404: "GitHub rejected the file update. Check the token's Contents permission, file path and branch. GitHub details:",
    eVault: "The connection could not be saved in this browser. Check available storage and privacy settings."
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
