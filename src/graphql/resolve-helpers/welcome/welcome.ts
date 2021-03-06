import { Resolver } from "typings/graphql";

interface ArgsProps {
	payload: {
		name: string;
	};
}

// Context and Info can also be used as parameters
export const welcome: Resolver<ArgsProps> = async (parent, args, context) => {
	const { payload } = args;

	console.log(context);

	return {
		success: true,
		data: undefined,
		message: `${payload.name}, Welcome to the Shop API GraphQL section`,
	};
};
