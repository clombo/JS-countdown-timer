//See
//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_countdown

const Timer = function(interval, toDate, Elem){
    this.toDate = toDate;
    this.interval = parseInt(interval,10);
    this.Elem = Elem
    this.countdown();
}

Timer.prototype.countdown = function(){
   
    //Current date
    var now = new Date().getTime();

    //To date
    var to = new Date(this.toDate).getTime();

    //difference
    var diff = to - now;
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));;
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var min = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var sec = Math.floor((diff % (1000 * 60)) / 1000);

    //Get output template
    var output = `${days}d ${hours}h ${min}m ${sec}s`

    this.Elem.innerHTML = `<span class="txt">${output}</span>`
    setTimeout(() => this.countdown(), this.interval);

}

//Init on DOM load
document.addEventListener('DOMContentLoaded',init);

//Init timer
function init() {
    const txtElement = document.querySelector('.txt-type');
    const myDate = txtElement.getAttribute('data-date');

    new Timer(1000,myDate,txtElement);
}