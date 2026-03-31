//Fungsi memuat data dari session storage dan menampilkannya
function displayGuests() {
  const guestListUI = document.getElementById("guestList");
  guestListUI.innerHTML = ""; // Reset Tampilan List

  //Mengambil data dari session storage, jika kosong buat array baru
  let guests = JSON.parse(sessionStorage.getItem("guests")) || [];

  guests.forEach((guest) => {
    let li = document.createElement("li");
    li.textContent = guest;
    guestListUI.appendChild(li);
  });
}

//Fungsi menambah data
function addGuest() {
  const input = document.getElementById("guestInput");
  const guestName = input.value;
  if (guestName === "") {
    alert("Nama tidak boleh kosong!!");
    return;
  }

  //Ambil data lama
  let guests = JSON.parse(sessionStorage.getItem("guests")) || [];
  //Tambah data ke array
  guests.push(guestName);
  //Simpan kembali ke storage dalam bentuk string
  sessionStorage.setItem("guests", JSON.stringify(guests));
  //Bersihkan input dan perbarui tampilan
  input.value = "";
  displayGuests();
}

//Fungsi menghapus semua data
function clearList() {
  if (confirm("Hapus semua data tamu pada list?")) {
    sessionStorage.removeItem("guests");
    displayGuests();
  }
}

//Jalankan fungsi display saat halaman pertama kali dimuat
window.onload = displayGuests;
