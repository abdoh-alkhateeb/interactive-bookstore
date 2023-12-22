$(document).ready(function () {
    $.ajax({
        url: 'data/books.json',
        dataType: 'json',
        success: (data) => {
            displayFeaturedBooks(data.books);
        },
        error: (xhr, status, error) => {
            console.error('Error loading books:', status, error);
        }
    });
});

function displayFeaturedBooks(books) {
    const featuredBooksContainer = $('#featured-books');

    books.sort((a, b) => a.rating < b.rating);

    for (let i = 0; i < 5; i++) {
        let book = books[i];

        featuredBooksContainer.append(`
            <div class="book">
                <img src="${book.cover}" alt="${book.title}" class="book-cover">
                <div class="book-details">
                    <h3><a href="/book.html?id=${book.id}">${book.title}</a></h3>
                    <p>Author: ${book.author}</p>
                    <p>Description: ${book.description}</p>
                    <p>Price: $${book.price.toFixed(2)}</p>
                    <p>Genre: ${book.genre}</p>
                    <p>Rating: ${book.rating}</p>
                </div>
            </div>
            <hr>
        `);
    }
}
