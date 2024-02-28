let imgBox = document.querySelector('#img-box');
let qrImage = document.querySelector('#qrImage');
let qrText = document.querySelector('#qrText');

function generateQR(){
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
}