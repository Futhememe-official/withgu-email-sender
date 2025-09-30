import { Separator } from "./ui/separator";
import { ReactNode } from "react";

interface EmailHolderProps {
  configuration?: ReactNode | ReactNode[];
  children?: ReactNode;
}

export const EmailHolder = ({ configuration, children }: EmailHolderProps) => {
  return (
    <div className="flex flex-1">
      {configuration && (
        <div className="flex-1 h-full p-4">
          <header className="pb-2 font-bold">Campos do email</header>
          <Separator className="mb-4" />
          {configuration}
        </div>
      )}
      <Separator orientation="vertical" />
      {children && <div className="flex-2 h-full p-4">{children}</div>}
    </div>
  );
};
