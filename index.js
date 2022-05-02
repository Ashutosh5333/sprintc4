// write js code here corresponding to index.html
// You should add submit event on the form

   document.querySelector("#masaiForm").addEventListener("submit",myfunction)

  var ARR=JSON.parse(localStorage.getItem("Matchshedule"))||[]

    function myfunction(){
     event.preventDefault();
         
     var addmatchobj={
         MatchNum:masaiForm.matchNum.value,
         MatchteamA:masaiForm.teamA.value,
         MatchteamB:masaiForm.teamB.value,
         Matchdate:masaiForm.date.value,
         MatchVenue:masaiForm.venue.value,
        }
     ARR.push(addmatchobj)
       console.log(ARR)
     localStorage.setItem("Matchshedule",JSON.stringify(ARR))
   
    }