export const getProducts = () => {
    fetch('http://localhost:8080/login', requestOptions)
        .then(res => res.json())
        .then(data => {
            return data;
        })
        .catch(err => console.log(err))
}