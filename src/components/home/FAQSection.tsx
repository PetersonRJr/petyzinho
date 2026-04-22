"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    q: "Como funciona o pagamento pelos atendimentos?",
    a: "Após cada atendimento concluído e confirmado pelo paciente, o valor é processado e creditado na sua conta em até 7 dias úteis. Você acompanha tudo em tempo real pelo app ISA — sem surpresas, sem burocracia.",
  },
  {
    q: "Preciso ter CNPJ para trabalhar com a ISA?",
    a: "Não. Você pode trabalhar como profissional autônomo utilizando apenas seu CPF. A ISA cuida de toda a parte administrativa para que você foque no que faz de melhor: cuidar.",
  },
  {
    q: "Como escolho quais chamados aceitar?",
    a: "Você tem total autonomia. Pelo app, você visualiza os chamados disponíveis na sua região, vê detalhes do atendimento e decide se quer aceitar ou não. Nenhuma obrigação de aceitar qualquer chamado.",
  },
  {
    q: "O que acontece se o paciente cancelar?",
    a: "Chamados cancelados com menos de 2 horas de antecedência geram uma taxa de cancelamento paga ao profissional. Você não sai no prejuízo por cancelamentos de última hora.",
  },
  {
    q: "Preciso de experiência mínima ou tempo de formado?",
    a: "Exigimos apenas que você tenha registro ativo no seu conselho profissional (COREN, CRM, CREFITO, CRN, etc.) e documentação em dia. Profissionais recém-formados são bem-vindos.",
  },
  {
    q: "A ISA oferece algum suporte jurídico?",
    a: "Sim. Todos os profissionais da rede ISA têm acesso a orientação jurídica especializada em saúde domiciliar, além de seguro de responsabilidade civil profissional incluído sem custo adicional.",
  },
  {
    q: "Posso atender em mais de uma cidade?",
    a: "Sim. No seu perfil você cadastra todas as regiões onde deseja atender. O app prioriza chamados dentro da sua área de preferência, mas você pode expandir quando quiser.",
  },
  {
    q: "Como funciona a verificação do meu perfil?",
    a: "Você envia seus documentos e registro profissional pelo próprio app. Nossa equipe realiza a validação e, após aprovação, seu perfil recebe o selo ISA Verificado — o que aumenta sua visibilidade para os pacientes.",
  },
];

export function FAQSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-isa-pink-100 text-isa-pink-600 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wide">
            Dúvidas frequentes
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-isa-gray-800 mb-3">
            Suas perguntas respondidas
          </h2>
          <p className="text-isa-gray-500">
            Tudo que você precisa saber antes de se cadastrar
          </p>
        </div>

        <Accordion.Root type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <Accordion.Item
              key={i}
              value={`item-${i}`}
              className="bg-isa-gray-50 rounded-2xl border border-isa-gray-100 overflow-hidden data-[state=open]:border-isa-pink-200 transition-colors"
            >
              <Accordion.Trigger className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group">
                <span className="font-bold text-isa-gray-800 text-sm md:text-base leading-snug">
                  {faq.q}
                </span>
                <ChevronDown className="w-5 h-5 text-isa-gray-400 flex-shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-180 group-data-[state=open]:text-isa-pink-500" />
              </Accordion.Trigger>
              <Accordion.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                <p className="px-6 pb-5 text-sm text-isa-gray-600 leading-relaxed">
                  {faq.a}
                </p>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>

        <div className="mt-10 text-center">
          <p className="text-isa-gray-500 text-sm mb-4">Ainda tem dúvidas?</p>
          <Link
            href="https://wa.me/5511913249594"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3.5 rounded-pill transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Falar pelo WhatsApp
          </Link>
        </div>

      </div>
    </section>
  );
}
