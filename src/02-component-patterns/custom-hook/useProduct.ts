import { useState } from 'react'

export const useProduct = () => {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleMinus = () => {
    setCount(count - 1);
  };

  return {
    count,
    handleAdd,
    handleMinus
  };
}