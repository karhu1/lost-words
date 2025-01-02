import { useState, createContext, useContext } from 'react';
import HomePage from './pages/HomePage';
import GamePage from './pages/GamePage';
import SettingsPage from './pages/SettingsPage';
import LeaderboardPage from './pages/LeaderboardPage';

interface PageContextType {
  setPage: React.Dispatch<React.SetStateAction<string>>;
}

export const PageContext = createContext<PageContextType | null>(null);

function App() {
  const [page, setPage] = useState('home');

  return (
    <PageContext.Provider value={{ setPage }}>
      {page === 'home' ? <HomePage /> :
       page === 'game' ? <GamePage /> :
       page === 'settings' ? <SettingsPage /> :
       page === 'leaderboard' ? <LeaderboardPage /> :
       <>No Page Set</>}
    </PageContext.Provider>
  );
}

export const usePageContext = () => useContext(PageContext);

export default App;