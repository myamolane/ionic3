import {AppConfig} from '../../app/app.config'
export class BaseService {
    static DAYS_OF_MONTH = [31,28,31,30,31,30,31,31,30,31,30,31]
    static getToken() {
        if (!AppConfig.token){
            AppConfig.token = <string>JSON.parse(localStorage.getItem('token'))
        }
        return AppConfig.token
    }

    static formatNumber(n) {
        if (!n)
            return '00'
        if (n < 10)
            return '0' + n
        else
            return n + ''
    }

    static millisecondsToString(milliseconds, limit = false) {
        if (!milliseconds)
            return '00:00:00'
        if (limit && milliseconds >= 3599990)
            return '已超时,请尽快上门'
            //return '59:59.99'
        let milliSec = milliseconds % 1000;
        let totalSec = (milliseconds - milliSec) / 1000
        let sec = totalSec % 60
        let min = (totalSec - sec) / 60
        let timeString = this.formatNumber(min) + ":" + this.formatNumber(sec) + "." + this.formatNumber(0 | milliSec / 10)
        return timeString
    }

    static secondsToTime(seconds){
        let mins = Math.floor(seconds/60)
        seconds = Math.floor(seconds - mins * 60)
        let hours =Math.floor( mins/60)
        mins = mins - hours * 60
        let result=""
        if (hours>0 && hours<10)
            result+="0"+hours+":"
        else if (hours>9)
            result+=hours+":"
        if (mins<10)
            result+="0"+mins+":"
        else
            result+=mins+":"
        if (seconds<10)
            result+="0"+seconds
        else
            result+=seconds
        return result
    }

    static getWeekNumOfYear(date: Date){
        let firstDay = new Date(date.getFullYear(), 0 ,1)
        let firstOfWeek = firstDay.getDay()
        
        let firstWeekDayNum = 8 - firstOfWeek
        let otherDays = this.getDaysOfYear(date) - firstWeekDayNum
        if (otherDays > 0){
            let weekNumOfOtherDays
            if (otherDays % 7 === 0){
                weekNumOfOtherDays = otherDays / 7
            }
            else{
                weekNumOfOtherDays = otherDays / 7 + 1
            }
            return Math.floor(weekNumOfOtherDays + 1)
        }
        else
            return 1
    }

    static getDaysOfYear(date: Date){
        let year = date.getFullYear()
        let days = 0
        for (let i = 0; i < date.getMonth(); i++){
            days += this.getDaysOfMonth(year, i + 1)
        }
        days += date.getDate()
        return days
    }
    static getDaysOfMonth(year, month){
        if (this.isLeapYear(year))
            return this.DAYS_OF_MONTH[month]+1
        else
            return this.DAYS_OF_MONTH[month - 1]
    }
    static getDaysOfMonthByDate(date: Date){
        return this.getDaysOfMonth(date.getFullYear(), date.getMonth() + 1)
    }
    static isLeapYear(year){
        if ((year % 4 === 0 && year % 100 != 0) || year % 400 ===0)
            return true
        else
            return false
    }
    static getDateOfWeekStart(year, week){
        week --;
        if (week == 0)
            return new Date(year, 0 , 1)
        let thisYear = new Date(year,0,1)
        let firstDay = thisYear.getDay()
        let otherDays = 8 - firstDay
        let month = 1
        let day = 1
        day += otherDays
        week --
        let monthDays = this.getDaysOfMonth(year, month)
        for(; week>0; week--){
            day += 7
            if (day > monthDays){
                day %= monthDays
                monthDays = this.getDaysOfMonth(year, ++month)
            }
        }
        return new Date(year, month-1, day)
    }

    static getFirstDayOfYear(year){
        let thisYear = new Date(year, 0 , 1)
        return thisYear.getDay()
    }

    static parseDate(dateStr: string){
        return new Date()
    }
}