<div class="bs-docs-section" ng-controller="MemoryController">
    <div>
        <hr>
        <label>Memory Usage:&nbsp;</label>
        <button type="button" class="btn btn-default" ng-model="selectedHostnames" data-html="1" data-multiple="1"
                data-animation="am-flip-x"
                bs-options="hostname as hostname for hostname in hostnames" bs-select>
            Action <span class="caret"></span>
        </button>
        <button type="button" class="btn btn-success">
            Show the Graph
        </button>
    </div>
</div>