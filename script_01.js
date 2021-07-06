const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];

const displayFirstnamesLastnames = (arr) => {
  let newArr = [];
  return newArr = arr.map(x => x = { first: x.first, last: x.last });
  };
console.log(displayFirstnamesLastnames(entrepreneurs));

const replaceBirthdayByAge = (arr) => {
  let newArr = [];
  let nd = new Date();
  let year = Number(nd.getFullYear());
  return newArr = arr.map(
    x => {
      let birthYear = Number(x.year);
      let age = year - birthYear;
      return x = { first: x.first, last: x.last, age: age };
    });
};
console.log(replaceBirthdayByAge(entrepreneurs));

const replaceFirstKeysName = (arr) => {
  let newArr = [];
  return newArr = arr.map(x => x = { firstname: x.first, lastname: x.last, year: x.year });
};
console.log(replaceFirstKeysName(entrepreneurs));

const birthSeventies = (arr) => {
  let newArr = [];
  return newArr = arr.filter(x => x.year >= 1970 && x.year <= 1979);
};
console.log(birthSeventies(entrepreneurs));