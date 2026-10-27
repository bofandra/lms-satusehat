# QA lintas-modul 09 dan 11 — 27 Oktober 2026

**Status:** PRA-UAT / NO-GO. Ini hasil pemeriksaan teknis dan visual desk-review, **bukan** pengganti inspeksi SME, UAT Android, atau verifikasi anonim.

## Materi yang diperiksa

| Modul | Sumber | Pemeriksaan |
|---|---|---|
| 09 v2.6 | [Google Slides kandidat](https://docs.google.com/presentation/d/1vlemdZVuS97qHIqQ3_5tw5dSLLkICdzOuqCyCnNRUE8/edit) | Ekspor PDF 60 halaman, rendering lengkap 60/60, contact sheet tiga lembar, pemeriksaan kandidat tanpa raster |
| 11 v2.2 | [PPTX sumber](https://drive.google.com/file/d/1yNUsu7IMLR9YBkMdQG2odlpH-lbMsxmQ/view) | 65/65 halaman ter-render, contact sheet empat lembar, tanpa gambar raster, struktur 65/65 notes |

Kedua deck berhasil dirender lengkap. Contact sheet digunakan untuk review tata letak skala kecil, dengan pemeriksaan resolusi lebih tinggi pada slide sasaran; **tidak** menyatakan setiap huruf pada 125 halaman telah diperiksa pada ponsel.

## Temuan P1: kohort pending tidak boleh dikeluarkan tanpa bukti

Pada sumber Modul 11 v2.2, ilustrasi 160 order menampilkan 30 excluded, 10 pending, 120 eligible; tetapi teks slide 39 menyebut **pending masih perlu klasifikasi**. Narasi tersebut dapat salah mengajarkan bahwa semua pending boleh dikeluarkan dari penyebut walau statusnya belum diverifikasi.

**Perbaikan Modul 11 v2.3** pada slide **26, 36, 38, 39, 57**:
- Menetapkan 10 pending dalam contoh **sudah terverifikasi belum jatuh tempo** berdasarkan definisi dan cut-off indikator (bukan pending yang belum diketahui).
- Menegaskan status/relasi yang belum pasti **tetap dievaluasi di kohort eligible** dan tidak otomatis dianggap excluded.
- Mempertahankan contoh **160 order unik = 30 excluded sah + 10 belum jatuh tempo terverifikasi + 120 eligible**; **84 final-tertaut / 120 eligible = 70%**.
- Menegaskan latihan lain: **12 order = 2 excluded + 2 belum jatuh tempo terverifikasi + 8 eligible**; 3/8 = 37,5%.
- Menambah catatan pengajar QA pada kelima slide. Semua angka adalah simulasi pendidikan, bukan KPI nasional.

## Kandidat Modul 11 v2.4 — hasil akhir tahap ini

- [Lihat PPTX editable v2.4 di Google Drive](https://docs.google.com/presentation/d/1jqdBEzcq1jfcSgdMa10LcM7VIz644gNb/edit)
- Versi v2.4 melanjutkan koreksi v2.3 dan memperbaiki **slide 57: footer nomor 57 / 65**.
- **19 objek teks pertanyaan panjang** sebelumnya berukuran 11,8 pt disesuaikan menjadi 12 pt untuk memperbaiki keterbacaan, menjaga pengaturan tipografi utama.
- Readback lokal: 65 slide, 65 notes berisi teks, 0 gambar raster, penomoran slide 02–65 lengkap; pengecualian cover slide 01.
- Hasil ekspor ulang: 65/65 halaman PDF, tanpa page overflow menurut pemeriksaan struktur PPTX, slide 57 diinspeksi resolusi 1600 px.
- v2.3 dan v2.2 tetap arsip kandidat; **v2.4 yang dianjurkan untuk review SME berikutnya**. Tidak menggantikan deck peserta pada `site/modules.json`.

## Poin peninjauan SME

1. Tetapkan tertulis unit analisis, aturan eligibility, definisi "belum jatuh tempo", keterlambatan, excluded yang sah, cut-off, dan penanganan kasus relasi `DiagnosticReport.basedOn` yang belum lengkap.
2. Tentukan kebijakan status `final`, `amended`, `corrected`, `appended` bagi numerator agar tidak dihitung ganda atau otomatis dianggap invalid; `entered-in-error` harus diperlakukan hati-hati sesuai FHIR.
3. Pastikan diagram Rawat Jalan via BPJS dan Rawat Inap/Darurat direct selaras playbook aktif, sambil membedakan pengiriman RME klinis rutin ke SATUSEHAT.
4. Uji deck pada Android/desktop, zoom dan pembaca layar; audit izin Drive incognito; tinjau notes/komentar/metadata serta akses 51 tautan dan 262 soal.

## Pengamanan publikasi

- Daftar kandidat terlarang pada `site/validate.cjs` di branch Draft PR #1 diperbarui agar **Modul 11 v2.3 dan v2.4** tidak masuk manifest publik secara tidak sengaja.
- `site/modules.json` tetap sama, 5 asesmen tertahan tetap di-hold, PR tetap Draft/NO-GO; dilarang menyatakan rilis resmi tanpa SME dan UAT.

## Referensi

- Playbook SATUSEHAT Rujukan (riwayat versi v6.1, 21 Agustus 2026): https://satusehat.kemkes.go.id/platform/docs/id/interoperability/rujukan/
- HL7 FHIR R4 DiagnosticReport dan penanganan laporan revisi: https://hl7.org/fhir/R4/diagnosticreport.html
