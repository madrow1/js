import Book from "./book.js";

const thehobbit = new Book(
    "The Hobbit",
    600,
    50,
    "$12",
    "IBN3000234",
    "01/01/1954",
    600,
    true
)

console.log("Chapters: ", thehobbit.chapters)
console.log("Pages per chapter: ", thehobbit.pagesPer_chapter())
console.log("Book age: ", thehobbit.bookAge())