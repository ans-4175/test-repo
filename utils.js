const parseNIK = (nomorNIK) => {
    nomorNIK = String(nomorNIK);

    if (nomorNIK.length == 16) {
        let thisYear = new Date().getFullYear().toString().substr(-2);
        let thisCode = nomorNIK.substr(-4);

        let thisRegion = {
            provinsi: nomorNIK.substr(0, 2),
            kota: nomorNIK.substr(2, 2),
            kabupaten: nomorNIK.substr(2, 2),
            kecamatan: nomorNIK.substr(4, 2)
        }
        let thisDate = {
            hari: ((nomorNIK.substr(6, 2) > 40) ? nomorNIK.substr(6, 2) - 40 : nomorNIK.substr(6, 2)).toString(),
            bulan: nomorNIK.substr(8, 2),
            tahun: (nomorNIK.substr(10, 2) > 1 && nomorNIK.substr(10, 2) < thisYear) ? "20" + nomorNIK.substr(10, 2) : "19" + nomorNIK.substr(10, 2)
        }

        const jenis_kelamin = (nomorNIK.substr(6, 2) > 40) ? "P" : "L";
        
        return {
            nik: nomorNIK,
            kode_wilayah: thisRegion,
            tanggal: thisDate,
            uniq: thisCode,
            jenis_kelamin: jenis_kelamin,
            _link: {
                _wilayah: 'http://www.kemendagri.go.id/pages/data-wilayah'
            }
        }   
    } else {
        throw new Error(`Nomor NIK harus 16 digit`);
    }
}

module.exports = {
    parseNIK
}