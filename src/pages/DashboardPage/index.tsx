import { useState } from "react";
import Sidebar from "../../widget/AsideBar";
import Header from "../../widget/HeaderWidget";
import EcommerceBoard from "../../widget/EcommerceBoard";

import { useGetApiProducts } from "../../api/interviewAPI";

const DashboardPage = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const token = localStorage.getItem("token");

  const {
    data: productsData,
    isLoading,
    isError,
  } = useGetApiProducts({
    axios: {
      baseURL: "https://interview-api-8icc.onrender.com/",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });

  const handleNotificationsClick = () => {
    console.log("Натиснуто на нотифікації");
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading products</div>;
  }
  return (
    <div>
      <Header
        title=""
        showNotification={true}
        onNotificationsClick={handleNotificationsClick}
        isSidebarExpanded={isSidebarExpanded}
      />

      <div style={{}}>
        <Sidebar onHoverChange={setIsSidebarExpanded} />

        <div style={{}}>
          <EcommerceBoard products={productsData?.data ?? []} />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
