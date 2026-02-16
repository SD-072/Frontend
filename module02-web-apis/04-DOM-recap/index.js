// const heading = document.querySelector(".p-4");

// const heading = document.getElementsByClassName("p-4");

const button = document.querySelector("button");

const heading = document.querySelectorAll(".p-4");

// heading[0].setAttribute("class", "bg-red-500");

heading[0].classList.add("m-4");

heading[0].classList.remove("p-4");

heading[0].classList.toggle("bg-red-300");

heading[0].classList.toggle("bg-red-300");

console.log(heading);

for (const singleHeading of heading) {
  if (singleHeading.textContent !== "This is a heading two") {
    continue;
  }
  console.log(singleHeading.textContent);
  singleHeading.classList.add("text-green-600");
}

// heading.forEach((singleHeading) => {
//   console.log(singleHeading.textContent);
//   singleHeading.classList.add("text-green-600");
// });

button.addEventListener("click", () => {
  document.body.style.backgroundColor = "red";
});
