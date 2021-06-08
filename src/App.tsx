import { FC, useState } from 'react';

const App: FC = () => {
  const [test, setTest] = useState<number>(1);
  const c = 0;

  const bla = async () => {
    await new Promise((r) => true);
  };

  console.log(d);
  return (
    <div>
      Typescript {c} {test}
      <button onClick={() => setTest((s) => s + 1)}>Click</button>
    </div>
  );
};

export default App;
