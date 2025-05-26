function Product({ title, img, price, desc}) {
  return (
    <div className="flex h-full items-start gap-6 w-[50%] px-3">
      <div className="border-main border-5 rounded-md flex-2">
        <img src={img} className="h-[150px] object-cover w-full" />
      </div>
      <div className="flex-3 flex flex-col gap-4">
        <div className="flex justify-between border-b-1 border-dotted border-desc">
          <h2 className="text-xl text-title font-bold">{title}</h2>
          <span className="text-xl font-medium text-main">${price}</span>
        </div>
        <p className="text-desc">{desc}</p>
      </div>
    </div>
  );
}

export default Product;
