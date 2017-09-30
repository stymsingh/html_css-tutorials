.controller('overlayController',function($scope, $timeout){
 
        var startimg="img/image.jpg";
        $scope.image=startimg;
        $scope.textOverlay="";
 
        var canvas = document.getElementById('tempCanvas');
        var context = canvas.getContext('2d');
 
})
 