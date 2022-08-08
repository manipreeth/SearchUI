import React from "react";

// Icons are imported from react-icons
import { BiTimeFive, BiHeart } from "react-icons/bi";
import { BsCalendarEvent, BsClipboardCheck } from "react-icons/bs";
import { IoMdGlobe } from "react-icons/io";
import { TbHeartHandshake } from "react-icons/tb";
import { RiCoinsLine } from "react-icons/ri";

// College logos are accessed from images repo
import FirstuniversityLogo from "./Images/univ-1.gif";
import SeconduniversityLogo from "./Images/univ-2.gif";
import ThirduniversityLogo from "./Images/univ-3.gif";
import FourthuniversityLogo from "./Images/univ-4.gif";

function CollegesList() {
  return (
    <>
      <div id="collegeDetails">
        {/* 1st College Details */}
        <div className="collegeList">
          {/* 1st row of 1st college details */}
          <div className="displayFlex firstrowAlignment">
            <p className="collegeRank">
              <IoMdGlobe />
              &nbsp; #127
            </p>
            <p id="partner">
              <TbHeartHandshake />
              Our Partner
            </p>

            <p className="setLineHeight courseName">
              Data Science in Bio Medicine
              <br />
              <span className="subDetails universityNameAlignment">
                <span className="universityName">
                  Cleveland State University
                </span>
                &nbsp;&nbsp;&nbsp;| &nbsp; Public
              </span>
            </p>
            <BiHeart size="30px" className="addtoWishlist" />
          </div>

          {/* 2nd row of 1st college details */}
          <div className="displayFlex collegedetailsSecondRow">
            <img
              src={FirstuniversityLogo}
              alt="Cleveland university logo"
              className="universityLogo "
            />
            <span className="secondrowAlignment secondrowText">
              <RiCoinsLine size="35px" />
            </span>
            <span className="setLineHeight secondrowText">
              &nbsp; Course Fee
              <br />
              &nbsp;&nbsp;
              <span className="subDetails">$1200</span>
            </span>

            <span className="setLineHeight secondrowAlignment secondrowText">
              Application Fee
              <br />
              <span className="subDetails">$60</span>
            </span>

            <span className="secondrowAlignment secondrowText">
              <BiTimeFive size="35px" />
              &nbsp;
            </span>
            <span className="setLineHeight secondrowText">
              Course Duration
              <br />
              <span className="subDetails">Full Time | Part Time</span>
            </span>
            <span className="secondrowAlignment secondrowText">
              <BsCalendarEvent size="35px" />
            </span>
            <span className="setLineHeight secondrowText">
              &nbsp; Next Intake
              <br />
              &nbsp;&nbsp;
              <span className="subDetails">25th March 2022</span>
            </span>
          </div>

          {/* 3rd row of 1st college details */}
          <div className="displayFlex">
            <button>Masters</button>
            <span>
              <BsClipboardCheck size="35px" className="checkIcon" />
            </span>
            <span className="examScore firstExam setLineHeight">
              IELTS
              <br />
              <span className="subDetails">&nbsp;6.0</span>
            </span>
            &nbsp;|&nbsp;
            <span className="examScore setLineHeight">
              GRE
              <br />
              <span className="subDetails">&nbsp;250</span>
            </span>
            &nbsp;|&nbsp;
            <span className="examScore setLineHeight">
              TOFEL
              <br />
              <span className="subDetails">&nbsp;70</span>
            </span>
            <button className="compareButton">+ Compare</button>
            <button className="applyButton">Apply</button>
          </div>
        </div>
      </div>

      {/* -----------------------------2nd college Details----------------------------------- */}

      <div id="collegeDetails">
        <div className="collegeList">
          {/* 1st row of 2nd college details */}
          <div className="displayFlex firstrowAlignment">
            <p className="collegeRank">
              <IoMdGlobe />
              &nbsp; #127
            </p>

            <p className="setLineHeight courseName collegeCourse">
              Data Science in Bussiness Analytics
              <br />
              <span className="subDetails universityNameAlignment">
                <span className="universityName">Mercer University</span>
                &nbsp;&nbsp;&nbsp;| &nbsp; Public
              </span>
            </p>
            <BiHeart size="30px" className="addtoWishlist whishlistIcon" />
          </div>

          {/* 2nd row of 2nd college details */}
          <div className="displayFlex">
            <img
              src={SeconduniversityLogo}
              alt="Mecer university logo"
              className="universityLogo secondUniversityLogo"
            />
            <span className="secondrowAlignment secondrowText">
              <RiCoinsLine size="35px" />
            </span>
            <span className="setLineHeight secondrowText">
              &nbsp; Course Fee
              <br />
              &nbsp;&nbsp;
              <span className="subDetails">$1200</span>
            </span>

            <span className="setLineHeight secondrowAlignment secondrowText">
              Application Fee
              <br />
              <span className="subDetails">$60</span>
            </span>

            <span className="secondrowAlignment secondrowText">
              <BiTimeFive size="35px" />
              &nbsp;
            </span>
            <span className="setLineHeight secondrowText">
              Course Duration
              <br />
              <span className="subDetails">Full Time | Part Time</span>
            </span>
            <span className="secondrowAlignment secondrowText">
              <BsCalendarEvent size="35px" />
            </span>
            <span className="setLineHeight secondrowText">
              &nbsp; Next Intake
              <br />
              &nbsp;&nbsp;
              <span className="subDetails">25th March 2022</span>
            </span>
          </div>

          {/* 3rd row of 2nd college details */}
          <div className="displayFlex">
            <button>Masters</button>
            <span>
              <BsClipboardCheck size="35px" className="checkIcon" />
            </span>
            <span className="examScore firstExam setLineHeight">
              IELTS
              <br />
              <span className="subDetails">&nbsp;6.0</span>
            </span>
            &nbsp;|&nbsp;
            <span className="examScore setLineHeight">
              GRE
              <br />
              <span className="subDetails">&nbsp;250</span>
            </span>
            &nbsp;|&nbsp;
            <span className="examScore setLineHeight">
              TOFEL
              <br />
              <span className="subDetails">&nbsp;70</span>
            </span>
            &nbsp;|&nbsp;
            <span className="examScore setLineHeight">
              Duo Lingo
              <br />
              <span className="subDetails">&nbsp;70</span>
            </span>
            <button className="compareButton compare">+ Compare</button>
            <button className="applyButton">Apply</button>
          </div>
        </div>
      </div>

      {/* -----------------------------------3rd College Details------------------------------- */}
      <div id="collegeDetails">
        <div className="collegeList">
          {/* 1st row of 3rd college details */}
          <div className="displayFlex firstrowAlignment">
            <p className="collegeRank">
              <IoMdGlobe />
              &nbsp; #127
            </p>

            <p className="setLineHeight courseName collegeCourse">
              Data Science with Specialisation in Artifical Intelligence
              <br />
              <span className="subDetails universityNameAlignment">
                <span className="universityName">Mercer University</span>
                &nbsp;&nbsp;&nbsp;| &nbsp; Public
              </span>
            </p>
            <BiHeart size="30px" className="addtoWishlist thirdwhishlistIcon" />
          </div>

          {/* 2nd row of 3rd college details */}
          <div className="displayFlex">
            <img
              src={ThirduniversityLogo}
              alt="Mecer university logo"
              className="universityLogo secondUniversityLogo"
            />
            <span className="secondrowAlignment secondrowText">
              <RiCoinsLine size="35px" />
            </span>
            <span className="setLineHeight secondrowText">
              &nbsp; Course Fee
              <br />
              &nbsp;&nbsp;
              <span className="subDetails">$1200</span>
            </span>

            <span className="setLineHeight secondrowAlignment secondrowText">
              Application Fee
              <br />
              <span className="subDetails">$60</span>
            </span>

            <span className="secondrowAlignment secondrowText">
              <BiTimeFive size="35px" />
              &nbsp;
            </span>
            <span className="setLineHeight secondrowText">
              Course Duration
              <br />
              <span className="subDetails">Full Time | Part Time</span>
            </span>
            <span className="secondrowAlignment secondrowText">
              <BsCalendarEvent size="35px" />
            </span>
            <span className="setLineHeight secondrowText">
              &nbsp; Next Intake
              <br />
              &nbsp;&nbsp;
              <span className="subDetails">25th March 2022</span>
            </span>
          </div>

          {/* 3rd row of 3rd college details */}
          <div className="displayFlex">
            <button>Bachelors</button>
            <span>
              <BsClipboardCheck size="35px" className="checkIcon" />
            </span>
            <span className="examScore firstExam setLineHeight">
              IELTS
              <br />
              <span className="subDetails">&nbsp;6.0</span>
            </span>
            &nbsp;|&nbsp;
            <span className="examScore setLineHeight">
              GRE
              <br />
              <span className="subDetails">&nbsp;250</span>
            </span>
            &nbsp;|&nbsp;
            <span className="examScore setLineHeight">
              TOFEL
              <br />
              <span className="subDetails">&nbsp;70</span>
            </span>
            &nbsp;|&nbsp;
            <span className="examScore setLineHeight">
              GMAT
              <br />
              <span className="subDetails">&nbsp;80</span>
            </span>
            <button className="compareButton thirdcollegecompare">
              + Compare
            </button>
            <button className="applyButton">Apply</button>
          </div>
        </div>
      </div>

      {/* -----------------------------4th college details-------------------------------- */}
      <div id="collegeDetails" className="lastrow">
        <div className="collegeList">
          <div className="displayFlex firstrowAlignment">
            {/* 1st Row of 4th college details */}
            <p className="collegeRank">
              <IoMdGlobe />
              &nbsp; #127
            </p>

            <p className="setLineHeight courseName collegeCourse">
              Data Science with Specialisation in Visualization
              <br />
              <span className="subDetails universityNameAlignment">
                <span className="universityName">Bradley University</span>
                &nbsp;&nbsp;&nbsp;| &nbsp; Public
              </span>
            </p>
            <BiHeart
              size="30px"
              className="addtoWishlist fourthwhishlistIcon"
            />
          </div>

          {/* 2nd row of 4th college details */}
          <div className="displayFlex">
            <img
              src={FourthuniversityLogo}
              alt="Mecer university logo"
              className="universityLogo secondUniversityLogo"
            />
            <span className="secondrowAlignment secondrowText">
              <RiCoinsLine size="35px" />
            </span>
            <span className="setLineHeight secondrowText">
              &nbsp; Course Fee
              <br />
              &nbsp;&nbsp;
              <span className="subDetails">$1200</span>
            </span>

            <span className="setLineHeight secondrowAlignment secondrowText">
              Application Fee
              <br />
              <span className="subDetails">$60</span>
            </span>

            <span className="secondrowAlignment secondrowText">
              <BiTimeFive size="35px" />
              &nbsp;
            </span>
            <span className="setLineHeight secondrowText">
              Course Duration
              <br />
              <span className="subDetails">Full Time | Part Time</span>
            </span>
            <span className="secondrowAlignment secondrowText">
              <BsCalendarEvent size="35px" />
            </span>
            <span className="setLineHeight secondrowText">
              &nbsp; Next Intake
              <br />
              &nbsp;&nbsp;
              <span className="subDetails">25th March 2022</span>
            </span>
          </div>

          {/* 3rd row of 4th college details */}
          <div className="displayFlex">
            <button>Masters</button>
            <span>
              <BsClipboardCheck size="35px" className="checkIcon" />
            </span>
            <span className="examScore firstExam setLineHeight">
              IELTS
              <br />
              <span className="subDetails">&nbsp;6.0</span>
            </span>
            &nbsp;|&nbsp;
            <span className="examScore setLineHeight">
              GRE
              <br />
              <span className="subDetails">&nbsp;250</span>
            </span>
            &nbsp;|&nbsp;
            <span className="examScore setLineHeight">
              TOFEL
              <br />
              <span className="subDetails">&nbsp;70</span>
            </span>
            <button className="compareButton">+ Compare</button>
            <button className="applyButton">Apply</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default CollegesList;
