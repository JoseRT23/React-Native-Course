import useCounter from '../hooks/useCounter';

const CounterHook = () => {

  const { number, acumular } = useCounter();

  return (
    <>
    <h3>Contador hook</h3>
      Contador: {number}
      <button onClick={() => acumular(1)}>+1</button>
      <button onClick={() => acumular(-1)}>-1</button>
    </>
  )
}

export default CounterHook
