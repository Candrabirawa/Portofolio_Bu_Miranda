function whatsApp(){
    var nama = document.getElementById('name').value;
    var subject = document.getElementById('subject').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('number').value;
    var message = document.getElementById("message").value;

    var walink = "https://wa.me/6281387798583?text="
    + "Nama :" + nama + "%0a"
    + "Email : " + email + "%0a"
    + "Nomor Telepon : " + phone + "%0a"
    + "Subject : " + subject  + "%0a"
    + "Pesan : " + message;

    window.open(walink, '_blank').focus();
}