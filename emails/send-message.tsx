import {
  Container,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";

interface ReviewEmailProps {
  authorName?: string;
  reviewText?: string;
}

export const ReviewEmail = ({
  authorName = "{{author}}",
  reviewText = "{{Message}}",
}: ReviewEmailProps) => {
  const previewText = `Read ${authorName}'s review`;

  return (
    <>
      <Preview>{previewText}</Preview>
      <Container style={container}>
        <Section style={{ paddingBottom: "20px" }}>
          <Row>
            <Text style={heading}>Here's what {authorName} wrote</Text>
            <Text style={review}>" {reviewText} "</Text>
            <Text style={paragraph}>
              Now that the review period is over, we’ve posted {authorName}
              ’s review to your profile.
            </Text>
            <Text style={{ ...paragraph, paddingBottom: "16px" }}>
              While it’s too late to write a review of your own, you can send
              your feedback to {authorName} using your message thread.
            </Text>
          </Row>
        </Section>
      </Container>
    </>
  );
};

ReviewEmail.PreviewProps = {
  authorName: "Alex",
  //   authorImage: `${baseUrl}/static/-review-user.jpg`,
  reviewText: `“Alan was a great guest! Easy communication, the apartment was left
    in great condition, very polite, and respectful of all house rules.
    He’s welcome back anytime and would easily recommend him to any
    host!”`,
} as ReviewEmailProps;

export default ReviewEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
  maxWidth: "100%",
};

const userImage = {
  margin: "0 auto",
  marginBottom: "16px",
  borderRadius: "50%",
};

const heading = {
  fontSize: "32px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#484848",
};

const paragraph = {
  fontSize: "18px",
  lineHeight: "1.4",
  color: "#484848",
};

const review = {
  ...paragraph,
  padding: "24px",
  backgroundColor: "#f2f3f3",
  borderRadius: "4px",
};

const button = {
  backgroundColor: "#ff5a5f",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "18px",
  padding: "19px 30px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
};

const link = {
  ...paragraph,
  color: "#ff5a5f",
  display: "block",
};

const reportLink = {
  fontSize: "14px",
  color: "#9ca299",
  textDecoration: "underline",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#9ca299",
  fontSize: "14px",
  marginBottom: "10px",
};
