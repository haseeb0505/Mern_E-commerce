import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useEffect, useState } from "react";
import Spinner from "../../layout/Spinner"
export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadData = async () => {

      // Wait for two second
      await new Promise((r) => setTimeout(r, 2000));

      // Toggle loading state
      setLoading((loading) => !loading);
    };

    loadData();
  }, [])

  if (loading) {
    return <div><Spinner /></div>
  } else {
    return (
      <div className="home">
        <FeaturedInfo />
        <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
        <div className="homeWidgets">
          <WidgetSm />
          <WidgetLg />
        </div>
      </div>
    );
  }
}
