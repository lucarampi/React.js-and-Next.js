export default function buttomClick() {
    function sayHello() {
        console.log("Hello!");
    }
    return (
        <div>
            <button onClick={() => alert("Hello World!")}>Click me!(inside function) </button>
            <button onClick={sayHello}>Click me!(outside function) </button>
            <button onClick={sayGoodBye}>Click me!(outside function) </button>
        </div>
    );
}

function sayGoodBye(e) {
    console.log("Goodbye!");
    console.log(e);
}

