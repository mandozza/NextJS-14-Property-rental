import { FaBed, FaBath, FaRulerCombined } from 'react-icons/fa';

import { formatSquareFeet } from '@/app/utils/utils';

const PropertyDescription = ({ description, baths, beds, square_feet }) => {
	return (
		<div className="bg-white p-6 rounded-lg shadow-md mt-6">
			<h3 className="text-lg font-bold mb-6">Description & Details</h3>
			<div className="flex justify-center gap-4 text-blue-500 mb-4 text-xl space-x-9">
				<p>
					<FaBed className="inline-block mr-2" /> {beds}
					<span className="hidden sm:inline">Beds</span>
				</p>
				<p>
					<FaBath className="inline-block mr-2" /> {baths}
					<span className="hidden sm:inline">Baths</span>
				</p>
				<p>
					<FaRulerCombined className="inline-block mr-2" />
					{formatSquareFeet(square_feet)}{' '}
					<span className="hidden sm:inline">sqft</span>
				</p>
			</div>
			<p className="text-gray-500 mb-4 text-center">{description}</p>
		</div>
	);
};
export default PropertyDescription;
