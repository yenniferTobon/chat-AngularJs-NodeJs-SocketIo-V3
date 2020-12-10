'use strict';

angular
    .module('listUser', [])
    .controller('users', ($scope, socket, $rootScope) => {
        $scope.mostrarCaja1 = false;
        $scope.mostrarCaja2 = false;
        $scope.socketId = null;
        $scope.userList = [];
        $scope.selectedUser = null;

        socket.on('userList', (userList, socketId) => {
            $scope.mostrarCaja1 = true;
            $scope.mostrarCaja2 = true;

            if ($scope.socketId === null) {
                $scope.socketId = socketId;
                $rootScope.userId = socketId;
            }
            $scope.userList = userList;
        });

        $scope.seletedUser = (selectedUser) => {
            selectedUser === $scope.socketId
                ? alert('No puedes chatear contigo mismo.')
                : ($rootScope.selectedUser = selectedUser);
        };
    })
    .component('listUser', {
        templateUrl: 'components/listUser/compListUser.html'
    });
