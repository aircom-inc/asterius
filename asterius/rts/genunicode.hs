#! stack runghc
import Data.List
import Data.Char

-- | Generate ASCII implementations of u_iswcntrl, u_iswprint by checking
-- | against GHC behaviour.


bool2int :: Bool -> Int
bool2int False = 0
bool2int True = 1

iswcntrlArr :: [Int]
iswcntrlArr = map (bool2int . isControl . chr) [0..255]


iswprintArr :: [Int]
iswprintArr = map (bool2int . isControl . chr) [0..255]


intarrS :: [Int] -> String
intarrS as = "[" <> intercalate "," (map show as) <> "]"


mk_u_iswcntrl :: String
mk_u_iswcntrl = "u_iswcntrl(c) {\n\tvar lookup = " <> intarrS iswcntrlArr <> ";\n\treturn lookup[c];\n}"


mk_u_iswprint :: String
mk_u_iswprint = "u_iswprint(c) {\n\tvar lookup = " <> intarrS iswprintArr <> ";\n\treturn lookup[c];\n}"


main :: IO ()
main = do
   putStrLn mk_u_iswcntrl
   putStrLn mk_u_iswprint
