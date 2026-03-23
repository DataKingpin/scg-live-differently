const days = [
  { index: 0, title: "Monday — Romans 1", subtitle: "Living by Faith", read: "Romans 1", verseRef: "Romans 1:17" },
  { index: 1, title: "Tuesday — Romans 2", subtitle: "Grace Leads to Repentance", read: "Romans 2", verseRef: "Romans 2:4" },
  { index: 2, title: "Wednesday — Romans 3:1–20", subtitle: "No One Righteous", read: "Romans 3:1–20", verseRef: "Romans 3:10" },
  { index: 3, title: "Thursday — Romans 3:21–31", subtitle: "Justified by Grace", read: "Romans 3:21–31", verseRef: "Romans 3:23–24" },
  { index: 4, title: "Friday — Romans 4", subtitle: "Credited Righteousness", read: "Romans 4", verseRef: "Romans 4:7–8" }
];

const toggles = document.querySelectorAll(".day-toggle");
const checks = document.querySelectorAll(".progress-check");
const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");
const jumpToTodayBtn = document.getElementById("jumpToTodayBtn");
const todayTitle = document.getElementById("todayTitle");
const todayScripture = document.getElementById("todayScripture");
const todayRead = document.getElementById("todayRead");
const todayVerseRef = document.getElementById("todayVerseRef");
const STORAGE_KEY = "live-differently-week1-paul-roy-progress-v2";

function setTodayCard() {
  const now = new Date();
  const today = now.getDay();
  let currentIndex = 0;
  if (today >= 1 && today <= 5) currentIndex = today - 1;

  const current = days[currentIndex];
  todayTitle.textContent = current.title;
  todayScripture.textContent = current.subtitle;
  todayRead.textContent = current.read;
  todayVerseRef.textContent = current.verseRef;
  openCard(current.index);

  if (jumpToTodayBtn) {
    jumpToTodayBtn.addEventListener("click", () => {
      document.getElementById(`day-${current.index}`).scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
}

function openCard(index) {
  document.querySelectorAll(".day-card").forEach((card) => {
    const isMatch = Number(card.dataset.dayIndex) === index;
    card.classList.toggle("open", isMatch);
  });
}

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const card = toggle.closest(".day-card");
    card.classList.toggle("open");
  });
});

function saveProgress() {
  const state = Array.from(checks).map((check) => check.checked);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  updateProgress();
}

function loadProgress() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return;
  try {
    const state = JSON.parse(raw);
    checks.forEach((check, i) => {
      check.checked = Boolean(state[i]);
    });
  } catch (err) {
    console.warn("Could not load saved progress.", err);
  }
}

function updateProgress() {
  const completed = Array.from(checks).filter((check) => check.checked).length;
  const percent = (completed / checks.length) * 100;
  progressFill.style.width = `${percent}%`;
  progressText.textContent = `${completed} of ${checks.length} completed`;
}

checks.forEach((check) => check.addEventListener("change", saveProgress));

loadProgress();
updateProgress();
setTodayCard();
