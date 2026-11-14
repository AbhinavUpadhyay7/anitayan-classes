import { createContext, useContext, useEffect, useMemo, useState } from "react";

const SiteSettingsContext = createContext(null);

const translations = {
  "शिक्षक भर्ती परीक्षाओं की तैयारी में आपका साथी": "YOUR TEACHING EXAM PREPARATION PARTNER",
  "उद्देश्य के साथ तैयारी करें।": "Prepare with purpose.",
  "आत्मविश्वास के साथ सफलता पाएँ।": "Perform with confidence.",
  "शिक्षक भर्ती परीक्षाओं के लिए ज़रूरी सभी संसाधन — व्यवस्थित नोट्स, केंद्रित वीडियो कक्षाएँ, मॉक टेस्ट और उपयोगी मार्गदर्शन — एक ही जगह।": "Everything you need for teaching recruitment exams — structured notes, focused video classes, mock tests and practical guidance, all in one place.",
  "परीक्षाएँ देखें": "Explore Exams",
  "मॉक टेस्ट आज़माएँ": "Try a Mock Test",
  "सीखें। अभ्यास करें। बेहतर बनें।": "Learn. Practice. Improve.",
  "शिक्षक बनने की दिशा में एक केंद्रित रास्ता।": "A focused path to your teaching career.",
  "भावी शिक्षकों के लिए बनाया गया": "BUILT FOR ASPIRING TEACHERS",
  "सुपर टेट · सीटीईटी · यूपीटेट · टीजीटी / पीजीटी": "SUPER TET · CTET · UPTET · TGT / PGT",
  "व्यवस्थित पढ़ाई": "Structured learning",
  "परीक्षा-केंद्रित संसाधन": "Exam-focused resources",
  "आत्मविश्वास बढ़ाने वाला अभ्यास": "Practice that builds confidence",
  "हर कदम पर मार्गदर्शन": "Guidance at every step",
  "अपना रास्ता चुनें": "FIND YOUR PATH",
  "शिक्षक भर्ती परीक्षाएँ देखें": "Explore teaching examinations",
  "अपनी लक्षित परीक्षा चुनें और ऐसे तैयारी संसाधन पाएँ जो आपको आगे बढ़ने में मदद करें।": "Choose your target exam and access preparation resources made to keep you moving forward.",
  "अनितायन क्लासेस की विशेषता": "THE ANITAYAN ADVANTAGE",
  "बेहतर तैयारी के लिए सब कुछ": "Everything you need to prepare better",
  "एक संपूर्ण learning ecosystem, जहाँ आपकी पढ़ाई की सामग्री और अभ्यास एक साथ मिलते हैं।": "A complete learning ecosystem that brings your study resources and practice together.",
  "हस्तलिखित नोट्स": "Handwritten Notes",
  "स्पष्ट, परीक्षा-केंद्रित नोट्स जो तेज़ रिविज़न के लिए बनाए गए हैं।": "Clear, exam-focused notes designed for quick revision.",
  "अभ्यास टेस्ट": "Practice Tests",
  "टॉपिक, विषय और पूर्ण अवधि के मॉक टेस्ट।": "Topic-wise, subject-wise and full-length mock tests.",
  "वीडियो कक्षाएँ": "Video Classes",
  "YouTube पर अवधारणा-आधारित पाठ और केंद्रित तैयारी।": "Concept-led lessons and focused preparation on YouTube.",
  "त्वरित रिविज़न": "Quick Revision",
  "संक्षिप्त PDF और कक्षा सामग्री से तेज़ी से दोहराएँ।": "Concise PDFs and class resources to revise faster.",
  "पिछले वर्ष के प्रश्न और बहुविकल्पीय प्रश्न": "PYQ & MCQ",
  "पिछले वर्षों के प्रश्न और उपयोगी अभ्यास सेट।": "Previous-year questions and relevant practice sets.",
  "अध्ययन मार्गदर्शन": "Study Guidance",
  "अपनी तैयारी नियमित रखने के लिए व्यावहारिक मार्गदर्शन।": "Practical direction to make your preparation consistent.",
  "लक्ष्य के साथ अभ्यास करें": "PRACTICE WITH PURPOSE",
  "तैयारी को प्रगति में बदलें।": "Turn preparation into progress.",
  "अभ्यास टेस्ट, तुरंत परिणाम और प्रश्न-वार समीक्षा से परीक्षा का आत्मविश्वास बढ़ाएँ। जानें कि आपकी तैयारी कहाँ है और आगे किस पर काम करना है।": "Build exam confidence with practice tests, instant results and question-wise review. Understand where you stand and what to work on next.",
  "परीक्षा-केंद्रित मॉक टेस्ट": "Exam-oriented mock tests",
  "आसान प्रश्न नेविगेशन": "Clear question navigation",
  "स्कोर और उत्तर की समीक्षा": "Score and answer review",
  "लाइव अभ्यास प्रीव्यू": "LIVE PRACTICE PREVIEW",
  "बाल विकास एवं शिक्षाशास्त्र": "CHILD DEVELOPMENT & PEDAGOGY",
  "सीखने की प्रक्रिया को किस रूप में सबसे अच्छा समझा जा सकता है?": "Learning is best described as a process that is...",
  "अस्थायी और अनियमित": "Temporary and random",
  "निरंतर और प्रगतिशील": "Continuous and progressive",
  "केवल शारीरिक विकास तक सीमित": "Limited to physical growth",
  "हर विद्यार्थी के लिए समान": "Identical for every learner",
  "उत्तर की समीक्षा शामिल है": "Answer review included",
  "तुरंत स्कोर": "Instant score",
  "अपने शिक्षक से सीखें": "A NOTE FROM YOUR EDUCATOR",
  "स्पष्टता के साथ सीखें।": "Learn with clarity.",
  "निरंतरता के साथ आगे बढ़ें।": "Grow with consistency.",
  "Anitayan Classes शिक्षक भर्ती परीक्षा के अभ्यर्थियों को सुलभ अध्ययन सामग्री, उपयोगी अभ्यास और केंद्रित मार्गदर्शन देने के लिए बनाई गई है। हमारा उद्देश्य तैयारी को अधिक व्यवस्थित, सरल और नियमित बनाना है।": "Anitayan Classes is built to support teaching-exam aspirants with accessible learning resources, useful practice and focused guidance. Our goal is to make preparation more organised, understandable and consistent.",
  "स्पष्ट व्याख्या": "Clear explanations",
  "सिलेबस-आधारित संसाधन": "Syllabus-led resources",
  "नियमित अभ्यास": "Consistent practice",
  "विद्यार्थी-प्रथम दृष्टिकोण": "Learner-first approach",
  "आयुष सर के बारे में जानें": "Know more about Ayush Sir",
  "आपका अगला कदम यहाँ से शुरू होता है": "YOUR NEXT STEP STARTS HERE",
  "हर अध्ययन सत्र को उपयोगी बनाएँ।": "Make every study session count.",
  "Anitayan Classes की कक्षाएँ, नोट्स और अभ्यास संसाधन देखें।": "Explore classes, notes and practice resources from Anitayan Classes.",
  "शुरू करें": "Start exploring",
  "हमसे संपर्क करें": "Get in touch",
  "हर दिन नए मॉक टेस्ट और परीक्षा अपडेट": "New mock tests and exam updates every day",
  "आपकी तैयारी, एक ही मंच पर।": "Your preparation, one platform.",
  "पढ़ें · अभ्यास करें · सफलता पाएँ": "LEARN · PRACTICE · ACHIEVE",
  "व्हाट्सऐप": "WhatsApp",
  "संपर्क करें": "Contact us",
  "अपनी परीक्षा चुनें": "Choose your examination",
  "सभी प्रमुख Teaching Exams": "Explore Teaching Exams",
  "पाठ्यक्रम आधारित सामग्री, अभ्यास और updates एक व्यवस्थित जगह पर।": "Syllabus-based resources, practice and updates — all in one organised place.",
  "सभी Exams देखें →": "Explore all exams →",
  "आपको क्या मिलेगा?": "WHAT YOU GET",
  "सिर्फ Notes नहीं, पूरी तैयारी": "More than notes. Complete preparation.",
  "तैयारी के हर जरूरी हिस्से को एक ही platform पर व्यवस्थित किया गया है।": "Everything you need for exam preparation, organised on one platform.",
  "रंगीन, सरल और revision के लिए उपयोगी exam-oriented notes।": "Clear, easy-to-revise notes designed around your exam syllabus.",
  "Topic Test, Subject Test और Full-length practice tests।": "Topic tests, subject tests and full-length practice tests.",
  "Concept explanation और exam-focused classes YouTube पर।": "Concept-led, exam-focused video lessons on YouTube.",
  "कक्षा के बाद तेज revision के लिए concise study material।": "Concise study material for quick revision after class.",
  "Previous year questions और महत्वपूर्ण practice questions।": "Previous-year questions and important practice questions.",
  "Study strategy और exam preparation से जुड़े guidance।": "Study strategies and guidance for focused exam preparation.",
  "आज का Mock Test": "Today's mock test",
  "तैयार है": "is ready",
  "तुरंत score देखें, सही उत्तर समझें और अपनी कमजोर topics पहचानें। अलग-अलग exams के लिए demo mock tests उपलब्ध रहेंगे।": "Check your score instantly, review correct answers and identify topics to improve. Practice tests are available for multiple exams.",
  "Mock Tests देखें →": "Explore mock tests →",
  "बाल विकास • प्रश्न 1/25": "Child Development • Question 1/25",
  "बाल विकास की प्रक्रिया किस प्रकार की होती है?": "How does the process of child development take place?",
  "A. अचानक होने वाली": "A. Sudden",
  "B. निरंतर एवं क्रमिक": "B. Continuous and sequential",
  "C. केवल शारीरिक": "C. Physical only",
  "D. सभी बच्चों में समान": "D. Same for every child",
  "✅ Demo Preview — सही उत्तर:": "✅ Demo preview — Correct answer:",
  "निरंतर एवं क्रमिक": "Continuous and sequential",
  "Ayush Sir के बारे में": "Meet Ayush Sir",
  "Anitayan Classes का उद्देश्य शिक्षक भर्ती परीक्षाओं की तैयारी करने वाले विद्यार्थियों तक सरल भाषा में उपयोगी study material, handwritten notes, practice tests और regular guidance पहुँचाना है।": "Anitayan Classes helps teaching-exam aspirants prepare with clear study material, handwritten notes, practice tests and consistent guidance.",
  "सरल एवं प्रमाणिक सामग्री": "Clear and reliable study material",
  "सिलेबस आधारित पढ़ाई": "Syllabus-based learning",
  "रोज़ अभ्यास प्रश्न": "Daily practice questions",
  "परीक्षा तक अपडेट": "Updates throughout your preparation",
  "Ayush Sir के बारे में →": "More about Ayush Sir →",
  "Anitayan Classes से जुड़ें": "Stay connected with Anitayan Classes",
  "नई classes, notes, mock tests और exam updates सबसे पहले पाएँ।": "Get the latest classes, notes, mock tests and exam updates.",
  "रोज़ नया Mock Test और Exam Update —": "New mock tests and exam updates every day —",
  "पूरी तैयारी एक ही जगह": "Your complete preparation, in one place",
  "होम": "Home", "परीक्षाएँ": "Exams", "मॉक टेस्ट": "Mock Tests", "नोट्स": "Notes", "कक्षाएँ": "Classes", "हमारे बारे में": "About", "संपर्क": "Contact",
  "अभी Mock Test दें": "Take a mock test now", "Notes देखें": "View notes", "सभी परीक्षाएँ देखें": "Explore all exams",
  "किसी भी UPI App से": "Using any UPI app", "QR Scan करें": "Scan the QR code", "भुगतान सफलतापूर्वक सबमिट किया गया": "Payment submitted successfully",
  "जिस page को आप ढूंढ रहे हैं वह उपलब्ध नहीं है।": "The page you are looking for is unavailable.",
  "☎ WhatsApp करें": "☎ Chat on WhatsApp", "अभी संपर्क करें": "Contact us",
  "जिस exam को आप ढूंढ रहे हैं": "The exam you are looking for", "वह उपलब्ध नहीं है।": "is not available.",
  "की तैयारी": " preparation", "की preparation के": " preparation resources", "लिए Anitayan Classes पर available": " at Anitayan Classes", "resources explore करें।": "Explore the available resources.",
  "आप यहां mock tests attempt कर": "You can attempt mock tests here", "सकते हैं, study notes देख सकते हैं": ", view study notes", "और available free classes के माध्यम": "and use the available free classes", "से अपनी preparation कर सकते हैं।": "to continue your preparation.",
  "अपनी Preparation शुरू करें": "Start your preparation", "नीचे दिए गए resources से": "Continue with the resources below", "preparation continue करें।": "to keep preparing.",
  "के साथ अपनी preparation और": " to review your preparation and", "practice check करें।": "practice.", "Exam-oriented notes और": "Explore exam-oriented notes and", "preparation material explore करें।": "preparation material.", "YouTube पर available free": "Explore free", "educational classes देखें।": "educational classes on YouTube.",
  "Important topics को regularly": "Revise important topics regularly", "revise करें और notes का उपयोग करें।": "and use your notes.", "Mock tests और questions के": "Use mock tests and questions", "माध्यम से regular practice करें।": "for regular practice.", "Test के बाद अपनी mistakes को": "After each test, identify your mistakes", "identify करके दोबारा revise करें।": "and revise those topics.", "पढ़े हुए topics का regular": "Revise the topics you have studied", "revision करते रहें।": "regularly.", "Mock tests, notes और classes": "Explore mock tests, notes and classes", "explore करें।": "to get started.",
  "Purchase details नहीं मिल सके।": "Purchase details could not be found.", "कृपया Notes section से दोबारा try करें।": "Please try again from the Notes section.", "← Notes पर जाएँ": "← Back to Notes", "आपका payment details submit हो गया है।": "Your payment details have been submitted.", "अब payment verification के लिए": "To complete payment verification,", "screenshot WhatsApp पर भेजें।": "send your payment screenshot on WhatsApp.", "Payment Screenshot भेजें": "Send payment screenshot", "अपने payment का screenshot": "Share your payment screenshot", "WhatsApp पर भेजकर verification": "on WhatsApp for verification", "करवाएँ।": ".", "Payment Screenshot WhatsApp पर भेजें": "Send payment screenshot on WhatsApp", "ऊपर दिए WhatsApp button पर click करें": "Click the WhatsApp button above", "WhatsApp में अपना payment screenshot attach करें": "Attach your payment screenshot in WhatsApp", "Screenshot भेजने के बाद verification का इंतजार करें": "Wait for verification after sending the screenshot", "के बाद provide किया जाएगा।": "will be provided after verification.", "आपका payment screenshot मिलने के": "After we receive your payment screenshot,", "बाद payment verify किया जाएगा।": "your payment will be verified.", "Payment करें": "Make payment", "UPI QR से": "using the UPI QR", "Screenshot भेजें": "Send screenshot", "WhatsApp पर": "on WhatsApp", "Payment check होगा": "Payment will be checked", "Notes प्राप्त करें": "Receive your notes", "Verification के बाद": "after verification",
  "इस test का result अभी उपलब्ध नहीं है।": "The result for this test is not available yet.", "← Mock Tests पर जाएँ": "← Back to Mock Tests", "आपने": "You", "successfully complete किया।": "successfully completed the test.",
  "किसी भी query या information": "For any questions or information", "के लिए हमसे जुड़ें।": "please get in touch.", "हमसे जुड़े रहें": "Stay connected", "Classes, Notes, Mock Tests या": "For classes, notes, mock tests or", "किसी अन्य educational query के": "any other educational query,", "लिए नीचे दिए गए platforms पर": "reach us through the platforms below", "contact कर सकते हैं।": ".", "Direct message करें": "Send a direct message", "Discussion में join करें": "Join the discussion", "Latest updates पाएं": "Get the latest updates", "Classes और educational": "For classes and educational", "updates के लिए social": "updates, stay connected on our", "platforms से जुड़े रहें।": "social platforms.", "अपनी preparation आज ही शुरू करें।": "Start your preparation today.", "Free classes, mock tests और": "Explore free classes, mock tests and", "study notes explore करें।": "study notes.",
  "अपने exam की तैयारी को test करें।": "Assess your exam preparation.", "Topic-wise और exam-oriented demo": "Practise with topic-wise and exam-focused demo", "mock tests से practice करें।": "mock tests.", "प्रत्येक test में 25 questions और": "Each test includes 25 questions and", "20 minutes का समय है।": "a 20-minute time limit.", "Search keyword बदलकर फिर try करें।": "Try again with a different search keyword.", "रोज़ Practice करें": "Practise every day", "नियमित Mock Tests से अपनी preparation": "Strengthen your preparation with regular mock tests", "को मजबूत बनाएं।": ".", "सभी Tests देखें →": "View all tests →",
  "यह Notes उपलब्ध नहीं है।": "These notes are not available.", "← सभी Notes देखें": "← View all notes", "Notes में क्या मिलेगा?": "What's included in these notes?", "Students के लिए फायदे": "Benefits for students", "इन Notes के बारे में": "About these notes", "यह material exam preparation,": "This material is organised for exam preparation,", "revision और practice को ध्यान": "revision and practice", "में रखकर व्यवस्थित किया गया है।": ".", "विद्यार्थी अपनी preparation के": "Students can use these notes", "अनुसार इन Notes का उपयोग कर": "according to their preparation", "सकते हैं।": ".", "WhatsApp करें →": "Contact on WhatsApp →",
  "Exam preparation के लिए": "For exam preparation", "Anitayan Classes एक educational": "Anitayan Classes is an educational", "platform है जहां students को": "platform where students can access", "की preparation के लिए classes,": ", including classes,", "notes और mock tests उपलब्ध": "notes and mock tests", "कराए जाते हैं।": ".", "हमारा focus exam-oriented": "Our focus is on exam-oriented", "material और regular practice": "material and regular practice", "के माध्यम से students को उनकी": "to support students in their", "preparation में support करना है।": "preparation.", "Anitayan Classes के creator.": "Creator of Anitayan Classes.", "Educational content और exam": "Educational content and exam", "preparation के माध्यम से": "preparation resources to", "students तक useful learning": "bring useful learning resources to students", "resources पहुंचाने का प्रयास।": ".", "Students के लिए Resources": "Resources for students", "YouTube पर educational": "Educational classes and", "classes और preparation content.": "preparation content on YouTube.", "Practice के लिए mock tests": "Mock tests and question sets", "और question sets.": "for practice.",
  "अपना Target Exam": "Choose your target exam", "चुनें और तैयारी शुरू करें": "and start preparing", "Anitayan Classes पर अपने": "At Anitayan Classes, explore", "examination के लिए mock tests,": "mock tests,", "notes और free classes explore करें।": "notes and free classes for your examination.", "आपकी search के लिए कोई": "No results found for your", "exam नहीं मिला।": "search.", "एक ही जगह पर Preparation Resources": "Preparation resources in one place", "अपने target exam के लिए": "Explore useful resources for", "useful resources explore करें।": "your target exam.", "अपनी preparation check करने": "Practice tests to assess", "के लिए practice tests.": "your preparation.", "Important topics के लिए": "Notes for important topics", "YouTube पर available": "Available on YouTube", "तैयारी शुरू करने के लिए": "Choose the right exam", "सही Exam चुनें": "to begin your preparation", "Exam select करें और उसके": "Select an exam and explore its", "available resources explore करें।": "available resources.",
  "अपने exam के लिए": "Find notes for your exam", "notes देखें और खरीदें।": "and view or purchase them.", "जिस exam के Notes चाहिए,": "Choose the exam whose notes you need,", "उस पर click करके पूरी": "then click to view the full", "details देखें।": "details.", "Notes नहीं मिले": "No notes found", "Search keyword बदलकर": "Try again with a different", "फिर try करें।": "search keyword.", "सभी Notes देखें": "View all notes", "महत्वपूर्ण topics को": "Prepared around important topics", "ध्यान में रखकर तैयार।": ".", "सरल भाषा में समझने": "Easy to understand", "और revise करने योग्य।": "and revise.", "Mobile और laptop दोनों": "Accessible on mobile and laptop", "पर पढ़ सकते हैं।": ".",
  "Payment complete करके": "Complete your payment to", "Notes प्राप्त करें।": "receive your notes.", "📱 किसी भी UPI App से QR Code Scan करें": "📱 Scan the QR code using any UPI app", "इसी UPI ID पर payment करें।": "Make the payment to this UPI ID.", "QR Code scan करें": "Scan the QR code", "₹{note.price} payment करें": "Pay ₹{note.price}", "नीचे confirmation दें": "Confirm below", "⚠️ यह अभी frontend demo": "⚠️ This is a frontend demo", "payment flow है। Payment": "payment flow. Payment", "verification manually होगी।": "verification is manual.",
  "Ayush Sir के साथ competitive exams": "Prepare for competitive exams with Ayush Sir", "की तैयारी करें।": ".", "आपकी Exam Preparation,": "Your exam preparation,", "अब आसान तरीके से": "made simpler", "Anitayan Classes पर विभिन्न": "At Anitayan Classes, access", "की preparation के लिए free": "through free", "educational classes उपलब्ध हैं।": "educational classes.", "▶ Free Classes देखें": "▶ Explore free classes", "Telegram Join करें": "Join Telegram", "अपनी exam preparation के लिए": "Explore free classes for your", "free classes देखें।": "exam preparation.", "किन Exams की तैयारी करें?": "Which exams can you prepare for?", "अपने target exam के अनुसार": "Start preparing according to", "preparation शुरू करें।": "your target exam.", "Teacher eligibility और": "Teacher eligibility and", "UPTET preparation के लिए": "for UPTET preparation", "CTET preparation और": "CTET preparation and", "की तैयारी.": "preparation.", "जुड़े रहिए Anitayan Classes": "Stay connected with Anitayan Classes", "के साथ": "", "discussions और educational": "discussions and educational", "content के लिए हमारे social": "content, connect with us on our", "platforms से जुड़ें।": "social platforms.",
  "यह mock test उपलब्ध नहीं है।": "This mock test is not available.",
  "By Ayush Sir — शिक्षक भर्ती परीक्षाओं की": "By Ayush Sir — focused preparation for teaching recruitment exams",
  "तैयारी के लिए Notes, Mock Tests, Video": "with notes, mock tests and video",
  "Classes, PYQ और exam-focused guidance.": "classes, previous-year questions and exam-focused guidance.",
  "Explore teaching examinations": "शिक्षक भर्ती परीक्षाएँ देखें",
  "Choose your examination": "अपनी परीक्षा चुनें",
  "View all examinations": "सभी परीक्षाएँ देखें",
  "Find your path": "अपना लक्ष्य चुनें",
  "Explore Exams": "परीक्षाएँ देखें",
  "Try a Mock Test": "मॉक टेस्ट दें",
  "New mock tests and exam updates every day": "हर दिन नए मॉक टेस्ट और परीक्षा अपडेट",
  "Your preparation, one platform.": "आपकी पूरी तैयारी, एक ही प्लेटफॉर्म पर।",
  "Handwritten Notes": "हस्तलिखित नोट्स",
  "Practice Tests": "अभ्यास टेस्ट",
  "Video Classes": "वीडियो कक्षाएँ",
  "Quick Revision": "त्वरित रिवीजन",
  "Study Guidance": "अध्ययन मार्गदर्शन",
  "Today's mock test": "आज का मॉक टेस्ट",
  "Start your preparation": "अपनी तैयारी शुरू करें",
  "Contact on WhatsApp": "WhatsApp पर संपर्क करें",
  "Start Test": "टेस्ट शुरू करें",
  "Questions": "प्रश्न",
  "Marks": "अंक",
  "Minutes": "मिनट",
  "Search keyword": "सर्च कीवर्ड",
  "No notes found": "कोई नोट्स नहीं मिले",
  "No results found": "कोई परिणाम नहीं मिला",
  "Page Not Found": "पेज नहीं मिला",
  "Go Home": "होम पर जाएँ",
  "Take a mock test now": "अभी मॉक टेस्ट दें",
  "Payment submitted successfully": "भुगतान सफलतापूर्वक सबमिट हुआ",
  "Payment details": "भुगतान विवरण",
  "Purchase details": "खरीद का विवरण",
  "Scan & Pay": "स्कैन करें और भुगतान करें",
  "Demo payment details": "डेमो भुगतान विवरण"
};

