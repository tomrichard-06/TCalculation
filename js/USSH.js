const doituong = document.getElementById("doituong");
const dgnlPanel = document.getElementById("panel1");

doituong.addEventListener("change", function () {
    if (doituong.value === "1" || doituong.value === "3") {
        dgnlPanel.style.display = "block";
    }
    else {
        dgnlPanel.style.display = "none";
    }
});

function clampInput(id, min, max) {
    const el = document.getElementById(id);
    el.addEventListener("input", function () {
        let value = parseFloat(this.value);
        if (isNaN(value)) {
            this.value = "";
            return;
        }
        if (value > max) this.value = max;
        if (value < min) this.value = min;
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
clampInput("bonus1", 0, 5);

function TinhDiem() {
    let DT = parseFloat(document.getElementById("doituongcs").value);
    let KV = parseFloat(document.getElementById("kv").value);
    let bonus = parseFloat(document.getElementById("bonus1").value) || 0;
    let DC = DT + KV + bonus;


    //Hoc ba ==============================================
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


    //THPT================================================
    const Mon1 = parseFloat(document.getElementById("TNMon1").value) || 0;
    const Mon2 = parseFloat(document.getElementById("TNMon2").value) || 0;
    const Mon3 = parseFloat(document.getElementById("TNMon3").value) || 0;
    //================================================

    const DGNL = parseFloat(document.getElementById("dgnl").value) * 100/1200;
    const THPT = (Mon1 + Mon2 + Mon3) *100/ 30;
    const HB = (TBMon1 + TBMon2 + TBMon3) *100/ 30;
    let DiemNL;
    if (doituong.value === "1") {
        DiemNL = DGNL * 0.45 + THPT * 0.45 + HB * 0.1 + DC;
    }
    else if (doituong.value === "3") {
        DiemNL = DGNL * 0.9 + HB * 0.1 + DC;
    }
    else {
        DiemNL = THPT * 0.9 + HB * 0.1 + DC;
    }

    if(doituong.value === "1" || doituong.value === "3") {
        document.getElementById("dgnlConverted").textContent = DGNL.toFixed(2);
    }
    document.getElementById("thptConverted").textContent = THPT.toFixed(2);
    document.getElementById("hocbaConverted").textContent = HB.toFixed(2);
    document.getElementById("totalScore").textContent = DiemNL.toFixed(2);
    document.getElementById("diemcong").textContent = bonus.toFixed(2);
    document.getElementById("diemkv").textContent = KV.toFixed(2);
    document.getElementById("uuTien").textContent = DT.toFixed(2);
    document.getElementById("bonusScore").textContent = DC.toFixed(2);
    let DC2=0;
    if(DC > 10) 
    {
        DC2 = 10;
    }
    document.getElementById("bonusScore2").textContent = DC2.toFixed(2);
}

document.getElementById("calcBtn").addEventListener("click", TinhDiem);