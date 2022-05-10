import React from "react";
import ScrollIntoView from "react-scroll-into-view";
import Spacer from "../../../common/Spacer";

const SecondComponent = () => {
  return (
    <React.Fragment>
      <h2 style={{ textAlign: "center" }}>
        Example of React Scroll Into View.
      </h2>
      <div class="card">
        <div class="card-body">
          <ScrollIntoView selector="#footerDemo">
            <button className="mdl-button mdl-js-button mdl-button--raised">
              Jump to bottom
            </button>
          </ScrollIntoView>
          <Spacer />
          <div id="footerDemo">Scroll target element</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SecondComponent;
