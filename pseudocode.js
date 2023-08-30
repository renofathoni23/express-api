// 1. Tampilkan deret angka berkelipatan 5 mulai dari 50 sampai dengan 100

function kelipatanLima() {
  for (let i = 50; i <= 100; i += 5) {
    if (i <= 60) {
      console.log(`${i} KURANG`);
    } else if (i > 60 && i <= 70) {
      console.log(`${i} CUKUP`);
    } else if (i > 70 && i <= 80) {
      console.log(`${i} BAIK`);
    } else {
      console.log(`${i} LUAR BIASA`);
    }
  }
}

kelipatanLima();
console.log("");

// 2. Buatlah deret bilangan Fibonacci sebanyak 20

function fibonacci() {
  let fibonacci = [0, 1];

  for (let i = 2; i < 20; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }

  let result = fibonacci.join(" ");
  console.log(result);
}

fibonacci();
console.log("");

// 3. Buatlah tampilan sesuai variabel x
function tampilan(x) {
  for (let i = 0; i < x; i++) {
    let result = "";
    for (let j = 0; j <= i; j++) {
      result += "* ";
    }
    console.log(result);
  }
}
tampilan(10);
console.log("");

// 4.Buatlah tampilan terbilang dari variable x yang berupa 4 digit angka ( lebih besar dari 2000 )
function convertToString(number) {
  let satuanArray = [
    "",
    "Satu",
    "Dua",
    "Tiga",
    "Empat",
    "Lima",
    "Enam",
    "Tujuh",
    "Delapan",
    "Sembilan",
  ];

  let belasanArray = [
    "Sepuluh",
    "Sebelas",
    "Dua Belas",
    "Tiga Belas",
    "Empat Belas",
    "Lima Belas",
    "Enam Belas",
    "Tujuh Belas",
    "Delapan Belas",
    "Sembilan Belas",
  ];

  let result = "";

  let ribuan = (number - (number % 1000)) / 1000;
  result += `${satuanArray[ribuan]} Ribu`;
  let ratusan = ((number % 1000) - (number % 100)) / 100;
  if (ratusan != 0) {
    if (ratusan === 1) {
      result += " Seratus";
    } else {
      result += ` ${satuanArray[ratusan]} Ratus`;
    }
  }
  let puluhan = number % 100;
  if (puluhan < 10) {
    result += ` ${satuanArray[puluhan]}`;
  } else if (puluhan >= 10 && puluhan < 20) {
    let belasan = puluhan % 10;
    result += ` ${belasanArray[belasan]}`;
  } else {
    let puluh = (puluhan - (puluhan % 10)) / 10;
    let satuan = puluhan % 10;

    result += ` ${satuanArray[puluh]} Puluh  ${satuanArray[satuan]}`;
  }

  console.log(result);
}

convertToString(7001);
