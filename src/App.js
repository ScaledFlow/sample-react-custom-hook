// this custom hook wraps useState
// https://www.youtube.com/watch?v=6ThXsUwLWvc

import React from 'react';
import useLocalStorage from './components/useLocalStorage';

function App() {
  const [name, setName] = useLocalStorage('name', () => '')

  return (
    <>
      <input
        type='text'
        value={name}
        onChange={e => setName(e.target.value)}
        />
    </>
  );
}

export default App;

// import React, { useState } from 'react';

// function App() {
//   const [name, setName] = useState('')

//   return (
//     <>
//       <input
//         type='text'
//         value={name}
//         onChange={e => setName(e.target.value)}
//         />
//     </>
//   );
// }

// export default App;
