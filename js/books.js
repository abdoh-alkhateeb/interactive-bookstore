$(document).ready(function () {
    $.ajax({
        url: 'data/books.json',
        dataType: 'json',
        success: (data) => {
            displayAllBooks(data.books);
        },
        error: (xhr, status, error) => {
            console.error('Error loading books:', status, error);
        }
    });
});

function displayAllBooks(books) {
    const allBooksContainer = $('#all-books');

    $.each(books, (index, book) => {
        allBooksContainer.append(`
            <div class="book">
                <img src="${book.cover}" alt="${book.title}" class="book-cover">
                <div class="book-details">
                    <h3><a href="/book.html?id=${book.id}">${book.title}</a></h3>
                    <p>Author: ${book.author}</p>
                    <p>Description: ${book.description}</p>
                </div>
            </div>
            <hr>
        `);
    });
}
