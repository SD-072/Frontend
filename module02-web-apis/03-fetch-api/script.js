const comicContainerEl = document.querySelector("#comic-container");
// const comicContainerByIdEl = document.getElementById("comic-container");
const getComicBtn = document.querySelector("#get-comic");

getComicBtn.addEventListener("click", getComic);

// # Learning Concept: Fetch API + Async Flow Control
// * This file shows the same network request in two styles:
// * Promise chaining (`then/catch/finally`) and `async/await`.
// ! `fetch()` only rejects on network errors. HTTP failures (404/500) must be handled with `response.ok`.

const renderComic = (comicData) => {
  //   console.log("[renderComic] raw API payload:", comicData);
  const { img, alt, title, year, month, day } = comicData;

  const date = new Date(year, month, day);

  const formattedDate = Intl.DateTimeFormat("de-DE").format(date);

  const html = `
 <figure class="h-full">
          <img
            class="h-full w-full"
            src="${img}"
            alt="${alt}"
          />
          <figcaption class="flex justify-between contain-inline-size">
            <span>${title}</span>
            <time datetime="${year}-${month}-${day}">${formattedDate}</time>
          </figcaption>
</figure>
`;

  comicContainerEl.insertAdjacentHTML("afterbegin", html);
  //   renderModeDemoEl.innerHTML = html;
  //   renderModeDemoEl.innerHTML += html;
};

const renderError = (message) => {
  comicContainerEl.replaceChildren();
  const html = `
  <p class="p-3 bg-slate-800 border border-b-red-500">${message}</p>
  `;
  comicContainerEl.insertAdjacentHTML("afterbegin", html);
};

// # Promise Chain Version
// fetch("https://xkcd-api-ridvanaltun.vercel.app/api/comics/random")
//   .then((response) => {
//     console.log("[promise-chain] From fetch()");
//     console.log("[promise-chain] response:", response);
//     // if (!response.ok) return Promise.reject(new Error("Not OK"));
//     if (!res.ok) throw new Error("Failed to fetch. Try again."); // fetch only rejects on network failure, NOT on HTTP 404/500 by default
//     return response.json();
//   })
//   .then((data) => renderComic(data))
//   .catch((err) => renderError(err.message))
//   .finally(() => {
//     console.log("[promise-chain] cleanup code");
//   });

async function getComic() {
  // # Async/Await Version
  // comicContainerEl.innerHTML = "";
  comicContainerEl.replaceChildren();
  comicContainerEl.innerHTML = "";
  getComicBtn.disabled = true;
  try {
    const res = await fetch("https://xkcd-api-ridvanaltun.vercel.app/api/comics/random");
    // console.log("[async-await] response:", res);
    if (!res.ok) throw new Error("Failed to fetch. Try again.");
    const data = await res.json();
    renderComic(data);
  } catch (err) {
    renderError(err.message);
  } finally {
    getComicBtn.disabled = false;
  }
}

getComic();

// # Synchronous vs Asynchronous Timing
// console.log("console.log after getComic() call");

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("In timeout");

//     if (Math.random() < 0.9) reject("FAILURE");

//     resolve("SUCCESS");
//   }, 2000);
// });

// console.log("[manual-promise] immediate state:", myPromise);
// myPromise.then((data) => console.log(data)).catch((err) => console.log(err));
