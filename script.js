

function Book(nameBook, author, yearIzdatel, numberOfBook,idBook,numberOfPages){
            this.nameBook = nameBook;
            this.author = author;
            this.izdatel = 'АВЕРСЕВ';
            this.yearIzdatel = yearIzdatel;
            this.numberOfBook = numberOfBook;
            this.idBook = idBook;
            this.numberOfPages = numberOfPages;
            this.getnumberOfPages = function(){
                return 'Число страниц книги ' + nameBook + ' = '+ numberOfPages;
            }
        
        }
var Book_1 = new Book('"Маленький Принц"', 'Антуан де Сент-Экзюпери', 'Год выпуска 2002', 'Экземпляры=10000', 'ID2050263', '186стр.');
console.log(Book_1.nameBook +' ' + Book_1.author);

var Book_2 = new Book('"Шантарам"', 'Грегори Дэвид Робертс', 'Год выпуска 2010', 'Экземпляры=20000', 'ID77777777', '210стр.');
console.log(Book_2.nameBook + ' ' +Book_2.author);

let body = document.querySelector('body');

let Book_1_p = document.createElement('div');
Book_1_p .className = "books"
Book_1_p.innerHTML = Book_1.getnumberOfPages();
body.append(Book_1_p);



let Book_2_p = document.createElement('div');
Book_2_p .className = "books"
Book_2_p.innerHTML = Book_2.getnumberOfPages();
body.append(Book_2_p); 


function Journal(yearVipusk, numberOfVipusk, idBook, numberOfPages){
    this.izdatel = "Аверсев";
    this.yearVipusk = yearVipusk;
    this.numberOfVipusk = numberOfVipusk;
    this.idBook = idBook;
    this.numberOfPages = numberOfPages; 
    this.getnumberOfPages = function(){
        if (numberOfPages >= 32){
            alert('Количество страниц не должно быть больше 32!!!');
            pagesYear = '';
        } else { pagesYear = 'Количество страниц:' + numberOfPages + '; ' + yearVipusk + ' Год издательства';
        }
        return pagesYear;
    }
} 

let Journal_1= new Journal(2018, '№38', 'ID20156', '33');
console.log(Journal_1.getnumberOfPages());

let Journal_1_p = document.createElement('div');
Journal_1_p .className = "journals"
Journal_1_p.innerHTML = Journal_1.getnumberOfPages();
body.append(Journal_1_p); 

let Journal_2= new Journal(2020, '№1', 'ID22222222', '20');
console.log(Journal_2.getnumberOfPages());

let Journal_2_p = document.createElement('div');
Journal_2_p .className = "journals"
Journal_2_p.innerHTML = Journal_2.getnumberOfPages();

body.append(Journal_2_p);
         
       