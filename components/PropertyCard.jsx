import Link from 'next/link';
import Image from 'next/image';
import {
	FaBed,
	FaBath,
	FaRulerCombined,
	FaMoneyBill,
	FaMapMarker,
} from 'react-icons/fa';

const PropertyCard = ({ property }) => {
	const {
		_id,
		name,
		type,
		beds,
		baths,
		square_feet,
		location: { city, state },
		rates: { nightly, weekly, monthly },
		images,
	} = property;

	const getRateDisplay = (nightly, weekly, monthly) => {
		if (monthly) {
			return `${monthly.toLocaleString()}/mo`;
		} else if (weekly) {
			return `${weekly.toLocaleString()}/wk`;
		} else if (nightly) {
			return `${nightly.toLocaleString()}/night`;
		}
	};

	return (
		<div key={property._id} className="rounded-xl shadow-md relative">
			<Image
				src={`/images/properties/${images[0]}`}
				alt={name}
				className="w-full h-auto rounded-t-xl"
				width="400"
				height="300"
			/>
			<div className="p-4">
				<div className="text-left md:text-center lg:text-left mb-6">
					<div className="text-gray-600">{type}</div>
					<h3 className="text-xl font-bold">{name}</h3>
				</div>
				<h3 className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right">
					${getRateDisplay(nightly, weekly, monthly)}
				</h3>

				<div className="flex justify-center gap-4 text-gray-500 mb-4">
					<p>
						<FaBed className="inline mr-2" />
						{beds}
						<span className="md:hidden lg:inline">Beds</span>
					</p>
					<p>
						<FaBath className="inline mr-2" /> {baths}
						<span className="md:hidden lg:inline">Baths</span>
					</p>
					<p>
						<FaRulerCombined className="inline mr-2" />
						{`${square_feet.toLocaleString()} `}
						<span className="md:hidden lg:inline">sqft</span>
					</p>
				</div>

				<div className="flex justify-center gap-4 text-green-900 text-sm mb-4">
					{nightly != null && (
						<p>
							<FaMoneyBill className="inline mr-2" /> Nightly
						</p>
					)}
					{weekly != null && (
						<p>
							<FaMoneyBill className="inline mr-2" /> Weekly
						</p>
					)}
					{monthly != null && (
						<p>
							<FaMoneyBill className="inline mr-2" /> Monthly
						</p>
					)}
				</div>

				<div className="border border-gray-100 mb-5"></div>

				<div className="flex flex-col lg:flex-row justify-between mb-4">
					<div className="flex align-middle gap-2 mb-4 lg:mb-0">
						<FaMapMarker className="inline mr-2 mt-1 text-orange-700" />
						<span className="text-orange-700">
							{city} {state}
						</span>
					</div>
					<Link
						href={`/properties/${_id}`}
						className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
					>
						Details
					</Link>
				</div>
			</div>
		</div>
	);
};
export default PropertyCard;
