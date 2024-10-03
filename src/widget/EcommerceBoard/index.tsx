import React from "react";
import {
  BoardContainer,
  RevenueChartContainer,
  TopSellingProductsContainer,
  ProductItem,
  ProductList,
  SyncButton,
  HeaderEcommercTittle,
} from "./EcommerceBoard.styles";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Typography } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";

interface EcommerceBoardProps {
  products: any[]; // Визначаємо, що products має бути масивом
}

const EcommerceBoard: React.FC<EcommerceBoardProps> = ({ products }) => {
  const data = [
    { name: "Jan", newCustomers: 100, upselling: 240 },
    { name: "Feb", newCustomers: 300, upselling: 139 },
    { name: "Mar", newCustomers: 400, upselling: 400 },
    { name: "Apr", newCustomers: 200, upselling: 300 },
    { name: "May", newCustomers: 350, upselling: 450 },
    { name: "Jun", newCustomers: 500, upselling: 350 },
    { name: "Jul", newCustomers: 600, upselling: 200 },
    { name: "Aug", newCustomers: 450, upselling: 320 },
    { name: "Sep", newCustomers: 400, upselling: 280 },
    { name: "Oct", newCustomers: 500, upselling: 410 },
    { name: "Nov", newCustomers: 550, upselling: 290 },
    { name: "Dec", newCustomers: 600, upselling: 500 },
  ];

  return (
    <BoardContainer>
      <HeaderEcommercTittle>
        <Typography variant="h2">E-commerce</Typography>
        <SyncButton>
          <RefreshIcon />
          <span>Sync Data</span>
        </SyncButton>
      </HeaderEcommercTittle>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <RevenueChartContainer>
          <h3>Sales Revenue</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="newCustomers" stroke="#8884d8" />
              <Line type="monotone" dataKey="upselling" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </RevenueChartContainer>

        <TopSellingProductsContainer>
          <div className="header">
            <h3>Top Selling Products</h3>
          </div>

          <ProductList>
            {Array.isArray(products) && products.length > 0 ? (
              products.map((product) => (
                <ProductItem key={product.id}>
                  <div>
                    <img src={product.imageUrl} alt={product.title} />
                    <p>
                      <span className="title">{product.title}</span>
                      <span>In {product.category}</span>
                    </p>
                  </div>
                  <div>
                    <p>
                      <span className="purchasesQuantity">
                        {product.purchasesQuantity}
                      </span>
                      <span>in sales</span>
                    </p>
                    <p>
                      <span className="numberItem">#{product.id} </span>
                    </p>
                  </div>
                </ProductItem>
              ))
            ) : (
              <p style={{ cursor: "pointer", color: "#3182ce" }}>
                No products available
              </p>
            )}
          </ProductList>

          <p style={{ cursor: "pointer", color: "#3182ce" }}>
            See All Products
          </p>
        </TopSellingProductsContainer>
      </div>
    </BoardContainer>
  );
};

export default EcommerceBoard;
