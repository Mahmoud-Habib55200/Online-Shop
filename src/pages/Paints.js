import T_Shirt from "./T_Shirt";

const Paints = ({ data, bannerPlover, title }) => {
  return (
    <div className="container mx-auto">
      <div className="text-center my-10 text-3xl font-semibold">
        <h1>{title}</h1>
        <div className="text-sm border border-t-gray-400 mt-10">
          <T_Shirt data={data} />
        </div>
      </div>
    </div>
  );
};
export default Paints;
