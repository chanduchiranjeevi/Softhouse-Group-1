<div class="col-sm-8">
    <label for="title">Username</label>
    <input id="Username" name="title" class="form-control" ng-model="" type="text" placeholder="The username of your account ..." autocomplete="off" required>
</div>

<div class="col-sm-8">
    <label for="title">Passward</label>
    <input id="Passward" name="title" class="form-control" ng-model="" type="text" placeholder="The passward of your account ..." autocomplete="off" required>
</div>
<br><br>
<div class="col-sm-12">
    <div class="btn-group bth-group-sm">
        <button type="button" class="btn btn-danger bottom-left" ng-model="button.toggle" bs-checkbox>
    <span  class="glyphicon glyphicon-user">
    Log in
    </span>
        </button>
        <button type="button" class="btn btn-danger bottom-right" ng-model="button.toggle" bs-checkbox>
    <span  class="glyphicon glyphicon-user">
    Register
    </span>
        </button>
    </div>
</div>