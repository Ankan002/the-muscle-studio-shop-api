// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
export default {
	preset: "ts-jest",
	testEnvironment: "node",
	transform: {
		"^.+\\.ts?$": "ts-jest",
	},
	transformIgnorePatterns: ["<rootDir>/node_modules/"],
};
