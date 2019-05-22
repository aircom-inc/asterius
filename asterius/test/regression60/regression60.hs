{-# OPTIONS_GHC -fforce-recomp #-}

module Main where
import Data.Char


foreign import ccall unsafe "u_gencat"
  wgencat :: Int -> Int

foreign import ccall unsafe "print_i64" print_i64 :: Int -> IO ()

main :: IO ()
main = do
   let x = wgencat 50 -- generalCategory '2'
   print_i64 x

