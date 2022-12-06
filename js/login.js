document.write('\
  <div class="modal-dialog modal-sm">\
    <div class="modal-content">\
      <div class="modal-header sign-up-header" style="background-color: rgb(200, 220, 220)">\
        <h1 class="modal-title fs-5" id="exampleModalLabel">Log in to your account</h1>\
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\
      </div>\
      <form class="row g-3">\
        <div class="mb-3">\
          <label for="exampleDropdownFormEmail2" class="form-label">Email address</label>\
          <input type="email" class="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com">\
        </div>\
        <div class="mb-3">\
          <label for="exampleDropdownFormPassword2" class="form-label">Password</label>\
          <input type="password" class="form-control" id="exampleDropdownFormPassword2" placeholder="Password">\
        </div>\
        <div class="mb-3" >\
          <div class="form-check">\
            <input type="checkbox" class="form-check-input" id="dropdownCheck2">\
            <label class="form-check-label" for="dropdownCheck2">\
              Remember me\
            </label>\
          </div>\
        </div>\
        <div class="col-5" style="margin-left: 35%">\
          <button type="submit" class="btn btn-secondary">Sign in</button>\
        </div>\
      </form>\
    </div>\
  </div>\
');
