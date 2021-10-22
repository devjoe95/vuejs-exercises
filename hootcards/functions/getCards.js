const { getCollection } = require("./utils/astraClient");
const { packBuilder } = require("./utils/packBuilder");

exports.handler = async function () {
	const collection = await getCollection();

	try {
		const result = await collection.find({});

		let pack = packBuilder(
			Object.keys(result.data).map((key) => result.data[key])
		);
		return {
			statusCode: 200,
			body: JSON.stringify(pack),
			headers: {
				"Content-type": "application/json",
			},
		};
	} catch (error) {
		console.error(error);
		return {
			statusCode: 500,
			body: JSON.stringify(error),
		};
	}
};
