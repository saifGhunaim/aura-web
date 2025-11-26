document.addEventListener('DOMContentLoaded', () => {
    // Scroll Animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in-scroll').forEach(el => {
        observer.observe(el);
    });

    // Parallax Effect
    const heroBg = document.getElementById('hero-bg');
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        if (scrollY < window.innerHeight) {
            heroBg.style.transform = `translateY(${scrollY * 0.5}px)`;
        }
    });

    // Placeholder Image Loader (Simulating lazy load or just handling the divs)
    // In a real scenario, we would replace the divs with <img> tags once we have the URLs.
    // For now, we will leave them as divs with background images set via inline style or CSS.

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Language Localization
    const translations = {
        en: {
            brand: "AURA",
            nav_about_us: "About Us",
            nav_philosophy: "Philosophy",
            nav_signature: "Signature",
            nav_portfolio: "Portfolio",
            nav_contact: "Contact",
            hero_title: "AURA",
            hero_subtitle: "We Design Life",
            hero_cta: "Discover Our Sanctuaries",
            about_title: "The Philosophy",
            about_text: "Luxury is not necessarily loud. We create a unique balance between absolute opulence in design details and static calmness in the space. We are inspired by the ancient memory of the UAE desert and sea, translated into a contemporary design language.",
            features_title: "Signature Elements",
            feature_1_title: "The Liquid Wall",
            feature_1_desc: "Walls of cast gypsum or carved wood with organic lines inspired by desert sand, creating a dramatic play of light and shadow.",
            feature_2_title: "Light Sculpting",
            feature_2_desc: "Contemporary Mashrabiya openings that allow light to paint moving patterns throughout the day.",
            feature_3_title: "The Material Surprise",
            feature_3_desc: "Innovative use of traditional materials, such as \"Marble Carpets\" (marble flooring mimicking Bedouin rugs).",
            portfolio_title: "Expressive Spaces",
            footer_tagline: "Where calmness takes root in every opulent detail.",
            contact_title: "Contact Us",
            contact_subtitle: "Invest in opulent serenity for your space. We would be delighted to begin the journey of crafting your architectural sanctuary.",
            contact_btn: "Send Us Your Vision!",
            about_us_title: "About AURA",
            about_us_intro: "At AURA, we see design as the art of building sanctuaries. Our philosophy is rooted in the concept of \"Opulent Serenity\": the delicate balance between bold luxury and absolute tranquility. We reject visual noise in favor of organic lines, natural materials, and exquisite details that whisper sophistication.",
            about_us_vision_title: "Our Vision",
            about_us_vision: "To become the primary reference for creating spaces that breathe, inspire, and immerse their inhabitants in a profound sense of peace and rootedness.",
            about_us_values_title: "Our Core Values",
            about_us_value_1_title: "Serenity:",
            about_us_value_1_desc: "Commitment to designs that soothe the soul",
            about_us_value_2_title: "Rooted:",
            about_us_value_2_desc: "Preserving material authenticity and the warmth of place",
            about_us_value_3_title: "Boldness:",
            about_us_value_3_desc: "Challenging the conventional through masterful surprises in texture and light",
            about_us_tagline: "AURA: We Design Life."
        },
        ar: {
            brand: "AURA",
            nav_about_us: "من نحن",
            nav_philosophy: "الفلسفة",
            nav_signature: "البصمة",
            nav_portfolio: "المعرض",
            nav_contact: "تواصل معنا",
            hero_title: "AURA",
            hero_subtitle: "We Design Life",
            hero_cta: "اكتشف ملاذاتنا",
            about_title: "الفلسفة",
            about_text: "الفخامة ليست بالضرورة صاخبة. نحن نحقق توازناً فريداً بين الترف المطلق في تفاصيل التصميم والهدوء الساكن في حضور المساحة. نستلهم الذاكرة العريقة لصحراء وبحر الإمارات، ونصوغها بلغة تصميم معاصرة.",
            features_title: "عناصر البصمة",
            feature_1_title: "الجدار السائل",
            feature_1_desc: "جدران من الجبس المصبوب أو الخشب المحفور بخطوط عضوية مستوحاة من رمال الصحراء، تخلق تلاعباً درامياً بالضوء والظل.",
            feature_2_title: "نحت الضوء",
            feature_2_desc: "فتحات مشربية معاصرة تسمح للضوء برسم أنماط متحركة طوال اليوم.",
            feature_3_title: "مفاجأة المواد",
            feature_3_desc: "استخدام مبتكر للمواد التقليدية، مثل \"سجاد الرخام\" (أرضيات رخامية تحاكي السجاد البدوي).",
            portfolio_title: "مساحات تعبيرية",
            footer_tagline: "حيث يتجذر الهدوء في كل تفصيل مترف.",
            contact_title: "تواصل معنا",
            contact_subtitle: "استثمر في الهدوء المترف لمساحتك. يسعدنا أن نبدأ رحلة صياغة ملاذك المعماري.",
            contact_btn: "أرسل لنا رؤيتك!",
            about_us_title: "AURA عن",
            about_us_intro: "في AURA، نرى التصميم فناً لبناء الملاذات. فلسفتنا متجذرة في مفهوم \"الهدوء المترف\": التوازن الدقيق بين الفخامة الجريئة والسكينة المطلقة. نرفض الضجيج البصري لصالح الخطوط العضوية والمواد الطبيعية والتفاصيل الرائعة التي تهمس بالرقي.",
            about_us_vision_title: "رؤيتنا",
            about_us_vision: "أن نصبح المرجع الأساسي لخلق مساحات تتنفس، تلهم، وتغمر سكانها بإحساس عميق بالسلام والتجذر.",
            about_us_values_title: "قيمنا الأساسية",
            about_us_value_1_title: "السكينة:",
            about_us_value_1_desc: "الالتزام بتصاميم تهدئ الروح",
            about_us_value_2_title: "التجذر:",
            about_us_value_2_desc: "الحفاظ على أصالة المواد ودفء المكان",
            about_us_value_3_title: "الجرأة:",
            about_us_value_3_desc: "تحدي التقليدي من خلال مفاجآت بارعة في الملمس والضوء",
            about_us_tagline: "AURA: We Design Life."
        }
    };

    const langToggleEn = document.getElementById('lang-en');
    const langToggleAr = document.getElementById('lang-ar');

    // Check localStorage or default to AR
    const currentLang = localStorage.getItem('aura_lang') || 'ar';
    setLanguage(currentLang);

    if (langToggleEn && langToggleAr) {
        langToggleEn.addEventListener('click', () => setLanguage('en'));
        langToggleAr.addEventListener('click', () => setLanguage('ar'));
    }

    function setLanguage(lang) {
        // Update HTML attributes
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

        // Update Content
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        // Update Toggle State
        if (lang === 'en') {
            langToggleEn.classList.add('active');
            langToggleAr.classList.remove('active');
        } else {
            langToggleAr.classList.add('active');
            langToggleEn.classList.remove('active');
        }

        // Save Preference
        localStorage.setItem('aura_lang', lang);
    }

    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const currentLang = document.documentElement.lang;
            const message = currentLang === 'ar'
                ? "شكراً لتواصلك معنا! سنقوم بالرد عليك قريباً."
                : "Thank you for contacting us! We will get back to you soon.";
            alert(message);
            contactForm.reset();
        });
    }
});
