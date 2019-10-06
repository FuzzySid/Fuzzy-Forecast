class Forecast{
    constructor(){
        this.key='rzOrXOAf8FBsrn80d3K7jCfy2L3DvhzU';
        this.weatherURI='http://dataservice.accuweather.com/currentconditions/v1/';
        this.cityURI='http://dataservice.accuweather.com/locations/v1/cities/search';
    }
    async updateCity(city){
        const cityDetails= await this.getCity(city);
        const weather= await this.getWeather(cityDetails.Key);

    return {cityDetails,weather}
    }
    async getCity(city){
       
        const query=`?apikey=${this.key}&q=${city}`;

    const response = await fetch(this.cityURI+query);
    const data= await response.json();
    return data[0];
    }
    async getWeather(cityKey){
        const query=`${cityKey}?apikey=${this.key}`
        const response= await fetch(this.weatherURI+query);
        const data= await response.json();
        //console.log(data); 
        return data[0];  
    }
}

// const APIkey='rzOrXOAf8FBsrn80d3K7jCfy2L3DvhzU';

// const getCity=async(city)=>{
//     const base='http://dataservice.accuweather.com/locations/v1/cities/search'
//     const query=`?apikey=${APIkey}&q=${city}`;

//     const response = await fetch(base+query);
//     const data= await response.json();
//     return data[0];
// }

// getCity('New Delhi')
//     .then(data=>{
//         return getWeather(data.Key)
//     })
//     .then(data=>{
//         console.log(data);
//     })
//     .catch(err=>console.log(err));
  

// const getWeather=async(cityKey)=>{
//     const base='http://dataservice.accuweather.com/currentconditions/v1/';
//     const query=`${cityKey}?apikey=${APIkey}`
//     const response= await fetch(base+query);
//     const data= await response.json();
//     //console.log(data); 
//     return data[0];  
// }

