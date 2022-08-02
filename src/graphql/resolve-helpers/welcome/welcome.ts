import { Resolver } from "typings/graphql";
import { logger } from "utils/logger";

interface ArgsProps {
	payload: {
		name: string;
	};
}

// Context and Info can also be used as parameters
export const welcome: Resolver<ArgsProps> = async (parent, args, context) => {
	const { payload } = args;

	logger.debug(context);

	return {
		success: true,
		data: undefined,
		message: `${payload.name}, Welcome to the Shop API GraphQL section`,
	};
};
