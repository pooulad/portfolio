import { useState } from "react";

export default function usePopover(name: string) {
  const [anchorEl, setAnchorEl] = useState<
    HTMLButtonElement | HTMLLIElement | null
  >(null);

  const openPopover = (
    event: React.MouseEvent<HTMLButtonElement | HTMLLIElement>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const closePopover = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const id = open ? name : undefined;

  return {
    openPopover,
    closePopover,
    open,
    id,
    anchorEl,
  };
}
