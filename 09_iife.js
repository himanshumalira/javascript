//  IIFE => Immediatly Invoked Function Expression
//  ( function (){} )();
//  sometime we have facing problems by globel variables polusion, become we use IIFE  
//  always use semi colon ; after ending the code 

( function(){
    console.log(`Himanshu`);
})();

( (parameter) => {
    console.log(`PAthak ${parameter}`);
})("Argument");

