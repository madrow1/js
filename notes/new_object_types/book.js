class Book{
    constructor(
        title,
        pages,
        chapters,
        cost,
        isbn,
        purchase_date,
        currentPage,
        finishedReading
    ) {
        this.title = title;
        this.pages = pages;
        this.chapters = chapters;
        this.cost = cost;
        this.isbn = isbn; 
        this.purchase_date = purchase_date;
        this.currentPage = currentPage;
        this.finishedReading = finishedReading;
    }
    bookAge(){
        let now = new Date();
        let written = new Date(this.purchase_date);
        let elapsed = now - written;
        let daysold = Math.floor(elapsed/(1000 * 3600 * 24))
        return daysold;
    }
    pagesPer_chapter(pages,chapters){
        return Number(pages) / Number(chapters)
    }
    updatecurrentpage(newpage){
        this.currentPage = newpage;
    }
    updateReadStatus(read){
        this.currentPage = read;
    }
}

export default Book; 