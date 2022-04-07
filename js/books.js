const searchButton = document.getElementById("searchButton").value;
const bookNameInput = document.getElementById("bookInput").value;
let booksNumber = document.getElementById("bookNumbers").innerHTML;
const bookContainer = document.getElementById("container").innerHTML;
// Fetch API
const search = () => {
    const url = `https://openlibrary.org/search.json?q=${bookNameInput}`
    fetch(url) 
    .then(res => res.json()) 
    .then(data => displayBooks(data.docs));
}

const displayBooks = (docs) => {
    // total book number
    console.log(docs.length)
    const totalBook = docs.length;
    booksNumber.innerText = `Total Search Results : ${totalBook}`


// Display book
docs.forEach(doc => {

    const div = document.createElement("div")
    div.classList.add("col-md-3")
    div.innerHTML = `<div class="col"> 
    <div class="card h-150 rounded border border-light border-2">
        <img src="https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg"class="card-img-top" height='400'  alt="Book Cover Not Found">
        <div class="card-body">
        <h4 class="fw-bold text-danger "> ${doc.title}</h4>
        <h6 class="text-secondary">Authors: ${doc.author_name}</h6>
        <h6 class="text-secondary">First Published:   ${doc.first_publish_year}</h6>
        </div>
    </div>
    </div>
    `
    bookContainer.appendhild(div)
})
}