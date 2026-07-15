# LunaDiary

Aplikasi diary berbasis web modern yang memungkinkan pengguna untuk menyimpan dan mengelola entri jurnal pribadi mereka dengan aman. LunaDiary menggabungkan antarmuka pengguna yang indah dengan infrastruktur backend yang kuat untuk memberikan pengalaman menulis buku harian yang mulus.

## Daftar Isi

- [Fitur](#fitur)
- [Teknologi](#teknologi)
- [Struktur Proyek](#struktur-proyek)
- [Akses Online](#akses-online)
- [Instalasi & Pengaturan](#instalasi--pengaturan)
- [Cara Penggunaan](#cara-penggunaan)
- [Keamanan](#keamanan)
- [Kontribusi](#kontribusi)

## Fitur

- **Autentikasi Pengguna** - Sistem login dan registrasi yang aman
- **Dashboard** - Dashboard pribadi untuk melihat dan mengelola entri diary
- **Desain Responsif** - Bekerja dengan sempurna di perangkat desktop dan mobile
- **UI Modern** - Antarmuka pengguna yang bersih dan intuitif dibangun dengan HTML, CSS, dan JavaScript
- **Integrasi Backend** - Didukung oleh Supabase untuk penyimpanan data dan autentikasi yang dapat diandalkan

## Teknologi

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Backend**: Supabase
- **Font**: Google Fonts (Poppins)
- **Version Control**: Git

## Tools & Environment

- **Code Editor**: Visual Studio Code (VS Code)
- **Browser**: Google Chrome
- **Deployment**: Vercel
- **Database & Authentication**: Supabase

## Struktur Proyek

```
Lunadiary/
├── index.html           # Halaman landing
├── login.html           # Halaman login
├── register.html        # Halaman registrasi
├── dashboard.html       # Dashboard pengguna
├── README.md            # Dokumentasi proyek
├── assets/
│   └── image/          # Aset gambar
├── css/
│   └── style.css       # Stylesheet utama
└── js/
    ├── supabase.js     # Konfigurasi Supabase
    ├── login.js        # Fungsi login
    ├── register.js     # Fungsi registrasi
    ├── logout.js       # Fungsi logout
    └── dashboard.js    # Fungsi dashboard
```
## Akses Online

LunaDiary sudah di-deploy di **Vercel** dan dapat diakses secara online:

- **URL**: [https://keamanandea.vercel.app/]
- Aplikasi sudah live dan siap digunakan
- Tidak perlu instalasi lokal untuk mencoba aplikasi

## Instalasi & Pengaturan

1. **Clone repository** (jika berlaku)
   ```bash
   git clone <repository-url>
   cd Lunadiary
   ```

2. **Buka di web server**
   - Gunakan web server lokal apa pun (misalnya Live Server di VS Code)
   - Atau cukup buka `index.html` di browser Anda

3. **Tidak ada dependensi tambahan yang diperlukan**
   - Proyek menggunakan CDN untuk library Supabase
   - Semua dependensi dimuat dari sumber eksternal

## Cara Penggunaan

1. **Kunjungi Halaman Landing** - Mulai dari `index.html` untuk mempelajari tentang LunaDiary
2. **Buat Akun** - Klik "Register" dan isi detail Anda
3. **Log In** - Gunakan kredensial Anda untuk mengakses aplikasi
4. **Akses Dashboard** - Lihat dan kelola entri diary Anda dari dashboard
5. **Log Out** - Keluar dengan aman saat selesai

## Keamanan

- Password ditangani dengan aman melalui autentikasi Supabase
- Data sensitif tidak disimpan di local storage tanpa perlu
- Supabase menyediakan praktik keamanan standar industri

## Kontribusi

Kontribusi sangat diterima! Untuk berkontribusi:

1. Buat branch baru untuk fitur Anda
2. Buat perubahan Anda
3. Uji dengan menyeluruh
4. Kirim pull request dengan deskripsi yang jelas

---

**Dikembangkan dengan ❤️ untuk journaling yang aman dan indah**
