# Protokol UAT Pra-rilis — LMS SATUSEHAT

**Tanggal baseline:** 25 Oktober 2026  
**Rilis:** Pra-UAT / NO-GO; bukan situs atau sertifikasi resmi Kementerian Kesehatan RI.  
**Cakupan:** 13 modul, 683 slide, 13 infografis, 21 tautan asesmen aktif, 5 asesmen tertahan, 4 worksheet.  
**Keputusan aman:** jangan mempromosikan berkas kandidat ke katalog peserta, membuka lima asesmen tertahan, atau menyatakan GO hanya karena CI/deploy sukses.

## A. Gate otomatis untuk perubahan kode

- [ ] PR ke `main` memicu `Validate static preview`: `node site/validate.cjs` dan `node site/test.cjs`.
- [ ] PR tidak menjalankan `configure-pages`, tidak mengunggah artefak situs, dan tidak melakukan deployment.
- [ ] Setelah PR ditinjau dan digabungkan ke `main`, job validasi lulus sebelum job package dan deploy.
- [ ] Hanya `index.html`, `style.css`, `app.js`, `modules.json`, `robots.txt`, dan `.nojekyll` yang ikut ke artefak Pages.
- [ ] Tidak ada nama komponen internal Kemenkes, token, credential, data pasien nyata, atau lampiran QA di artefak publik.
- [ ] Audit menyadari batas CI: script tidak dapat menjamin isi gambar, notes presenter, izin Drive, ataupun isi history commit lama.

## B. UAT browser tanpa login

Jalankan di sesi Chrome incognito yang **tidak** login ke akun Google, dan ulangi di browser Android.

- [ ] URL Pages terbuka melalui HTTPS; UI konsisten di layar desktop dan Android.
- [ ] Pencarian topik, filter kelompok, filter status belajar, checklist modul, dan penghapusan penanda lokal berfungsi.
- [ ] Ukuran huruf dan tombol tautan nyaman dibaca/ditap; tidak ada teks atau gambar terpotong.
- [ ] Buka **51/51 tautan aktif** dari perangkat tanpa login: 13 slide, 13 infografis, 21 asesmen, dan 4 worksheet. Catat per URL: berhasil, meminta login, izin ditolak, atau salah berkas.
- [ ] Lima asesmen yang ditahan (**03-pre, 05-post, 07-post, 12-post, 13-pre**) tidak menyediakan tautan dan tidak memuat ID di `modules.json`.
- [ ] Reset benar-benar hanya menghapus penanda lokal pada perangkat yang diuji.
- [ ] Aksesibilitas dasar: keyboard, fokus terlihat, label kontrol, deskripsi pembaca layar, dan kontras diperiksa.

## C. Review materi pembelajaran

- [ ] Reviewer substansi dan editor memeriksa slide serta gambar pada resolusi penuh, bukan OCR atau contact sheet saja.
- [ ] Periksa **speaker notes, komentar, metadata** PPTX/Google Slides, seluruh label dalam komik/infografis, serta lisensi visual.
- [ ] Modul 08: bedakan rujukan rawat jalan melalui BPJS dengan jalur rawat inap/darurat langsung ke SATUSEHAT; data RME rutin tetap punya jalur pengiriman sendiri. Di form rujukan, kebutuhan terapi/diagnostik/tindakan di tujuan **bukan** daftar tindakan yang sudah dilakukan di asal.
- [ ] Modul 09: persetujuan dan kewenangan akses berbeda dari kewajiban pengiriman RME; hasil awal/final/amended tidak disamakan; data kosong tidak membuktikan layanan tidak dilakukan. Periksa petunjuk latihan slide 18, 50, 54, dan 56 serta rujukannya.
- [ ] Modul 11: definisi numerator laporan final perlu kebijakan eksplisit untuk status `amended`, `corrected`, dan `appended`, dengan denominator dan episode yang benar. Contoh bukan KPI nasional.
- [ ] Modul 13: sumber order pemeriksaan adalah SIMPUS/SIMRS; MWL bisa dijalankan Router atau server terpisah; `ServiceRequest`, Accession Number, StudyInstanceUID, `ImagingStudy`, berkas citra, dan `DiagnosticReport` tidak disamakan.
- [ ] Semua contoh menggunakan identitas rekaan, tanpa Apigee, Google Healthcare, konfigurasi internal, token, dan data pasien asli.
- [ ] Ke-262 soal asesmen ditinjau kunci, distraktor, ketepatan ilmiah, dan rubriknya oleh SME sebelum dilepas.

## D. Keputusan GO / NO-GO

**GO** hanya ketika A–C dipenuhi, ada persetujuan tertulis pemilik konten/SME, versi aset disetujui, dan tautan publik diverifikasi ulang setelah perubahan manifest. Cantumkan nama peninjau, tanggal, ID deck, dan nomor revisi.

Jika satu butir P0/P1 tidak terpenuhi, catat temuan dan pertahankan **NO-GO**. Perubahan kandidat tidak otomatis menjadi versi peserta.

| Modul / aset | Reviewer | Versi | Temuan dan bukti | Status |
|---|---|---|---|---|
| 01–13 | Belum diisi | Kandidat Pra-UAT | Perlu validasi dan UAT | NO-GO |
