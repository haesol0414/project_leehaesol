import { RecoilRoot } from 'recoil';
import { Outlet } from 'react-router-dom';
import Header from './components/common/Header/Header';
import Container from './components/common/Container/Container';
import Footer from './components/common/Footer/Footer';

function App() {
	return (
		<>
			<RecoilRoot>
				<Header />
				<Container>
					<Outlet />
				</Container>
				<Footer />
			</RecoilRoot>
		</>
	);
}

export default App;
