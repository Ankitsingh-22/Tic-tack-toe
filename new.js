console.log("Hello I am Ankit Singh");
let age = 22;
let a = 1;
let b = 4;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
if (age > 18) {
    console.log("You can drive");
    if (age > 40) {
        console.log("You Need to give a re-test");
    }
}
else if (age < 18) {
    console.log("You cannot drive");
}
else {
    console.log("Are you Kidding");
}
for (let i = 0; i < 100; i++) {
    console.log(a + i);
}
let obj = {
    name: "Ankit Singh",
    role: "Web Developer", 
    company: "Onecorp",
}
for (const key in obj) {
     {
        const element = obj[key];
        console.log(key,element);
        
    }
}   