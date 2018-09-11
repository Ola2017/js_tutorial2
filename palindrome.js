// Reverse a string thru method chaning 
function reverse(string) {
   return Array.from(string).reverse().join(""); // Array.from() is better for emojies then split
    // return string.split("").reverse().join(""); //makes every sign to a element in array
    //reverse the elements in the array, joins to a string again
}

//Returns true for a palindrome, false otherwise.
function palindrome(string) {
    let processedContent = string.toLowerCase();
    return processedContent === reverse(processedContent);
}