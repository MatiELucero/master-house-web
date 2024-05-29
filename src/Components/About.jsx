const About = () => {
    return  <div id="nosotros" className="h-[100vh] bg-[url('/src/img/fondo_about.png')] bg-cover  flex">
                <div className="w-[60%] h-full ml-[5%]">
                    <div className=" h-[70%] w-[40%] mt-[150px]">
                        <span className="text-letras_morado text-8xl">49%</span><br/>
                        <span className="text-letras_moradotext-letras_morado text-2xl">de ahorro contra una construcción tradicional</span><br/><br/><br/><br/>
                        <span className="text-letras_morado text-8xl">MENOS</span><br/>
                        <span className="text-letras_morado text-2xl">tiempo de ejecución</span><br/><br/><br/><br/>
                        <span className="text-letras_morado text-8xl">MÁS</span><br/>
                        <span className="text-letras_morado text-2xl">Superficie útil para la construcción</span>
                    </div>
                    
                </div>
                <div className="w-[40%] h-full mr-[5%]">
                    <div className="h-[35%]">
                        <span className="flex justify-end pt-24 text-letras_morado text-3xl">CONOCÉ LOS BENEFICIOS DE NUESTRAS</span>
                        <span className="flex justify-end text-letras_morado text-3xl">CONSTRUCCIONES</span><br/>
                        <span className="flex justify-end text-letras_morado ml-[40px] text-end text-xl">Firmeza en cada promesa, entregamos la casa de tus sueños en un tiempo récord de 90 días. Tu hogar, listo cuando lo necesitas.</span>
                    </div>
                    <div className="h-[65%] flex">
                        <div className="shadow-[12px_10px_7px_0px_rgba(0,0,0,0.2)] w-[100%] h-[90%] bg-letras_morado">
                            <span className="flex text-white h-12 mt-12 mx-8 text-2xl border-b-2 border-gray-300">Ahorro energetico</span><br />
                            <span className="flex text-white h-12 mx-8 text-2xl border-b-2 border-gray-300">Durabilidad</span><br />
                            <span className="flex text-white h-12 mx-8 text-2xl border-b-2 border-gray-300">Exelente grado de aislación térmica y acústica</span><br />
                            <span className="flex text-white h-12 mx-8 text-2xl border-b-2 border-gray-300">Óptimizacion de materiales</span><br />
                            <span className="flex text-white h-12 mx-8 text-2xl">Flexibilidad en la arquitectura</span><br />
                            <span className="flex justify-end text-white h-14 mx-8 text-xl">No esperes más, contactanos hoy mismo</span><br />
                            <div className="flex justify-center border-2 rounded-xl py-2 mt-12 ml-[550px] xl:ml-96 border-letras_amarillo hover:border-black hover:bg-letras_amarillo">
                                <a href="#contacto"><button className="text-2xl font-bold ">Conctactános</button></a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
}

export default About