import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import MovieApi from './components/MovieApi/MovieApi';

function App() {
	return (
	  <>
	  <div className='content'>

		<Header />
		<MovieApi />
		<Footer />
	</div>
	  </>
	);
  }

export default App;
