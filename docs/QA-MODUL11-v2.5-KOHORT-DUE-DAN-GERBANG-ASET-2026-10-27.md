# QA Modul 11 v2.5 — Konsistensi kohort jatuh tempo dan kontrol aset LMS

**Tanggal:** 27 Oktober 2026  
**Status:** PRA-UAT / NO-GO, kandidat untuk SME dan peninjauan perangkat  
**Asal:** Modul 11 v2.4, 65 slide, PowerPoint editable  
**Kandidat akhir tahap ini:** [Modul 11 v2.5](https://docs.google.com/presentation/d/1s1fuhvShlvP_lsvmvuG0ohWNqwkGwByB/edit) (PPTX di Drive, bukan Google Slides native)

## Prinsip pembelajaran yang dipertegas

**Pending** pada simulasi indikator diagnostik bermakna **order yang terverifikasi belum jatuh tempo** di cut-off yang telah didefinisikan. Pending **bukan** padanan untuk status laporan tidak jelas, relasi `DiagnosticReport.basedOn` bermasalah, atau order due yang belum mempunyai laporan final-tertaut. Order due yang belum terbukti final-tertaut tetap dihitung dalam denominator eligible selama tidak ada alasan eksklusi sah lainnya.

Nilai simulasi tidak berubah:
- Contoh funnel: **160 order unik = 30 excluded sah + 10 pending belum due terverifikasi + 120 eligible**; **84/120 = 70%** final-tertaut.
- Contoh worksheet: **12 order unik = 2 excluded sah + 2 pending belum due terverifikasi + 8 eligible**; **3/8 = 37,5%** final-tertaut.
- Ketidakjelasan relasi/status harus ditelusuri; tidak otomatis berarti gagal integrasi atau excluded.
- Status `amended`, `corrected`, dan `appended` tidak otomatis dibuang; perlakuan numerator pada KPI produksi perlu ditetapkan pemilik indikator/SME.

## Perubahan kandidat v2.5

| Slide | Revisi |
| --- | --- |
| 26 | Menegaskan order due yang status/relasinya belum pasti tetap eligible; syarat pending adalah belum jatuh tempo yang terbukti |
| 37 | Memperjelas 30 excluded sah, 10 belum due terverifikasi, dan 120 eligible pada rumus funnel |
| 55 | Memperjelas instruksi klasifikasi worksheet |
| 58 | Menambah pengingat bukti belum due dan memperjelas denominator serta rasio 3/8 |
| 26, 37, 55, 58 | Speaker notes pengajar diperluas dengan batasan interpretasi dan rubrik verifikasi |

Tidak mengubah status publikasi, jumlah slide, arsitektur LMS, atau angka simulasi.

## Bukti pemeriksaan

| Kriteria | Hasil |
| --- | --- |
| Jumlah slide | 65/65 |
| Notes berisi teks | 65/65 |
| Gambar raster | 0 (semua ilustrasi native/editable pada paket PPTX) |
| ZIP package integrity | Lulus |
| Render PDF | 65 halaman |
| QA visual perubahan utama | Render resolusi tinggi untuk slide 26, 37, 55, 58; tidak ditemukan pemotongan baru pada empat slide tersebut |
| UAT incognito tautan peserta | Belum |
| UAT Android peserta | Belum |
| Pengesahan SME / pemilik indikator | Belum |
| Promosi manifest peserta | **Tidak dilakukan** |

## Release guard tambahan

Pada branch Draft PR #1, `site/validate.cjs` kini memverifikasi sidik data untuk **30 ID aset pembelajaran**: **13 slide, 13 infografis, 4 worksheet**, termasuk `deckType` dan urutan modul. Snapshot dibandingkan terhadap baseline `site/modules.json` yang sekarang. Perubahan ID aset apa pun—termasuk ID kandidat yang belum diketahui validator—memicu kegagalan validasi dan perlu disahkan sebelum snapshot diperbarui.

Guard juga menyimpan denylist ID kandidat Modul 11 v2.5 untuk pesan kontrol eksplisit; **snapshot bukan pengganti verifikasi izin Drive, SME, atau UAT**. Perlindungan 21 asesmen aktif dan lima asesmen tertahan tetap berlaku.

## Pekerjaan tersisa sebelum GO

Review sumber FHIR dan definisi denominator oleh SME; menyetujui perlakuan `DiagnosticReport.status` serta cut-off, eligibility, eksklusi; audit tampilan dan aksesibilitas Android/desktop; periksa hak akses anonim 51 tautan; review 262 soal dan metadata/notes slide; baru kemudian sign-off versi dan perubahan manifest yang disengaja.

## Rujukan

- HL7 FHIR R4 `DiagnosticReport`: https://hl7.org/fhir/R4/diagnosticreport.html
- HL7 FHIR R4 `DiagnosticReport.status`: https://hl7.org/fhir/R4/codesystem-diagnostic-report-status.html
- Dokumentasi SATUSEHAT Platform: https://satusehat.kemkes.go.id/platform/docs/id/

**Keputusan: tetap NO-GO.**
