function Product() {
  return (
      <div className="flex h-full items-start gap-6 w-[50%] px-3">
          <div className="border-main border-5 rounded-md flex-2">
              <img src="./images/item-1.jpeg" className="h-[150px]" alt="" />
          </div>
          <div className="flex-3 flex flex-col gap-4">
              <div className="flex justify-between border-b-1 border-dotted border-desc">
                  <h2 className="text-xl text-title font-bold">Buttermilk Pancakes</h2>
                  <span className="text-xl font-medium text-main">$15.99</span>
              </div>
              <p className="text-desc">
                  I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed.
              </p>
          </div>
    </div>
  )
}

export default Product