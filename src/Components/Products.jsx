import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const TableWrapper = styled.table`
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border: 3px solid purple;
  text-align: right;
`;

const Td = styled.td`
    padding: 20px;
    text-align: center;
`

const DivWrap = styled.div`
    display: flex; 
    justify-content: center;
    align-items: center; 
`

export const Products = () => {
  const [data, setData] = React.useState([]);

  const getData = async () => {
    try {
      let res = await fetch(`http://localhost:3000/products`);
      let data = await res.json();
      console.log(data);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <>
    
      <h1>Products Page</h1>
      <DivWrap>
      <TableWrapper>
        <table>
          <thead>
            <tr>
              <Td><th>Product Name</th></Td>
              <Td><th> Price </th></Td>
              <Td><th> Product Details </th></Td>
            </tr>
          </thead>
        </table>
        {data.map((item) => {
          return (
            <>
              <table>
                <tbody>
                  <tr key={item.id}>
                    <Td><td>{item.name}</td></Td>
                    <Td><td>{item.price} </td></Td>
                    <Td><td>
                      {" "}
                      <Link to={`/products/${item.id}`}> More Details</Link>
                    </td>
                    </Td>
                  </tr>
                </tbody>
              </table>
            </>
          );
        })}
      </TableWrapper>
      </DivWrap>
    </>
  );
};
