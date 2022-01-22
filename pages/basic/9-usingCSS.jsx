import Card from "../../components/Card/Card";

export default function usingComponent() {
    let cardProps = {
        header: {
            title: "Card title",
            subtitle: "Card Subtitle",
        },
        body: {
            text: ["First line", "Second line", "And so on..."]
        },
        footer: {
            text: ["Single footer text"]
        },
    }
    return (
        <div className="card_container">
            <Card {...cardProps} />
            <Card {...cardProps} />
            <Card {...cardProps} />
            <Card {...cardProps} />
        </div>
    );
}