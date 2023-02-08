const details = document.querySelector('.details');
const comic = document.querySelector('.comics');
const series = document.querySelector('.series');
const events = document.querySelector('.events');
const stories = document.querySelector('.stories');
const image = document.querySelector('.image');
const more = document.querySelector('.more');
var characterdetail = sessionStorage.getItem('viewdetail');
  character = JSON.parse(characterdetail); 
  console.log(character);
//   const img = document.createElement('img');
//   img.src = character[0].thumbnail.path+'jpg';
//   img.alt = "No image found";
//   console.log(img.src)
//   image.appendChild(img);
  const titleh1 = document.createElement("h1");
      titleh1.innerHTML = character[0].name;
      details.appendChild(titleh1);
      const comictitleh1 = document.createElement("h1");
        comictitleh1.innerHTML = "COMICS";
        comic.appendChild(comictitleh1);

    for(var com of character[0].comics.items){        
        const li = document.createElement("li");
        li.innerHTML = com.name;
        comic.appendChild(li);
    }

    const eventstitleh1 = document.createElement("h1");
    eventstitleh1.innerHTML = "EVENTS";
    events.appendChild(eventstitleh1);

for(var com of character[0].events.items){        
    const li = document.createElement("li");
    li.innerHTML = com.name;
    events.appendChild(li);
}

    const seriestitleh1 = document.createElement("h1");
    seriestitleh1.innerHTML = "SERIES";
    series.appendChild(seriestitleh1);

for(var com of character[0].series.items){        
    const li = document.createElement("li");
    li.innerHTML = com.name;
    series.appendChild(li);
}

const storiestitleh1 = document.createElement("h1");
storiestitleh1.innerHTML = "STORIES";
stories.appendChild(storiestitleh1);

for(var story of character[0].stories.items){        
const li = document.createElement("li");
li.innerHTML = story.name;
stories.appendChild(li);
}

 
for(var url of character[0].urls){       
    const urltypes = document.createElement("h1");
    urltypes.innerHTML =url.type;
    more.appendChild(urltypes);
    const message = document.createElement("p");
    message.innerHTML ='click on below link to view more '+url.type;
    more.appendChild(message);
    const a = document.createElement("a");
    a.href = url.url;
    a.target ='_blank';
    a.innerHTML = url.type+'s';
    more.appendChild(a);
}


