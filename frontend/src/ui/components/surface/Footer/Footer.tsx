import React from "react";

import {
    FooterContainer,
    FooterTitle,
    FooterListItem,
    SocialContainer,
    Applist,
    FooterSocialList,
    SocialButton,
    FooterGrid,
} from "./Footer.style";
import { List, Box, Typography } from "@mui/material";
import Link from "../../navigation/Link/Link";

import GooglePlay from "../../../../assets/img/logos/google-play.png";
import AppStore from "../../../../assets/img/logos/app-store.png";

function Footer() {
    return (
        <FooterContainer>
            <FooterGrid>
                <div>
                    <FooterTitle>Footer</FooterTitle>

                    <List>
                        <FooterListItem>
                            <Link
                                href={"/encontrar-diarista"}
                                mui={{ color: "inherit", variant: "body2" }}
                            >
                                Encontrar um(a) diarista
                            </Link>
                        </FooterListItem>

                        <FooterListItem>
                            <Link
                                href={"/cadastro/diarista"}
                                mui={{ color: "inherit", variant: "body2" }}
                            >
                                Seja um(a) diarista
                            </Link>
                        </FooterListItem>

                        <FooterListItem>
                            <Link
                                href={"/"}
                                mui={{ color: "inherit", variant: "body2" }}
                            >
                                Por que usar o E-Diaristas?
                            </Link>
                        </FooterListItem>

                        <FooterListItem>
                            <Link
                                href={"/"}
                                mui={{ color: "inherit", variant: "body2" }}
                            >
                                Principais Duvidas
                            </Link>
                        </FooterListItem>
                    </List>
                </div>

                <Box sx={{ maxWidth: "400px" }}>
                    <FooterTitle>Quem somos</FooterTitle>

                    <Typography variant={"body2"} sx={{ mt: 2 }}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Voluptas neque quibusdam tempore! Perferendis
                        laboriosam laborum, obcaecati officia eligendi possimus
                        quis nihil facere maxime temporibus sint corporis in.
                        Quo, molestias quisquam?
                    </Typography>
                </Box>

                <SocialContainer>
                    <Box>
                        <FooterTitle>Baixe nosso aplicativo</FooterTitle>

                        <Applist>
                            <li>
                                <a
                                    href="#"
                                    target={"_blank"}
                                    rel={"noopener noreferrer"}
                                >
                                    <img
                                        src={AppStore}
                                        alt="Fazer downloand na app store"
                                    />
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    target={"_blank"}
                                    rel={"noopener noreferrer"}
                                >
                                    <img
                                        src={GooglePlay}
                                        alt="Fazer downloand no Google play"
                                    />
                                </a>
                            </li>
                        </Applist>
                    </Box>

                    <div>
                        <FooterTitle>Redes Sociais</FooterTitle>
                        <FooterSocialList>
                            <FooterListItem>
                                <SocialButton href={"/"}>
                                    <i className={"twf-facebook-f"} />
                                </SocialButton>
                            </FooterListItem>

                            <FooterListItem>
                                <SocialButton href={"/"}>
                                    <i className={"twf-instagram"} />
                                </SocialButton>
                            </FooterListItem>

                            <FooterListItem>
                                <SocialButton href={"/"}>
                                    <i className={"twf-youtube"} />
                                </SocialButton>
                            </FooterListItem>
                        </FooterSocialList>
                    </div>
                </SocialContainer>
            </FooterGrid>
        </FooterContainer>
    );
}

export default Footer;
