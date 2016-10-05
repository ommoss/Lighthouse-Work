var args = process.argv;
function obfuscate(input){
  input = input.replace(/a/g, "4");
  input = input.replace(/e/g, "3");
  input = input.replace(/o/g, "0");
  input = input.replace(/l/g, "1");
  return(input);
}
obfuscated("abracadabra");
obfuscated("password");
obfuscated("audaciously");
obfuscated("");
