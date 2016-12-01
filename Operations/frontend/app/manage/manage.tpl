<div class="container">
    <div class="row" ng-controller="ManageController">
        <div class="col-xs-12">
            <hr>
            <style>
                table, th , td  {
                    border: 1px solid grey;
                    border-collapse: collapse;
                    padding: 5px;
                }
                table tr:nth-child(odd) {
                    background-color: #f1f1f1;
                }
                table tr:nth-child(even) {
                    background-color: #ffffff;
                }
            </style>
            <label>CPU Usage:&nbsp;</label><br>
            <table align="center">
                <tr>
                    <th>No.</th>
                    <th>Host Name</th>
                    <th>Last updated on</th>
                    <th></th>
                </tr>
                <tr ng-repeat="cpu in Cpu">
                    <td>{{ $index + 1 }}</td>
                    <td>{{cpu.host}}</td>
                    <td>{{cpu.LastUpdated[0] | date : "yyyy-MM-dd HH:mm"}}</td>
                    <td> <button class="btn btn-danger" ng-click="deleteTheCpuServer(cpu)" >Delete</button></td>
                </tr>
            </table>
            <hr>
            <label>Disk Usage:&nbsp;</label><br>
            <table align="center">
                <tr>
                    <th>No.</th>
                    <th>Host Name</th>
                    <th>Last updated on</th>
                    <th></th>
                </tr>
                <tr ng-repeat="disk in Disk">
                    <td>{{ $index + 1 }}</td>
                    <td>{{disk.host}}</td>
                    <td> {{disk.LastUpdated[0] | date : "yyyy-MM-dd HH:mm"}}</td>
                    <td> <button class="btn btn-danger" ng-click="deleteTheDiskServer(disk)" >Delete</button></td>
                </tr>
            </table>
            <hr>
            <label>Memory Usage:&nbsp;</label><br>
            <table align="center">
                <tr>
                    <th>No.</th>
                    <th>Host Name</th>
                    <th>Last updated on</th>
                    <th></th>
                </tr>
                <tr ng-repeat="memory in Memory">
                    <td>{{ $index + 1 }}</td>
                    <td>{{memory.host}}</td>
                    <td>{{memory.LastUpdated[0] | date :"yyyy-MM-dd HH:mm"}}</td>
                    <td> <button class="btn btn-danger" ng-click="deleteTheMemoryServer(memory)" >Delete</button></td>
                </tr>
            </table>
            <hr>
        </div>
    </div>
</div>
