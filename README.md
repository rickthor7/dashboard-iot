# 🌍 Monitor Gempa BMKG

Aplikasi web untuk memantau aktivitas gempa bumi di Indonesia secara realtime menggunakan data dari BMKG (Badan Meteorologi, Klimatologi, dan Geofisika).

## ✨ Fitur Utama

- 🗺️ Peta interaktif dengan lokasi gempa
- 📊 Filter gempa berdasarkan magnitudo
- 🕒 Pembaruan data otomatis setiap 5 menit
- 📱 Tampilan responsif untuk desktop dan mobile
- 📍 Informasi detail untuk setiap gempa
- 🎨 Visualisasi magnitudo dengan warna berbeda
- 📋 Daftar riwayat gempa terorganisir

## 🛠️ Teknologi yang Digunakan

- Google Apps Script
- Leaflet.js untuk peta interaktif
- Tailwind CSS untuk styling
- HTML5 & JavaScript
- Google Spreadsheet sebagai database

## 📝 Cara Penggunaan

1. Buat project baru di Google Apps Script
2. Copy kode dari file `Code.gs` ke editor
3. Buat file baru bernama `Index.html` dan copy kode HTML
4. Deploy sebagai web app
5. Atur akses sesuai kebutuhan
6. Buat spreadsheet dengan format yang sesuai

## 📊 Struktur Data Spreadsheet

Buat sheet dengan nama 'gempa' dan kolom berikut:
- tanggal
- jam
- datetime
- magnitude
- kedalaman
- wilayah
- coordinates
- lintang
- bujur
- potensi
- dirasakan
- shakemap

## 🔧 Konfigurasi

1. Ganti ID spreadsheet di `Code.gs`
2. Sesuaikan interval refresh data jika diperlukan
3. Custom warna dan tampilan melalui Tailwind CSS

## 📱 Screenshot

[![Platform]([https://img.shields.io/badge/platform-Google%20Apps%20Script-orange](https://blog.classy.id/upload/gambar_berita/5927473f11cd6b36dda50e2d3bfb6939_20241122220041.png))](https://blog.classy.id/upload/gambar_berita/5927473f11cd6b36dda50e2d3bfb6939_20241122220041.png)

## 🤝 Kontribusi

Kontribusi selalu diterima! Silakan buat pull request atau laporkan issues.

## 📄 Lisensi

MIT License - silakan gunakan dan modifikasi sesuai kebutuhan.

## 🙏 Credit

- Data gempa dari [BMKG](https://data.bmkg.go.id/)
- Leaflet.js untuk peta interaktif
- Tailwind CSS untuk framework CSS
- OpenStreetMap untuk layer peta

## 📞 Kontak

[Whatsapp 081241314446]
