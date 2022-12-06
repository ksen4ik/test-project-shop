document.write('\
<div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">\
    <div class="modal-dialog modal-sm">\
      <div class="modal-content sign-up-header">\
        <div class="modal-header">\
          <button type="button" class="btn sign-up-btn disabled" style="margin-left: 20%" data-bs-toggle="modal" data-bs-dismiss="modal" data-bs-target="#exampleModalToggle">Log in</button>\
          <button type="button" class="btn sign-up-btn" style="margin-right: 15%" data-bs-toggle="modal" data-bs-dismiss="modal" data-bs-target="#exampleModalToggle2">Sign up</button>\
          <button type="button" style="background-color: white;" class="btn-close cd-close-form" data-bs-dismiss="modal" aria-label="Close"></button>\
        </div>\
        <div class="modal-body">\
            <form class="row g-3">\
                <div class="mb-3" style="padding-top: 5%;">\
                  <label for="exampleDropdownFormEmail2" class="form-label" style="margin-left: 10%; color: white;">Email address</label>\
                  <input type="email" class="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com" style="width: 80%; margin-left: 10%;">\
                </div>\
                <div class="mb-3">\
                  <label for="exampleDropdownFormPassword2" class="form-label" style="margin-left: 10%; color: white;">Password</label>\
                  <input type="password" class="form-control" id="exampleDropdownFormPassword2" placeholder="Password" style="width: 80%; margin-left: 10%;">\
                </div>\
                <div class="mb-3">\
                  <div class="form-check" style="padding-top: 5%; margin-left: 10%">\
                    <input type="checkbox" class="form-check-input" id="dropdownCheck2">\
                    <label class="form-check-label" for="dropdownCheck2" style="color: white;">\
                      Remember me\
                    </label>\
                  </div>\
                </div>\
                <div class="col-5" style="margin-left: 35%; padding-bottom: 5%;">\
                  <button type="submit" class="btn btn-light">Sign in</button>\
                </div>\
              </form>\
        </div>\
      </div>\
    </div>\
</div>\
\
  <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">\
    <div class="modal-dialog modal-sm">\
      <div class="modal-content sign-up-header">\
        <div class="modal-header">\
          <button type="button" class="btn sign-up-btn" style="margin-left: 20%" data-bs-toggle="modal" data-bs-dismiss="modal" data-bs-target="#exampleModalToggle">Log in</button>\
          <button type="button" class="btn sign-up-btn disabled" style="margin-right: 15%" data-bs-toggle="modal" data-bs-dismiss="modal" data-bs-target="#exampleModalToggle2">Sign up</button>\
          <button type="button" style="background-color: white;" class="btn-close cd-close-form" data-bs-dismiss="modal" aria-label="Close"></button>\
        </div>\
        <div class="modal-body">\
            <form class="row g-3">\
                <div class="mb-3" style="padding-top: 5%;">\
                  <label for="validationDefaultUsername" class="form-label" style="margin-left: 10%; color: white;">Username</label>\
                  <div class="input-group">\
                    <span class="input-group-text" id="inputGroupPrepend2" style="margin-left: 10%;">@</span>\
                    <input type="text" class="form-control" id="validationDefaultUsername" placeholder="Username" aria-describedby="inputGroupPrepend2" required style="margin-right: 10%">\
                  </div>\
                </div>\
                <div class="mb-3">\
                  <label for="validationDefault05" class="form-label" style="margin-left: 10%; color: white;">E-mail</label>\
                  <input type="text" class="form-control" id="validationDefault05" placeholder="email@example.com" required style="width: 80%; margin-left: 10%;">\
                </div>\
                <div class="mb-3">\
                  <label for="validationDefault06" class="form-label" style="margin-left: 10%; color: white;">Password</label>\
                  <input type="password" class="form-control" id="validationDefault06" placeholder="Password" style="width: 80%; margin-left: 10%;">\
                </div>\
                <div class="col-12">\
                  <div class="form-check" style="padding-top: 5%; margin-left: 10%">\
                  <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required>\
                  <label class="form-check-label" for="invalidCheck2" style="color: white;">\
                    Agree to terms and conditions\
                  </label>\
                  </div>\
                </div>\
                <div class="col-5" style="margin-left: 35%; padding-bottom: 5%;">\
                  <button type="submit" class="btn btn-light">Sign up</button>\
                </div>\
              </form>\
        </div>\
      </div>\
    </div>\
  </div>\
');