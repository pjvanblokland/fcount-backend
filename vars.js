var model=null;

//var heroku="http://localhost:5000/"
//var heroku="http://localhost:3000/";

//gethub https://github.com/pjvanblokland/fcount.git
//var heroku ="https://fcount-amsterdam-2023-12dbb0281a38.herokuapp.com/";
//var heroku="https://fcount-accurate.glitch.me/";
// Voor railway deployment - vervang deze URL met je Render service URL
// Gebruik de nieuwe backend service op Render
var heroku="https://fcount-backend-production.up.railway.app/";
var numcode=null;
var url;
//var starttwee=-2;// Ga kijken of tweede pagina bestaat en ga invullen 
var invullen=0;//bij de start
var toon=1;//vraag om grafiek
var nieuw=2;//nieuwe dataset
var schoon=3;//clear datset
var verwijder=4;//delete dataset;
var active_code=-2;
function vulin(tekst,nummer){
   return tekst.replace('%s',nummer);
}
function realNaN(x) {
    if (isNaN(x)) {
        return true;
    } 
    if (x === undefined || x === null) {
        return true;
    }
    return false;
    
}