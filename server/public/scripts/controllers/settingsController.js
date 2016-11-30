colorBlocks.controller('SettingsController', ['$scope', 'DataFactory', function($scope, DataFactory) {
  console.log("settings controller running");

  var self = this;
  self.colors = DataFactory;

  self.addColor = function(newColor) {
    self.colors.push(self.newColor);
    self.newColor;
    DataFactory = self.colors;
    console.log(self.colors);
  }
}]);
