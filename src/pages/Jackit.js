/* eslint-disable react/jsx-pascal-case */
 
import T_Shirt from "./T_Shirt";

const SwitcShirt = ({ data, bannerJackit, title }) => {
  return (
    <div className="container mx-auto">
      <img
        className="rounded brightness-90 w-full"
        src={bannerJackit}
        alt="SwitcShirt Banner"
      />

      <div className="text-center my-10 text-3xl font-semibold">
        <h1>{title}</h1>
        <div className="text-sm">
          <T_Shirt data={data} />
        </div>
      </div>
    </div>
  );
};

export default SwitcShirt;
