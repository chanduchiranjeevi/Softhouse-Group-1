/**
 * Created by sriku on 2016-11-15.
 */
function memoryUsageService($http, $interpolate) {
    var memory = $interpolate('/api/Metrics/MemoryUsage/{{hostName}}');

    return {
        list: listMemory,
        destroy: destroyMemory,
        listByHostname: listByHostname
    }

    function listMemory(){
        return $http.get(memory());
    }

    function listByHostname(hostname){
        return $http.get(memory({hostName: hostname}));
    }

    function destroyMemory(hostName){
        return $http.delete(memory({ hostName: hostName }))
    }

}