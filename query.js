console.log("Daily News 🚀");

let API_KEY = "eea9b05d1ea84a5f8ce1a2ffe3e09efb";

/*
 Trying  end-point for everything
 https://newsapi.org/v2/everything?q=bitcoin&apiKey=API_KEY
*/



let firstEndPoint_Everything = (key) => {

    let xhr = new XMLHttpRequest();
    let query = "tesla"
    endPoint1 = `https://newsapi.org/v2/everything?q=${query}&apiKey=${key}`;
    xhr.open('GET',endPoint1,true);
    xhr.onload = function(){

        let newsBox = document.querySelector('#box');

        setTimeout(()=>{

            if(this.status === 200){
                
                newsOBJ = JSON.parse(this.responseText).articles;
                newsOBJ.forEach((e)=>{
                    let element = document.createElement('div');
                    element.className = "card";
                    element.style.cssText = `width: 24rem; margin: 8px; border-radius: 13px;`
                    let html = `
                                    <img src="${e.urlToImage}" class="card-img-top" alt="No Image Available" style="margin-top:10px;">
                                    <div class="card-body">
                                    <h5 class="card-title">${e.title}</h5>
                                    <hr>
                                    <p class="card-text" style="font-family:Roboto mono; padding: 2px;">${e.description}</p>
                                    <p class="card-text author" style="font-family:Roboto mono; padding: 2px;">Author: ${e.author}</p>
                                    
                                    <a href="${e.url}" target="_blank" class="btn btn-primary" style="font-family: 'Roboto mono'; padding: 8px;">Read Full Article</a>
                                    </div>
                                `
                    element.innerHTML = html;           
                    newsBox.append(element);
                });
    
            }else{          
                console.log('Something went wrong 💢');
            }
        },2000);
        
    };

    xhr.send()
};

firstEndPoint_Everything(API_KEY);


// filter news
document.querySelector('#filterResults').addEventListener('input',function(e){

    e.preventDefault();

    querySearched = e.target.value.toLowerCase();
    let newsBox = document.querySelector('#box');

    Array.from(newsBox.querySelectorAll('.card')).forEach((el)=>{

        let newsTitle = el.querySelector('.card-title').innerText.toLowerCase();

        let newsDesc = el.querySelector('.card-text').innerText.toLowerCase();

        let Author = el.querySelector('.author').innerText.toLowerCase();

        if((newsTitle.includes(querySearched))||newsDesc.includes(querySearched) || (Author.includes(querySearched))){
            el.style.display = "block"
        }else{
            el.style.display = "none";
        }
        
    });
});

// Display various options for search

let optSearch = () =>{
    
    let placeHolder = document.getElementById('filterResults');
    let placeHolders = ["Author","Headline","Desc"]

    setInterval(() => {
        placeHolder.placeholder = `Search by: ${placeHolders[Math.floor(Math.random()*3)]}`;
    }, 3000);

};

optSearch();


