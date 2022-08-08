import React from "react";
import { FcGraduationCap } from "react-icons/fc";
import { FiFilter } from "react-icons/fi";
import { BiChevronDown } from "react-icons/bi";

function Home() {
  return (
    <div className="displayFlex">
      <h5>
        <FiFilter />
        &nbsp;Filters
      </h5>
      <h5>
        &nbsp;&nbsp;
        <FcGraduationCap />
        &nbsp; 248 Colleges Found
      </h5>
      <h6 id="sort">
        Sort By &nbsp;&nbsp;
        <BiChevronDown size="30px" color="silver" />
      </h6>
      <br />
    </div>
  );
}
export default Home;
