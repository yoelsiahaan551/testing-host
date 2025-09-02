var semuaProduk = [];
var kodeIncrement = 1;
var modeedit = false;
var indexprodukedit = null;

function menyimpanProduk() {
    var kodeProduk = document.getElementById('kode-Produk').value;
    var namaProduk = document.getElementById('nama-Produk').value;
    var hargaProduk = document.getElementById('harga-Produk').value;
    var satuanProduk = document.getElementById('satuan-Produk').value;
    var KategoriProduk = document.getElementById('kategori-Produk').value;
    var gambarProduk = document.getElementById('gambar-Produk').value;
    var stokProduk = document.getElementById('stok-Produk').value;

    if (modeedit) {
        semuaProduk[indexprodukedit] = {
            kodeProduk,
            namaProduk,
            hargaProduk,
            satuanProduk,
            KategoriProduk,
            gambarProduk,
            stokProduk
        };
        modeedit = false;
        indexprodukedit = null;
    } else {
        semuaProduk.push({
            kodeProduk,
            namaProduk,
            hargaProduk,
            satuanProduk,
            KategoriProduk,
            gambarProduk,
            stokProduk
        });
        kodeIncrement++;
    }

    document.getElementById('kode-Produk').value = 'MD-' + String(kodeIncrement).padStart(2, '0');
    menampilkanTabel();
}

document.getElementById('kode-Produk').value = 'MD-' + String(kodeIncrement).padStart(2, '0');

function editproduk(index) {
    var produkedit = semuaProduk[index];
    document.getElementById('kode-Produk').value = produkedit.kodeProduk;
    document.getElementById('nama-Produk').value = produkedit.namaProduk;
    document.getElementById('harga-Produk').value = produkedit.hargaProduk;
    document.getElementById('satuan-Produk').value = produkedit.satuanProduk;
    document.getElementById('kategori-Produk').value = produkedit.KategoriProduk;
    document.getElementById('gambar-Produk').value = produkedit.gambarProduk;
    document.getElementById('stok-Produk').value = produkedit.stokProduk;
    modeedit = true;
    indexprodukedit = index;
}

function hapusproduk(index) {
    semuaProduk.splice(index, 1); 
    menampilkanTabel(); 
}

function menampilkanTabel() {
    var tBody = document.getElementById("t-body");
    tBody.innerHTML = '';

    semuaProduk.forEach(function(produk, index) {
        var tr = tBody.insertRow();
        var warning = 'white';

        if (produk.stokProduk < 5) {
            warning = 'red';
        }

        if (produk.stokProduk >= 5) {
            warning = 'green';
        }

        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${produk.kodeProduk}</td>
            <td>${produk.namaProduk}</td>
            <td>${produk.hargaProduk}</td>
            <td>${produk.satuanProduk}</td>
            <td>${produk.KategoriProduk}</td>
            <td><img src="${produk.gambarProduk}" width="100" height="100"></td>
            <td style="background: ${warning}">${produk.stokProduk}</td>
            <td>
                <button onclick="editproduk(${index})">Edit</button>
                <button onclick="hapusproduk(${index})">Delete</button>
            </td>
        `;
    });
}

document.getElementById('kode-Produk').value = 'MD-' + String(kodeIncrement).padStart(2, '0');
