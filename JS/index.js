
  const search = document.querySelector("#search");
  console.log(search);
  search.addEventListener('click', searchresult);
  const searchinput = document.querySelector("#searchinput");
  const searchresults = document.querySelector(".searchresult");
  // console.log(searchresults)
  const button = document.querySelector("button");
  const card = document.querySelector(".cards");
  const favouriteMovies = document.querySelector(".favourite");
  const maindiv = document.querySelector(".main");

 
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

  //  this addcard() function is use to make search result card and appent results in searchresult div
  function addcard(data) {
    const carddiv = document.createElement("div");
    carddiv.className = "cards";
    carddiv.id = data.id;
    const cardimagediv = document.createElement("div");
    cardimagediv.className = "image";
    const cardimg = document.createElement("img");
    cardimg.src = data.thumbnail.path + ".jpg";
    const titlediv = document.createElement("div");
    const titleh4 = document.createElement("h4");
    titleh4.innerHTML = data.name;
    const titlebutton = document.createElement("button");
    titlebutton.className = "btn btn-outline-success";
    titlebutton.innerHTML = "Add to favourite";
    titlebutton.id = data.id;
    titlebutton.addEventListener("click", addtofav.bind(null, data.id));
    titlediv.appendChild(titleh4);
    titlediv.appendChild(titlebutton);
    cardimagediv.appendChild(cardimg);
    carddiv.appendChild(cardimagediv);
    cardimagediv.appendChild(titlediv);
    searchresults.appendChild(carddiv);
  }
  // this removetofav function is use to  remove card from favourite div
  function removetofav(id) {
    favouritedata = favouritedata.filter(function (ele) {
      return ele.id != id;
    });
    console.log(favouritedata);
    var element = document.getElementById("fav" + id).remove();
    showDeleteToastrNotification('Character successfully removed from favourite');
    // console.log(element);
  }

  // this addtofav function is use to add card in favourite div

  function addtofav(id) {
    $("div.main").remove();
    for (var character of data.data.results) {
      if (character.id == id) {
        favouritedata.push(character);
        //  console.log(favouritedata);
        window.sessionStorage.setItem("items", JSON.stringify(favouritedata));
        for (var movie of favouritedata) {
          const favouriteMainDiv = document.createElement("div");
          favouriteMainDiv.className = "main";
          favouriteMainDiv.id = movie.id;
          const carddiv = document.createElement("div");
          carddiv.className = "cards";
          carddiv.id = "fav" + movie.id;
          const cardimagediv = document.createElement("div");
          cardimagediv.className = "image";
          const cardimg = document.createElement("img");
          cardimg.src = movie.thumbnail.path + ".jpg";
          const titlediv = document.createElement("div");
          const titleh4 = document.createElement("h4");
          titleh4.innerHTML = movie.name;
          const titlebutton = document.createElement("button");
          titlebutton.className = "btn btn-outline-success";
          titlebutton.innerHTML = "Add to favourite";
          const deletebutton = document.createElement("button");
          deletebutton.className = "btn btn-outline-danger";
          deletebutton.innerHTML = "remove from favourite";
          deletebutton.id = movie.id;
          deletebutton.addEventListener(
            "click",
            removetofav.bind(null, movie.id)
          );
          titlediv.appendChild(titleh4);
          titlediv.appendChild(titlebutton);
          titlediv.appendChild(deletebutton);
          cardimagediv.appendChild(cardimg);
          carddiv.appendChild(cardimagediv);
          cardimagediv.appendChild(titlediv);
          favouriteMainDiv.appendChild(carddiv);
          favouriteMovies.appendChild(favouriteMainDiv);
          var message = 'your Character '+movie.name+' added successfully in favourite';
          showAddToastrNotification(message);
        }
      }
    }
  }

  function showAddToastrNotification(msg){
    $(function(){
      toastr.success(msg,{timeOut: 500});
      toastr.options.closeMethod = 'fadeOut';
      toastr.options.closeDuration = 5;
  });
}
  function showDeleteToastrNotification(msg){
    $(function(){
      toastr.error(msg,{timeOut: 500});
      toastr.options.closeMethod = 'fadeOut';
      toastr.options.closeDuration = 5;
  });
  }
  
  
