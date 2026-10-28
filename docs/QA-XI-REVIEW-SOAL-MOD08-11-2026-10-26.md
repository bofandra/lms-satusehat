# QA XI — Review Substansi Asesmen Modul 08–11 (Pra-UAT)

**Tanggal:** 26 Oktober 2026  
**Keputusan:** NO-GO; PR tetap Draft; semua kunci jawaban masih berstatus **usulan reviewer**, tidak disahkan SME.

## Cakupan dan hasil

Delapan dokumen asesmen telah dibaca lengkap: pre-test dan post-test Modul 08, 09, 10, dan 11, total **80 pertanyaan**. Usulan kunci beserta alasan per pertanyaan disusun terpisah sebagai dokumen **reviewer non-publik**, tidak disimpan di repository publik dan tidak ditambahkan pada link materi peserta.

- **Modul 08 (20 soal):** materi menegaskan rujukan rawat jalan melalui BPJS, rujukan rawat inap/darurat melalui SATUSEHAT secara langsung, perbedaan koordinasi Task dengan permintaan ServiceRequest, dan kebutuhan terapi/diagnostik/tindakan **di fasyankes tujuan**. Poin-poin alur sejalan dengan playbook resmi sebagai bahan pemeriksaan awal.
- **Modul 09 (20 soal):** ditemukan dua redaksi yang layak diperbaiki. Salinan **QA7** pre-test soal 3 kini menggunakan “mekanisme resmi yang berlaku” dan tidak mengesankan kode enam digit adalah mekanisme universal; salinan QA7 post-test soal 4 menegaskan `MedicationDispense.status=in-progress` berarti **siap diambil**, belum bukti diserahkan/diminum. Kunci usulan tidak berubah, tetapi redaksi dibuat lebih akurat.
- **Modul 10 (20 soal):** rasio dan contoh denominator diperiksa terhadap skenario sintetis; termasuk perhitungan gabungan dua kriteria pengecualian dengan irisan dan pembedaan transaksi FHIR dari order eligible.
- **Modul 11 (20 soal):** contoh laporan transaksi dan indikator diperiksa. Panduan “Ringkasan Transaksi FHIR” secara khusus menggunakan HTTP **200/201** untuk perhitungan sukses; itu tidak boleh digeneralisasi menjadi definisi semua respons sukses pada seluruh layanan HTTP/FHIR. Perhitungan denominator 180-(20+15-5)=150 dan 84/120=70% benar untuk skenario yang diberikan.

**Catatan verifikasi:** pemeriksaan ini berbasis isi tekstual dokumen, terminologi FHIR R4, dan dokumentasi SATUSEHAT saat pemeriksaan. Belum melakukan uji peserta, asesmen psikometrik, validasi kunci oleh SME, atau persetujuan akhir penerbitan.

## Bukti perubahan kandidat

- Salinan QA7 Modul 09 pre-test dibuat dari asesmen aktif dan mengganti **tepat satu** pilihan jawaban pada soal 3. Connector melaporkan 1 occurrence berubah; pembacaan ulang menegaskan teks baru.
- Salinan QA7 Modul 09 post-test dibuat dari asesmen aktif dan mengganti **tepat satu** pilihan jawaban pada soal 4. Connector melaporkan 1 occurrence berubah; pembacaan ulang menegaskan teks baru.
- Kedua salinan kandidat tidak memiliki izin `anyone` berdasarkan metadata. Dokumen usulan kunci jawaban juga tidak memiliki izin `anyone` (terdapat pembaca domain, maka dokumen ini **belum dinilai akses khusus pemilik saja**).
- `site/modules.json` tidak diubah: tautan asesmen peserta tetap versi aktif sebelumnya. Kandidat tidak boleh dipromosikan tanpa keputusan SME dan pemeriksaan ulang metadata izin.

## Referensi resmi untuk tinjauan

1. [SATUSEHAT Playbook Rujukan Pasien](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/rujukan/).
2. [SATUSEHAT Ringkasan Transaksi FHIR](https://satusehat.kemkes.go.id/platform/docs/id/monitoring-guide/transaksi-fhir/).
3. [HL7 FHIR R4 MedicationDispense status](https://hl7.org/fhir/R4/valueset-medicationdispense-status.html).
4. [HL7 FHIR R4 ImagingStudy](https://hl7.org/fhir/R4/imagingstudy.html).
5. [HL7 FHIR R4 REST / transaksi](https://hl7.org/fhir/R4/http.html).

## Gerbang tersisa

- [ ] Reviewer SME memeriksa 80 usulan kunci dan memilih “benar/perlu revisi” per pertanyaan; reviewer, tanggal, dan catatan perubahan terdokumentasi.
- [ ] Periksa 182 soal lainnya dari Modul 01–07 serta 12–13 pada sisi substansi, bukan sekadar opsi dan nomor.
- [ ] Pastikan materi/kunci reviewer hanya ada di ruang akses terbatas dan tidak ikut artefak Pages, GitHub publik, maupun file peserta.
- [ ] Jalankan UAT materi dan asesmen di perangkat nyata, tanpa login, layar kecil, dan pembaca layar; hasil metadata Drive saja tidak cukup.

**Status: NO-GO rilis.** Pengujian CI pada PR dapat mendeteksi regresi portal, tetapi tidak berarti asesmen telah divalidasi secara klinis.
