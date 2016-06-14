

/*jslint		browsers : true, 	continue : true,
newcap : true, 	indent : 2, 		maxerr : 50, 
regexp : true, 	nomen : true, 		plusplus : true,
rwhite : true
*/

/*global $, spa */

spa.util = (function () {
	var makeError, setConfigMap;

	// Begin Public constructor /makeError/
	// Purpose: a convenience wrapper to create an error object
	// Arguments:
	//  * name_text - the error name
	//  * mmsg_text - long error message
	//  * data 		- optional data attached to error object
	// Returns : newly constructed error object
	// Throws : none
	//
	makeError = function ( name_text, msg_text, data ) {
		var error 	= new Error();
		error.name 	= name_text;
		error.message = msg_text;

		if ( data ) { error.data = data; }

		return error;
	};
	// End Public constructor /makeError/

	//Begin Pubic method /setConfigMap/
	//Purpose: Common code to set configs in feature modules
	// Arguments: 
	// 	 * input_map 	- map of key-values to set in config
	// 	 * settable_map - map of allowable keys to set
	// 	 * config_map 	- map to apply setting to
	// Returns: true 
	// Throws : exception if input key not allowed
	//
	setConfigMap = function ( arg_map ){
		var
			input_map 	= arg_map.input_map,
			settable_map = arg_map.settable_map,
			config_map 		= arg_map.config_map,
			key_name, error;
		for ( key_name in input_map ){
			if ( input_map.hasOwnProperty( key_name ) ){
				config_map[key_name] = input_map[key_name];
			}
			else { 
				error = makeError( 'Bad Input',
					'Setting config key | ' + key_name + '| is not supported'
					);
				throw error;
			}
		}
	}
	//End PUblic method /setConfigMap/

	return {
		makeError 	: makeError,
		setConfigMap : setConfigMap
	};
}());