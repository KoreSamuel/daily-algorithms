/**
 * Write a function that when given a URL as a string, parses out just the domain name and returns it as a string.
 * For example:
 *
 * domainName("http://github.com/carbonfive/raygun") == "github"
 * domainName("http://www.zombie-bites.com") == "zombie-bites"
 * domainName("https://www.cnet.com") == "cnet"
 *
 */

// my solution
function domainName(url){
  const str = url.split('//');
  const hostArr = str.length > 1 ? str[1].split('.') : str[0].split('.')
  return hostArr[0] === 'www' ? hostArr[1] : hostArr[0]
}

// best practice
function domainName(url){
  return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
}