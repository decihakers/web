let mariam = document.getElementById("mariam");

function redirect(ele, name) {
  ele.onclick = function () {
    window.location.href = `https://decihakers.github.io/web/pages/doctors/${name}.html`;
  };
}

redirect(mariam, "mariam");
