// *** Show visi misi ***
// **angka na ubah jadi id DB**
// **kuduna teu perlu nien 2 function kieu cuman duka mun tiap angka na digenti ku ID DB**
// **Mun teu jalan mah hapus/coment we nu penting mah ketika klik tombol plus muncul detail na**
// **asal eta jalan cukup, bisi hayang aya perubahan tina UI/UX bisa diskusi heula**

let iconPlus = document.getElementById('iconPlus');
let iconPlus2 = document.getElementById('iconPlus2');

function btnVisiMisi() {
    if (iconPlus.classList.contains("fa-plus")) {
        iconPlus.classList.remove("fa-plus");
        iconPlus.classList.add("fa-minus");
      } else if (iconPlus.classList.contains("fa-minus")) {
        iconPlus.classList.remove("fa-minus");
        iconPlus.classList.add("fa-plus")
    };
}

function btnVisiMisi2() {
    if (iconPlus2.classList.contains("fa-plus")) {
        iconPlus2.classList.remove("fa-plus");
        iconPlus2.classList.add("fa-minus");
      } else if (iconPlus2.classList.contains("fa-minus")) {
        iconPlus2.classList.remove("fa-minus");
        iconPlus2.classList.add("fa-plus")
    };
}