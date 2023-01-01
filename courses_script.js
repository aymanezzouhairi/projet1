var content = document.querySelector('.content');
var search = document.getElementById("searchbar");
var price;
var a=0;

function price_search(){
    stdp=document.getElementById("valrange").value;
    document.getElementById("valPrice").innerHTML=stdp;
    document.getElementById("div").innerHTML='';
    display_price();
}
search.addEventListener('input', function()
        { document.getElementById("div").innerHTML='';
        courses.forEach(function(element) {
            if (element.title.includes(document.getElementById("searchbar").value))
                creationCours(element.image, element.title, element.price); 
            })
        })
function display_price(){
    courses.forEach(function(element) {
        if (document.getElementById("valrange").value==0)
        {creationCours(element.image, element.title, element.price);}
        else
            if (element.price<=document.getElementById("valrange").value)
                creationCours(element.image, element.title, element.price);
    }   )
}

//display categories
var list = document.querySelector('#categories');

function creationCategory() {
    var tab = courses.map(function(v) { return v.category.toUpperCase() });
    var categories = ['all', ...new Set(tab)];
    categories.forEach((v) => {
        let li = document.createElement('li');
        let btn = document.createElement('button');
        li.appendChild(document.createTextNode(v));
        list.append(li);
        li.addEventListener('click', function()
            {
                document.getElementById("div").innerHTML='';
                if (v=='all' || v=='')
                {
                    courses.forEach(function(element) {

                            creationCours(element.image, element.title, element.price);
                        })  
                }
                courses.forEach(function(element) {
                    if (element.category==v)
                    {
                        creationCours(element.image, element.title, element.price);}
                    })               
                })

            })
}
//display content of courses
function creationCours(path, title, price) {
        let div = document.createElement('div'); // <div></div>
        div.setAttribute('class', 'card col-3 me-2 mb-2'); //<div class="card col-3 me-2 mb-2 "></div>
        let img = document.createElement('img'),
            p = document.createElement('p'),
            span = document.createElement('span');
    
        img.src = path;
        img.setAttribute('class', 'card-img');
        p.appendChild(document.createTextNode(title));
        p.setAttribute('class', 'card-title');
        span.appendChild(document.createTextNode(price));
        span.setAttribute('class', 'card-text');
    
        div.appendChild(img);
        div.appendChild(p);
        div.appendChild(span);
    
        content.append(div);
    }
courses.forEach(function(element) {
    if (document.getElementById("valrange").value==0)
    {creationCours(element.image, element.title, element.price);}
    else
        if (element.price<=document.getElementById("valrange").value)
            creationCours(element.image, element.title, element.price);
    
})
        
creationCategory()