//your JS code here. If required.
document.getElementById('submit').addEventListener('click', addBook);

function addBook(e) {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const isbn = document.getElementById('isbn').value;

  if (title === '' || author === '' || isbn === '') {
    alert('Please fill all fields');
    return;
  }

  const tbody = document.getElementById('book-list');

  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${title}</td>
    <td>${author}</td>
    <td>${isbn}</td>
    <td><button class="delete">X</button></td>
  `;

  tbody.appendChild(row);

  clearFields();
}

// Delete book
document.getElementById('book-list').addEventListener('click', function (e) {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.parentElement.remove();
  }
});

// Clear input fields
function clearFields() {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}
