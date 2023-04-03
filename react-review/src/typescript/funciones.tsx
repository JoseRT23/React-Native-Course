const funciones = () => {

  const sum = (a: number, b: number): number => a + b;
  
  return (
    <>
      <h3>Funciones</h3>
      <p>2 + 2 es igual a: {sum(2, 2)}</p>
    </>
  )
}

export default funciones
