import './App.css';
import { AddCategoryForm } from './components/AddCategoryForm';
import { CategoryCardList } from './components/CategoryCardList';

function App() {
  return (
    <div className="App flex mt-5">
      <CategoryCardList />
      <AddCategoryForm />
    </div>
  );
}

export default App;
