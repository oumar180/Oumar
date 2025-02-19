import React from 'react';
import { Box, Stack, Typography, TextField, Button } from '@mui/material';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import fondInscription from "../../assets/plant-1.jpg";

export default function Inscription() {
    const navigate = useNavigate();
    const { handleSubmit, register, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        if (data.motDePasse !== data.motDePasseConfirmation) {
            toast.error("Les mots de passe ne correspondent pas !");
        } else {
            toast.success("Inscription réussie.");
            navigate("/connexion");
        }
    };

    return (
        <Stack
            alignItems="center"
            justifyContent="center"
            width="100%"
            height="100vh"
            sx={{
                backgroundImage: `url(${fondInscription})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
        >
            <Box
                width="400px"
                sx={{
                    backgroundColor: "#fff",
                    padding: 3,
                    borderRadius: 2,
                    boxShadow: 3,
                }}
            >
                <Typography variant="h5" sx={{ color: "#436850", textAlign: "center" }}>
                    Inscription
                </Typography>
                <form style={{ marginTop: 4 }} onSubmit={handleSubmit(onSubmit)}>
                    <Stack flexDirection="column" gap={2}>
                        <TextField
                            id="nom-utilisateur"
                            label="Veuillez saisir votre nom"
                            variant="outlined"
                            fullWidth
                            size="small"
                            {...register("nomUtilisateur", {
                                required: "Veuillez saisir le nom",
                                minLength: { value: 5, message: "Veuillez saisir plus de 5 caractères" }
                            })}
                            error={!!errors.nomUtilisateur}
                            helperText={errors.nomUtilisateur?.message}
                        />
                        <TextField
                            id="email-utilisateur"
                            label="Veuillez saisir votre adresse mail"
                            variant="outlined"
                            fullWidth
                            size="small"
                            type="email"
                            {...register("mailUtilisateur", {
                                required: "Veuillez entrer une adresse correcte",
                                pattern: {
                                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                    message: "Veuillez entrer une adresse email valide"
                                }
                            })}
                            error={!!errors.mailUtilisateur}
                            helperText={errors.mailUtilisateur?.message}
                        />
                        <TextField
                            id="mot-de-passe"
                            label="Veuillez saisir un mot de passe"
                            variant="outlined"
                            fullWidth
                            size="small"
                            type="password"
                            {...register("motDePasse", {
                                required: "Veuillez saisir un mot de passe",
                                minLength: { value: 6, message: "Veuillez saisir un mot de passe de plus de 6 caractères" }
                            })}
                            error={!!errors.motDePasse}
                            helperText={errors.motDePasse?.message}
                        />
                        <TextField
                            id="confirmation-mot-de-passe"
                            label="Veuillez confirmer votre mot de passe"
                            variant="outlined"
                            fullWidth
                            size="small"
                            type="password"
                            {...register("motDePasseConfirmation", {
                                required: "Veuillez confirmer votre mot de passe",
                                minLength: { value: 6, message: "Veuillez saisir un mot de passe de plus de 6 caractères" }
                            })}
                            error={!!errors.motDePasseConfirmation}
                            helperText={errors.motDePasseConfirmation?.message}
                        />
                    </Stack>
                    <Button type="submit" variant="contained"  sx={{marginTop: 2, backgroundColor: "#235347"}} fullWidth>
                        INSCRIPTION
                    </Button>
                </form>
            </Box>
        </Stack>
    );
}
