// src/api.js or wherever you prefer to store your API logic

// const API_BASE_URL = "http://localhost:5000/api"; // You can replace with environment variable if needed
API_BASE_URL="https://sparkels-ui-completeweb.onrender.com/api";
export const sendContactForm = async (formData) => {
  try {
    const res = await fetch(`${API_BASE_URL}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.error || "Something went wrong");
    }

    return data; // success response
  } catch (err) {
    console.error("API Error:", err);
    throw err;
  }
};
