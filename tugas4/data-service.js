// Live Demo Code: data-service.js
const daftarMahasiswa = [
  { id: 1, nama: "Budi", prodi: "TI", ipk: 3.75, aktif: true },
  { id: 2, nama: "Siti", prodi: "TI", ipk: 3.40, aktif: true },
  { id: 3, nama: "Rizki", prodi: "SI", ipk: 3.85, aktif: false },
  { id: 4, nama: "Dewi", prodi: "TI", ipk: 3.90, aktif: true }
];

export const getMahasiswaTI = () => 
  daftarMahasiswa.filter(m => m.prodi === "TI" && m.aktif);

export const getRingkasanPrestasi = () => 
  getMahasiswaTI().map(({ nama, ipk }) => ({
    nama,
    ipk,
    predikat: ipk >= 3.75 ? "Cumlaude" : "Sangat Memuaskan"
  }));

export const hitungRataRataIPK = () => {
  const mhsTI = getMahasiswaTI();
  const total = mhsTI.reduce((sum, m) => sum + m.ipk, 0);
  return (total / mhsTI.length).toFixed(2);
};

console.log("Rata-rata IPK TI:", hitungRataRataIPK());
console.log(getRingkasanPrestasi());
