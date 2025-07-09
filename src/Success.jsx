


export default function Success(){
    const user=JSON.parse(localStorage.getItem('user'));

    return(
        <div>
            <h1>Welcome ,{user?.username}</h1>
            <p>You have Successfully logged in</p>
        </div>
    )
}


