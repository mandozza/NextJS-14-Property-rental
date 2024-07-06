import PropertyRates from './PropertyRates';
import PropertyDescription from './PropertyDescription';
import PropertyAmenities from './PropertyAmenities';

const PropertyDetails = ({ property }) => {
	const {
		name,
		type,
		rates,
		location,
		amenities,
		description,
		baths,
		beds,
		square_feet,
	} = property;
	return (
		<main>
			<PropertyRates
				name={name}
				type={type}
				rates={rates}
				location={location}
			/>
			<PropertyDescription
				description={description}
				baths={baths}
				beds={beds}
				square_feet={square_feet}
			/>
			<PropertyAmenities amenities={amenities} />

			<div className="bg-white p-6 rounded-lg shadow-md mt-6">
				<div id="map"></div>
			</div>
		</main>
	);
};
export default PropertyDetails;
