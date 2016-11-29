<div class="bs-docs-section" ng-controller="CpuController">

    {{selectedHostnames | json}}
{{CpuMetrics | json}}
    <hr>
    <div>
        <label>CPU Usage:&nbsp;</label>
        <button type="button" class="btn btn-default" ng-model="selectedHostnames" data-html="1" data-multiple="1"
                data-animation="am-flip-x"
                bs-options="hostname as hostname for hostname in hostnames" bs-select>
            Action <span class="caret"></span>
        </button>

        <button type="button" ng-click="showTheGraph()"  class="btn btn-success">Show the Graph</button>

        <button type="button" ng-click="hideTheGraph()" class="btn btn-danger">Hide</button>
    </div>

    <div ng-show="showme">
        <style>
            #chartdiv {
                width	: 100%;
                height	: 500px;
            }
        </style>

        <div id="chartdiv"></div>
    </div>
</div>