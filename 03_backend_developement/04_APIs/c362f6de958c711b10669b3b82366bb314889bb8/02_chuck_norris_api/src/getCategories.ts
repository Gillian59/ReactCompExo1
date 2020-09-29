import * as request from "request"



function getCategories() : void {
  // code the function here
  request.get('https://api.chucknorris.io/jokes/categories', (error, response) => {
    if (error){
      console.log(error);
    } else {
      const listCategories = response.body.json;
        for (let i=0; i<listCategories.length; i++){
  console.log(listCategories[i]);}

    }
  })
}

// leave line below for tests to work properly 
export { getCategories }


