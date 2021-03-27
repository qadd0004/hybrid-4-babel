"use strict";

let justAPromise = new Promise((resolve, reject) => {
  let name = "Sam";

  if (name) {
    resolve(name);
    document.querySelector("#promise-output").textContent = "My friend name is ".concat(name);
  } else {
    reject("Promise has been rejected");
  }
}).then(response => {
  console.log("response", response);
}).catch(error => {
  console.log(error.message);
});

let waitForVictory = async () => {
  let aPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("All is well");
    }, 1000);
  });
  document.querySelector("#async-output").textContent = await aPromise;
};

let landscape = {
  sky: "blue",
  grass: "Green"
};

let whichColour = (_ref) => {
  let {
    sky,
    grass
  } = _ref;
  console.log(sky);
  console.log(grass);
  document.querySelector("#destructuring-output").textContent = "The sky is ".concat(sky, " and the grass is ").concat(grass);
};

whichColour(landscape);
waitForVictory();