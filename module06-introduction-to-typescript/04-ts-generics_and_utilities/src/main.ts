// const stringArray: string[] = ["1", "2", "3", "4"];
const stringArray: Array<string> = ["1", "2", "3", "4"];
// const stringArray: string[] = ["1", "2", "3", "4"];

// fetch("https://duckpond-89zn.onrender.com/wild-ducks");

type Duck = {
  _id: string;
  name: string;
  imgUrl: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

// A generic function to fetch data - it expects a URL and a type <T>
const fetchData = async <T>(url: string, options?: RequestInit): Promise<T> => {
  const res = await fetch(url, options);

  if (!res.ok) throw new Error("Fetch failed");

  return res.json();
};

const ducks = await fetchData<Duck[]>("https://duckpond-89zn.onrender.com/wild-ducks");

// ducks.forEach((duck) => console.log(duck.name, duck.imgUrl));

// const json = await fetchData<JSON[]>("https://jsonplaceholder.com");

type Movie = {
  original_title: string;
  poster_path: string;
  id: number;
};

type ApiResponse<T> = {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
};

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZTQxYjQyOWE1Yjc5Y2NlNWU5ZDVlOGRkN2I1ZTBiZiIsIm5iZiI6MTc1MjA1NTI0My40MDYwMDAxLCJzdWIiOiI2ODZlM2RjYjQwMjcyOTQ2MTY1MWVhZWMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.mOYov4BfVmQENUBBXFhVELz6GnVTfGZPsIN4ZVBjDvk",
  },
};

const tmdbResponse = await fetchData<ApiResponse<Movie>>(
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
  options,
);

// console.log(
//   tmdbResponse.results.forEach((movie) => {
//     console.log(movie.original_title);
//   }),
// );

// # Constraining Generics
type LengthWise = {
  length: number;
};

const logLength = <T extends LengthWise>(value: T) => {
  console.log(value.length);
};

// logLength("45"); // 2
// logLength([1, 2, 3, 4]); // 4
// logLength({ name: "Sally", length: 4 }); // 4
// logLength(3); // ERROR

// # Default Types
type ApiResponse2<T = string> = {
  status: number;
  data: T;
  message?: string;
};

// Defaults to string
const textResponse: ApiResponse2 = {
  status: 200,
  data: "Operation successful",
};

// # Several Types in a Generic
const makeTuple = <T, U>(item1: T, item2: U): [T, U] => [item1, item2];

const myTuple = makeTuple(3, "Jimmy");

// # The `object` Type vs `{}` vs `unkown`
const makeTuppleArray = <T extends object>(obj: T) => Object.entries(obj);

const myObj = {
  a: "some string",
  b: "another string",
};

console.log(makeTuppleArray(myObj));
// console.log(makeTuppleArray(42));
// console.log(makeTuppleArray("string"));
console.log(makeTuppleArray([1, 2, 3]));

// # keyof
type SomeObject = {
  a: string;
  b: number;
};

// type SomeObjectKeys = "a" | "b"
type SomeObjectKeys = keyof SomeObject;

const someKey: SomeObjectKeys = "b";

// # Partial<T> - make every property optional
type User = {
  name: string;
  email: string;
  password: string;
};

const validateUserForm = ({ name, email, password }: User) => {
  const newErrors: Partial<User> = {};

  if (!name.trim()) {
    newErrors.name = "Name is required";
  }
  if (!email.trim()) {
    newErrors.email = "Email is required";
  }
  if (!password.trim()) {
    newErrors.password = "Password is required";
  }

  return newErrors;
};
