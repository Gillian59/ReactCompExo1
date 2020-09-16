function getConfig(config) {
  const defaultConfig = {
    user: {
      name: "root",
      password: "admin",
    },
    hardware: {
      CPUThreads: 4,
      memory: 2,
      diskSpace: 20,
    },
  };


  
  const resultat =  {
    ...defaultConfig,
    ...config

  };
  console.log(resultat);
  return  /** Complete here */;
}

getConfig({
  user: {
    name: "Sylvie",
  }
})

/*const amnesicJohn = {
  firstName: "John",
  lastName: "Doe",
};

const johnWithMemoryBack = {
  ...amnesicJohn,
  lastName: "Rambo",
};

console.log(johnWithMemoryBack); // { firstName: "John", 👉 lastName: "Rambo" }
*/

function logInfos(user) {
  const redactedUser = {
    firstName: "<REDACTED>",
    lastName: "<REDACTED>",
    address: {
      city: "<REDACTED>",
      country: "<REDACTED>",
    },
  };

  let {
    firstName,
    lastName,
    address: { city, country },
  } = user; // Change here

  console.log(`${firstName} ${lastName} lives in ${city}, ${country}.`);
}

module.exports = {
  getConfig 
  logInfos ({
    
    firstName: "John",
    lastName: "Rambo",
    address: {
      city: "Hope",
      country: "Canada"
    
  }
})
  ,
};
//"John Rambo lives in Hope, Canada."
