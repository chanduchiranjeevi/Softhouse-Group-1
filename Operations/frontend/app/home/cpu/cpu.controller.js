/**
 * Created by dell- on 2016/11/10.
 */
angular.module('app')

    .controller('CpuController', function($scope, $http) {

        $scope.selectedIcon = '';
        $scope.selectedIcons = ['server1'];
        $scope.CPUicons = [
            {value: 'server1', label: 'server1'},
            {value: 'server2', label: 'server2'},
            {value: 'server3', label: 'server3'},
            {value: 'server4', label: 'server4'},
            {value: 'server5', label: 'server5'},


        ];



    });