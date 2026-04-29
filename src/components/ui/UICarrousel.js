import UIButton from "./UIButton";
import UIIcon from "./UIIcon";
import UIIconButton from "./UIIconButton";
import { cn } from "./classNames";

export default function UICarrousel({
  page,
  totalPages,
  onPrevious,
  onNext,
  previousLabel,
  nextLabel,
  children,
  className,
  contentClassName,
  controlsClassName,
  showCounter = false,
  arrows = "buttons",
  previousText,
  nextText,
  disabled = false,
}) {
  const hasMultiplePages = totalPages > 1;
  const hasPrevious = hasMultiplePages && page > 0;
  const hasNext = hasMultiplePages && page < totalPages - 1;

  return (
    <div className={cn("w-full", className)}>
      {arrows === "buttons" ? (
        <div className={cn("flex items-center gap-2", controlsClassName)}>
          <UIButton
            disabled={disabled || !hasPrevious}
            onClick={onPrevious}
            aria-label={previousLabel}
          >
            {previousText}
          </UIButton>
          {showCounter ? (
            <span className="min-w-[54px] text-center text-sm font-bold text-slate-600">
              {page + 1}/{totalPages}
            </span>
          ) : null}
          <UIButton
            disabled={disabled || !hasNext}
            onClick={onNext}
            aria-label={nextLabel}
          >
            {nextText}
          </UIButton>
        </div>
      ) : null}

      {arrows === "icons" ? (
        <UIIconButton
          className="max-md:row-start-2 max-md:justify-self-center"
          onClick={onPrevious}
          label={previousLabel}
          disabled={disabled || !hasMultiplePages}
        >
          <UIIcon name="chevronLeft" />
        </UIIconButton>
      ) : null}

      <div className={contentClassName}>{children}</div>

      {arrows === "icons" ? (
        <UIIconButton
          className="max-md:row-start-2 max-md:justify-self-center"
          onClick={onNext}
          label={nextLabel}
          disabled={disabled || !hasMultiplePages}
        >
          <UIIcon name="chevronRight" />
        </UIIconButton>
      ) : null}
    </div>
  );
}
