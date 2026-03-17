import './App.css';
import Button from './components/Button';
import UserList from './components/UserList';
import UserProfile from './components/UserProfile';
import { user } from './data';

function App() {
  return (
    <div>
      <UserProfile
        username={user.username}
        image={user.image}
        info={user.info}
        status={user.status}
      />
      <Button
        variant='primary'
        onClick={(e) => console.log(e.clientX)}
        style={{ backgroundColor: 'rebeccapurple' }}
        disabled={true}
        type='button'
        title='Click me!'
        className='extra-class'>
        <span>Send</span>
      </Button>

      <UserList />
    </div>
  );
}

export default App;
