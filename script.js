

const activities = [
    { time: '10:00 AM', activity: 'Conference Room Setup' },
    { time: '11:00 AM', activity: 'Guest Check-out' },
    { time: '12:00 PM', activity: 'Room Cleaning Completed' },
    { time: '01:00 PM', activity: 'Maintenance Request Logged' }
];

const navItems = [
    { Name: 'Dashboard' },
    { Name: 'Reservation' },
    { Name: 'Rooms' },
    { Name: 'Messages' },
    { Name: 'Housekeeping' },
    { Name: 'Inventory' },
    { Name: 'Calendar' },
    { Name: 'Financials' },
    { Name: 'Reviews' },
    { Name: 'Concierge' },
]

const navList = document.getElementById('navList');

navItems.map((navItem) => {
    const list = `<li class="d-flex flex-wrap align-items-center nav-item">
                <img src="./Logos/${navItem.Name}.svg"/>
                <p class="nav-name">${navItem.Name}</p>
                </li>`
    navList.innerHTML += list;
})

const ratings = {
    Facilities: 4.4,
    Cleanliness: 4.7,
    Services: 4.6,
    Comfort: 4.8,
    Location: 4.5
};
const ratingNames = document.getElementById("rating-names");
const ratingValues = document.getElementById("rating-value");
const ratingToPercent = (value) => (value / 5) * 100;
Object.keys(ratings).forEach((key) => {
    const rating = `<span>${key}</span>`
    ratingNames.innerHTML += rating;
})
Object.values(ratings).forEach((value) => {
    const remainingRating = 5 - Number(value);
    const rating = `<div class="d-flex gap-2">
                                    <div class="progress">
                                        <div id="facilities-bar" class="progress-bar" role="progressbar"
                                            style="width: ${ratingToPercent(value)}%;background-color:#E7F68E" aria-valuemin="0"
                                            aria-valuemax="5">
                                        </div>
                                        <div id="facilities-bar" class="progress-bar" role="progressbar"
                                            style="width: ${ratingToPercent(remainingRating)}%;background-color:#CCD97E" aria-valuemin="0"
                                            aria-valuemax="5">
                                        </div>
                                    </div>
                                    <p>${value}</p>
                                </div>`
    ratingValues.innerHTML += rating;
})

const stepperContent = [
    { Date: 'June 19, 2028', Text: 'Set Up Conference Room B for 10 AM Meeting' },
    { Date: 'June 19, 2028', Text: 'Restock Housekeeping Supplies on 3rd Floor' },
    { Date: 'June 20, 2028', Text: 'Inspect and Clean the Pool Area' },
    { Date: 'June 20, 2028', Text: 'Check-In Assistance During Peak Hours (4 PM - 6 PM)' }
]

const stepperBoxes = document.getElementById('stepper-boxes');

for (let i = 0; i < stepperContent.length; i++) {
    const data = `<div class="stepperBox"></div>
                                <div class="stepperLine"></div>`
    stepperBoxes.innerHTML += data;
}
const stepperContentMain = document.getElementById('stepper-content-main');
stepperContent.map((content) => {
    const data = `<div class="stepper-content-box">
                                    <div class="d-flex justify-content-between px-3">
                                        <span>
                                            ${content.Date}
                                        </span>
                                        <p>...</p>
                                    </div>
                                    <div class="stepper-content px-3">
                                        ${content.Text}
                                    </div>
                                </div>`
    stepperContentMain.innerHTML += data;
})

const stepperContent2 = [
    { Time: '12:00 PM', Name: 'Conference Room Setup', Text1: 'Events Team set up Conference Room B for 10 AM', Text2: 'meeting, including AV equipment and refreshments.' },
    { Time: '11:30 AM', Name: 'Guest Check-Out', Text1: 'Sarah Johnson completed check-out process and', Text2: 'updated room availability for Room 305.' },
    { Time: '11:00 AM', Name: 'Room Cleaning Completed', Text1: 'Maria Gonzalez cleaned and prepared Room 204 for', Text2: 'new guests.' },
    { Time: '10:30 AM', Name: 'Maintenance Request Logged', Text1: 'Broken toilet in Room 109, maintenance request', Text2: 'assigned to technician.' },
    { Time: '10:00 AM', Name: 'Guest Check-In', Text1: 'Angus Copper completed check-in process and issued', Text2: 'room key.' },
]

const stepperIcons = ['ChalkboardTeacher', 'SignOut', 'CircleWavyCheck', 'WarningOctagon', 'SignIn'];
const stepperCircles = document.getElementById('stepper-circles');

stepperIcons.forEach((icons) => {
    const data = `<div class="stepper-circle"><img src='./Logos/${icons}.svg'/></div>
    <div class="stepper-circle-line"></div>`
    stepperCircles.innerHTML += data;
});

