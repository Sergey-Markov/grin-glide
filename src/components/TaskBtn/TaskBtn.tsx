import classNames from "classnames";

type TVariantBtn = "claim" | "check" | "loading";

interface ITaskBtnProps {
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
      return "loading";
  }
};

const TaskBtn = ({ variant, onClick }: ITaskBtnProps) => {
  const currentLabel = getCurrentLabel(variant);

  return (
    <button
      type="button"
      className={classNames("btn btn-xs text-emerald-400")}
      onClick={onClick}
    >
      {currentLabel}
    </button>
  );
};

export default TaskBtn;
