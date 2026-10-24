import { MOCK_CHAMPIONS } from './data/Champion';
import { ChampionCard } from './components/ChampionCard';

function App() {
  return (
    <div style={{ 
      padding: '20px', 
      backgroundColor: '#071A30', 
      minHeight: '100vh',
      width: '100%', 
      color: '#fff' 
    }}>
    <h1>League of Legends Wiki</h1>
      <div style={{ 
        padding: '30px',
        display: 'grid',
        gridTemplateColumns: 'repeat(6, 1fr)', 
        gap: '16px', 
        width: '100%',
        maxWidth: '900px',
        margin: '0 auto' 
      }}>
        {MOCK_CHAMPIONS.map((champ) => (
          <ChampionCard key={champ.id} campeon={champ} />
        ))}
      </div>
    </div>
  );
}

export default App
