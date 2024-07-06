import '@/assets/styles/globals.css';
import AuthProvider from '@/components/AuthProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
	title: 'Property Pulse | Find the perfect property for you',
	description: 'Find a your dream property with Property Pulse',
};

const MainLayout = ({ children }) => {
	return (
		<AuthProvider>
			<html lang="en">
				<body>
					<Navbar />
					<main>{children}</main>
					<Footer />
				</body>
			</html>
		</AuthProvider>
	);
};

export default MainLayout;
