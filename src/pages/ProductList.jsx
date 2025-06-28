import { useEffect, useState } from "react";
import { LoadProducts } from "../networking/Api";
import { Card,Button,Row,Col } from "react-bootstrap";
import { useSelector,useDispatch } from "react-redux";
import  {add,remove} from '../redux/productSlice';

export const ProductList = () => {
  const [data, setData] = useState([]);
  const [skip, setSkip] = useState(0);
  const [loading, setLoading] = useState(true);
  const [buttonText,setButtonText]=useState('Add to Cart');

  const dispatch=useDispatch()

  const fetchData = async () => {
    console.log("called");
    setLoading(true);
    const posts = await LoadProducts(skip, 10);

    setData((prev) => [...prev, ...posts.products]);
    setLoading(false);

  }

  useEffect(() => {
    fetchData();
  }, [skip]);
  useEffect(() => {

    const handleScroll = () => {
        const bottomReached =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100;
        console.log(loading);
        if (bottomReached && !loading) {
        setSkip((skip) => skip + 10);
        }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }, [loading]);
  return (
    <>
    
      <div className="d-flex flex-wrap justify-content-center gap-3 p-3" >
        {data ? (data.map((e) =>(
          
          <Card key={e.id} style={{ width: '18rem' }}>
            <Row><Col>
      <Card.Img variant="top" src={e.thumbnail} style={{height:"200px", objectFit:"cover"}}/>
      <Card.Body>
        <Card.Title>{e.title}</Card.Title>
        <Card.Text>
          <h1>This is Card3</h1>
          {e.description}<br></br>
         ⭐{e.rating}<br></br>
          ₹{e.price}
        </Card.Text>
        <Button variant="warning" className="w-100" onClick={()=>{dispatch(add(e));setButtonText('Remove from cart')}}>Add to Cart</Button>
      </Card.Body></Col></Row>
    </Card> )))
    
          : <h1>No data available</h1>}


      </div>
    </>
  );
}
