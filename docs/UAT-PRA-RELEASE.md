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
- [ ] Semua contoh menggunakan identitas rekaan; tidak menampilkan nama infrastruktur internal, konfigurasi privat, kredensial, atau data pasien asli.
- [ ] Ke-262 soal asesmen ditinjau kunci, distraktor, ketepatan ilmiah, dan rubriknya oleh SME sebelum dilepas.

## D. Keputusan GO / NO-GO

**GO** hanya ketika A–C dipenuhi, ada persetujuan tertulis pemilik konten/SME, versi aset disetujui, dan tautan publik diverifikasi ulang setelah perubahan manifest. Cantumkan nama peninjau, tanggal, ID deck, dan nomor revisi.

Jika satu butir P0/P1 tidak terpenuhi, catat temuan dan pertahankan **NO-GO**. Perubahan kandidat tidak otomatis menjadi versi peserta.

| Modul / aset | Reviewer | Versi | Temuan dan bukti | Status |
|---|---|---|---|---|
| 01–13 | Belum diisi | Kandidat Pra-UAT | Perlu validasi dan UAT | NO-GO |


## E. Bukti perbaikan 25 Oktober 2026 (belum persetujuan konten)

- **Portal:** tautan per modul memiliki label pembaca layar yang menyebut modul; tombol pemulihan saat katalog gagal dimuat diuji; navigasi lompat-ke-konten tersedia.
- **Keamanan pratinjau:** kebijakan CSP membatasi script, style, fetch, image, dan font ke sumber sendiri yang dibutuhkan; halaman menetapkan no-referrer. Validasi CI memeriksa keberadaan perlindungan. Ini perlu tetap diuji pada browser nyata.
- **Modul 09 kandidat di area Pra-UAT:** 60 slide terdiri atas 30 halaman materi teks dan 30 halaman visual; semua halaman teks kini memiliki speaker notes. Slide 29 mendapat catatan kewenangan, kebutuhan minimum, audit dan pembedaan akses darurat dari rujukan darurat.
- **Aksesibilitas gambar kandidat:** 30/30 elemen ilustrasi/komik memiliki alt text kontekstual berbasis topik slide teks terkait. **PENTING: ini belum deskripsi faktual rinci isi gambar**, karena belum ada audit setiap gambar dalam resolusi penuh. Reviewer visual harus mengganti/memperkaya 30 alt text setelah inspeksi visual; bukan bukti gambar sudah aman atau akurat.
- **Pemeriksaan tekstual Modul 09:** tidak ditemukan nama infrastruktur internal yang dilarang dalam teks slide yang dapat diekstrak. Tidak menyatakan seluruh teks di dalam komik sudah diperiksa.
- **CI:** validasi otomasi PR berhasil untuk perubahan kode terakhir. Sukses CI bukan bukti uji browser Android, akses anonim dokumen Drive, lisensi visual, ataupun persetujuan SME.

**Status akhir tahap ini: NO-GO publikasi resmi / PR tetap Draft.** Dokumen dan slide kandidat di area review tidak dipromosikan sebagai tautan LMS. 


## F. Register uji 51 tautan — dibuat otomatis dari manifest (25 Oktober 2026)

Jalankan dari root repository pada branch Pra-UAT:

```bash
node site/uat-links.cjs > uat-links.csv
```

Skrip menulis **56 baris aset + 1 header**: 51 tautan aktif untuk diuji secara anonim, dan 5 asesmen `DITAHAN` yang **tidak** berisi URL. Struktur urutan mengikuti pembelajaran pre-test → slide → infografis → worksheet (jika ada) → post-test / ujian akhir. Skrip gagal apabila jumlah aset, ID asesmen yang ditahan, keunikan URL, atau domain sumber tidak sesuai baseline.

Kolom pengujian sengaja dibiarkan kosong: **Hasil incognito**, **Hasil Android**, **Berkas sesuai?**, dan **Catatan dan bukti**. Isi hanya setelah peninjau benar-benar membuka URL menggunakan browser anonim tanpa akun Google, lalu ulangi pada perangkat Android. Gunakan hasil `BERHASIL`, `LOGIN DIMINTA`, `AKSES DITOLAK`, `SALAH BERKAS`, atau `TIDAK TERBUKA`; sertakan tangkapan layar / perangkat / tanggal pada catatan bila gagal. Untuk asesmen yang ditahan, periksa bahwa label tidak dapat diklik dan ID tidak terlihat pada berkas publik.

**Pembatasan publikasi:** berkas `uat-links.csv` yang dihasilkan hanya untuk peninjau, jangan disimpan di `site/` atau dimasukkan ke allowlist GitHub Pages. Job PR memverifikasi skrip berjalan, **bukan** menandai pengujian browser sebagai selesai.


## G. Modul 01 — QA9, perbaikan petunjuk (26 Oktober 2026)

Temuan QA XII telah diperbaiki melalui **dua dokumen Pra-UAT terpisah**, bukan dengan menimpa materi peserta:
- [Pre-test Modul 01 QA9](https://docs.google.com/document/d/1DvShOKDmQO5MsPt8orFJOukS3dlM33SxEd3tYBy8b4E/edit).
- [Post-test Modul 01 QA9](https://docs.google.com/document/d/1MsqJrAMQWcorT-FR_LLF7VHHglN2BNmJfkwHef5IHZI/edit).
- [Laporan perbaikan dan verifikasi teks](QA-XIII-MODUL01-PETUNJUK-2026-10-26.md).

- [x] Petunjuk penilaian lengkap dan teks duplikat diganti pada kandidat.
- [x] Konten soal dan pilihan sama dengan sumber (masing-masing 10 soal + 40 opsi).
- [x] Metadata kandidat tidak memuat izin baca umum `anyone` saat pemeriksaan.
- [x] Validator CI dikunci pada 21 ID asesmen peserta saat ini untuk mencegah promosi tak sengaja.
- [ ] SME memeriksa kebijakan skor dan mengesahkan petunjuk.
- [x] Pemeriksaan **visual PDF ekspor Google Docs QA9**: kedua dokumen telah diperbaiki dari 3 menjadi 2 halaman, soal tidak terpisah dari pilihan; pengecekan urutan 10 soal dan 40 opsi per dokumen lolos.
- [ ] **UAT browser desktop dan Android**: verifikasi dokumen asli, zoom, tampilan mobile, aksesibilitas, dan tidak ada pemotongan. PDF saja tidak mengesahkan perangkat nyata.
- [ ] Uji akses anonim setelah izin materi yang akan dipromosikan ditetapkan.
- [ ] Update `site/modules.json` dan snapshot validasi **hanya** setelah bukti UAT/SME lengkap.

**Keputusan: NO-GO promosi QA9.** Checklist ini tidak menandai UAT visual, persetujuan substansi, atau keamanan seluruh 262 soal sebagai selesai.
