
export default {
    async getData(getUsers) {
        const promise = await fetch('https://properties-3e020-default-rtdb.firebaseio.com/users.json');
        const users = await promise.json();
        getUsers(users)
    },
    renderUsers(users, filter) {
        if(users){
        return Object.keys(users).map((user) => {
                if (users[user].email === filter) {
                  return user
                }
            })}
    },   

    async getSingleProp(getUsers,id){
        const promise = await fetch(`https://properties-3e020-default-rtdb.firebaseio.com/users/${id}.json`);
        const users = await promise.json();
        getUsers(users)
    }
}