import axios from "axios";

async function fetchAll(planets) {
    const residents = await fetchPlanets(planets)
    const filmUrls = await fetchFilmUrl(residents)
    const filmNames = await fetchFilmNames(filmUrls)
    return filmNames
}

async function fetchPlanets(arr) {
    const data = [];
    await Promise.all(
        arr.map(id => 
            axios.get(`https://swapi.co/api/planets/${id}/`).then(res => {
                const {residents} = res.data;
                residents.map(item => data.push(item))
            })    
        )
    )
    return data;
}

async function fetchFilmUrl(arr) {
    const data = [];
    await Promise.all(
        arr.map(url => 
           axios.get(url).then(res => {
               const {films} = res.data;
               films.map(item => data.push(item))
           })     
        )
    )
    return data;
}

async function fetchFilmNames(arr) {
    const data = [];
    await Promise.all(
        arr.map(url => 
            axios.get(url).then(res => {
                const {title} = res.data;
                data.push(title)
            })
        )
    )

    return data;
}





export { fetchAll };