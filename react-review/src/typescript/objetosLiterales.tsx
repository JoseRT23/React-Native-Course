interface Persona {
    nombre: string,
    email: string,
    edad: number,
    direccion: Direccion
}

interface Direccion {
    pais: string,
    casoNo: string
}

const objetosLiterales = () => {

    const persona: Persona = {
        nombre: 'test',
        email: 'test@gmail.com',
        edad: 22,
        direccion: {
            pais: 'colombia',
            casoNo: '22'
        }
    }

  return (
    <>
      <h3>Objetos literales</h3>
      {JSON.stringify(persona, null, 2)}
    </>
  )
}

export default objetosLiterales
