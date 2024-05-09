export function Fetch(){
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => console.log(data));
    
    return <div>hola mudno</div>
}