import {
    Box,
    Button,
    Grid2 as Grid,
    Modal,
    Typography,
    useTheme,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { certificateModal, certificateModalCloseAction } from "./certificateModal";
import { useTranslation } from "react-i18next";
import { Icons } from "../Icons";

function CertificateModal() {
    const { openModal, certificateData } = useAppSelector(certificateModal);

    const theme = useTheme();

    const dispatch = useAppDispatch();

    const { t } = useTranslation();

    return (
        <Modal
            open={openModal}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            container={() => document.getElementById("modalContainer")}
            sx={{
                width: "100%",
                height: "100%",
                position: "fixed",
                overflowX: "hidden",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 1300,
                "&:focus": {
                    outline: "none",
                },
                "& .css-i9fmh8-MuiBackdrop-root-MuiModal-backdrop": {
                    backdropFilter: "blur(2px)",
                },
            }}
        >
            <Grid
                container
                sx={{
                    width: "600px",
                    height: "100",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    boxShadow: 12,
                    padding: "16px 0px",
                    "&:focus-visible": {
                        outline: "none",
                    },
                    [theme.breakpoints.down("sm")]: {
                        width: "80%",
                    },
                    backgroundColor: "#FFFFFF",
                    borderRadius: "8px",
                    "&:focus": {
                        outline: "none",
                    },
                }}
            >
                <Grid
                    sx={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        padding: "8px 0px",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            width: "90%",
                            justifyContent: "space-between",
                            alignItems: "center",
                            textAlign: "center",
                            gap: "20px",
                        }}
                    >
                        <Box sx={{ width: "100%" }}>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: "100%",
                                    gap: "10px"
                                }}
                            >
                                <img
                                    onClick={() => {
                                        window.open(
                                            certificateData.link,
                                            "_blank"
                                        )
                                        dispatch(certificateModalCloseAction());
                                    }}
                                    style={{ width: "100%", cursor: "pointer" }}
                                    src={certificateData.image} alt="certificate_img"
                                />
                                <Typography sx={{
                                    fontSize: "22px",
                                    fontWeight: "bold",
                                    color: theme.palette.primary.main,
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: "17px"
                                    },
                                }}>
                                    {certificateData.title}
                                </Typography>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "flex-end",
                                gap: "10px",
                                [theme.breakpoints.down("sm")]: {
                                    flexDirection: "column-reverse"
                                },
                            }}
                        >
                            <Button
                                variant="text"
                                sx={{
                                    color: "#B22222",
                                    borderRadius: "30px",
                                    border: "2px solid #B22222",
                                    minWidth: "90px",
                                    textTransform: "none",
                                }}
                                onClick={() => {
                                    dispatch(certificateModalCloseAction());
                                }}
                            >
                                {t("close")}
                            </Button>
                            <Button
                                onClick={() => {
                                    window.open(
                                        certificateData.link,
                                        "_blank"
                                    )
                                    dispatch(certificateModalCloseAction());
                                }}
                                type="submit"
                                variant="text"
                                sx={{
                                    color: "white",
                                    backgroundColor: "#3AA7F0",
                                    borderRadius: "30px",
                                    border: "2px solid #3AA7F0",
                                    minWidth: "200px",
                                    textTransform: "none",
                                }}
                                endIcon={<Icons.externalLink />}
                            >
                                {t("credential_id")}
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Modal>
    );
}

export default CertificateModal;
