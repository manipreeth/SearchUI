import React from "react";
import { IoIosArrowUp } from "react-icons/io";

function Filters() {
  return (
    <div>
      <div className="filters">
        <p className="filtersHeadingAlignment">
          Degree Type <IoIosArrowUp size="28px" className="uparrow" />
        </p>
        <input type="checkbox" />
        &nbsp; Bachleors
        <br />
        <input type="checkbox" />
        &nbsp;&nbsp; Masters
        <br />
        <input type="checkbox" />
        &nbsp; Diploma
        <br />
        <input type="checkbox" />
        &nbsp; Doctoral
        <br />
        <hr />
        <p className="filtersHeadingAlignment">
          External Evaluation
          <IoIosArrowUp
            size="28px"
            className="uparrowAlignment marginAlignment"
          />
        </p>
        <input type="checkbox" />
        &nbsp; None
        <br />
        <input type="checkbox" />
        &nbsp; WES
        <hr />
        <p className="filtersHeadingAlignment">
          Test Scores
          <IoIosArrowUp
            size="28px"
            className="uparrowAlignment  testscoreUparrow"
          />
        </p>
        <p className="filtersHeadingAlignment">IELTS</p>
        <input value="6.0" className="rangeValue scoreDisplay1" />
        <input value="7.5" className="rangeValue" />
        <br />
        <input type="range" min="0" max="10" step="0.1" />
        <p className="filtersHeadingAlignment">TOEFL</p>
        <input value="70" className="rangeValue scoreDisplay1" />
        <input value="90" className="rangeValue" />
        <br />
        <input type="range" min="0" max="100" step="10" />
        <p className="filtersHeadingAlignment">GRE</p>
        <input value="230" className="rangeValue scoreDisplay1" />
        <input value="300" className="rangeValue" />
        <br />
        <input type="range" min="0" max="500" step="50" />
        <hr />
        <p className="filtersHeadingAlignment">
          Program Duration
          <IoIosArrowUp
            size="28px"
            className="uparrowAlignment programDurationUparrow"
          />
        </p>
        <input type="checkbox" />
        &nbsp; Full Time
        <br />
        <input type="checkbox" />
        &nbsp; Part Time
        <br />
        <hr />
        <p className="filtersHeadingAlignment">
          Degree Type
          <IoIosArrowUp size="28px" className="uparrow" />
        </p>
        <hr />
        <p className="filtersHeadingAlignment">
          Course Fee
          <IoIosArrowUp
            size="28px"
            className="uparrowAlignment coursefeeUparrow"
          />
        </p>
        <input
          type="text"
          value="$10000"
          className="courseFee courseFeeSelected"
        />
        <input type="text" value="$25000" className="courseFee" />
        <br />
        <input type="range" />
      </div>
    </div>
  );
}
export default Filters;
