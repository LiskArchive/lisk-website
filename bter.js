var bter = require('./bter-api');

function getBTCUSD(cb) {
	bter.getTicker({ CURR_A: 'btc', CURR_B: 'usd' }, function (err, result) {
		if (err || !result) {
			cb(err || "Can't get result");
		} else {
			cb(null, result.avg);
		}
	});
}

function getXCRBTC(cb) {
	bter.getTicker({CURR_A: 'xcr', CURR_B: 'btc'}, function (err, result) {
		if (err || !result) {
			cb(err || "Can't get avg");
		} else {
			cb(err, result.avg);
		}
	});
}

function convertXCRTOUSD(xcr, btc, usd) {
	return (xcr * btc * usd);
}

function getPrice(cb) {
	getBTCUSD(function (err, btcusd) {
		if (err || !btcusd) {
			return cb(err || "Can't get price of btc/usd");
		}

		getXCRBTC(function (err, btcxcr) {
			if (err || !btcxcr) {
				return cb(err || "Can't get price of btc/xcr");
			}

			cb(null, convertXCRTOUSD(1, btcxcr, btcusd));
		});
	});
}

module.exports = {
	getBTCUSD: getBTCUSD,
	getXCRBTC: getXCRBTC,
	convertXCRTOUSD: convertXCRTOUSD,
	getPrice: getPrice
}