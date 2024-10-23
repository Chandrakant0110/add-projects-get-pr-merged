import { useState } from "react";
import axios from "axios";

function App() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState(""); // To track the upload status
  const [loading, setLoading] = useState(false); // To disable the button during upload

  const upload = () => {
    if (!file) {
      setStatus("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    setLoading(true); // Start loading
    setStatus("Uploading...");

    axios
      .post("http://localhost:5000/upload", formData)
      .then((res) => {
        setLoading(false); // Stop loading
        setStatus("File uploaded successfully!");
        console.log(res.data);
      })
      .catch((err) => {
        setLoading(false); // Stop loading
        setStatus("Error uploading file");
        console.error(err);
      });
  };

  function handleChange(e) {
    setFile(e.target.files[0]);
    setStatus(""); // Clear previous status
  }

  return (
    <div>
      <input type="file" onChange={handleChange} />
      <button type="button" onClick={upload} disabled={loading}>
        {loading ? "Uploading..." : "Upload"}
      </button>
      {status && <p>{status}</p>} {/* Display the status */}
    </div>
  );
}

export default App;
