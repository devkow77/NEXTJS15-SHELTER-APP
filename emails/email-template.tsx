import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Img,
} from "@react-email/components";

interface Props {
  email?: string;
  message?: string;
}

export const AnimalShelterEmail = ({ email, message }: Props) => (
  <Html>
    <Head />
    <Body style={main}>
      <Container style={container}>
        {/* Logo & Header */}
        <Section style={headerSection}>
          <Img
            src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
            alt="Animal Shelter Logo"
            width="60"
            height="60"
            style={{ marginBottom: "16px" }}
          />
          <Text style={title}>Animal Shelter</Text>
          <Text style={subtitle}>
            New message from: <strong>{email || "unknown@email.com"}</strong>
          </Text>
        </Section>

        {/* Message Content */}
        <Section style={section}>
          <Text style={messageTitle}>📬 Wiadomość</Text>
          <Text style={messageBox}>{message || "No message text."}</Text>
        </Section>

        {/* Footer */}
        <Section style={footer}>
          <Text style={footerText}>
            Back to shelter app ❤️ <br />
            <a
              href="https://nextjs-15-shelter-app-v3ei.vercel.app/"
              style={link}
            >
              animalshelter.app
            </a>
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default AnimalShelterEmail;

// 🎨 Style
const main = {
  backgroundColor: "#f2f5f9",
  padding: "40px 0",
  fontFamily: "Helvetica, Arial, sans-serif",
};

const container = {
  backgroundColor: "#ffffff",
  borderRadius: "16px",
  padding: "32px",
  maxWidth: "640px",
  margin: "0 auto",
  boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
};

const headerSection = {
  textAlign: "center" as const,
  marginBottom: "32px",
};

const title = {
  fontSize: "28px",
  fontWeight: "700",
  color: "#2a2a2a",
  marginBottom: "4px",
};

const subtitle = {
  fontSize: "16px",
  color: "#555",
};

const section = {
  marginBottom: "32px",
};

const imageRow = {
  marginBottom: "32px",
};

const imageCol = {
  padding: "6px",
};

const imageStyle = {
  width: "100%",
  borderRadius: "12px",
  objectFit: "cover" as const,
};

const messageTitle = {
  fontSize: "20px",
  fontWeight: "600",
  marginBottom: "12px",
  color: "#333",
};

const messageBox = {
  backgroundColor: "#eef3f9",
  borderRadius: "12px",
  padding: "16px",
  fontSize: "16px",
  color: "#333",
  lineHeight: "1.6",
};

const footer = {
  borderTop: "1px solid #e1e1e1",
  paddingTop: "16px",
  textAlign: "center" as const,
};

const footerText = {
  fontSize: "14px",
  color: "#888",
};

const link = {
  color: "#4f8ef7",
  textDecoration: "none",
};
