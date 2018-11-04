$(document).ready(function () {
    $('#aes-encrypt-copy').click(function () {
        $('#aes-decrypt-text').val($('#aes-encrypt-text-result').val());
        return false;
    });
    $('#aes-pass-copypass').click(function () {
        $('#aes-decrypt-pass').val($('#aes-encrypt-pass').val());
        return false;
    });
    $('#aes-compare').click(function () {
        if ($('#aes-encrypt-text').val() === $('#aes-decrypt-text-result').val()) {
            alert("OK: Equal!");
        } else {
            alert("ERROR: NOT Equal!");
        }          
        return false;
    });
    $('#aes-reset').click(function () {
        $('#aes-encrypt-text').val("");
        $('#aes-encrypt-pass').val("");
        $('#aes-encrypt-text-result').val("");
        $('#aes-decrypt-text').val("");
        $('#aes-decrypt-pass').val("");
        $('#aes-decrypt-text-result').val("");
        return false;
    });
    $('#aes-encrypt-submit').click(function () {
        var text = $('#aes-encrypt-text').val();
        if (text.length) {
            var pass = $('#aes-encrypt-pass').val();
            var encrypted = CryptoJS.AES.encrypt(text, pass);
            $('#aes-encrypt-text-result').val(encrypted);
        }
        return false;
    });
    $('#aes-decrypt-submit').click(function () {
        var text = $('#aes-decrypt-text').val();
        if (text.length) {
            var pass = $('#aes-decrypt-pass').val();
            var decrypted = CryptoJS.AES.decrypt(text, pass);
            var utf8 = CryptoJS.enc.Utf8.stringify(decrypted);
            $('#aes-decrypt-text-result').val(utf8);
        }
        return false;
    });
});

