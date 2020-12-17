export const createUserWithEmailAndPassword = (name, email, password) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: email,
            password: password,
            name: name
        })
    };

    fetch('http://localhost:8080/api/client', requestOptions)
        .then(res => res.json())
        .then(data => {
            return data;
        })
        .catch(err => console.log(err));
}

export const loginWithEmailAndPassword = (email, password) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: email,
            password: password
        })
    };

    fetch('http://localhost:8080/login', requestOptions)
        .then(res => res.json())
        .then(data => {
            return data;
        })
        .catch(err => console.log(err))
}