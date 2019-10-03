const APIkey='rzOrXOAf8FBsrn80d3K7jCfy2L3DvhzU';

const getCity=async(city)=>{
    const base='http://dataservice.accuweather.com/locations/v1/cities/search'
    const query=`?apikey=${APIkey}&q=${city}`;

    const response = await fetch(base+query);
    const data= await response.json();
    return data[0];
}

// getCity('New Delhi')
//     .then(data=>{
//         return getWeather(data.Key)
//     })
//     .then(data=>{
//         console.log(data);
//     })
//     .catch(err=>console.log(err));
  

const getWeather=async(cityKey)=>{
    const base='http://dataservice.accuweather.com/currentconditions/v1/';
    const query=`${cityKey}?apikey=${APIkey}`
    const response= await fetch(base+query);
    const data= await response.json();
    //console.log(data); 
    return data[0];  
}

