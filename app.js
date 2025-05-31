const promise = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "HI");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "World");
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "nani?!");
});

Promise.all();
