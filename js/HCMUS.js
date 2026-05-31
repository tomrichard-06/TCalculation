function TinhDiem() {
    let perDgnl = parseFloat(document.getElementById("perdgnl").value);
    let perThpt = parseFloat(document.getElementById("perthpt").value);
    perDgnl /= 100;
    perThpt /= 100;
    let perHb1 = 1 - perDgnl;
    let perHb2 = 1 - perThpt;

    let dgnl = parseInt(document.getElementById("dgnl").value) || 0;
    let HL1 = (dgnl / 1200) * 30;
    document.getElementById("dgnlConverted").textContent = HL1.toFixed(2);

    let mon1 = parseFloat(document.getElementById("TNMon1").value);
    let mon2 = parseFloat(document.getElementById("TNMon2").value);
    let mon3 = parseFloat(document.getElementById("TNMon3").value);
    let HL2 = mon1 + mon2 + mon3;
    document.getElementById("thptConverted").textContent = HL2.toFixed(2);

    const toan10 = parseFloat(document.getElementById("hb_mon1_10").value);
    const toan11 = parseFloat(document.getElementById("hb_mon1_11").value);
    const toan12 = parseFloat(document.getElementById("hb_mon1_12").value);
    const TBToan = (toan10 + toan11 + toan12) / 3;

    const mon210 = parseFloat(document.getElementById("hb_mon2_10").value);
    const mon211 = parseFloat(document.getElementById("hb_mon2_11").value);
    const mon212 = parseFloat(document.getElementById("hb_mon2_12").value);
    const TBMon2 = (mon210 + mon211 + mon212) / 3;

    const mon310 = parseFloat(document.getElementById("hb_mon3_10").value);
    const mon311 = parseFloat(document.getElementById("hb_mon3_11").value);
    const mon312 = parseFloat(document.getElementById("hb_mon3_12").value);
    const TBMon3 = (mon310 + mon311 + mon312) / 3;
    let HL3 = TBToan + TBMon2 + TBMon3;

    let HLDGNL = HL1 * perDgnl + HL3 * perHb1;
    let HLTHPT = HL2 * perThpt + HL3 * perHb2;

    // Display the results
    document.getElementById("hocbaConverted").textContent = HL3.toFixed(2);

    let kv = parseFloat(document.getElementById("kv").value);
    let doituong = parseFloat(document.getElementById("doituongcs").value);
    let giaithuong = parseFloat(document.getElementById("bonus1").value) || 0;
    let DC = kv + doituong + giaithuong;

    if(DC > 1.5) DC = 1.5; // Giới hạn điểm cộng tối đa

    document.getElementById("diemkv").textContent = kv.toFixed(2);
    document.getElementById("uuTien").textContent = doituong.toFixed(2);
    document.getElementById("diemcong").textContent = giaithuong.toFixed(2);
    document.getElementById("bonusScore").textContent = DC.toFixed(2);

    let totalScore = Math.max(HLDGNL, HLTHPT) + DC;
    document.getElementById("totalScore").textContent = totalScore.toFixed(2);
}

document.getElementById("calcBtn").addEventListener("click", TinhDiem);
