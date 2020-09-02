import React from 'react';
import PropTypes from 'prop-types';

const foodILike = [
  {
    id: 1,
    name: "kimchi",
    image: "https://gbc-cdn-public-media.azureedge.net/img64004.1426x713.jpg",
    rating: 5
    
  },
  {
    id: 2,
    name: "ramen",
    image: "http://glebekitchen.com/wp-content/uploads/2018/08/koreanramenfront.jpg",
    rating: 4.5
  },
  {
    id: 3,
    name: "Samgyeopsal",
    image: "https://www.gildedgingerbread.com/wp-content/uploads/2017/08/Samgyeopsal-1.jpg",
    rating: 4.9
  },
  {
    id: 4,
    name: "Bibimbap",
    image: "https://img.huffingtonpost.com/asset/5727ef362200003600255394.jpeg?cache=XowoERt6W4&ops=1910_1000",
    rating: 4.2
  },
  {
    id: 5,
    name: "Doncasu",
    image: "https://seonkyounglongest.com/wp-content/uploads/2017/07/donkasu-02-1000x667.jpg?x61413",
    rating: 4.8
  },
  {
    id: 6,
    name: "Kimbap",
    image: "https://i.ytimg.com/vi/Y-Y9CXGRJPU/maxresdefault.jpg",
    rating: 3.5
  }
]  

function Food({name, picture, rating}){
  return (<div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>);
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
    <div>
      {foodILike.map(dish => {
        return <Food key={dish.id} name={dish.name} 
        picture={dish.image} rating={dish.rating} />
      })}
    </div>
  );
}

export default App;
