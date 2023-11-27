const Financiacion = () => {
    return (
        <div id="financiacion" className="flex h-[70vh]">
            <div className="flex w-[50%] h-full">
                <div className="grid grid-cols-2 grid-rows-2 m-[10%] my-[5%] w-full border-letras_amarillo border-8">
                    <div className="col-start-1 col-end-2 border-b-2 border-letras_amarillo ml-6">
                        <div className="flex items-center w-full h-full p-8">
                            <img className="h-16 m-2" src="/src/img/icon_auto.png"></img>
                            <span className="text-letras_morado text-2xl mx-4">TOMAMOS TU VEHÍCULO EN PARTE DE PAGO</span>
                        </div>
                        
                    </div>
                    <div className="col-start-2 col-end-3 border-b-2 border-letras_amarillo mr-6">
                        <div className="flex items-center w-full h-full p-8">
                            <img className="h-16 m-2" src="/src/img/icon_chancho.png"></img>
                            <span className="text-letras_morado text-2xl mx-4">CAPITALIZÁ TUS AHORROS</span>
                        </div>
                    </div>
                    <div className="col-start-1 col-end-2 border-t-2 border-letras_amarillo ml-6">
                        <div className="flex items-center w-full h-full p-8">
                            <img className="h-16 m-2" src="/src/img/icon_casa.png"></img>
                            <span className="text-letras_morado text-2xl mx-4">PAGÁS CUANDO TE LO ENTREGAMOS</span>
                        </div>
                    </div>
                    <div className="col-start-2 col-end-3 border-t-2 border-letras_amarillo mr-6">
                        <div className="flex items-center w-full h-full p-8">
                            <img className="h-16 m-2" src="/src/img/icon_edificio.png"></img>
                            <span className="text-letras_morado text-2xl mx-4">APTOS CRÉDITOS PROCREAR</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex w-[50%] h-full">
                <div className=" w-full my-[15%]">
                    <div className="">
                        <span className="text-2xl text-letras_morado">Conocé nuestros</span><br/>
                        <span className="text-6xl text-letras_morado">MÉTODOS DE</span><br/>
                        <span className="text-6xl text-letras_morado">FINANCIAMINTO</span>
                    </div>
                    <div className="border-letras_amarillo border-l-8 mt-[7%] w-[500px]">
                        <div className="ml-6">
                            <span className="text-xl text-letras_morado">Con Master House, convertir tus sueños en realidad es más accesible que nunca.</span><br />
                            <span className="text-xl text-letras_morado">Aprovecha nuestras opciones de financiamiento exclusivas</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Financiacion