//
//  Copyright 2017 Matthew M. Copeland
//
//  Licensed for usage under the GNU Affero General Public License 3.0 or higher.
//
//


function downloadBooks(delayInSeconds) {
	products = document.getElementsByClassName("product-info");

	for (var i = 0, len = products.length; i < len; i++) {
		products[i].click();
	}

	downloads = document.getElementsByClassName("download")

	for(var i = 0, len = downloads.length; i < len; i++)  {	
		download = downloads[i];
		
		x = function(book) {
			return function() {
				book.click();
			}
		}

		setTimeout(x(download), i * delayInSeconds * 1000)
	}
} 
