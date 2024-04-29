function useLatitudeLongitude(cep) {
    let data = {}
    let error = null


    fetch(`https://cep.awesomeapi.com.br/json/${cep}`)
        .then((res) => res.json())
        .then((res) => data = res)
        .catch((err) => {
            error = err
        })

    return { data, error }
}
export default useLatitudeLongitude;