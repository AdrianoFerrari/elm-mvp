Elm.Native.MyPackage = {};
Elm.Native.MyPackage.make = function(localRuntime) {

	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.MyPackage = localRuntime.Native.MyPackage || {};
	if (localRuntime.Native.MyPackage.values)
	{
		return localRuntime.Native.MyPackage.values;
	}

	function callAlert(string)
	{
    console.log("from callAlert", string);
		return "DONE";
  }

	return localRuntime.Native.MyPackage.values = {
		callAlert: callAlert
	};
};
