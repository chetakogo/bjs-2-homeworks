class AlarmClock {
    constructor (alarmCollection, timerId) {
     this.alarmCollection = [];
     this.timerId = null;
    }

    addClock (time, callback, id) {
            if (id === undefined) {
                throw new Error('id не передан')
            }
            if (this.alarmCollection.some((elemClock) => elemClock.id === id)) {
                console.error('Будильник с таким id уже существует')
            }else {
                let object;
                this.alarmCollection.push(object = {time: time, id: id, callback: callback})

        }
    }


    removeClock (id) {
        let firstLength = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter((elemClock) => elemClock.id !== id);
        let secondLength = this.alarmCollection.length;
        return firstLength > secondLength
    }

    getCurrentFormattedTime() {
    let today = new Date();
    return today.toTimeString().slice(0,5);
    }

    start() {
        let checkClock = (addedClock) => {
            if ( addedClock.time === this.getCurrentFormattedTime()) {
                addedClock.callback()
            }
        }
    
        if (this.timerId === null) {
            this.timerId= setInterval(() => this.alarmCollection.forEach(checkClock), 1000);

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
    phoneAlarm.addClock('22:30', () => console.log('Wake up1'), 1)
    phoneAlarm.addClock('22:31', () => {console.log('Wake up2'); phoneAlarm.removeClock(2)}, 2)

   try {
       phoneAlarm.addClock('22:31', () => console.log('Wake up3'))
   } catch (e) {
        console.error(e)
   }

     phoneAlarm.addClock('22:32', () => {
         console.log('Wake up');
         phoneAlarm.clearAlarms();
         phoneAlarm.printAlarms()
     }, 3)
     phoneAlarm.addClock('22:33', () => console.log('Wake up'), 1)
     phoneAlarm.printAlarms()
    phoneAlarm.start();

 }
 testCase()
