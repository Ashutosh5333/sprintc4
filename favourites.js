// write js code here corresponding to favourites.html

var favouriteArr=JSON.parse(localStorage.getItem("favteam"))
displaydata(favouriteArr)

function displaydata(data){
data.forEach(function(elem,index){
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
      td6.innerText="Delete"
      td6.style.color="red"
      td6.style.cursor="pointer"
      td6.setAttribute("class","deleteText")
      td6.addEventListener("click",function(event){
         DeleteItem(elem, index);
     })

    tr.append(td1,td2,td3,td4,td5,td6)
    document.querySelector("tbody").append(tr);
})
}

function DeleteItem(elem ,index){
     favouriteArr.splice(index,1)
   localStorage.setItem("favteam",JSON.stringify(favouriteArr))

   window.location.reload();
}



