import { FC, useState } from "react";
import { CollapsibleSectionType } from "./types";
import { SectionBody, SectionHeader, SectionWrapper } from "./styles";

export const CollapsibleSection: FC<CollapsibleSectionType> = ({
  title,
  children,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <SectionWrapper>
      <SectionHeader type="button" onClick={() => setIsOpen((prev) => !prev)}>
        {title}
        <span>{isOpen ? "▲" : "▼"}</span>
      </SectionHeader>
      {isOpen && <SectionBody>{children}</SectionBody>}
    </SectionWrapper>
  );
};
