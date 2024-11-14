interface GetMorePointsAlertProps {
  points: number;
  closeModal: () => void;
}

const GetMorePointsAlert = ({
  points,
  closeModal,
}: GetMorePointsAlertProps) => (
  <div
    role="alert"
    className="alert alert-warning"
  >
    <button
      type="button"
      onClick={closeModal}
    >
      <p>{`Тримай бонус ${points}`}</p>
    </button>
  </div>
);

export default GetMorePointsAlert;
