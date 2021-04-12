// Get Current day
const getCurrentDay = () => {
    const day = new Date().getDate()
    if(day < 10) {
        return `0${day}`
    }
    else {
        return day
    }
}

// Get Current month
const getCurrentMonth  = () => {
    const month = new Date().getMonth() + 1
    if(month < 10) {
        return `0${month}`
    }
    else {
        return month
    }
}

// Get Current month
const getLastMonth  = () => {
    const month = new Date().getMonth()
    if(month < 10) {
        return `0${month}`
    }
    else {
        return month
    }
}

// Current day/month/year
const currentYear = new Date().getFullYear()
const currentMonth = getCurrentMonth()
const lastMonth = getLastMonth()
const currentDay = getCurrentDay()

// Getting the current timespans
export const currentDate = `${currentYear}-${currentMonth}-${currentDay}`
export const lastDate = `${currentYear}-${lastMonth}-${currentDay}`