interface GetMorePointsAlertProps {
  points: number;
  closeModal: () => void;
}

const GetMorePointsAlert = ({
  points,
  closeModal,
}: GetMorePointsAlertProps) => (
  <button
    type="button"
    className="btn  btn-success"
    onClick={closeModal}
  >
    <p>{`Тримай бонус ${points}`}</p>
  </button>
);

export default GetMorePointsAlert;
