// hiển thị ngày tháng năm
// function date() {
//     let yyyy = prompt("Hãy nhập năm");
//     let mm = prompt ("Hãy nhập tháng:");
//     let dd = prompt ("Hãy nhập ngày");
//     document.write("Thời gian là: " + dd + "/" + mm + "/" + yyyy)
// }

// tinh chu vi, dien tich hinh tron

// const pi = 3.14
// function tinh() {
//     let r = prompt ("Hãy nhập bán kính:");
//     let dk = 2 *r;
//     let cv = 2 * pi * r
//     let dt = r * r *pi
//     document.write("Đường kính là: " + dk + "<br\>" + "Chu vi đường tròn là: " + cv + "<br\>" + "Diện tích hình tròn là: " + dt );
// }

// bai tap tinh lai suat ngan hang
// function laisuat() {
//     let so_tien_vay = prompt("Hãy nhập số tiền vay: ");
//     let lai_suat = prompt("Hãy nhập lãi suất:");
//     let nam = prompt("Hãy nhập số năm:");
//     let so_tien_lai_don = so_tien_vay * lai_suat/100;
//     let so_tien_phai_tra = parseFloat(so_tien_vay) + so_tien_lai_don * nam;
//     document.write("Số tiền lãi phải trả là: " + so_tien_phai_tra);
// }

// thư
function thu() {
    let name = prompt ("Hãy nhập tên người nhận:");
    let address = prompt ("Hãy nhập địa chỉ");
    let date = prompt("Hãy nhập thời gian:");
    document.write(address + " ," + date + ".")
    }