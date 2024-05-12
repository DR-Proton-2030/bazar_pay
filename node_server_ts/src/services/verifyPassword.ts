import bcrypt from "bcryptjs";


export const verifyPassword = async (plainTextPassword: string, hashedPassword: string): Promise<boolean> => {
	try {
		// Verify the password against the hashed password
		const isMatch: boolean = await bcrypt.compare(plainTextPassword, hashedPassword);
		return isMatch;
	} catch (error) {
		console.error("Error verifying password:", error);
		return false;
	}
}
