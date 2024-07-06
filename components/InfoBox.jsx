import Link from 'next/link';

const InfoBox = ({
	backgroundColor,
	title,
	description,
	path,
	buttonClasses,
	buttonText,
}) => {
	return (
		<div className={`${backgroundColor} p-6 rounded-lg shadow-md`}>
			<h2 className="text-2xl font-bold">{title}</h2>
			<p className="mt-2 mb-4">{description}</p>
			<Link href={path} className={buttonClasses}>
				{buttonText}
			</Link>
		</div>
	);
};
export default InfoBox;
