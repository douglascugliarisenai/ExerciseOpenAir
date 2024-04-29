function useBuscaCep(cep) {
  let data = {}
  let error = null


  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((res) => res.json())
    .then((res) => data = res)
    .then(() => {
      alert("Usuário cadastrado com sucesso!");
    })
    .catch((err) => {
      error = err
    })
    .catch(() => alert("Erro ao cadastrar usuário!"));

  return { data, error }
}
export default useBuscaCep;