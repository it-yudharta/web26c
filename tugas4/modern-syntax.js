// Arrow Function & Implicit Return
const hitungNilaiAkhir = (tugas, uts, uas) => (tugas * 0.2) + (uts * 0.3) + (uas * 0.5);

// Object Mahasiswa
const mahasiswa = {
  nim: "240511001",
  nama: "Ahmad Dahlan",
  prodi: "Teknik Informatika",
  nilai: { tugas: 85, uts: 80, uas: 90 }
};

// Object Destructuring & Nested Extraction
const { nama, prodi, nilai: { uas } } = mahasiswa;
console.log(nama + " (" + prodi + ") memperoleh nilai UAS: " + uas);

// Immutable Update dengan Spread Operator (...)
const mahasiswaUpdate = {
  ...mahasiswa,
  status: "Aktif",
  semester: 4
};

// Rest Parameter (...)
const totalSKS = (...mataKuliah) => mataKuliah.reduce((acc, curr) => acc + curr, 0);
console.log("Total SKS diambil:", totalSKS(4, 3, 4, 3, 2)); // 16