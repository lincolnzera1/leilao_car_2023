const ConsultanciesForm = () => {
    const teste = () => {
        window.open("https://api.whatsapp.com/send?phone=+5585985396727&text=Consusural");
    }
    return (
        <div>
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
                    name="Endereço" 
                    id="address" 
                />
                
                <input 
                    type="text" 
                    placeholder="Telefone" 
                    name="Telefone" 
                    id="phone_number" 
                />
                
                <select
                    name="consultancies" id="consultancies">
                    <option value="" disabled>
                        Ramo de atividade
                    </option>
                    <option value="BOVINOCULTURA LEITEIRA">
                        Bovinocultura Leiteira
                    </option>
                    <option value="FRUTICULTURA">
                        Fruticultura
                    </option>
                    <option value="GRANDES CULTURAS">
                        Grandes Culturas
                    </option>
                    <option value="AVICULTURA">
                        Avicultura
                    </option>
                </select>

                <textarea 
                    name="consultancies-project-implement" 
                    id="consultancies-project-implement" 
                    cols={1} rows={10} 
                    placeholder="Qual problema deseja solucionar">
                </textarea>

                <button className="button-form">
                    Entrar em contato
                </button>
            </form>
        </div>
    );
}

export default ConsultanciesForm;
