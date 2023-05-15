
let url = 'https://restcountries.com/v3.1/all';

let fetchUrl = fetch(url)
fetchUrl.then((res) => res.json()).then((bigData) => {
    for (let data of bigData) {
        console.log(`Country - ${data.name.official}, ${data.subregion}, (${data.region}) \n Population - ${data.population}`);
    }
});
