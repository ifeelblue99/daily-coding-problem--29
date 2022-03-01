/*
This problem was asked by Amazon.

Run-length encoding is a fast and simple method of encoding strings. 
The basic idea is to represent repeated successive characters as a single count and character. 
For example, the string "AAAABBBCCDAA" would be encoded as "4A3B2C1D2A".

Implement run-length encoding and decoding. 
You can assume the string to be encoded have no digits and consists solely of alphabetic
characters. You can assume the string to be decoded is valid.
*/

const str = "AAAABBBCCDAA"

function encodeString(s){
  let count = 1
  const result = []
  let currentChar = s[0]
  
  for (var i = 0; i < s.length; i++) {
    if (s[i]==currentChar) {
      count++
    }
    else{
      result.push(`${count}${currentChar}`)
      currentChar = s[i]
      count = 1
    }
  }
  
  return result
}

console.log(encodeString(str))
