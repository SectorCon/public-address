
function resolveHost() {
	let name = window.location.hostname;
	let port = window.location.port;
	let prot = window.location.protocol;

	let result = prot + '//' + name
	if (port != '') {
		result = result + ':' + port
	}
	return result;
}

function resolveParameter(name) {
	let queryString = window.location.search;
	let urlParams = new URLSearchParams(queryString)
	return urlParams.get(name)
}

function copyToClipboard(element) {
	var $temp = $("<input>");
	$("body").append($temp);
	$temp.val(element).select();
	document.execCommand("copy");
	$temp.remove();
}
/*
* yyyy-MM-dd hh:mm:ss
*/
function formatDateAndTime(utc) {
	let offset = utc.getTimezoneOffset();
	var local = new Date(utc.getTime() - offset * 60000);
	let iso = local.toISOString().split('T');
	return [iso[0], iso[1].split('.')[0]]
}

function formatDateTimeReadable(date) {
	return formatDateAndTime(date)[0] + ' ' + formatDateAndTime(date)[1]
}

