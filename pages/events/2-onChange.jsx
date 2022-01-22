export default function buttomClick() {
    function sayHello() {
        console.log("Hello!");
    }
    return (
        <div>
            <input type="text" onChange={(e)=> console.log(e.target.value)} />
        </div>
    );
}



