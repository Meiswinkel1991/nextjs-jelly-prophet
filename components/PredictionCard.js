const PredictionCard = () => {
  return (
    <div className="relative bg-white py-6 px-6 rounded-3xl w-64 my-8 shadow-xl">
      <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-pink-500 left-4 -top-6"></div>
      <div className="mt-8">
        <p className="text-xl font-semibold my-2">App Development</p>
        <div className="flex space-x-2 text-gray-400 text-sm">
          <p>1 Weeks Left</p>
        </div>
        <div className="border-t-2"></div>

        <div className="flex justify-between">
          <div className="my-2">
            <p className="font-semibold text-base mb-2">Team Member</p>
            <div className="flex space-x-2">
              <img
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                className="w-6 h-6 rounded-full"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Woman_7.jpg"
                className="w-6 h-6 rounded-full"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxSqK0tVELGWDYAiUY1oRrfnGJCKSKv95OGUtm9eKG9HQLn769YDujQi1QFat32xl-BiY&usqp=CAU"
                className="w-6 h-6 rounded-full"
              />
            </div>
          </div>
          <div className="my-2">
            <p className="font-semibold text-base mb-2">Progress</p>
            <div className="text-base text-gray-400 font-semibold">
              <p>34%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictionCard;
