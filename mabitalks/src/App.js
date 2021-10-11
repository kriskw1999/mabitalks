import './styles/style.css';
import Header from './components/Header'
import TagsContainer from './components/TagsContainer';
import CardContainer from './components/CardContainer';
import { useState } from 'react';


// Application wrapper component
const App = () => {

  const [currentCategory, setCurrentCategory] = useState('all')

  const handleChangeCategory = category => {
    setCurrentCategory(category);
  }

  return (
    <div className="App">
      <Header/>
      <div className="talks-container">
        <h1 className="talks-title">Next on mabitalks</h1>
        <TagsContainer onChangeCategory={handleChangeCategory}/>
        <CardContainer currentCategory={currentCategory}/>
      </div>
    </div>
  );
}

export default App;
