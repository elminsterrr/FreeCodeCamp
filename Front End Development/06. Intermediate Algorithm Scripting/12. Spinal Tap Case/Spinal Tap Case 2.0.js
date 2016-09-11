/*
Working example: http://repl.it/D3ji

Instructions: Convert a string to spinal case. 
Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {
/*
find every lower case letter that is immediately followed by an upper case and put a dash (-) between them
use the output from the previous replace and replace any group of spaces or underscores with a single dash
use the output from the previous replace, lowercase it, and return it as the result
*/
  return str.replace(/([a-z])([A-Z])/g, '$1-$2')
            .replace(/\s+|_+/g, '-')
            .toLowerCase();
}
spinalCase("This Is Spinal Tap");//should return "this-is-spinal-tap".
//spinalCase("thisIsSpinalTap");//should return "this-is-spinal-tap".
//spinalCase("The_Andy_Griffith_Show"); //should return "the-andy-griffith-show".
//spinalCase("Teletubbies say Eh-oh");//should return "teletubbies-say-eh-oh".
//spinalCase("AllThe-small Things"); //should return "all-the-small-things".