// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require('next/jest');

const createJestConfig = nextJest({
	dir: './'
});

const customJestConfig = {
	moduleDirectories: ['node_modules', '<rootDir>/'],
	testEnvironment: 'jest-environment-jsdom',
	testPathIgnorePatterns: ['/node_modules/', '/.next/'],
	collectCoverage: true,
	collectCoverageFrom: [
		'src/**/*.ts(x)?',
		'!src/**/stories.tsx',
		'!**/*.d.ts',
		'!**/node_modules/**'
	],
	setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
};

module.exports = createJestConfig(customJestConfig);
