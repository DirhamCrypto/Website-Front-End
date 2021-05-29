export const formatBalance = function (number = null, decimal = 9) {
    if (!number) return 0;
    if (number < 0.00000001) return 0;

    let strNumber = number.toString();
    const indexDot = strNumber.indexOf(".");
    let totalDecimals = strNumber.length - indexDot;

    if (indexDot === -1 || totalDecimals <= decimal) return parseFloat(strNumber);
    return parseFloat(strNumber
        .substring(0, indexDot)
        .concat(strNumber.substring(indexDot, indexDot + decimal)));
}