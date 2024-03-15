import classes from "./style/Home.module.css";

// hooks
import { useFetch } from "../hooks/useFetch";

const url = "http://localhost:3000/products";

const Home = () => {
  const { data } = useFetch(url);

  return (
    <div className={classes.home_container}>
      <ul className={classes.promotions_product}>
        {data?.slice(0, 3).map((item) => (
          <li key={item.id} className={classes.product_container}>
            <div className={classes.image_container}>
              <img src={item.imageURL} alt={item.title} />
            </div>
            <h4>{item.title}</h4>
            <div className={classes.price_container}>
              <span className={classes.risk_price}>{item.riskPrice}</span>
              <span>{item.price}</span>
            </div>
            <button>Add to cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
