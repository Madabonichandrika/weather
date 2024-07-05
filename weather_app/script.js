var inputvalue=document.querySelector("#city")
var btn=document.querySelector("#add")
var city=document.querySelector("#cityoutput")
var description=document.querySelector("#description")
var temp=document.querySelector("#temp")
var wind=document.querySelector("#wind")
apik="00eaf7f4a505d834cd28a55314f894a3"
function convertion(val){
    return(val-273).toFixed(3)
}
btn.addEventListener('click',function()
{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik)
    .then(res => res.json())

    .then(data =>
    {
        var nameval=data['name']
        var descrip=data['weather']['0']['description']
        var temperatue=data['main']['temp']
        var windspeed=data['wind']['speed']

        city.innerHTML=`Weather of <span>${nameval}<span>`
        temp.innerHTML=`Temperature : <span>${convertion(temperatue)}c<span>`
        description.innerHTML=`Sky Conditions : <span>${descrip}<span>`
        wind.innerHTML=`Wind Speed : <span>${windspeed}km/h<span>`
    })
    .catch(err=>alert('You Entered Wrong City Name'))
})