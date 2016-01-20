Elm.Native.MyPackage = Elm.Native.MyPackage || {};
Elm.Native.MyPackage.make = function(localRuntime) {
  localRuntime.Native = localRuntime.Native || {};
  localRuntime.Native.MyPackage = localRuntime.Native.MyPackage || {};

  if (localRuntime.Native.MyPackage.values)
  {
    return localRuntime.Native.MyPackage.values;
  }

  // Imports

	function yellJS(string)
	{
    console.log("From JavaScript: A side effect.");
    return string.toUpperCase() + "!!";
  }

	return localRuntime.Native.MyPackage.values = {
		yell: yellJS
	};
}
