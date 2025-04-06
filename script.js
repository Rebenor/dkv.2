const siswaData = [
    {
      nama: "Diana Nurul Hidayah",
      foto: "images/1_DIANA NURUL HIDAYAH.jpg"
    },
    {
      nama: "Fadli Dwi Ariawan",
      foto: "images/2_FADLI DWI ARIAWAN.jpg"
    },
    {
      nama: "Gede Kevin Artha Wicahya",
      foto: "images/3_GEDE KEVIN ARTHA WICAHYA.jpg"
    },
    {
      nama: "Gede Pasek Manik Wira Buana",
      foto: "images/4_GEDE PASEK MANIK WIRA BUANA.jpg"
    },
    {
      nama: "Gede Rizky Juda Pratama Putra",
      foto: "images/5_GEDE RIZKY JUDA PRATAMA PUTRA.jpg"
    },
    {
      nama: "Gusti Ngurah Ketut Surya Bawana",
      foto: "images/6_GUSTI NGURAH KETUT SURYA BAWANA.jpg"
    },
    {
      nama: "I Gusti Agung Brahmanta Adhisthana",
      foto: "images/7_I GUSTI AGUNG BRAHMANTA ADHISTANA.jpg"
    },
    {
      nama: "I Kadek Giyo Arya Vedakrna",
      foto: "images/8_I KADEK GIYO ARYA VEDAKARNA.jpg"
    },
    {
      nama: "Jane Salinda Rahim",
      foto: "images/9_JANE SALINDA RAHIM.jpg"
    },
    {
      nama: "Kadek Agus Arnata",
      foto: "images/10_KADEK AGUS ARNATA.jpg"
    },
    {
      nama: "Kadek Dian Lestari",
      foto: "images/11_KADEK DIAN LESTARI.jpg"
    },
    {
      nama: "Kadek Karya Wibawa",
      foto: "images/12_KADEK KARYA WIBAWA.jpg"
    },
    {
      nama: "Kadek Nirmala Putri Wirawati",
      foto: "images/13_KADEK NIRMALA PUTRI WIRAWATI.jpg"
    },
    {
      nama: "Kadek Suciani",
      foto: "images/14_KADEK SUCIANI.jpg"
    },
    {
      nama: "Kadek Wahyu Divayana",
      foto: "images/15_KADEK WAHYU DIVAYANA.jpg"
    },
    {
      nama: "Ketut Suli Caniaghi",
      foto: "images/16_KETUT SULI CANIAGHI.jpg"
    },
    {
      nama: "Komang Ari Sukarmawan",
      foto: "images/17_KOMANG ARI SUKARMAWAN.jpg"
    },
    {
      nama: "Komang Dian Sastra Suandewi",
      foto: "images/18_KOMANG DIAN SASTRA SUANDEWI.jpg"
    },
    {
      nama: "Komang Dina Aprilia",
      foto: "images/19_Komang Dina Aprilia.jpg"
    },
    {
      nama: "Komang Krisna Arya Adi Putra",
      foto: "images/20_KOMANG KRISNA ARYA ADI PUTRA.jpg"
    },
    {
      nama: "Komang Prema Nanda Mandawa",
      foto: "images/21_KOMANG PREMA NANDA MANDAWA.jpg"
    },
    {
      nama: "Made Dea Swastini",
      foto: "images/22_MADE DEA SWASTINI.jpg"
    },
    {
      nama: "Made Dimas Yudi Satria",
      foto: "images/23_MADE DIMAS YUDI SATRIA.jpg"
    },
    {
      nama: "Made Rivan Andika",
      foto: "images/24_MADE RIVAN ANDIKA.jpg"
    },
    {
      nama: "Ni Ketut Seni Nastiti Amelia",
      foto: "images/25_NI KETUT SENI NASTITI_AMELIA.jpg"
    },
    {
      nama: "Nyoman Widya Harimbhawana",
      foto: "images/26_NYOMAN WIDYA HARIMBHAWANA.jpg"
    },
    {
      nama: "Olivia Febri Yanti",
      foto: "images/27_OLIVIA FEBRI YANTI.jpg"
    },
    {
      nama: "Putu Lovina Melyana",
      foto: "images/28_PUTU LOVIANA MELYANA.jpg"
    },
    {
      nama: "Putu Verdy Kusuma Jaya",
      foto: "images/29_PUTU VERDY KUSUMA JAYA.jpg"
    },
    {
      nama: "Putu Widia Saputra",
      foto: "images/30_PUTU WIDIA SAPUTRA.jpg"
    },
    {
      nama: "Sita Novista",
      foto: "images/31_SITA NOVISTA.jpg"
    },
    {
      nama: "Verena Ifanka Wardhana",
      foto: "images/32_VERENA IFANKA WARDHANA.jpg"
    },
    {
      nama: "Wayan Willy Astrawan",
      foto: "images/33_WAYAN WILI ASTRAWAN.jpg"
    },
    {
      nama: "Zahira",
      foto: "images/34_ZAHIRA.jpg"
    },
    
  ];  
  
  const siswaPerGrup = 6;
  const totalGrup = Math.ceil(siswaData.length / siswaPerGrup);
  const container = document.getElementById("siswa-container");
  
  for (let i = 0; i < totalGrup; i++) {
    const group = document.createElement("div");
    group.className = "min-w-full flex justify-center gap-5 snap-start";
  
    const grupSiswa = siswaData.slice(i * siswaPerGrup, (i + 1) * siswaPerGrup);
  
    grupSiswa.forEach(siswa => {
      const card = document.createElement("div");
      card.className = "bg-gray-100 p-4 rounded-xl shadow w-52 flex-shrink-0 text-center hover:shadow-lg transition-shadow duration-300";
      card.innerHTML = `
        <img src="${siswa.foto}" class="mx-auto rounded-full mb-3 w-24 h-24 object-cover" alt="${siswa.nama}">
        <h3 class="font-semibold text-lg">${siswa.nama}</h3>
      `;
      group.appendChild(card);
    });
  
    container.appendChild(group);
  }
  
  ScrollReveal().reveal('section', {
    duration: 1000,
    distance: '50px',
    easing: 'ease-in-out',
    origin: 'bottom',
    reset: false
  });  