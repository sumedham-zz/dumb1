// notifyUserOfShare
exports = function(changeEvent){
      const d = changeEvent.updateDescription;
    if (d) {
      const updatedFields = d.updatedFields; // A document containing updated fields
    }
    // const x = changeEvent.d
    var myJSON = JSON.stringify(d);
    console.log(myJSON)
    console.log("hello world")
  
  // const { updateDescription, fullDocument } = changeEvent;
  // const updatedFields = Object.keys(updateDescription.updatedFields);
  

  // const sharedWithFieldWasUpdated = updatedFields.some(
  //   field => /sharedWith/.test(field)
  // );
  
  


  // if(sharedWithFieldWasUpdated) {
  //   const { sharedWith, author, title } = fullDocument;
  //   const sharedWithEmail = sharedWith[sharedWith.length - 1];
  //   if(!sharedWithEmail) { return }

  //   const aws = context.services.get("aws");
  //   var input = {
  //     Destination: {
  //       ToAddresses: [sharedWithEmail]
  //     }, 
  //     Message: {
  //       Body: {
  //         Html: {
  //           Charset: "UTF-8",
  //           Data: `This message is from ${author}`
  //         }
  //       },
  //       Subject: {
  //         Charset: "UTF-8",
  //         Data: "you got a new journal post: " + title
  //       }
  //     },
  //     Source: author
  //   };
  //   try{

  //     console.log(JSON.stringify(input));
  //     aws.ses().SendEmail(input).then(function (result){
  //       console.log(JSON.stringify(result));
  //     });
  //   } catch(error){
  //     console.log(JSON.stringify(error));
  //   }
  // }
  // console.log("done");
};