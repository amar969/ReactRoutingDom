import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

const DivWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center; 
    flex-direction: column; 
    gap : 20px;
`

export const ProductsDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate()

  console.log(id);

  const [products, setProducts] = React.useState({});

  const getProductsDetails = async() => {
      try {
          let res = await fetch(`http://localhost:3000/products/${id}`);
          let data = await res.json();
          setProducts(data);
          if(!res.ok) navigate("/ProductNotExist")
      } catch (err) {
          console.log(err)
      }
  };

  React.useEffect(() => {
    getProductsDetails();
  }, [id]);

  return (
    <>
    <h1>Product Details</h1>
    <DivWrapper>

        <h3> Product Name :  {products.name}</h3>
        <p> Price Rs. {products.price}</p>
        <p> Product Id : {products.id}</p>
    </DivWrapper>
    </>
  );
};
