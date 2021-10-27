const { parseNIK } = require('./utils');
const test = require('tape')

test('Bisa parse format nomor yang benar', (t) => {
  t.plan(9);

  const parsed = parseNIK('3273191511910002');

  t.equal(parsed.nik, '3273191511910002');
  t.equal(parsed.kode_wilayah.provinsi, '32');
  t.equal(parsed.kode_wilayah.kota, '73');
  t.equal(parsed.kode_wilayah.kecamatan, '19');
  t.equal(parsed.tanggal.hari, '15');
  t.equal(parsed.tanggal.bulan, '11');
  t.equal(parsed.tanggal.tahun, '1991');
  t.equal(parsed.uniq, '0002');
  t.equal(parsed.jenis_kelamin, 'L');
});

test('Bisa parse format nomor perempuan NIK', (t) => {
  t.plan(9);

  const parsed = parseNIK('3273195511910002');

  t.equal(parsed.nik, '3273195511910002');
  t.equal(parsed.kode_wilayah.provinsi, '32');
  t.equal(parsed.kode_wilayah.kota, '73');
  t.equal(parsed.kode_wilayah.kecamatan, '19');
  t.equal(parsed.tanggal.hari, '15');
  t.equal(parsed.tanggal.bulan, '11');
  t.equal(parsed.tanggal.tahun, '1991');
  t.equal(parsed.uniq, '0002');
  t.equal(parsed.jenis_kelamin, 'P');
});