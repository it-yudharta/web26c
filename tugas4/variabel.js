const nama = 'Cahya Bagus Sanjaya';
// tidak bisa diubah karena konstanta
// nama = 'Bagus';

let alamat = "Purwosari";
alamat = "Sengonagung Purwosari";
const ada = "jum'at";

// type data number 0.24, 5_000, 25e3
const nomorRumah = 25;

// type data boolean
const menikah = true;

// console.log(`${nama} beralamat di: ${alamat} no: ${nomorRumah}, bisa ditemui pada hari ${ada}`);

// object kumpulan beberapa data
const dosen = {
    nama: 'Cahya Bagus Sanjaya',
    alamat: {
        no: 25,
        desa: 'Sengonagung',
        kecamatan: 'Purwosari',
        kabupaten: 'Pasuruan'
    },
    menikah: true
}

// akses menggunakan dot (.)
console.log(dosen.alamat.kabupaten);

// array
const hobi = ['membaca', 'menulis', 'menari'];

// akses menggunakan index (dimulai dari 0)
const hobiPertama = hobi[2]
console.log(hobiPertama);
