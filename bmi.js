function kiem_tra() {
    let can_nang = document.getElementById("can_nang").value;
    let chieu_cao = document.getElementById("chieu_cao").value;
    let bmi = can_nang / (Math.pow(chieu_cao, 2))
    let result = ""

    if (bmi < 16)
    result = "Gầy cấp độ 3"
    else if (bmi < 17)
    result = "Gầy cấp độ 2"
    else if (bmi < 18.5)
    result = "Gầy cấp độ 1"
    else if (bmi < 25)
    result = "Bình thường"
    else if (bmi < 30)
    result = "Thừa cân"
    else if (bmi < 35)
    result = "Thừa cân"
    else
    result = "Béo phì"
    document.getElementById("aaaa").innerHTML = "chỉ số BMI là: " + bmi + "."  + result
}