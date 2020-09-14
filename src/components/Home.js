import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="Home Background"
          className="home__image"
        />

        <div className="home__row">
          <Product
            id="12345"
            title="Mi Notebook"
            rating={2}
            price={99.9}
            image={
              "https://m.media-amazon.com/images/I/61Dw5Z8LzJL._AC_UY218_.jpg"
            }
          />
          <Product
            id="12349"
            title="Mi Notebook"
            rating={2}
            price={99.9}
            image={
              "https://m.media-amazon.com/images/I/61Dw5Z8LzJL._AC_UY218_.jpg"
            }
          />
        </div>

        <div className="home__row">
          <Product
            id="12395"
            title="Mi Notebook"
            rating={2}
            price={99.9}
            image={
              "https://m.media-amazon.com/images/I/61Dw5Z8LzJL._AC_UY218_.jpg"
            }
          />
          <Product
            id="12945"
            title="Mi Notebook"
            rating={2}
            price={99.9}
            image={
              "https://m.media-amazon.com/images/I/61Dw5Z8LzJL._AC_UY218_.jpg"
            }
          />
          <Product
            id="12445"
            title="Mi Notebook"
            rating={2}
            price={99.9}
            image={
              "https://m.media-amazon.com/images/I/61Dw5Z8LzJL._AC_UY218_.jpg"
            }
          />
        </div>

        <div className="home__row">
          <Product
            id="19345"
            title="Mi Notebook"
            rating={2}
            price={99.9}
            image={
              "https://m.media-amazon.com/images/I/61Dw5Z8LzJL._AC_UY218_.jpg"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
