
const navigationbar = () => {
  return (
    <div className="w-full flex justify-between shadow-sm h-16 p-5 m-0">
      <img src="./logo.svg" alt="" className="w-8 " />
      <div className="flex justify-between gap-5">
        <div>
          <img src="./like.svg" alt=""  className="w-8" />

        </div>
        <div>
          <img src="./user.svg" alt="" className="w-8"/>

        </div>
      </div>

    </div>
  )
}

export default navigationbar