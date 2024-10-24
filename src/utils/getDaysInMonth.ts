export function getDaysInMonth(month: number, year: number = new Date().getFullYear()): number {
    if (month < 1 || month > 12) {
        throw new Error("O número do mês deve estar entre 1 e 12.");
    }

    // Utiliza o objeto Date para calcular o último dia do mês
    return new Date(year, month, 0).getDate();
}