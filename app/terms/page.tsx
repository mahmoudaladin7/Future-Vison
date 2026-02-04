import Container from "@/components/container";
import SectionHeading from "@/components/section-heading";

export default function TermsPage() {
  return (
    <main>
      <Container className="py-14 sm:py-20">
        <SectionHeading
          eyebrow="Legal"
          title="Terms of Service"
          subtitle="Placeholder. Replace with your actual terms."
        />
        <div className="mt-8 prose prose-sm max-w-none text-muted-foreground">
          <p>
            This site is a template. Add your real terms here. For consulting and investment content,
            include appropriate disclaimers and jurisdiction language.
          </p>
        </div>
      </Container>
    </main>
  );
}
