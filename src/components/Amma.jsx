import React from 'react';
import Pillai from './Pillai';

function Mom() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <Pillai
        name="Vincenzo"
        age={35}
        gender="male"
        image="https://placehold.co/150x150/FF5733/FFFFFF/png?text=Vincenzo"
        bio="Loves coding and pizza."
      />
      <Pillai
        name="Vinoth"
        age={35}
        gender="male"
        image="https://placehold.co/150x150/33FF57/FFFFFF/png?text=Vinoth"
        bio="Enjoys cricket and coffee."
      />
      <Pillai
        name="Vinitha"
        age={35}
        gender="female"
        image="https://placehold.co/150x150/5733FF/FFFFFF/png?text=Vinitha"
        bio="Avid reader and chai lover."
      />
      <Pillai
        name="Vikram"
        age={35}
        gender="male"
        image="https://placehold.co/150x150/FF33A1/FFFFFF/png?text=Vikram"
        bio="Fitness freak and biryani fan."
      />
      <Pillai
        name="Vimal"
        age={35}
        gender="male"
        image="https://placehold.co/150x150/33FFF5/FFFFFF/png?text=Vimal"
        bio="Gamer and idli enthusiast."
      />
    </div>
  );
}

export default Mom;