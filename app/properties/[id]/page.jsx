import Link from 'next/link';
import { fetchProperty } from '@/app/utils/utils';
import PropertyHeaderImage from '@/components/PropertyHeaderImage';
import PropertyDetails from '@/components/PropertyDetails';
import PropertySidebar from '@/components/PropertySidebar';

const PropertyPage = async ({ params }) => {
	const { id } = params;
	let property = null;

	try {
		property = await fetchProperty(id);
	} catch (error) {
		console.error('Error fetching property:', error);
	}

	if (!property) {
		return (
			<h1 className="text-center text-2xl font-bold mt-10">
				Property Not Found
			</h1>
		);
	}

	return (
		<>
			<PropertyHeaderImage image={property.images[0]} />
			<section>
				<div className="container m-auto py-6 px-6">
					<Link
						href="/properties"
						className="text-blue-500 hover:text-blue-600 flex items-center"
					>
						<i className="fas fa-arrow-left mr-2"></i> Back to
						Properties
					</Link>
				</div>
			</section>
			<section className="bg-blue-50">
				<div className="container m-auto py-10 px-6">
					<div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
						<PropertyDetails property={property} />
						<PropertySidebar />
					</div>
				</div>
			</section>
		</>
	);
};

export default PropertyPage;
