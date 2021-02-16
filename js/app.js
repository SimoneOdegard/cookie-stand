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

let seattle = {
    id: 'seattle',
    location: 'Seattle',
    minCustomersPerHour: 23,
    maxCustomersPerHour: 65,
    avgCookiesPerSale: 6.3,
    simulatedCookiesEachHour: [],
    totalCookies: 0,
    generateCustomersPerHour: function() {
        let customersPerHour = randomInRange(this.minCustomersPerHour, this.maxCustomersPerHour);
        return customersPerHour;
    },
    calcCookiesEachHour: function () {
        let customersPerHour = this.generateCustomersPerHour();
        let cookiesEachHour = customersPerHour * this.avgCookiesPerSale;

        return Math.ceil(cookiesEachHour);
    },
    render: function () {
        let ulElem = document.getElementById(this.id);

        for (let i = 0; i < timeSlots.length; i++) {
            let liElem = document.createElement('li');
            let cookieNumber = this.calcCookiesEachHour();
            liElem.textContent = timeSlots [i] + ' : ' + cookieNumber + ' cookies';
            ulElem.appendChild(liElem);
            this.simulatedCookiesEachHour.push([timeSlots[i], cookieNumber]);
        }
        for (let i = 0; i < this.simulatedCookiesEachHour.length; i++){
            let target = this.simulatedCookiesEachHour[i]
            let number = target [1]
            this.totalCookies += number
        }
        this.simulatedCookiesEachHour.push(['total', this.totalCookies])
        let liElem = document.createElement('li');
        liElem.textContent = 'Total' + ' : ' + this.totalCookies + ' cookies';
        ulElem.appendChild(liElem);
        console.log(this.simulatedCookiesEachHour);
        console.log(this.totalCookies);
    },
};

let tokyo = {
    id: 'tokyo',
    location: 'Tokyo',
    minCustomersPerHour: 3,
    maxCustomersPerHour: 24,
    avgCookiesPerSale: 1.2,
    simulatedCookiesEachHour: [],
    totalCookies: 0,
    generateCustomersPerHour: function() {
        let customersPerHour = randomInRange(this.minCustomersPerHour, this.maxCustomersPerHour);
        return customersPerHour;
    },
    calcCookiesEachHour: function () {
        let customersPerHour = this.generateCustomersPerHour();
        let cookiesEachHour = customersPerHour * this.avgCookiesPerSale;

        return Math.ceil(cookiesEachHour);
    },
    render: function () {
        let ulElem = document.getElementById(this.id);

        for (let i = 0; i < timeSlots.length; i++) {
            let liElem = document.createElement('li');
            let cookieNumber = this.calcCookiesEachHour();
            liElem.textContent = timeSlots [i] + ' : ' + cookieNumber + ' cookies';
            ulElem.appendChild(liElem);
            this.simulatedCookiesEachHour.push([timeSlots[i], cookieNumber]);
        }
        for (let i = 0; i < this.simulatedCookiesEachHour.length; i++){
            let target = this.simulatedCookiesEachHour[i]
            let number = target [1]
            this.totalCookies += number
        }
        this.simulatedCookiesEachHour.push(['total', this.totalCookies])
        let liElem = document.createElement('li');
        liElem.textContent = 'Total' + ' : ' + this.totalCookies + ' cookies';
        ulElem.appendChild(liElem);
        console.log(this.simulatedCookiesEachHour);
        console.log(this.totalCookies);
    },
};

