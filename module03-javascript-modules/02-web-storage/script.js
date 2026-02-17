// # Web Storage API — localStorage CRUD Operations
// * localStorage persists data across browser sessions (no expiry).
// * It stores everything as STRINGS — even booleans and numbers.
// * The API has only 4 methods: getItem, setItem, removeItem, clear.

// # The 4 localStorage Methods (reference)
// localStorage.getItem("key");
// localStorage.setItem("key", "value");
// localStorage.removeItem("key");
// localStorage.clear();

// # READ — getItem()
// * Returns null if the key doesn't exist. Never throws an error.
const userName = localStorage.getItem("name");
console.log(userName);

const email = localStorage.getItem("email");
console.log(email);

const age = localStorage.getItem("age");
// ! getItem returns null for missing keys — not undefined, not an error.
console.log(age);

// # WRITE / CREATE — setItem()
localStorage.setItem("isStudent", false);
// ! The value false is silently converted to the STRING "false".
// ! typeof localStorage.getItem("isStudent") === "string" — always.
console.log(localStorage.getItem("isStudent"));

// # UPDATE — setItem() with an existing key
// * setItem overwrites the previous value. There is no separate "update" method.
localStorage.setItem("name", "Samara");
console.log(localStorage.getItem("name"));

// # DELETE — removeItem()
// * Removes a single key-value pair.
localStorage.removeItem("name");
console.log(localStorage.getItem("name"));

// # CLEAR — clear()
// ! Wipes ALL keys in localStorage for this origin. Use with caution.
localStorage.clear();
console.log(localStorage.getItem("email"));
