function getWeekday(day: number, month: number, year: number): string {
    const date = new Date(year, month - 1, day); // Mês começa em 0 (Janeiro = 0, Fevereiro = 1, ...)
    const daysOfWeek = [
        "Sunday", "Monday", "Tuesday", "Wednesday", 
        "Thursday", "Friday", "Saturday"
    ];

    return daysOfWeek[date.getDay()];
}