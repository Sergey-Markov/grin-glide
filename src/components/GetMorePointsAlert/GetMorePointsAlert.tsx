interface GetMorePointsAlertProps {
  points: number;
  closeModal: () => void;
  triggerConfetti?: () => void; // Опциональный пропс
}

const GetMorePointsAlert = ({
  points,
  closeModal,
  triggerConfetti, // Получаем функцию активации конфетти
}: GetMorePointsAlertProps) => {
  const handleClick = () => {
    if (triggerConfetti) {
      triggerConfetti(); // Активируем конфетти
    }
    closeModal(); // Закрываем модалку
  };

  return (
    <div className="flex justify-center items-center w-full h-full">
      <button
        type="button"
        className="btn btn-success"
        onClick={handleClick}
      >
        <p>{`Тримай бонус ${points}`}</p>
      </button>
    </div>
  );
};

export default GetMorePointsAlert;
