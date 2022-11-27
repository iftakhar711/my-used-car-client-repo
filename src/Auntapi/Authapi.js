export const authuser = (user) => {
    const currentuser = {

        email: user?.email,

    }
    console.log(currentuser);
    fetch(`http://localhost:5000/user/${user?.email}`, {
        method: 'PUT',
        hedars: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(currentuser)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);

        })
}

// [
//     {
//         "category_id": "1",
//         "category_name": "luxury car"
//     },
//     {
//         "category_id": "2",
//         "category_name": "normal car"
//     },
//     {
//         "category_id": "3",
//         "category_name": "van"
//     }
// ]