const qr = document.getElementById("qr");
const qrCode = document.getElementById("qr-code");
let isqr = false;

qr.addEventListener("click", () => {
  if (isqr) {
    isqr = false;
    qrCode.style.display = "none";
  } else {
    isqr = true;
    qrCode.style.display = "block";
  }
});
