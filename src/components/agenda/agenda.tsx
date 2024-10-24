'use client'
import AgendaHeader from "@/components/agenda/agendaHeader";
import CalendarTable from "@/components/calendarTable";
import AgendaEvents from "@/components/agenda/agendaEvents";
import { useState } from "react";

const Schedule = () => {
    const [month, setMonth] = useState("Novembro 2024");

    const handlePrevious = () => {
        // Lógica para mudar para o mês anterior
    };

    const handleNext = () => {
        // Lógica para mudar para o próximo mês
    };
    const today = new Date();
    return (
        <div className="flex items-center justify-center py-1 px-1">
            <div className="flex flex-row shadow-lg">
                <div className="p-5 bg-gray-800">
                    <AgendaHeader month={month} onPrevious={handlePrevious} onNext={handleNext} />
                    <div className="pt-12">
                        <CalendarTable year={today.getFullYear()} month={today.getMonth()} />
                    </div>
                </div>
                <div className="px-3 py-3 bg-gray-700">
                    <AgendaEvents />
                </div>
            </div>
        </div>
    );
};

export default Schedule;