/* eslint-disable no-dupe-keys */
Object.assign(translations, {
  "UP Super TET की तैयारी के लिए exam-oriented study material, mock tests और useful classes.": "Exam-oriented study material, mock tests and useful classes for UP Super TET preparation.",
  "UPTET Primary और Upper Primary परीक्षा की तैयारी के लिए complete study resources.": "Complete study resources for UPTET Primary and Upper Primary examinations.",
  "CTET Paper 1 और Paper 2 की तैयारी के लिए notes, mock tests और educational content.": "Notes, mock tests and educational content for CTET Paper 1 and Paper 2 preparation.",
  "UP TGT और PGT examinations की preparation के लिए practice resources.": "Practice resources for UP TGT and PGT examination preparation.",
  "UPSSSC related examinations के लिए practice और preparation resources.": "Practice and preparation resources for UPSSSC-related examinations.",
  "UPSSSC PET examination के लिए general preparation और practice material.": "General preparation and practice material for the UPSSSC PET examination.",
  "BPSC Teacher examination की preparation के लिए useful practice resources.": "Useful practice resources for the BPSC Teacher examination.",
  "Different teaching examinations के लिए preparation resources और practice tests.": "Preparation resources and practice tests for various teaching examinations.",
  "Super TET की तैयारी के लिए free classes और important topics.": "Free classes and important topics for Super TET preparation.",
  "Anitayan Classes के official YouTube channel पर latest classes देखें.": "Watch the latest classes on the official Anitayan Classes YouTube channel.",
  "UPTET preparation के लिए classes और educational content.": "Classes and educational content for UPTET preparation.",
  "Teacher recruitment examinations की तैयारी के लिए useful classes.": "Useful classes for teacher recruitment examination preparation.",
  "बाल विकास एवं शिक्षाशास्त्र": "Child Development and Pedagogy", "हिंदी भाषा": "Hindi Language", "गणित": "Mathematics", "विज्ञान": "Science", "पर्यावरण अध्ययन": "Environmental Studies", "सामाजिक अध्ययन": "Social Studies", "महत्वपूर्ण MCQ एवं PYQ": "Important MCQs and Previous-Year Questions",
  "सरल भाषा में तैयार किए गए Notes": "Notes prepared in simple language", "Important Topics को अलग से highlight किया गया है": "Important topics are highlighted separately", "Quick Revision के लिए उपयोगी": "Useful for quick revision", "PDF format में उपलब्ध": "Available in PDF format", "हिंदी": "Hindi", "पर्यावरण": "Environment", "शिक्षाशास्त्र": "Pedagogy", "भाषा": "Language", "विषय आधारित प्रश्न": "Subject-based questions", "सरल भाषा": "Simple language", "PYQ आधारित तैयारी": "Preparation based on previous-year questions", "Paper 1 और Paper 2 दोनों के लिए useful": "Useful for both Paper 1 and Paper 2",
  "UPTET Primary और Upper Primary परीक्षा की तैयारी के लिए complete notes.": "Complete notes for UPTET Primary and Upper Primary examination preparation.",
  "CTET Paper 1 एवं Paper 2 के लिए complete exam-oriented notes.": "Complete exam-oriented notes for CTET Paper 1 and Paper 2.",
  "MP TET की तैयारी के लिए महत्वपूर्ण topics और exam-oriented notes.": "Important topics and exam-oriented notes for MP TET preparation.",
  "CG TET की परीक्षा के लिए महत्वपूर्ण study material और notes.": "Important study material and notes for the CG TET examination.",
  "UP TGT और PGT परीक्षा के लिए useful exam-oriented study material.": "Useful exam-oriented study material for UP TGT and PGT examinations.",
  "UPSSSC exams के लिए important topics, GK और practice material.": "Important topics, general knowledge and practice material for UPSSSC examinations.",
  "बाल विकास की प्रक्रिया किस प्रकार की होती है?": "How does the process of child development take place?", "अचानक होने वाली": "Sudden", "निरंतर एवं क्रमिक": "Continuous and sequential", "केवल शारीरिक": "Physical only", "सभी बच्चों में समान": "The same for all children", "बाल विकास एक निरंतर एवं क्रमिक प्रक्रिया है।": "Child development is a continuous and sequential process.",
  "बाल विकास का सबसे महत्वपूर्ण सिद्धांत कौन सा है?": "Which is the most important principle of child development?", "विकास एक निश्चित गति से होता है": "Development occurs at a fixed pace", "विकास निरंतर होता है": "Development is continuous", "सभी बच्चों का विकास समान होता है": "All children develop in the same way", "विकास केवल जन्म के बाद शुरू होता है": "Development begins only after birth", "विकास एक निरंतर प्रक्रिया है जो जीवन के विभिन्न चरणों में चलती रहती है।": "Development is a continuous process that continues through different stages of life.",
  "बालक के विकास को प्रभावित करने वाले प्रमुख कारक कौन से हैं?": "Which major factors influence a child's development?", "केवल वंशानुक्रम": "Heredity only", "केवल वातावरण": "Environment only", "वंशानुक्रम और वातावरण दोनों": "Both heredity and environment", "केवल विद्यालय": "School only", "बाल विकास पर वंशानुक्रम और वातावरण दोनों का प्रभाव पड़ता है।": "Both heredity and environment influence child development.",
  "व्यक्तिगत भिन्नता का अर्थ क्या है?": "What does individual difference mean?", "सभी बच्चों का समान होना": "All children being alike", "बच्चों के बीच विभिन्नताओं का होना": "Differences among children", "केवल शारीरिक अंतर": "Physical differences only", "केवल मानसिक अंतर": "Mental differences only", "प्रत्येक बालक की क्षमताओं, रुचियों और विकास की गति में अंतर हो सकता है।": "Children may differ in their abilities, interests and pace of development.",
  "सीखने की प्रक्रिया में प्रेरणा का क्या महत्व है?": "What is the importance of motivation in learning?", "कोई महत्व नहीं": "No importance", "सीखने में रुचि और प्रयास बढ़ाती है": "It increases interest and effort in learning", "केवल परीक्षा में उपयोगी है": "Useful only in examinations", "केवल शिक्षक के लिए उपयोगी है": "Useful only for teachers", "प्रेरणा विद्यार्थी की सीखने में रुचि और प्रयास को बढ़ाती है।": "Motivation increases a learner's interest and effort in learning.",
  "पियाजे के अनुसार संज्ञानात्मक विकास की पहली अवस्था कौन सी है?": "According to Piaget, what is the first stage of cognitive development?", "पूर्व-संक्रियात्मक अवस्था": "Pre-operational stage", "संवेदी-गामक अवस्था": "Sensorimotor stage", "मूर्त संक्रियात्मक अवस्था": "Concrete operational stage", "औपचारिक संक्रियात्मक अवस्था": "Formal operational stage", "पियाजे के अनुसार पहली अवस्था संवेदी-गामक अवस्था है।": "According to Piaget, the first stage is the sensorimotor stage.",
  "बच्चों में सीखने की प्रक्रिया को बेहतर बनाने के लिए शिक्षक को क्या करना चाहिए?": "What should a teacher do to improve children's learning?", "केवल व्याख्यान देना": "Give lectures only", "विद्यार्थियों को सक्रिय रूप से शामिल करना": "Actively involve students", "सिर्फ गृहकार्य देना": "Assign homework only", "केवल परीक्षा लेना": "Conduct tests only", "सक्रिय सहभागिता सीखने की प्रक्रिया को अधिक प्रभावी बनाती है।": "Active participation makes the learning process more effective.",
  "समावेशी शिक्षा का मुख्य उद्देश्य क्या है?": "What is the main objective of inclusive education?", "केवल मेधावी बच्चों को पढ़ाना": "Teaching only gifted children", "सभी बच्चों को साथ में शिक्षा देना": "Educating all children together", "केवल दिव्यांग बच्चों को पढ़ाना": "Teaching only children with disabilities", "अलग-अलग कक्षाएँ बनाना": "Creating separate classrooms", "समावेशी शिक्षा में सभी विद्यार्थियों को साथ सीखने का अवसर दिया जाता है।": "Inclusive education gives all students the opportunity to learn together.",
  "एक अच्छे शिक्षक की प्रमुख विशेषता क्या होनी चाहिए?": "What should be a key quality of a good teacher?", "केवल कठोर होना": "Being strict only", "विद्यार्थियों की आवश्यकताओं को समझना": "Understanding students' needs", "केवल अधिक गृहकार्य देना": "Giving more homework only", "हर विद्यार्थी से समान व्यवहार करना": "Treating every student identically", "एक शिक्षक को विद्यार्थियों की व्यक्तिगत आवश्यकताओं और क्षमताओं को समझना चाहिए।": "A teacher should understand students' individual needs and abilities.",
  "मूल्यांकन का मुख्य उद्देश्य क्या है?": "What is the main purpose of assessment?", "केवल अंक देना": "Giving marks only", "सीखने की प्रगति जानना": "Understanding learning progress", "विद्यार्थियों को डराना": "Scaring students", "केवल परीक्षा आयोजित करना": "Conducting examinations only", "मूल्यांकन से विद्यार्थी की सीखने की प्रगति और आवश्यकताओं को समझने में सहायता मिलती है।": "Assessment helps understand a student's learning progress and needs.",
  "रचनात्मक मूल्यांकन सामान्यतः कब किया जाता है?": "When is formative assessment generally conducted?", "केवल वर्ष के अंत में": "Only at the end of the year", "शिक्षण-अधिगम प्रक्रिया के दौरान": "During the teaching-learning process", "केवल प्रवेश के समय": "Only at the time of admission", "केवल अंतिम परीक्षा में": "Only in the final examination", "रचनात्मक मूल्यांकन शिक्षण-अधिगम प्रक्रिया के दौरान किया जाता है।": "Formative assessment is conducted during the teaching-learning process.",
  "बाल-केंद्रित शिक्षा में मुख्य केंद्र कौन होता है?": "Who is at the centre of child-centred education?", "शिक्षक": "Teacher", "पुस्तक": "Book", "बालक": "Child", "परीक्षा": "Examination", "बाल-केंद्रित शिक्षा में बालक की आवश्यकताओं, रुचियों और क्षमताओं को महत्व दिया जाता है।": "Child-centred education gives importance to a child's needs, interests and abilities.",
  "बुद्धि के संबंध में कौन सा कथन उचित है?": "Which statement about intelligence is correct?", "सभी बच्चों की बुद्धि समान होती है": "All children have the same intelligence", "बुद्धि में व्यक्तिगत भिन्नता होती है": "There are individual differences in intelligence", "बुद्धि केवल जन्म से निर्धारित होती है": "Intelligence is determined only at birth", "बुद्धि कभी विकसित नहीं होती": "Intelligence never develops", "विद्यार्थियों की बौद्धिक क्षमताओं में व्यक्तिगत भिन्नता हो सकती है।": "Students may differ individually in their intellectual abilities.",
  "खेल द्वारा सीखने का सबसे बड़ा लाभ क्या है?": "What is the greatest benefit of learning through play?", "समय नष्ट होता है": "It wastes time", "सीखना रुचिकर और सक्रिय बनता है": "Learning becomes engaging and active", "केवल मनोरंजन होता है": "It is only entertainment", "परीक्षा समाप्त हो जाती है": "The examination ends", "खेल आधारित गतिविधियाँ सीखने को रुचिकर और सक्रिय बनाती हैं।": "Play-based activities make learning engaging and active.",
  "कक्षा में प्रश्न पूछने का प्रमुख उद्देश्य क्या है?": "What is the main purpose of asking questions in class?", "विद्यार्थियों को डराना": "Scaring students", "उनकी समझ और सोच को जानना": "Understanding their comprehension and thinking", "समय समाप्त करना": "Passing time", "केवल अनुशासन बनाए रखना": "Maintaining discipline only", "प्रश्न विद्यार्थियों की समझ, सोच और सहभागिता को जानने में मदद करते हैं।": "Questions help assess students' understanding, thinking and participation.",
  "अधिगम का अर्थ क्या है?": "What does learning mean?", "केवल जानकारी याद करना": "Memorising information only", "अनुभव के परिणामस्वरूप व्यवहार में अपेक्षाकृत स्थायी परिवर्तन": "A relatively lasting change in behaviour resulting from experience", "केवल परीक्षा देना": "Taking examinations only", "केवल पुस्तक पढ़ना": "Reading books only", "अधिगम अनुभव के परिणामस्वरूप व्यवहार में होने वाला अपेक्षाकृत स्थायी परिवर्तन है।": "Learning is a relatively lasting change in behaviour resulting from experience.",
  "विद्यार्थियों की गलतियों के प्रति शिक्षक का व्यवहार कैसा होना चाहिए?": "How should a teacher respond to students' mistakes?", "दंडात्मक": "Punitive", "सहायक और सुधारात्मक": "Supportive and corrective", "उपेक्षापूर्ण": "Dismissive", "कठोर": "Harsh", "गलतियों को सीखने का अवसर मानकर शिक्षक को सुधारात्मक सहायता देनी चाहिए।": "Teachers should treat mistakes as learning opportunities and provide corrective support.",
  "सहयोगात्मक अधिगम में विद्यार्थी क्या करते हैं?": "What do students do in collaborative learning?", "अकेले काम करते हैं": "Work alone", "एक-दूसरे के साथ मिलकर सीखते हैं": "Learn together", "केवल शिक्षक को सुनते हैं": "Only listen to the teacher", "केवल पुस्तक पढ़ते हैं": "Only read books", "सहयोगात्मक अधिगम में विद्यार्थी समूह में मिलकर सीखते हैं।": "In collaborative learning, students learn together in groups.",
  "शिक्षक को कक्षा में विविधता के साथ क्या करना चाहिए?": "How should a teacher address diversity in the classroom?", "सभी को एक ही तरीके से पढ़ाना": "Teach everyone in the same way", "विभिन्न आवश्यकताओं के अनुसार रणनीति अपनाना": "Use strategies suited to different needs", "कमजोर विद्यार्थियों को अलग करना": "Separate weaker students", "केवल तेज विद्यार्थियों पर ध्यान देना": "Focus only on advanced students", "विभिन्न विद्यार्थियों की आवश्यकताओं को ध्यान में रखते हुए शिक्षण रणनीति अपनानी चाहिए।": "Teaching strategies should consider the diverse needs of students.",
  "सकारात्मक प्रोत्साहन का उद्देश्य क्या है?": "What is the purpose of positive reinforcement?", "विद्यार्थी को हतोत्साहित करना": "Discouraging the student", "वांछित व्यवहार को बढ़ावा देना": "Encouraging desired behaviour", "केवल अंक बढ़ाना": "Increasing marks only", "विद्यार्थी को दंड देना": "Punishing the student", "सकारात्मक प्रोत्साहन वांछित व्यवहार और सीखने को बढ़ावा देता है।": "Positive reinforcement encourages desired behaviour and learning.",
  "विद्यार्थी की रुचि सीखने में किस प्रकार सहायता करती है?": "How does a student's interest support learning?", "सीखने की इच्छा कम करती है": "It reduces the desire to learn", "सीखने में सक्रिय सहभागिता बढ़ाती है": "It increases active participation in learning", "केवल मनोरंजन करती है": "It only entertains", "कोई प्रभाव नहीं डालती": "It has no effect", "रुचि विद्यार्थी को सीखने में अधिक सक्रिय और सहभागी बनाती है।": "Interest makes students more active and engaged in learning.",
  "एक प्रभावी कक्षा का वातावरण कैसा होना चाहिए?": "What should an effective classroom environment be like?", "भयपूर्ण": "Fearful", "सहायक और सुरक्षित": "Supportive and safe", "केवल अनुशासन आधारित": "Based only on discipline", "बिल्कुल शांत": "Completely silent", "सहायक और सुरक्षित वातावरण विद्यार्थियों के बेहतर अधिगम में मदद करता है।": "A supportive and safe environment helps students learn better.",
  "शिक्षक द्वारा feedback देने का उद्देश्य क्या है?": "What is the purpose of a teacher giving feedback?", "केवल गलती बताना": "Pointing out mistakes only", "विद्यार्थी को सुधार के लिए दिशा देना": "Guiding students towards improvement", "विद्यार्थी को दंड देना": "Punishing the student", "केवल अंक देना": "Giving marks only", "Feedback विद्यार्थी को अपनी गलतियों को समझने और सुधार करने में मदद करता है।": "Feedback helps students understand their mistakes and improve.",
  "शिक्षण-अधिगम प्रक्रिया में गतिविधियों का क्या महत्व है?": "What is the importance of activities in the teaching-learning process?", "कोई महत्व नहीं": "No importance", "विद्यार्थियों को सक्रिय रूप से सीखने में मदद करती हैं": "They help students learn actively", "केवल समय बिताने के लिए": "Only to pass time", "केवल मनोरंजन के लिए": "Only for entertainment", "गतिविधि आधारित शिक्षण विद्यार्थियों को सक्रिय रूप से सीखने का अवसर देता है।": "Activity-based teaching gives students opportunities to learn actively.",
  "एक शिक्षक के लिए सबसे महत्वपूर्ण बात क्या है?": "What is the most important responsibility of a teacher?", "केवल पाठ्यक्रम पूरा करना": "Completing the syllabus only", "विद्यार्थियों के सीखने को प्रभावी बनाना": "Making student learning effective", "केवल परीक्षा लेना": "Conducting examinations only", "केवल अनुशासन बनाए रखना": "Maintaining discipline only", "शिक्षक का प्रमुख उद्देश्य विद्यार्थियों के सीखने को प्रभावी और अर्थपूर्ण बनाना है।": "A teacher's primary goal is to make student learning effective and meaningful."
});
/* eslint-enable no-dupe-keys */

