const clickableText = document.getElementById('clickableText');

clickableText.addEventListener('click', function() {
  this.classList.toggle('clicked');
});
