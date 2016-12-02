/**
 * Created by sriku on 2016-11-15.
 */
function diskUsageService($http, $interpolate) {
    var disk = $interpolate('/api/Metrics/DiskUsage/{{hostName}}');

    return {
        list: listDisk,
        destroy: destroyDisk,
        listByHostname: listByHostname
    }

    function listDisk(){
        return $http.get(disk());
    }

    function listByHostname(hostname){
        return $http.get(disk({hostName: hostname}));
    }

    function destroyDisk(hostname){
        return $http.delete(disk( { hostName: hostname}))
    }

}