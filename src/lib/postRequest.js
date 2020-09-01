const postRequest = async (url, data) => {
  const res = await fetch(url, {
    method: "POST",
    headers: new Headers({
      "Content-type": "application/json",
    }),
    body: JSON.stringify(data), // body data type must match "Content-Type" header
    credentials: "include",
  })

  const resData = await res.json()
  return resData
}

export default postRequest
