import { useState } from "react";



const useFetch = () => {
  const [loading, setLoading] = useState(false);

  const saveUserToSheet = async (name: string) => {
    setLoading(true)
    await fetch("https://script.google.com/macros/s/AKfycbysBWxTQsE5G0yXaeNza7Q5ukAl7K7CyH-LqUeryJF5oDWbiuiVFS2bTCMoIcIIgGZT/exec", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": name.length.toString(),
        "Host": "script.google.com",
      },
      body: JSON.stringify({ name: name.trim() }),
    }).then((response) => {
      console.log(response)
    })
      .catch((error) => {
        console.error('Error saving user to sheet:', error);
      })
      .finally(() => {
        setLoading(false)
      })


  };

  return { saveUserToSheet, loading };
}

export default useFetch;