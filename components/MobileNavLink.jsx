import Link from 'next/link';

const MobileNavLink = ({ href, pathname, children }) => {
	const isActive = pathname === href;

	return (
		<Link
			href={href}
			className={`${
				isActive ? 'bg-black' : 'hover:bg-gray-900 hover:text-white'
			} text-white rounded-md px-3 py-2 block text-base font-medium`}
		>
			{children}
		</Link>
	);
};

export default MobileNavLink;
