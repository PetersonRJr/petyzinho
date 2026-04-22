"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { AppDownloadSection } from "@/components/home/AppDownloadSection";
import { AppPreviewMockup } from "@/components/professionals/AppPreviewMockup";
import { staggerContainer, fadeUpVariant } from "@/lib/animations";
import * as Accordion from "@radix-ui/react-accordion";
import {
  Clock,
  DollarSign,
  MapPin,
  Shield,
  UserCheck,
  Smartphone,
  ChevronDown,
  UserPlus,
  FileText,
  ShieldCheck,
  Bell,
  Banknote,
  ArrowRight,
  Stethoscope,
  BadgeCheck,
} from "lucide-react";

const benefits = [
  {
    icon: <Clock className="w-6 h-6 text-isa-pink-500" />,
    title: "Você no controle da agenda",
    description:
      "Escolha os dias, horários e regiões que quiser. Sem escala, sem chefia, sem obrigação de mínimo.",
  },
  {
    icon: <DollarSign className="w-6 h-6 text-isa-green-500" />,
    title: "Ganhos por atendimento",
    description:
      "Receba por cada atendimento concluído. Quanto mais você atender, mais você ganha — simples assim.",
  },
  {
    icon: <MapPin className="w-6 h-6 text-isa-teal" />,
    title: "Chamados perto de você",
    description:
      "Receba notificações de oportunidades na sua região. Sem deslocamentos desnecessários.",
  },
  {
    icon: <Shield className="w-6 h-6 text-isa-pink-600" />,
    title: "Respaldo jurídico",
    description:
      "Contratos digitais claros, documentação transparente e suporte da plataforma em cada atendimento.",
  },
  {
    icon: <UserCheck className="w-6 h-6 text-isa-pink-500" />,
    title: "Perfil validado e visível",
    description:
      "Sua credencial verificada pela ISA aumenta sua credibilidade e abre mais oportunidades.",
  },
  {
    icon: <Smartphone className="w-6 h-6 text-isa-gray-600" />,
    title: "Gestão 100% pelo app",
    description:
      "Chamados, histórico de atendimentos e pagamentos — tudo em um só lugar, no seu celular.",
  },
];

const steps = [
  {
    icon: <UserPlus className="w-6 h-6 text-white" />,
    title: "Crie seu perfil",
    description: "Baixe o app e cadastre seus dados profissionais. Gratuito e 100% digital.",
    color: "bg-isa-pink-500",
  },
  {
    icon: <FileText className="w-6 h-6 text-white" />,
    title: "Envie seus documentos",
    description: "COREN/CRM, documentos pessoais e comprovante de qualificação.",
    color: "bg-isa-pink-600",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-white" />,
    title: "Validação em 48h",
    description: "Nossa equipe verifica seu perfil e te dá acesso à plataforma.",
    color: "bg-isa-teal",
  },
  {
    icon: <Bell className="w-6 h-6 text-white" />,
    title: "Receba oportunidades",
    description: "Aceite ou recuse chamados na sua região com um toque no app.",
    color: "bg-isa-green-500",
  },
  {
    icon: <Banknote className="w-6 h-6 text-white" />,
    title: "Receba após cada atendimento",
    description: "Pagamento garantido e rastreável direto na sua conta.",
    color: "bg-isa-pink-700",
  },
];

const faqs = [
  {
    q: "Existe vínculo empregatício com a ISA?",
    a: "Não. A ISA é uma plataforma de conexão. Você atua como profissional autônomo, com total liberdade para aceitar ou recusar atendimentos, sem vínculos trabalhistas.",
  },
  {
    q: "Preciso ter CNPJ para me cadastrar?",
    a: "Não é obrigatório. Você pode atender como pessoa física (CPF). Nossa equipe orienta sobre as melhores opções conforme seu perfil.",
  },
  {
    q: "Quanto tempo leva a validação do meu perfil?",
    a: "Nossa equipe analisa cada cadastro com cuidado. O processo leva entre 24 a 48 horas úteis após o envio completo dos documentos.",
  },
  {
    q: "Quais profissionais podem se cadastrar?",
    a: "Enfermeiros, técnicos em enfermagem, fisioterapeutas, fonoaudiólogos, nutricionistas, cuidadores de idosos e demais profissionais de saúde com registro ativo no conselho.",
  },
  {
    q: "Como funciona o recebimento?",
    a: "O pagamento é processado pela plataforma após cada atendimento concluído. Os valores são informados antes de você aceitar o chamado — sem surpresas.",
  },
  {
    q: "Posso recusar chamados?",
    a: "Sim, sempre. Você tem total autonomia para aceitar ou recusar qualquer oportunidade, sem justificativa e sem penalidades.",
  },
];

