window.onload = function() {
var loading = document.querySelector('.loading');
  loading.style.opacity = "0";

setInterval(function () {
  loading.style.display = "none";
}, 4000);
}