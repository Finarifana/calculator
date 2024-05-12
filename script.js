function calculateArithmetic() {
  var a = parseFloat(document.getElementById('input').value);
  var d = parseFloat(document.getElementById('input2').value);
  var n = parseInt(document.getElementById('n').value);

  if (isNaN(a) || isNaN(d) || isNaN(n)) {
    document.getElementById('result').innerText = "Mohon masukkan nilai yang valid untuk suku pertama, beda, dan jumlah suku.";
    return;
  }

  var result = (n / 2) * (2 * a + (n - 1) * d);
  document.getElementById('result').innerText = "Jumlah deret aritmatika: " + result;
}

function clearInputs() {
  document.getElementById('input').value = '';
  document.getElementById('input2').value = '';
  document.getElementById('n').value = '';
  document.getElementById('result').innerText = '';
}
