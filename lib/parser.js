//
// let parsePath = path => {
//   let split = path.split("/")
//   split = split.splice(1)
//   split.forEach( url => {
//     if (url[0] === ":"){}
//   })
//
//   const ignoreColon = method => {return method.replace(/[^a-zA-Z]/g, "")}
//
//


 // 1. A way to match a URL path to the pattern
 // 2. A way to extract parameters from the URL
 // 3. A way to give those parameter values the names from the pattern
 // e.g.the pattern /foo/:bar would match /foo/1 and yield { bar: 1 } as the params)
var parser = {}


 module.exports = parser;
