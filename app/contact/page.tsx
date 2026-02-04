"use client";

import Container from "@/components/container";
import GradientBg from "@/components/gradient-bg";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email."),
  type: z.enum(["Consulting", "Investment", "Partnership", "Other"]),
  message: z.string().min(10, "Please write a short message (10+ characters).")
});

type FormValues = z.infer<typeof schema>;

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FormValues>({ resolver: zodResolver(schema), defaultValues: { type: "Consulting" } });

  async function onSubmit(values: FormValues) {
    // TODO: wire to your backend / email provider / CRM.
    // For now this is a safe placeholder.
    console.log(values);
    alert("Submitted! Next step: connect this form to your email/CRM.");
  }

  return (
    <main className="relative">
      <GradientBg />
      <Container className="py-14 sm:py-20">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Let’s talk"
            subtitle="Use this form for consulting requests, investment pitches, or partnerships. Next step is wiring to email + CRM."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <Card className="border bg-card/60 glass">
              <CardContent className="space-y-4">
                <div className="text-sm font-semibold">Direct</div>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span>hello@futurevision.example</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>+966 00 000 0000</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>Riyadh, Saudi Arabia</span>
                  </div>
                </div>

                <div className="rounded-xl border bg-background/50 p-4">
                  <div className="text-sm font-semibold">What happens next</div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    We reply with a short set of clarifying questions and propose next steps with scope and timeline.
                  </p>
                </div>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={0.05} className="lg:col-span-7">
            <Card className="border bg-card/60 glass">
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Input placeholder="Your name" {...register("name")} />
                      {errors.name ? <p className="text-xs text-destructive">{errors.name.message}</p> : null}
                    </div>
                    <div className="space-y-2">
                      <Input placeholder="Your email" type="email" {...register("email")} />
                      {errors.email ? <p className="text-xs text-destructive">{errors.email.message}</p> : null}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <select
                      {...register("type")}
                      className="h-10 w-full rounded-xl border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <option>Consulting</option>
                      <option>Investment</option>
                      <option>Partnership</option>
                      <option>Other</option>
                    </select>
                    {errors.type ? <p className="text-xs text-destructive">{errors.type.message}</p> : null}
                  </div>

                  <div className="space-y-2">
                    <Textarea placeholder="Tell us what you want to achieve..." rows={7} {...register("message")} />
                    {errors.message ? <p className="text-xs text-destructive">{errors.message.message}</p> : null}
                  </div>

                  <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
                    {isSubmitting ? "Sending..." : "Send message"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>

                  <p className="text-xs text-muted-foreground">
                    This form currently logs to console + alert. Connect it to your backend/email provider next.
                  </p>
                </form>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </Container>
    </main>
  );
}
