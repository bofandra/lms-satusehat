# QA XII — Review Substansi 182 Soal Modul 01–07 dan 12–13
**Tanggal:** 26 Oktober 2026  
**Status:** Pra-UAT / **NO-GO**. Draf usulan kunci dan alasan **bukan persetujuan SME**.

## Metode dan cakupan
Dilakukan pembacaan konten lengkap **18 dokumen asesmen** yang terdiri dari 17 dokumen × 10 soal dan ujian akhir Modul 13 × 12 soal = **182 soal**. Sumber yang digunakan adalah dokumen aktif saat audit; untuk lima asesmen tertahan digunakan salinan koreksi QA5 (03-pre, 05-post, 07-post, 12-post) dan QA6 (13-pre). Temuan ini melengkapi [QA XI — 80 soal](QA-XI-REVIEW-SOAL-MOD08-11-2026-10-26.md), sehingga seluruh **262 soal** telah memperoleh usulan jawaban dan penjelasan *editorial*, belum sign-off SME.

| Modul | Pre-test | Post-test/ujian | Jumlah soal |
| --- | --- | --- | ---: |
| 01 | 10 | 10 | 20 |
| 02 | 10 | 10 | 20 |
| 03 | 10 QA-held | 10 | 20 |
| 04 | 10 | 10 | 20 |
| 05 | 10 | 10 QA-held | 20 |
| 06 | 10 | 10 | 20 |
| 07 | 10 | 10 QA-held | 20 |
| 12 | 10 | 10 QA-held | 20 |
| 13 | 10 QA6-held | 12 | 22 |
| **Total** | **90** | **92** | **182** |

## Temuan P1: petunjuk Modul 01 tidak menjelaskan penilaian
Pada pre-test dan post-test Modul 01, sesudah judul “Petunjuk” hanya tertulis ulang identitas LMS, sehingga tidak menjelaskan jumlah soal, aturan nilai, waktu saran, atau sifat diagnostik/post-test. Dua salinan baru di Drive tidak dapat dibuat pada tahap ini karena konektor menolak operasi copy; **dokumen sumber tidak diubah**. Teks usulan untuk penyuntingan pada salinan Pra-UAT berikutnya:

> Pilih satu jawaban paling tepat untuk setiap soal. Ada 10 soal, jawaban benar 10 poin; jawaban salah/kosong 0 poin. Waktu saran 15–20 menit. Semua contoh bersifat rekaan. Evaluasi digunakan untuk pembelajaran dan bukan sertifikasi.

Tentukan kebijakan nilai ambang resmi hanya setelah persetujuan pengelola.

## Poin pemeriksaan substansi prioritas
1. Modul 03: peran `Patient`, `Encounter`, `Observation`, `ServiceRequest`, `DiagnosticReport`, `Bundle`; ID logis vs `identifier`.
2. Modul 04: kewajiban integrasi RME terpisah dari persetujuan akses kembali, prinsip least privilege, audit, dan risiko re-identifikasi dalam contoh publik.
3. Modul 05: konflik identitas MPI/MNI, bayi kembar, Practitioner–Organization–Location–Encounter; verifikasi sumber sebelum koreksi.
4. Modul 06: `Procedure.status = not-done` tersedia pada **FHIR R4**; `MedicationRequest`, `MedicationDispense`, dan `MedicationAdministration` tidak boleh disamakan; pemetaan terminologi harus mengikuti use case.
5. Modul 07/13: MWL C-FIND berbeda dari akuisisi/C-STORE, `Accession Number` bukan `StudyInstanceUID`, file DICOM berbeda dari metadata `ImagingStudy` dan laporan `DiagnosticReport`.
6. Modul 12: FHIR `batch` memproses operasi independen sedangkan `transaction` bersifat atomik; fitur conditional create tergantung dukungan server.

## Tata kelola kunci jawaban
Dokumen Word reviewer berisi usulan kunci **182 soal** disediakan sebagai lampiran percakapan terbatas, **tidak diunggah ke repository publik atau laman Pages**. Laporan GitHub ini dengan sengaja **tidak memuat kunci jawaban**.

- Jangan mempromosikan lima asesmen QA-held tanpa keputusan SME tertulis.
- Jangan menganggap hasil audit tekstual sebagai audit visual/aksesibilitas atau pengesahan isi klinis.
- `site/modules.json`, katalog 51 aset peserta, izin berbagi Drive, dan branch `main` tidak dimodifikasi oleh tahap ini.

## Rujukan
- [SATUSEHAT Terminologi](https://satusehat.kemkes.go.id/platform/docs/id/terminology/)
- [HL7 FHIR R4 Procedure](https://hl7.org/fhir/R4/procedure.html)
- [HL7 FHIR R4 HTTP — batch & transaction](https://hl7.org/fhir/R4/http.html)
- [HL7 FHIR R4 Bundle](https://hl7.org/fhir/R4/bundle.html)

## Gerbang yang belum lulus
- [ ] Koreksi petunjuk Modul 01 pada salinan Pra-UAT; verifikasi hasil dan versi.
- [ ] SME memvalidasi 262 usulan jawaban/distraktor beserta alasan dan menandatangani keputusan.
- [ ] UAT visual, akses tanpa login di desktop dan Android, serta bahan media dan lisensi.
- [ ] Keamanan dokumen reviewer dan persetujuan rilis resmi.

**Keputusan: NO-GO**.
