const searchh=async()=>{
    var searchkey=userinput.value
    if(searchkey){
        // api call
      const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchkey}&appid=8ac5c4d57ba6a4b3dfcf622700447b1e&units=metric`)
      const weadet=await response.json()
      console.log(weadet);
      temp=weadet.main.temp
      console.log(temp);
      country=weadet.sys.country
      humidity=weadet.main.humidity
      windspeed=weadet.wind.speed


      var currentdate = new Date();
     var datetime = "Last Sync: " + currentdate.getDay() + "/" + currentdate.getMonth() 
      + "/" + currentdate.getFullYear() + " @ " 
      + currentdate.getHours() + ":" 
      + currentdate.getMinutes() + ":" + currentdate.getSeconds();

      div8.innerHTML=`
      <h1 style="margin-top: 100px; margin-left:200px" >${temp} &#176; C</h1>
      <h2 style="margin-top: 100px ;margin-left:100px">${searchkey}</h2>
      <h5 style="margin-top: 20px ;margin-left:100px" >Feels like ${temp}&#176;</h5>
      <h6 style=" margin-top: 20px ;margin-left:100px" >${currentdate}</h6>
      
      
      `
      weathdetailsdiv.innerHTML=`
      <h3>weather Details</h3>
      <h5 style="color:#6e6e6e; margin-top:25px;">Country</h5>
      <h6 style="">${country}</h6>
      <h5 style="color:#6e6e6e; margin-top:25px;">Humidity</h5>
      <h6 style="">${humidity}</h6>
      <h5 style="color:#6e6e6e; margin-top:25px;">Wind</h5>
      <h6 style="">${windspeed}</h6>
      `
    }}
