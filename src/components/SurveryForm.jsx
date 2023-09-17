import Button from "./Button";
import { useState } from "react";
const SurveyForm = () => {
  const [info, setInfo] = useState({
    gender: "",
    pronounces: "",
    position: "",
    yoe: "",
    industry: "",
    salary: "",
    description: "",
    location: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInfo((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  return (
    <form className="form-format">
      <div>
        <div>
          <p className="form-name">let&apos;s know about you</p>
          <div className="form-components">
            <select
              id="gender"
              name="gender"
              value={info.gender}
              onChange={handleInputChange}
              className="form-input"
              required
            >
              <option value="" disabled hidden>
                {" "}
                gender
              </option>
              <option value="female"> female</option>
              <option value="male">male</option>
              <option value="intersex">intersex</option>
              <option value="nonbinary">non-binary/third gender</option>
              <option value="transfemale">transgender female</option>
              <option value="transmale">transgender male</option>
              <option value="other">other</option>
              <option value="notlised">not listed</option>
            </select>
          </div>

          <div className="form-components">
            <select
              id="pronounces"
              name="pronounces"
              value={info.pronounces}
              className="form-input"
              onChange={handleInputChange}
              required
            >
              <option value="" disabled hidden>
                {" "}
                pronounces
              </option>
              <option value="they">they/them</option>
              <option value="she">she/her</option>
              <option value="he">he/Him</option>
              <option value="ze">ze/Zim</option>
              <option value="other"> others </option>
            </select>
          </div>

          <div className="form-components">
            <input
              type="text"
              name="position"
              id="position"
              value={info.position}
              onChange={handleInputChange}
              className="form-input"
              placeholder="position"
              required
            />
          </div>

          <div className="form-components">
            <input
              type="text"
              name="industry"
              id="industry"
              value={info.industry}
              onChange={handleInputChange}
              className="form-input"
              placeholder="industry"
              required
            />
          </div>

          <div className="form-components">
            <select
              id="yoe"
              name="yoe"
              className="form-input"
              value={info.yoe}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled hidden>
                {" "}
                years of experience
              </option>
              <option value="less1">Less than 1 </option>
              <option value="onetwo">1 - 2</option>
              <option value="threefive">3 - 5</option>
              <option value="sixten">6 - 10</option>
              <option value="eleventwenty"> 11-20 </option>
              <option value="twentyonemore"> 21+ </option>
            </select>
          </div>

          <div className="form-components">
            <p>$</p>
            <input
              type="number"
              name="salary"
              id="salary"
              className="form-input"
              placeholder="salary (i.e 100000)"
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-components">
            <input
              type="text"
              id="description"
              className="form-input"
              placeholder="job description"
              value={info.description}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-components">
            <input
              type="text"
              id="location"
              className="form-input"
              placeholder="locaiton"
              value={info.location}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div>
          <Button> Submit </Button>
        </div>
      </div>
    </form>
  );
};
export default SurveyForm;
