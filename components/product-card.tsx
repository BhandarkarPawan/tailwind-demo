import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import styles from './index.module.css';

export interface Props {
  price: number;
  name: string;
  instock: boolean;
  imgSrc: string;
}

const ProductCard: React.FC<Props> = (props) => {
  const outOfStockClass = props.instock ? '' : 'text-red-600';

  return (
    <div className="md:flex text-gray-500 lg:w-1/2 rounded-2xl h-88 overflow-hidden shadow-xl">
      <img className="md:w-1/3" src={props.imgSrc} alt={props.name}></img>
      <div className="flex flex-col bg-white justify-between md:w-2/3  p-8">
        <div className="flex text-xl md:text-2xl justify-between">
          <h1 className="font-bold text-black">{props.name}</h1>
          <h2>${props.price}</h2>
        </div>
        <p className={`md:text-lg ${outOfStockClass}`}>
          {props.instock ? 'In Stock' : 'Out of Stock'}
        </p>
        <div className="flex justify-between items-center">
          <div className=" w-2/3 mr-8 flex items-center justify-between font-bold">
            <button className="focus:text-black rounded-lg focus:bg-gray-100 w-10 h-10 ">
              XS
            </button>
            <button className="focus:text-black rounded-lg focus:bg-gray-100 w-10 h-10">
              S
            </button>
            <button className="focus:text-black rounded-lg focus:bg-gray-100 w-10 h-10">
              M
            </button>
            <button className="focus:text-black rounded-lg focus:bg-gray-100 w-10 h-10">
              L
            </button>
            <button className="focus:text-black rounded-lg focus:bg-gray-100 w-10 h-10">
              XL
            </button>
          </div>
          <a className="w-1/4 text-lg underline text-right ">Size Guide</a>
        </div>
        <div className="flex md:flex-row flex-col justify-between md:space-x-4">
          <button className="mt-4 md:w-2/5 md:mt-0 flex-grow rounded-lg py-4 bg-black text-white">
            Buy Now
          </button>
          <div className="flex md:w-3/5  mt-4 md:mt-0  space-x-4">
            <button className="flex-grow rounded-lg p-2 border-gray-300 border-2 text-black">
              Add to Bag
            </button>
            <button className="flex-shrink w-14 p-4 border-gray-300 border-2 rounded-lg  hover:text-red-700 focus:text-red-700">
              <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
            </button>
          </div>
        </div>
        <p className="md:pt-0 pt-4">
          Free Shipping on all Continenal US Orders
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
