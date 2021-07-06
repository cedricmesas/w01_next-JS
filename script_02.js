const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];

  const displayBookList = (arr) => {
    let newArr = [];
    return newArr = arr.map(x => x = { title: x.title });
    };
  console.log(displayBookList(books));

const rentedBook = (arr) => {
  let rented = true;
  arr.filter(x => {
    if (x.rented == 0) return rented = false;
  });
  return rented;
};
console.log(rentedBook(books));

const mostBorrowBook = (arr) => {
  let newArr = 0;
  arr.filter(x => {
    if (x.rented > newArr) newArr = x.rented;
  });
  return newArr;
};
console.log(mostBorrowBook(books));

const lessBorrowBook = (arr) => {
  let newArr = 999;
  arr.filter(x => {
    if (x.rented < newArr) newArr = x.rented;
  });
  return newArr;
};
console.log(lessBorrowBook(books));

const deleteBook = (arr) => {
  let newArr = [];
  return newArr = arr.filter(x => x.id != 133712);
};
console.log(deleteBook(books));