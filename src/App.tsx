import './App.css';
import ProfileCard from './components/ProfileCard';
import Counter from './components/Counter';
import LikeButton from './components/LikeButton';

type Teacher = {
  name: string;
  age: number;
  bio?: string;
  id: number;
};

const teachers: Teacher[] = [
  {
    name: 'Arsy',
    age: 30,
    bio: "I'm a math teacher.",
    id: 1,
  },
  {
    name: 'Budi',
    age: 35,
    bio: "I'm a physics teacher.",
    id: 2,
  },
  {
    name: 'Cindy',
    age: 28,
    bio: "I'm a chemistry teacher.",
    id: 3,
  },
];

function App() {
  return (
    <div style={{ padding: "16px 32px", display: 'flex', flexDirection: 'column', gap: '20px'}}>
      <Counter />
      <LikeButton />

      <div className='flex px-4 gap-4'>
        {teachers.map((teacher) => {
          return (
            <ProfileCard
              name={teacher.name}
              age={teacher.age}
              bio={teacher.bio}
              key={teacher.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
