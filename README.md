# express-api
Ignore the test-grit folder

## Penjelasan Folder/File:

express-api : Folder project express.js untuk nomor 10 dan 11 Soal Utama

pseudocode.js : File code untuk soal PseudoCode

testdebug.html : File hasil debug untuk nomor 8 Soal Utama

## Penjelasan hasil debug testdebug.html:
Terdapat error yang terlihat diawal:
1. Pada Raw Data, terdapat object yang kurang koma pada Line 24
2. Pada Raw Data, terdapat property pada object yang tidak menggunakan string lateral untuk menutup string apda Line 429
3. Pada Raw Data, terdapat property "Value String" yang masih kosong sehingga harus diisi terlebih dahulu pada Line 439
4. Pada Line 542 di function compareDeep2, cleanA[] belum memiliki index, sehingga harus ditambahkan menjadi cleanA[i]
5. Terakhir, pada line 528, terdapat typo pada saat mengakses property dari b, seharusnya hanya "attribute", bukan "attributes"

