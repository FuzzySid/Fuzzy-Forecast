const form=document.querySelector('form');
const card=document.querySelector('.card');
const cardContent=document.querySelector('.card-content');
const time=document.querySelector('.card-image img');
const icon=document.querySelector('.icon img');
const background=document.querySelector('body');
const forecast=new Forecast();


const updateUI =data=>{
    
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
       
    }
    else{
        timeSrc='img/night.svg';
        
    }

    time.setAttribute('src',timeSrc);

    if(card.classList.contains('hide')){
        card.classList.remove('hide');
    }

}


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