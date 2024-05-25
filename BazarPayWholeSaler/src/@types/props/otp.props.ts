export interface IOtpProps{
    phone_number: string;
    verifyOtp: () => void;
    originalOtp: string;
    handleBack: () => void;
    setOtp: React.Dispatch<React.SetStateAction<string>>
}