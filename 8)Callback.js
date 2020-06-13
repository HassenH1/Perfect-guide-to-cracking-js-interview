// The first thing you have to understand is that in JavaScript functions are the first class object which means like other object we can pass function as a argument to other to other function and we can assign function to a variable and also we can return a function from other function.

// What is callback function?
// Function which are passed as a argument to other function and can be called later after some time is known as callback function . The function which accept other function as a argument is called high order function which basically contain the logic when to call the callback function.
//createQuote is the higher order function
function createQuote(quote, callback) {
  var myQuote = "Like I always say, " + quote;
  callback(myQuote); // 2
}

function logQuote(quote) {
  console.log(quote);
}

createQuote("eat your vegetables!", logQuote); // 1 //no quotes on logQuote func cuz we dont want it to run right away
// Result in console:
// Like I always say, eat your vegetables!

// Why use Callback functions?
// Most of the time we are creating programs and applications that operate in a synchronous manner. In other words, some of our operations are started only after the preceding ones have completed. Often when we request data from other sources, such as an external API, we don’t always know when our data will be served back. In these instances we want to wait for the response, but we don’t always want our entire application grinding to a halt while our data is being fetched. These situations are where callback functions come in handy.

function serverRequest(query, callback) {
  setTimeout(function () {
    var response = query + "full!";
    callback(response);
  }, 5000);
}

function getResults(results) {
  console.log("Response from the server: " + results);
}

serverRequest("The glass is half ", getResults);

// Result in console after 5 second delay:
// Response from the server: The glass is half full!
