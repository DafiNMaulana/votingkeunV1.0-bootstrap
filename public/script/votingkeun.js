// *** Show visi misi ***
// **kuduna teu perlu nien 2 function kieu cuman duka mun tiap angka na digenti ku ID DB**
// **angka na ubah jadi angka nu berasal ti id DB**
// **Mun teu jalan/mbung ambil pusing mah hapus/coment we 
// nu penting mah ketika klik tombol plus muncul detail na**
// **asal eta jalan cukup, bisi hayang aya perubahan tina UI/UX bisa diskusi heula**

let iconPlus = document.getElementById('iconPlus');
let iconPlus2 = document.getElementById('iconPlus2');
let btnVimPro = document.getElementById('btnVimPro');
let btnVimPro2 = document.getElementById('btnVimPro2');

function btnVisiMisi() {
    if (iconPlus.classList.contains("fa-plus")) {
        iconPlus.classList.remove("fa-plus");
        iconPlus.classList.add("fa-minus");

        btnVimPro.classList.remove('btn-outline-primary');
        btnVimPro.classList.add('btn-primary');
      } else if (iconPlus.classList.contains("fa-minus")) {
        iconPlus.classList.remove("fa-minus");
        iconPlus.classList.add("fa-plus")

        btnVimPro.classList.remove('btn-primary');
        btnVimPro.classList.add('btn-outline-primary');
    };
}

function btnVisiMisi2() {
    if (iconPlus2.classList.contains("fa-plus")) {
        iconPlus2.classList.remove("fa-plus");
        iconPlus2.classList.add("fa-minus");

        btnVimPro2.classList.remove('btn-outline-primary');
        btnVimPro2.classList.add('btn-primary');
      } else if (iconPlus2.classList.contains("fa-minus")) {
        iconPlus2.classList.remove("fa-minus");
        iconPlus2.classList.add("fa-plus")

        btnVimPro2.classList.remove('btn-primary');
        btnVimPro2.classList.add('btn-outline-primary');
    };
}