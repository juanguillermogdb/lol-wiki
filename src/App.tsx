import { MOCK_CHAMPIONS } from './data/Champion';
import { ChampionCard } from './components/ChampionCard';

function App() {
  return (
    <div style={{ padding: '20px', backgroundColor: '#071A30', minHeight: '100vh', color: '#fff' }}>
      <h1>League of Legends Wiki</h1>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        {MOCK_CHAMPIONS.map((champ) => (
          <ChampionCard key={champ.id} campeon={champ} />
        ))}
      </div>
    </div>
  );
}

export default App
