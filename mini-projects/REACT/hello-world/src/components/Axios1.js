import axios from 'axios';
export function Axios1() {

    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('Error fetching data: ',error);
    }
    )
}
export const AxiosGet = () => {
    
    axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: 'Axios post request',
        body: 'This is a post request body',
        userId:1
    }).then(response => {
        // dataInResponse = response.data;
        console.log(response.data);})
    .catch(error => console.error("Error", error))
    return (<>
        {/* Data is : {dataInResponse} */}
    </>)
}
//AUTHORIZATION, HEADERS

export function AxiosAuth() {
    axios.get("https://jsonplaceholder.typicode.com/posts", {
        headers: {
            'Authorization': 'Bearer token',
            'Content-Type': 'applicaton/json'
        }
    })
}