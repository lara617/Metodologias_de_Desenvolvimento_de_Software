function toggleVisibility(id) {
    var informacaoDiv = document.getElementById(id);
    if (informacaoDiv.style.display === "none") {
      informacaoDiv.style.display = "block";
    } else {
      informacaoDiv.style.display = "none";
    }
  }


  function toggleVisibility(elementId) {
    var element = document.getElementById(elementId);
    if (element.style.display === 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}