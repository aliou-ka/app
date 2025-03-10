import type { APIRoute } from "astro";
import { Resend } from "resend";
import { render } from "@react-email/render";
import ContactFormEmail from "../../../emails/contact-form";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { nom, prenom, email, telephone, adresse, type, message } = data;

    // Validation basique
    if (!nom || !prenom || !email || !type || !message) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Tous les champs obligatoires doivent être remplis.",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "L'adresse email n'est pas valide.",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Générer le HTML de l'email avec le template React
    const emailHtml = await render(
      ContactFormEmail({
        nom,
        prenom,
        email,
        telephone,
        adresse,
        type,
        message
      })
    );

    // Version texte simple (fallback)
    const emailText = `
Nouveau message de contact depuis le site ASSUCLY

Informations personnelles:
- Nom: ${nom}
- Prénom: ${prenom}
- Email: ${email}
${telephone ? `- Téléphone: ${telephone}` : ""}
${adresse ? `- Adresse: ${adresse}` : ""}

Type de contact: ${type}

Message:
${message}
    `.trim();

    // Envoyer l'email avec Resend
    const { data: emailData, error } = await resend.emails.send({
      from: "ASSUCLY <contact@assucly.fr>",
      to: ["aliou.ka@gmail.com"],
      subject: `Nouveau message de contact - ${type}`,
      html: emailHtml,
      text: emailText,
      replyTo: email,
    });

    if (error) {
      console.error("Erreur Resend:", error);
      return new Response(
        JSON.stringify({
          success: false,
          error: "Une erreur est survenue lors de l'envoi de l'email.",
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Votre message a été envoyé avec succès !",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Erreur serveur:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: "Une erreur inattendue est survenue.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
