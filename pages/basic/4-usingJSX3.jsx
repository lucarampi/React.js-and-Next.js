//JSX
export default function UsingJSX3() {
  const title = "I am a JavaScript variable";
  const subtitle = "The title is a variable... so am I...";
  const content = (
    <div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <h2>Random number (0-10): {Math.floor(Math.random()*10) + 1}</h2>
    </div>
    );
  return content
}