const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

export const randomizeProperties = (properties) => {
	return properties.sort(() => Math.random() - Math.random()).slice(0, 3);
};

//returns all properties
export async function fetchProperties() {
	try {
		// handle the case where the domain is not available yet.
		if (!apiDomain) {
			return [];
		}

		const res = await fetch(`${apiDomain}/properties`);
		if (!res.ok) {
			throw new Error('Failed to fetch data');
		}
		// Parse JSON response
		const data = await res.json();
		// Return just the properties array
		return data.properties;
	} catch (error) {
		console.log(error);
		return [];
	}
}

//returns a property
export async function fetchProperty(id) {
	try {
		// handle the case where the domain is not available yet.
		if (!apiDomain) {
			return null;
		}
		//Caching for 1hr.
		const res = await fetch(`${apiDomain}/properties/${id}`, {
			next: { revalidate: 3600 },
		});
		if (!res.ok) {
			throw new Error('Failed to fetch data');
		}
		// Parse JSON response
		const data = await res.json();
		// Return just the properties array
		return data.property;
	} catch (error) {
		console.log(error);
		return [];
	}
}

/**
 * Format currency.
 *
 * @param {number} value - The numeric value to format as currency.
 * @param {boolean} hasDec - Whether to display decimals (default: false).
 *                           If true, format will have two decimal places.
 * @returns {string} The formatted currency string.
 */
export function formatCurrency(value, hasDec = false) {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: hasDec ? 2 : 0,
		maximumFractionDigits: hasDec ? 2 : 0,
	}).format(value);
}

/**
 * Format square feet value with thousands separator.
 *
 * @param {number} value - The numeric value representing square feet.
 * @returns {string} The formatted square feet value with thousands separator.
 */
export function formatSquareFeet(value) {
	return new Intl.NumberFormat('en-US').format(value);
}
