const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Folder gambar
const IMAGE_DIR = path.join(__dirname, 'public/images');

// Middleware untuk mengizinkan akses ke folder public
app.use(express.static('public'));

// API untuk mendapatkan daftar folder (model)
app.get('/api/folders', (req, res) => {
    fs.readdir(IMAGE_DIR, (err, files) => {
        if (err) {
            return res.status(500).json({ error: 'Gagal membaca folder' });
        }
        // Filter hanya folder
        const folders = files.filter(file => fs.statSync(path.join(IMAGE_DIR, file)).isDirectory());
        res.json(folders);
    });
});

// API untuk mendapatkan jumlah file dalam folder yang dipilih
app.get('/api/files/:folder', (req, res) => {
    const folder = req.params.folder;
    const folderPath = path.join(IMAGE_DIR, folder);

    fs.readdir(folderPath, (err, files) => {
        if (err || !files) {
            return res.status(500).json({ error: 'Gagal membaca file dalam folder' });
        }

        // Filter hanya file yang sesuai dengan pola `image_X_0.jpg`
        const imageFiles = files.filter(file => file.match(/^image_(\d+)_0\.jpg$/));

        // Ambil angka terbesar dari nama file
        const numbers = imageFiles.map(file => parseInt(file.match(/^image_(\d+)_0\.jpg$/)[1]));
        const maxNumber = Math.max(...numbers, 0); // Jika kosong, nilai default 0

        res.json({ maxNumber });
    });
});

// Route untuk halaman utama
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Jalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
