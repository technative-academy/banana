//Const variable to be used with event listeners
const stars = document.querySelectorAll('.fa')
const checked_stars = document.querySelectorAll('.checked')

//addlisteners for mousehover
function addStarListener(star) {
    star.addEventListener('mouseenter', starHighlight)
    star.addEventListener('mouseout', starRemoveHighlight)
}

//listener for click
function starClick(star) {
    star.addEventListener('click', assignStarRating)
}

//if mouse enters and already checked toggle highlight
function starHighlight(event) {
    const hoveredStar = event.currentTarget

    if (!hoveredStar.classList.contains('checked')) {
        hoveredStar.classList.add('hover-checked')
    }
    if (hoveredStar.classList.contains('checked')) {
        hoveredStar.classList.remove('checked')
        hoveredStar.classList.add('hover-unchecked')
    }
}

//if mouse enters and already checked toggle highlight
function starRemoveHighlight(event) {
    const hoveredStar = event.currentTarget

    if (hoveredStar.classList.contains('hover-checked')) {
        hoveredStar.classList.remove('hover-checked')
    }
    if (hoveredStar.classList.contains('hover-unchecked')) {
        hoveredStar.classList.add('checked')
    }
}

//Assign star rating
function assignStarRating(event) {
    //select clicked star
    const clickedStar = event.currentTarget
    // assign which product this clicked star belongs to
    let clickedStarProduct = clickedStar.classList[1]
    // assign which number star is clicked on
    let clickedStarNumber = parseInt(clickedStar.classList[2][5])

    //queryselect star
    let starToBeChecked = document.querySelectorAll(
        `.star-${clickedStarNumber}.${clickedStarProduct}`
    )[0]
    //queryselect star
    let starToBeUnchecked = document.querySelectorAll(
        `.star-${clickedStarNumber}.${clickedStarProduct}`
    )[0]
    //if star not already checked, fill in all stars lower than
    if (clickedStar.classList.contains('hover-checked')) {
        starToBeChecked.classList.add('checked')
        while (clickedStarNumber >= 1) {
            clickedStarNumber -= 1
            starToBeChecked = document.querySelectorAll(
                `.star-${clickedStarNumber}.${clickedStarProduct}`
            )[0]
            starToBeChecked.classList.add('checked')
        }
    }
    //if star already checked, uncheck all stars greater than 
    if (clickedStar.classList.contains('hover-unchecked')) {
        clickedStar.classList.remove('checked')
        while (clickedStarNumber <= 5) {
            clickedStarNumber += 1
            starToBeUnchecked = document.querySelectorAll(
                `.star-${clickedStarNumber}.${clickedStarProduct}`
            )[0]
            starToBeUnchecked.classList.remove('checked')
        }
    }
}

stars.forEach(addStarListener)
stars.forEach(starClick)
