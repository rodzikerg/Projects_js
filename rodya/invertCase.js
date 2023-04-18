function invertCase(string){
  let result = ''

  for (let i = 0; i < string.length; i++){
    if (string[i] === string[i].toLowerCase()){
      result += string[i].toUpperCase()
    } else {
      result += string[i].toLowerCase()
    }
  }

  return result
}

console.log(invertCase('Hello, world!'))