import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false);
  const [showPlants, setShowPlants] = useState(false);
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState({});
  const cartItems = useSelector(state => state.cart.items);
  const totalCartCount = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const plantsArray = [
    {
      category: 'Air Purifying Plants',
      plants: [
        {
          name: 'Snake Plant',
          image:
            'https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg',
          description: 'Produces oxygen at night, improving air quality.',
          cost: '$15',
        },
        {
          name: 'Spider Plant',
          image:
            'https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg',
          description: 'Filters formaldehyde and xylene from the air.',
          cost: '$12',
        },
        {
          name: 'Peace Lily',
          image:
            'https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg',
          description: 'Removes mold spores and purifies the air.',
          cost: '$18',
        },
        {
          name: 'Boston Fern',
          image:
            'https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg',
          description: 'Adds humidity to the air and removes toxins.',
          cost: '$20',
        },
        {
          name: 'Rubber Plant',
          image:
            'https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg',
          description: 'Easy to care for and effective at removing toxins.',
          cost: '$17',
        },
        {
          name: 'Aloe Vera',
          image:
            'https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg',
          description: 'Purifies the air and has healing properties for skin.',
          cost: '$14',
        },
      ],
    },
    {
      category: 'Aromatic Fragrant Plants',
      plants: [
        {
          name: 'Lavender',
          image:
            'https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          description: 'Calming scent, used in aromatherapy.',
          cost: '$20',
        },
        {
          name: 'Jasmine',
          image:
            'https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          description: 'Sweet fragrance, promotes relaxation.',
          cost: '$18',
        },
        {
          name: 'Rosemary',
          image:
            'https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg',
          description: 'Invigorating scent, often used in cooking.',
          cost: '$15',
        },
        {
          name: 'Mint',
          image:
            'https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg',
          description: 'Refreshing aroma, used in teas and cooking.',
          cost: '$12',
        },
        {
          name: 'Lemon Balm',
          image:
            'https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg',
          description: 'Citrusy scent, relieves stress and promotes sleep.',
          cost: '$14',
        },
        {
          name: 'Hyacinth',
          image:
            'https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg',
          description:
            'Hyacinth is a beautiful flowering plant known for its fragrant.',
          cost: '$22',
        },
      ],
    },
  ];

  const handleHomeClick = e => {
    e.preventDefault();
    onHomeClick();
  };

  const handleCartClick = e => {
    e.preventDefault();
    setShowCart(true);
  };

  const handlePlantsClick = e => {
    e.preventDefault();
    setShowPlants(true);
    setShowCart(false);
  };

  const handleContinueShopping = () => {
    setShowCart(false);
    setShowPlants(true);
  };

  const handleAddToCart = plant => {
    dispatch(addItem(plant));
    setAddedToCart(prev => ({
      ...prev,
      [plant.name]: true,
    }));
  };

  return (
    <div>
      <div className='navbar'>
        <div className='tag'>
          <div className='luxury'>
            <img
              src='https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png'
              alt=''
            />
            <a href='/' onClick={handleHomeClick}>
              <div className='tag_home_link'>
                <h3>Paradise Nursery</h3>
                <i>Where Green Meets Serenity</i>
              </div>
            </a>
          </div>
        </div>
        <div className='ul'>
          <div>
            <a href='#' onClick={handlePlantsClick}>
              Plants
            </a>
          </div>
          <div>
            <a
              href='#'
              onClick={handleCartClick}
              style={{ position: 'relative' }}
            >
              <h1 className='cart'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 256 256'
                  id='IconChangeColor'
                  height='68'
                  width='68'
                >
                  <rect width='156' height='156' fill='none'></rect>
                  <circle cx='80' cy='216' r='12'></circle>
                  <circle cx='184' cy='216' r='12'></circle>
                  <path
                    d='M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8'
                    fill='none'
                    stroke='#faf9f9'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                  />
                </svg>
                {totalCartCount > 0 && (
                  <span className='cart_quantity_count'>{totalCartCount}</span>
                )}
              </h1>
            </a>
          </div>
        </div>
      </div>

      {!showCart ? (
        <div className='product-grid'>
          {plantsArray.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <div className='plantname_heading'>
                <h2 className='plant_heading'>{section.category}</h2>
              </div>
              <div className='product-list'>
                {section.plants.map((plant, plantIndex) => (
                  <div
                    className='product-card'
                    key={`${sectionIndex}-${plantIndex}`}
                  >
                    <img
                      className='product-image'
                      src={plant.image}
                      alt={plant.name}
                    />
                    <div className='product-title'>{plant.name}</div>
                    <div className='product-price'>{plant.cost}</div>
                    <p>{plant.description}</p>
                    <button
                      className={`product-button ${
                        addedToCart[plant.name] ? 'added-to-cart' : ''
                      }`}
                      onClick={() => handleAddToCart(plant)}
                    >
                      {addedToCart[plant.name] ? '✔️ Added' : 'Add to Cart'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;
