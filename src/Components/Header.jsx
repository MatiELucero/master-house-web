import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <header id="inicio" className="flex fixed items-center w-full p-4 h-[10vh] justify-between xl:justify-start z-50 bg-letras_morado">
        <div className="">
            <img className="h-12 xl:h-12 xl:ml-[70px]" src="/src/img/Logo.png"></img>
        </div>
        <nav
            
            className={`fixed w-[88%] md:w-[40%] xl:mx-auto xl:static h-full ${
            showMenu ? "left-0" : "-left-full"
            } top-0 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-500 bg-nav_footer`}
        >
            <a href="inicio" className="text-white text-2xl font-ptsans md:hover:underline">
            Inicio
            </a>
            <a href="#nosotros" className="text-white text-2xl font-ptsans md:hover:underline">
            Nosotros
            </a>
            <a href="#financiacion" className="text-white text-2xl font-ptsans md:hover:underline">
            Financiación
            </a>
            <a href="#entregas" className="text-white text-2xl font-ptsans md:hover:underline">
            Entregas
            </a>
        </nav>
        <button
            onClick={() => setShowMenu(!showMenu)}
            className="lg:hidden text-2xl"
        >
            {showMenu ? <RiCloseLine /> : <RiMenu3Line />}
        </button>
        <div className="border-2 rounded-xl px-2 mr-[70px] border-letras_amarillo hover:border-black hover:bg-letras_amarillo">
            <a href="#contacto" className="text-2xl p-2 font-bold text-white"><button className="text-2xl p-2 font-bold">Contáctanos ahora</button></a>
        </div>
        
        </header>
    );
};

export default Header;
