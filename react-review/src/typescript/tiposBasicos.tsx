const tiposBasicos = () => {
  const name: string = "Jose";
  const age: number = 22;
  const isActive: boolean  = true;
  const bakuganes: string[] = ['saurus', 'serpenoid'];

  return (
    <>
      <h3>Tipos basicos</h3>
      <p>String: {name}</p>
      <p>Number: {age}</p>
      <p>Boleano: {(isActive) ? 'activo' : 'inactivo'}</p>
      <p>Arrays{bakuganes.join(', ')}</p>
    </>
  );
};

export default tiposBasicos;
