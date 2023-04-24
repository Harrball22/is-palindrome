// Write your code below

function palindrome(word){
    let backwards = ""

    for (i = word.length - 1; i >= 0; i--){
        backwards = backwards + word[i]
    }

    if (word === backwards){
        return true
    } else {
        return false
    }
}

console.log(palindrome("concrete"))
console.log(palindrome("racecar"))
console.log(palindrome("catapiller"))
console.log(palindrome("bob"))
