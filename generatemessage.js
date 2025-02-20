function generatemessage(user){
    return user.role=== "admin"
  ?user.active
     ?"Admin Access Granted!"
      : "Admin Access Revoked"
      :user.role==="user"
     ? user.active
     ?"user Access Granted!"
      : "user Access Revoked"
        :"Access Denied";
    
}
let user = { name: "Alice", role: "admin", active: false };
console.log(generatemessage(user))