import { FaMapMarker } from 'react-icons/fa';
import { formatCurrency } from '@/app/utils/utils';

const PropertyRates = ({ name, type, rates, location }) => {
	const { street, city, state, zipcode } = location;
	const { nightly, weekly, monthly } = rates;

	return (
		<div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
			<div className="text-gray-500 mb-4">{type}</div>
			<h1 className="text-3xl font-bold mb-4">{name}</h1>
			<div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
				<FaMapMarker className="text-lg text-orange-700 mr-2" />
				<i className="fa-solid fa-location-dot text-lg text-orange-700 mr-2"></i>
				<p className="text-orange-700">
					{street} {city}, {state} {zipcode}
				</p>
			</div>
			<h3 className="text-lg font-bold my-6 bg-gray-800 text-white p-2">
				Rates & Options
			</h3>
			<div className="flex flex-col md:flex-row justify-around">
				{nightly && (
					<div className="flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0">
						<div className="text-gray-500 mr-2 font-bold">
							Nightly
						</div>
						<div className="text-2xl font-bold text-blue-500">
							{formatCurrency(nightly)}
						</div>
					</div>
				)}
				{weekly && (
					<div className="flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0">
						<div className="text-gray-500 mr-2 font-bold">
							Weekly
						</div>
						<div className="text-2xl font-bold text-blue-500">
							{formatCurrency(weekly)}
						</div>
					</div>
				)}
				{monthly && (
					<div className="flex items-center justify-center mb-4 pb-4 md:pb-0">
						<div className="text-gray-500 mr-2 font-bold">
							Monthly
						</div>
						<div className="text-2xl font-bold text-blue-500">
							{formatCurrency(monthly)}
						</div>
					</div>
				)}
			</div>
		</div>
	);
};
export default PropertyRates;
