/* eslint-disable */

import { useState, useEffect } from "react";

function useCep(cep) {
 const [data, setData] = useState(null);
 const [loading, setLoading] = useState(false);
 const [error, setError] = useState(null);

 useEffect(() => {
  setLoading(true);
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
   .then((res) => res.json())
   .then((value) => setData(value))
   .catch((error) => setError(error))
   .finally(() => setLoading(false));
 }, [url]);

 return [data, loading];
}

export default useCep;