const stepperContentMain2 = document.getElementById('stepper-content-main-2');
stepperContent2.map((content) => {
    const data = `<div class="stepper-content-box-2">
                                    <div class="d-flex justify-content-between">
                                        <span>
                                            ${content.Time}
                                        </span>
                                    </div>
                                    <div class="stepper-name">
                                        ${content.Name}
                                    </div>
                                    <p class="stepper-text">
                                        ${content.Text1}
                                    </p>
                                    <p class="stepper-text">
                                        ${content.Text2}
                                    </p>
                                </div>`
    stepperContentMain2.innerHTML += data;
})

const cardDetails = [
    { Name: 'New Bookings', Count: '840', StatusIcon: 'TrendUp', StatusBg: '#F5FDF9', Status: '8.70%', Icon: 'CalendarBlank', IconBg: '#F5FDF9', Bg: '#D5F6E5' },
    { Name: 'Check-in', Count: '231', StatusIcon: 'TrendUp', StatusBg: '#E7F68E', Status: '3.56%', Icon: 'SignIn', IconBg: '#D5F6E5', Bg: '#FFFFFF' },
    { Name: 'Check-out', Count: '124', StatusIcon: 'TrendDown', StatusBg: '#FFC7C7', Status: '1.06%', Icon: 'SignOut', IconBg: '#D5F6E5', Bg: '#FFFFFF' },
    { Name: 'Total Revenue', Count: '$123,980', StatusIcon: 'TrendDown', StatusBg: '#E7F68E', Status: '5.70%', Icon: 'Dollar', IconBg: '#D5F6E5', Bg: '#FFFFFF' },
]

const cardMain = document.getElementById('card-row');

cardDetails.map((cardData) => {
    const content = `
                         <div class="card p-3 status-card" style="background-color:${cardData.Bg};">
                                <div class="d-flex justify-content-between">
                                    <div>
                                        <p class="card-name">${cardData.Name}</p>
                                        <h2>${cardData.Count}</h2>
                                    </div>
                                    <div class="card-icon" style="background-color:${cardData.IconBg}">
                                        <img src="./Logos/${cardData.Icon}.svg" />
                                    </div>
                                </div>
                                <div class="d-flex gap-2 mt-3">
                                    <span class="card-status" style="background-color:${cardData.StatusBg}"><img src="./Logos/${cardData.StatusIcon}.svg" alt="hike">${cardData.Status}</span>
                                    <p>from last week</p>
                                </div>
                            </div>
                        </div>`
    cardMain.innerHTML += content;
})

const convertToPercent = (rooms) => (rooms / 450) * 100;

const rooms = [
    { Number: '286', Bg: '#D5F6E5' },
    { Number: '87', Bg: '#F3FBC7' },
    { Number: '32', Bg: '#E7F68E' },
    { Number: '13', Bg: '#CCD97E' }
];

const progressContainer = document.getElementById('progress-container');

rooms.forEach((rooms) => {
    const content = `<div class="progress-segment" style="width: ${convertToPercent(rooms.Number)}%;background-color:${rooms.Bg}">
                                        </div>`
    progressContainer.innerHTML += content;
})

const roomDetails = [
    { Status1: 'Occupied', Number1: '286', Bg1: '#D5F6E5', Status2: 'Reserved', Number2: '87', Bg2: '#F3FBC7' },
    { Status1: 'Available', Number1: '32', Bg1: '#E7F68E', Status2: 'Not Ready', Number2: '13', Bg2: '#CCD97E' },
]

const roomDetailsMain = document.getElementById('room-details-main');

roomDetails.map((roomDetail) => {
    const percent = convertToPercent(roomDetail.Number1);
    const content = `<div class="room-availability-details d-flex gap-5">
                                            <div class="d-flex gap-2">
                                                <div class="status-line" style="background-color:${roomDetail.Bg1};"></div>
                                                <div class="room-status">
                                                    <p class="card-name">${roomDetail.Status1}</p>
                                                    <h2>${roomDetail.Number1}</h2>
                                                </div>
                                            </div>
                                            <div class="d-flex gap-2">
                                                <div class="status-line" style="background-color:${roomDetail.Bg2};"></div>
                                                <div class="room-status">
                                                    <p class="card-name">${roomDetail.Status2}</p>
                                                    <h2>${roomDetail.Number2}</h2>
                                                </div>
                                            </div>
                                        </div>`
    roomDetailsMain.innerHTML += content;
});

