const searchButton = document.getElementById("searchButton")
const bookNameInput = document.getElementById("bookInput")
const booksNumber = document.getElementById("bookNumbers")
const bookContainer = document.getElementById("container")
const errorText = document.getElementById("errorText")
// Fetch API
searchButton.addEventListener('click', function () {
    const bookName = bookNameInput.value
    if (bookName === ''){
        errorText.innerText = "Please write name of a book!";
        bookContainer.innerHTML = '';
        booksNumber.innerHTML = '';
        return errorText;
    }
    else {
        const url = ` https://openlibrary.org/search.json?q=${bookName}`
        bookContainer.innerHTML = '';
        errorText.innerText ='';
        booksNumber.innerHTML = '';
        fetch(url) 
            .then(res => res.json()) 
            .then(data => displayBooks(data.docs));
    }
})

const displayBooks = (docs) => {
    // total book number
    console.log(docs.length)
    const totalBook = docs.length;
    booksNumber.innerText = `Total Search Results : ${totalBook}`
    if (docs.length === 0) {
        errorText.innerText = 'No book found'
        bookNameInput.value = ''
        return errorText
      } else {
        errorText.innerText = "";
      }

// Display book
docs.forEach(doc => {

    const div = document.createElement("div")
    div.classList.add("col-md-3")
    div.innerHTML = `
    <div class="col"> 
                <div class="card h-150 rounded border border-secondary border-2">
                    <img src="https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg"class="card-img-top" height='400'  alt="Book Cover Not Found">
                    <div class="card-body">
                    <h4 class="fw-bold text-dark "> ${doc.title}</h4>
                    <h6 class="text-danger">Authors: ${doc.author_name}</h6>
                    <h6 class="text-danger">First Published:   ${doc.first_publish_year}</h6>
                    <h6 class="text-secondary">Language:  ${doc.language}</h6>
                    <h6 class="text-secondary">Genre:  ${doc.type}</h6>
                    </div>
                </div>
    </div>
    `
    bookContainer.appendChild(div);
    bookNameInput.value = '';
})
}