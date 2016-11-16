/**
 * Created by sriku on 2016-11-15.
 */
function memoryUsageService($http, $interpolate) {
    var memory = $interpolate('/api/Metrics/MemoryUsage/{{id}}');

    return {
        list: listMemory,
        destroy: destroyMemory
    }

    function listMemory(){
        return $http.get(memory());
    }

    function destroyMemory(id){
        return $http.delete(memory({ id: id }))
    }

}