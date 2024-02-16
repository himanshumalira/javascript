//  Thiis => current context ko reffer krta h( you can access current context by this method)


const user = {
    name: "himanshu",
    age: 23,
    welcomeMessage: function (){
        console.log(`${this.name} welcome to the website`)
    }
}
user.welcomeMessage()
// user.name = "Himanshu Pathak"
// user.welcomeMessage()


function num (){
    const name = "Himanshu"
    console.log(this.name);
}
// num()
//  you can use this method only objects not in function



//  Arrow Function => [ () => {}]


