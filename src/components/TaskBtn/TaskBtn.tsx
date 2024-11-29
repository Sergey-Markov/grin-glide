import classNames from "classnames";

type TVariantBtn = "claim" | "check";

interface ITaskBtnProps {
  isLoading?: boolean;
  variant: TVariantBtn;
  onClick: () => void;
}

const getCurrentLabel = (type: TVariantBtn) => {
  switch (type) {
    case "claim":
      return "claim";
    case "check":
      return "check";

    default:
      return ":) error";
  }
};

const TaskBtn = ({ variant, onClick, isLoading }: ITaskBtnProps) => {
  const currentLabel = getCurrentLabel(variant);

  return (
    <button
      type="button"
      className={classNames("btn btn-xs text-emerald-400")}
      onClick={onClick}
    >
      {isLoading ? (
        <span className="loading loading-infinity loading-xs" />
      ) : (
        currentLabel
      )}
    </button>
  );
};

export default TaskBtn;
