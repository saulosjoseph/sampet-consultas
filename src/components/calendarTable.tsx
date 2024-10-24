// CalendarTable.tsx
import React, { useMemo, useState } from 'react';

const daysOfWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

interface CalendarTableProps {
  year: number;
  month: number;
}

const CalendarTable: React.FC<CalendarTableProps> = ({ year, month }) => {
  const today = new Date();
  const [selectedDay, setSelectedDay] = useState(today.getDate());

  const calendarMatrix = useMemo(() => {
    const matrix: (number | null)[][] = [];
    const firstDayOfMonth = new Date(year, month, 1).getDay(); // Índice do primeiro dia do mês
    const daysInMonth = new Date(year, month, 0).getDate(); // Último dia do mês

    let week: (number | null)[] = Array(firstDayOfMonth).fill(null); // Preencher a semana com `null` até o primeiro dia
    for (let day = 1; day <= daysInMonth; day++) {
      week.push(day);

      // Sempre que a semana tiver 7 dias, adicionamos na matriz e iniciamos uma nova
      if (week.length === 7) {
        matrix.push(week);
        week = [];
      }
    }

    // Preencher o restante da última semana com `null`, se necessário
    if (week.length > 0) {
      week = [...week, ...Array(7 - week.length).fill(null)];
      matrix.push(week);
    }

    return matrix;
  }, [year, month]);

  return (
    <table className="w-full">
      <thead>
        <tr>
          {daysOfWeek.map((day) => (
            <th key={day}>
              <div className="w-full flex justify-center">
                <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                  {day}
                </p>
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {calendarMatrix.map((week, weekIndex) => (
          <tr key={weekIndex}>
            {week.map((day, dayIndex) => (
              <td key={dayIndex} className="pt-6" onClick={() => {
                if (day) {
                  setSelectedDay(day)
                }
              }}>
                <div
                  className={`px-2 py-2 cursor-pointer flex w-full justify-center ${day === selectedDay
                    ? 'text-white bg-indigo-700 rounded-full'
                    : ''
                    }`}
                >
                  <p
                    className={`text-base ${dayIndex === 0 ? 'text-white' : 'text-gray-500'
                      } dark:text-gray-100 font-medium`}
                  >
                    {day}
                  </p>
                </div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CalendarTable;
