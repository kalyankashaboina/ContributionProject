import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./filter1.css";
import axios from "axios";
import { faBars, faHeart, faUser , faSearch} from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular, faUser as faUserRegular } from '@fortawesome/free-regular-svg-icons';



const Filter = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the Fake Store API
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);

        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  function truncateTitle(title, maxLength) {
    if (title.length > maxLength) {
      return title.substring(0, maxLength) + "...";
    }
    return title;
  }
  

  return (
    <>
      <nav className="nav">

        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div className="navitem">
          <h2>{products.length}&nbsp; ITEMS</h2>
        </div>

        <div style={{ display: "flex" }} className="navhide">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-chevron-left"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#2c3e50"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M15 6l-6 6l6 6" />
          </svg>{" "}
          <h2>HIDE Filter</h2>
        </div>

        </div>


        <div>
        <div style={{ display: "flex",justifyContent:"center" ,alignItems:"center"}} className="navREc">
          <h2>RECOMMENDED</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-chevron-down"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#2c3e50"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6 9l6 6l6 -6" />
          </svg>
        </div>
        </div>
        
        
      </nav>

      <div className="content">
        <div className="fil">
          <div className="filInput">
            <input type="hidden" />
            <h2>CUSTOMIZBLE</h2>
          </div>

          <div className="separtor"></div>

          {/* <div className="filsort">
            <div>
              <h2>IDEAL FOR</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-chevron-down"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 9l6 6l6 -6" />
              </svg>
            </div>
            <h4>All</h4>
          </div> */}

          <div className="filsort">
            <div>
              <h2>IDEAL FOR</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-chevron-down"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 9l6 6l6 -6" />
              </svg>
            </div>
            <h4>All</h4>
          </div>

          <div className="separtor"></div>
          <div className="filsort">
            <div>
              <h2>OCCASION</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-chevron-down"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 9l6 6l6 -6" />
              </svg>
            </div>
            <h4>All</h4>
          </div>
          <div className="separtor"></div>

          <div className="filsort">
            <div>
              <h2>WORK</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-chevron-down"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 9l6 6l6 -6" />
              </svg>
            </div>
            <h4>ALL</h4>
          </div>

          <div className="separtor"></div>
          <div className="filsort">
            <div>
              <h2>FABRIC</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-chevron-down"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 9l6 6l6 -6" />
              </svg>
            </div>
            <h4>All</h4>
          </div>

          <div className="separtor"></div>
          <div className="filsort">
            <div>
              <h2>SEGMENT</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-chevron-down"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 9l6 6l6 -6" />
              </svg>
            </div>
            <h4>All</h4>
          </div>
          <div className="separtor"></div>
          <div className="filsort">
            <div>
              <h2>SUITABLE FOR</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-chevron-down"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 9l6 6l6 -6" />
              </svg>
            </div>
            <h4>All</h4>
          </div>
          <div className="separtor"></div>
          <div className="filsort">
            <div>
              <h2>RAW MATERIAL</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-chevron-down"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 9l6 6l6 -6" />
              </svg>
            </div>
            <h4>All</h4>
          </div>
          <div className="separtor"></div>
          <div className="filsort">
            <div>
              <h2>PATTERN</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-chevron-down"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 9l6 6l6 -6" />
              </svg>
            </div>
            <h4>All</h4>
          </div>
        </div>
        
        <div className="cards">

        
      {/* <h2>Products</h2> */}
    
    
        {products.map(product => (
          <div key={product.id} className="card">
            
            <img src={product.image} alt={product.title} />
            <h3>{truncateTitle(product.title, 20)}</h3>

            <div style={{display:"flex",justifyContent:"space-between"}}>
            <p>
            Sign in or Create an account to see pricing
            </p>
            <FontAwesomeIcon icon={faHeartRegular} className="icon" />
            </div>
         
          
          </div>
        ))}
     
   
        </div>
      </div>
    </>
  );
};

export default Filter;
