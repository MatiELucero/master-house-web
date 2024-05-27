import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const refForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = "service_401cuet";
    const templateId = "template_bs5utwm";
    const publicKey = "QH7-3V4RuM5CsDTYT";

    emailjs.sendForm(serviceId, templateId, refForm.current, publicKey).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div id="contacto" className="h-[52vh]">
      <form ref={refForm} onSubmit={sendEmail}>
        <div className="flex justify-center items-center md:mx-[10%] xl:mx-[10%]">
          <div className="h-full xl:h-full w-[100vw] xl:w-[100vw]">
            <div className="xl:grid grid-cols-2 w-[100%] h-[50%] xl:h-[35%] gap-12">
              <div className="h-[15vh] pt-8">
                <h1 className="h-[6vh] text-2xl text-letras_morado">
                  Nombre/Empresa:
                </h1>
                <input
                  className='text-white xl:py-4 class="mt-1 block w-full px-4 py-2 bg-letras_morado border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                invalid:border-pink-500 invalid:text-pink-600
                                focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
                  type="text"
                  name="user_name"
                  placeholder="Ingresa tu nombre"
                />
              </div>
              <div className="h-[15vh] pt-8">
                <h1 className="h-[6vh] text-2xl text-letras_morado">
                  E-mail:
                </h1>
                <input
                  className='text-white xl:py-4 class="mt-1 block w-full px-4 py-2 bg-letras_morado border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                invalid:border-pink-500 invalid:text-pink-600
                                focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
                  type="email"
                  name="user_email"
                  placeholder="ingresa tu email"
                />
              </div>
            </div>
            <div className="h-[25vh] pt-8">
              <h1 className="text-2xl text-letras_morado">Mensaje:</h1>
              <input
                className="rounded-2xl w-full xl:mt-8 pb-36 px-4 text-lg text-white bg-letras_morado"
                type="text"
                name="message"
                placeholder="Ingrese su mensaje..."
              />
              <br />
            </div>
            <div className="text-2xl h-[15vh] xl:h-[5vh] mt-16">
              <button
                className="hover:border-black rounded-full border-2 w-[150px] bg-letras_amarillo text-letras_morado border-black hover:bg-letras_morado hover:text-white hover:border-4"
                type="submit"
                value="Send"
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