let dubai = {
    id: 'dubai',
    location: 'Dubai',
    minCustomersPerHour: 11,
    maxCustomersPerHour: 38,
    avgCookiesPerSale: 3.7,
    simulatedCookiesEachHour: [],
    totalCookies: 0,
    generateCustomersPerHour: function() {
        let customersPerHour = randomInRange(this.minCustomersPerHour, this.maxCustomersPerHour);
        return customersPerHour;
    },
    calcCookiesEachHour: function () {
        let customersPerHour = this.generateCustomersPerHour();
        let cookiesEachHour = customersPerHour * this.avgCookiesPerSale;

        return Math.ceil(cookiesEachHour);
    },
    render: function () {
        let ulElem = document.getElementById(this.id);

        for (let i = 0; i < timeSlots.length; i++) {
            let liElem = document.createElement('li');
            let cookieNumber = this.calcCookiesEachHour();
            liElem.textContent = timeSlots [i] + ' : ' + cookieNumber + ' cookies';
            ulElem.appendChild(liElem);
            this.simulatedCookiesEachHour.push([timeSlots[i], cookieNumber]);
        }
        for (let i = 0; i < this.simulatedCookiesEachHour.length; i++){
            let target = this.simulatedCookiesEachHour[i]
            let number = target [1]
            this.totalCookies += number
        }
        this.simulatedCookiesEachHour.push(['total', this.totalCookies])
        let liElem = document.createElement('li');
        liElem.textContent = 'Total' + ' : ' + this.totalCookies + ' cookies';
        ulElem.appendChild(liElem);
        console.log(this.simulatedCookiesEachHour);
        console.log(this.totalCookies);
    },
};

let paris = {
    id: 'paris',
    location: 'Paris',
    minCustomersPerHour: 20,
    maxCustomersPerHour: 38,
    avgCookiesPerSale: 2.3,
    simulatedCookiesEachHour: [],
    totalCookies: 0,
    generateCustomersPerHour: function() {
        let customersPerHour = randomInRange(this.minCustomersPerHour, this.maxCustomersPerHour);
        return customersPerHour;
    },
    calcCookiesEachHour: function () {
        let customersPerHour = this.generateCustomersPerHour();
        let cookiesEachHour = customersPerHour * this.avgCookiesPerSale;

        return Math.ceil(cookiesEachHour);
    },
    render: function () {
        let ulElem = document.getElementById(this.id);

        for (let i = 0; i < timeSlots.length; i++) {
            let liElem = document.createElement('li');
            let cookieNumber = this.calcCookiesEachHour();
            liElem.textContent = timeSlots [i] + ' : ' + cookieNumber + ' cookies';
            ulElem.appendChild(liElem);
            this.simulatedCookiesEachHour.push([timeSlots[i], cookieNumber]);
        }
        for (let i = 0; i < this.simulatedCookiesEachHour.length; i++){
            let target = this.simulatedCookiesEachHour[i]
            let number = target [1]
            this.totalCookies += number
        }
        this.simulatedCookiesEachHour.push(['total', this.totalCookies])
        let liElem = document.createElement('li');
        liElem.textContent = 'Total' + ' : ' + this.totalCookies + ' cookies';
        ulElem.appendChild(liElem);
        console.log(this.simulatedCookiesEachHour);
        console.log(this.totalCookies);
    },
};

let lima = {
    id: 'lima',
    location: 'Lima',
    minCustomersPerHour: 2,
    maxCustomersPerHour: 16,
    avgCookiesPerSale: 4.6,
    simulatedCookiesEachHour: [],
    totalCookies: 0,
    generateCustomersPerHour: function() {
        let customersPerHour = randomInRange(this.minCustomersPerHour, this.maxCustomersPerHour);
        return customersPerHour;
    },
    calcCookiesEachHour: function () {
        let customersPerHour = this.generateCustomersPerHour();
        let cookiesEachHour = customersPerHour * this.avgCookiesPerSale;

        return Math.ceil(cookiesEachHour);
    },
    render: function () {
        let ulElem = document.getElementById(this.id);

        for (let i = 0; i < timeSlots.length; i++) {
            let liElem = document.createElement('li');
            let cookieNumber = this.calcCookiesEachHour();
            liElem.textContent = timeSlots [i] + ' : ' + cookieNumber + ' cookies';
            ulElem.appendChild(liElem);
            this.simulatedCookiesEachHour.push([timeSlots[i], cookieNumber]);
        }
        for (let i = 0; i < this.simulatedCookiesEachHour.length; i++){
            let target = this.simulatedCookiesEachHour[i]
            let number = target [1]
            this.totalCookies += number
        }
        this.simulatedCookiesEachHour.push(['total', this.totalCookies])
        let liElem = document.createElement('li');
        liElem.textContent = 'Total' + ' : ' + this.totalCookies + ' cookies';
        ulElem.appendChild(liElem);
        console.log(this.simulatedCookiesEachHour);
        console.log(this.totalCookies);
    },
};

//render locations
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();