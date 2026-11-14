const exams = [
  {
    id: "super-tet",
    title: "UP Super TET",
    shortTitle: "SUPER TET",
    icon: "📘",
    category: "Teaching Exam",
    description:
      "UP Super TET की तैयारी के लिए exam-oriented study material, mock tests और useful classes.",
    level: "State Level",
    language: "Hindi",
    mockTests: 5,
    notes: true,
    classes: true,
    status: "Available",
  },

  {
    id: "uptet",
    title: "UPTET",
    shortTitle: "UPTET",
    icon: "🏫",
    category: "Teaching Exam",
    description:
      "UPTET Primary और Upper Primary परीक्षा की तैयारी के लिए complete study resources.",
    level: "State Level",
    language: "Hindi",
    mockTests: 5,
    notes: true,
    classes: true,
    status: "Available",
  },

  {
    id: "ctet",
    title: "CTET",
    shortTitle: "CTET",
    icon: "🧠",
    category: "Teaching Exam",
    description:
      "CTET Paper 1 और Paper 2 की तैयारी के लिए notes, mock tests और educational content.",
    level: "National Level",
    language: "Hindi",
    mockTests: 5,
    notes: true,
    classes: true,
    status: "Available",
  },

  {
    id: "up-tgt-pgt",
    title: "UP TGT / PGT",
    shortTitle: "TGT / PGT",
    icon: "🎓",
    category: "Teaching Recruitment",
    description:
      "UP TGT और PGT examinations की preparation के लिए practice resources.",
    level: "State Level",
    language: "Hindi",
    mockTests: 5,
    notes: true,
    classes: true,
    status: "Available",
  },

  {
    id: "upsssc",
    title: "UPSSSC Exams",
    shortTitle: "UPSSSC",
    icon: "🏛️",
    category: "Government Exam",
    description:
      "UPSSSC related examinations के लिए practice और preparation resources.",
    level: "State Level",
    language: "Hindi",
    mockTests: 5,
    notes: true,
    classes: false,
    status: "Available",
  },

  {
    id: "up-pet",
    title: "UPSSSC PET",
    shortTitle: "UP PET",
    icon: "📝",
    category: "Government Exam",
    description:
      "UPSSSC PET examination के लिए general preparation और practice material.",
    level: "State Level",
    language: "Hindi",
    mockTests: 5,
    notes: true,
    classes: false,
    status: "Available",
  },

  {
    id: "bpsc-teacher",
    title: "BPSC Teacher",
    shortTitle: "BPSC",
    icon: "👨‍🏫",
    category: "Teaching Exam",
    description:
      "BPSC Teacher examination की preparation के लिए useful practice resources.",
    level: "State Level",
    language: "Hindi",
    mockTests: 5,
    notes: true,
    classes: false,
    status: "Available",
  },

  {
    id: "other-teaching",
    title: "Other Teaching Exams",
    shortTitle: "OTHERS",
    icon: "📚",
    category: "Teaching Exam",
    description:
      "Different teaching examinations के लिए preparation resources और practice tests.",
    level: "Various",
    language: "Hindi",
    mockTests: 5,
    notes: true,
    classes: true,
    status: "Available",
  },
];

/*
  दोनों export रखे हैं ताकि पुराने और नए
  दोनों imports काम करें।

  Example:
  import { exams } from "../data/exams";

  और:
  import exams from "../data/exams";
*/

export { exams };

export default exams;