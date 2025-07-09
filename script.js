
function showSection(id) {
  document.getElementById('catalog').classList.add('hidden');
  document.getElementById('sell').classList.add('hidden');
  document.getElementById(id).classList.remove('hidden');
}

document.getElementById('sellForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Товар опубликован (пока без сохранения).');
});
