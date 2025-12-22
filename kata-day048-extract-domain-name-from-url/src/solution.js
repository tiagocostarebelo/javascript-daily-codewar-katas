/**
 * Problem statement:
 *
 * Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
 * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
 * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
 * url = "https://www.cnet.com"                -> domain name = cnet"
 *
 * @param { url } string - The url provided 
 * @returns { string } Returns the domain of the url
 *
 * @example
 * domainName("http://google.com"); // Returns: "google"
 */

export function domainName(url) {
    const withoutProtocol = url.replace(/^[a-z]+:\/\//i, "");
    const host = withoutProtocol.split(/[/?#]/)[0];
    const cleanHost = host.replace(/^www\./i, "");
    return cleanHost.split(".")[0]
}