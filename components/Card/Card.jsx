export default function CardTitleSubtitle({header, body, footer}) {
    return (
        <div className="card">
            <div className="card_title">
                <h2>{header.title}</h2>
            </div>
            <div className="card_subtitle">
                <h3>{header.subtitle}</h3>
            </div>
            <div className="card_body">
                {body.text.map(item => {
                     return <p className="card-paragraph">{item}</p>
                })}
                {body.image ? <img src={image} alt="" /> : null}

            </div>
            <div className="card_footer">
                {footer.text.map(item => {
                    return <p className="card-footer-text">{item}</p>
                })}
                {footer.image ? <img src={image} alt="" /> : null}

            </div>
        </div>
    );
}