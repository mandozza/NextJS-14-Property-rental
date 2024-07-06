import profileDefault from '@/assets/images/profile.png';

/**
 * Returns the profile image URL if provided, otherwise returns the default profile image URL.
 *
 * @function
 * @param {string|null} image - The URL of the profile image. Can be null or undefined.
 * @returns {string} The URL of the provided profile image, or the default profile image URL if the provided one is null or undefined.
 * @example
 * // Returns 'profileDefault.png' if image is null
 * const profileImage = getProfileImage(null);
 *
 * // Returns 'userProfile.png' if image is 'userProfile.png'
 * const profileImage = getProfileImage('userProfile.png');
 */
export function getProfileImage(image) {
	return image ? image : profileDefault;
}
