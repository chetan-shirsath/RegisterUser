import axios from "axios";


export const saveUser = (user) => {
        axios.post('http://localhost:5000/api/register',user)
        .then(res => {console.log(res); alert(res.data.success);})
        .catch(res => alert(res.success));
     };