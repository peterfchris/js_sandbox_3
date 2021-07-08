// let re
// re = /hello/
// re = /hello/i //i - case sensitive
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
// const str = 'Hello there'
// const newStr = str.replace(re, 'Hi')
// console.log(newStr)

let re
// literal characters
re = /hello/
re = /hello/i

// metacharacter symbols
re = /^h/i  //must start with
re = /d$/i  //must end with
re = /^hello$/i  //begins and ends with
re = /he.lo/i  //matches any ONE character
re = /he*lo/i  //matches any character 0 or more times
re = /gre?a?y/i //optional character
re = /gre?a?y\?/i //escape character


// String to match
const str = 'gray?'

// log results
const result = re.exec(str)
console.log(result)

function reTest(re, str) {
    if(re.test(str)) {
        console.log(`${str} matches ${re.source}`)
    } else {
        console.log(`${str} does NOT match ${re.source}`)
    }
}

reTest(re, str)