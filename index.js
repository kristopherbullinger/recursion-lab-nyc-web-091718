// Code your solution here!

function printString(string) {
  console.log(string[0])
  if (string.length > 1) printString(string.slice(1))
}

function reverseString(string) {
  return (string.length > 1) ? `${string[string.length -1]}${reverseString(string.slice(0, string.length-1))}` : string[0]
}

function isPalindrome(string) {
  return (string.length === 1 || string.length === 0 ) || (string[0] === string[string.length-1] && isPalindrome(string.slice(1,string.length-1))) ? true : false
}

function addUpTo(array, index) {
  if (array.length === 1 || index === 0) return array[0]
  return array[0] + addUpTo(array.slice(1), index - 1)
}

function maxOf(array) {
  if (array.length === 1) return array[0]
  return Math.max(array[0], maxOf(array.slice(1)))
}

function includesNumber(arr, num) {
  if (arr.length === 1 && arr[0] != num) return false
  return arr[0] === num || includesNumber(arr.slice(1), num)
}
