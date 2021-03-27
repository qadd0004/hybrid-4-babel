let justAPromise = new Promise((resolve, reject) => {
  let name = "Sam";
  if (name) {
    resolve(name);
    document.querySelector(
      "#promise-output"
    ).textContent = `My friend name is ${name}`;
  } else {
    reject("Promise has been rejected");
  }
})
  .then((response) => {
    console.log("response", response);
  })
  .catch((error) => {
    console.log(error.message);
  });

async function waitForVictory() {
  let aPromise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("All is well");
    }, 1000);
  });
  document.querySelector("#async-output").textContent = await aPromise;
}

let landscape = {
  sky: "blue",
  grass: "Green",
};

function whichColour({ sky, grass }) {
  console.log(sky);
  console.log(grass);
  document.querySelector(
    "#destructuring-output"
  ).textContent = `The sky is ${sky} and the grass is ${grass}`;
}

whichColour(landscape);
waitForVictory();
