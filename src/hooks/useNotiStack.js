import { useEffect } from "react";
import { useSnackbar } from "notistack";
import { useDispatch, useSelector } from "react-redux";
import { resetNotification } from "../redux/modules/notification/actions";

export const useNotiStack = () => {
  const { type, message, open } = useSelector((state) => state.notification);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (!!message && open) {
      enqueueSnackbar(message, { variant: type });
      dispatch(resetNotification());
    }
  }, [type, message, open]);
};
