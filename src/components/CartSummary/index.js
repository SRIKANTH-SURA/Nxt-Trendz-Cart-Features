import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const count = cartList.length
      let totalAmount = 0
      cartList.forEach(eachCartItem => {
        totalAmount += eachCartItem.price * eachCartItem.quantity
      })

      return (
        <div className="cart-summary">
          <div className="amount-container">
            <h1 className="order-total">
              Order Total:
              <span className="total-amount"> Rs {totalAmount}/-</span>
            </h1>
            <p className="total-items-count">{count} Items in cart</p>
          </div>
          <div className="checkout-btn-container">
            <button className="checkout-btn" type="button">
              Checkout
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
