import { extrasSections } from "../data/data"


const ExtrasBox = () => {
    return(
        <section className="category-section" id="adicionais">
            <div className="section-title">
                <div className="icon">
                    <i className="fa-solid fa-plus"></i>
                </div>

                <h2>Adicionais</h2>
            </div>

            <div className="extras-box">
                {extrasSections.map((section) => (
                    <>
                        <div>
                            {section.title}
                        </div>  
                        <div className="extras-grid">
                            {section.items.map((item, idx) => (
                                <div key={idx} className="extras-line">
                                    <span>{item.name}</span>
                                    <span className="price">{item.price}</span>
                                </div>
                            ))}
                        </div>
                    </>
                ))}
                <p className="extras-note">
                    Máximo de 4 adicionais por produto. Consulte a disponibilidade.
                </p>
            </div>
        </section>
    )
}

export default ExtrasBox