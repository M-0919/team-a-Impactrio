export const dataFormatter = ({
  firstName,
  lastName,
  companyName,
  emailAddress,
  message,
}) => {
  const data = {
    properties: [
      {
        type: "SYSTEM",
        name: "first_name",
        value: firstName,
      },
      {
        type: "SYSTEM",
        name: "last_name",
        value: lastName,
      },
      // {
      //   type: "SYSTEM",
      //   name: "company",
      //   value: companyName,
      // },
      {
        name: "email",
        value: emailAddress,
        subtype: "any",
      },
      {
        name: "message",
        type: "CUSTOM",
        value: message ? message : "no message",
      },
    ],
  }
  return data
}

export default dataFormatter
