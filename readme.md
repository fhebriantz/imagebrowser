# 📷 Image Browser with Bootstrap

Aplikasi ini adalah **Image Browser** menggunakan **Node.js, Express, dan Bootstrap**, yang memungkinkan kamu memilih folder gambar dan memfilter gambar berdasarkan range nomor file.

---

## 📂 Struktur Folder Gambar

Pastikan gambar ditempatkan dalam folder `public/images/` dengan struktur berikut:

public/
│── images/
│ ├── Pemandangan Bogor/
│ │ ├── image_1_0.jpg
│ │ ├── image_2_0.jpg
│ │ ├── ...
│ ├── Pemandangan Sukabumi/
│ │ ├── image_1_0.jpg
│ │ ├── image_2_0.jpg
│ │ ├── ...
│ ├── Perkotaan Jakarta/
│ │ ├── image_1_0.jpg
│ │ ├── image_2_0.jpg
│ │ ├── ...

📌 **Setiap folder mewakili model (atau kategori) gambar.**  
📌 **Format nama file harus `image_{nomor}_0.jpg` agar bisa difilter.**

---

## 🚀 Cara Menjalankan Aplikasi

### 1️⃣ **Install Dependencies**

Pastikan kamu sudah menginstall **Node.js**, lalu jalankan:

```sh
npm install

2️⃣ Menjalankan Server
Jalankan dengan:

node server.js

Atau cukup klik dua kali run.bat untuk menjalankan server otomatis.

3️⃣ Akses di Browser
Buka browser dan akses:

http://localhost:3000

Atau cukup klik dua kali run.bat untuk menjalankan server otomatis.


🛠 Fitur
✔ Pilih Folder → Menampilkan gambar dari folder tertentu.
✔ Filter Range → Memfilter gambar berdasarkan nomor (1-99, 100-199, dst).
✔ Klik Thumbnail → Menampilkan gambar ukuran besar dalam modal.
✔ Gambar Tidak Ada? → Gambar yang hilang otomatis dilewati.

❓ FAQ (Pertanyaan Umum)
🔹 Gambar tidak muncul?
✔ Pastikan nama file sesuai format: image_{nomor}_0.jpg.
✔ Periksa apakah folder gambar ada di public/images/.
✔ Pastikan server sudah dijalankan dengan node server.js.

🔹 Bagaimana cara menambahkan folder baru?
Buat folder baru di public/images/.
Tambahkan gambar dengan format image_{nomor}_0.jpg.
Refresh browser → folder otomatis terbaca! 🚀
```
