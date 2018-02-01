# packtpub-download
JavaScript code for simplifying the download of purchased books from packtpub for local usage.

## Usage

Login to your packtpub account in your browser and click on the My eBooks link.  Once your list of books has fully loaded, Open the developer tools for your browser and copy/paste the code in download.js into the console.  Once that is complete, you can call the function at the developer tools console as follows:

    downloadBooks(10)

The function accepts an argument for the number of seconds you would like to delay between each file download.  This allows you to not destroy your browser/internet connection with to many downloads at once.  Also, we don't want to adversly impact the Packt servers.  Please be respectful of Packt with the number of seconds you enter.  They provide a great service and set of materials.

## License

This project is licensed under the GNU Affero General Public License Version 3 or higher.