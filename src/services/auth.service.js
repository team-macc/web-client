export const createUserWithEmailAndPassword = (email, password) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            username: email.split("@")[0],
            password: password,
            email: email
     })
    };

    fetch('http://localhost:8080/api/auth/signup', requestOptions)
        .then(res => res.json())
        .catch(err => console.log(err))
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

    fetch('http://localhost:8080/api/auth/login', requestOptions)
        .then(res => res.json())
        .catch(err => console.log(err))
}