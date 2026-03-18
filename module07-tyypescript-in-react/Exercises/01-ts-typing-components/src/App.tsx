import { useState } from 'react';
import Alert from './components/Alert';
import Avatar from './components/Avatar';
import Counter from './components/Counter';
import Greeting from './components/Greeting';
import ProductList from './components/ProductList';
import ProfileCard from './components/ProfileCard';
import Status from './components/Status';
import Toggle from './components/Toggle';
import Container from './layouts/Container';

const App = () => {
  const [isOn, setIsOn] = useState(false);

  function add(a: number, b: number) {
    return a + b + Number(isOn);
  }

  return (
    <Container style={{ maxWidth: '600px', margin: '0 auto' }}>
      <Greeting name='' />
      <Counter initialCount={0} />
      <Status status='success' />
      <ProfileCard user={{ name: 'Ada', age: 90001 }} />
      <Alert message='Everything is fine' type='info' />
      <ProductList
        products={[
          { id: 1, title: 'Book' },
          { id: 2, title: 'Pen' },
        ]}
      />
      <Toggle isOn={isOn} setIsOn={setIsOn} add={add} />
      <Avatar url='https://i.pravatar.cc/150?u=a042581f4e29026024d' altText='User Avatar' />
    </Container>
  );
};

export default App;
