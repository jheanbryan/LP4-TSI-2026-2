import { extrasSections } from "../data/data"


const ExtrasBox = () => {
    return(
        <section className="category-section" id="adicionais">
            <div className="section-title">
                <div className="icon">
                    +
                </div>

                <h2>Adicionais</h2>
            </div>

            <div className="extras-box">
                {extrasSections.map((item, idx) => (
                    <>
                        <div key={idx} className="extra-line">
                            <span>{item.title}</span>
                        </div>
                    </>
                ))}
            </div>
        </section>
    )
}

export default ExtrasBox