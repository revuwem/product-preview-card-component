import Button from "./Button";

const Card: React.FC<{}> = () => {
  return (
    <section className="max-w-[350px] xl:max-w-[700px] bg-white grid grid-flow-row xl:grid-flow-col xl:grid-cols-2 rounded-xl overflow-hidden">
      <picture className="h-fit">
        <source
          srcSet="images/image-product-mobile.jpg"
          media="(max-width: 1439px)"
        />
        <source srcSet="images/image-product-desktop.jpg" />
        <img
          src="images/image-product-mobile.jpg"
          className="w-full h-2/6 object-cover"
        />
      </picture>
      <div className="p-6 xl:p-9">
        <h2 className="text-xs xl:text-base mb-2 xl:mb-4 font-sans text-blue-200 uppercase tracking-[0.25rem]">
          Perfume
        </h2>
        <h3 className="text-3xl xl:text-4xl mb-3 xl:mb-6 font-serif text-blue-100">
          Gabrielle Essence Eau De Parfum
        </h3>
        <p className="text-blue-200 font-sm xl:text-lg mb-4 xl:mb-8">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL
        </p>
        <p className="font-sm mb-4 xl:mb-8 flex gap-4 place-items-center">
          <span className="text-3xl xl:text-4xl font-serif text-cyan-200">
            $149.99
          </span>
          <span className="text-xs xl:text-base text-blue-200 font-sans">
            <del>$169.99</del>
          </span>
        </p>
        <Button>
          <img src="images/icon-cart.svg" alt="" />
          Add to cart
        </Button>
      </div>
    </section>
  );
};

export default Card;
