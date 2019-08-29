const url = require('url');

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

// serealized URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Host (root domain)
console.log(myUrl.host);
// Hostname 
console.log(myUrl.hostname);
// Pathname
console.log(myUrl.pathname);
// Serealized query
console.log(myUrl.search);
// Params object
console.log(myUrl.searchParams);
// Add param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);
// loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));







