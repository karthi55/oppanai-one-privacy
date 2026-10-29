/* Oppanai One website: language toggle (English ⇄ Tamil), mobile menu, reveal on scroll.
   English lives in the HTML (what search engines index); Tamil is swapped in from TA below. */
(function () {
  "use strict";

  var TA = {
    "skip": "உள்ளடக்கத்துக்குச் செல்லவும்",
    "nav.services": "சேவைகள்",
    "nav.how": "எப்படி செயல்படுகிறது",
    "nav.artists": "கலைஞர்களுக்கு",
    "nav.faq": "கேள்விகள்",
    "nav.contact": "தொடர்புக்கு",
    "cta.getApp": "செயலியைப் பெறுங்கள்",
    "tagline": "அன்றாட பராமரிப்புக்கும் ஒவ்வொரு நிகழ்வுக்கும் அழகுச் சேவைகள்",

    "hero.eyebrow": "இப்போது கோயம்புத்தூரில்",
    "hero.title": "உங்கள் விருப்பமான தோற்றம், <span>நம்பிக்கையுடன் முன்பதிவு</span>",
    "hero.lead": "உங்கள் அருகிலுள்ள சரிபார்க்கப்பட்ட அழகுக் கலைஞர்களைக் கண்டறியுங்கள். உண்மையான விலைகளை ஒப்பிட்டு, அவர்களின் தேதிகளைப் பார்த்து, சில தட்டல்களில் முன்பதிவு செய்யுங்கள் — தமிழிலோ ஆங்கிலத்திலோ.",
    "hero.ctaArtist": "கலைஞராக இணையுங்கள்",
    "chip.verified": "சரிபார்க்கப்பட்ட கலைஞர்கள்",
    "chip.prices": "முன்கூட்டியே தெளிவான விலை",
    "chip.lang": "தமிழ் & English",

    "services.eyebrow": "எங்கள் சேவைகள்",
    "services.title": "உங்கள் அழகுப் பராமரிப்புக்கான அனைத்தும், ஒரே இடத்தில்",
    "services.lead": "அன்றாட அழகுப் பராமரிப்பு முதல் சிறப்பு நிகழ்வுகள் வரை, உங்கள் விருப்பத்திற்கேற்ற அழகுச் சேவைகளை முன்பதிவு செய்யுங்கள்.",
    "cat.mehndi": "மெஹந்தி",
    "cat.makeup": "ஒப்பனை",
    "cat.groupMehndi": "குழு மெஹந்தி",
    "cat.hair": "சிகை அலங்காரம்",
    "cat.saree": "புடவை கட்டுதல்",
    "cat.care": "சருமம் மற்றும் அழகுப் பராமரிப்பு",
    "cat.combos": "காம்போ சலுகைகள்",
    "cat.nails": "நக அலங்காரம்",
    "banner.mehndi": "நுணுக்கமான வடிவமைப்புகள் — ஒரு கைக்கு அல்லது ஒரு நிகழ்வுக்கு விலை.",
    "banner.makeup": "HD, ஏர்பிரஷ் மற்றும் பாரம்பரிய தோற்றங்கள்; விரும்பினால் ட்ரையல்.",

    "how.title": "3 எளிய படிகளில் உங்கள் கலைஞரை முன்பதிவு செய்யுங்கள்",
    "step1.title": "தேடி ஒப்பிடுங்கள்",
    "step1.body": "அருகிலுள்ள கலைஞர்களின் படைப்புகள், மதிப்பீடுகள் மற்றும் உண்மையான விலைகளைப் பாருங்கள்.",
    "step2.title": "தேதியும் பேக்கேஜும் தேர்வு செய்யுங்கள்",
    "step2.body": "உங்கள் நிகழ்வுத் தேதியில் கலைஞர் கிடைப்பாரா எனப் பார்த்து, பேக்கேஜ் மற்றும் கூடுதல் சேவைகளைத் தேர்ந்தெடுங்கள்.",
    "step3.title": "உங்கள் விருப்பப்படி முன்பதிவு",
    "step3.body": "செயலியில் முன்பணம் அல்லது முழுத் தொகையைச் செலுத்துங்கள், அல்லது கலைஞரிடம் நேரடியாகச் செலுத்துங்கள்.",

    "why.eyebrow": "ஏன் Oppanai One",
    "why.title": "உங்களுக்கான அழகுச் சேவைகள்",
    "why1.title": "சரிபார்க்கப்பட்ட கலைஞர்கள்",
    "why1.body": "தேடலில் தோன்றும் முன் ஒவ்வொரு கலைஞரின் அடையாளமும் வணிகமும் எங்கள் குழுவால் சரிபார்க்கப்படுகிறது.",
    "why2.title": "நேர்மையான விலை",
    "why2.body": "முன்பதிவுக்கு முன்பே முழு விலை விவரம், சலுகைகள், பயணக் கட்டணம் அனைத்தையும் பாருங்கள். நிகழ்வு நாளில் எந்த ஆச்சரியமும் இல்லை.",
    "why3.title": "உண்மையான மதிப்புரைகள்",
    "why3.body": "முன்பதிவை முடித்த வாடிக்கையாளர்கள் மட்டுமே மதிப்புரை எழுத முடியும்.",
    "why4.title": "உங்கள் எண் பாதுகாப்பாக",
    "why4.body": "நீங்கள் முன்பதிவு செய்யும் கலைஞருடன் மட்டுமே உங்கள் தொலைபேசி எண் பகிரப்படும்.",
    "why5.title": "மெஹந்தி நேர ஆலோசனை",
    "why5.body": "உங்கள் நிகழ்வில் மெஹந்தி நிறம் சிறப்பாக இருக்க, எப்போது போட வேண்டும் என நினைவூட்டுகிறோம்.",
    "why6.title": "உங்கள் மொழியில்",
    "why6.body": "முழு செயலியையும் தமிழிலோ ஆங்கிலத்திலோ பயன்படுத்துங்கள்; எப்போது வேண்டுமானாலும் மாற்றலாம்.",

    "artists.title": "Oppanai One உடன் உங்கள் அழகுச் சேவைத் தொழிலை வளர்த்திடுங்கள்",
    "artists.lead": "மெஹந்தி கலைஞர்கள், ஒப்பனைக் கலைஞர்கள், ஸ்டுடியோக்கள் மற்றும் சலூன்கள் — முன்பதிவு செய்யத் தயாராக இருக்கும் வாடிக்கையாளர்களைச் சென்றடையுங்கள்.",
    "b1.title": "உங்கள் சேவை, உங்கள் விலை",
    "b1.body": "ஒரு நிகழ்வுக்கு, பேக்கேஜுக்கு, ஒருவருக்கு அல்லது ஒரு கைக்கு — நீங்களே விலை நிர்ணயிக்கலாம்.",
    "b2.title": "முன்பதிவும் நாட்காட்டியும்",
    "b2.body": "கோரிக்கைகளை ஏற்கவும், தேதிகளைத் தடுக்கவும், மாதம் முழுவதையும் ஒரே பார்வையில் காணவும்.",
    "b3.title": "உங்கள் வழியில் பணம்",
    "b3.body": "செயலியில் முன்பணம் பெறலாம், அல்லது நேரடியாகப் பெறலாம்.",
    "b4.title": "சரிபார்ப்பு அடையாளம்",
    "b4.body": "சரிபார்க்கப்பட்ட சுயவிவரம், படைப்புகள், மதிப்புரைகள் மூலம் நம்பிக்கையை உருவாக்குங்கள்.",
    "as1": "செயலியில் பதிவு செய்யுங்கள்",
    "as2": "சேவைகள் & புகைப்படங்களைச் சேர்க்கவும்",
    "as3": "சரிபார்ப்பு பெறுங்கள்",
    "as4": "முன்பதிவுகளைப் பெறுங்கள்",
    "artists.cta": "உங்கள் வணிகத்தைப் பதிவு செய்யுங்கள்",

    "city.title": "இப்போது கோயம்புத்தூரில்",
    "city.body": "மேலும் தமிழ்நாட்டு நகரங்கள் விரைவில்.",
    "city.cbe": "கோயம்புத்தூர்",

    "faq.title": "வாடிக்கையாளர்களும் கலைஞர்களும் கேட்கும் கேள்விகள்",
    "faq1.q": "ஒரு கலைஞரை எப்படி முன்பதிவு செய்வது?",
    "faq1.a": "செயலியைப் பதிவிறக்கி, சேவையைத் தேர்ந்தெடுத்து, தேதியும் பேக்கேஜும் தேர்வு செய்து உறுதிப்படுத்துங்கள். கலைஞர் ஏற்கும் முறையைப் பொறுத்து, செயலியிலோ கலைஞரிடம் நேரடியாகவோ பணம் செலுத்தலாம்.",
    "faq2.q": "கலைஞர்கள் சரிபார்க்கப்பட்டவர்களா?",
    "faq2.a": "ஆம். ஒவ்வொரு கலைஞரும் ஒரு அரசு அடையாள அட்டையும் வணிக விவரங்களும் சமர்ப்பிக்கிறார்கள். கலைஞர் தேடலில் தோன்றும் முன் எங்கள் குழு அவற்றைச் சரிபார்க்கிறது. அடையாள அட்டை வாடிக்கையாளர்களுக்குக் காட்டப்படாது.",
    "faq3.q": "எனது சேவை நேரத்திற்கு முன் ட்ரையல் முன்பதிவு செய்யலாமா?",
    "faq3.a": "பல கலைஞர்கள் ட்ரையல் வழங்குகிறார்கள் — இலவசமாக, கட்டணத்துடன், அல்லது கட்டணம் இறுதித் தொகையில் சரிசெய்யப்படும் வகையில். ஒவ்வொரு கலைஞரின் பக்கத்திலும் அவர்களின் ட்ரையல் கொள்கை இருக்கும்.",
    "faq4.q": "முன்பதிவை ரத்து செய்யலாமா?",
    "faq4.a": "ஆம், உங்கள் நிகழ்வு கலைஞரின் இலவச ரத்துக் காலத்துக்கு வெளியே இருந்தால் ரத்து செய்யலாம்; அந்தக் காலம் அவர்களின் பக்கத்தில் காட்டப்படும். செயலியில் பணம் செலுத்தியிருந்தால், எங்கள் பணத்திரும்பல் கொள்கைப்படி பணம் திருப்பித் தரப்படும்.",
    "faq5.q": "எந்தெந்த நகரங்களில் சேவை உள்ளது?",
    "faq5.a": "கோயம்புத்தூரில் தொடங்குகிறோம்; விரைவில் மேலும் தமிழ்நாட்டு நகரங்களைச் சேர்ப்போம்.",
    "faq6.q": "நான் ஒரு கலைஞர். எப்படி இணைவது?",
    "faq6.a": "செயலியைப் பதிவிறக்கி, \"உங்கள் வணிகத்தைப் பதிவு செய்யுங்கள்\" என்பதைத் தட்டி, உங்கள் சேவைகள், விலைகள், புகைப்படங்களைச் சேர்த்து, ஏதேனும் ஒரு அரசு அடையாள அட்டையைப் பதிவேற்றுங்கள். எங்கள் குழு சரிபார்த்தவுடன், வாடிக்கையாளர்கள் உங்களைக் கண்டறிந்து முன்பதிவு செய்யலாம்.",

    "dl.title": "உங்கள் அடுத்த அழகுச் சேவை முன்பதிவு சில தட்டல்களில்",
    "dl.body": "Oppanai One செயலி விரைவில் Android மற்றும் iPhone-இல் வெளியாகிறது.",
    "soon": "விரைவில்",

    "contact.title": "உங்களிடமிருந்து கேட்க ஆவலாக உள்ளோம்",
    "contact.lead": "முன்பதிவு பற்றிய கேள்விகள் உள்ளதா, அல்லது உங்கள் வணிகத்தைப் பட்டியலிட வேண்டுமா? இங்கே தொடர்பு கொள்ளுங்கள்.",
    "contact.email": "மின்னஞ்சல்",
    "contact.phone": "தொலைபேசி",
    "contact.call": "அழைக்க",

    "footer.about": "அன்றாட பராமரிப்புக்கும் ஒவ்வொரு நிகழ்வுக்கும் அழகுச் சேவைகள் — கோயம்புத்தூரில் தொடங்கி.",
    "footer.explore": "ஆராயுங்கள்",
    "footer.legal": "சட்டத் தகவல்",
    "footer.tn": "தமிழ்நாடு",
    "footer.rights": "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
    "footer.made": "தமிழ்நாட்டில் அன்புடன் உருவாக்கப்பட்டது",
    "legal.privacy": "தனியுரிமைக் கொள்கை",
    "legal.terms": "விதிமுறைகள் மற்றும் நிபந்தனைகள்",
    "legal.refund": "பணத்திரும்பல் & ரத்து",
    "legal.back": "முகப்புக்குத் திரும்ப",
    "legal.notice": "இந்தப் பக்கம் தற்போது ஆங்கிலத்தில் மட்டுமே உள்ளது."
  };

  var STORAGE_KEY = "oppanai.lang";
  var nodes = document.querySelectorAll("[data-i18n]");
  var english = new Map();
  nodes.forEach(function (el) {
    english.set(el, el.innerHTML);
  });
  var englishTitle = document.title;

  function applyLang(lang) {
    nodes.forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      el.innerHTML = lang === "ta" && TA[key] ? TA[key] : english.get(el);
    });
    document.documentElement.lang = lang;
    var titleTa = document.body.getAttribute("data-title-ta");
    document.title = lang === "ta" && titleTa ? titleTa : englishTitle;
    document.querySelectorAll(".lang-toggle button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === lang));
    });
  }

  function savedLang() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  document.querySelectorAll(".lang-toggle button").forEach(function (b) {
    b.addEventListener("click", function () {
      var lang = b.getAttribute("data-lang");
      applyLang(lang);
      try {
        localStorage.setItem(STORAGE_KEY, lang);
      } catch (e) {
        /* storage blocked: the choice just won't be remembered */
      }
    });
  });

  // ?lang=ta in the URL wins (handy for sharing a Tamil link), then the saved choice.
  var urlLang = new URLSearchParams(location.search).get("lang");
  var initial = urlLang === "ta" || urlLang === "en" ? urlLang : savedLang();
  if (initial === "ta") applyLang("ta");

  // Mobile menu
  var menuBtn = document.querySelector(".menu-btn");
  var nav = document.getElementById("site-nav");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      menuBtn.setAttribute("aria-expanded", String(open));
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        nav.classList.remove("is-open");
        menuBtn.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Store badges are placeholders until the app is published.
  document.querySelectorAll('.store-badge[aria-disabled="true"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      e.preventDefault();
    });
  });

  // Reveal sections as they scroll into view.
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    reveals.forEach(function (el) {
      io.observe(el);
    });
  } else {
    reveals.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });
})();
