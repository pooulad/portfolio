import { SnackbarOrigin } from "@mui/material";
import { useState } from "react";

export interface IToastState extends SnackbarOrigin {
  open: boolean;
}

export default function useSnackbar() {
  const [toast, setToast] = useState<IToastState>({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal, open }: IToastState = toast;

  const openSnackbarHandler = (newState: SnackbarOrigin) => () => {
    setToast({ open: true, ...newState });
  };

  const closeSnackbarHandler = () => {
    setToast({ ...toast, open: false });
  };

  return {
    vertical,
    horizontal,
    open,
    openSnackbarHandler,
    closeSnackbarHandler,
  };
}
