const cityName=document.getElementById('cityName');
const temp_status=document.getElementById('temp_status');
const temp_real_value=document.getElementById('temp_real_value')
const submitBtn=document.getElementById('submitBtn');
const city_name=document.getElementById('city_name');
const datahide=document.querySelector('.data_hide');
const getInfo=async (event)=>{
    event.preventDefault();
    let cityVal=cityName.value;
    if(cityVal===""){
        city_name.innerText="please enter city name before you search";
        datahide.classList.add('data_hide')
    }else{
        try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=9fc7c4e3076998d8edc44474770ddcef`
            const response=await fetch(url);
            const data=await response.json();
            const arrData=[data];
            city_name.innerText=`${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real_value.innerText=arrData[0].main.temp;


            const tempStatus=arrData[0].weather[0].main;

            //conditions to check sunny or cloudy
            if(tempStatus=="Sunny"){
                temp_status.innerHTML=
                "<i class='fa-solid fa-sun' style='color: #fdb813;'></i>"
            }else if (tempStatus=="Clouds"){
                temp_status.innerHTML=
                "<i class='fa-solid fa-cloud' style='color: #f1f2f6;'></i>"
            }else if (tempStatus=="Rainy"){
                temp_status.innerHTML=
                "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>"
            }else{
                temp_status.innerHTML=
                "<i class='fas fa-cloud' style='color: #44c3de;'></i>"
            }
            datahide.classList.remove('data_hide')
    

        }catch{
            city_name.innerText="please enter the city name properly" 
            datahide.classList.add('data_hide')
        }


    }
}
submitBtn.addEventListener('click',getInfo)