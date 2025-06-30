// Handle modal manual book
const manualBtn = document.getElementById("manualBtn");
const manualModal = document.getElementById("manualModal");
const closeManual = document.getElementById("closeManual");

manualBtn.onclick = function () {
  manualModal.style.display = "block";
};
closeManual.onclick = function () {
  manualModal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == manualModal) {
    manualModal.style.display = "none";
  }
};

// Fungsi convert Word ke PDF
function convertWordToPdf() {
  // TODO: Implementasi konversi Word ke PDF
  alert("Fitur Word ke PDF akan segera hadir!");
}

// Fungsi convert Gambar ke PDF
function convertImgToPdf() {
  // TODO: Implementasi konversi Gambar ke PDF
  alert("Fitur Gambar ke PDF akan segera hadir!");
}

// Fungsi convert Word ke PPT
function convertWordToPpt() {
  // TODO: Implementasi konversi Word ke PPT
  alert("Fitur Word ke PPT akan segera hadir!");
}
