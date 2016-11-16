/**
 * Created by sriku on 2016-11-15.
 */
function diskUsageService($http, $interpolate) {
    var disk = $interpolate('/api/Metrics/DiskUsage/{{id}}');

    return {
        list: listDisk,
        destroy: destroyDisk
    }

    function listDisk(){
        return $http.get(disk());
    }

    function destroyDisk(id){
        return $http.delete(disk( { id: id}))
    }

}