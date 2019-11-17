const sendInfo = (input, url) => {
  return new Promise((res, rej)=>{
    fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(input)
    }).then(data=>{return res(data.json())}).catch(err=> rej(err));
  })
};

export default sendInfo;