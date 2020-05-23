// Band Buttons and Columns Selectors
const threeButton = document.getElementById('three-button');
const fourButton = document.getElementById('four-button');
const fiveButton = document.getElementById('five-button');
const sixButton = document.getElementById('six-button');

const thirdColumn = document.getElementById('third-column');
const toleranceColumn = document.getElementById('tolerance-column');
const tempCoColumn = document.getElementById('temp-co-column');
const ohmResult = document.getElementById('ohm');
const toleranceResult = document.getElementById('tolerance');
const tempCoResult = document.getElementById('temp-co');

// ID Arrays
const firstDigitIds = ['one-black','one-brown','one-red','one-orange','one-yellow','one-green','one-blue','one-purple','one-gray','one-white'];
const secondDigitIds = ['two-black','two-brown','two-red','two-orange','two-yellow','two-green','two-blue','two-purple','two-gray','two-white'];
const thirdDigitIds = ['three-black','three-brown','three-red','three-orange','three-yellow','three-green','three-blue','three-purple','three-gray','three-white'];
const multiplierIds = ['mul-silver','mul-gold','mul-black','mul-brown','mul-red','mul-orange','mul-yellow','mul-green','mul-blue','mul-purple'];
const toleranceIds = ['tol-silver','tol-gold','tol-brown','tol-red','tol-green','tol-blue','tol-purple','tol-gray'];
const tempCoIds = ['temp-co-brown','temp-co-red','temp-co-orange','temp-co-yellow'];

// Color Buttons Selectors
const firstDigitSel = firstDigitIds.map(id => document.getElementById(id));
const secondDigitSel = secondDigitIds.map(id => document.getElementById(id));
const thirdDigitSel = thirdDigitIds.map(id => document.getElementById(id));
const multiplierSel = multiplierIds.map(id => document.getElementById(id));
const toleranceSel = toleranceIds.map(id => document.getElementById(id));
const tempCoSel = tempCoIds.map(id => document.getElementById(id));

// Calculation Variables
const colors = ['black','brown','red','orange','yellow','green','blue','purple','gray','white'];
let firstDigit = null;
let secondDigit = null;
let thirdDigit = null;
let multiplier = null;
let tempCo = null;
let tolerance = null;
let numberOfBands = 3;

// Band Number Buttons
threeButton.onclick = () => {
    thirdColumn.hidden = true;
    toleranceColumn.hidden = true;
    tempCoColumn.hidden = true;    
    numberOfBands = 3;
    reset();
    render();
    threeButton.style.color = 'white';
    threeButton.style.backgroundColor = '#EEB902';
    fourButton.style.color = '';
    fourButton.style.backgroundColor = '';
    fiveButton.style.color = '';
    fiveButton.style.backgroundColor = '';
    sixButton.style.color = '';
    sixButton.style.backgroundColor = '';
}
fourButton.onclick = () => {
    thirdColumn.hidden = true;
    toleranceColumn.hidden = false;
    tempCoColumn.hidden = true;
    numberOfBands = 4;
    reset();
    render();
    fourButton.style.color = 'white';
    fourButton.style.backgroundColor = '#EEB902';
    threeButton.style.color = '';
    threeButton.style.backgroundColor = '';
    fiveButton.style.color = '';
    fiveButton.style.backgroundColor = '';
    sixButton.style.color = '';
    sixButton.style.backgroundColor = '';
}
fiveButton.onclick = () => {
    thirdColumn.hidden = false;
    toleranceColumn.hidden = false;
    tempCoColumn.hidden = true;
    numberOfBands = 5;
    reset();
    render();
    fiveButton.style.color = 'white';
    fiveButton.style.backgroundColor = '#EEB902';
    threeButton.style.color = '';
    threeButton.style.backgroundColor = '';
    fourButton.style.color = '';
    fourButton.style.backgroundColor = '';
    sixButton.style.color = '';
    sixButton.style.backgroundColor = '';    
}
sixButton.onclick = () => {
    thirdColumn.hidden = false;
    toleranceColumn.hidden = false;
    tempCoColumn.hidden = false;
    numberOfBands = 6;
    reset();
    render();
    sixButton.style.color = 'white';
    sixButton.style.backgroundColor = '#EEB902';
    threeButton.style.color = '';
    threeButton.style.backgroundColor = '';
    fourButton.style.color = '';
    fourButton.style.backgroundColor = '';
    fiveButton.style.color = '';
    fiveButton.style.backgroundColor = '';    
}

