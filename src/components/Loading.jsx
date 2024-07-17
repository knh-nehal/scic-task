import { ScaleLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-[50vh]">
      <ScaleLoader color="#1D4ED8" size={90} />
    </div>
  );
};

export default Loading;
