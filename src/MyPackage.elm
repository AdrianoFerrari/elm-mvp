module MyPackage (toYelling) where

import Native.MyPackage

toYelling : String -> String
toYelling msg =
  Native.MyPackage.yell msg
