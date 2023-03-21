import React from "react";

function Addpatient() {
  return (
    <>
      <form
        className="needs-validation"
        style={{
          border: "rounded",
          margin: "auto",
          width: "50%",
          padding: "10px",
          marginTop: "30px",
        }}
      >
        <h1
          class="display-6"
          style={{
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          Patient details
        </h1>
        <hr />
        <div class="form-row my-3">
          <div class="input-group" style={{ marginTop: "30px" }}>
            <div class="input-group-prepend">
              <span class="input-group-text">Name</span>
            </div>
            <input
              type="text"
              class="form-control"
              id="nameinput"
              placeholder="Full name"
              style={{ marginLeft: "20px" }}
              required
            />
          </div>
          <div class="input-group my-3">
            <div class="input-group-prepend">
              <span class="input-group-text">Email</span>
            </div>
            <input
              type="email"
              class="form-control"
              id="emailinput"
              placeholder="Email"
              style={{ marginLeft: "20px" }}
              required
            />
          </div>
          <div class="input-group my-3">
            <div class="input-group-prepend">
              <span class="input-group-text">Mobile</span>
            </div>
            <input
              type="tel"
              class="form-control"
              id="mobilenumberinput"
              placeholder="mobile number"
              style={{ marginLeft: "20px" }}
              required
            />
          </div>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">Blood group</span>
            </div>
            <input
              type="text"
              class="form-control"
              id="bloodgroupinput"
              placeholder="Blood group"
              style={{ marginLeft: "20px" }}
              required
            />
          </div>
          <div class="d-flex justify-content-between">
            <div class="input-group my-3">
              <div class="input-group-prepend">
                <span class="input-group-text">Age</span>
              </div>
              <input
                type="number"
                min={"1"}
                class="form-control"
                id="ageinput"
                placeholder="age"
                style={{ marginLeft: "20px" }}
                required
              />
            </div>
            <div class="input-group my-3 mx-3">
              <div class="input-group-prepend">
                <span class="input-group-text">Gender</span>
              </div>
              <select
                class="form-select mx-3"
                aria-label="Default select example"
              >
                <option selected>select</option>
                <option value="1">M</option>
                <option value="2">F</option>
                <option value="3">other</option>
              </select>
              {/* <input
              type="text"
              class="form-control"
              id="genderinput"
              placeholder="Gender"
              style={{ marginLeft: "20px" }}
              required
            /> */}
            </div>
          </div>
          <div class="input-group my-3">
            <div class="input-group-prepend">
              <span class="input-group-text">Aadhar no</span>
            </div>
            <input
              type="text"
              class="form-control"
              id="aadharinput"
              placeholder="Aadhar number"
              // minLength={"12"}
              maxLength={"12"}
              style={{ marginLeft: "20px" }}
              required
            />
          </div>
          <div class="input-group my-3">
            <div class="input-group-prepend">
              <span class="input-group-text">Address</span>
            </div>
            <input
              type="text"
              class="form-control"
              id="addressinput"
              placeholder="address"
              style={{ marginLeft: "20px" }}
              required
            />
          </div>
          <div class="input-group my-3">
            <div class="input-group-prepend">
              <span class="input-group-text">comments*</span>
            </div>
            <input
              type="text"
              class="form-control"
              id="commentinput"
              placeholder="optional"
              style={{ marginLeft: "20px" }}
            />
          </div>
        </div>
        <div class="d-flex justify-content-between">
          {/* <button type="submit" class="btn btn-outline-dark">
            Edit Patient details
          </button> */}
          <div></div>
          <button type="submit" class="btn btn-dark mx-3">
            Add Patient details
          </button>
        </div>
      </form>
    </>
  );
}

export default Addpatient;
