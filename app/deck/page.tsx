"use client";

import Container from "@/components/container";
import GradientBg from "@/components/gradient-bg";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { ArrowRight } from "lucide-react";

type Values = { name: string; email: string; company?: string; notes?: string };

export default function DeckPage() {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<Values>();

  async function onSubmit(values: Values) {
    console.log(values);
    alert("Submitted! Next step: route this to your email/CRM and auto-send the deck link.");
  }

  return (
    <main className="relative">
      <GradientBg />
      <Container className="py-14 sm:py-20">
        <Reveal>
          <SectionHeading
            eyebrow="Request"
            title="Request the deck"
            subtitle="Collect qualified inbound leads. Next step: auto-email the deck + log to CRM."
          />
        </Reveal>

        <Reveal delay={0.05}>
          <Card className="mt-10 max-w-2xl border bg-card/60 glass">
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input placeholder="Your name" {...register("name", { required: true })} />
                  <Input placeholder="Your email" type="email" {...register("email", { required: true })} />
                </div>
                <Input placeholder="Company (optional)" {...register("company")} />
                <Textarea placeholder="What are you looking for? (optional)" rows={6} {...register("notes")} />
                <Button type="submit" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Request deck"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <p className="text-xs text-muted-foreground">
                  Wiring suggestion: send deck link automatically + notify team + store lead.
                </p>
              </form>
            </CardContent>
          </Card>
        </Reveal>
      </Container>
    </main>
  );
}
