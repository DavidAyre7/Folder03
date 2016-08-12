//Javascript sections for Moltin : Converting Cart to Order and Payment

// Convert cart to order
var order = moltin.Cart.Complete({
  gateway: 'dummy',
  customer: {
    first_name: 'David',
    last_name:  'Ayre',
    email:      'david.ayre7@gmail.com'
  },
  bill_to: {
    first_name: 'David',
    last_name:  'Ayre',
    address_1:  '252 Nile Street',
    address_2:  'Maitai',
    city:       'Nelson',
    county:     'Nelson',
    country:    'NZ',
    postcode:   '7010',
    phone:      '006435456169'
  },
  ship_to: 'bill_to',
  shipping: 'free-shipping'
});

// Clear cart
moltin.Cart.Delete();

// Process payment
var checkout = moltin.Checkout.Payment('purchase', order.id, {
  data: {
    number:       '4242424242424242',
    expiry_month: '02',
    expiry_year:  '2017',
    cvv:          '123'
  }
});
