"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5;
let play = true;
let noCount = 0;

let catImages = [
  "https://media.tenor.com/eX1d6fukpNQAAAAi/begging-cat-cat.gif",
  "https://media1.tenor.com/m/t7_iTN0iYekAAAAd/sad-sad-cat.gif",
  "https://media1.tenor.com/m/rNCdBEqBKjoAAAAd/sad-cat.gif",
  "https://media.tenor.com/dNLReRVOU4sAAAAi/mochi-mochi-peach-cat-crying.gif",
  "https://media1.tenor.com/m/gPb_q8nEBs8AAAAC/cry-cat.gif",
];

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function handleYesClick() {
  titleElement.innerHTML = "เค้ารักอ้วนเหมือนกานนนน!! :3";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "ไม่ให้อนุญาติให้ปฏิเสธ",
    "เธอแน่ใจหยอ?",
    "น้า น้า น้า พรีสส",
    "อย่าทำแบบนี้กับเค้าเลยตัวเอง :(",
    "อย่ามาเล่นกับหัวใจเค้านะ",
    "จะร้องไห้แล้วนะ ถ้าทำแบบนี้",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(index) {
  if (index === "yes") {
    catImg.src = "https://media1.tenor.com/m/4Ir5RyvZPTEAAAAC/hugging.gif";
  } else {
    catImg.src = catImages[index - 1];
  }
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}
