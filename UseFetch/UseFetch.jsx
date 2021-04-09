import { useState, useEffect } from 'react';

const UseFetch = (url) => {

    const [Data, setData] = useState(null);
    const [IsPending, setIsPending] = useState(true);
    const [Error, setError] = useState(null);

    useEffect(() => {
        const getData = async (url) => {
          try {
              let response = await fetch(url);

              if (!response.ok) {
                throw{ 
                    err:true, 
                    status:response.status, 
                    statusText: !response.statusText 
                        ? 
                    "An error has occurred when receiving the requested data." 
                        : 
                    response.statusText 
                }

              }

            let data = await response.json();
            setIsPending(false);
            setData(data);
            setError({err: false});

          } catch (err) {

              setIsPending(true);
              setError(err);
              
          }
        }

        getData(url);

    }, [url])

    return { Data, IsPending, Error }
}
 
export { UseFetch };
