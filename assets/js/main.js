// Bahasa (EN/ID), mode terang/gelap, menu HP, galeri proyek, lightbox, dan penanda menu aktif.
(function () {
    var akar = document.documentElement;

    // ================= Terjemahan =================
    // Bahasa Inggris = isi asli di index.html (bawaan). Di bawah ini hanya teks bahasa Indonesia,
    // diambil lewat atribut data-i / data-i-aria / data-i-title / data-i-alt pada elemen.
    var ID = {
        nav_about: 'Tentang', nav_exp: 'Pengalaman', nav_proj: 'Proyek', nav_skills: 'Keahlian', nav_contact: 'Kontak',
        a_nav: 'Navigasi utama', a_theme: 'Ganti mode terang / gelap', a_menu: 'Buka menu', a_zoom: 'Perbesar gambar',
        a_close: 'Tutup', a_preview: 'Pratinjau gambar', a_summary: 'Ringkasan', a_foto: 'Foto Zidan Febrian Indra Putra',

        hero_intro: 'Halo, saya <strong>Zidan Febrian Indra Putra</strong>. Sejak Agustus 2025 saya bekerja sebagai Full Stack Developer di SMA El Fitra, merancang, membangun, dan merawat website kebutuhan sekolah dengan Laravel dan MySQL, dari analisis kebutuhan sampai berjalan di server produksi.',
        hero_btn: 'Lihat proyek',
        f_now: 'Saat ini', f_edu: 'Pendidikan', f_focus: 'Fokus',
        f_edu_v: 'Sarjana Terapan Teknologi Rekayasa Komputer, IPB University',
        f_focus_v: 'Laravel, REST API, MySQL, sistem informasi sekolah',

        p1: 'aplikasi berjalan di produksi', p2b: '1+ tahun', p2: 'mengembangkan &amp; merawat sistem sekolah',
        p3: 'nilai ujian langsung masuk ke rapor', p4b: '3,52', p4: 'IPK, lulus <em>cumlaude</em>',

        ab_title: 'Tentang saya',
        ab_p1: 'Saya Full Stack Developer dengan latar belakang Teknologi Rekayasa Komputer dari Sekolah Vokasi IPB University. Lebih dari setahun terakhir saya bekerja langsung dengan guru, wali kelas, bagian keuangan, dan kepala sekolah untuk mengubah pekerjaan yang dulu dilakukan lewat kertas dan Excel, seperti absensi, input nilai, rapor, hafalan Al-Qur\'an, perizinan, dan ujian, menjadi aplikasi web yang saling terhubung.',
        ab_p2: 'Saya terbiasa memegang seluruh siklus pengembangan: mendengarkan kebutuhan pengguna, merancang database, menulis backend dan tampilan, menguji, lalu men-deploy dan menangani masalah di server saat sistem sedang dipakai. Sebelumnya saya juga berpengalaman di bidang IoT dan jaringan, termasuk memimpin tim software dalam proyek monitoring pembangkit listrik tenaga air saat kuliah.',
        ab_c1: '<b>Mulai dari masalah pengguna.</b> Fitur dibuat setelah melihat langsung cara guru dan staf bekerja.',
        ab_c2: '<b>Data harus konsisten.</b> Nilai ujian, absensi, dan rapor tersinkron lewat API, tidak diketik ulang.',
        ab_c3: '<b>Aman untuk ujian.</b> Pelanggaran seperti keluar tab atau login di perangkat lain tercatat otomatis.',
        ab_c4: '<b>Mudah dirawat.</b> Fitur baru diuji dulu sebelum dipasang, dan bisa dikembalikan bila perlu.',

        ex_title: 'Pengalaman',
        ex1_date: 'Agu 2025 — sekarang',
        ex1_h: 'Full Stack Developer <span>· SMA El Fitra, Bandung</span>',
        ex1_a: 'Membangun <b>SIAKAD</b> untuk guru, wali kelas, dan admin: jadwal pelajaran, absensi, jurnal mengajar, input nilai, leger, serta rapor online.',
        ex1_b: 'Membangun <b>platform ujian online</b> dengan Safe Exam Browser dan aplikasi Android, dilengkapi deteksi pelanggaran, penilaian otomatis, dan sinkronisasi nilai ke rapor SIAKAD melalui REST API.',
        ex1_c: 'Membangun <b>Learning Management System</b>: guru membagikan modul dan tugas, siswa memantau capaian belajarnya.',
        ex1_d: 'Membangun <b>sistem kepegawaian</b> untuk izin ketidakhadiran guru dan karyawan yang dipantau operator dan kepala sekolah.',
        ex1_e: 'Membangun <b>website sekolah</b> dengan pendaftaran siswa baru secara online.',
        ex2_date: 'Agu 2023 — Des 2023',
        ex2_h: 'Ketua Divisi Software Engineering <span>· Project Based Learning, Sekolah Vokasi IPB University</span>',
        ex2_a: 'Memimpin 4 anggota tim software engineering dalam membuat aplikasi berbasis web.',
        ex2_b: 'Membuat website monitoring daya (watt) yang menampilkan grafik keluaran alat PLTA, dengan PHP, Laravel, dan MySQL.',

        pr_title: 'Proyek di SMA El Fitra', pr_sub: 'Tiga aplikasi yang saling terhubung.',
        p1_label: 'Sistem Informasi Akademik',
        p1_desc: 'Pusat data akademik sekolah. Guru mengisi absensi, jurnal, dan nilai secara online, wali kelas langsung mendapatkan leger dan rapor tanpa merekap manual. Aplikasi lain (portal ujian dan LMS) mengambil data siswa, kelas, dan jadwal dari sini melalui REST API.',
        p1_f1: 'Peran admin, guru, wali kelas, keuangan, BK, dan kepala sekolah',
        p1_f2: 'Jadwal pelajaran, absensi kelas &amp; mapel, jurnal mengajar',
        p1_f3: 'Input nilai harian/UTS/UAS, leger, rangking, dan cetak rapor PDF',
        p1_f4: 'Hafalan Al-Qur\'an (ziyadah) dengan laporan bulanan dan tanda tangan digital',
        p1_f5: 'Biodata siswa, unggah KK &amp; akta, dan akun portal orang tua',
        p1_f6: 'Izin sakit/keluar jam kerja guru dan karyawan, serta kelola SPP',
        p2_label: 'Ujian Online &amp; LMS', p2_h: 'Portal Ujian &amp; Pembelajaran',
        p2_desc: 'Dipakai untuk ulangan harian, UTS, UAS, dan tryout. Siswa mengerjakan lewat Safe Exam Browser atau aplikasi Android sekolah, pengawas memantau tiap ruang secara langsung, dan nilai yang sudah dikoreksi dikirim otomatis ke rapor di SIAKAD.',
        p2_f1: 'Bank soal PG, esai, dan tabel; impor dari Excel; editor rumus matematika',
        p2_f2: 'Deteksi keluar tab, login di perangkat lain, dan teks tempelan, lengkap dengan durasinya',
        p2_f3: 'Ruang ujian campuran lintas kelas, nomor kursi, dan pengawas per sesi yang diatur panitia',
        p2_f4: 'Monitor ruang langsung: buka/tutup akses, atur ulang waktu, ujian susulan',
        p2_f5: 'Modul belajar dan tugas online, notifikasi, dan portal orang tua',
        p2_f6: 'Voting ketua OSIS layar sentuh dengan PIN pengaman',
        p3_label: 'Website Sekolah', p3_h: 'Website Yayasan El Fitra',
        p3_desc: 'Website profil sekolah untuk calon siswa dan orang tua. Satu aplikasi Laravel melayani beberapa jenjang (TK, SD, SMP, SMA) melalui subdomain, dengan panel admin untuk berita dan data pendaftar.',
        p3_f1: 'Halaman per jenjang melalui subdomain dari satu basis kode',
        p3_f2: 'Dua bahasa: Indonesia dan Inggris',
        p3_f3: 'Pendaftaran siswa baru bertahap dengan unggah bukti pembayaran',
        p3_f4: 'Panel admin: berita, testimoni, verifikasi pendaftar, dan statistik kunjungan',
        p3_f5: 'Tampilan responsif untuk HP',

        sk_title: 'Keahlian',
        sk_fe: 'HTML, CSS, JavaScript, Bootstrap, jQuery, desain responsif',
        sk_tools_h: 'Perangkat &amp; lainnya', sk_tools: 'Git &amp; GitHub, deployment ke hosting, Safe Exam Browser, IoT, jaringan komputer',
        sk_work_h: 'Cara kerja', sk_work: 'Komunikatif, disiplin, adaptif, solutif, dan terbiasa mengatur waktu sendiri',
        sk_lang_h: 'Bahasa', sk_lang: 'Indonesia (Native), Inggris (Intermediate)',
        sk_office: 'Microsoft Word, Excel, dan PowerPoint',
        ed_title: 'Pendidikan',
        ed1: '<b>Sekolah Vokasi IPB University</b>, Bogor<br>Sarjana Terapan Teknologi Rekayasa Komputer · IPK 3,52/4,00',
        ed2: '<b>SMK Balai Perguruan Putri</b>, Bandung<br>Rekayasa Perangkat Lunak',

        ct_title: 'Kontak',
        ct_text: 'Terbuka untuk posisi <b>Backend / Full Stack Developer</b> dan proyek pengembangan sistem informasi.',
        ct_mail: 'Kirim email', ft_top: 'Kembali ke atas ↑',
        em_title: 'Kirim email kepada saya',
        em_lead: 'Pilih cara yang paling nyaman untuk Anda. Pesan akan dikirim ke:',
        em_gmail: 'Buka di Gmail', em_outlook: 'Buka di Outlook', em_app: 'Pakai aplikasi email saya', em_copy: 'Salin alamat',
        em_note: 'Tips: jika tidak ada yang terbuka, salin alamatnya lalu tempel di aplikasi email Anda.',
        em_copied: 'Tersalin!',
        a_prev: 'Gambar sebelumnya', a_next: 'Gambar berikutnya',
        gal_hint: 'Tips: gunakan tombol ← → di keyboard, atau geser gambar, untuk menjelajah.'
    };
    var EN_EXTRA = { em_copied: 'Copied!' };
    var META = {
        id: {
            description: 'Portofolio Zidan Febrian Indra Putra, Full Stack Developer (Laravel) yang membangun sistem informasi sekolah: SIAKAD, platform ujian online, dan website SMA El Fitra.',
            ogDescription: 'SIAKAD, platform ujian online, dan website sekolah yang dipakai setiap hari di SMA El Fitra.'
        }
    };

    // Simpan teks Inggris asli dari HTML supaya bisa dipulihkan.
    var DAFTAR = [];
    document.querySelectorAll('[data-i], [data-i-aria], [data-i-title], [data-i-alt]').forEach(function (el) {
        DAFTAR.push({
            el: el, html: el.dataset.i ? el.innerHTML : null,
            aria: el.getAttribute('aria-label'), title: el.getAttribute('title'), alt: el.getAttribute('alt')
        });
    });
    var metaDesc = document.querySelector('meta[name="description"]');
    var metaOg = document.querySelector('meta[property="og:description"]');
    var EN_META = { description: metaDesc.content, ogDescription: metaOg.content };

    var bahasa = 'en';
    var tombolBahasa = document.querySelectorAll('[data-bahasa]');

    function pakaiBahasa(b, simpan) {
        bahasa = b === 'id' ? 'id' : 'en';
        akar.lang = bahasa;
        DAFTAR.forEach(function (x) {
            var d = x.el.dataset;
            if (d.i) x.el.innerHTML = bahasa === 'id' && ID[d.i] !== undefined ? ID[d.i] : x.html;
            if (d.iAria) x.el.setAttribute('aria-label', bahasa === 'id' && ID[d.iAria] ? ID[d.iAria] : x.aria);
            if (d.iTitle) x.el.setAttribute('title', bahasa === 'id' && ID[d.iTitle] ? ID[d.iTitle] : x.title);
            if (d.iAlt) x.el.setAttribute('alt', bahasa === 'id' && ID[d.iAlt] ? ID[d.iAlt] : x.alt);
        });
        var m = bahasa === 'id' ? META.id : EN_META;
        metaDesc.content = m.description;
        metaOg.content = m.ogDescription;
        tombolBahasa.forEach(function (t) { t.setAttribute('aria-pressed', t.dataset.bahasa === bahasa ? 'true' : 'false'); });
        document.querySelectorAll('[data-galeri]').forEach(function (g) { g.segarkanKet(); });
        if (simpan) { try { localStorage.setItem('bahasa', bahasa); } catch (e) {} }
    }

    tombolBahasa.forEach(function (t) {
        t.addEventListener('click', function () { pakaiBahasa(t.dataset.bahasa, true); });
    });

    // ================= Mode terang / gelap =================
    document.getElementById('tombolTema').addEventListener('click', function () {
        var baru = akar.getAttribute('data-tema') === 'gelap' ? 'terang' : 'gelap';
        akar.setAttribute('data-tema', baru);
        try { localStorage.setItem('tema', baru); } catch (e) {}
    });
    // Ikuti pengaturan perangkat selama pengunjung belum memilih sendiri.
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
        var pilihan = null;
        try { pilihan = localStorage.getItem('tema'); } catch (err) {}
        if (!pilihan) akar.setAttribute('data-tema', e.matches ? 'gelap' : 'terang');
    });

    // ================= Menu HP =================
    var tombolMenu = document.getElementById('tombolMenu');
    var menu = document.getElementById('menu');
    tombolMenu.addEventListener('click', function () {
        var buka = menu.classList.toggle('buka');
        tombolMenu.setAttribute('aria-expanded', buka ? 'true' : 'false');
    });
    menu.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') {
            menu.classList.remove('buka');
            tombolMenu.setAttribute('aria-expanded', 'false');
        }
    });

    // ================= Galeri tiap proyek =================
    function ketDari(btn) { return (bahasa === 'id' && btn.dataset.ketId) || btn.dataset.ket; }

    var kurangiGerak = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var semuaGaleri = [];
    var galeriSorot = null;     // galeri yang sedang di-hover / difokus
    var terakhirGeser = 0;      // waktu geser jari terakhir (mencegah klik tak sengaja setelah geser)
    var lightbox = document.getElementById('lightbox');
    var lbGambar = lightbox.querySelector('img');
    var lbKet = lightbox.querySelector('.lb-ket');
    var lbHitung = lightbox.querySelector('.lb-hitung');
    var lbGaleri = null;

    // Geser jari ke kiri/kanan pada sebuah elemen -> aksi(+1 | -1).
    function pasangGeser(el, aksi) {
        var x0 = 0, y0 = 0, mulai = false;
        el.addEventListener('touchstart', function (e) {
            if (e.touches.length !== 1) { mulai = false; return; }
            x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; mulai = true;
        }, { passive: true });
        el.addEventListener('touchend', function (e) {
            if (!mulai) return;
            mulai = false;
            var t = e.changedTouches[0], dx = t.clientX - x0, dy = t.clientY - y0;
            if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.3) {
                terakhirGeser = Date.now();
                aksi(dx < 0 ? 1 : -1);
            }
        }, { passive: true });
    }

    document.querySelectorAll('[data-galeri]').forEach(function (galeri) {
        var layar = galeri.querySelector('.layar');
        var utama = galeri.querySelector('.galeri-utama');
        var gambar = utama.querySelector('img');
        var keterangan = galeri.querySelector('figcaption');
        var kecil = galeri.querySelector('.galeri-kecil');
        var item = Array.prototype.slice.call(kecil.querySelectorAll('button'));
        var idx = Math.max(0, item.indexOf(kecil.querySelector('button.aktif')));
        var aktif = item[idx];
        var panahKiri = galeri.querySelector('.panah-kiri');
        var panahKanan = galeri.querySelector('.panah-kanan');
        var waktu = null;

        // Bungkus jendela gambar menjadi kartu 3D: miring mengikuti kursor, berlapis, dan melayang pelan.
        var panggung = document.createElement('div');
        panggung.className = 'panggung';
        var kartu = document.createElement('div');
        kartu.className = 'kartu3d';
        var hitung = document.createElement('span');
        hitung.className = 'hitung';
        var kilau = document.createElement('span');
        kilau.className = 'kilau';
        kilau.setAttribute('aria-hidden', 'true');
        galeri.insertBefore(panggung, layar);
        panggung.appendChild(kartu);
        kartu.appendChild(layar);
        kartu.appendChild(utama);
        kartu.appendChild(panahKiri);
        kartu.appendChild(panahKanan);
        kartu.appendChild(hitung);
        kartu.appendChild(kilau);

        if (!kurangiGerak) {
            panggung.addEventListener('pointermove', function (e) {
                if (e.pointerType === 'touch') return;
                var r = panggung.getBoundingClientRect();
                var x = (e.clientX - r.left) / r.width - 0.5;
                var y = (e.clientY - r.top) / r.height - 0.5;
                panggung.classList.add('aktif3d');
                kartu.style.setProperty('--ry', (x * 16).toFixed(2) + 'deg');
                kartu.style.setProperty('--rx', (-y * 12).toFixed(2) + 'deg');
                kartu.style.setProperty('--gx', ((x + 0.5) * 100).toFixed(1) + '%');
                kartu.style.setProperty('--gy', ((y + 0.5) * 100).toFixed(1) + '%');
            });
            panggung.addEventListener('pointerleave', function () {
                panggung.classList.remove('aktif3d');
                kartu.style.setProperty('--ry', '0deg');
                kartu.style.setProperty('--rx', '0deg');
            });
        }
        galeri.addEventListener('pointerenter', function (e) { if (e.pointerType !== 'touch') galeriSorot = galeri; });
        galeri.addEventListener('pointerleave', function () { if (galeriSorot === galeri) galeriSorot = null; });
        galeri.addEventListener('focusin', function () { galeriSorot = galeri; });
        galeri.addEventListener('focusout', function (e) { if (!galeri.contains(e.relatedTarget) && galeriSorot === galeri) galeriSorot = null; });

        function gulirKecil() {
            if (kecil.scrollWidth <= kecil.clientWidth + 2) return;
            kecil.scrollTo({ left: aktif.offsetLeft - (kecil.clientWidth - aktif.offsetWidth) / 2, behavior: kurangiGerak ? 'auto' : 'smooth' });
        }
        function perbaruiTeks() {
            keterangan.textContent = ketDari(aktif);
            gambar.alt = ketDari(aktif);
            hitung.textContent = (idx + 1) + ' / ' + item.length;
            if (lbGaleri === galeri && lightbox.open) isiLightbox();
        }
        galeri.segarkanKet = perbaruiTeks;
        galeri.info = function () { return { src: aktif.dataset.src, ket: ketDari(aktif), i: idx, n: item.length }; };

        // Pindah ke gambar ke-i (melingkar). arah: +1 = maju, -1 = mundur.
        galeri.pergi = function (baru, arah) {
            var n = item.length;
            baru = ((baru % n) + n) % n;
            if (baru === idx) return;
            idx = baru;
            aktif = item[idx];
            item.forEach(function (b) { b.classList.toggle('aktif', b === aktif); });
            gulirKecil();
            gambar.style.setProperty('--arah', arah >= 0 ? 1 : -1);
            gambar.classList.add('keluar');
            clearTimeout(waktu);
            waktu = setTimeout(function () {
                gambar.src = aktif.dataset.src;
                utama.classList.toggle('hp', aktif.hasAttribute('data-hp'));
                perbaruiTeks();
                var tampil = function () {
                    gambar.classList.remove('keluar');
                    gambar.classList.add('masuk');
                    void gambar.offsetWidth;
                    gambar.classList.remove('masuk');
                };
                if (gambar.decode) gambar.decode().catch(function () {}).then(tampil); else tampil();
            }, kurangiGerak ? 0 : 190);
        };
        galeri.geser = function (arah) {
            var tombol = arah > 0 ? panahKanan : panahKiri;
            tombol.classList.add('ditekan');
            setTimeout(function () { tombol.classList.remove('ditekan'); }, 180);
            galeri.pergi(idx + arah, arah);
        };
        galeri.indeks = function () { return idx; };

        item.forEach(function (btn, i) {
            btn.addEventListener('click', function () { galeri.pergi(i, i > idx ? 1 : -1); });
        });
        panahKiri.addEventListener('click', function () { galeri.geser(-1); });
        panahKanan.addEventListener('click', function () { galeri.geser(1); });
        pasangGeser(utama, galeri.geser);
        utama.addEventListener('click', function () {
            if (Date.now() - terakhirGeser < 450) return;
            bukaLightbox(galeri);
        });
        perbaruiTeks();
        semuaGaleri.push(galeri);
    });

    // Galeri yang paling terlihat di layar (dipakai untuk panah keyboard).
    function galeriTerlihat() {
        if (galeriSorot) return galeriSorot;
        var vh = window.innerHeight, terbaik = null, nilai = 0;
        semuaGaleri.forEach(function (g) {
            var r = g.getBoundingClientRect();
            var tampak = Math.min(r.bottom, vh) - Math.max(r.top, 0);
            if (tampak > 0.4 * Math.min(r.height, vh) && tampak > nilai) { nilai = tampak; terbaik = g; }
        });
        return terbaik;
    }

    // Panah kiri/kanan di keyboard memindahkan gambar.
    document.addEventListener('keydown', function (e) {
        if (e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey) return;
        if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
        var t = e.target;
        if (t && (/^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName) || t.isContentEditable)) return;
        if (document.getElementById('surel').open) return;
        var g = lightbox.open ? lbGaleri : galeriTerlihat();
        if (!g) return;
        e.preventDefault();
        g.geser(e.key === 'ArrowRight' ? 1 : -1);
    });

    // ================= Lightbox =================
    function isiLightbox() {
        var d = lbGaleri.info();
        lbGambar.src = d.src;
        lbGambar.alt = d.ket;
        lbKet.textContent = d.ket;
        lbHitung.textContent = (d.i + 1) + ' / ' + d.n;
    }
    function bukaLightbox(galeri) {
        lbGaleri = galeri;
        isiLightbox();
        if (typeof lightbox.showModal === 'function') lightbox.showModal();
        else window.open(galeri.info().src, '_blank');
    }
    document.getElementById('lbPrev').addEventListener('click', function () { if (lbGaleri) lbGaleri.geser(-1); });
    document.getElementById('lbNext').addEventListener('click', function () { if (lbGaleri) lbGaleri.geser(1); });
    pasangGeser(lbGambar, function (arah) { if (lbGaleri) lbGaleri.geser(arah); });
    lightbox.querySelector('.lightbox-tutup').addEventListener('click', function () { lightbox.close(); });
    lightbox.addEventListener('click', function (e) { if (e.target === lightbox) lightbox.close(); });
    lightbox.addEventListener('close', function () { lbGaleri = null; });

    // ================= Bilah kemajuan & header =================
    var kemajuan = document.getElementById('kemajuan');
    var kepala = document.querySelector('.kepala');
    var antreGulir = false;
    function saatGulir() {
        antreGulir = false;
        var maks = document.documentElement.scrollHeight - window.innerHeight;
        kemajuan.style.transform = 'scaleX(' + (maks > 0 ? Math.min(1, window.scrollY / maks) : 0) + ')';
        kepala.classList.toggle('mengambang', window.scrollY > 8);
    }
    window.addEventListener('scroll', function () {
        if (!antreGulir) { antreGulir = true; requestAnimationFrame(saatGulir); }
    }, { passive: true });
    window.addEventListener('resize', saatGulir);
    saatGulir();

    // ================= Dialog email =================
    // mailto: hanya berjalan bila perangkat punya aplikasi email bawaan, jadi pengunjung diberi beberapa pilihan.
    var ALAMAT = 'zidanfebrian982@gmail.com';
    var surel = document.getElementById('surel');
    function t(kunci) { return bahasa === 'id' ? ID[kunci] : EN_EXTRA[kunci]; }
    function isiTautanSurel() {
        var subjek = bahasa === 'id' ? 'Halo Zidan, saya melihat portofolio Anda' : 'Hello Zidan, I saw your portfolio';
        var q = encodeURIComponent(subjek);
        document.getElementById('surelGmail').href = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + ALAMAT + '&su=' + q;
        document.getElementById('surelOutlook').href = 'https://outlook.live.com/mail/0/deeplink/compose?to=' + ALAMAT + '&subject=' + q;
        document.getElementById('surelApp').href = 'mailto:' + ALAMAT + '?subject=' + q;
    }
    document.querySelectorAll('.buka-surel').forEach(function (a) {
        a.addEventListener('click', function (e) {
            if (typeof surel.showModal !== 'function') return; // browser lama: biarkan mailto: biasa
            e.preventDefault();
            isiTautanSurel();
            surel.showModal();
        });
    });
    document.getElementById('surelTutup').addEventListener('click', function () { surel.close(); });
    surel.addEventListener('click', function (e) { if (e.target === surel) surel.close(); });
    var tombolSalin = document.getElementById('surelSalin');
    var teksSalinEn = tombolSalin.innerHTML;
    tombolSalin.addEventListener('click', function () {
        function berhasil() {
            tombolSalin.textContent = t('em_copied');
            setTimeout(function () { tombolSalin.innerHTML = bahasa === 'id' ? ID.em_copy : teksSalinEn; }, 1600);
        }
        function cadangan() {
            var ta = document.createElement('textarea');
            ta.value = ALAMAT; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0';
            surel.appendChild(ta); ta.select();
            try { if (document.execCommand('copy')) berhasil(); } catch (err) {}
            surel.removeChild(ta);
        }
        if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(ALAMAT).then(berhasil, cadangan);
        else cadangan();
    });

    // ================= Animasi muncul & menu aktif =================
    var bagian = document.querySelectorAll('.bagian, .proyek, .pita');
    var tautanMenu = document.querySelectorAll('.menu a');
    if ('IntersectionObserver' in window) {
        bagian.forEach(function (el) { el.classList.add('muncul'); });
        var pengamat = new IntersectionObserver(function (entri) {
            entri.forEach(function (e) {
                if (e.isIntersecting) { e.target.classList.add('terlihat'); pengamat.unobserve(e.target); }
            });
        }, { threshold: 0.08 });
        bagian.forEach(function (el) { pengamat.observe(el); });

        var pengamatMenu = new IntersectionObserver(function (entri) {
            entri.forEach(function (e) {
                if (!e.isIntersecting) return;
                tautanMenu.forEach(function (a) { a.classList.toggle('aktif', a.getAttribute('href') === '#' + e.target.id); });
            });
        }, { rootMargin: '-45% 0px -50% 0px' });
        document.querySelectorAll('section[id]').forEach(function (s) { pengamatMenu.observe(s); });
    }

    document.getElementById('tahun').textContent = new Date().getFullYear();

    // ================= Bahasa awal =================
    // Bawaan: Inggris. Pilihan pengunjung diingat; ?lang=id / ?lang=en juga diterima.
    var awal = 'en';
    try { awal = localStorage.getItem('bahasa') || 'en'; } catch (e) {}
    var q = new URLSearchParams(location.search).get('lang');
    if (q === 'id' || q === 'en') awal = q;
    pakaiBahasa(awal, false);
})();
