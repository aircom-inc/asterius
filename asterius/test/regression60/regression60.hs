{-# OPTIONS_GHC -fforce-recomp #-}

module Main where
import Data.Char


foreign import ccall unsafe "u_gencat"
  wgencat :: Int -> Int

main :: IO ()
main = do
   print (generalCategory '2') -- expected: Number
   print (generalCategory 'a') -- expected: LowercaseLetter
   print (generalCategory 'A') -- expected: UppercaseLetter
   print (read "21" :: Int)


