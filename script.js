let btnV = document.getElementById('view');
let btnV2 = document.getElementById('view2');
let card = async () => {
    try {
        let loadingImg = await fetch ('https://api.pexels.com/v1/search?query=nature', {
            headers: new Headers({
                Authorization: "Qbkgcp1dZSheFcrGTdfjcP1PPPYuAPcPgL7Isq6pfsNwvz335Kf7M2Iq"
            })
        });
        let IMG = await loadingImg.json();
        let immagine = IMG.photos;

        console.log(IMG);

        btnV.addEventListener('click', () => {
                let cards = document.querySelectorAll(".card");
                cards.forEach((card, index) => {
                let photo = immagine[index];
                let svgElement = document.querySelector(".card-img-top");
                let imgElement = document.createElement("img");
                imgElement.setAttribute("src", photo.src.landscape);
                imgElement.setAttribute("alt", photo.alt);
                svgElement.replaceWith(imgElement);
                let title = card.querySelector(".card-title");
                title.innerHTML = photo.alt;
                let photographer = card.querySelector(".card-text");
                photographer.innerHTML = `This photograph was taken by ${photo.photographer}`;
        })});
    } catch (error){
        console.log(error);
    }
    
}
card();

let card2 = async () => {
    try {
        let loadingImg = await fetch ('https://api.pexels.com/v1/search?query=city', {
            headers: new Headers({
                Authorization: "Qbkgcp1dZSheFcrGTdfjcP1PPPYuAPcPgL7Isq6pfsNwvz335Kf7M2Iq"
            })
        });
        let IMG = await loadingImg.json();
        let immagine = IMG.photos;

        console.log(IMG);

        btnV2.addEventListener('click', () => {
                let cards = document.querySelectorAll(".card");
                cards.forEach((card, index) => {
                let photo = immagine[index];
                let svgElement = document.querySelector(".card-img-top");
                let imgElement = document.createElement("img");
                imgElement.setAttribute("src", photo.src.landscape);
                imgElement.setAttribute("alt", photo.alt);
                imgElement.classList.add('img-fluid');
                svgElement.replaceWith(imgElement);
                let title = card.querySelector(".card-title");
                title.innerHTML = photo.alt;
                let photographer = card.querySelector(".card-text");
                photographer.innerHTML = `This photograph was taken by ${photo.photographer}`;
        })});
    } catch (error){
        console.log(error);
    }
    
}
card2();
