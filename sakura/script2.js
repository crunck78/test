/**
 * Document.evaluate() Docs
 * https://www.freeformatter.com/xpath-tester.html - to test xpath
 * https://extendsclass.com/xpath-tester.html - to test xpath
 * 
 * *@param {string} xpathExpression is a string representing the XPath to be evaluated.
 * *@param {contextNode} contextNode specifies the context node for the query (see the XPath https://www.w3.org/TR/xpath/ specification). 
 * It's common to pass document as the context node.
 * *@param {function | null} namespaceResolver is a function that will be passed any namespace prefixes 
 * and should return a string representing the namespace URI associated with that prefix. 
 * It will be used to resolve prefixes within the XPath itself, so that they can be matched with the document.
 *  null is common for HTML documents or when no namespace prefixes are used.
 * *@param {number} resultType is an integer that corresponds to the type of result XPathResult to return.
 *  Use named constant properties, such as XPathResult.ANY_TYPE, of the XPathResult constructor, which correspond to integers from 0 to 9.
 * *@param {XPathResult | null } result is an existing XPathResult to use for the results. null is the most common and will create a new XPathResult
 */

/**
 * Display none any HyperLink Element that contains as text the @param text
 * @param {string} text 
 */
function removeLink(text) {
    let xpath = "//a[contains(text(), '" + text + "')]"; 
    let xpathResult = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
    let matchingElement = xpathResult.singleNodeValue;
    console.log(xpath, matchingElement);
    matchingElement.style.display = 'none'; //here the dev did not care if matchingElement is defined or not
}

window.onload = function () {
    removeLink('Test');
};