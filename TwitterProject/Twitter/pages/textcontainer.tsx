export default function TextContainer() {
    return (
        <div className="flex mt-8 items-center bg-gray-200 p-3 rounded-lg 2xl:w-5/12 lg:w-6/12">
            <textarea className="bg-transparent text-black font-medium text-lg outline-none w-full" rows="4" cols="50" placeholder="Escreva sua mensagem..."></textarea>

            <button className="bg-blue-400 h-12 ml-3 px-7 hover:bg-blue-500 text-white font-bold rounded-full">
                Enviar
            </button>
        </div>
    )
  }
  