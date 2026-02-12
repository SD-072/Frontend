// ================================================================
// Get your shorts on - this is an array workout!
// ## Array Cardio (Script with Solutions & Explanations)
// ================================================================

// ---------------------------------------------------------------
// Data Basis
// ---------------------------------------------------------------
const inventors = [
  {
    first: "Albert",
    last: "Einstein",
    year: 1879,
    passed: 1955,
    categories: ["man", "physicist"],
  },
  {
    first: "Isaac",
    last: "Newton",
    year: 1643,
    passed: 1727,
    categories: ["man", "mathematician"],
  },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  {
    first: "Marie",
    last: "Curie",
    year: 1867,
    passed: 1934,
    categories: ["woman", "physicist"],
  },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  {
    first: "Katherine",
    last: "Blodgett",
    year: 1898,
    passed: 1979,
    categories: ["woman", "physicist"],
  },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  {
    first: "Lise",
    last: "Meitner",
    year: 1878,
    passed: 1968,
    categories: ["woman", "physicist"],
  },
  {
    first: "Hanna",
    last: "Hammarström",
    year: 1829,
    passed: 1909,
    categories: ["woman", "inventor"],
  },
];

const boulevardsInParis = [
  "Boulevard Auguste-Blanqui",
  "Boulevard Barbès",
  "Boulevard Beaumarchais",
  "Boulevard de l'Amiral-Bruix",
  "Boulevard Mortier",
  "Boulevard Poniatowski",
  "Boulevard Soult",
  "Boulevard des Capucines",
  "Boulevard de la Chapelle",
  "Boulevard de Clichy",
  "Boulevard du Crime",
  "Boulevard du Général-d'Armée-Jean-Simon",
  "Boulevard Haussmann",
  "Boulevard de l'Hôpital",
  "Boulevard des Italiens",
  "Boulevard Lefebvre",
  "Boulevard de la Madeleine",
  "Boulevard de Magenta",
  "Boulevard Malesherbes",
  "Boulevard Marguerite-de-Rochechouart",
  "Boulevard Montmartre",
  "Boulevard du Montparnasse",
  "Boulevard Raspail",
  "Boulevard Richard-Lenoir",
  "Boulevard Saint-Germain",
  "Boulevard Saint-Michel",
  "Boulevard de Sébastopol",
  "Boulevard de Strasbourg",
  "Boulevard du Temple",
  "Boulevard Voltaire",
  "Boulevard de la Zone",
];

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
  "skateboard",
];

const family = [
  { name: "Lily", year: 2009 },
  { name: "Leah", year: 2011 },
  { name: "Liv", year: 2020 },
  { name: "Lydia", year: 2015 },
];

const currentYear = new Date().getFullYear();

// ---------------------------------------------------------------
// Array.prototype.filter()
// 1. Filter the list of inventors to retrieve only those born between 1500 and 1600
// Expected output: an array containing two inventors: Galileo Galilei and Johannes Kepler
// ---------------------------------------------------------------
const born1500to1600 = inventors.filter((inv) => inv.year >= 1500 && inv.year < 1600);
console.log("1) Born 1500–1600:", born1500to1600);
// * Explanation: filter keeps only elements that fulfill the condition (return true).

// ---------------------------------------------------------------
// Array.prototype.filter()
// 2. Filter the list of inventors to retrieve only the ones that have the "mathematician" category
// Expected output: an array containing only one inventor: Isaac Newton
// ---------------------------------------------------------------
const mathematicians = inventors.filter(
  (inv) => Array.isArray(inv.categories) && inv.categories.includes("mathematician"),
);
console.log("2) Category mathematician:", mathematicians);
// ! Warning: Not all objects have 'categories'; that's why we need the Array check.

// ---------------------------------------------------------------
// Array.prototype.filter()
// 3. Filter the list of inventors to retrieve only the ones with the category === 'physicist' AND 'man'
// Expected: only Albert Einstein
// ---------------------------------------------------------------
const malePhysicists = inventors.filter(
  (inv) =>
    Array.isArray(inv.categories) &&
    inv.categories.includes("physicist") &&
    inv.categories.includes("man"),
);
console.log("3) Male physicists:", malePhysicists);

