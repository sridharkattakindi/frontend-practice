//CAN BE USED EVERYWHERE just like Optional of in JAVA
const user = {
    name: "ed shreen",
    address: undefined
}
//just use "?" before the null value
console.log(user.address?.city);

const user1 = {
    name: "ed shreen",
    address: {
        city: {
            pincode: 23223
        }
    }
}
//just use "?" before the null value
console.log(user.address?.city?.pincode);