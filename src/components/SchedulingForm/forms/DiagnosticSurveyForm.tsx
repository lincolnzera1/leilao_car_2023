
const DiagnosticSurveyForm = () => {
    const teste = () => {
        window.open("https://api.whatsapp.com/send?phone=+5585985396727&text=Consusural");
    }

    return (
        <div className="">
            <form onSubmit={teste}>                    
                <input 
                    type="text" 
                    placeholder="Nome" 
                    name="name"
                    id="name"
                />

                <input 
                    type="text" 
                    placeholder="Endereço" 
                    name="address"
                    id="address"
                />

                <input 
                    type="text" 
                    placeholder="Telefone" 
                    name="phone_number" 
                    id="number_fone"
                />

                <input 
                    type="text" 
                    placeholder="Ramo de atividade" 
                    name="business_sector" 
                    id="business_sector" 
                />

                <button className="button-form">
                    {/* Entrar em contato */}
                    <a href="https://web.whatsapp.com/" target="_blank">teste</a>
                </button>
            </form>
        </div>
    );
}

export default DiagnosticSurveyForm;
