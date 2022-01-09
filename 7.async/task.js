class AlarmClock {
    constructor (alarmCollection, timerId) {
    alarmCollection = this.alarmCollection = [];
    timerId = this.timerId = null;
    }

    addClock (time, callback, id) {
        if (id === undefined) {
            throw new Error('id не передан')
        } else if (this.alarmCollection.some((arr) => arr.id === id)) {
            console.error('Будильник с таким id уже существует')
          } else {
            let object = new Object()
            object.time = time;
            object.id = id;
            object.callback = callback;
            this.alarmCollection.push(object)
            }

    }

    removeClock (id) {
        let firstLength = this.alarmCollection.length
        let result = this.alarmCollection.filter(() => this.alarmCollection.id === id)
        let secondLength = result.length
        if (firstLength === secondLength) {
            return false;
        } else {
            this.alarmCollection.splice(result, 1) 
            return true;
        }
    }

    getCurrentFormattedTime() {
    let today = new Date();
    return today.toTimeString().slice(0,5);
    }

    start() {
        let checkClock = (arr) => {
            if ( arr.time === this.getCurrentFormattedTime()) {
                this.addClock().callback()
            }
        }
    
        if (this.timerId === null) {
           let idAlarm = setInterval(() => this.alarmCollection.forEach(checkClock), 1000);
           this.timerId = idAlarm;
        }
    }

    stop() {
        if (this.timerId !== null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        this.alarmCollection.forEach((alarmInfo) => {console.log(`Будильник № ${alarmInfo.id} заведен на ${alarmInfo.time}`)})
    }

    clearAlarms () {
        this.stop();
        this.alarmCollection = [];
    }
}



 function testCase() {
    let phoneAlarm = new AlarmClock();
    phoneAlarm.addClock('01:10', () => console.log('Wake up'), 1)
    phoneAlarm.addClock('01:11', () => {console.log('Wake up'); phoneAlarm.removeClock(2)}, 2)

    phoneAlarm.addClock('00:57', () => console.log('Wake up'))
     phoneAlarm.addClock('01:12', () => {
         console.log('Wake up');
         phoneAlarm.clearAlarms();
         phoneAlarm.printAlarms()
     }, 3)
     phoneAlarm.addClock('00:13', () => console.log('Wake up'), 1)
     phoneAlarm.printAlarms()
    phoneAlarm.start();
    
 }
 testCase()