// The legacy dictionary contains entries in both directions. Build clean,
// language-specific maps so English mode can never turn English text into Hindi.
const hindiToEnglish = {};
const englishToHindi = {};
for (const [key, value] of Object.entries(translations)) {
  const keyIsHindi = /[\u0900-\u097F]/.test(key);
  const valueIsHindi = /[\u0900-\u097F]/.test(value);
  if (keyIsHindi && !valueIsHindi) {
    hindiToEnglish[key] = value;
    englishToHindi[value] = key;
  } else if (!keyIsHindi && valueIsHindi) {
    englishToHindi[key] = value;
    hindiToEnglish[value] = key;
  }
}

// Translate each original text node in one pass. The previous implementation
// repeatedly replaced fragments inside already-translated output, which could
// cascade into duplicated or corrupted Hindi text.
const originalText = new WeakMap();
const lastAppliedText = new WeakMap();
const originalAttributes = new WeakMap();
const lastAppliedAttributes = new WeakMap();

const matcherCache = new WeakMap();

function replaceOnce(source, dictionary) {
  let matcher = matcherCache.get(dictionary);
  if (!matcher) {
    const keys = Object.keys(dictionary).filter(Boolean).sort((a, b) => b.length - a.length);
    if (!keys.length) return source;
    const escaped = keys.map((key) => key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
    matcher = new RegExp(escaped.join("|"), "g");
    matcherCache.set(dictionary, matcher);
  }
  matcher.lastIndex = 0;
  return source.replace(matcher, (match) => dictionary[match]);
}

function translateValue(source, dictionary) {
  if (!source || !source.trim()) return source;
  const leading = source.match(/^\s*/)?.[0] ?? "";
  const trailing = source.match(/\s*$/)?.[0] ?? "";
  const content = source.slice(leading.length, source.length - trailing.length || undefined);
  return leading + replaceOnce(content, dictionary) + trailing;
}

function translateTextNodes(root, language) {
  if (!root) return;
  const dictionary = language === "hi" ? englishToHindi : hindiToEnglish;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let node;

  while ((node = walker.nextNode())) {
    const current = node.nodeValue ?? "";
    if (!originalText.has(node) || (lastAppliedText.has(node) && current !== lastAppliedText.get(node))) {
      originalText.set(node, current);
    }
    const translated = translateValue(originalText.get(node), dictionary);
    if (current !== translated) node.nodeValue = translated;
    lastAppliedText.set(node, translated);
  }

  root.querySelectorAll("[placeholder], [aria-label], [title]").forEach((element) => {
    const saved = originalAttributes.get(element) || {};
    const applied = lastAppliedAttributes.get(element) || {};
    ["placeholder", "aria-label", "title"].forEach((attribute) => {
      const current = element.getAttribute(attribute);
      if (current === null) return;
      if (!(attribute in saved) || (attribute in applied && current !== applied[attribute])) {
        saved[attribute] = current;
      }
      const translated = translateValue(saved[attribute], dictionary);
      if (current !== translated) element.setAttribute(attribute, translated);
      applied[attribute] = translated;
    });
    originalAttributes.set(element, saved);
    lastAppliedAttributes.set(element, applied);
  });
}

export function SiteSettingsProvider({ children }) {
  const [language, setLanguage] = useState(() => localStorage.getItem("anitayan-language") || "en");
  const [theme, setTheme] = useState(() => localStorage.getItem("anitayan-theme") || "light");

  useEffect(() => {
    localStorage.setItem("anitayan-language", language);
    document.documentElement.lang = language;
    translateTextNodes(document.getElementById("root"), language);
    const observer = new MutationObserver(() => translateTextNodes(document.getElementById("root"), language));
    observer.observe(document.getElementById("root"), { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ["placeholder", "aria-label", "title"] });
    return () => observer.disconnect();
  }, [language]);

  useEffect(() => {
    localStorage.setItem("anitayan-theme", theme);
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  const value = useMemo(() => ({
    language,
    theme,
    toggleLanguage: () => setLanguage((current) => current === "en" ? "hi" : "en"),
    toggleTheme: () => setTheme((current) => current === "light" ? "dark" : "light"),
  }), [language, theme]);

  return <SiteSettingsContext.Provider value={value}>{children}</SiteSettingsContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useSiteSettings() {
  const context = useContext(SiteSettingsContext);
  if (!context) throw new Error("useSiteSettings must be used inside SiteSettingsProvider");
  return context;
}
