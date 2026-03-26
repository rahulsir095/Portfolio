import ImageKit from "imagekit";

var imagekit = new ImageKit({
   publicKey: import.meta.env.VITE_PUBLIC_KEY,
   privateKey: import.meta.env.VITE_PRIVATE_KEY,
   urlEndpoint: import.meta.env.VITE_URL_ENDPOINT,
});

export {imagekit};