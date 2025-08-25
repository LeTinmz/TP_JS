const themeBtn = document.getElementById("theme-btn");
const descriptionArea = document.getElementById("description");
const descriptionButton = document.getElementById("description-button");
const pseudoInput = document.getElementById("pseudo-input");
const descriptions = ["wesh alors", "keskidi", "bien ou bien"];
const submitBtn = document.getElementById("submit-btn");
const image1 = document.getElementById("img-1");
const image2 = document.getElementById("img-2");
const image3 = document.getElementById("img-3");
const images = document.getElementById("avatar-section");

const mainPageHTML = document.querySelector("main").innerHTML;

let selectedImage = null;
let isValid = false;
pseudoInput.value = "";
submitBtn.disabled = true;
let descriptionIndex = 0;

const goBackToMain = () => {
  document.querySelector("main").innerHTML = mainPageHTML;
  selectedImage = null;
  isValid = false;
  pseudoInput.value = "";
  submitBtn.disabled = true;
  descriptionIndex = 0;
  document.querySelectorAll("img").forEach((img) => {
    img.addEventListener("click", handleSelect);
  });
};

const updateValidity = () => {
  isValid = pseudoInput.value !== "" && selectedImage !== null;
  submitBtn.disabled = !isValid;
};

const handleSelect = (e) => {
  document.querySelectorAll("img").forEach((img) => {
    img.classList.remove("selected");
  });
  selectedImage = e.target;
  e.target.classList.add("selected");
  updateValidity();
};

const handleGoNext = () => {
  document.querySelector("main").innerHTML = `<div class="card">
    <img src="${selectedImage.src}"> 
    <p>${pseudoInput.value}</p>
    <p>${descriptions[descriptionIndex]}</p> 
    </div>

    <button id="back-btn">retour</button>`;

  const backBtn = document.getElementById("back-btn");
  backBtn.addEventListener("click", goBackToMain);
};

descriptionArea.innerText = descriptions[descriptionIndex];

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

descriptionButton.addEventListener("click", () => {
  descriptionIndex =
    descriptionIndex == descriptions.length - 1 ? 0 : descriptionIndex + 1;
  descriptionArea.innerText = descriptions[descriptionIndex];
});

document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("click", handleSelect);
});

pseudoInput.addEventListener("input", (e) => {
  updateValidity();
});

submitBtn.addEventListener("click", handleGoNext);
