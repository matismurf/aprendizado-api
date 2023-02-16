const url = 'http://localhost:5500/api'

function getUsers(){
    axios.get(url)
    .then(response=>{
        apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(error=>console.error(error))
}

function addNewUser(newUser){
    axios.post(url, newUser)
    .then(response => {
        console.log(response)
    })
    .catch(error=>console.error(error))
}

function getUser(id){
    axios.get(`${url}/${id}`)
    .then(response=>{
        userName.textContent = response.data.name
        userCity.textContent = response.data.city
        userID.textContent = response.data.id
        userAvatar.src = response.data.avatar
    })
    .catch(error=>console.error(error))
}

function updateUser(id, userUpdated){
    axios.put(`${url}/${id}`,userUpdated)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

function deleteUser(id){
    axios.delete(`${url}/${id}`)
    .then(response => console.log(response))
    .catch(error=>console.error(error))

}

const userUpdated = {
    name:'Cirilo',
    avatar:'https://picsum.photos/200/300',
    city:'São Paulo'
}

const newUser = {
    name:'Maria Joaquina',
    avatar:'https://picsum.photos/200/300',
    city:'Rio de Janeiro'
}

deleteUser(2)
getUsers()
getUser(1)
//addNewUser()
//updateUser(3,userUpdated)