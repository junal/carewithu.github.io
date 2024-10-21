const totalDays = 120;
const totalHours = 24;
const totalMinutes = 60;
const totalSeconds = 60;

const updateProgress = (elementId, percentage) => {
    const circle = document.getElementById(elementId);
    const dashoffset = 289.03 - (289.03 * percentage);
    circle.style.strokeDashoffset = dashoffset;
};

const interval = setInterval(() => {
    const now = new Date().getTime();
    const launchDate = new Date(new Date().getFullYear(), new Date().getMonth() + 4, new Date().getDate()).getTime();
    const distance = launchDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;

    updateProgress('circle_days', days / totalDays);
    updateProgress('circle_hours', hours / totalHours);
    updateProgress('circle_minutes', minutes / totalMinutes);
    updateProgress('circle_seconds', seconds / totalSeconds);

    if (distance < 0) {
        clearInterval(interval);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
    }
}, 1000);