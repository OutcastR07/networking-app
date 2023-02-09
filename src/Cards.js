import React, { useState } from 'react'
import TinderCard from 'react-tinder-card';
import './Cards.css'

const Cards = () => {

  const [people, setPeople] = useState([
    {
      name: 'Tom Cruise',
      url: 'https://th.bing.com/th/id/R.7ab4e8dc32bf9d23c1f5695172a0e4d1?rik=OWA9RAO%2fK9accw&pid=ImgRaw&r=0',
    },
    {
      name: 'Brad Pitt',
      url: 'https://th.bing.com/th/id/R.f0e07d919ebfefe584570e7fc3d7b9ae?rik=FutW5czOEoOhMw&pid=ImgRaw&r=0',
    }
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + "left the screen");
  };

  return (
    <div className='cards'>
      <div className='cards__cardContainer'>
        {people.map((person) => (
          <TinderCard
            className='swipe'
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className='card'
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default Cards