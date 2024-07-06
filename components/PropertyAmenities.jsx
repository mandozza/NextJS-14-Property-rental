import { FaCheck } from 'react-icons/fa';

const PropertyAmenities = ({ amenities }) => {
	return (
		<div className="bg-white p-6 rounded-lg shadow-md mt-6">
			<h3 className="text-lg font-bold mb-6">Amenities</h3>
			<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-none">
				{amenities.length > 0 ? (
					amenities.map((amenity, index) => (
						<li key={index} className="y-2">
							<FaCheck className="inline-block text-green-600 mr-2 mt-3" />
							{amenity}
						</li>
					))
				) : (
					<li>No amenities available</li>
				)}
			</ul>
		</div>
	);
};
export default PropertyAmenities;
