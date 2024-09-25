const ProductPage = ({ data, banner, title, Component }) => {
  return (
    <div className="container mx-auto">
      <img src={banner} alt="Product Banner" className="w-full h-auto" />
      <div className="text-center my-10 text-3xl font-semibold">
        <h1>{title}</h1>
        <div className="text-sm">
          <Component data={data} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
