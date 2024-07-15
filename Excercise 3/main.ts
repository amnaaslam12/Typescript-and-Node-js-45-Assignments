// 3.Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName : string = "amna Aslam"
console.log("Lowercase:", personName.toLowerCase())
console.log("Uppercase:", personName.toUpperCase())
console.log("Titlecase:", personName.replace(/\b\w/g, c=> c.toUpperCase()))

// 3rd case me replace ki command use krengy, replace krti h kisi b string ko expression k sth.
// b k tag k through anchor tag ko btaty hn, is se short run character declare krty hn ab c ko upper case me utilize krdengy.

