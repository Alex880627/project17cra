const getData = (url) => {
  return new Promise((res, rej)=>{
    fetch(url, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
    }).then(data=>{return res(data.json())}).catch(err=> rej(err));
  })
};

export default getData;