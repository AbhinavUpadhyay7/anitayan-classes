export const notes = [
  {
    id: "super-tet-notes",
    title: "UP Super TET Complete Notes",
    shortTitle: "UP Super TET Notes",
    exam: "UP Super TET",
    examSlug: "super-tet",
    icon: "📘",
    price: 49,
    originalPrice: 100,
    pages: 450,
    language: "Hindi",
    format: "PDF",

    description:
      "UP Super TET की तैयारी के लिए exam-oriented complete handwritten notes.",

    highlights: [
      "बाल विकास एवं शिक्षाशास्त्र",
      "हिंदी भाषा",
      "गणित",
      "विज्ञान",
      "पर्यावरण अध्ययन",
      "सामाजिक अध्ययन",
      "महत्वपूर्ण MCQ एवं PYQ",
    ],

    benefits: [
      "सरल भाषा में तैयार किए गए Notes",
      "Important Topics को अलग से highlight किया गया है",
      "Quick Revision के लिए उपयोगी",
      "Exam-oriented content",
      "PDF format में उपलब्ध",
    ],
  },

  {
    id: "uptet-notes",
    title: "UPTET Complete Notes",
    shortTitle: "UPTET Notes",
    exam: "UPTET",
    examSlug: "uptet",
    icon: "🏫",
    price: 49,
    originalPrice: 100,
    pages: 350,
    language: "Hindi",
    format: "PDF",

    description:
      "UPTET Primary और Upper Primary परीक्षा की तैयारी के लिए complete notes.",

    highlights: [
      "बाल विकास एवं शिक्षाशास्त्र",
      "हिंदी",
      "गणित",
      "EVS",
      "विज्ञान",
      "सामाजिक अध्ययन",
      "Important Questions",
    ],

    benefits: [
      "Topic-wise study material",
      "Easy to revise",
      "Important concepts covered",
      "Exam-focused notes",
      "PDF format",
    ],
  },

  {
    id: "ctet-notes",
    title: "CTET Complete Notes",
    shortTitle: "CTET Notes",
    exam: "CTET",
    examSlug: "ctet",
    icon: "🧠",
    price: 39,
    originalPrice: 100,
    pages: 300,
    language: "Hindi",
    format: "PDF",

    description:
      "CTET Paper 1 एवं Paper 2 के लिए complete exam-oriented notes.",

    highlights: [
      "Child Development & Pedagogy",
      "Hindi Language",
      "English Language",
      "Mathematics",
      "EVS",
      "Science & Social Studies",
      "PYQ आधारित तैयारी",
    ],

    benefits: [
      "Paper 1 और Paper 2 दोनों के लिए useful",
      "Important concepts",
      "Revision friendly",
      "MCQ practice support",
      "PDF format",
    ],
  },

  {
    id: "mp-tet-notes",
    title: "MP TET Complete Notes",
    shortTitle: "MP TET Notes",
    exam: "MP TET",
    examSlug: "mp-tet",
    icon: "📗",
    price: 39,
    originalPrice: 100,
    pages: 350,
    language: "Hindi",
    format: "PDF",

    description:
      "MP TET की तैयारी के लिए महत्वपूर्ण topics और exam-oriented notes.",

    highlights: [
      "बाल विकास",
      "हिंदी",
      "गणित",
      "पर्यावरण",
      "शिक्षाशास्त्र",
      "महत्वपूर्ण प्रश्न",
    ],

    benefits: [
      "सरल भाषा",
      "Topic-wise preparation",
      "Revision friendly",
      "Important questions included",
    ],
  },

  {
    id: "cg-tet-notes",
    title: "Chhattisgarh TET Notes",
    shortTitle: "CG TET Notes",
    exam: "Chhattisgarh TET",
    examSlug: "cg-tet",
    icon: "🌾",
    price: 39,
    originalPrice: 100,
    pages: 250,
    language: "Hindi",
    format: "PDF",

    description:
      "CG TET की परीक्षा के लिए महत्वपूर्ण study material और notes.",

    highlights: [
      "बाल विकास एवं शिक्षाशास्त्र",
      "भाषा",
      "गणित",
      "EVS",
      "विषय आधारित प्रश्न",
      "PYQ",
    ],

    benefits: [
      "Exam-oriented content",
      "Quick revision",
      "Important topics",
      "PDF format",
    ],
  },

  {
    id: "tgt-pgt-notes",
    title: "UP TGT / PGT Notes",
    shortTitle: "TGT / PGT Notes",
    exam: "UP TGT / PGT",
    examSlug: "tgt-pgt",
    icon: "🎓",
    price: 59,
    originalPrice: 120,
    pages: 300,
    language: "Hindi",
    format: "PDF",

    description:
      "UP TGT और PGT परीक्षा के लिए useful exam-oriented study material.",

    highlights: [
      "General Knowledge",
      "General Studies",
      "Subject Preparation",
      "Important Facts",
      "PYQ",
      "MCQ",
    ],

    benefits: [
      "Exam-focused preparation",
      "Important facts highlighted",
      "Revision material",
      "PDF format",
    ],
  },

  {
    id: "upsssc-notes",
    title: "UPSSSC Exam Notes",
    shortTitle: "UPSSSC Notes",
    exam: "UPSSSC",
    examSlug: "upsssc",
    icon: "📊",
    price: 39,
    originalPrice: 100,
    pages: 300,
    language: "Hindi",
    format: "PDF",

    description:
      "UPSSSC exams के लिए important topics, GK और practice material.",

    highlights: [
      "General Knowledge",
      "General Studies",
      "Current Affairs",
      "Hindi",
      "Reasoning",
      "Important Questions",
    ],

    benefits: [
      "Quick revision",
      "Exam-oriented material",
      "Important topics",
      "PDF format",
    ],
  },
];

export const getNoteById = (id) => {
  return notes.find((note) => note.id === id);
};