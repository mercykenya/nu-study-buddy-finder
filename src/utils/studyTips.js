const studyTips = [
    "Use the Pomodoro Technique: Study for 25 minutes, then take a 5-minute break.",
    "Create a mind map to visualize connections between different concepts.",
    "Teach the material to someone else to reinforce your understanding.",
    "Use mnemonic devices to remember complex information.",
    "Take practice tests to simulate exam conditions and identify weak areas.",
    "Create flashcards for key terms and concepts.",
    "Study in a quiet, distraction-free environment.",
    "Get enough sleep before studying to improve focus and retention.",
    "Use color-coding in your notes to organize information visually.",
    "Summarize key points in your own words after each study session.",
    "Join or form a study group to discuss and debate course material.",
    "Use online resources like Khan Academy or Coursera for additional explanations.",
    "Take regular breaks to avoid burnout and maintain productivity.",
    "Create a study schedule and stick to it consistently.",
    "Use the Cornell note-taking system to organize lecture notes effectively."
  ];
  
  export function getRandomStudyTip() {
    const randomIndex = Math.floor(Math.random() * studyTips.length);
    return studyTips[randomIndex];
  }