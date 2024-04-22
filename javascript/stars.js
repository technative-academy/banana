const stars = document.querySelectorAll(".fa");
const checked_stars = document.querySelectorAll(".checked");

stars.forEach(addStarListener);

function addStarListener(star){
    star.addEventListener(onmouseover, starHighlight);
}

function starHighlight(event){
    
}

