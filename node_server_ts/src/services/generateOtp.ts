export const generateOTP = (): string => {
	// Generate a random 4-digit number and convert it to a string
	const otp = Math.floor(1000 + Math.random() * 9000).toString();
	return otp;
};
