# Portal Pembelajaran Mandiri SATUSEHAT — pratinjau materi 20 Oktober 2026

Prototipe **bukan** LMS, kurikulum, atau sertifikasi resmi Kementerian Kesehatan RI.

## Sumber materi kanonis
[Folder Kurikulum Pembelajaran SATUSEHAT 2026](https://drive.google.com/drive/folders/1iEfuLRPaojTnP0jCY0SAUgbAn3TMsPWm) memuat 13 modul peserta, 683 slide, 13 infografis, 26 dokumen asesmen (Modul 13: pre-test + ujian akhir), dan worksheet pada Modul 10–13. Katalog ini **mengarah ke berkas peserta Google Drive**, tidak menyalin PPTX/tes/gambar atau file internal ke repository. Berkas diperbarui 20 Oktober 2026.

## Catatan perubahan dari v0.7
Arsip LMS v0.7 sebelumnya hanya 312 slide / 83 bab dan tidak sama dengan 683 slide kurikulum terbaru. Struktur lama tidak lagi digunakan untuk deployment. Modul 13 saat ini membahas **Pengiriman Data USG Puskesmas/MWL**, bukan tata kelola AI. Detail MWL adalah contoh implementasi, bukan pola semua DICOM Router.

## Deploy otomatis GitHub Pages
Workflow `.github/workflows/pages.yml` pada push ke `main`:
1. Memeriksa manifest 13 modul, 683 slide, 26 tautan asesmen, 13 infografis, 4 worksheet.
2. Mengunggah hanya folder `site/`.
3. Menerbitkan ke GitHub Pages melalui Actions.

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
