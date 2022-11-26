class cusFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      `
            <footer id="footer">

            <div class="footer-top">
              <div class="container">
                <div class="row">
        
                  <div class="col-lg col-md-6 footer-contact text-center ">
                    <h3>Address:</h3>
                    <p class="h4">YASH AUTOMATIONS</p>
                    <p>
                      Opposite MVN Public School, Sallagarh<br>
                      Kitwari Chowk, Palwal, Haryana
                      <br><br></p>
                  </div>
        
                  <div class="col-md-6 footer-contact text-center">
                    <h3>Contact us:</h3>
                    <p>
                      <strong>WhatsApp:</strong> +91 89308 08370 <br>
                      <strong>Phone:</strong> +91 70154 56209<br>
                      <strong>Email:</strong> yashautomations@yahoo.com<br>
                    </p>
                  </div>
                </div>
              </div>
            </div>
        
            <div class="container py-4">
        
              <div class="me-md-auto text-center ">
                <div class="copyright">
                  &copy; <span id="copyYear"></span> Copyright <strong><span>Yash Automations</span></strong>.
                  <div class="col-sm">All Rights Reserved </div>
                </div>
                <div class="credits">
                  Powered by <span style="color: #007580; font-weight: 700;">Altra Volf</span>
                </div>
              </div>
              <div class="social-links text-center text-md-right pt-3">
                <!-- <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a> -->
                <a href="#" target="_blank" rel="noreferrer noopener"
                  class="facebook"><i class="bx bxl-facebook"></i></a>
                <a href="https://api.whatsapp.com/send?phone=918930808370" target="_blank" rel="noreferrer noopener"
                  class="whatsapp"><i class="bx bxl-whatsapp"></i></a>
                <!-- <a href="#" class="google-plus"><i class="bx bxl-"></i></a> -->
                <a href="#" target="_blank" rel="noreferrer noopener"
                  class="linkedin"><i class="bx bxl-youtube"></i></a>
              </div>
            </div>
          </footer>
        `
  }
}

customElements.define("cus-footer", cusFooter);