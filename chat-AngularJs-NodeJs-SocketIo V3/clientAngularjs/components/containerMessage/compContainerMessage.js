'use strict';

angular
    .module('containerMessage', [])
    .controller('messages', ($scope, socket, $rootScope) => {
        $scope.messages = new Map([]);
        $scope.msgData = null;
        $scope.sendMsg = ($event) => {
            const keyCode = $event.which || $event.keyCode;

            if (keyCode === 13 && $scope.message !== null) {
                socket.emit('getMsg', {
                    toid: $rootScope.selectedUser,
                    msg: $scope.message,
                    name: $rootScope.username
                });
                $scope.message = null;
            }
        };
        socket.on('exit', (userList) => {
            $scope.userList = userList;
        });

        socket.on('sendMsg', (data) => {
            if (!$scope.messages[data.roomId]) {
                $scope.messages[data.roomId] = [];
            }
            $scope.messages[data.roomId].push(data);
            console.log(data);
        });
    })
    .component('containerMessage', {
        templateUrl: 'components/containerMessage/compContainerMessage.html'
    });
