import Article from 'pages/Article';
import { Home } from 'pages/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:articleId" element={<Article />} />
      </Routes>
    </div>
  );
}

export default App;
