// HERE WE ARE GETTING REFRENCE OF CLASSES TO ADD CONTENT DYNAMICALLY

const details = document.querySelector('.details');
const comic = document.querySelector('.comics');
const series = document.querySelector('.series');
const events = document.querySelector('.events');
const stories = document.querySelector('.stories');
const image = document.querySelector('.image');
const more = document.querySelector('.more');

// HERE WE ARE GETTING LOCAL STORAGE DATA

var characterdetail = sessionStorage.getItem('viewdetail');
  character = JSON.parse(characterdetail); 


 // here we are adding CHARACTER NAME 

  const titleh1 = document.createElement("h1");
      titleh1.innerHTML = character[0].name;
      details.appendChild(titleh1);

// here we are adding COMICS  heading 

      const comictitleh1 = document.createElement("h1");
        comictitleh1.innerHTML = "COMICS &darr;";
        comic.appendChild(comictitleh1);

        //  here we are adding list items in COMICS LIST

    for(var com of character[0].comics.items){        
        const li = document.createElement("li");
        li.innerHTML = com.name;
        comic.appendChild(li);
    }

// here we are adding EVENTS  heading 

    const eventstitleh1 = document.createElement("h1");
    eventstitleh1.innerHTML = "EVENTS &darr;";
    events.appendChild(eventstitleh1);

    //  here we are adding list items in EVENTS LIST

for(var com of character[0].events.items){        
    const li = document.createElement("li");
    li.innerHTML = com.name;
    events.appendChild(li);
}

// here we are adding SERIES heading 

    const seriestitleh1 = document.createElement("h1");
    seriestitleh1.innerHTML = "SERIES &darr;";
    series.appendChild(seriestitleh1);

    //  here we are adding list items in SERIES LIST

for(var com of character[0].series.items){        
    const li = document.createElement("li");
    li.innerHTML = com.name;
    series.appendChild(li);
}

// here we are adding STORIES heading 

const storiestitleh1 = document.createElement("h1");
storiestitleh1.innerHTML = "STORIES &darr;";
stories.appendChild(storiestitleh1);

//  here we are adding list items in STORIES LIST

for(var story of character[0].stories.items){        
const li = document.createElement("li");
li.innerHTML = story.name;
stories.appendChild(li);
}

// here we are adding content in more List 

for(var url of character[0].urls){       
    const urltypes = document.createElement("h1");
    urltypes.innerHTML =url.type+' &darr;';
    more.appendChild(urltypes);
    const message = document.createElement("p");
    message.innerHTML ='click on below link to view more '+url.type+' &darr;';
    more.appendChild(message);
    const a = document.createElement("a");
    a.href = url.url;
    a.target ='_blank';
    a.innerHTML = url.type+'s';
    more.appendChild(a);
}


