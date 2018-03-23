// Function 

function listObjectProperties(inputObject) {

    function listProperties(inputObject, indent) {
        indent += "   ";

        for (let propertyName in inputObject) {
            let property = inputObject[propertyName];

            if (typeof (property) === "object") {
                console.log(indent + propertyName + ":");
                listProperties(property, indent);
            } else {
                console.log(indent + propertyName + " : " + property);
            }
        }
    }

    console.log(typeof (inputObject));
    listProperties(inputObject, "");
}
