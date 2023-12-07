var historiPerhitungan = {
    Luas: [],
    Keliling: []
};

function hitungLuas() {
    var alas = parseFloat(document.getElementById('alas').value);
    var tinggi = parseFloat(document.getElementById('tinggi').value);

    if (!isNaN(alas) && !isNaN(tinggi)) {
        var luas = 0.5 * alas * tinggi;

        historiPerhitungan.Luas.push({ input: `Alas: ${alas}, Tinggi: ${tinggi}`, hasil: luas });

        document.getElementById('hasilLuas').innerText = 'Luas Segitiga: ' + luas.toFixed(2).replace(/\.?0+$/, ' cm²');
        document.getElementById('penjelasanLuas').innerHTML = 'Luas segitiga dihitung dengan rumus: <br> Luas = 1/2 * alas * tinggi <br> = 1/2 * ' + alas + ' * ' + tinggi + '<br> = ' + luas.toFixed(2).replace(/\.?0+$/, ' cm²' );

        tampilkanHistori();
    } else {
        showErrorMessage('Masukkan angka yang benar untuk Alas dan Tinggi. Pastikan menggunakan angka bulat atau desimal.');
    }
}

function hitungKeliling() {
    var sisi1 = parseFloat(document.getElementById('sisi1').value);
    var sisi2 = parseFloat(document.getElementById('sisi2').value);
    var sisi3 = parseFloat(document.getElementById('sisi3').value);

    if (!isNaN(sisi1) && !isNaN(sisi2) && !isNaN(sisi3)) {
        var keliling = sisi1 + sisi2 + sisi3;

        historiPerhitungan.Keliling.push({ input: `Sisi 1: ${sisi1}, Sisi 2: ${sisi2}, Sisi 3: ${sisi3}`, hasil: keliling });

        document.getElementById('hasilKeliling').innerText = 'Keliling Segitiga: ' + keliling.toFixed(2).replace(/\.?0+$/, ' cm²');
        document.getElementById('penjelasanKeliling').innerHTML = 'Keliling segitiga dihitung dengan menjumlahkan panjang semua sisi: <br> Keliling = sisi1 + sisi2 + sisi3 <br> = ' + sisi1 + ' + ' + sisi2 + ' + ' + sisi3 + ' <br> = ' + keliling.toFixed(2).replace(/\.?0+$/, ' cm²');

        tampilkanHistori();
    } else {
        showErrorMessage('Masukkan angka yang benar untuk Sisi 1, Sisi 2, dan Sisi 3. Pastikan menggunakan angka bulat atau desimal.');
    }
}



function resetFormLuas() {
    document.getElementById('luasForm').reset();
    document.getElementById('hasilLuas').innerText = '';
    document.getElementById('penjelasanLuas').innerHTML = '';
}

function resetFormKeliling() {
    document.getElementById('kelilingForm').reset();
    document.getElementById('hasilKeliling').innerText = '';
    document.getElementById('penjelasanKeliling').innerHTML = '';
}


function showErrorMessage(message) {
    document.getElementById('errorText').innerText = message;
    document.getElementById('errorMessage').style.display = 'block';
}

function hideErrorMessage() {
    document.getElementById('errorMessage').style.display = 'none';
}

function tambahHistori(tipe, hasil) {
    historiPerhitungan.push({ tipe: tipe, hasil: hasil });
    tampilkanHistori();
}

function tampilkanHistori() {
    var historiLuasTable = document.getElementById('historiLuasTable').getElementsByTagName('tbody')[0];
    var historiKelilingTable = document.getElementById('historiKelilingTable').getElementsByTagName('tbody')[0];

    // Kosongkan tabel sebelum menambahkan yang baru
    historiLuasTable.innerHTML = '';
    historiKelilingTable.innerHTML = '';

    // Tambahkan histori Luas
    historiPerhitungan.Luas.forEach(function (perhitungan, index) {
        var row = historiLuasTable.insertRow();
        var cellNo = row.insertCell(0);
        var cellInput = row.insertCell(1);
        var cellHasil = row.insertCell(2);

        cellNo.innerHTML = index + 1;
        cellInput.innerHTML = perhitungan.input;
        cellHasil.innerHTML = perhitungan.hasil + ' cm²';
    });

    // Tambahkan histori Keliling
    historiPerhitungan.Keliling.forEach(function (perhitungan, index) {
        var row = historiKelilingTable.insertRow();
        var cellNo = row.insertCell(0);
        var cellInput = row.insertCell(1);
        var cellHasil = row.insertCell(2);

        cellNo.innerHTML = index + 1;
        cellInput.innerHTML = perhitungan.input;
        cellHasil.innerHTML = perhitungan.hasil + ' cm²';
    });
}


function openModal(content) {
    document.getElementById('modal-content').innerHTML = content;
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}