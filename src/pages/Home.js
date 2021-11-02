function Home(props) {
    return (
        <div>
            <h1>Hello World!</h1>
            <p>My name is <strong>{props.name}</strong>. I'm {props.age} years old. For now, i'm a {props.position} Candidate in MC Payment Indonesia. Wish me luck!</p>
        </div>
    )
}

export default Home;