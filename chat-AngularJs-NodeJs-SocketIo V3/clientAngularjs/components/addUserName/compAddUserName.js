'use strict';

var app = angular
    .module('addUsername', [])
    .controller('addUser', ($rootScope, socket, $scope) => {
        $scope.nameUser = function (data) {
            $rootScope.username = data;
            $scope.mostrarCaja = true;
            socket.emit('username', $rootScope.username);
        };
    })
    .component('addUsername', {
        templateUrl: 'components/addUserName/compAddUserName.html'
    });
