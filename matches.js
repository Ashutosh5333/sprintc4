// write js code here corresponding to matches.html
    var ARR=JSON.parse(localStorage.getItem("Matchshedule"))
      displaydata(ARR)
            

      function Placefilter(){
    var selected=document.querySelector("#filterVenue").value;
        // console.log(selected)
        var filtered=ARR.filter(function(elem)  {

             return elem.MatchVenue==selected
        })
        //  console.log(filtered);
          displaydata(filtered);
      }

      var favouriteArr=JSON.parse(localStorage.getItem("favteam"))||[]

     function displaydata(data){
      data.forEach(function(elem){
        var tr=document.createElement("tr")

        var td1=document.createElement("td")
            td1.innerText=elem.MatchNum

        var td2=document.createElement("td")
          td2.innerText=elem.MatchteamA

        var td3=document.createElement("td")
           td3.innerText=elem.MatchteamB

        var td4=document.createElement("td")
           td4.innerText=elem.Matchdate

        var td5=document.createElement("td")
           td5.innerText=elem.MatchVenue
      
        var td6=document.createElement("td")
            td6.innerText="Addtofavourite"
            td6.style.color="blue"
            td6.style.cursor="pointer"
           td6.addEventListener("click",function(){
               favourite(elem);
           })

          tr.append(td1,td2,td3,td4,td5,td6)
          document.querySelector("tbody").append(tr);
      })
}
     function favourite(elem){
     console.log(elem)
     favouriteArr.push(elem)
     localStorage.setItem("favteam",JSON.stringify(favouriteArr))

     }

     


      