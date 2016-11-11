/**
 * Created by dell- on 2016/11/10.
 */
angular.module('app')

    .controller('DiskController', function($scope, $http) {

        $scope.selectedDiskIcon = '';
        $scope.selectedDiskIcons = ['server1'];
        $scope.Diskicons = [
            {value: 'server1', label: 'server1'},
            {value: 'server2', label: ' server2'},
            {value: 'server3', label: ' server3'},
            {value: 'server4', label: ' server4'}

        ];



    });