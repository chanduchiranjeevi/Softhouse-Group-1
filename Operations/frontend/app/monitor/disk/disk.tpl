<div class="bs-docs-section" ng-controller="DiskController">
    <hr>
    <div>
        <label>Disk Usage:&nbsp;</label>
        <button type="button" class="btn btn-default" ng-model="selectedHostnames" data-html="1" data-multiple="1"
                data-animation="am-flip-x"
                bs-options="hostname as hostname for hostname in hostnames" bs-select>
            Action <span class="caret"></span>
        </button>

        <button type="button" ng-click="showme=true" class="btn btn-success">Show the Graph</button>

        <button type="button" ng-click="showme=false" class="btn btn-danger">Hide</button>
    </div>

    <div ng-show="showme">
        <style>
            #chartdiv1 {
                width	: 100%;
                height	: 500px;
            }
        </style>

        <div id="chartdiv1"></div>
    </div>
</div>