// ---------------------------------------------------------------
// Array.prototype.map()
// 4. Give us an array filled with the inventors first and last names
// Expected: ["Albert Einstein", "Isaac Newton", ...]
// ---------------------------------------------------------------
const fullNames = inventors.map((inv) => `${inv.first} ${inv.last}`);
console.log("4) Full names:", fullNames);
// * Explanation: map transforms each object into a string.

// ---------------------------------------------------------------
// Array.prototype.map()
// 5. Give us an array filled only with the inventors emails
// the emails should be lowercase firstName + date of birth @ inventor.com
// Example: "albert1879@inventor.com"
// ---------------------------------------------------------------
const emails = inventors.map((inv) => `${inv.first.toLowerCase()}${inv.year}@inventor.com`);
console.log("5) Emails:", emails);

// ---------------------------------------------------------------
// Array.prototype.sort()
// 6. Sort the inventors by birthdate, youngest to oldest
// (the one whose birth year is closer to us on top => higher year first)
// Expected: from "Katherine Blodgett" -> to "Nicolaus Copernicus"
// ---------------------------------------------------------------
const youngestToOldest = [...inventors].sort((a, b) => b.year - a.year);
console.log("6) Youngest → Oldest (by year desc):", youngestToOldest);
// * Explanation: Sorting by birth year in descending order.

// ---------------------------------------------------------------
// ~~~ OPTIONAL ~~~
// Array.prototype.reduce()
// 7. How many years did all the inventors live all together?
// ---------------------------------------------------------------
const totalYearsLived = inventors.reduce((sum, inv) => {
  if (typeof inv.year === "number" && typeof inv.passed === "number") {
    return sum + (inv.passed - inv.year);
  }
  return sum;
}, 0);
console.log("7) Total years lived (all inventors):", totalYearsLived);
// * Explanation: reduce accumulates the years lived.

// ---------------------------------------------------------------
// Array.prototype.sort()
// 8. Sort the inventors by years lived (both ascending and descending)
// ---------------------------------------------------------------
const byYearsLivedAsc = [...inventors].sort((a, b) => {
  const aYears = (a.passed ?? a.year) - a.year;
  const bYears = (b.passed ?? b.year) - b.year;
  return aYears - bYears;
});
const byYearsLivedDesc = [...byYearsLivedAsc].reverse();

console.log("8a) By years lived (asc):", byYearsLivedAsc);
console.log("8b) By years lived (desc):", byYearsLivedDesc);

// ---------------------------------------------------------------
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// Array.prototype.filter()
// 9. Create a list of Boulevards in Paris that contain 'de' anywhere in the name
// ---------------------------------------------------------------
const boulevardsWithDe = boulevardsInParis.filter((name) => name.includes("de"));
console.log("9) Boulevards containing 'de':", boulevardsWithDe);
// * Explanation: includes finds substrings (case-sensitive).

// ---------------------------------------------------------------
// Array.prototype.sort()
// 10. Sort the people alphabetically by last name
// Note: Format: "LastName, FirstName"
// ---------------------------------------------------------------
const peopleSortedByLast = [...people].sort((a, b) => {
  const [aLast] = a.split(",").map((s) => s.trim());
  const [bLast] = b.split(",").map((s) => s.trim());
  return aLast.localeCompare(bLast);
});
console.log("10) People by last name (A→Z):", peopleSortedByLast);

// ---------------------------------------------------------------
// (Addition, typical in Array Cardio Sets)
// 11. Count the instances of each item in 'data' (reduce frequencies)
// ---------------------------------------------------------------
const transportCount = data.reduce((acc, item) => {
  acc[item] = (acc[item] || 0) + 1;
  return acc;
}, {});
console.log("11) Transport counts:", transportCount);
// * Explanation: Classic frequency counter using reduce.

// ---------------------------------------------------------------
// Array.prototype.some()
// 12. Is at least one person 18 years old?
// ---------------------------------------------------------------
const isSomeone18Plus = family.some((p) => currentYear - p.year >= 18);
console.log("12) At least one person ≥ 18?", isSomeone18Plus);
// * Explanation: some returns true if at least one element fulfills the condition.

// ---------------------------------------------------------------
// Array.prototype.every
// 13. Do all names of the family members start with the letter L?
// ---------------------------------------------------------------
const allStartWithL = family.every((p) => p.name.startsWith("L"));
console.log("13) Do all names start with 'L'?", allStartWithL);