// First Digit Column
function firstDigitButtons(event) {
    border(event.target.id, firstDigitSel);
    firstDigit = colorValue(event.target.id);
    render();
}
function secondDigitButtons(event) {
    border(event.target.id, secondDigitSel);
    secondDigit = colorValue(event.target.id);
    render();
}
function thirdDigitButtons(event) {
    border(event.target.id, thirdDigitSel);
    thirdDigit = colorValue(event.target.id);
    render();
}
function multiplierButtons(event) {
    border(event.target.id, multiplierSel);
    multiplier = colorValue(event.target.id, 'multiplier');
    render();
}
function toleranceButtons(event) {
    border(event.target.id, toleranceSel);
    tolerance = colorValue(event.target.id, 'tolerance');
    render();
}
function tempCoButtons(event) {
    border(event.target.id, tempCoSel);
    tempCo = colorValue(event.target.id, 'tempCo');
    render();
}

// Event Assignment
firstDigitSel.forEach(selector => selector.onclick = firstDigitButtons);
secondDigitSel.forEach(selector => selector.onclick = secondDigitButtons);
thirdDigitSel.forEach(selector => selector.onclick = thirdDigitButtons);
multiplierSel.forEach(selector => selector.onclick = multiplierButtons);
toleranceSel.forEach(selector => selector.onclick = toleranceButtons);
tempCoSel.forEach(selector => selector.onclick = tempCoButtons);

// Render Result
function render() {
    let calculated;
    switch (numberOfBands) {
        case 3:
            if(firstDigit != null && secondDigit != null && multiplier != null) {
                calculated = (firstDigit * 10 + secondDigit) * multiplier;
            }
            break;
        case 4:
            if(firstDigit != null && secondDigit != null && multiplier != null && tolerance != null) {
                calculated = (firstDigit * 10 + secondDigit) * multiplier;
            }
            break;
        case 5:
            if(firstDigit != null && secondDigit != null && thirdDigit != null && multiplier != null && tolerance != null) {
                calculated = (firstDigit * 100 +secondDigit * 10 + thirdDigit) * multiplier;
            }
            break;
        case 6:
            if(firstDigit != null && secondDigit != null && thirdDigit != null && multiplier != null && tolerance != 20 && tempCo != null) {
                calculated = (firstDigit * 100 +secondDigit * 10 + thirdDigit) * multiplier;
            }                  
    }

    if (calculated != undefined) {
        if (calculated >= 1000000) {
            calculated = (calculated / 1000000) + 'M';
        }
        else if (calculated >= 1000 && calculated < 1000000) {
            calculated = (calculated / 1000) + 'k';
        }
        ohmResult.innerHTML = calculated + '&#8486;';
        toleranceResult.innerHTML = 'Tolerance: &#177;' + (tolerance ? tolerance : 20) + '%';
        tempCoResult.innerHTML = tempCo ? 'Temp Co: ' + tempCo : '';
    }
}

// Helper Functions
function reset() {
    switch (numberOfBands) {
        case 3:
            border('',thirdDigitSel);
            border('',toleranceSel);    
            border('',tempCoSel);            
            thirdDigit = null;
            tolerance = null;
            tempCo = null;
            toleranceResult.innerHTML = '';
            tempCoResult.innerHTML = '';
            break;
        case 4:
            border('',thirdDigitSel); 
            border('',tempCoSel);            
            thirdDigit = null;
            tempCo = null;
            tempCoResult.innerHTML = '';
            break;
        case 5:
            border('',tempCoSel);
            tempCo = null;
            tempCoResult.innerHTML = '';
            break;
    }
}

function border(id, arr) {
    arr.forEach(selector => {
        if(selector === document.getElementById(id)) {
            selector.style.border = '2px solid #F45D01';
        }
        else {
            selector.style.border = '';
        }
    })
}

function colorValue(id, type) {
    const color = id.slice(id.indexOf('-') + 1);
    if (type === 'tempCo') {
        switch(color.slice(color.indexOf('-') + 1)) {
            case 'brown':
                return 100;
            case 'red':
                return 50;
            case 'orange':
                return 15;
            case 'yellow':
                return 25;
        }
    }
    else if (type === 'tolerance') {
        switch(color) {
            case 'silver':
                return 10;
            case 'gold':
                return 5;
            case 'brown':
                return 1;
            case 'red':
                return 2;
            case 'green':
                return 0.5;
            case 'blue':
                return 0.25;
            case 'purple':
                return 0.1;
            case 'gray':
                return 0.05;
        }
    }
    else if (type === 'multiplier') {
        if (color === 'silver') {
            return 0.01;
        }
        else if (color === 'gold') {
            return 0.1;
        }
        else {
            return Math.pow(10, colors.indexOf(color));
        }
    }
    else {
        return colors.indexOf(color);
    }
}