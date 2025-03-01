var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    grabCursor: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});
document.addEventListener("DOMContentLoaded", function () {
    const languageSelector = document.querySelector(".btn.content.active-btn");
    const translations = {
        "Unlimited movies, TV shows, and more": "अनलिमिटेड फ़िल्में, टीवी शो और बहुत कुछ",
        "Starts at ₹149. Cancel at any time.": "₹149 से शुरू। कभी भी रद्द करें।",
        "Ready to watch? Enter your email to create or restart your membership.":
            "देखने के लिए तैयार? अपनी सदस्यता बनाने या पुनः प्रारंभ करने के लिए अपना ईमेल दर्ज करें।",
        "Enjoy on your TV": "अपने टीवी पर आनंद लें",
        "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.":
            "स्मार्ट टीवी, प्लेस्टेशन, एक्सबॉक्स, क्रोमकास्ट, ऐप्पल टीवी, ब्लू-रे प्लेयर और अन्य पर देखें।",
        "Download your shows to watch offline": "ऑफ़लाइन देखने के लिए अपने शो डाउनलोड करें",
        "Save your favorites easily and always have something to watch.":
            "अपने पसंदीदा शो को आसानी से सहेजें और हमेशा कुछ देखने के लिए रखें।",
        "Watch everywhere": "हर जगह देखें",
        "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.":
            "अपने फ़ोन, टैबलेट, लैपटॉप और टीवी पर अनलिमिटेड फ़िल्में और टीवी शो स्ट्रीम करें।",
        "Create profiles for kids": "बच्चों के लिए प्रोफाइल बनाएं",
        "Send kids on adventures with their favorite characters in a space made just for them — free with your membership.":
            "बच्चों को उनके पसंदीदा किरदारों के साथ रोमांच पर भेजें, उनके लिए विशेष रूप से बनाए गए स्थान में — आपकी सदस्यता के साथ मुफ़्त।",
        "What is Netflix?": "नेटफ्लिक्स क्या है?",
        "How much does Netflix cost?": "नेटफ्लिक्स की कीमत कितनी है?",
        "Frequently Asked Questions": "अक्सर पूछे जाने वाले प्रश्न",
        "Questions? Call 000-800-919-1743": "सवाल? कॉल करें 000-800-919-1743",
        "Ready to watch? Enter your email to create or restart your membership.":
            "देखने के लिए तैयार? अपनी सदस्यता बनाने या पुनः प्रारंभ करने के लिए अपना ईमेल दर्ज करें।",
        "Pushpa_The_Rise": "पुष्पा: द राइज़",
        "Pushpa_2-The_Rule__hindi_dubbed____Trailer___Allu_Arjun___Rashmika_Mandanna":
            "पुष्पा 2: द रूल - हिंदी डब्ड ट्रेलर | अल्लू अर्जुन | रश्मिका मंदाना",

    };

    function toggleLanguage() {
        const selectedLanguage = languageSelector.value;
        const elements = document.body.querySelectorAll("*");

        elements.forEach((el) => {
            if (translations[el.textContent]) {
                if (selectedLanguage === "Hindi") {
                    el.textContent = translations[el.textContent];
                } else {
                    el.textContent = Object.keys(translations).find(
                        key => translations[key] === el.textContent
                    ) || el.textContent;
                }
            }
        });
    }

    languageSelector.addEventListener("change", toggleLanguage);
});