export default function ParaProfissionaisPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-isa-dark via-isa-pink-700 to-isa-pink-700 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-white blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Tag variant="blue" className="mb-5 bg-white/15 text-white border-0">
              Para Profissionais de Saúde
            </Tag>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl mb-6 leading-tight">
              Seja parceiro ISA.
              <br />
              Atenda no seu tempo. Ganhe mais.
            </h1>
            <p className="text-lg text-isa-pink-100 mb-4 max-w-2xl">
              Mais de 1.200 profissionais autônomos usam a ISA para encontrar
              oportunidades de atendimento domiciliar — com liberdade total,
              sem vínculo empregatício.
            </p>

            {/* Autonomy badge */}
            <div className="flex items-center gap-2 mb-8">
              <BadgeCheck className="w-4 h-4 text-isa-green-400" />
              <span className="text-sm text-isa-green-300 font-medium">
                100% autônomo · Sem vínculo trabalhista · Sem mínimo de atendimentos
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/trabalhe-conosco"
                variant="secondary"
                size="lg"
                rightIcon={<ArrowRight className="w-5 h-5" />}
                className="bg-white text-isa-pink-700 hover:bg-isa-gray-100"
              >
                Quero ser parceiro
              </Button>
              <Button
                href="#como-funciona"
                variant="ghost"
                size="lg"
                className="text-white border-2 border-white/30 hover:bg-white/10"
              >
                Ver como funciona
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            pill="Vantagens"
            title="Por que ser parceiro ISA?"
            subtitle="Você cuida dos pacientes. A ISA cuida de todo o resto — burocracia, pagamento e suporte."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {benefits.map((b) => (
              <motion.div key={b.title} variants={fadeUpVariant}>
                <Card hover padding="lg" className="h-full">
                  <div className="w-12 h-12 bg-isa-gray-100 rounded-xl flex items-center justify-center mb-4">
                    {b.icon}
                  </div>
                  <h3 className="font-display font-bold text-isa-gray-900 mb-2">
                    {b.title}
                  </h3>
                  <p className="text-sm text-isa-gray-600 leading-relaxed">
                    {b.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <AppPreviewMockup />

      {/* How it works */}
      <section id="como-funciona" className="py-20 md:py-28 bg-isa-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            pill="Passo a passo"
            title="Do cadastro ao primeiro atendimento"
            subtitle="O processo é simples, rápido e 100% pelo app."
          />
          <div className="max-w-2xl mx-auto space-y-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                <div
                  className={`w-12 h-12 rounded-full ${step.color} flex items-center justify-center flex-shrink-0 shadow`}
                >
                  {step.icon}
                </div>
                <div className="pt-1">
                  <h3 className="font-display font-bold text-isa-gray-900 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-isa-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button href="/trabalhe-conosco" variant="primary" size="lg">
              <Stethoscope className="w-5 h-5 mr-2" />
              Quero ser parceiro
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            pill="Dúvidas frequentes"
            title="Perguntas de profissionais"
          />
          <Accordion.Root type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <Accordion.Item
                key={i}
                value={`item-${i}`}
                className="border border-isa-gray-200 rounded-card overflow-hidden"
              >
                <Accordion.Trigger className="flex items-center justify-between w-full px-6 py-4 text-left font-semibold text-isa-gray-800 hover:bg-isa-gray-50 transition-colors group">
                  {faq.q}
                  <ChevronDown className="w-5 h-5 text-isa-gray-400 flex-shrink-0 transition-transform group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
                <Accordion.Content className="px-6 pb-4 text-sm text-isa-gray-600 leading-relaxed data-[state=open]:animate-fade-in-up">
                  {faq.a}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </section>

      <AppDownloadSection />
    </>
  );
}
