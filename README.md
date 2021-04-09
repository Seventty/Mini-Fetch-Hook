# Mini Fetch Hook
## How to use?
---
1- Clone/download or fork this repository.
2- Go to your React proyect, move to the <b>src</b> folder of your proyect and put the cloned/forked folder inside src.
3- Import it in a component and start to use as a normal function.

```javascript React
import React from 'react'
import { UseFetch } from '../hooks/useFetch';

const CustomHooks = () => {
    let url = "https://pokeapi.co/api/v2/pokemons?limit=25";
    let { Data, IsPending, Error} = UseFetch(url);

    console.log(Data);
    console.log(IsPending);
    console.log(Error);
    
    return (  
        <>
        <h1>Custom Hook</h1>
        </>
     );
}
 
export default CustomHooks;
```
