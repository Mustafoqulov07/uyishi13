function groubBy(users, key) {
    return users.reduce((acc, item) => {
        if (!acc[item[key]]) {
            acc[item[key]] = []
        }
        acc[item[key]].push(item);
        return acc
    },{})
}

const users = [
     { name: "Ali", city: "Tashkent" },
     { name: "Vali", city: "Samarqand" },
     { name: "Guli", city: "Tashkent" }
];


console.log(groubBy(users, 'city'))