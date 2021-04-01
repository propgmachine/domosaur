const toggleButton  = document.querySelector('#toggle');

function toggleColor() {
    const background = document.querySelector('#row');
    
    const isBackgroundSet = isBackground.style.backgroundColor !== '';

    if (isBackgroundSet) {
        background.style.backgroundColor = '';
    } else {
        background.style.backgroundColor = 'green';   
        
    }
}

toggleButton.addEventListener('click',toggleColor);