import axios from "axios";
import { useState , useEffect } from "react";

function Userlist(){
    const myStyle= {
        margin:"15px",
        marginLeft:"75px",
        padding:"5px",
        paddingLeft:"20px",
        backgroundColor:"#f8f8f8",
    }

    const [listOfUSer , setlistOfUSer] = useState([])
    

    useEffect(() => {axios.get('https://jsonplaceholder.typicode.com/users')
        .then(function (res) {
            setlistOfUSer(res.data)
        })
        .catch(function (error) {
            console.log(error);
        })
},[])

    var users = listOfUSer.map(e => {
        return <div class="col-md-3" style={myStyle} >
            <h3>{e.name}</h3>
            <h4>{e.company.name}</h4>
            <h5>{e.address.street + " , " + e.address.suite + " - " + e.address.city}</h5>
            <h5>{e.email}</h5>
            <h5>{e.phone}</h5>
            <h6>{e.username}</h6>
        </div>
})

    return(
        <>
            {users}
        </>
    )
}

export default Userlist