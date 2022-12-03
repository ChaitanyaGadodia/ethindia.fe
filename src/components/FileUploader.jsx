// https://dev.to/sameer472/how-to-upload-files-on-ipfs-infuraio-using-react-56g
import { create as ipfsHttpClient } from "ipfs-http-client";
import { useEffect, useState } from "react";
import { IPFS_API_KEY_SECRET, IPFS_PROJECT_ID, IPFS_API_ENDPOINT, IPFS_FILE_ENDPOINT } from "../constants/ipfs";

export default function FileUploader({ images, setImages }) {
  const [ipfs, setipfs] = useState(null);

  useEffect(() => {
    const newIpfs = ipfsHttpClient({
      url: `${IPFS_API_ENDPOINT}api/v0`,
      headers: {
        Authorization:
          "Basic " + window.btoa(IPFS_PROJECT_ID + ":" + IPFS_API_KEY_SECRET),
      },
    });
    setipfs(newIpfs);
  }, []);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const form = event.target;
    const files = form[0].files;

    if (!files || files.length === 0) {
      return alert("No files selected");
    }

    const file = files[0];
    // upload files
    const result = await ipfs.add(file);

    setImages([
      ...images,
      {
        cid: result.cid,
        path: result.path,
      },
    ]);

    form.reset();
  };

  return (
    <>
      {ipfs && (
        <>
          <h3>Upload files</h3>
          <form onSubmit={onSubmitHandler}>
            <input type="file" name="file" multiple />
            <button type="submit">Upload file</button>
          </form>
        </>
      )}
      {images.map((image, index) => (
        <img
          alt={`Uploaded #${index + 1}`}
          src={IPFS_FILE_ENDPOINT + image.Name}
          style={{ maxWidth: "400px", margin: "15px" }}
          key={image.Hash.toString() + index}
        />
      ))}
    </>
  );
}
