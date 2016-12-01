/**
 * Created by sriku on 2016-11-15.
 */
function cpuUsageService($http, $interpolate) {
    var cpu = $interpolate('/api/Metrics/CpuUsage/{{hostName}}');

    return {
        list: listCpu,
        destroy: destroyCpu,
        listByHostname: listByHostname
    }

    function listCpu(){
        return $http.get(cpu());
    }

    function listByHostname(hostname){
        return $http.get(cpu({hostName: hostname}));
    }

    function destroyCpu(hostname){
        return $http.delete(cpu({ hostName: hostname }))
    }

}