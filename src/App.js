// import "./script.js";

function App() {
  return (
    <>
      <div className="container">
        <Main />
        <WhatTodo />
      </div>
      <WhyToChose />
      <Best />
      <Growth />
      <Feedback />
      <Footer />
      {/* <Best /> */}
    </>
  );
}

function Main() {
  return (
    <main className="main">
      <div className="row">
        <div className="col-sm-6 content ">
          <h2 className="">AWARD WINING</h2>
          <h1>DIGITAL MARKETING AGENCY</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            vel saepe ab rem pariatur odio id ipsum iusto laboriosam eos? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Unde, reiciendis
            at. Id voluptatem nulla tempora nobis eos aperiam debitis iusto?
          </p>
          <button
            type="button"
            data-toggle="modal"
            data-target="#myModal"
            className="btn btn-danger"
          >
            Contact us
          </button>
          <div class="modal" id="myModal">
            <div class="modal-dialog">
              <div class="modal-content">
                {/* <!-- Modal Header --> */}
                <div class="modal-header">
                  <h4 class="modal-title">Talk to us</h4>
                  <button type="button" class="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>

                {/* <!-- Modal body --> */}
                <div class="modal-body">
                  <form action="https://getform.io/f/nbvvxoeb" method="POST">
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control  mb-4 mt-3"
                        id="exampleInputEmail1"
                        placeholder="Work email*"
                        name="email"
                      />
                      <div class="row mb-4">
                        <div class="col">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="First name*"
                            name="fName"
                          />
                        </div>
                        <div class="col">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Last name*"
                            name="lName"
                          />
                        </div>
                      </div>
                      <div class="form-check">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="checkInput1"
                          name="notify"
                          value="yes"
                        />
                        <label class="form-check-label" for="exampleCheck1">
                          I agree to Fyle's termms and conditions, and provide
                          consent to send me communication
                        </label>
                      </div>
                      <button type="submit" class="btn btn-danger btn-block">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <img src="../assets/img1.jpg" className="img-fluid" alt="girlimage" />
        </div>
      </div>
    </main>
  );
}

function WhatTodo() {
  return (
    <div className="section">
      <h5 style={{ color: "red" }}>WHAT WE DO </h5>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-sm-5">
            <h1>SERVICES FOR YOU</h1>
          </div>
          <div className="col-sm-7">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
              dolorem molestias totam nostrum ipsum perspiciatis adipisci
              debitis quibusdam corporis? Quisquam deserunt beatae aliquam qui
              placeat vel nesciunt, laborum maxime rerum neque sint, magni
              architecto necessitatibus excepturi natus, tempora corporis
              maiores.
            </p>
          </div>
        </div>

        <ImageSlider />
      </div>
    </div>
  );
}

