import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import "hover.css/css/hover-min.css";

function initIndexPage() {
  const loginBtn = document.querySelector("#container > button");
  if (!loginBtn) return;

  loginBtn.addEventListener("click", () => {
    location.href = "memo.html";
  });
}

function initMemoPage() {
  const memoWriter = document.querySelector("#memoWriter");
  const resetBtn = document.querySelector("#resetBtn");
  if (!memoWriter) return;

  memoWriter.addEventListener("submit", memoWriterHandler);

  resetBtn?.addEventListener("click", () => {
    if (!confirm("모든 메모를 삭제하시겠습니까?")) return;

    const pageSection = document.querySelector("#page");
    pageSection?.classList.remove("fade-in");
    pageSection?.classList.add("fade-out");

    pageSection?.addEventListener(
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
  memoList.append(memoBox);

  const memoTextBox = document.createElement("div");
  memoTextBox.className = "memo-text";
  memoTextBox.textContent = memoText;

  const memoActions = document.createElement("div");
  memoActions.className = "memo-actions";

  memoBox.addEventListener(
    "animationend",
    () => {
      memoBox.classList.remove("scale-in-center");
    },
    { once: true },
  );

  const cpBtn = document.createElement("button");
  cpBtn.textContent = "복사";
  cpBtn.className = "btn btn-sm rounded-pill hvr-grow memo-copy-btn";
  cpBtn.addEventListener("click", () => {
    if (confirm("정말 복사하시겠습니까?")) {
      navigator.clipboard.writeText(memoText);
      alert("복사 완료");
    }
  });

  const rmBtn = document.createElement("button");
  rmBtn.textContent = "삭제";
  rmBtn.className = "btn btn-sm rounded-pill hvr-grow memo-delete-btn";
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

  memoActions.append(cpBtn, rmBtn);
  memoBox.append(memoTextBox, memoActions);
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

document.addEventListener("DOMContentLoaded", () => {
  initIndexPage();
  initMemoPage();
});

window.addEventListener("pageshow", () => {
  document.body.classList.add("slide-in");
});
