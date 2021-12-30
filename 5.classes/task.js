class PrintEditionItem {
    constructor (name, releaseDate, pagesCount, state, type) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
        
        fix() {
            this.state = this.state * 1.5;
        }

        set state (state) {
        this._newState = state;
        if (this.state < 0 ) {
            this._state = 0;
        } else if (this.state > 100) {
            this._newState = 100;
        } else {
            this._newState = state;
        }

        }
        get state() {
            return this._newState;
        }
    }

    class Magazine extends PrintEditionItem {
        constructor (name, releaseDate, pagesCount, state, type) {
            super (name, releaseDate, pagesCount, state, type)
            this.type = "magazine";
        }
    }

    class Book extends PrintEditionItem {
        constructor (author, name, releaseDate, pagesCount, state, type) {
            super (name, releaseDate, pagesCount, state, type)
            this.type = "book";
            this.author = author;
            
        }
    }
    class NovelBook extends Book {
        constructor (author, name, releaseDate, pagesCount, state, type) {
            super (author, name, releaseDate, pagesCount, state, type)
            this.type = "novel";
        }
    }

    class FantasticBook extends Book {
        constructor (author, name, releaseDate, pagesCount, state, type) {
            super (author, name, releaseDate, pagesCount, state, type)
            this.type = "fantastic";
        }
    }

    class DetectiveBook extends Book {
        constructor (author, name, releaseDate, pagesCount, state, type) {
            super (author, name, releaseDate, pagesCount, state, type)
            this.type = "detective";
        }
    }

    // const sherlock = new PrintEditionItem(
    //     "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    //     2019,
    //     1008
    //   );
      
    //   console.log(sherlock.releaseDate); //2019
    //   console.log(sherlock.state); //100
    //   sherlock.fix();
    //   console.log(sherlock.state); //100

    // Задача 2 
     class Library {
         constructor (name, books) {
             this.name = name;
             this.books = [];
         }

         addBook(book) {
            this.book = book;
            if (this.book.state > 30) {
             this.books.push(book) 
            }
         }

         findBookBy(type, value) {
        
            let bookIndex = this.books.find(item => item[type] === value);
            if (bookIndex === undefined) {
                return null
            }  else {
                return bookIndex
            }
              
         }

         giveBookByName(bookName) {
           
            let index = this.books.findIndex(item => item.name === bookName);
             if (index !== -1) {
                let giveBook = this.books.splice(index, 1)[0]
                 return giveBook
             } else {
                 return null
             }
             
         }

     }