/**
 * {HTMLDivElement}
 */
var hoursHand = document.querySelector('body > div > div > div.hand.hour-hand');
/**
 * {HTMLDivElement}
 */
var minuteHand = document.querySelector('body > div > div > div.hand.min-hand');
/**
 * {HTMLDivElement}
 */
var secondHand = document.querySelector('body > div > div > div.hand.second-hand');

console.log(hoursHand);

const initializeTime = () => {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    updateClock(hour, minute, second);
};

/**
* @param {number} hour
* @param {number} minute
* @param {number} second
*/
const updateClock = (hour, minute, second) => {
    const secondsDegrees = ((second / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minsDegrees = ((minute / 60) * 360) + ((second/60)*6) + 90;
    minuteHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hourDegrees = ((hour / 12) * 360) + ((minute/60)*30) + 90;
    hoursHand.style.transform = `rotate(${hourDegrees}deg)`;
};

setInterval(initializeTime, 1000);
initializeTime();


