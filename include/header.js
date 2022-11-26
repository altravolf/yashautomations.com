//index.html

class indexHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      `
            <header id="header" class="fixed-top">
            <div class="container d-flex align-items-center">
        
            <!-- <h1 class="logo me-auto text-center"><a href="index.html">Yash Automations</a></h1> -->
            <!-- Uncomment below if you prefer to use an image logo -->
            <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="yash automations" class="img-fluid"></a>
        
              <nav id="navbar" class="navbar order-last order-lg-0">
                <ul>
                  <li><a class="active" href="index.html">Home</a></li>
                  <li><a href="about.html">About</a></li>
                  <li><a href="products.html">Products &amp; Services</a></li>
                  <li><a href="privacy-policy.html"_blank">Privacy policy</a></li>
                  <li><a href="contact.html">Contact</a></li>
                </ul>
                <i class="bi bi-list mobile-nav-toggle"></i>
              </nav><!-- .navbar -->
        
              <a href="products.html" class="get-started-btn">Get Started</a>
        
            </div>
          </header>
        `
  }
}
customElements.define("index-header", indexHeader);


// about.html

class aboutHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      `
            <header id="header" class="fixed-top">
            <div class="container d-flex align-items-center">
        
              <!-- <h1 class="logo me-auto text-center"><a href="index.html">Yash Automations</a></h1> -->
              <!-- Uncomment below if you prefer to use an image logo -->
              <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="yash automations" class="img-fluid"></a>
        
              <nav id="navbar" class="navbar order-last order-lg-0">
                <ul>
                  <li><a href="index.html">Home</a></li>
                  <li><a class="active" href="about.html">About</a></li>
                  <li><a href="products.html">Products &amp; Services</a></li>
                  <li><a href="privacy-policy.html"_blank">Privacy policy</a></li>
                  <li><a href="contact.html">Contact</a></li>
                </ul>
                <i class="bi bi-list mobile-nav-toggle"></i>
              </nav><!-- .navbar -->
        
              <a href="products.html" class="get-started-btn">Get Started</a>
        
            </div>
          </header>
        `
  }
}
customElements.define("about-header", aboutHeader);


// products.html

class productsHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      `
            <header id="header" class="fixed-top">
            <div class="container d-flex align-items-center">
        
            <!-- <h1 class="logo me-auto text-center"><a href="index.html">Yash Automations</a></h1> -->
            <!-- Uncomment below if you prefer to use an image logo -->
            <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="yash automations" class="img-fluid"></a>
        
              <nav id="navbar" class="navbar order-last order-lg-0">
                <ul>
                  <li><a href="index.html">Home</a></li>
                  <li><a  href="about.html">About</a></li>
                  <li><a class="active" href="products.html">Products &amp; Services</a></li>
                  <li><a href="privacy-policy.html"_blank">Privacy policy</a></li>
                  <li><a href="contact.html">Contact</a></li>
                </ul>
                <i class="bi bi-list mobile-nav-toggle"></i>
              </nav><!-- .navbar -->
        
              <a href="products.html" class="get-started-btn">Get Started</a>
        
            </div>
          </header>
        `
  }
}
customElements.define("products-header", productsHeader);


// contact.html

class contactHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      `
            <header id="header" class="fixed-top">
            <div class="container d-flex align-items-center">
        
            <!-- <h1 class="logo me-auto text-center"><a href="index.html">Yash Automations</a></h1> -->
            <!-- Uncomment below if you prefer to use an image logo -->
            <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="yash automations" class="img-fluid"></a>
        
              <nav id="navbar" class="navbar order-last order-lg-0">
                <ul>
                  <li><a href="index.html">Home</a></li>
                  <li><a  href="about.html">About</a></li>
                  <li><a href="products.html">Products &amp; Services</a></li>
                  <li><a href="privacy-policy.html"_blank">Privacy policy</a></li>
                  <li><a class="active" href="contact.html">Contact</a></li>
                </ul>
                <i class="bi bi-list mobile-nav-toggle"></i>
              </nav><!-- .navbar -->
        
              <a href="products.html" class="get-started-btn">Get Started</a>
        
            </div>
          </header>
        `
  }
}
customElements.define("contact-header", contactHeader);


// https://www.freeprivacypolicy.com/live/df78e4be-9b1e-4184-bbf4-a2a54fdbfd81

class privacyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      `
            <header id="header" class="fixed-top">
            <div class="container d-flex align-items-center">
        
            <!-- <h1 class="logo me-auto text-center"><a href="index.html">Yash Automations</a></h1> -->
            <!-- Uncomment below if you prefer to use an image logo -->
            <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="yash automations" class="img-fluid"></a>
        
              <nav id="navbar" class="navbar order-last order-lg-0">
                <ul>
                  <li><a href="index.html">Home</a></li>
                  <li><a  href="about.html">About</a></li>
                  <li><a href="products.html">Products &amp; Services</a></li>
                  <li><a class="active" href="privacy-policy.html"_blank">Privacy policy</a></li>
                  <li><a href="contact.html">Contact</a></li>
                </ul>
                <i class="bi bi-list mobile-nav-toggle"></i>
              </nav><!-- .navbar -->
        
              <a href="products.html" class="get-started-btn">Get Started</a>
        
            </div>
          </header>
        `
  }
}
customElements.define("privacy-header", privacyHeader);


// normal header for all

class normalHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      `
    <header id="header" class="fixed-top">
            <div class="container d-flex align-items-center">
        
            <!-- <h1 class="logo me-auto text-center"><a href="index.html">Yash Automations</a></h1> -->
            <!-- Uncomment below if you prefer to use an image logo -->
            <a href="index.html" class="logo me-auto"><img src="../assets/img/logo.png" alt="yash automations" class="img-fluid"></a>
        
              <nav id="navbar" class="navbar order-last order-lg-0">
                <ul>
                  <li><a href="../index.html">Home</a></li>
                  <li><a  href="../about.html">About</a></li>
                  <li><a href="../products.html">Products &amp; Services</a></li>
                  <li><a href="../privacy-policy.html"_blank">Privacy policy</a></li>
                  <li><a href="../contact.html">Contact</a></li>
                </ul>
                <i class="bi bi-list mobile-nav-toggle"></i>
              </nav><!-- .navbar -->
        
              <a href="products.html" class="get-started-btn">Get Started</a>
        
            </div>
          </header>
    `
  }
}
customElements.define("detail-header", normalHeader);