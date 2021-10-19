export const miscDessertRows =
  [{
    miscPastryType: 'Cupcakes',
    price: '$2.50/ea'
  }, {
    miscPastryType: 'Macarons',
    price: '$2.50/ea'
  }, {
    miscPastryType: 'Cookies',
    price: '$2.00/ea'
  }, {
    miscPastryType: 'Breakable Hearts',
    price: '$35.00/ea'
  }, {
    miscPastryType: 'Pies',
    price: '$30.00/ea'
  }, {
    miscPastryType: 'Hot Cocoa Bombs',
    price: '$6.00/ea or 4 for $20.00'
  }]

export const miscDessertColumns =
  [{
    name: 'miscPastryType',
    label: 'Pastry Type',
    align: 'start',
    sortable: false,
    field: miscDessertRow => miscDessertRow.miscPastryType,
    format: val => `${val}`
  }, {
    name: 'miscDessertPrice',
    label: 'Price',
    sortable: false,
    field: miscDessertRow => miscDessertRow.price,
    format: val => `${val}`
  }]
