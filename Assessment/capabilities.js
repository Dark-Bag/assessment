LT_USERNAME = process.env.LT_USERNAME || "mkwenkwesamkelo";
LT_ACCESS_KEY = process.env.LT_ACCESS_KEY || "pCZlhtjSO5bx4glEdGxLOI8MDNpGthgR2BC9TO4cqtBK5piCtT";

exports.capabilities = {
	"browserName": "Chrome",
	"browserVersion": "122.0",
	"LT:Options": {
		"username": "mkwenkwesamkelo",
		"accessKey": "pCZlhtjSO5bx4glEdGxLOI8MDNpGthgR2BC9TO4cqtBK5piCtT",
		"platformName": "Windows 10",
		"project": "Untitled",
		"w3c": true,
		"plugin": "node_js-mocha"
	}
};
