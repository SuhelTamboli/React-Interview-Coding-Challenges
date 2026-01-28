export default function ImageLazyLoading() {
  return (
    <div className="flex flex-col">
      <h1 className="flex justify-center font-bold text-lg">
        Image Lazy Loading
      </h1>
      <p>
        Modern browsers support lazy loading using the loading="lazy" attribute.
      </p>
      <img
        src="https://picsum.photos/600/400"
        alt="example"
        loading="lazy"
        width="600"
        height="400"
      />
      <img
        src="https://picsum.photos/600/400"
        alt="example"
        loading="lazy"
        width="600"
        height="400"
      />
      <img
        src="https://picsum.photos/600/400"
        alt="example"
        loading="lazy"
        width="600"
        height="400"
      />
      <img
        src="https://picsum.photos/600/400"
        alt="example"
        loading="lazy"
        width="600"
        height="400"
      />
      <img
        src="https://picsum.photos/600/400"
        alt="example"
        loading="lazy"
        width="600"
        height="400"
      />
      <img
        src="https://picsum.photos/600/400"
        alt="example"
        loading="lazy"
        width="600"
        height="400"
      />
    </div>
  );
}
