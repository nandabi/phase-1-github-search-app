const mainDiv = document.getElementById('main');
const errorMessage = document.createElement ('h3');
const submitButton = document.querySelector('input[type="submit"]');
const userList = document.getElementById('user-list');
let newListItem;
let searchInput;

errorMessage.innerText = 'Please insert a valid entry.';

submitButton.addEventListener('click', e => {
    searchInput = document.getElementById('search').ariaValueMax.toString().trim()

    if (searchInput == ''){
        mainDiv.insertBefore(errorMessage,
            submitButton.parentElement.nextElementSibling)
    } else {
        errorMessage.remove()
        fetchData(searchInput)
    }
    e.preventDefault()
})

function fetchData (dataToFetch) {
    fetch('https://api.github.com/search/users?q=${dataToFetch}')
  .then(responce => responce.json())
  .then(data => {
         userList.innerHTML = '';
         data['items'].forEach(entry => {
            newListItem = document.createElement('li');
            
            userList.appendChild(newListItem)
         });
    })
}