const bookings = [
    { id: 'LG-B00108', guest: 'Angus Copper', type: 'Deluxe', number: '101', duration: '3 nights', checkIn: 'June 19, 2028', checkOut: 'June 22, 2028', status: 'Checked-in' },
    { id: 'LG-B00109', guest: 'Catherine Lopp', type: 'Standard', number: '202', duration: '2 nights', checkIn: 'June 19, 2028', checkOut: 'June 21, 2028', status: 'Checked-in' },
    { id: 'LG-B00110', guest: 'Edgar Irving', type: 'Suite', number: '303', duration: '5 nights', checkIn: 'June 19, 2028', checkOut: 'June 24, 2028', status: 'Checked-in' },
    { id: 'LG-B00111', guest: 'Ice B. Holand', type: 'Standard', number: '105', duration: '4 nights', checkIn: 'June 19, 2028', checkOut: 'June 23, 2028', status: 'Checked-in' },
    { id: 'LG-B00112', guest: 'Gertrude Bale', type: 'Deluxe', number: '204', duration: '1 night', checkIn: 'June 19, 2028', checkOut: 'June 20, 2028', status: 'Pending' }
];
const bookingList = document.getElementById('booking-list');
bookings.forEach(booking => {
    const row = `<tr>
        <td>${booking.id}</td>
        <td>${booking.guest}</td>
        <td>${booking.type}</td>
        <td>${booking.number}</td>
        <td>${booking.duration}</td>
        <td>${booking.checkIn} - ${booking.checkOut}</td>
        <td>${booking.status}</td>
    </tr>`;
    bookingList.innerHTML += row;
});

const ctx = document.getElementById('revenue-chart').getContext('2d');
const revenueChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Dec 2027', 'Jan 2028', 'Feb 2028', 'Mar 2028', 'Apr 2028', 'May 2028'],
        datasets: [{
            // backgroundColor: 'linear-gradient(#D5F6E5B8, #D5F6E500)',
            borderColor: '#CCD97E',
            data: [250, 200, 150, 315, 230, 380, 290],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
            },
            legend: {
                display: false
            }
        },
        interaction: {
            intersect: false,
        },
        scales: {
            x: {
                display: true,
            },
            y: {
                display: true,
                beginAtZero: true,
                max: 400,
                ticks: {
                    stepSize: 100
                }
            }
        }
    },
});

const ctx1 = document.getElementById('splitBarChart').getContext('2d');

const data = {
    labels: ['12 Jun', '13 Jun', '14 Jun', '15 Jun', '16 Jun', '17 Jun', '18 Jun'],
    datasets: [
        {
            label: 'Booked',
            data: [65, 70, 68, 72, 75, 68, 50],
            backgroundColor: '#D5F6E5',
            barThickness: 40,
            borderColor: '#D5F6E5',
            borderWidth: 1
        },
        {
            label: 'Cancelled',
            data: [80, 85, 88, 82, 96, 82, 90],
            backgroundColor: '#E7F68E',
            barThickness: 40,
            borderColor: '#E7F68E',
            borderWidth: 1,
            borderRadius: {
                topLeft: 4,
                topRight: 4
            }
        }
    ]
};

const config = {
    type: 'bar',
    data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
                ticks: {
                    stepSize: 25
                }
            },
            x: {
                stacked: true
            }
        },
        plugins: {
            tooltip: {
                mode: 'index',
                intersect: false
            },
            legend: {
                display: false
            }
        }
    }
};

const splitBarChart = new Chart(ctx1, config);

const ctx2 = document.getElementById('doughnut-chart').getContext('2d');

const data2 = {
    labels: ['Direct Booking', 'Booking.com', 'Agoda', 'Airbnb', 'Hotels.com', 'Others'],
    datasets: [{
        label: 'Values',
        data: [61, 12, 11, 9, 5, 2],
        backgroundColor: [
            '#D5F6E5',
            '#BCD9CA',
            '#CCD97E',
            '#E7F68E',
            '#F3FBC7',
            '#EAFBF2',
        ],
        borderColor: [
            '#D5F6E5',
            '#BCD9CA',
            '#CCD97E',
            '#E7F68E',
            '#F3FBC7',
            '#EAFBF2',
        ],
        borderWidth: 1
    }]
};

const config2 = {
    type: 'doughnut',
    data: data2,
    options: {
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return context.label + ': ' + context.raw + '%';
                    }
                }
            },
            legend: {
                display: false
            }
        }
    }
};

const myChart = new Chart(ctx2, config2);

const chartContentDetails = [
    { Name: 'Direct Booking', Bg: '#D5F6E5', value: '61%' },
    { Name: 'Booking.com', Bg: '#BCD9CA', value: '12%' },
    { Name: 'Agoda', Bg: '#CCD97E', value: '11%' },
    { Name: 'Airbnb', Bg: '#E7F68E', value: '9%' },
    { Name: 'Hotels.com', Bg: '#F3FBC7', value: '5%' },
    { Name: 'Others', Bg: '#EAFBF2', value: '2%' }
]

const chartContent = document.getElementById('chart-content');

chartContentDetails.map((detail) => {
    const data = `<div class="d-flex gap-2">
                                            <div class="d-flex bg-div">
                                                <div class="color-dot" style="background-color:${detail.Bg};"></div>
                                            </div>
                                            <div>
                                                <span>${detail.value}</span>
                                                <small>${detail.Name}</small>
                                            </div>
                                        </div>`
    chartContent.innerHTML += data;
});