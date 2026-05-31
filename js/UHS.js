document.getElementById("hasCert").addEventListener("change", function () {
    document.getElementById("certGroup").style.display = this.checked ? "block" : "none";
});

document.getElementById("hasGioi").addEventListener("change", function () {
    document.getElementById("tb3namGroup").style.display = this.checked ? "block" : "none";
});

const certMap = {
    "1": "ielts",
    "2": "toefl",
    "3": "toeflITP",
    "4": "toeic",
    "5": "vstep"
};

document.getElementById("certType").addEventListener("change", function () {
    // Ẩn hết
    Object.values(certMap).forEach(id => {
        document.getElementById(id).style.display = "none";
    });

    // Hiện cái đúng
    const selected = certMap[this.value];
    if (selected) {
        document.getElementById(selected).style.display = "block";
    }
});

document.getElementById("hasSAT").addEventListener("change", function () {
    document.getElementById("satin").style.display = this.checked ? "block" : "none";
});

function clampInput(id, min, max) {
    const el = document.getElementById(id);
    el.addEventListener("input", function () {
        if (this.value > max) this.value = max;
        if (this.value < min) this.value = min;
    });
}

clampInput("dgnl", 0, 1200);
clampInput("TNMon1", 0, 10);
clampInput("TNMon2", 0, 10);
clampInput("TNMon3", 0, 10);
clampInput("hb_mon1_10", 0, 10);
clampInput("hb_mon1_11", 0, 10);
clampInput("hb_mon1_12", 0, 10);
clampInput("hb_mon2_10", 0, 10);
clampInput("hb_mon2_11", 0, 10);
clampInput("hb_mon2_12", 0, 10);
clampInput("hb_mon3_10", 0, 10);
clampInput("hb_mon3_11", 0, 10);
clampInput("hb_mon3_12", 0, 10);
clampInput("sat1", 0, 1600);
clampInput("ielts1", 0, 9);
clampInput("toefl1", 0, 120);
clampInput("toeflITP1", 350, 677);
clampInput("toeicListening", 0, 990);
clampInput("toeicReading", 0, 490);
clampInput("vstep1", 0, 10);
clampInput("tb3nam", 0, 10);

function calculateUHS() {
    let DGNL = parseInt(document.getElementById("dgnl").value) || 0;
    DGNL = DGNL * 100 / 1200;
    document.getElementById("dgnlConverted").textContent = DGNL.toFixed(1);

    let mon1 = parseFloat(document.getElementById("TNMon1").value);
    let mon2 = parseFloat(document.getElementById("TNMon2").value);
    let mon3 = parseFloat(document.getElementById("TNMon3").value);
    let THPT = (mon1 + mon2 + mon3) * 100 / 30;
    document.getElementById("thptConverted").textContent = THPT.toFixed(1);

    const mon110 = parseFloat(document.getElementById("hb_mon1_10").value);
    const mon111 = parseFloat(document.getElementById("hb_mon1_11").value);
    const mon112 = parseFloat(document.getElementById("hb_mon1_12").value);
    const TBMon1 = (mon110 + mon111 + mon112) / 3;

    const mon210 = parseFloat(document.getElementById("hb_mon2_10").value);
    const mon211 = parseFloat(document.getElementById("hb_mon2_11").value);
    const mon212 = parseFloat(document.getElementById("hb_mon2_12").value);
    const TBMon2 = (mon210 + mon211 + mon212) / 3;

    const mon310 = parseFloat(document.getElementById("hb_mon3_10").value);
    const mon311 = parseFloat(document.getElementById("hb_mon3_11").value);
    const mon312 = parseFloat(document.getElementById("hb_mon3_12").value);
    const TBMon3 = (mon310 + mon311 + mon312) / 3;
    let HB = (TBMon1 + TBMon2 + TBMon3) * 100 / 30;
    document.getElementById("hocbaConverted").textContent = HB.toFixed(1);

    let DC = 0;
    const hasCert = document.getElementById("hasCert").checked;
    const certType = parseInt(document.getElementById("certType").value);

    if (hasCert && certType !== 0) {
        switch (certType) {
            case 0: // No certificate
                break;
            case 1: // IELTS
                const ielts = parseFloat(document.getElementById("ielts1").value);
                if (!isNaN(ielts)) DC += 3 * ielts / 9;
                break;
            case 2: // TOEFL
                const toefl = parseFloat(document.getElementById("toefl1").value);
                if (!isNaN(toefl)) DC += 3 * toefl / 120;
                break;
            case 3: // TOEFL ITP
                const toeflITP = parseFloat(document.getElementById("toeflITP1").value);
                if (!isNaN(toeflITP)) DC += 3 * toeflITP / 677;
                break;
            case 4: // TOEIC
                const toeicListening = parseFloat(document.getElementById("toeicListening").value);
                const toeicReading = parseFloat(document.getElementById("toeicReading").value);
                if (!isNaN(toeicListening) && !isNaN(toeicReading)) {
                    DC += 3 * (toeicListening / 990 + toeicReading / 490) / 2;
                }
                break;
            case 5: // VSTEP
                const vstep = parseFloat(document.getElementById("vstep1").value);
                if (!isNaN(vstep)) DC += 3 * vstep / 10;
                break;
        }
        document.getElementById("diemcongnn").textContent = DC.toFixed(1);
    }

    const hasSAT = document.getElementById("hasSAT").checked;
    const satScore = parseFloat(document.getElementById("sat1").value);
    if (hasSAT && !isNaN(satScore)) {
        DC += 3 * satScore / 1600;
        document.getElementById("diemcongSAT").textContent = (3 * satScore / 1600).toFixed(1);
    }

    const hasGioi = document.getElementById("hasGioi").checked;
    const hasChuyen = document.getElementById("hasChuyen").checked;
    if (hasGioi && hasChuyen) {
        const tb3nam = parseFloat(document.getElementById("tb3nam").value);
        if (!isNaN(tb3nam)) DC += 3 * tb3nam / 10;
        document.getElementById("diemcongHSG").textContent = (3 * tb3nam / 10).toFixed(1);
    }

    const kv = parseFloat(document.getElementById("kv").value) || 0;
    document.getElementById("diemkv").textContent = kv.toFixed(1);

    let uutien = parseFloat(document.getElementById("doituongcs").value) || 0;
    if(uutien ===1) uutien = 6.7;
    else if(uutien === 2) uutien = 3.3;
    document.getElementById("uuTien").textContent = uutien.toFixed(1);

    DC += kv + uutien;
    document.getElementById("bonusScore").textContent = DC.toFixed(1);

    let Res = DGNL * 0.4 + THPT * 0.35 + HB * 0.25 + DC;
    document.getElementById("totalScore").textContent = Res.toFixed(1);
}

document.getElementById("calcBtn").addEventListener("click", calculateUHS);