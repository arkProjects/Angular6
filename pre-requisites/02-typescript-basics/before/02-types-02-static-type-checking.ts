/*
 * TypeScript is strongly typed and does static type-checking once assigned a type.
 * Even if a type is not explicitly set, it is inferred.
 * 
 * Because of this, a variable cannot be assigned a value of another type
 * Even the runtime value assigned cannot be of different type
 */

(function() {
    // the type of this variable is automatically inferred to be number. Hence it cannot be re-assigned to a string (for example)
    // Step 1.1 Declare priceOfGooglePixel and assign a number. DO NOT include type declaration. 
    let priceOfGooglePixel = 49500;


    // cannot assign a string
    // Step 1.2 Try assigning the price to a string and check if it is allowed


    function getPriceOfGooglePixel() {
        return 'Rupees Fifty Thousand';
    }

    // string assigned only at runtime - yet static type-checking helps catch this
    // Step 1.3 TypeScript's type-inference logic is very robust. Try assigning priceOfGooglePixel to the return value of getPriceOfGooglePixel() - you will not be able to do so.

    priceOfGooglePixel = getPriceOfGooglePixel();
}());