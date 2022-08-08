import "./styles.css";
import Header from "./Components/header";
import Home from "./Components/home";
import Filters from "./Components/filters";
import CollegeList from "./Components/collegesList";
import Footer from "./Components/footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <div className="displayFlex">
        <div>
          <Filters />
        </div>
        <div>
          <CollegeList />
        </div>
      </div>
      <Footer />
    </div>
  );
}
