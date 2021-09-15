console.log("Daily News 🚀");

let API_KEY = "Your api key";

// Trying first end-point for everything
// https://newsapi.org/v2/everything?q=bitcoin&apiKey=API_KEY

let firstEndPoint_Everything = (key) => {

    let xhr = new XMLHttpRequest();
    let query = "ps5"
    endPoint1 = `https://newsapi.org/v2/everything?q=${query}&apiKey=${key}`;

    xhr.open('GET',endPoint1,true);
    xhr.onload = function(){

        let newsBox = document.querySelector('#box');

        setTimeout(()=>{

            if(this.status === 200){
                
                newsOBJ = JSON.parse(this.responseText).articles;
                newsOBJ.forEach((e)=>{
                    let element = document.createElement('div');
                    
                    let html = `<div class="card" style="width: 21rem; margin: 8px; border-radius: 13px;">
                                    <img src="${e.urlToImage}" class="card-img-top" alt="No Image Available">
                                    <div class="card-body">
                                    <h5 class="card-title">${e.title}</h5>
                                    <hr>
                                    <p class="card-text" style="font-family:Roboto mono; padding: 2px;">${e.description}</p>
                                    <p class="card-text" style="font-family:Roboto mono; padding: 2px;">Author: ${e.author}</p>
                                    
                                    <a href="${e.url}" target="_blank" class="btn btn-primary" style="font-family: 'Roboto mono'; padding: 8px;">Read Full Article</a>
                                    </div>
                                </div>`
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