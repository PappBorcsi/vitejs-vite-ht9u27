import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

const user = {
  name: 'Hady Lammer',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
  { title: 'Karfiol', id: 4 },
  { title: 'Kolbász', id: 5 },
];

const listItems = products.map((product) => (
  <li key={product.id}> {product.title}</li>
));

function Tomb() {
  return <ul>{listItems}</ul>;
}

const szamok = [
  { nevek: 'egyes', id: 1 },
  { nevek: 'kettes', id: 2 },
  { nevek: 'harmas', id: 3 },
];

const lista = szamok.map((szam) => <li key={szam.id}> {szam.nevek}</li>);

function Szamok() {
  return <ul>{lista}</ul>;
}

function App() {
  return (
    <div>
      <h1>Welcome my app</h1>
      <Gomb />
      <Gomb />

      <Profile />
      <MyButton />
      <Tomb />
      <Szamok />
    </div>
  );
}

function MyButton() {
  return <button className="ibutton">I am a button</button>;
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>
        Hello there <br /> How do you do?{' '}
      </p>
    </>
  );
}
function Gomb() {
  const [count, SetCount] = useState(0);
  function handleCl() {
    SetCount(count + 1);
  }

  return <button onClick={handleCl}>szamolni fog : {count}</button>;
}

function Profile() {
  return (
    <>
      <h1>{user.name} </h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </>
  );
}

export default App;
