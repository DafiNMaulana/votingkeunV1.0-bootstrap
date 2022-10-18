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

// *** Bilik suara 2 tekan coblos dulu lalu masukan suara ***
let coblos1 = document.getElementById('coblos1');
let coblos2 = document.getElementById('coblos2');
let btnMasukanSuara = document.getElementById('btnMasukanSuara');

function coblosAct1() {
    coblos1.classList.remove('bg-theme-color', 'btn-primary', 'px-3');
    coblos1.classList.add('btn-outline-primary', 'btn-outline-theme', 'px-2')
    coblos1.innerHTML  = 'Di Coblos <i class="fas fa-vote-yea"></i> </button>';

    btnMasukanSuara.removeAttribute('disabled')

    coblos2.classList.remove('btn-outline-primary', 'btn-outline-theme');
    coblos2.classList.add('bg-theme-color', 'btn-primary')
    coblos2.innerHTML  = 'Coblos <i class="fas fa-edit"></i> </button>';
}

function coblosAct2() {
  coblos2.classList.remove('bg-theme-color', 'btn-primary', 'px-3');
  coblos2.classList.add('btn-outline-primary', 'btn-outline-theme', 'px-2')
  coblos2.innerHTML  = 'Di Coblos <i class="fas fa-vote-yea"></i> </button>';

  btnMasukanSuara.removeAttribute('disabled')

  coblos1.classList.remove('btn-outline-primary', 'btn-outline-theme');
  coblos1.classList.add('bg-theme-color', 'btn-primary')
  coblos1.innerHTML  = 'Coblos <i class="fas fa-edit"></i> </button>';
}

// *** kartu suara ***
let selengkapnya1 = document.getElementById('selengkapnya1');
let selengkapnya2 = document.getElementById('selengkapnya2');
let accordionBody = document.getElementById('accordionBody1');
let arrowCircle = document.getElementById('arrowCircle');
let arrowCircle2 = document.getElementById('arrowCircle2');

selengkapnya1.onclick = function() {
  accordionBody.style.whiteSpace = 'wrap';

  if(selengkapnya1.innerText === 'Selengkapnya') {
    selengkapnya1.innerText = 'Tutup';
    arrowCircle.classList.add('rotate-up');
  } else {
    selengkapnya1.innerText = 'Selengkapnya';
    arrowCircle.classList.remove('rotate-up');
  }
}

selengkapnya2.onclick = function() {
  accordionBody.style.whiteSpace = 'wrap';

  if(selengkapnya2.innerText === 'Selengkapnya') {
    selengkapnya2.innerText = 'Tutup';
    arrowCircle2.classList.add('rotate-up');
  } else {
    selengkapnya2.innerText = 'Selengkapnya';
    arrowCircle2.classList.remove('rotate-up');
  }
}
