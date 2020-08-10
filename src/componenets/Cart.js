import React from 'react';
import Total from './Total';
import CartItems from './CartItems';
function Cart(props) {
  return (
    <>
      <section className='main__summary'>
        <h2>Your cart</h2>
        <CartItems
          selected={props.selected}
          currencyFormat={props.currencyFormat}
        />
        <Total
          selected={props.selected}
          currencyFormat={props.currencyFormat}
        />
      </section>
    </>
  );
}
export default Cart;
