import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img
					className="home__image"
					src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
				/>
				<div className="home__row">
					<Product
						id="220021"
						title="Capitalism Realism by Mark Fisher"
						price={29.99}
						image={'https://media.s-bol.com/mAq1W4nB1JE/510x840.jpg'}
						rating={5}
					/>
					<Product
						id="1514785"
						title="Leninade Soviet Style Soda (12 OZ)"
						price={5.99}
						image={
							'https://images.freshop.com/00052428300071/344f4ea8bae46f5f15d675d9c3dcf0fa_large.png'
						}
						rating={4}
					/>
				</div>
				<div className="home__row">
					<Product
						id="123485"
						title="Russian Legacy Semyonovskaya 30 Piece Matryoshka"
						price={149.99}
						image={
							'https://russianlegacy.com/images/matryoshka_traditional/golden/GG00830.jpg'
						}
						rating={5}
					/>
					<Product
						id="1844785"
						title="UpCrafts Soviet Poster - Don't Talk! - (24x36, Unframed Poster Prints)"
						price={12.99}
						image={
							'https://images-na.ssl-images-amazon.com/images/I/A1lOMQrFc4L._AC_SY741_.jpg'
						}
						rating={4}
					/>
					<Product
						id="1514125"
						title="SIBERHAT Russian Soviet Army Fur Military Cossack Winter Ushanka Hat Black XL (62))"
						price={35.99}
						image={
							'https://images-na.ssl-images-amazon.com/images/I/61N0luNxKmL._AC_UL1000_.jpg'
						}
						rating={5}
					/>
				</div>
				<div className="home__row">
					<Product
						id="1514125"
						title="GeekPuzzle Kremlin Puzzle 2000 pcs"
						price={89.99}
						image={'https://assets.puzzlefactory.pl/puzzle/169/825/original.jpg'}
						rating={5}
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;