function ImageSlider() {
  return (
    <div className="imageContainer">
      <section className="slider-wrapper">
        <button
          id="prev-slide"
          className="slide-button material-symbols-outlined"
        >
          chevron_left
        </button>

        <div className="image-list ">
          <div className="imageContainer2">
            <img
              src="../assets/imgSoft.jpeg"
              className="image-item"
              alt="software"
            />
            <div className="content">
              <h1>Software Development</h1>
              <h6>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor, sit amet consectetur adipisicing elit. Ea soluta
              </h6>
              <button>
                <a href="https://www.fylehq.com/">
                  Read More
                  <span class="material-symbols-outlined">arrow_forward</span>
                </a>
              </button>
            </div>
          </div>
          <div className="imageContainer2">
            <img
              src="../assets/imgTour.avif"
              className="image-item"
              alt="Tour"
            />
            <div className="content">
              <h1>Tours and travels</h1>
              <h6>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor, sit amet consectetur adipisicing elit. Ea soluta
              </h6>
              <button>
                <a href="https://www.fylehq.com/">
                  Read More
                  <span class="material-symbols-outlined">arrow_forward</span>
                </a>
              </button>
            </div>
          </div>
          <div className="imageContainer2">
            <img
              src="../assets/imageCloud.jpeg"
              className="image-item"
              alt="Cloud"
            />
            <div className="content">
              <h1>Cloud Services</h1>
              <h6>
                Lorem ipsum dolor sit amet consectetur adipisicing eamet
                consectetur adipisicing elit. Ea soluta
              </h6>
              <button>
                <a href="https://www.fylehq.com/">
                  Read More
                  <span class="material-symbols-outlined">arrow_forward</span>
                </a>
              </button>
            </div>
          </div>
          <div className="imageContainer2">
            <img
              src="../assets/imgweb.jpg"
              className="image-item"
              alt="WebDev"
            />
            <div className="content">
              <h1>Web Development</h1>
              <h6>
                Lorem ipsum dolor sit amet consectetur adipisicing el
                consectetur adipisicing elit. Ea soluta
              </h6>
              <button>
                <a href="https://www.fylehq.com/">
                  Read More
                  <span class="material-symbols-outlined">arrow_forward</span>
                </a>
              </button>
            </div>
          </div>
          <div className="imageContainer2">
            <img
              src="../assets/imgAndroid.jpeg"
              className="image-item"
              alt="WebDev"
            />
            <div className="content">
              <h1>Android Development</h1>
              <h6>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor, sitta
              </h6>
              <button>
                <a href="https://www.fylehq.com/">
                  Read More
                  <span class="material-symbols-outlined">arrow_forward</span>
                </a>
              </button>
            </div>
          </div>
        </div>
        <button
          id="next-slide"
          className="slide-button material-symbols-outlined"
        >
          chevron_right
        </button>
        <div className="slider-scrollbar">
          <div className="scrollbar-track">
            <div className="scrollbar-thumb"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

function WhyToChose() {
  return (
    <div className="container-choice">
      <h5>WHY CHOOSE US</h5>
      <h1>WHY WE ARE BEST</h1>
      <div class="container" style={{ marginTop: "2rem" }}>
        <div class="row">
          <div class="col">
            <div class="card" style={{ width: "15rem" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enable-background="new 0 0 24 24"
                height="48px"
                viewBox="0 0 24 24"
                width="48px"
                fill="black"
              >
                <g>
                  <path d="M0,0h24v24H0V0z" fill="none" />
                </g>
                <g>
                  <g>
                    <path d="M12,2C6.49,2,2,6.49,2,12s4.49,10,10,10s10-4.49,10-10S17.51,2,12,2z M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8 S16.41,20,12,20z M15,12c0,1.66-1.34,3-3,3s-3-1.34-3-3s1.34-3,3-3S15,10.34,15,12z" />
                  </g>
                </g>
              </svg>
              <div class="card-body">
                <h6 class="card-title">Card title</h6>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card" style={{ width: "15rem" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48px"
                viewBox="0 0 24 24"
                width="48px"
                fill="black"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M20.38 8.57l-1.23 1.85a8 8 0 0 1-.22 7.58H5.07A8 8 0 0 1 15.58 6.85l1.85-1.23A10 10 0 0 0 3.35 19a2 2 0 0 0 1.72 1h13.85a2 2 0 0 0 1.74-1 10 10 0 0 0-.27-10.44z" />
                <path d="M10.59 15.41a2 2 0 0 0 2.83 0l5.66-8.49-8.49 5.66a2 2 0 0 0 0 2.83z" />
              </svg>
              <div class="card-body">
                <h6 class="card-title">Card title</h6>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card" style={{ width: "15rem" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enable-background="new 0 0 20 20"
                height="48px"
                viewBox="0 0 20 20"
                width="48px"
                fill="black"
              >
                <g>
                  <rect fill="none" height="20" width="20" x="0" y="0" />
                  <path d="M9.25,16h1.5v-1h-1.5V16z M10,8L10,8L10,8C10,8,10,8,10,8c-1.38,0-2.5,1.12-2.5,2.5C7.5,12,9.25,13,9.25,14 c0.35,0,1.5,0,1.5,0c0-1,1.75-2,1.75-3.5C12.5,9.12,11.38,8,10,8z M6.47,13.53l-0.71,0.71C4.67,13.16,4,11.66,4,10 c0-3.31,2.69-6,6-6V2l2.5,2.5L10,7V5c-2.76,0-5,2.24-5,5C5,11.38,5.56,12.63,6.47,13.53z M14.24,14.24l-0.71-0.71 C14.44,12.63,15,11.38,15,10s-0.56-2.63-1.47-3.53l0.71-0.71C15.33,6.84,16,8.34,16,10S15.33,13.16,14.24,14.24z" />
                </g>
              </svg>
              <div class="card-body">
                <h6 class="card-title">Card title</h6>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card" style={{ width: "15rem" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48px"
                viewBox="0 0 24 24"
                width="48px"
                fill="black"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
              </svg>
              <div class="card-body">
                <h6 class="card-title">Card title</h6>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Growth() {
  return (
    <div className="growth-choice container-choice">
      <h5>EXPERTS GROWTHS</h5>
      <h1>OUR COMPANY GROWTH</h1>
      <div class="container" style={{ marginTop: "2rem" }}>
        <div class="row">
          <div class="col">
            <div class="card-grow" style={{ width: "15rem" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48px"
                viewBox="0 0 24 24"
                width="48px"
                fill="red"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <div class="card-body">
                <h6 class="card-title">199 +</h6>
                <p class="card-text">Satisfied Customers</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card-grow" style={{ width: "15rem" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48px"
                viewBox="0 0 24 24"
                width="48px"
                fill="red"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
              </svg>
              <div class="card-body">
                <h6 class="card-title">1591 +</h6>
                <p class="card-text">Days of Operation</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card-grow" style={{ width: "15rem" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enable-background="new 0 0 24 24"
                height="48px"
                viewBox="0 0 24 24"
                width="48px"
                fill="red"
              >
                <rect fill="none" height="24" width="24" />
                <path d="M22,5.18L10.59,16.6l-4.24-4.24l1.41-1.41l2.83,2.83l10-10L22,5.18z M19.79,10.22C19.92,10.79,20,11.39,20,12 c0,4.42-3.58,8-8,8s-8-3.58-8-8c0-4.42,3.58-8,8-8c1.58,0,3.04,0.46,4.28,1.25l1.44-1.44C16.1,2.67,14.13,2,12,2C6.48,2,2,6.48,2,12 c0,5.52,4.48,10,10,10s10-4.48,10-10c0-1.19-0.22-2.33-0.6-3.39L19.79,10.22z" />
              </svg>
              <div class="card-body">
                <h6 class="card-title">283 +</h6>
                <p class="card-text">Complete Project</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card-grow" style={{ width: "15rem" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enable-background="new 0 0 20 20"
                height="48px"
                viewBox="0 0 20 20"
                width="48px"
                fill="red"
              >
                <g>
                  <rect fill="none" height="20" width="20" x="0" />
                </g>
                <g>
                  <g />
                  <g>
                    <path d="M15,6h-2V5H7v1H5C4.45,6,4,6.45,4,7v1c0,1.66,1.34,3,3,3h0.18c0.36,1.01,1.24,1.77,2.32,1.95V15H7v1h2.5h1H13v-1h-2.5 v-2.05c1.08-0.18,1.96-0.94,2.32-1.95H13c1.66,0,3-1.34,3-3V7C16,6.45,15.55,6,15,6z M5,8V7h2v3C5.9,10,5,9.1,5,8z M10,12 c-1.1,0-2-0.9-2-2V6h4v4C12,11.1,11.1,12,10,12z M15,8c0,1.1-0.9,2-2,2V7h2V8z" />
                  </g>
                </g>
              </svg>
              <div class="card-body">
                <h6 class="card-title">75 +</h6>
                <p class="card-text">Win Awards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Feedback() {
  return (
    <div className="feedback-container">
      <h5>CLIENT'S FEEDBACK</h5>
      <h1>PEOPLE SAY'S ABOUT US !</h1>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          error mollitia ullam, dolores ratione quasi velit consequuntur
          reiciendis debitis ipsum?
        </p>
        <p id="intro">
          <span>JANNAT TUMPA</span> - COO, AMERIMAR ENTERPRISES, INC
        </p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <img src="../assets/uni.png" className="footer-logo" alt="" />
      <img src="../assets/sam.png" className="footer-logo" alt="" />
      <img src="../assets/macd.png" className="footer-logo" alt="" />
      <img src="../assets/gogle.png" className="footer-logo" alt="" />
      <img src="../assets/disn.png" className="footer-logo" alt="" />
      <img src="../assets/harison.jpeg" className="footer-logo" alt="" />
    </footer>
  );
}

function Best() {
  return (
    <div className="head">
      <h5>OUR PROJECT</h5>
      <h1>WHY WE ARE BEST</h1>

      <div className="center">
        <input type="radio" name="active" id="tab-1" />
        <input type="radio" name="active" id="tab-2" />
        <input type="radio" name="active" id="tab-3" />
        <div className="sliders">
          <label for="tab-1">
            <div>
              <h1>Genderless Kei - Japan's Hot</h1>
              <p>
                Set to launch on the manufacter's new A330 neo aircraft in 2017.
                It's offering lots of
              </p>
            </div>
          </label>
          <label for="tab-2">
            <div>
              <h1>Better Strategy & Quality</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quisquam, saepe!
              </p>
            </div>
          </label>
          <label for="tab-3">
            <div>
              <h1>Genderless Kei - Japan's Hot</h1>
              <p>
                Set to launch on the manufacter's new A330 neo aircraft in 2017.
                It's offering lots of
              </p>
            </div>
          </label>
        </div>
        <div className="img-card">
          <img src="../assets/imgweb.jpg" alt="web" />
          <img src="../assets/imgSoft.jpeg" alt="software" />
          <img src="../assets/imgAndroid.jpeg" alt="android" />
        </div>
      </div>
    </div>
  );
}

export default App;
