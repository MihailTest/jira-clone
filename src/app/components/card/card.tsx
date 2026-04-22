import cx from "classix";
import { Button } from "@app/components/button";

export const Card = ({
  title,
  description,
  buttonLabel,
  onButtonClick,
  className,
}: Props): JSX.Element => {
  return (
    <div
      className={cx(
        "flex flex-col gap-3 rounded bg-elevation-surface-raised p-4 shadow-sm",
        className
      )}
    >
      <h2 className="text-lg font-primary-bold text-font">{title}</h2>
      <p className="text-sm font-primary-light text-font-subtle">
        {description}
      </p>
      <Button
        color="primary"
        variant="contained"
        onClick={onButtonClick}
        className="self-start"
      >
        {buttonLabel}
      </Button>
    </div>
  );
};

export interface Props {
  title: string;
  description: string;
  buttonLabel: string;
  onButtonClick: () => void;
  className?: string;
}
