import { FC } from "react";

interface AgendaHeaderProps {
    month: string;
    onPrevious: () => void;
    onNext: () => void;
}

const AgendaHeader: FC<AgendaHeaderProps> = ({ month, onPrevious, onNext }) => (
    <div className="px-4 flex items-center justify-between">
        <span tabIndex={0} className="focus:outline-none text-base font-bold dark:text-gray-100 text-gray-800">
            {month}
        </span>
        <div className="flex items-center">
            <button aria-label="calendar backward" onClick={onPrevious} className="focus:text-gray-400 hover:text-gray-400 text-gray-800 dark:text-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="15 6 9 12 15 18" />
                </svg>
            </button>
            <button aria-label="calendar forward" onClick={onNext} className="focus:text-gray-400 hover:text-gray-400 ml-3 text-gray-800 dark:text-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler  icon-tabler-chevron-right" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="9 6 15 12 9 18" />
                </svg>
            </button>
        </div>
    </div>
);

export default AgendaHeader;
