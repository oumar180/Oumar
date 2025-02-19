import React from 'react';
import { Box, Button, Stack, Typography } from "@mui/material";
import fondInscription from "../../assets/plant-aceuil.jpg";

export default function Accueil() {
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
                padding: 2, // Pour les petits écrans, évite que le contenu touche les bords
            }}
        >
            <Stack
                sx={{
                    width: { xs: "90%", sm: "80%", md: 600 }, // Responsive : largeur ajustée selon l'écran
                    maxWidth: 600, // Limite la largeur sur les écrans larges
                    padding: { xs: 2, md: 0 }, // Ajoute un peu de padding sur les petits écrans
                }}
                flexDirection="column"
                gap={2}
                alignItems="center"
            >
                <Typography
                    variant="h2"
                    color="#436850"
                    textAlign="center"
                    sx={{
                        fontSize: { xs: "1.5rem", sm: "2.5rem", md: "3rem" }, // Adapte la taille du texte
                        fontWeight: 800,
                    }}
                >
                    Bienvenue sur Green Convert !
                </Typography>
                <Stack
                    flexDirection={{ xs: "column", sm: "row" }} // Colonne sur les petits écrans, ligne sinon
                    gap={2}
                    width="100%"
                >
                    <Button
                        variant="contained"
                        size="small"
                        fullWidth
                        sx={{
                            backgroundColor: "#235347",
                            '&:hover': { backgroundColor: "#1d453c" }, // Couleur au survol
                        }}
                    >
                        Se connecter
                    </Button>
                    <Button
                        variant="contained"
                        size="small"
                        fullWidth
                        sx={{
                            backgroundColor: "#235347",
                            '&:hover': { backgroundColor: "#1d453c" },
                        }}
                    >
                        S'inscrire
                    </Button>
                </Stack>
            </Stack>
        </Stack>
    );
}
