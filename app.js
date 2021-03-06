var obj = {
  'placements': [
    {
      'id': '029148',
      'name': 'Woodblock Play Suit',
      'linkURL': 'http://www.warehouse.co.uk/gb/just-arrived/all/woodblock-play-suit/029148.html',
      'imageURL': 'http://demandware.edgesuite.net/aaxe_prd/on/demandware.static/-/Sites-WAREHOUSE/default/dw0f93fcd4/images/hi-res/warehouse_02914899_2.jpg',
      'price': '46.00'
    },
    {
      'id': '0294526806',
      'name': 'Smock Dress',
      'linkURL': 'http://www.warehouse.co.uk/gb/just-arrived/all/smock-dress/0294526806.html',
      'imageURL': 'http://demandware.edgesuite.net/aaxe_prd/on/demandware.static/-/Sites-WAREHOUSE/default/dwc9d5ea05/images/hi-res/warehouse_02945268_5.jpg',
      'price': '39.00'
    },
    {
      'id': '0297180006',
      'name': 'Cami',
      'linkURL': 'http://www.warehouse.co.uk/gb/just-arrived/all/cami/0297180006.html',
      'imageURL': 'http://demandware.edgesuite.net/aaxe_prd/on/demandware.static/-/Sites-WAREHOUSE/default/dw4b954022/images/hi-res/warehouse_02971800_2.jpg',
      'price': '9.00'
    },
    {
      'id': '0298473606',
      'name': 'Asymmetric Wrap Cami Dress',
      'linkURL': 'http://www.warehouse.co.uk/gb/just-arrived/all/asymmetric-wrap-cami-dress/0298473606.html',
      'imageURL': 'http://demandware.edgesuite.net/aaxe_prd/on/demandware.static/-/Sites-WAREHOUSE/default/dw686fea84/images/hi-res/warehouse_02984736_2.jpg',
      'price': '46.00'
    },
    {
      'id': '0297155306',
      'name': 'Casual Stripe Tee',
      'linkURL': 'http://www.warehouse.co.uk/gb/just-arrived/all/casual-stripe-tee/0297155306.html',
      'imageURL': 'http://demandware.edgesuite.net/aaxe_prd/on/demandware.static/-/Sites-WAREHOUSE/default/dw4609af3e/images/hi-res/warehouse_02971553_2.jpg',
      'price': '16.00'
    },
    {
      'id': '0298473606',
      'name': 'Asymmetric Wrap Cami Dress',
      'linkURL': 'http://www.warehouse.co.uk/gb/just-arrived/all/asymmetric-wrap-cami-dress/0298473606.html',
      'imageURL': 'http://demandware.edgesuite.net/aaxe_prd/on/demandware.static/-/Sites-WAREHOUSE/default/dw686fea84/images/hi-res/warehouse_02984736_2.jpg',
      'price': '46.00'
    }
  ]
};

var row = document.getElementById('jsonData');

for(var i=0;i<obj.placements.length;i++) {
  var element             = document.createElement('div');
  element.className       = 'col-xs-12 col-sm-6 col-md-4';
  element.innerHTML       =
  '<img src="'            + obj.placements[i].imageURL + '">' +
  '<span class="name">'   + obj.placements[i].name + '</span><br>' +
  '<span class="price">'  + obj.placements[i].price + '</span>'
  ;

  row.appendChild(element);
}
