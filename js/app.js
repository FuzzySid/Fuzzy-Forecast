const form=document.querySelector('form');
const card=document.querySelector('.card');
const cardContent=document.querySelector('.card-content');
const time=document.querySelector('.card-image img');
const icon=document.querySelector('.icon img');
const background=document.querySelector('body');
const forecast=new Forecast();

//console.log(forecast);
const updateUI =data=>{
    // const cityDetails=data.cityDetails;
    // const weather=data.weather;

    //destructuring properties
    const {cityDetails,weather}=data;

    cardContent.innerHTML=` <div class="details center-align">
    <h5 style="color:black">${cityDetails.EnglishName}</h5>
    <div class="condition">${weather.WeatherText}</div>
        <div class="temperature">
        <h4>${weather.Temperature.Metric.Value}<span>&deg;C</span></h3>
            
        </div>
    
 </div>
    `
    const iconSrc=`img/icons/${weather.WeatherIcon}.svg`
    icon.setAttribute('src',iconSrc);

    let timeSrc=null;
    if(weather.IsDayTime){
        timeSrc='img/day.svg';
        // body.style.background='rgba(212, 214, 90, 0.459)';
    }
    else{
        timeSrc='img/night.svg';
        // body.style.background='seashell';
    }

    time.setAttribute('src',timeSrc);

    if(card.classList.contains('hide')){
        card.classList.remove('hide');
    }

}

// const updateCity=async (city)=>{
//     //console.log(city);
//     const cityDetails=await getCity(city);
//     const weather=await getWeather(cityDetails.Key);

//     return { cityDetails, weather }
// }
form.addEventListener('submit',e=>{
    e.preventDefault();
    const city=form.city.value.trim();
    form.reset();

    forecast.updateCity(city)
        .then(data=>{
            updateUI(data);
        })
        .catch(err=>console.log(err))
    
})