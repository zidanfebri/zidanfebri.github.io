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
        ct_mail: 'Kirim email', ft_top: 'Kembali ke atas ↑'
    };
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

    document.querySelectorAll('[data-galeri]').forEach(function (galeri) {
        var utama = galeri.querySelector('.galeri-utama');
        var gambar = utama.querySelector('img');
        var keterangan = galeri.querySelector('figcaption');
        var aktif = galeri.querySelector('.galeri-kecil button.aktif');

        galeri.segarkanKet = function () {
            keterangan.textContent = ketDari(aktif);
            gambar.alt = ketDari(aktif);
        };
        galeri.querySelectorAll('.galeri-kecil button').forEach(function (btn) {
            btn.addEventListener('click', function () {
                galeri.querySelectorAll('.galeri-kecil button').forEach(function (b) { b.classList.remove('aktif'); });
                btn.classList.add('aktif');
                aktif = btn;
                gambar.style.opacity = 0;
                setTimeout(function () {
                    gambar.src = btn.dataset.src;
                    galeri.segarkanKet();
                    utama.classList.toggle('hp', btn.hasAttribute('data-hp'));
                    gambar.style.opacity = 1;
                }, 150);
            });
        });
        utama.addEventListener('click', function () { bukaLightbox(gambar.src, keterangan.textContent); });
    });

    // ================= Lightbox =================
    var lightbox = document.getElementById('lightbox');
    function bukaLightbox(src, ket) {
        lightbox.querySelector('img').src = src;
        lightbox.querySelector('img').alt = ket;
        lightbox.querySelector('p').textContent = ket;
        if (typeof lightbox.showModal === 'function') lightbox.showModal();
        else window.open(src, '_blank');
    }
    lightbox.querySelector('.lightbox-tutup').addEventListener('click', function () { lightbox.close(); });
    lightbox.addEventListener('click', function (e) { if (e.target === lightbox) lightbox.close(); });

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
