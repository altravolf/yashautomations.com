class cusProducts extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      `
            <section id="popular-courses" class="courses">
            <div class="container" data-aos="fade-up">
      
              <div class="section-title">
                <h2>Products &amp; Services</h2>
                <p>Popular Products &amp; Services</p>
              </div>
      
              <div class="row" data-aos="zoom-in" data-aos-delay="100">
      
                <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                  <div class="course-item">
                    <img src="assets/img/product-img/siemens.png" class="img-fluid" alt="siemens products">
                    <div class="course-content">
                      <div class="d-flex justify-content-between align-items-center mb-3">
                        <h4><a href="products/siemens-products.html" class="cus-link"> Siemens </a></h4>
                      </div>
      
                      <h3><a href="products/siemens-products.html">PLC, HMI, Ac Drive, Ac Servo, etc.</a></h3>
                      <p>Siemens AG is a German multinational conglomerate corporation and the largest industrial manufacturing company in Europe headquartered in Munich with branch offices abroad.</p>
                    </div>
                  </div>
                </div> <!-- End Course Item-->
      
                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                  <div class="course-item">
                    <img src="assets/img/product-img/abb.png" class="img-fluid" alt="abb products">
                    <div class="course-content">
                      <div class="d-flex justify-content-between align-items-center mb-3">
                        <h4>ABB</h4>
                      </div>
      
                      <h3><a href="products/abb-products.html">PLC, HMI</a></h3>
                      <p>ABB is a multinational corporation headquartered in Västerås, Sweden, and Zürich, Switzerland. The company was formed in 1988 when Sweden's ASEA and Switzerland's Brown Boveri merged to create ASEA Brown Boveri, later simplified to the initials ABB.</p>
                    </div>
                  </div>
                </div> <!-- End Course Item-->
      
                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                  <div class="course-item">
                    <img src="assets/img/product-img/delta.png" class="img-fluid" alt="delta products">
                    <div class="course-content">
                      <div class="d-flex justify-content-between align-items-center mb-3">
                        <h4>Delta</h4>
                      </div>
      
                      <h3><a href="products/delta-products.html">PLC, HMI, Ac Drive, Ac Servo</a></h3>
                      <p>Delta Electronics, Inc. (also known as DELTA), is a Taiwanese electronics manufacturing company. 100-year-old Universal Instruments will continue to operate independently and without a change in management. Universal holds more than 500 automation related patents.</p>
                    </div>
                  </div>
                </div> <!-- End Course Item-->
      
                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                  <div class="course-item">
                    <img src="assets/img/product-img/omron.png" class="img-fluid" alt="omron products">
                    <div class="course-content">
                      <div class="d-flex justify-content-between align-items-center mb-3">
                        <h4>Omron</h4>
                      </div>
      
                      <h3><a href="products/omron-products.html">PLC, HMI</a></h3>
                      <p>Omron Corporation, styled as OMRON, is a Japanese electronics company based in Kyoto, Japan. Omron's primary business is the manufacture and sale of automation components, equipment and systems.</p>
                    </div>
                  </div>
                </div> <!-- End Course Item-->
      
                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                  <div class="course-item">
                    <img src="assets/img/product-img/mitsubishi.png" class="img-fluid" alt="mitsubishi products">
                    <div class="course-content">
                      <div class="d-flex justify-content-between align-items-center mb-3">
                      <h4>Mitsubishi </h4>
                      </div>
      
                      <h3><a href="products/mitsubishi-products.html">PLC, HMI, Ac Drive, Ac Servo</a></h3>
                      <p> <i>Mitsubishi Denki kabushikigaisha</i>, also abbreviated as MELCO), established on 15 January 1921, is a Japanese multinational electronics and electrical equipment manufacturing company headquartered in Tokyo, Japan. It is one of the core companies of Mitsubishi. </p>
                    </div>
                  </div>
                </div> <!-- End Course Item-->
      
                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                  <div class="course-item">
                    <img src="assets/img/product-img/wecon.png" class="img-fluid" alt="wecon products">
                    <div class="course-content">
                      <div class="d-flex justify-content-between align-items-center mb-3">
                        <h4>Wecon </h4>
                      </div>
      
                      <h3><a href="products/wecon-products.html">PLC, HMI</a></h3>
                      <p>WECON is one of leading global manufacturer. We independently develop, manufacture and sale HMI & PLC & IIoT V-BOX & SERVO & INVERTER.
                      </p>
                    </div>
                  </div>
                </div> <!-- End Course Item-->
      
              </div>
      
            </div>
          </section>
        `
  }
}
customElements.define("cus-products", cusProducts);