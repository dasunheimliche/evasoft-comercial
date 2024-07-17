import { cn } from "@/lib/utils";
import {
  forwardRef,
  type ElementRef,
  type HTMLAttributes,
  type ReactNode,
} from "react";

type ContainerHTMLElement = ElementRef<"div">;

interface ContainerProps extends HTMLAttributes<ContainerHTMLElement> {
  children: ReactNode;
}

const Container = forwardRef<ContainerHTMLElement, ContainerProps>(
  ({ children, className, ...props }, ref) => (
    <div className={className} ref={ref} {...props}>
      {children}
    </div>
  )
);
Container.displayName = "Container";

export default Container;
