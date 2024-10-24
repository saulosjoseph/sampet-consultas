import { FC } from "react";
import { FaUser, FaDog, FaShower, FaCut, FaTaxi, FaInfoCircle } from "react-icons/fa";

interface Event {
  time: string;
  proprietario: string;
  name: string;
  raca: string;
  banho: boolean;
  tosa: boolean;
  taxi: boolean;
  obeservacao: string;
}

const events: Event[] = [
  {
    time: "Manhã",
    proprietario: "Carlos Almeida",
    name: "Bobby",
    raca: "Labrador",
    banho: true,
    tosa: false,
    taxi: true,
    obeservacao: "Cachorro ansioso, prefere banho rápido.",
  },
  {
    time: "Manhã",
    proprietario: "Ana Souza",
    name: "Mimi",
    raca: "Persa",
    banho: true,
    tosa: true,
    taxi: false,
    obeservacao: "Gato calmo, mas precisa de atenção na tosa.",
  },
  {
    time: "Manhã",
    proprietario: "João Silva",
    name: "Rex",
    raca: "Pastor Alemão",
    banho: false,
    tosa: true,
    taxi: false,
    obeservacao: "Tosa apenas nas patas e orelhas.",
  },
  {
    time: "Tarde",
    proprietario: "Mariana Costa",
    name: "Bella",
    raca: "Poodle",
    banho: true,
    tosa: true,
    taxi: true,
    obeservacao: "Necessita shampoo especial para pele sensível.",
  },
  {
    time: "Tarde",
    proprietario: "Ricardo Lopes",
    name: "Thor",
    raca: "Bulldog Inglês",
    banho: true,
    tosa: false,
    taxi: true,
    obeservacao: "Verificar alergias antes do banho.",
  }
];

const AgendaEvents: FC = () => (
  <div className="px-1 w-96">
    {events.map(({ time, proprietario, name, raca, banho, tosa, taxi, obeservacao }, index) => (
      <div key={index} className="border-b mb-4 pb-4 border-gray-400 border-dashed pt-5">
        <p className="text-xs font-light leading-3 text-gray-300">{time}</p>
        <div className="flex justify-between my-3 w-fit gap-3">
          <div className="flex tooltip" data-tip="Proprietário">
            <FaUser className="me-2" />
            <span>
              {proprietario}
            </span>
          </div>
          <div className="flex tooltip" data-tip="Animal">
            <FaDog className="me-2" />
            <span>
              {name}
            </span>
          </div>
          <div className="flex tooltip" data-tip="Raça">
            <FaInfoCircle className="me-2" />
            <span>
              {raca}
            </span>
          </div>
        </div>
        <div className="flex justify-between w-fit gap-3">
          <div className="flex tooltip" data-tip="Banho">
            <FaShower className="me-2" />
            <span>
              {banho ? 'Sim' : 'Não'}
            </span>
          </div>
          <div className="flex tooltip" data-tip="Tosa">
            <FaCut className="me-2" />
            <span>
              {tosa ? 'Sim' : 'Não'}
            </span>
          </div>
          <div className="flex tooltip" data-tip="Taxi">
            <FaTaxi className="me-2" />
            <span>
              {taxi ? 'Sim' : 'Não'}
            </span>
          </div>
        </div>

        {obeservacao && <p className="text-sm pt-2 leading-4 text-gray-600 dark:text-gray-300">{obeservacao}</p>}
      </div>
    ))}
  </div>
);

export default AgendaEvents;
