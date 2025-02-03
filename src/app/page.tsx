import AboutUs from "./components/AboutUs";
import BlogSection from "./components/BlogSection";
import Card from "./components/Card";
import FoodCategory from "./components/FoodCategory";
import FoodSection from "./components/FoodSection";
import Home from "./components/Home";
import MeetOurChef from "./components/MeetOurChef";
import Menu from "./components/Menu";
import MidSection from "./components/MidSection";
import StatsSection from "./components/Statssection";

const page = () => {
  return (
    <div>
      
      <Home />
      <AboutUs />
      <FoodCategory />
      <FoodSection />
      <StatsSection />
      <Menu />
      <MeetOurChef />
      <Card />
      <MidSection />
      <BlogSection />
    </div>
  );
};

export default page;

















