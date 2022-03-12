import { ReactComponent as ContactSVG } from '@/assets/svg/contact.svg'

function ContactForm() {
  return (
    <div className="grid grid-cols-1 items-center overflow-hidden rounded-3xl bg-white shadow-md md:grid-cols-2 md:p-10">
      <ContactSVG className="h-80 w-full py-5 md:h-[500px]" />
      <div className="flex flex-col p-4">
        <div className="flex flex-col items-center text-center md:mb-14">
          <h2 className="text-3xl">¿Quieres recibir más información?</h2>
          <p>¡Déjanos tu email y nos pondremos en contacto contigo!</p>
        </div>
        <form className="mx-auto flex w-[70%] flex-col py-4">
          <label className="mb-2">Ingresa tu email:</label>
          <input type="text" required className="mb-5" />
          <button type="submit" className="btn_black">
            Enviar
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
