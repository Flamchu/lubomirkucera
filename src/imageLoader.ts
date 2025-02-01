// src/imageLoader.ts
const images = import.meta.glob('./assets/images/*.jpg') as Record<string, () => Promise<string>>;

export default images;