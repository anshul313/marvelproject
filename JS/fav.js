const favouriteMovies = document.querySelector(".favourite");
  // variables to store data of favourite movies
  var movies = sessionStorage.getItem('items');
  movies = JSON.parse(movies); 

  function showcards() {
    console.log('show cards called');
    console.log('storedArray is : ',movies);
    console.log("showcard called");
    for (var movie of movies) {
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
      const deletebutton = document.createElement("button");
      deletebutton.className = "btn btn-outline-danger";
      deletebutton.innerHTML = "remove from favourite";
      deletebutton.id = movie.id;
      deletebutton.addEventListener("click", removetofav.bind(null, movie.id));
      titlediv.appendChild(titleh4);
     
      titlediv.appendChild(deletebutton);
      cardimagediv.appendChild(cardimg);
      carddiv.appendChild(cardimagediv);
      cardimagediv.appendChild(titlediv);
      favouriteMainDiv.appendChild(carddiv);
      favouriteMovies.appendChild(favouriteMainDiv);
    }
  }
  // this removetofav function is use to  remove card from favourite div
  function removetofav(id) {
    movies = movies.filter(function (ele) {
      if(ele.id==id){
        localStorage.removeItem("items");
      }
      return ele.id != id;
    });
    var element = document.getElementById("fav" + id).remove();
    showDeleteToastrNotification('Character successfully removed from favourite');
    window.sessionStorage.setItem("items", JSON.stringify(movies));
    movies = JSON.parse(movies); 
    
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
          const deletebutton = document.createElement("button");
          deletebutton.className = "btn btn-outline-danger";
          deletebutton.innerHTML = "remove from favourite";
          deletebutton.id = movie.id;
          deletebutton.addEventListener(
            "click",
            removetofav.bind(null, movie.id)
          );
          titlediv.appendChild(titleh4);
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
  showcards();



function showDeleteToastrNotification(msg) {
  toastr.options = {
    closeButton: false,
    debug: false,
    newestOnTop: true,
    progressBar: true,
    positionClass: "toast-top-right",
    preventDuplicates: true,
    onclick: null,
    showDuration: "2000",
    hideDuration: "1000",
    timeOut: "2000",
    extendedTimeOut: "1000",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut",
  };
  var flag = false;
  setInterval(function () {
    if (!flag) {
      flag = true; //store this to compare later
      toastr.options = {
        "preventDuplicates": true,
        "preventOpenDuplicates": true
        };
      toastr.error(msg,"Character Removed");
    }
  }, 100);
}