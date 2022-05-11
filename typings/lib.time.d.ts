//
//
//

type TimeDTO = {
    year: string
    month: string
    day: string
    hour: string
    min: string
    sec: string
    full: string
    week: string
}

interface TimeLib {
    getTimeDTO: () => TimeDTO
}
