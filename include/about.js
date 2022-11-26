class cusAbout extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <section id="about" class="about">
        <div class="container" data-aos="fade-up">
  
          <div class="row">
            <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
              <img src="assets/img/about.png" class="img-fluid" alt="automation tech">
            </div>
            <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
              <h3>Know more about us</h3>
              <p class="fst-italic">
                Established in <strong>2021</strong> , by a <strong> Mr. Rajiv Sehrawat </strong> to provide automation
                solutions to
                medium and
                light engineering industries by providing Production lines, Automatic / semi automatic assembly machines,
                Test equipments, Material handling equipments, Conveyor systems, Jigs & Fixtures etc.
              </p>
              <ul>
                <li><i class="bi bi-check-circle"></i> We delivers what others can't.</li>
                <li><i class="bi bi-check-circle"></i> We provide quality service.</li>
                <li><i class="bi bi-check-circle"></i> Provide 24x7 support.</li>
              </ul>
  
            </div>
          </div>
  
        </div>
      </section>
        `
  }
}

customElements.define("cus-about", cusAbout);