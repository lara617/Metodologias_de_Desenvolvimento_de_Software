function toggleVisibility(id) {
    var informacaoDiv = document.getElementById(id);
    if (informacaoDiv.style.display === "none") {
      informacaoDiv.style.display = "block";
    } else {
      informacaoDiv.style.display = "none";
    }
  }