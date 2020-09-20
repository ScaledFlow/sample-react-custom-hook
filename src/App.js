// this custom hook wraps useState
// https://www.youtube.com/watch?v=6ThXsUwLWvc

import React from 'react';
import useLocalStorage from './components/useLocalStorage';
import useUpdateLogger from './components/useUpdateLogger';

function App() {
  console.log('App')
  const [name, setName] = useLocalStorage('name', '')
  useUpdateLogger(name)
  
  
  return (

    <>
      <input
        type='text'
        value={name}
        onChange={e => setName(e.target.value)}
        />
        {console.log('app return')}
    </>
  );
}

export default App;

//-------------------------------------------
// import React, { useState } from 'react';

// function App() {
//   const [name, setName] = useState('')
//   // console.log(useState);
//   // console.log(setName);

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
