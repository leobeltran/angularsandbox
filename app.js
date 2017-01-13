(function() {
	var app = angular.module('store', []);

	app.controller('StoreController', ['$scope', function($scope) {
		$scope.products = gems;
	}])

  app.controller('PanelController', function() {
    this.tab = 1;

    this.selectTab = function(setTab) {
      this.tab = setTab;
    };
    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };
  });

	var gems = [
		{
			name: 'Dodecahedron Gem',
			price: 2,
			description: 'Dodecahedron description here.',
			canPurchase: true,
			soldOut: false,
      specs: 'Dodecahedron Gem - weight: 25grams, color: smoke black',
      reviews: 'mystical and elegant',
      images: [
				{
					full: 'dodecahedron.jpg'
				}
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Pentagonal Gem here.',
			canPurchase: true,
			soldOut: false,
      specs: 'Pentagonal Gem - weight: 18grams, color: clear',
      reviews: 'absolutely precious',
      images: [
				{
					full: 'Pentagonal_Gem.jpg'
				}
			]
		}
	];
})();
