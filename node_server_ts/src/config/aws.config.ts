import AWS from 'aws-sdk';
AWS.config.update({
	accessKeyId: "AKIAWW2CZET5JKL6RMKC",
	secretAccessKey: "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",
	region: "ap-south-1",
});

// Create an S3 instance
export const s3 = new AWS.S3();

export const mediaConverter = new AWS.MediaConvert();

export const bucketName = "bazarpay";