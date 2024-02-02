import { useState } from 'react';
import './App.css';

type Card = {
  id: number;
  name: string;
};

const nomineesData = [
  { id: 1, name: 'Vinland Saga Season 2' },
  { id: 2, name: '?' },
  { id: 3, name: 'Nominee 3' },
] satisfies Card[];

function App() {
  const [selectedCard, setSelectedCard] = useState<Card>();

  const handleCardClick = (id: number) => {
    const card = nomineesData.find((nominee) => nominee.id === id);
    setSelectedCard(card);
  };

  const handleRemoveCard = () => {
    setSelectedCard(undefined);
  }

  return (
    <main>
      <h1>Anime of Year</h1>
      <section>
        <div className="cards">
          {nomineesData.map(({ id, name }) => (
            <div
              key={id}
              className={`nominee-card ${
                selectedCard?.id === id && 'selected'
              }`}
              onClick={() => handleCardClick(id)}
            >
              <h2>{name}</h2>
            </div>
          ))}
        </div>
      </section>
      <button onClick={handleRemoveCard}>Remove Vote</button>
    </main>
  );
}

export default App;
