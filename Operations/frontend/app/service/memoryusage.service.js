/**
 * Created by sriku on 2016-11-15.
 */
function memoryUsageService($http, $interpolate) {
    var memory = $interpolate('/api/Metrics/MemoryUsage/{{}}');

    return {
        list: listMemory,
        destroy: destroyMemory
    }

    function listMemory(){
        return $http.get(memory());
    }

    function destroyMemory(hostName){
        return $http.delete(memory({ hostName: hostName }))
    }

}