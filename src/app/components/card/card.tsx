import cx from "classix";
import { Button } from "@app/components/button";

export interface CardProps {
  title: string;
  description: string;
  buttonLabel: string;
  onButtonClick: () => void;
  className?: string;
}

export const Card = ({
  title,
  description,
  buttonLabel,
  onButtonClick,
  className,
}: CardProps): JSX.Element => {
  return (
    <div
      className={cx(
        "flex flex-col gap-3 rounded bg-elevation-surface-raised p-4 shadow-sm",
        className
      )}
    >
      <h2 className="font-primary-bold text-lg text-font">{title}</h2>
      <p className="font-primary-light text-sm text-font-subtle">
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
