import React from "react";

function Contact() {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-sm-6 mt-5  white contact-container">
          <h5 className="title">EMİNE KEBELİ</h5>
          <img
            src="https://avatars.githubusercontent.com/u/76777299?v=4"
            alt=""
          />
          <div className="">
            <a
              id="mediaIcon"
              class="fa fa-linkedin"
              href="https://tr.linkedin.com/in/eminekebeli"
            ></a>
            <a
              id="mediaIcon"
              class="fa fa-instagram"
              href="https://www.instagram.com/kbl.emine/"
            ></a>
            <a
              id="mediaIcon"
              class="fa fa-facebook"
              href="https://www.facebook.com/emine.kebeli/"
            ></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
