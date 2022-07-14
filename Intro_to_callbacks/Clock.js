// class Clock {
//     new dateTime
// }

// class dateTime(time) {
//     console.log(time);
// }

class Clock {
    constructor() {
        
        let currentTime = new Date();
        this.currentHours = (currentTime.getHours() % 12);
        this.currentMinutes = currentTime.getMinutes();
        this.currentSeconds = currentTime.getSeconds();

        this.printTime();
        this._tick();
        
        // 1. Create a Date object. call new date then set it to a var 
        // 2. Store the hours, minutes, and seconds.
        // 3. Call printTime.
        // 4. Schedule the tick at 1 second intervals.
    }

    printTime() {
        console.log(`${this.currentHours}:${this.currentMinutes}:${this.currentSeconds}`) 
        // Format the time in HH:MM:SS
        // Use console.log to print it.
    }

    _tick() {
        // setInterval(() => this.currentSeconds += 1, 1000);
        // setInterval(() => this.printTime(), 1000)
        
        setInterval(() => {this.currentSeconds += 1}, 1000);
        setInterval(() => this.printTime(), 1000);
        setInterval(() => this.reset60(), 1000);
       
        // 1. Increment the time by one second.
        // 2. Call printTime.
    }
    reset60() {
        if (this.currentSeconds === 60) {
        this.currentSeconds = 0;
        this.currentMinutes += 1;
    }
        if (this.currentMinutes === 60) {
        this.currentMinutes = 0;
        this.currentHours += 1;
    }
    
        if (this.currentHour > 12) {
        this.currentHour = this.currentHour % 12;
    }       

    }
}

const clock = new Clock();


