# QA Modul 09 v2.7 — Perbaikan Petunjuk Latihan dan Kuis

**Tanggal:** 28 Oktober 2026  
**Kandidat:** [Modul 09 v2.7 — native Google Slides](https://docs.google.com/presentation/d/1O7IjFitfskRV-2M0CqvM9IrCRiPCtJhZzakYIGtnnmI/edit)  
**Sumber:** Modul 09 v2.6 (27 Oktober 2026), dipertahankan tanpa ditimpa.  
**Keputusan:** **PRA-UAT / NO-GO**; belum ditayangkan dalam katalog peserta.

## Perubahan native yang dilakukan

| Slide | Temuan | Perbaikan v2.7 | Verifikasi API |
| --- | --- | --- | --- |
| 54 | Panduan empat keadaan mengarahkan peserta ke slide 52 (pembahasan kasus berbeda), bukan slide 55 yang memuat respons empat keadaan | Ubah referensi menjadi **slide 55** | Tepat satu kemunculan teks berubah |
| 56 | Judul menyebut `tanpa petunjuk` padahal memuat panduan serta enam instruksi `Tuliskan keputusan dan alasannya.` yang berulang | Judul menjadi **Kuis mandiri: enam keputusan**, enam kotak teks berulang dihapus, satu petunjuk umum menyatakan tulis keputusan dan alasan untuk keenam soal, lalu lihat slide 58 | Tepat dua teks diubah dan enam objek teks duplikatif dihapus |

Perubahan teks dan objek dilakukan pada **salinan v2.7**, bukan pada v2.6 ataupun versi peserta. Semua soal tetap sama secara makna, urutan, dan enam skenario. Tidak ada perubahan pada jawaban slide 58.

## Verifikasi struktur 28 Oktober

- **60 slide**, **60/60 halaman memiliki speaker notes**, tidak ada objek `image` raster.
- Slide 54 kini memuat `Tulis langkah verifikasi Anda; lihat empat respons pada slide 55.`
- Slide 56 memiliki **85 kata** dari hasil pengambilan teks shape (sebelumnya **111 kata**); enam prompt, rujukan slide 58, dan petunjuk evaluasi tetap ada.
- Pemindaian teks dan catatan menemukan **0 kecocokan** untuk pola NIK/NIP numerik, secret/token, URL jaringan privat, dan placeholder generik `TODO`/`TBD`.
- Pemeriksaan ini **bukan** pengganti render seluruh 60 slide, pemeriksaan visual sebenarnya, lisensi, review klinis, maupun UAT perangkat.

## Referensi substansi yang diperiksa

- [FHIR R4 DiagnosticReport.status](https://hl7.org/fhir/R4/valueset-diagnostic-report-status.html): perbedaan `partial`, `preliminary`, `final`, `amended`, `corrected`, dan `appended` pada latihan status hasil.
- [FHIR R4 MedicationDispense.status](https://hl7.org/fhir/R4/valueset-medicationdispense-status.html): `in-progress` bukan bukti penyerahan selesai, `completed` menandakan pengambilan sudah terjadi. Status dispensing tetap berbeda dari bukti obat diminum.

## Temuan keamanan terbuka — P0

Pemeriksaan metadata Google Drive terhadap **kandidat v2.7** dan folder `LMS_SATUSEHAT_INTERNAL_REVIEW_2026-10-16` menunjukkan izin `domain: reader` untuk **tau.ac.id**, di samping izin owner. Berkas ini **tidak boleh dinyatakan Restricted**. Koneksi Drive yang tersedia belum menyediakan aksi penghapusan izin. Pengelola Drive perlu mencabut izin domain yang tidak dimaksudkan pada folder dan berkas kandidat, lalu melakukan pemeriksaan ulang. Menahan ID dari manifest LMS tidak mencabut izin Google Drive.

## Gerbang rilis

- [x] Salinan v2.7 dibuat, v2.6 tidak ditimpa.
- [x] Tiga penggantian teks dan enam penghapusan objek telah terbaca ulang.
- [x] Materi peserta dan lima asesmen QA-held tidak berubah.
- [x] Kandidat v2.7 ditambahkan ke perlindungan manifest branch Pra-UAT dan uji regresi.
- [ ] Review visual resolusi penuh slide 54 dan 56, seluruh deck dan perangkat Android.
- [ ] Periksa kebijakan izin Drive pada salinan ini, cabut akses domain yang tidak diperlukan.
- [ ] Validasi materi dan rubric dari SME serta approval pemilik.
- [ ] Periksa 51 URL anonim dan 262 butir soal.

**Status akhir:** tetap **NO-GO**; jangan merge PR atau mengubah `site/modules.json` berdasarkan bukti ini saja.
