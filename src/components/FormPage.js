
import React from "react";
import { connect } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { SET_WEIGHT } from "../store/actions/SET_WEIGHT";
import { SET_COLOR } from "../store/actions/SET_COLOR";
import { SET_NAME } from "../store/actions/SET_NAME";
import { SET_COUNTRY } from "../store/actions/SET_COUNTRY";
import { SEND_BOX } from "../store/actions/SEND_BOX_API";
import "../styles/formpage.scss";

const mapStateToProps = (state) => {
  return {
    box: state.box,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCountry: (country) => dispatch(SET_COUNTRY(country)),
    setName: (name) => dispatch(SET_NAME(name)),
    setColor: (color) => dispatch(SET_COLOR(color)),
    setWeight: (weight) => dispatch(SET_WEIGHT(weight)),
    Send: (box) => dispatch(SEND_BOX(box)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function TablePage({ box, setCountry, setColor, setWeight, setName, Send }) {
  return (
    <div data-testid="formpage-44">
      <div data-testid="formpage-45">
        <label> Name </label>
        <input
          value={box.name}
          placeholder="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <label> Weight </label>
        <input
          value={box.weight}
          placeholder="Weight"
          name="weight"
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>

      <div>
        <label>
          {" "}
          colour:{" "}
          {box.colorRGB.r +
            " : " +
            box.colorRGB.g +
            " : " +
            box.colorRGB.b}{" "}
        </label>
        <input
          type="color"
          placeholder="color"
          name="color"
          onChange={(e) => setColor(e.target.value)}
        />
      </div>

      <label> country </label>
      <select name="country" onChange={(e) => setCountry(e.target.value)}>
        <option value="Sweden"> Sweden </option>
        <option value="China"> China </option>
        <option value="Brazil"> Brazil </option>
        <option value="Australia"> Australia </option>
      </select>
      <br/>

      <button disabled={box.disabled} onClick={() => Send(box)}>
        Save
      </button>
    </div>
  );
});
