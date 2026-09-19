const imageFiles = import.meta.glob("./assets/images/*", {
	eager: true,
	query: "?url",
	import: "default"
});

const stateImageKeywords = {
	"andhra pradesh": "araku valley andhra pradesh",
	"arunachal pradesh": "arunachal pradesh",
	assam: "assam tourism",
	bihar: "bihar",
	chhattisgarh: "chhattisgarh",
	chandigarh: "chandigarh",
	"dadra and nagar haveli and daman and diu": "daman and diu",
	"dadra and nagar haveli": "dradra and nagar haveli",
	delhi: "explore delhi",
	"andaman and nicobar islands": "andaman nicobar",
	goa: "goa",
	gujarat: "gujarat",
	haryana: "haryana",
	"himachal pradesh": "himachal pradesh",
	"jammu and kashmir": "jammu kashmir",
	jharkhand: "jharkhand",
	karnataka: "karnataka",
	kerala: "kerala",
	lakshadweep: "lakshadweep",
	ladakh: "ladakh",
	"madhya pradesh": "madhya pradesh",
	maharashtra: "maharastra",
	manipur: "manipur",
	meghalaya: "meghalaya",
	mizoram: "mizoram",
	nagaland: "nagaland",
	odisha: "jagannath temple odisha",
	punjab: "punjab",
	rajasthan: "rajasthan",
	sikkim: "sikkim",
	"tamil nadu": "tamil nadu",
	telangana: "hyderabad",
	tripura: "tripura",
	"uttar pradesh": "varanasi uttar pradesh",
	uttarakhand: "uttrakhand",
	puducherry: "pondicherry",
	"west bengal": "west bengal"
};

const normalize = (value) => value.toLowerCase().replace(/[^a-z0-9]/g, "");

export function getStateImage(stateName) {
	const keyword = stateImageKeywords[stateName?.toLowerCase()] || stateName || "india";
	const normalizedKeyword = normalize(keyword);
	const matchingEntry = Object.entries(imageFiles).find(([filePath]) =>
		normalize(filePath).includes(normalizedKeyword)
	);

	return matchingEntry?.[1] || Object.values(imageFiles)[0];
}
