import eazymock from "@/assets/icons/eazymock.png";
import eazyprocess from "@/assets/icons/eazyprocess.png";
import review360 from "@/assets/icons/review360.png";
import recruithub from "@/assets/icons/recruithub.png";
import accounthub from "@/assets/icons/accounthub.png";
import offwork from "@/assets/icons/offwork.png";

import Product from "../common/Product";
import ProductDes from "../common/ProductDes";
import eazyProcessImage from "@/assets/image-ezprocess.png";

const OurProducts: React.FC = () => {
  return (
    <section className="width-full flex flex-col items-center pt-[70px] ">
      <div className=" font-bold text-[32px] leading-[38.73px] text-[#616161] pb-[40px]">
        {" "}
        our products{" "}
      </div>
      <section className="w-full h-[127px] flex items-center justify-center border-[2px] border-[#F6F6F6]">
        <Product image={offwork} product="Offwork" />
        <Product image={accounthub} product="AccountHubs" />
        <Product image={recruithub} product="RecruitHubs" />
        <Product image={review360} product="Review360" />
        <Product image={eazyprocess} product="EazyProcess" />
        <Product image={eazymock} product="EazyMock" />
      </section>
      <ProductDes
        image={eazymock}
        product="EazyMock"
        description="Create and manage mock APIs to develop and test app’s interaction"
        imageTotal={eazyProcessImage}
      />
    </section>
  );
};
export default OurProducts;
