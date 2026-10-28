# Audit metadata izin 51 aset LMS SATUSEHAT — 28 Oktober 2026

**Status audit:** selesai untuk **metadata izin Google Drive**, **belum** selesai untuk akses anonim dan Android.  
**Sumber daftar:** `site/modules.json` pada branch `fix/lms-prauat-pr-gate-20261025`; ID materi peserta tidak diubah.

## Hasil pemeriksaan live

Seluruh **51 dari 51 aset aktif** berhasil dibaca metadata Google Drive-nya. Masing-masing mengembalikan `source_visibility_status: permission_metadata_available` dan setidaknya permission `type: anyone, role: reader`.

| Jenis aset peserta | Jumlah terdaftar | Metadata dapat dibaca | Anyone: reader |
| --- | ---: | ---: | ---: |
| Slide modul | 13 | 13 | 13 |
| Infografis | 13 | 13 | 13 |
| Asesmen aktif | 21 | 21 | 21 |
| Worksheet | 4 | 4 | 4 |
| **Total** | **51** | **51** | **51** |

Lima asesmen yang ditahan tetap tanpa ID dalam manifest peserta: **03-pre, 05-post, 07-post, 12-post, 13-pre**. Pemeriksaan 51 aset **tidak** mengubah hak akses dari kelima dokumen tersebut.

## Apa yang dibuktikan dan belum dibuktikan

- **Terbukti pada 28 Oktober:** 51 ID benar-benar dapat ditemukan melalui Drive API; metadata izin menunjukkan pembaca umum (`anyone: reader`) untuk 51 berkas tersebut.
- **Belum diuji:** pembukaan sesungguhnya di browser Chrome incognito tanpa login Google, pembacaan di Android, benar/tidaknya berkas yang terbuka, media pada slide, rendering PPTX, ekspor Docs, dan pengalaman navigasi pada portal.
- **Belum sah disimpulkan:** uji UAT lengkap, persetujuan publikasi, integritas materi, dan aksesibilitas visual.

## Temuan keamanan terpisah untuk berkas internal (P0)

Folder `LMS_SATUSEHAT_INTERNAL_REVIEW_2026-10-16` serta kandidat Modul 09 v2.7, Modul 11 v2.7 dan Modul 13 v2.4 diketahui masih mempunyai permission `domain: tau.ac.id, role: reader`. Ini **bukan** izin publik `anyone`, tetapi tetap akses seluas domain dan tidak sama dengan `Restricted`. **Pengelola Drive perlu mencabut akses domain yang tidak diperlukan dan memverifikasinya kembali**. Perubahan tersebut belum dilaksanakan karena konektor yang tersedia tidak menyediakan pencabutan permission.

## Next gate

1. Jalankan `node site/uat-links.cjs > uat-links.csv` untuk menyiapkan 51 entri URL aktif dan 5 asesmen ditahan.
2. Penguji membuka seluruh URL via Chrome incognito **tanpa akun Google** dan via Android. Catat status, perangkat, tanggal, dan bukti.
3. Reviewer memeriksa isi berkas, bukan hanya permission; konten visual, 262 soal, dan persetujuan SME tetap dipersyaratkan.
4. Status keputusan rilis tetap **PRA-UAT / NO-GO** sampai semua gerbang selesai.

**Tidak dilakukan:** perubahan `site/modules.json`, perubahan izin Drive, merging PR, atau deployment Pages.
