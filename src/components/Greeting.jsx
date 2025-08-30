const Greeting = () => {

    const greetingMessage = "Hello welcome";
    const date = new Date();
    const name = "Kunal";
    return (
        <div>
            <h1>{greetingMessage}</h1>
            <p>Date : {date.getDate()}</p>
            <p>Name : {name}</p>
        </div>
    );
}

export default Greeting;