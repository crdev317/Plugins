/*! © SpryMedia Ltd - datatables.net/license */

(function( factory ){
	if ( typeof define === 'function' && define.amd ) {
		// AMD
		define( ['jquery', 'datatables.net'], function ( $ ) {
			return factory( $, window, document );
		} );
	}
	else if ( typeof exports === 'object' ) {
		// CommonJS
		module.exports = function (root, $) {
			if ( ! root ) {
				// CommonJS environments without a window global must pass a
				// root. This will give an error otherwise
				root = window;
			}

			if ( ! $ ) {
				$ = typeof window !== 'undefined' ? // jQuery's factory checks for a global window
					require('jquery') :
					require('jquery')( root );
			}

			if ( ! $.fn.dataTable ) {
				require('datatables.net')(root, $);
			}

			return factory( $, root, root.document );
		};
	}
	else {
		// Browser
		factory( jQuery, window, document );
	}
}(function( $, window, document, undefined ) {
'use strict';
var DataTable = $.fn.dataTable;


/**
 * Although DataTables' internal numeric sorting works no problem on negative
 * numbers, it does not accept positively signed numbers. This plug-in will
 * sort just such data numerically.
 *
 *  @name Fully signed numbers sorting
 *  @summary Sort data numerically with a leading `+` symbol (as well as `-`).
 *  @author [Allan Jardine](http://sprymedia.co.uk)
 *
 *  @example
 *    $('#example').dataTable( {
 *       columnDefs: [
 *         { type: 'signed-num', targets: 0 }
 *       ]
 *    } );
 */
DataTable.ext.order['signed-num-pre'] = function (a) {
    return a == '-' || a === '' ? 0 : a.replace('+', '') * 1;
};


return DataTable;
}));
