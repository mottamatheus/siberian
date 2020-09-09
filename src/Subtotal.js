import React from 'react';
import CurrencyFormat from 'react-currency-format';
import './Subtotal.css';

import { useStateValue } from './StateProvider';

function Subtotal() {
	const [ { basket }, dispatch ] = useStateValue();
	return (
		<div className="subtotal">
			<CurrencyFormat
				renderText={(basket) => (
					<div>
						<p>
							Subtotal ({basket.length} items):
							<strong>{basket.length}</strong>
						</p>
						<small className="subtotal__gift">
							<input type="checkbox" /> This order contains a gift
						</small>
					</div>
				)}
				decimalScale={2}
				value={0}
				displayType={'text'}
				thousandSeparator={true}
				prefix={'$'}
			/>
			<button>Proceed to Checkout</button>
		</div>
	);
}

export default Subtotal;
