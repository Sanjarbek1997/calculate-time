let speedP = 3.6;
let speedV = 20.1;
let speedM = 70;
let speedS = 800;

const elForm = document.querySelector("#form");
const elInput = document.querySelector("#input");
const elSpanPiHour = document.querySelector(".phour");
const elSpanVeHour = document.querySelector(".vhour");
const elSpanMaHour = document.querySelector(".mhour");
const elSpanSaHour = document.querySelector(".shour");
const elAsosiy = document.querySelector(".asosiy");
const elTekst = document.querySelector(".tekst");

function calculate(a, b) {
  let soat = Math.floor(a / b);
  let minut = Math.floor((a / b - soat) * 60);
  let sekund = Math.floor(((a / b - soat) * 60 - minut) * 60);

  if (soat == 0) {
    if (minut == 0) {
      return `${sekund} soniya`;
    } else if (sekund == 0) {
      return `${minut} daqiqa`;
    } else {
      return `${minut} daqiqa ${sekund} soniya`;
    }
  } else if (minut == 0) {
    if (sekund == 0) {
      return `${soat} soat`;
    } else {
      return `${soat} soat ${sekund} soniya`;
    }
  } else {
    if (sekund == 0) {
      return `${soat} soat ${minut} daqiqa`;
    } else {
      return `${soat} soat ${minut} daqiqa ${sekund} soniya`;
    }
  }
}
elForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (isNaN(elInput.value)) {
    elAsosiy.classList.add("d-none");
    elTekst.innerHTML = "Akasi son yozing ILTIMOS!!!";
    elInput.value = "";

  } else if (elInput.value <= 0) {
    elAsosiy.classList.add("d-none");
    elTekst.innerHTML = "Akasi noldan katta son kiritng ILTIMOS!!!";
    elInput.value = "";

  } else {
    elAsosiy.classList.remove("d-none");
    elTekst.innerHTML = "";
    elSpanPiHour.innerHTML = calculate(elInput.value, speedP);
    elSpanVeHour.innerHTML = calculate(elInput.value, speedV);
    elSpanMaHour.innerHTML = calculate(elInput.value, speedM);
    elSpanSaHour.innerHTML = calculate(elInput.value, speedS);
    elInput.value = "";
  }
});
