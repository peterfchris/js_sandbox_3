let re
re = /hello/
re = /hello/i //i - case sensitive
// re = /hello/g //g - global search

// console.log(re)
// console.log(re.source)

// exec() - return result in an array or null
// const result = re.exec('hello world')

// console.log(result)
// console.log(result[0])
// console.log(result.index)
// console.log(result.input)

// test() - returns true or false
// const result = re.test('Hello')
// console.log(result)

// match() - return result array or null (like exec, but a little different)

// const str = 'Hello There'
// const result = str.match(re)
// console.log(result)

// Search() - returns index of the first match if not found returns -1
// const str = 'Brad hello there'
// const result = str.search(re)
// console.log(result)

// replace() - return new string with some or all matches of a pattern
const str = 'Hello there'
const newStr = str.replace(re, 'Hi')
console.log(newStr)