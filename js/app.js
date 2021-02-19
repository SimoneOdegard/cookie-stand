let timeSlots = [
    '6am',
    '7am',
    '8am',
    '9am',
    '10am',
    '11am',
    '12pm',
    '1pm',
    '2pm',
    '3pm',
    '4pm',
    '5pm',
    '6pm',
    '7pm',
];

function randomInRange (min,max){
    let range = max-min;
    return Math.floor(Math.random() * (range + 1)) + min;
}

let allStands = [];
function CookieStand (location, min, max, avg) {
    this.id = location.toLowerCase();
    this.location = location;
    this.minCustomersPerHour = min;
    this.maxCustomersPerHour = max;
    this.avgCookiesPerSale = avg;
    this.totalCookies = 0;
    this.cookiesPerHourArray = [];
    allStands.push(this);
}

CookieStand.prototype.generateCustomersPerHour = function(){
    let customersPerHour = randomInRange(this.minCustomersPerHour, this.maxCustomersPerHour);
    return customersPerHour;
}

CookieStand.prototype.calcCookiesEachHour = function(){
    for (let i = 0; i < timeSlots.length; i++){
        let customersPerHour = this.generateCustomersPerHour();
        let cookiesEachHour = customersPerHour * this.avgCookiesPerSale;
        this.totalCookies += Math.ceil(cookiesEachHour);
        this.cookiesPerHourArray.push([timeSlots[i], Math.ceil(cookiesEachHour)]);
    }
    this.cookiesPerHourArray.push(['total', this.totalCookies])
}

function tableTimeHeader(){
    const tableElem = document.getElementById('table');
    const row1 = document.createElement('tr');
    const blankCell = document.createElement('td');
    row1.appendChild(blankCell);
    tableElem.appendChild(row1);
    for (let i = 0; i < timeSlots.length; i++) {
        const timeSlotsElem = document.createElement('th');
        row1.appendChild(timeSlotsElem);
        timeSlotsElem.textContent = timeSlots[i];
    }
    const dailyLocationTotals = document.createElement('th');
    dailyLocationTotals.textContent = 'Daily Location Total';
    row1.appendChild(dailyLocationTotals);
}

function tableFooterTotals(){
    const tableElem = document.getElementById('table');
    const row3 = document.createElement('tr');
    row3.setAttribute('id', 'row3')

    const cellHourlyTotals = document.createElement('td');
    cellHourlyTotals.textContent = 'Totals';
    tableElem.appendChild(row3);
    row3.appendChild(cellHourlyTotals);
    let globalTotal = 0;
    let globalArray = [];
    for (let i = 0; i < timeSlots.length; i++){
        let locationCount = 0;
        for (let j = 0; j < allStands.length; j++){
            locationCount += allStands[j].cookiesPerHourArray[i][1];
        }
        const cellTotal = document.createElement('td');
        cellTotal.textContent = locationCount;
        row3.appendChild(cellTotal);
        globalTotal += locationCount;
    }
    const globalTotalCell = document.createElement('td');
    globalTotalCell.textContent = globalTotal;
    row3.appendChild(globalTotalCell);
}

function submitHandler (event){
    event.preventDefault();
    let inputStand = new CookieStand (event.target.storeName.value,
        event.target.minCustomers.value,
        event.target.maxCustomers.value,
        event.target.avgCookies.value)
        inputStand.generateCustomersPerHour();
        inputStand.calcCookiesEachHour();
        inputStand.render();
        oldFooter =  document.getElementById("row3");
        oldFooter.remove();
        tableFooterTotals();
}

const button = document.getElementById('new-store-form');
button.addEventListener('submit', submitHandler);

CookieStand.prototype.render = function(){
    const tableElem = document.getElementById('table');
    const row2 = document.createElement('tr');
    tableElem.appendChild(row2);
    const locationsCell = document.createElement('td');
    locationsCell.textContent = this.location;
    row2.appendChild(locationsCell);
    for (let i = 0; i < timeSlots.length; i++){
        const cookiesPerHourTableElem = document.createElement('td');
        row2.appendChild(cookiesPerHourTableElem);
        cookiesPerHourTableElem.textContent = this.cookiesPerHourArray[i][1];
    }

    const dailyTotalRow = document.createElement('td');
    row2.appendChild(dailyTotalRow);
    dailyTotalRow.textContent = this.totalCookies;

}

tableTimeHeader();

let standSeattle = new CookieStand ('Seattle', 23, 65, 6.3);
standSeattle.generateCustomersPerHour();
standSeattle.calcCookiesEachHour();
standSeattle.render();
let standTokyo = new CookieStand ('Tokyo', 3, 24, 1.2);
standTokyo.generateCustomersPerHour();
standTokyo.calcCookiesEachHour();
standTokyo.render();
let standDubai = new CookieStand ('Dubai', 11, 38, 3.7);
standDubai.generateCustomersPerHour();
standDubai.calcCookiesEachHour();
standDubai.render();
let standParis = new CookieStand ('Paris', 20, 38, 2.3);
standParis.generateCustomersPerHour();
standParis.calcCookiesEachHour();
standParis.render();
let standLima = new CookieStand ('Lima', 2, 16, 4.6);
standLima.generateCustomersPerHour();
standLima.calcCookiesEachHour();
standLima.render();

tableFooterTotals();