import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Heading,
  Text,
  Hr,
  Row,
  Column,
  Img,
} from "@react-email/components";
import * as React from "react";

interface ContactFormEmailProps {
  nom: string;
  prenom: string;
  email: string;
  telephone?: string;
  adresse?: string;
  type: string;
  message: string;
}

export default function ContactFormEmail({
  nom,
  prenom,
  email,
  telephone,
  adresse,
  type,
  message,
}: ContactFormEmailProps) {
  // Mapping des types de contact pour un affichage plus lisible
  const typeLabels: Record<string, string> = {
    information: "Demande d'information",
    soutien: "Demande de soutien",
    autre: "Autre",
  };

  // URL du logo - remplacez par l'URL publique de votre logo
  const logoUrl = "https://assucly.fr/_astro/assucly-logo.vOjpevjf.webp";

  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          {/* Header avec couleur tertiary */}
          <Section style={header}>
            {/* Logo centré et mis en valeur */}
             <Section style={logoContainer}>
              <Img
                src={logoUrl}
                alt="ASSUCLY Logo"
                width="180"
                height="auto"
                style={logoStyle}
              />
            </Section>
            
            {/* Titre et sous-titre centrés */}
         
          </Section>

          {/* Contenu principal */}
          <Section style={content}>
            <Heading style={title}>Informations personnelles</Heading>
            
            <Section style={infoSection}>
              <Row>
                <Column>
                  <Text style={label}>Nom</Text>
                  <Text style={value}>{nom}</Text>
                </Column>
                <Column>
                  <Text style={label}>Prénom</Text>
                  <Text style={value}>{prenom}</Text>
                </Column>
              </Row>
            </Section>

            <Hr style={divider} />

            <Section style={infoSection}>
              <Text style={label}>Email</Text>
              <Text style={value}>{email}</Text>
            </Section>

            {telephone && (
              <>
                <Hr style={divider} />
                <Section style={infoSection}>
                  <Text style={label}>Téléphone</Text>
                  <Text style={value}>{telephone}</Text>
                </Section>
              </>
            )}

            {adresse && (
              <>
                <Hr style={divider} />
                <Section style={infoSection}>
                  <Text style={label}>Adresse</Text>
                  <Text style={value}>{adresse}</Text>
                </Section>
              </>
            )}

            <Hr style={divider} />

            <Section style={infoSection}>
              <Text style={label}>Type de contact</Text>
              <Text style={typeBadge}>{typeLabels[type] || type}</Text>
            </Section>

            <Hr style={divider} />

            <Section style={messageSection}>
              <Text style={label}>Message</Text>
              <Text style={messageText}>{message}</Text>
            </Section>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              Ce message a été envoyé depuis le formulaire de contact du site ASSUCLY.
            </Text>
            <Text style={footerText}>
              Vous pouvez répondre directement à cet email pour contacter {prenom} {nom}.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Styles basés sur le design de l'application
const main = {
  backgroundColor: "#f9fafb",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "0",
  maxWidth: "600px",
  borderRadius: "4px",
  boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
};

const header = {
  backgroundColor: "#4f46e5", // tertiary color
  padding: "40px 40px 32px 40px",
  borderRadius: "4px 4px 0 0",
  textAlign: "center" as const,
};

const logoContainer = {
  marginBottom: "24px",
  textAlign: "center" as const,
  backgroundColor: "#ffffff", // Fond blanc pour le conteneur du logo
  padding: "12px",
  borderRadius: "8px",
  display: "inline-block",
  width: "fit-content",
  margin: "0 auto",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
};

const logoStyle = {
  display: "block",
  maxWidth: "180px",
  width: "180px",
  height: "auto",
  margin: "0",
  backgroundColor: "#ffffff", // Force le fond blanc sur l'image
};

const titleContainer = {
  textAlign: "center" as const,
};

const headerTitle = {
  color: "#ffffff", // primary color
  fontSize: "32px",
  fontWeight: "700",
  margin: "0 0 8px 0",
  letterSpacing: "1px",
};

const headerSubtitle = {
  color: "#ffffff",
  fontSize: "16px",
  margin: "0",
  opacity: 0.95,
  fontWeight: "400",
};

const content = {
  padding: "40px",
};

const title = {
  color: "#111827", // secondary color
  fontSize: "20px",
  fontWeight: "600",
  margin: "0 0 24px 0",
};

const infoSection = {
  marginBottom: "20px",
};

const label = {
  color: "#6b7280",
  fontSize: "12px",
  fontWeight: "600",
  textTransform: "uppercase",
  letterSpacing: "0.5px",
  margin: "0 0 8px 0",
};

const value = {
  color: "#111827", // secondary color
  fontSize: "16px",
  margin: "0 0 16px 0",
  lineHeight: "24px",
};

const typeBadge = {
  display: "inline-block",
  backgroundColor: "#4f46e5", // tertiary color
  color: "#ffffff",
  fontSize: "14px",
  fontWeight: "500",
  padding: "6px 12px",
  borderRadius: "4px",
  margin: "0",
};

const messageSection = {
  backgroundColor: "#f9fafb",
  padding: "20px",
  borderRadius: "4px",
  marginTop: "24px",
};

const messageText = {
  color: "#111827", // secondary color
  fontSize: "16px",
  lineHeight: "24px",
  margin: "8px 0 0 0",
  whiteSpace: "pre-wrap",
};

const divider = {
  borderColor: "#e5e7eb",
  margin: "24px 0",
};

const footer = {
  backgroundColor: "#f9fafb",
  padding: "24px 40px",
  borderRadius: "0 0 4px 4px",
  borderTop: "1px solid #e5e7eb",
};

const footerText = {
  color: "#6b7280",
  fontSize: "12px",
  lineHeight: "18px",
  margin: "0 0 8px 0",
};