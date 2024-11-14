interface GetMorePointsAlertProps {
  points: number;
  closeModal: () => void;
}

const GetMorePointsAlert = ({
  points,
  closeModal,
}: GetMorePointsAlertProps) => (
  <div className="flex justify-center items-center w-full h-full">
    <button
      type="button"
      className="btn  btn-success"
      onClick={closeModal}
    >
      <p>{`Тримай бонус ${points}`}</p>
    </button>
  </div>
);

export default GetMorePointsAlert;
