# Portal Pembelajaran Mandiri SATUSEHAT — pratinjau materi 25 Oktober 2026

Prototipe **bukan** LMS, kurikulum, atau sertifikasi resmi Kementerian Kesehatan RI.

## Sumber materi kanonis
[Folder Kurikulum Pembelajaran SATUSEHAT 2026](https://drive.google.com/drive/folders/1iEfuLRPaojTnP0jCY0SAUgbAn3TMsPWm) memuat 13 modul peserta, 683 slide, 13 infografis, 26 dokumen asesmen (Modul 13: pre-test + ujian akhir), dan worksheet pada Modul 10–13. Katalog ini **mengarah ke berkas peserta Google Drive**, tidak menyalin PPTX/tes/gambar atau file internal ke repository. Berkas utama disusun 20 Oktober 2026; ilustrasi Modul 01 direvisi 25 Oktober 2026 untuk versi publik.

## Pembaruan keamanan konten 25 Oktober 2026
- Ilustrasi komik pada Modul 01 slide 9 dan 18 telah diganti dengan penjelasan konseptual untuk publik. File yang dirujuk katalog adalah v1.7.
- Sumber v1.6 dipindahkan dari folder materi peserta ke arsip review agar tidak lagi menjadi sumber tautan aktif. Perpindahan tidak otomatis mencabut izin langsung yang mungkin pernah diberikan.
- Pemeriksaan teks saja tidak cukup untuk ilustrasi bergambar. Audit panel visual, asesmen, infografis, dan izin akses harus menjadi gerbang publikasi.

## Catatan perubahan dari v0.7
Arsip LMS v0.7 sebelumnya hanya 312 slide / 83 bab dan tidak sama dengan 683 slide kurikulum terbaru. Struktur lama tidak lagi digunakan untuk deployment. Modul 13 saat ini membahas **Pengiriman Data USG Puskesmas/MWL**, bukan tata kelola AI. Detail MWL adalah contoh implementasi, bukan pola semua DICOM Router.

## Deploy otomatis GitHub Pages
Workflow `.github/workflows/pages.yml` pada push ke `main`:
1. Memeriksa manifest 13 modul, 683 slide, 26 tautan asesmen, 13 infografis, 4 worksheet.
2. Menjalankan pengujian perilaku katalog, pencarian, progres, filter, 51 tautan dan lima asesmen tertahan sebelum deploy.
3. Mengunggah hanya lima berkas portal dari `site/` dan `.nojekyll` melalui direktori `dist/`; skrip QA tidak diterbitkan.
4. Menerbitkan ke GitHub Pages melalui Actions.

**Pengaktifan pertama kali harus dilakukan oleh pemilik repository: Settings → Pages → Build and deployment → Source = GitHub Actions.** Tanpa itu, langkah `actions/configure-pages` mengembalikan 404; akun konektor yang digunakan tidak mempunyai hak admin Pages. Setelah pengaktifan, ulangi workflow jika run terakhir sudah gagal.

Calon URL: https://bofandra.github.io/lms-satusehat/ — jangan dianggap aktif sampai status deploy berhasil dan HTTPS diverifikasi.

## Batas keamanan/kualitas
- Mengindeks hanya berkas materi peserta yang tercantum pada folder kurikulum dan tautan dokumentasi standar publik, bukan laporan QA/arsip/internal review.
- Tidak mengumpulkan akun atau data pasien; status belajar hanya disimpan di `localStorage` browser.
- Materi dan soal tetap terbuka melalui izin Google Drive masing-masing. Ujian ini bukan asesmen berintegritas tinggi; kunci jawaban tidak disimpan di situs ini.
- QA 20 Oktober mencatat 683 slide telah diperiksa otomatis dan contact sheet, namun review SME/klinis, seluruh isi visual, dan persetujuan publikasi resmi masih diperlukan.
- Repository adalah **public**; sejarah commit lama mungkin masih menyimpan ZIP v0.7 meski dilepas dari branch aktif. Bila pernah ada data sensitif di riwayat, diperlukan penanganan riwayat dan rotasi kredensial melalui proses khusus, tidak cukup sekadar menghapus file dari HEAD.

## Referensi
- [Playbook SATUSEHAT Rujukan](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/rujukan/)
- [DICOM Router](https://satusehat.kemkes.go.id/platform/docs/id/dicom-system/dicom-router/)
- [ImagingStudy](https://satusehat.kemkes.go.id/platform/docs/id/fhir/resources/imaging-study/)

## Peningkatan QA portal — 25 Oktober 2026

Lima tautan asesmen ditahan dari katalog peserta karena opsi jawaban belum lengkap pada dokumen asli: Modul 03 pre-test, Modul 05 post-test, Modul 07 post-test, Modul 12 post-test, Modul 13 pre-test. Lima salinan koreksi tetap berada pada area Pra-UAT; izin dan dokumen Google Drive peserta tidak diubah dalam commit ini. Situs menyediakan 21 tautan asesmen pratinjau lainnya; seluruh 262 soal masih memerlukan validasi jawaban SME.

Kandidat slide versi lebih baru, termasuk Modul 13 v1.6 (klarifikasi order SIMPUS/MWL/ServiceRequest), tidak otomatis dipromosikan menjadi materi peserta. Syarat GO: review substansi klinis/integrasi, audit visual beresolusi penuh, izin akses dan UAT tanpa login, UAT mobile, kemudian pembaruan manifest terkendali. Keberhasilan GitHub Actions bukan persetujuan publikasi.

## Penguatan keamanan manifest katalog — 25 Oktober 2026

Lima dokumen asesmen yang tertahan kini memiliki ID `null` di `site/modules.json` sehingga URL-nya tidak dapat direkonstruksi dari berkas publik portal. Validasi CI menolak manifest yang menyertakan ID dokumen tertahan atau menghilangkan ID asesmen yang dinyatakan tersedia. Presentasi PPTX dan worksheet XLSX dibuka melalui Drive file viewer, sedangkan Google Slides asli tetap memakai tautan Slides.

**Penting:** Penghilangan tautan dari portal bukan pengaturan otorisasi; dokumen di Google Drive tetap mengikuti izin berbagi aslinya. Dokumen sumber, salinan Pra-UAT, dan hak akses tidak diubah. Publikasi resmi masih memerlukan validasi SME dan UAT.

## Audit akses berkas dan filter progres — 25 Oktober 2026

- Semua **51 tautan aktif** dalam manifest LMS telah diperiksa memakai metadata izin Google Drive: 13 dek slide, 13 infografis, 21 asesmen yang tidak ditahan, dan 4 worksheet. Ke-51 berkas dapat diidentifikasi dan masing-masing mengandung izin `anyone: reader` saat pemeriksaan.
- **Batas bukti:** Izin Drive tidak sama dengan UAT browser tanpa login, Android, atau persetujuan publikasi konten; pemeriksaan tersebut masih harus dilakukan. Lima dokumen asesmen QA-held tetap tidak dipublikasikan sebagai tautan aktif.
- Filter **Status belajar** (semua, belum ditandai, sudah ditandai) bekerja pada penanda lokal browser. Menandai modul tidak menyatakan nilai atau kelulusan, dan tidak mengirim data ke server.

## QA alur navigasi Modul 09 — 25 Oktober 2026

Empat petunjuk navigasi salah akibat sisipan slide ilustrasi sudah diperbaiki pada **kandidat internal Modul 09 v1.5**: slide 18 merujuk kartu di slide 21, slide 50 dan 54 merujuk pembahasan slide 52, dan slide 56 merujuk pembahasan kuis slide 58. Perubahan diperiksa ulang dari outline native 60 slide. Kandidat belum dipromosikan ke katalog peserta; pengecekan visual mendetail, SME, dan UAT masih terbuka.

## Gerbang regresi perilaku portal

Jalankan `node site/validate.cjs` dan `node site/test.cjs` sebelum deployment. Pengujian kedua menggunakan DOM tiruan untuk memeriksa render 13 modul, 51 link aman, lima asesmen yang ditahan, filter kelompok/topik/status, perubahan progres dan penghapusan lokal, localStorage rusak, serta error pengambilan katalog. **Ini bukan pengganti UAT browser Android atau audit hak akses anonim.**

## Gerbang pull request & UAT (25 Oktober 2026)

Perubahan pada `site/**`, workflow, atau README kini diperiksa otomatis saat **pull request menuju `main`**, sebelum dapat digabung. Job PR hanya menjalankan validasi manifest, perlindungan istilah/kredensial pada berkas portal publik, dan tes perilaku interaksi. Job kemas artefak dan deploy GitHub Pages **tidak dijalankan pada PR**; keduanya tetap hanya berjalan setelah perubahan masuk `main` atau workflow diaktifkan manual. Perubahan ini tidak otomatis menerbitkan slide kandidat atau menghapus gerbang NO-GO.

Checklist dan bukti yang harus diselesaikan sebelum rilis resmi terdapat pada [protokol UAT pra-rilis](docs/UAT-PRA-RELEASE.md), mencakup pengujian **51 tautan tanpa login**, Android, 262 soal, panel visual dan notes presenter, lima asesmen tertahan, serta persetujuan SME. Script GitHub tidak dapat mengaudit konten gambar dan izin Google Drive secara menyeluruh.

## Pembaruan alur belajar & audit Modul 09 — 25 Oktober 2026

- Urutan tautan peserta per modul kini: **pre-test diagnostik → slide → infografis → worksheet bila ada → post-test/ujian akhir**. Lima asesmen QA-held tetap tidak dapat diakses. Pengujian perilaku menjaga urutan pada Modul 01, 03, dan 13.
- Kandidat **Modul 09 v1.6** di Drive telah menjalani audit 60 slide: perbaikan nomor pada 28 ilustrasi, koreksi alur persetujuan di slide 28, serta penggantian cuplikan editorial berisiko pada komik slide 20 dan 40. Perbaikan dilakukan pada kandidat Pra-UAT, **bukan deck peserta dalam `site/modules.json`**.
- Rincian temuan, bukti render dan risiko overlay pada gambar raster tercatat dalam [QA-MODUL09-VISUAL-2026-10-25.md](docs/QA-MODUL09-VISUAL-2026-10-25.md). Semua ilustrasi, lisensi media, materi klinis dan UAT tetap memerlukan review sampai GO/NO-GO resmi.

## Audit struktur 262 soal — 26 Oktober 2026

Pemeriksaan struktur membaca **26 dokumen asesmen**: 21 tautan aktif dan lima salinan QA-held (termasuk koreksi terbaru 13-pre QA6). Seluruhnya mempunyai penomoran berurutan dan tepat empat opsi jawaban per soal. Komposisi benar adalah **25 dokumen × 10 soal + ujian akhir Modul 13 × 12 soal = 262 soal**. Ini bukan penilaian benar/salah, validasi kunci, atau sign-off SME. Lima asesmen tetap ditahan, dan `modules.json` tidak berubah.

- [Register audit 262 soal](docs/QA-X-ASESMEN-262-2026-10-26.md)
- [Protokol UAT dan GO/NO-GO](docs/UAT-PRA-RELEASE.md)
