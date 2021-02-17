// we need cookiesEachHour for all the time slots
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

function CookieStand (id, location, min, max, avg, totalCookies, cookiesPerHourArray = []) {
    this.id = id;
    this.location = location;
    this.minCustomersPerHour = min;
    this.maxCustomersPerHour = max;
    this.avgCookiesPerSale = avg;
    this.totalCookies = totalCookies;
    this.cookiesPerHourArray = cookiesPerHourArray;
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
    blankCell.textContent = '';
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
    const cellHourlyTotals = document.createElement('td');
    cellHourlyTotals.textContent = 'Totals';
    tableElem.appendChild(row3);
    row3.appendChild(cellHourlyTotals);
    let globalTotal = 0
    for (let i = 0; i < timeSlots.length; i++){
        let hourlyTotal = standSeattle.cookiesPerHourArray[i][1] + standTokyo.cookiesPerHourArray[i][1] + standDubai.cookiesPerHourArray[i][1] + standParis.cookiesPerHourArray[i][1] + standLima.cookiesPerHourArray[i][1];
        const cellTotal = document.createElement('td');
        cellTotal.textContent = hourlyTotal;
        row3.appendChild(cellTotal);
        globalTotal += hourlyTotal;
    }
    const globalTotalCell = document.createElement('td');
    globalTotalCell.textContent= globalTotal;
    row3.appendChild(globalTotalCell);
}

CookieStand.prototype.render = function(){
    const article = document.createElement('article');
    const profileContainer = document.getElementById(this.id);
    profileContainer.appendChild(article);

    const pElem = document.createElement('p');
    article.appendChild (pElem);

    const tableElem = document.getElementById('table');

    const row2 = document.createElement('tr');
    tableElem.appendChild(row2);

    const locationsCell = document.createElement('td');
    locationsCell.textContent = this.id;
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

let standSeattle = new CookieStand ('seattle', 'Seattle Stand', 23, 65, 6.3, 0);
standSeattle.generateCustomersPerHour();
standSeattle.calcCookiesEachHour();
standSeattle.render();
let standTokyo = new CookieStand ('tokyo', 'Tokyo Stand', 3, 24, 1.2, 0);
standTokyo.generateCustomersPerHour();
standTokyo.calcCookiesEachHour();
standTokyo.render();
let standDubai = new CookieStand ('dubai', 'Dubai Stand', 11, 38, 3.7, 0);
standDubai.generateCustomersPerHour();
standDubai.calcCookiesEachHour();
standDubai.render();
let standParis = new CookieStand ('paris', 'Paris Stand', 20, 38, 2.3, 0);
standParis.generateCustomersPerHour();
standParis.calcCookiesEachHour();
standParis.render();
let standLima = new CookieStand ('lima', 'Lima Stand', 2, 16, 4.6, 0);
standLima.generateCustomersPerHour();
standLima.calcCookiesEachHour();
standLima.render();

tableFooterTotals();

// const cities = [seattle, tokyo, dubai, paris, lima];
// for (let index = 0; index < cities.length; i++){
//     const cities = cities[index];
//     id.render();
// }