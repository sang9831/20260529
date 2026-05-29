// 1. node_modules에서 쓸 외부 패키지 스타일 전부 가져오기
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import "hover.css/css/hover-min.css";

// 2. index.html 관련 로직
function initIndexPage() {
  const loginBtn = document.querySelector("#container > button");
  if (loginBtn) {
    loginBtn.addEventListener("click", () => {
      location.href = "memo.html";
    });
  }
}

// 3. memo.html 관련 로직
function initMemoPage() {
  const memoWriter = document.querySelector("#memoWriter");
  const resetBtn = document.querySelector("#resetBtn");
  if (!memoWriter) return;

  memoWriter.addEventListener("submit", memoWriterHandler);

  resetBtn.addEventListener("click", () => {
    if (!confirm("모든 메모를 삭제하시겠습니까?")) return;
    const pageSection = document.querySelector("#page");
    pageSection.classList.remove("fade-in");
    pageSection.classList.add("fade-out");

    pageSection.addEventListener(
      "animationend",
      function handleFadeOut() {
        localStorage.removeItem("memo");
        drawPrevMemo();
        pageSection.classList.remove("fade-out");
        pageSection.classList.add("fade-in");
        pageSection.removeEventListener("animationend", handleFadeOut);
      },
      { once: true },
    );
  });

  drawPrevMemo();
}

// 메모장 하위 함수들
function memoWriterHandler(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const memoText = formData.get("memo");
  const id = saveMemo(memoText);
  drawMemoBox(memoText, id);
  event.target.reset();
}

function drawMemoBox(memoText, id) {
  const memoList = document.querySelector("#memoList");
  if (!memoList) return;

  const memoBox = document.createElement("div");
  memoBox.className =
    "memo-card card border-0 rounded-4 shadow-sm bg-white p-3 d-flex flex-column gap-2 hvr-grow scale-in-center";
  memoBox.textContent = memoText;
  memoList.append(memoBox);

  memoBox.addEventListener(
    "animationend",
    () => {
      memoBox.classList.remove("scale-in-center");
    },
    { once: true },
  );

  const rmBtn = document.createElement("button");
  rmBtn.textContent = "삭제";
  rmBtn.className =
    "btn btn-sm btn-outline-danger rounded-pill align-self-start hvr-grow";
  rmBtn.addEventListener("click", () => {
    const memoObj = getPrevMemo();
    memoObj[id] = undefined;
    localStorage.setItem("memo", JSON.stringify(memoObj));
    memoBox.classList.add("scale-out-center");
    memoBox.addEventListener(
      "animationend",
      () => {
        memoBox.remove();
      },
      { once: true },
    );
  });

  const cpBtn = document.createElement("button");
  cpBtn.textContent = "복사";
  cpBtn.className =
    "btn btn-sm btn-outline-primary rounded-pill align-self-start hvr-grow";
  cpBtn.addEventListener("click", () => {
    if (confirm("정말 복사하시겠습니까?")) {
      navigator.clipboard.writeText(memoText);
      alert("복사 완료");
    }
  });

  memoBox.append(rmBtn, cpBtn);
}

function saveMemo(memoText) {
  const memoObj = getPrevMemo();
  const timeKey = Date.now();
  memoObj[timeKey] = memoText;
  localStorage.setItem("memo", JSON.stringify(memoObj));
  return timeKey;
}

function getPrevMemo() {
  const prevMemo = localStorage.getItem("memo") ?? "{}";
  try {
    return JSON.parse(prevMemo);
  } catch {
    return {};
  }
}

function drawPrevMemo() {
  const memoList = document.querySelector("#memoList");
  if (!memoList) return;
  const prevMemo = getPrevMemo();
  memoList.innerHTML = "";
  for (const key in prevMemo) {
    if (prevMemo[key]) drawMemoBox(prevMemo[key], key);
  }
}

// 전체 페이지 로드 공통 제어
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM 로딩 완료");
  initIndexPage();
  initMemoPage();
});

window.addEventListener("pageshow", () => {
  document.body.classList.add("slide-in");
});
