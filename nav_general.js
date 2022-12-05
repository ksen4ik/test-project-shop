document.write('\
  <div class="container-fluid">\
      <div class="b-header__logo">\
          <a href="/index.html" class="navbar-brand p-0">\
              <img \
              src="/images/StyleRoom_logo.png" \
              class="b-header__logo-img" \
              alt="Logo Style Room"\
              width="150">\
          </a>\
      </div>\
    <button class="navbar-toggler" \
    type="button" \
    data-bs-toggle="collapse" \
    data-bs-target="#navbarSupportedContent" \
    aria-controls="navbarSupportedContent" \
    aria-expanded="false" \
    aria-label="Toggle navigation">\
      <span class="navbar-toggler-icon"></span>\
    </button>\
    <div class="collapse navbar-collapse" id="navbarSupportedContent">\
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 catalog-margin">\
        <li class="nav-item dropdown">\
          <a \
              class="nav-link dropdown-toggle" \
              href="#" \
              role="button" \
              data-bs-toggle="dropdown" \
              aria-expanded="false">\
              Catalog\
          </a>\
          <ul class="dropdown-menu dropdown-menu-dark">\
              <li><a class="dropdown-item active" href="html/dresses.html">Dresses</a></li>\
              <li><a class="dropdown-item" href="html/skirts.html">Skirts</a></li>\
              <li><a class="dropdown-item" href="html/shorts.html">Shorts</a></li>\
              <li><a class="dropdown-item" href="html/jeans.html">Jeans</a></li>\
              <li><a class="dropdown-item" href="html/t-shirts.html">T-shirts</a></li>\
              <li><a class="dropdown-item" href="html/shoes.html">Shoes</a></li>\
          </ul>\
        </li>\
        <li class="nav-item">\
          <a class="nav-link" aria-current="page" href="html/newcollection.html">New collection</a>\
        </li>\
        <li class="nav-item">\
          <a class="nav-link" href="html/aboutus.html">About us</a>\
        </li>\
      </ul>\
\
      <div class="search-position">\
        <form class="d-flex mt-1.6" role="search">\
          <input class="form-control me-2 input-search" type="search" placeholder="Search" aria-label="Search">\
          <button class="btn btn-search btn-secondary" type="submit">Go</button>\
        </form>\
      </div>\
\
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalLogIn">\
        Log in\
      </button>\
\
      <li class="nav-item or-set">\
        <p type="text">or</p>\
      </li>\
\
      <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModalSignUp">\
        Sign up\
      </button>\
    </div>\
  </div>\
');
