/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/
console.log("----------------------------------- EX 1 ---------------------------------------");
const strconCatenator = (first2, last3) => {
  if (typeof first2 !== "string" || typeof last3 !== "string") {
    console.log(
      "Please, check that both of the given parameters are type:string, otherwise the function won't work..."
    );
  } else {
    const strConcatenated = first2.slice(0, 2) + last3.slice(-3);
    return strConcatenated.toLocaleUpperCase();
  }
};

const strConcatenated = strconCatenator("Santo", "Parto");

console.log(strConcatenated);

/* ESERCIZIO 2
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/
console.log("----------------------------------- EX 2 ---------------------------------------");
const arrayGenerator = () => {
  const newArray = [];
  for (let i = 0; i < 11; i++) {
    newArray.push(Math.floor(Math.random() * 100));
  }
  return newArray;
};

const requiredArray = arrayGenerator();
console.log(requiredArray);

/* ESERCIZIO 3
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici (suggerimento: il metodo filter può aiutare)
*/
console.log("----------------------------------- EX 3 ---------------------------------------");
const arrayOrder = requiredArray.filter((even) => {
  const evenArray = even % 2 === 0;
  return evenArray;
});

console.log(arrayOrder);

/* ESERCIZIO 4
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
console.log("----------------------------------- EX 4 ---------------------------------------");
const arrayExample = [15, 49, 75, 23, 14, 0, 58];

function sumArray(array) {
  let sum = 0;
  array.forEach((item) => {
    sum += item;
  });

  return sum;
}

const sum = sumArray(arrayExample);
console.log(sum);

/* ESERCIZIO 5
  Scrivi una funzione per sommare i numeri contenuti in un array (usare REDUCE)
*/
console.log("----------------------------------- EX 5 ---------------------------------------");
const sumArray2 = requiredArray.reduce((accumulator, element) => {
  return accumulator + element;
});

console.log(sumArray2);

/* ESERCIZIO 6
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/
console.log("----------------------------------- EX 6 ---------------------------------------");
const arrayPlus = function (n) {
  const arrayPlus = [];
  for (let i = 0; i < arrayExample.length; i++) {
    arrayPlus.push(arrayExample[i] + n);
  }
  return arrayPlus;
};

const arrayIncr = arrayPlus(5);
console.log(arrayIncr);

/* ESERCIZIO 8
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
console.log("----------------------------------- EX 8 ---------------------------------------");
const arrayExample2 = ["Monitor", "Scheda video", "Webcam", "Ventole", "Tastiera", "Mouse"];

const arrayLength = arrayExample2.map((element) => {
  let i = element.length;
  return i;
});
console.log(arrayLength);

/* ESERCIZIO 9
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/
console.log("----------------------------------- EX 9 ---------------------------------------");
const oddIdentifier = function () {
  const oddArray = [];
  for (let i = 0; i < 100; i++) {
    if (i % 2 !== 0) {
      oddArray.push(i);
    }
  }
  return oddArray;
};

const oddArray = oddIdentifier();
console.log(oddArray);

// OPPURE:
console.log("----------------------------------- alternativa ---------------------------------------");
const numberArray = [];

for (let i = 0; i < 100; i++) {
  numberArray.push(i);
}

const orderedArray = numberArray.filter((element) => {
  const oddArray2 = element % 2 == !0;
  return oddArray2;
});

oddArray2 = orderedArray;
console.log(oddArray2);

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 10
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/

const oldFilm = (array) => {
  const oldestFilm = array.filter((element) => element.Year == Math.min(...movies.map((item) => item.Year)));
  console.log(oldestFilm);
};

oldFilm(movies);

/* ESERCIZIO 11
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/
console.log("----------------------------------- EX 11 ---------------------------------------");
const howMany = function () {
  const arrayMoviesLength = movies.length;
  return arrayMoviesLength;
};

const arrayMoviesLength = howMany();
console.log(arrayMoviesLength);

/* ESERCIZIO 12
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/
console.log("----------------------------------- EX 12 ---------------------------------------");

const titleExtractor = function () {
  const movieTitle = [];
  for (let i = 0; i < movies.length; i++) {
    movieTitle.push(movies[i].Title);
  }
  return movieTitle;
};

const movieTitle = titleExtractor();
console.log(movieTitle);

/* ESERCIZIO 13
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/
console.log("----------------------------------- EX 13 ---------------------------------------");

const movie2000 = function () {
  const recentMovies = [];
  for (let i = 0; i < movies.length; i++) {
    switch (true) {
      case movies[i].Year < 2000:
        break;
      case movies[i].Year >= 2000:
        recentMovies.push(movies[i]);
        break;
    }
  }
  return recentMovies;
};

const recentMovies = movie2000();
console.log(recentMovies);

/* ESERCIZIO 14
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/
console.log("----------------------------------- EX 14---------------------------------------");

const filmFinder =
  /* ESERCIZIO 15
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/
  console.log("----------------------------------- EX 15 ---------------------------------------");

const moviesCalculator = function () {
  const allYears = [];
  for (let i = 0; i < movies.length; i++) {
    allYears.push(parseInt(movies[i].Year));
  }
  let sum2 = 0;
  allYears.forEach((item) => {
    sum2 += item;
  });

  return sum2;
};

const allMoviesYears = moviesCalculator();
console.log(allMoviesYears);
