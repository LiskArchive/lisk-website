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

function getLISKBTC(cb) {
	bter.getTicker({CURR_A: 'xcr', CURR_B: 'btc'}, function (err, result) {
		if (err || !result) {
			cb(err || "Can't get avg");
		} else {
			cb(err, result.avg);
		}
	});
}

function convertLISKTOUSD(lisk, btc, usd) {
	return (lisk * btc * usd);
}

function getPrice(cb) {
	getBTCUSD(function (err, btcusd) {
		if (err || !btcusd) {
			return cb(err || "Can't get price of btc/usd");
		}

		getLISKBTC(function (err, btclisk) {
			if (err || !btclisk) {
				return cb(err || "Can't get price of btc/lisk");
			}

			cb(null, convertLISKTOUSD(1, btclisk, btcusd));
		});
	});
}

module.exports = {
	getBTCUSD: getBTCUSD,
	getLISKBTC: getLISKBTC,
	convertLISKTOUSD: convertLISKTOUSD,
	getPrice: getPrice
}
