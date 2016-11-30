<div ng-controller="ManageController">
<h1>CPU Usage</h1>
  <table>
      <tr>
          <th>NO.</th>
          <th>Hostname</th>
          <th>Lastest upload date</th>
          <th>Controller</th>
      </tr>
    <tr ng-repeat="hostname in hostnames">
        <td>{{ $index + 1 }}</td>
        <td>{{hostname}}</td>
        <td ng-repeat="x in timemax"> {{x | date :"yyyy-MM-dd HH:mm"}}</td>
        <td> <button class="btn btn-danger">Delete</button></td>
    </tr>
  </table>


    </div>
</div>