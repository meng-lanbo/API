const data= await fetch("./db/users.json");

const Users=data.json(),
UserNames=Object.keys(Users).map(value=>value.username)
export {Users,UserNames}