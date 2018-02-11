/**
 * Original Code from Mario Hendricks
 * https://wordpress.stackexchange.com/a/246045/17901
 *
 */

jQuery( document ).ready( function ( $ ) {
	// Check for exactly one category before publishing or updating
	$('#publish').click(checkForCategory);
} );

function checkForCategory()
{
	var categoryBlock = document.getElementById( 'categorychecklist' );
	if ( categoryBlock == null ) {
		return true;
	}
	var catList = categoryBlock.getElementsByClassName( 'selectit' );

	var error = false;
	var idx;
	var selectedCnt = 0;
	var uncategorized = false;

	// Iterate through all of the categories to count the checked ones
	for ( idx = 0; idx < catList.length; idx++ ) {
		inputElements = catList[idx].getElementsByTagName( 'input' );
		if ( ( inputElements.length > 0 ) && ( inputElements[0].checked ) ) {
			selectedCnt++;
			if ( catList[idx].innerHTML.indexOf( 'Uncategorized' ) > 0 ) {
				uncategorized = true;
			}
		}
	}

	if ( uncategorized ) {
		alert( "You must unselect the Uncategorized category before publishing." );
		error = true;
	}
	else if ( selectedCnt == 0 ) {
		alert( "You must select a category before publishing." );
		error = true;
	}
	else if ( selectedCnt > 1 ) {
		alert( "You may only select one category when publishing." );
		error = true;
	}

	return !error;
}