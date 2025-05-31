const promise = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "HI");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "World");
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 5000, "nani?!");
});

// takes array of all promises
Promise.all([promise, promise2, promise3]).then((values) => {
  console.log(values);
});

// ====== Promise.all on these urls ========
const urls = [
  "https://jsonplaceholder.typicode.com/user",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

Promise.all(
  urls.map((url) => {
    return fetch(url).then((res) => res.json());
  })
)
  .then((data) => {
    console.log("users:", data[0][0]);
    console.log("posts:", data[1][0]);
    console.log("albums:", data[2][0]);
  })
  .catch(() => console.log("error in the url. check spelling"));

//   recap:
/*
🚨 This will return an error because the user url has a typo

we map over our list of urls

on each url, we do a transformation

we fetch from the link, convert json, etc…

THEN on the data returned from each url we do xyz

CATCH any errors if the urls have a typo
*/
