# QA XIII — Penutupan Temuan Petunjuk Asesmen Modul 01

**Tanggal:** 26 Oktober 2026  
**Status:** perbaikan pada kandidat selesai secara tekstual; **Pra-UAT / NO-GO** promosi ke katalog peserta.  
**Rujukan temuan:** [QA XII](QA-XII-REVIEW-182-SOAL-2026-10-26.md).

## Ringkasan
Pada pre-test dan post-test Modul 01 aktif, paragraf *Petunjuk* secara keliru mengulang identitas LMS, sehingga cara pengerjaan dan penilaian tidak dijelaskan. Dua **Google Docs baru** dibuat dari konten sumber karena operasi salin sebelumnya diblokir; materi peserta yang aktif **tidak diedit**. Kandidat lalu dipindahkan ke folder Drive `LMS_SATUSEHAT_INTERNAL_REVIEW_2026-10-16`.

| Aset | Kandidat QA9 untuk review | Pemeriksaan |
| --- | --- | --- |
| Pre-test Modul 01 | [QA9 pre-test](https://docs.google.com/document/d/1DvShOKDmQO5MsPt8orFJOukS3dlM33SxEd3tYBy8b4E/edit) | 10 nomor, 40 pilihan, isi soal/opsi sama dengan sumber |
| Post-test Modul 01 | [QA9 post-test](https://docs.google.com/document/d/1MsqJrAMQWcorT-FR_LLF7VHHglN2BNmJfkwHef5IHZI/edit) | 10 nomor, 40 pilihan, isi soal/opsi sama dengan sumber |

### Perbaikan instruksi
- Untuk kedua dokumen: satu jawaban tiap soal; 10 soal; jawaban benar 10 poin, salah/kosong 0; nilai maksimum 100; saran waktu 15–20 menit; seluruh kasus rekaan.
- Pada **pre-test**, dinyatakan bahwa hasil bersifat diagnostik dan tidak menjadi syarat pembelajaran.
- Pada **post-test**, hasil menjadi umpan balik belajar; ambang kelulusan resmi menunggu pengelola dan reviewer SME. Keduanya bukan sertifikasi kompetensi.
- Dokumen QA9 memiliki paragraf `TITLE`, `SUBTITLE`, dan `HEADING_2` untuk Petunjuk dan SOAL; judul 10 soal dicetak tebal secara native.
- **Pemeriksaan ulang:** pembacaan Google Docs pada kedua kandidat mengonfirmasi 10 soal/40 pilihan; seluruh bagian setelah heading SOAL identik dengan versi sumber setelah normalisasi spasi/baris; tidak ada lagi duplikasi petunjuk. Selain audit tekstual, **kedua kandidat sudah diekspor sebagai PDF dan seluruh halamannya diperiksa secara visual**. Pemeriksaan ini belum menggantikan UAT melalui browser desktop atau perangkat Android.
- Metadata berbagi keduanya memuat pembaca tingkat domain dan owner; **tidak** memuat izin `anyone` saat pemeriksaan. Dokumen reviewer tidak boleh dipromosikan menjadi aset publik tanpa keputusan yang disetujui.

## Pengaman penayangan (CI)
`site/validate.cjs` ditambah **fingerprint snapshot asesmen aktif**: inputnya urutan Modul 01–13 dengan ID pre/post atau tanda '-' untuk lima asesmen tertahan. Pengujian tetap menuntut 21 ID aktif dan lima hold. Untuk baseline, panjang string snapshot 993 karakter dengan fingerprint FNV-1a 32 bit `eac2e3ca`.

**Penting:** fingerprint ini hanya kontrol *accidental change*, **bukan** pengamanan kriptografis atau persetujuan. Bila suatu asesmen mendapat persetujuan SME dan siap promosi, identitas aset pada manifest serta nilai snapshot harus diperbarui bersama bukti review dan UAT. Tidak ada ID kandidat/rahasia baru yang dimasukkan ke daftar aset publik.

## Bukti dan keputusan
- Sumber pre-test aktif: `177XHZwCEQaVr9P9taAgYmyd9wAokHpruworZKipNBKE`.
- Sumber post-test aktif: `1vyPOna7ogUdC6ADdadPixUrUewzafEkLMwGfrUnrjWk`.
- `site/modules.json` peserta **tidak berubah**. Branch `main` tidak diedit; perubahan validasi dan QA di PR Draft #1.
- **SME** belum menyetujui jawaban/distraktor seluruh 262 soal, dan belum ada UAT browser anonim/Android; **NO-GO** promosi.
- [ ] Reviewer memeriksa instruksi dan konsistensi pedagogis QA9.
- [x] Audit visual melalui **PDF ekspor Google Docs**: seluruh halaman diperiksa dan jumlah soal/opsi dicek per halaman; tidak ditemukan kliping pada area teks yang diekstraksi.
- [ ] UAT **browser desktop dan Android**: lihat dokumen asli di perangkat dan uji zoom, pemenggalan, navigasi, serta keterbacaan.
- [ ] Uji akses non-login sebelum penggantian aset peserta yang disetujui.
- [ ] Setelah persetujuan, revisi daftar manifest dan checksum/fingerprint bersama catatan GO yang ditandatangani.

## QA visual lanjutan — perbaikan pemenggalan halaman (26 Oktober 2026)

Pada ekspor PDF pertama (margin standar 72 pt), **kedua asesmen menjadi 3 halaman**:
- Pre-test: halaman ketiga hanya menyisakan kalimat penutup.
- Post-test: halaman ketiga berisi soal 10 dan penutup; salah satu soal sebelumnya juga terbelah di batas halaman.

Perbaikan dilakukan **pada kandidat QA9**, bukan pada asesmen aktif. Margin atas/bawah menjadi **48 pt**, kiri/kanan **54 pt**; jarak baris normal menjadi **108%**; dan paragraf tiap soal serta opsi A–C diberi pengaturan `keepWithNext` agar soal dan empat opsi tidak terpisah. Ukuran huruf isi **11 pt** dipertahankan; struktur `TITLE`, `SUBTITLE`, dan `HEADING_2` tidak dihapus.

**Pemeriksaan ulang setelah ekspor PDF dan render pada 135 DPI:**
- Kedua dokumen menjadi **2 halaman Letter**.
- Pada masing-masing dokumen, halaman 1 memuat soal **1–4** dan **16 pilihan**, halaman 2 memuat soal **5–10**, **24 pilihan**, dan penutup.
- Semua opsi pada setiap halaman mengikuti urutan **A–B–C–D**; tidak ada pertanyaan yang terputus dari pilihannya.
- Pemeriksaan programatik koordinat teks tidak menemukan teks keluar dari batas aman 40–574 pt horizontal dan 40–744 pt vertikal.
- Seluruh empat halaman hasil render telah diinspeksi sebagai lembar kontak. Pemeriksaan ini tidak membuktikan rendering Google Docs di layar Android, akses anonim, atau validitas jawaban.

**Keputusan:** gerbang **visual PDF** untuk dua kandidat Modul 01 selesai, tetapi **NO-GO promosi** tetap berlaku hingga SME, uji perangkat nyata, dan akses tanpa login disetujui.
