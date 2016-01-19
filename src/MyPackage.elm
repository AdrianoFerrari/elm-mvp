module MyPackage (callAlert) where

import String
import Native.MyPackage

callAlert : String -> String
callAlert msg =
  Native.MyPackage.callAlert
