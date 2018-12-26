var nameVar = "Andrew";
nameVar = 'Mike'
console.log("nameVar: ", nameVar);

let nameLet = "Jen";
nameLet = "Julie"
console.log('nameLet: ', nameLet)

const nameConst = 'Frank';

console.log('NameConst', nameConst)

const fullName = "Andrew Unknown"
let firstName;
if (fullName) {
    firstName = fullName.split(' ')[0]
    console.log(firstName);
}
console.log(firstName);