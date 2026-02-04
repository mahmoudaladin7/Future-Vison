import Container from "@/components/container";
import SectionHeading from "@/components/section-heading";

export default function PrivacyPage() {
  return (
    <main>
      <Container className="py-14 sm:py-20">
        <SectionHeading
          eyebrow="Legal"
          title="Privacy Policy"
          subtitle="Placeholder. Replace with your actual privacy policy."
        />
        <div className="mt-8 prose prose-sm max-w-none text-muted-foreground">
          <p>
            This site is a template. Add your real privacy policy here. If you collect emails via forms,
            disclose what you collect, why, and how you store it.
          </p>
        </div>
      </Container>
    </main>
  );
}
