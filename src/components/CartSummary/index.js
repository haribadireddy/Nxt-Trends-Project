// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(eachItem => {
        total += eachItem.price * eachItem.quantity
      })

      return (
        <>
          <div className="summary-container">
            <h1 className="total-value">
              <span className="total">Order Total: </span> Rs {total} /-
            </h1>
            <p className="total-items">{cartList.length} Items in cart</p>
            <button className="cart-button" type="button">
              CheckOut
            </button>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
