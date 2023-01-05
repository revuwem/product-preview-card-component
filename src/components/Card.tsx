import Button from "./Button";

const Card: React.FC<{}> = () => {
  return (
    <section className="max-w-[350px] bg-white grid grid-flow-row rounded-xl overflow-hidden">
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
      <div className="p-6">
        <h2 className="font-sans text-xs text-blue-200 uppercase tracking-[0.25rem] mb-2">
          Perfume
        </h2>
        <h3 className="font-serif text-3xl text-blue-100 mb-3">
          Gabrielle Essence Eau De Parfum
        </h3>
        <p className="text-blue-200 font-sm mb-4">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL
        </p>
        <p className="font-sm mb-4 flex gap-4 place-items-center">
          <span className="font-serif text-3xl text-cyan-200">$149.99</span>
          <span className="text-xs text-blue-200 font-sans">
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
