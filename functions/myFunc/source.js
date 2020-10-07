exports = function(changeEvent) {
  /*
    A Database Trigger will always call a function with a changeEvent.
    Documentation on ChangeEvents: https://docs.mongodb.com/manual/reference/change-events/

    Access the _id of the changed document:
    const docId = changeEvent.documentKey._id;

    Access the latest version of the changed document
    (with Full Document enabled for Insert, Update, and Replace operations):
    const fullDocument = changeEvent.fullDocument;

    const updateDescription = changeEvent.updateDescription;

    See which fields were changed (if any):
    if (updateDescription) {
      const updatedFields = updateDescription.updatedFields; // A document containing updated fields
    }
    */
    
    const updateDescription = changeEvent.updateDescription;
    if (updateDescription) {
      const updatedFields = updateDescription.updatedFields; // A document containing updated fields
    }
    const x = changeEvent.updateDescription
    var myJSON = JSON.stringify(x);
    console.log(myJSON)
    console.log("hello world")
};
