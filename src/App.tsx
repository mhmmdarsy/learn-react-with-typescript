import './App.css';
// import ProfileCard from './components/ProfileCard';
// import Counter from './components/Counter';
// import LikeButton from './components/LikeButton';
import { Route, Routes } from 'react-router';
import TermsPage from './pages/TermsPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

// type Teacher = {
//   name: string;
//   age: number;
//   bio?: string;
//   id: number;
// };

// const teachers: Teacher[] = [
//   {
//     name: 'Arsy',
//     age: 30,
//     bio: "I'm a math teacher.",
//     id: 1,
//   },
//   {
//     name: 'Budi',
//     age: 35,
//     bio: "I'm a physics teacher.",
//     id: 2,
//   },
// ];

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
