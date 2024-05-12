function calculateArithmetic() {
  var a = parseFloat(document.getElementById('input').value);
  var d = parseFloat(document.getElementById('input2').value);
  var n = parseInt(document.getElementById('n').value);

  if (isNaN(a) || isNaN(d) || isNaN(n)) {
    document.getElementById('result').innerText = "Mohon masukkan nilai yang valid untuk suku pertama, beda, dan jumlah suku.";
    return;
  }

  var result = 0;
  for (var i = 0; i < n; i++) {
    result += a + i * d;
  }

  document.getElementById('result').innerText = "Jumlah baris aritmatika: " + result;
}

function calculateGeometric() {
  var a = parseFloat(document.getElementById('input').value);
  var r = parseFloat(document.getElementById('input2').value);
  var n = parseInt(document.getElementById('n').value);

  if (isNaN(a) || isNaN(r) || isNaN(n)) {
    document.getElementById('result').innerText = "Mohon masukkan nilai yang valid untuk suku pertama, rasio, dan jumlah suku.";
    return;
  }

  var result = 0;
  for (var i = 0; i < n; i++) {
    result += a * Math.pow(r, i);
  }

  document.getElementById('result').innerText = "Jumlah baris geometri: " + result;
}

function clearInputs() {
  document.getElementById('input').value = '';
  document.getElementById('input2').value = '';
  document.getElementById('n').value = '';
  document.getElementById('result').innerText = '';
}
