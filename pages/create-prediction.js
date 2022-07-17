import { Form } from "web3uikit";

const CreatePrediciton = () => {
  const createOption = async () => {
    console.log("create a new Price Prediction");
  };

  return (
    <div className="container mt-8 ml-8 shadow-lg rounded-lg ">
      <Form
        onSubmit={createOption}
        data={[
          {
            name: "Underlying Token",
            type: "text",
            key: "underlyingToken",
          },
        ]}
        title="Create a new Price Prediction"
        id="Main Form"
      />
    </div>
  );
};

export default CreatePrediciton;
