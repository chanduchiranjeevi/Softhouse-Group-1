<div class="bs-docs-section" ng-controller="CpuController">
    <div>
        <label>CPU Usage:&nbsp;</label>
        <button type="button" class="btn btn-default" ng-model="selectedIcons" data-html="1" data-multiple="1" data-animation="am-flip-x" bs-options="icon.value as icon.label for icon in CPUicons" bs-select>
            Action <span class="caret"></span>
        </button>
        <button type="button" class="btn btn-danger" ng-model="">
            Show the Graph
        </button>
    </div>
</div>