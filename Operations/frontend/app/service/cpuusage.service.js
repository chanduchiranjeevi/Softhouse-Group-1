/**
 * Created by sriku on 2016-11-15.
 */
function cpuUsageService($http, $interpolate) {
    var cpu = $interpolate('/api/Metrics/CpuUsage/{{id}}');

    return {
        list: listCpu,
        destroy: destroyCpu
    }

    function listCpu(){
        return $http.get(cpu());
    }

    function destroyCpu(id){
        return $http.delete(cpu({ id: id }))
    }

}