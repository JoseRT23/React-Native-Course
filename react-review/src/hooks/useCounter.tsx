import { useState } from "react";

const useCounter = (initialValue: number = 0) => {

    const [number, setNumber] = useState<number>(initialValue);

    const acumular = (n: number):void => setNumber(number + n);

  return { number, acumular }
}

export default useCounter
