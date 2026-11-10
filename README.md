# Portofolio — Zidan Febrian Indra Putra

Website portofolio statis (HTML, CSS, JavaScript tanpa framework) dengan mode terang/gelap.

```
index.html
assets/css/style.css   warna (biru & oren), huruf Calibri, layout responsif
assets/js/main.js      mode terang/gelap, menu HP, galeri proyek, lightbox
assets/img/            foto & tangkapan layar proyek (data contoh)
```

## Dua bahasa (English default / Indonesia)
- Tombol **EN | ID** di pojok kanan atas. Bawaannya Inggris; pilihan pengunjung diingat di browsernya.
- Tautan langsung: `index.html?lang=id` atau `index.html?lang=en`.

## Menjelajah gambar proyek
- Keyboard: tombol **←** dan **→** memindahkan gambar pada proyek yang sedang terlihat di layar (atau yang kursornya sedang di atasnya). Di lightbox, panah yang sama berlaku; **Esc** menutup.
- Mouse: tombol panah di sisi gambar, thumbnail, atau klik gambar untuk memperbesar.
- HP: geser gambar ke kiri/kanan; baris thumbnail juga bisa digeser.

## Mengubah isi
- Teks **Inggris**: edit langsung di `index.html` (elemen yang punya atribut `data-i="kunci"`).
- Teks **Indonesia**: edit di `assets/js/main.js`, bagian `var ID = { ... }`, pada kunci yang sama.
- Caption galeri: atribut `data-ket` (Inggris) dan `data-ket-id` (Indonesia) pada tiap thumbnail.
- Menambah teks baru? Beri atribut `data-i="kunci_baru"` di HTML lalu tambahkan `kunci_baru: '...'` di kamus ID.
- Foto profil: ganti `assets/img/foto.jpg` (disarankan foto persegi/potret, minimal 400×400 px).
- Gambar proyek: ganti file di `assets/img/` dengan nama yang sama.

## Publikasi lewat GitHub Pages
1. Buat repository baru di GitHub, misalnya `zidanfebri.github.io` (atau nama lain seperti `portofolio`).
2. Di folder ini jalankan:
   ```bash
   git init
   git add .
   git commit -m "Portofolio pertama"
   git branch -M main
   git remote add origin https://github.com/zidanfebri/zidanfebri.github.io.git
   git push -u origin main
   ```
3. Di GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: main / (root) → Save**.
4. Tunggu 1–2 menit. Alamatnya:
   - repository `zidanfebri.github.io` → `https://zidanfebri.github.io`
   - repository lain, misal `portofolio` → `https://zidanfebri.github.io/portofolio`
