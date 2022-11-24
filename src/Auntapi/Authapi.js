export const authuser = user => {
    const currentuser = {
        email: user.email,
    }

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