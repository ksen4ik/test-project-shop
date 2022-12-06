document.write('\
  <div class="modal-dialog modal-lg">\
    <div class="modal-content">\
      <div class="modal-header sign-up-header" style="background-color: rgb(200, 220, 220)">\
        <h1 class="modal-title fs-5" id="exampleModalLabel">Quick Registration</h1>\
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\
      </div>\
      <form class="row g-3">\
        <div class="col-md-5">\
          <label for="validationDefault01" class="form-label">First name</label>\
          <input type="text" class="form-control" id="validationDefault01" value="" required>\
        </div>\
        <div class="col-md-5">\
          <label for="validationDefault02" class="form-label">Last name</label>\
          <input type="text" class="form-control" id="validationDefault02" value="" required>\
        </div>\
        <div class="col-md-3">\
          <label for="validationDefault03" class="form-label">Country</label>\
          <select class="form-select" id="validationDefault03" required>\
            <option selected disabled value="">Choose...</option>\
            <option>Belarus</option>\
            <option>Great Britain</option>\
            <option>USA</option>\
          </select>\
        </div>\
        <div class="col-md-3">\
          <label for="validationDefault04" class="form-label">City</label>\
          <input type="text" class="form-control" id="validationDefault04" required>\
        </div>\
        <div class="col-md-3">\
          <label for="validationDefaultUsername" class="form-label">Username</label>\
          <div class="input-group">\
            <span class="input-group-text" id="inputGroupPrepend2">@</span>\
            <input type="text" class="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required>\
          </div>\
        </div>\
        <div class="col-md-4">\
          <label for="validationDefault05" class="form-label">E-mail</label>\
          <input type="text" class="form-control" id="validationDefault05" required>\
        </div>\
        <div class="col-md-3">\
          <label for="validationDefault06" class="form-label">Password</label>\
          <input type="text" class="form-control" id="validationDefault06" required>\
        </div>\
        <div class="col-12">\
          <div class="form-check">\
            <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required>\
            <label class="form-check-label" for="invalidCheck2">\
              Agree to terms and conditions\
            </label>\
          </div>\
        </div>\
        <div class="col-5" style="margin-left: 40%">\
          <button class="btn btn-secondary" type="submit">Submit form</button>\
        </div>\
    </div>\
  </div>\
');
