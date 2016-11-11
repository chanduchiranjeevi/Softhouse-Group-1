/**
 * Created by dell- on 2016/11/10.
 */
angular.module('app')

    .controller('MemoryController', function($scope, $http) {

        $scope.selectedMemoryIcon = '';
        $scope.selectedMemoryIcons = ['server1'];
        $scope.Memoryicons = [
            {value: 'server1', label: 'server1'},
            {value: 'server2', label: ' server2'},
            {value: 'server3', label: ' server3'},
            {value: 'server4', label: ' server4'},
            {value: 'server5', label: ' server5'},
            {value: 'server6', label: ' server6'}

        ];



    });