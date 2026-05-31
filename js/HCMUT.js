const doituong = document.getElementById("doituong");
const dgnlPanel = document.getElementById("panel");

doituong.addEventListener("change", function () {

  if (doituong.value === "1") {
    dgnlPanel.style.display = "block";
  }
  else {
    dgnlPanel.style.display = "none";
  }
});

function TinhDiem() {
  let DT = parseFloat(document.getElementById("doituongcs").value);
  let KV = parseFloat(document.getElementById("kv").value);
  let bonus = parseFloat(document.getElementById("bonus1").value) || 0;
  const DC = DT + KV + bonus;


  //Hoc ba ==============================================
  const toan10 = parseFloat(document.getElementById("hb_toan_10").value);
  const toan11 = parseFloat(document.getElementById("hb_toan_11").value);
  const toan12 = parseFloat(document.getElementById("hb_toan_12").value);
  let TBToan = (toan10 + toan11 + toan12) / 3;

  const mon210 = parseFloat(document.getElementById("hb_mon2_10").value);
  const mon211 = parseFloat(document.getElementById("hb_mon2_11").value);
  const mon212 = parseFloat(document.getElementById("hb_mon2_12").value);
  const TBMon2 = (mon210 + mon211 + mon212) / 3;

  const mon310 = parseFloat(document.getElementById("hb_mon3_10").value);
  const mon311 = parseFloat(document.getElementById("hb_mon3_11").value);
  const mon312 = parseFloat(document.getElementById("hb_mon3_12").value);
  const TBMon3 = (mon310 + mon311 + mon312) / 3;


  //THPT================================================
  let Mon1 = parseFloat(document.getElementById("TNToan").value);
  const Mon2 = parseFloat(document.getElementById("TNMon2").value);
  const Mon3 = parseFloat(document.getElementById("TNMon3").value);
  Mon1 *= 2;
  //================================================

  let Tv = 0;
  let Anh = 0;
  let Toan = 0;
  let TDKH = 0;
  if (doituong.value === "1") {
    Tv = parseInt(document.getElementById("dgnl_viet").value);
    Anh = parseInt(document.getElementById("dgnl_anh").value);
    Toan = parseInt(document.getElementById("dgnl_toan").value);
    TDKH = parseInt(document.getElementById("dgnl_tdkh").value);
    Toan *= 2;
  }

  const DGNL = (Tv + Anh + Toan + TDKH) / 15;
  const THPT = (Mon1 + Mon2 + Mon3) / 4 * 10;
  const HB = (TBToan * 2 + TBMon2 + TBMon3) / 4 * 10;
  let DiemNL;
  if (doituong.value === "1") {
    DiemNL = DGNL * 0.7 + THPT * 0.2 + HB * 0.1 + DC;
  }
  else {
    DiemNL = THPT * 0.75 * 0.7 + THPT * 0.2 + HB * 0.1 + DC;
  }

  document.getElementById("dgnlConverted").textContent = DGNL.toFixed(2);
  document.getElementById("thptConverted").textContent = THPT.toFixed(2);
  document.getElementById("hocbaConverted").textContent = HB.toFixed(2);
  document.getElementById("totalScore").textContent = DiemNL.toFixed(2);
  document.getElementById("diemcong").textContent = bonus.toFixed(2);
  document.getElementById("diemkv").textContent = KV.toFixed(2);
  document.getElementById("uuTien").textContent = DT.toFixed(2);
  document.getElementById("bonusScore").textContent = DC.toFixed(2);
}

document.getElementById("calcBtn").addEventListener("click", TinhDiem);