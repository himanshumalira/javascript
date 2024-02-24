const user = {
    username: "Himanshu",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function(){
        // console.log("got user details from database") ;
        // console.log(`username: ${this.username}`);
        // console.log(this);
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


//  contructor Function 
//  It provide a new instance (copy of data)

function User (username, loginCount, isLoggedIn){
    this.username = username;
    this.isLoggedIn = isLoggedIn;
    this.loginCount = loginCount
    // return this
}
const userOne = new User("himanshu", 8, true)
const userTwo = new User("Himanshu bhardwaj", 9, false)
console.log(userOne);
console.log(userTwo);