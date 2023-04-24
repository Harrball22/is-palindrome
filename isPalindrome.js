// Write your code below

function palindrome(word){
    let backwards = ""

    for (i = 0; i != word.length; i++){
        backwards = word[i] + backwards
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
