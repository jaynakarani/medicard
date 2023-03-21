import React from "react";
import axios from "axios";
function Signin() {
  const Signin = () => {
    axios
      .post(
        "mongodb+srv://bhavdip:bhavdip@atlascluster.dnu8pjn.mongodb.net/?retryWrites=true&w=majority"
      )
      .then((res) => console.log(res));
  };

  return (
    <div
      className="div-center"
      style={{
        width: "400px",
        height: "400px",
        backgroundcolor: "#fff",
        position: "absolute",
        left: "0",
        right: "0",
        top: "0",
        bottom: "0",
        margin: "auto",
        maxwidth: "100%",
        maxheight: "100%",
        overflow: "auto",
        padding: " 1em 2em",
        borderbottom: " 2px solid #ccc",
        display: "table",
      }}
    >
      <h3 className="">Sign in</h3>
      <hr />
      <form>
        <div className="form-group">
          <label for="exampleInputEmail1">User Id</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="ID"
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn btn-primary my-3" onClick={Signin}>
          Sign in
        </button>
        <hr />

        <button type="button" className="btn btn-link">
          Forgot Password?
        </button>
      </form>
    </div>
  );
}

export default Signin;
