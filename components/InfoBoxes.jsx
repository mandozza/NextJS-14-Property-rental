import InfoBox from './InfoBox';

const InfoBoxes = () => {
	return (
		<section>
			<div className="container-xl lg:container m-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
					<InfoBox
						backgroundColor="bg-gray-100"
						title="For Renters"
						description="Find your dream rental property. Bookmark properties
							and contact owners."
						path="/properties"
						buttonClasses="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
						buttonText="Browse Properties"
					/>
					<InfoBox
						backgroundColor="bg-blue-100"
						title="For Property Owners"
						description="List your properties and reach potential tenants.
							Rent as an airbnb or long term."
						path="/properties/add"
						buttonClasses="inline-block bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600"
						buttonText="Add Property"
					/>
				</div>
			</div>
		</section>
	);
};
export default InfoBoxes;
