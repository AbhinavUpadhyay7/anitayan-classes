const examTestTemplates = [
  {
    exam: "UP Super TET",
    examSlug: "super-tet",
    icon: "📘",
  },
  {
    exam: "CTET",
    examSlug: "ctet",
    icon: "🧠",
  },
  {
    exam: "UPTET",
    examSlug: "uptet",
    icon: "🏫",
  },
  {
    exam: "Chhattisgarh TET",
    examSlug: "cg-tet",
    icon: "🌾",
  },
  {
    exam: "MP TET",
    examSlug: "mp-tet",
    icon: "📗",
  },
  {
    exam: "UPSSSC",
    examSlug: "upsssc",
    icon: "📊",
  },
  {
    exam: "UP TGT / PGT",
    examSlug: "tgt-pgt",
    icon: "🎓",
  },
  {
    exam: "Free Practice",
    examSlug: "free-practice",
    icon: "⚡",
  },
];

const testNames = [
  "Mock Test 1",
  "Mock Test 2",
  "Mock Test 3",
  "Mock Test 4",
  "Mock Test 5",
];

export const mockTests = examTestTemplates.flatMap(
  (exam) =>
    testNames.map((testName, index) => ({
      id: `${exam.examSlug}-${index + 1}`,

      title: `${exam.exam} - ${testName}`,

      shortTitle: testName,

      exam: exam.exam,

      examSlug: exam.examSlug,

      icon: exam.icon,

      questions: 25,

      marks: 25,

      duration: 20,

      difficulty:
        index === 0
          ? "Easy"
          : index === 1
            ? "Easy"
            : index === 2
              ? "Medium"
              : index === 3
                ? "Medium"
                : "Hard",

      description:
        "Exam-oriented practice test with important MCQ questions.",

      isFree: true,
    }))
);

export const examFilters = [
  {
    name: "All Tests",
    slug: "all",
    icon: "📚",
  },
  ...examTestTemplates.map((exam) => ({
    name: exam.exam,
    slug: exam.examSlug,
    icon: exam.icon,
  })),
];