const Entregas = () => {
    return (
    <div id="entregas" className="flex h-[105vh] bg-letras_morado w-full">
        <div className="w-[45%] h-full mx-[5%]">
            <div className="mt-[8%]">
                <span className="text-letras_amarillo text-2xl">Mirá las entregas realizadas en todo el</span><br/>
                <span className="text-letras_amarillo text-7xl">TERRITORIO</span><br/>
                <span className="text-letras_amarillo text-7xl">NACIONAL</span>
            </div>
            <div className=" mt-4">
                <div className="border-l-letras_amarillo border-l-8">
                    <div className="ml-4 w-[500px]">
                        <span className="text-white text-2xl">Master House acompaño a màs de 150 familias en la entrega de su casa propia</span>
                    </div>
                </div>
            </div>
            <div className="h-[500px] mt-6 mx-2 grid grid-cols-2 grid-rows-2 gap-5">
                <div className="bg-[url('/src/img/casa_1.png')] bg-cover bg-center hover:scale-105 transition-transform hover:border-black hover:border-2">
                    
                </div>
                <div className="bg-[url('/src/img/casa_2.png')] bg-cover bg-center hover:scale-105 transition-transform hover:border-black hover:border-2">

                </div>
                <div className="bg-[url('/src/img/casa_3.png')] bg-cover bg-left-bottom hover:scale-105 transition-transform hover:border-black hover:border-2">

                </div>
                <div className="bg-[url('/src/img/casa_4.png')] bg-cover bg-center hover:scale-105 transition-transform hover:border-black hover:border-2">
                    <div className="mt-[30%] ml-6">
                        <span className="text-white text-6xl">MÁS</span><br/>
                        <span className="text-white">De 10 ciudades tienen una master</span>
                    </div>
                    
                </div>
            </div>
        </div>
        <div className="w-[55%] h-full py-[70px] pr-[5%]">
            <div className="w-full h-full bg-[url('/src/img/foto_entrega.png')] bg-cover bg-center hover:scale-105 transition-transform hover:border-black hover:border-2">

            </div>
        </div>
    </div>
    )
}

export default Entregas