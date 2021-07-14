// hiển thị ngày tháng năm
function date() {
    let yyyy = prompt("Hãy nhập năm");
    let mm = prompt ("Hãy nhập tháng:");
    let dd = prompt ("Hãy nhập ngày");
    document.write("Thời gian là: " + dd + "/" + mm + "/" + yyyy)
}

// tinh chu vi, dien tich hinh tron

const pi = 3.14
function tinh() {
    let r = prompt ("Hãy nhập bán kính:");
    let dk = 2 *r;
    let cv = 2 * pi * r
    let dt = r * r *pi
    document.write("Đường kính là: " + dk + "<br\>" + "Chu vi đường tròn là: " + cv + "<br\>" + "Diện tích hình tròn là: " + dt );
}