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

// Menyajikan file index.html sebagai halaman utama
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Jalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
