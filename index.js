const search = document.querySelector("#search");
const searchinput = document.querySelector("#searchinput");
const searchresults = document.querySelector(".searchresult");
// console.log(searchresults)
const button = document.querySelector('button');
const card = document.querySelector('.cards');
const favouriteMovies = document.querySelector('.favourite');
const maindiv = document.querySelector('.main');


// add Event listensters here
button.addEventListener("click",addtofav);
search.addEventListener("click", searchresult);
var data;
var favouritedata = [];

async function searchresult() {
  const val = searchinput.value;
  const api_url =
    "https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=" +
    val +
    "&ts=1&apikey=366b0b695f578da746b409a4ac3a98d7&hash=7b4330d2e3e0e2188f1cea24e9e6e1b9";
  const response = await fetch(api_url);
  data = await response.json();

//   remove previous loaded result to show only new results

  $("div.cards").remove();

//   calling all results Array to make card
  for (var character of data.data.results) {
    addcard(character);
}




}

function addcard(data) {
  const carddiv =  document.createElement('div');
  carddiv.className='cards';
  carddiv.id = data.id;
//   console.log(carddiv);
       const cardimagediv =  document.createElement('div');
       cardimagediv.className = 'image';
       const cardimg =  document.createElement('img');
       cardimg.src = data.thumbnail.path + ".jpg";
       const titlediv =  document.createElement('div');
       const titleh4 =  document.createElement('h4');       
        titleh4.innerHTML = data.name;
        const titlebutton =  document.createElement('button');
        titlebutton.className = "btn btn-outline-success";
        titlebutton.innerHTML = "Add to favourite";
        titlebutton.id = data.id;
        titlebutton.addEventListener('click',addtofav.bind(null,data.id));
        // console.log(titleh4);
        // console.log(data.name);
        titlediv.appendChild(titleh4);
        titlediv.appendChild(titlebutton);
        cardimagediv.appendChild(cardimg);
        carddiv.appendChild(cardimagediv);
        cardimagediv.appendChild(titlediv);
        
        searchresults.appendChild(carddiv);         
}

function removetofav(id){
    favouritedata = favouritedata.filter(function(ele){ 
        return ele.id != id; 
    });
    console.log(favouritedata);
    var element = document.getElementById('fav'+id).remove();
    console.log(element);
}

function addtofav(id){
    $("div.main").remove();
    for(var character of data.data.results){
     if(character.id==id){
         favouritedata.push(character);
        //  console.log(favouritedata);
         for(var movie of favouritedata){
            const favouriteMainDiv =  document.createElement('div');
            favouriteMainDiv.className ='main';
            favouriteMainDiv.id = movie.id;
                const carddiv =  document.createElement('div');
                carddiv.className='cards';
                carddiv.id = 'fav'+ movie.id;
                const cardimagediv =  document.createElement('div');
                cardimagediv.className = 'image';
                const cardimg =  document.createElement('img');
                cardimg.src = movie.thumbnail.path + ".jpg";
                const titlediv =  document.createElement('div');
                const titleh4 =  document.createElement('h4');       
                titleh4.innerHTML = movie.name;
                const titlebutton =  document.createElement('button');
                titlebutton.className = "btn btn-outline-success";
                titlebutton.innerHTML = "Add to favourite";
                const deletebutton =  document.createElement('button');
                deletebutton.className = "btn btn-outline-danger";
                deletebutton.innerHTML = "remove from favourite";
                deletebutton.id = movie.id;
                deletebutton.addEventListener('click',removetofav.bind(null,movie.id));
                // console.log(titleh4);
                // console.log(data.name);
                titlediv.appendChild(titleh4);
                titlediv.appendChild(titlebutton);
                titlediv.appendChild(deletebutton);
                cardimagediv.appendChild(cardimg);
                carddiv.appendChild(cardimagediv);
                cardimagediv.appendChild(titlediv);        
                favouriteMainDiv.appendChild(carddiv);  
                favouriteMovies.appendChild(favouriteMainDiv);
            }
        }
    }
}