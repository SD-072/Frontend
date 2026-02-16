// const heading = document.getElementsByTagName("h1");
// const heading = document.getElementsByClassName("p-4");
const heading = document.querySelectorAll(".p-4");

// heading[0].setAttribute("class", "bg-red-500");
heading[0].classList.add("m-4");
heading[0].classList.remove("p-4");
heading[0].classList.toggle("bg-red-400");
heading[0].classList.toggle("bg-red-400");

console.log(heading);

// for loop
// for of loop
for (const singleHeading of heading) {
  if (singleHeading.textContent !== "This is heading two") {
    continue;
  }
  console.log(singleHeading.innerText);
}

// forEach
heading.forEach((singleHeading) => {
  console.log(singleHeading.innerText);
  singleHeading.classList.add("text-green-800");
});

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  //   document.querySelector("body").setAttribute("class", "bg-red-500");
  //   document.body.classList.toggle("bg-red-500");
  document.body.style.backgroundColor = "red";
  console.error("Stop it");
});
