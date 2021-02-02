// This function is the webhook's request handler.
exports = function(payload, response) {
// const ejson = {
//   "$binary": {
//     "base64": "W3siQWxlcnRUZXh0IjoibW9uZ29kYiByZWFsbSIsIkFsZXJ0UmVzdWx0cyI6W3siRGF0ZUZvdW5kIjoiMjAyMC0xMC0yOFQwOTowOTo0NC4yNzMiLCJSZXN1bHRDb250ZW50IjoiSUNZTUkgQG1hcmNvYm9uZXp6aSBpcyByZXN0YXJ0aW5nIGhpcyBibG9nIGFnYWluIHNpc3RlbWluZy5naXRodWIuaW8vSGVsbG8tV29ybGQtUGHigKYgUlNTIHNpc3RlbWluZy5naXRodWIuaW8vZmVlZC54bWwgaWYgeW91IHdhbnQgdG8ga2VlcCB0cmFjayBvZiBhbGwgdGhpbmdzICNNb25nb0RCIGFuZCAjUmVhbG0gYmUgc3VyZSB0byBhZGQgaXQgdG8geW91ciBmZWVkIHJlYWRlciBvciBqdXN0IGdvIGZvbGxvdyBoaW0hIEhlJ3MgYWxzbyBoaXJpbmcgbW9uZ29kYi5jb20vY2FyZWVycy9qb2JzLzLigKYiLCJSZXN1bHRVcmwiOiJodHRwczovL3R3aXR0ZXIuY29tL2kvd2ViL3N0YXR1cy8xMzIxMzYzNDU4Mzg3MDI1OTIwIiwiUmVzdWx0VXNlcm5hbWUiOiJlb2luYnJhemlsIiwiQWxlcnRzQXJlQmVpbmdUaHJvdHRsZWQiOmZhbHNlfV19XQ==",
//     "subType": "00"
//     }
//   }
    
    console.log("Request body:", payload.body);
    console.log(" EJSON.parse(request.body.text());");
    ejsonobj =EJSON.parse(payload.body.text());
    console.log(payload.body.text());
    arr = [];
    ejsonobj.forEach((item) => {
      const alertText = item.AlertText;
      console.log(alertText);
      const res = item.AlertResults; 
      res.forEach((resItem) => {
        console.log(JSON.stringify(res));
        const resultContent = resItem.ResultContent;
        const resultUrl = resItem.ResultUrl;
        const resultDate = new Date(resItem.DateFound);
        const objToPush = {
          "alertDate": resultDate,
          "alertUrl": resultUrl,
          "alertText": resultContent,
          "alertSource": alertText,
        };
        console.log(JSON.stringify(objToPush));
        arr.push(objToPush);
      });
    });
    console.log(arr)
    const postsCollection = context.services.get("mongodb-atlas").db("realmfeed").collection("posts");
    
    return postsCollection.insertMany(arr)
      .then(result => {
          console.log(`Successfully inserted ${result.insertedIds.length} items!`);
      return result;
  })
  .catch(err => console.error(`Failed to insert documents: ${err}`));
};

    // for (var a = 0; a < ejsonobj.length; a++){
    //   itemAt = ejsonobj[a];
    //   console.log(JSON.stringify(itemAt))
    //   const alertText = itemAt.AlertText;
    //   console.log(alertText);
    //   const res = itemAt.AlertResults;
    //   for (var b = 0; b < res.length; b++){
    //     resItem = res[b];
    //     const resultContent = resItem.ResultContent;
    //     const resultUrl = resItem.ResultUrl;
    //     const resultDate = resItem.DateFound;
    //     const objToPush = {
    //       "alertDate": resultDate,
    //       "alertUrl": resultUrl,
    //       "alertText": resultContent,
    //       "alertSource": alertText,
    //     };
    //     console.log(JSON.stringify(objToPush));
    //     arr.push(objToPush);
    //   }
    // }