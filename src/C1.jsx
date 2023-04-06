import { useEffect } from 'react';

function C1() {
  useEffect(() => {
    document.title = 'C1 mount oldu';

    return () => {
      document.title = 'App';
    };
  });

  return <p>Ben C1</p>;
}

export default C1;
