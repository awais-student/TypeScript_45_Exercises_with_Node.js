let current_Users = ["Awais", "waqas", "Waseen", "Sufiyan", "Sonu"];
let new_Users = ["Naveed", "Ali", "Waqas","Rehman", "Sufiyan"];
new_Users.forEach(new_one_users =>{
    let our_condition = current_Users.some(current_one_user => current_one_user.toLocaleLowerCase() === new_one_users.toLocaleLowerCase())
    if(our_condition){
        console.log(`Sorry! ${new_one_users} is already taken`)
    }else{
        console.log(`This Username ${new_one_users} is available `)
    }
} )