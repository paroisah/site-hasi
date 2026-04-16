"use client";

import { useState } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";

const segmentos = ["Estética", "Moda", "Beleza", "Saúde e Bem-estar", "Outro"];

const tempoMercado = ["Menos de 1 ano", "De 1 a 3 anos", "Mais de 3 anos"];

const frequencias = [
  "Raramente",
  "1 a 2 vezes por semana",
  "3 a 5 vezes por semana",
  "Todos os dias",
];

const presencas = [
  "Existe mas não representa quem eu sou",
  "Está crescendo mas sem direção clara",
  "Está estagnada — posto mas não evolui",
  "Está consistente mas precisa evoluir",
  "Está ótima — quero escalar e aumentar o faturamento",
];

const situacoes = [
  { label: "Minha marca existe, mas ainda não encontrei a identidade dela", versao: "DNA Hasi" },
  { label: "Sei o que faço e por que faço, mas na hora de comunicar trava tudo", versao: "Arquitetura Narrativa" },
  { label: "Consigo me comunicar, mas cada mês parece que começo do zero", versao: "Mapa Tático" },
  { label: "Tenho o plano na cabeça, mas falta tempo para colocar em prática", versao: "Content Lab" },
  { label: "Minha marca está estruturada — quero escalar com consistência", versao: "Gestão de Marca" },
];

export default function Diagnostico() {
  const [form, setForm] = useState({
    nome: "",
    marca: "",
    segmento: "",
    email: "",
    whatsapp: "",
    instagram: "",
    tiktok: "",
    tempo_mercado: "",
    frequencia: "",
    presenca_digital: "",
    situacao: "",
    tentativas: "",
    resultado_ideal: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const set = (field: string, value: string) =>
    setForm((f) => ({ ...f, [field]: value }));

  const versao = situacoes.find((s) => s.label === form.situacao)?.versao ?? "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(
        "service_3yi3jxf",
        "template_rzvvpqe",
        { ...form, name: form.nome, versao_diagnostico: versao },
        "x-ZS81NblmWK4Jjp6"
      );
      setStatus("success");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : JSON.stringify(err);
      console.error("EmailJS error:", err);
      setErrorMsg(msg);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <main className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-lg">
          <div className="w-16 h-16 rounded-full bg-roxo/20 flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl">✓</span>
          </div>
          <h1 className="font-caveat font-bold text-4xl text-creme mb-4">
            diagnóstico recebido!
          </h1>
          <p className="font-nunito text-creme/70 text-base leading-relaxed">
            Obrigada por confiar na Hasi. Em breve você receberá seu diagnóstico
            personalizado no e-mail informado. 💜
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-2xl mx-auto px-6 pt-16 pb-24">
      {/* Header */}
      <div className="text-center mb-10">
        <Image
          src="/icone_hasi.png"
          alt="Hasi"
          width={64}
          height={64}
          className="mx-auto mb-6"
        />
        <h1 className="font-caveat font-bold text-4xl md:text-5xl text-creme mb-3">
          Diagnóstico de Marca · <span className="text-roxo">Hasi</span>
        </h1>
        <p className="font-nunito text-creme/60 text-sm leading-relaxed">
          Olá! Este é o seu Diagnóstico de Marca gratuito pela Hasi. Responda com
          honestidade — quanto mais verdadeira for sua resposta, mais preciso será
          o seu diagnóstico. Leva menos de 5 minutos.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* Nome */}
        <Field label="Qual é o seu nome?" required>
          <input
            type="text"
            required
            value={form.nome}
            onChange={(e) => set("nome", e.target.value)}
          />
        </Field>

        {/* Marca */}
        <Field label="Qual é o nome da sua marca?" required>
          <input
            type="text"
            required
            value={form.marca}
            onChange={(e) => set("marca", e.target.value)}
          />
        </Field>

        {/* Segmento */}
        <Field label="Qual é o seu segmento?" required>
          <select
            required
            value={form.segmento}
            onChange={(e) => set("segmento", e.target.value)}
          >
            <option value="">Selecione...</option>
            {segmentos.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </Field>

        {/* Email */}
        <Field label="Qual é o seu e-mail?" required>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => set("email", e.target.value)}
          />
        </Field>

        {/* WhatsApp */}
        <Field label="Qual é o seu telefone / WhatsApp?" required>
          <input
            type="tel"
            required
            placeholder="+55 (xx) xxxxx-xxxx"
            value={form.whatsapp}
            onChange={(e) => set("whatsapp", e.target.value)}
          />
        </Field>

        {/* Instagram */}
        <Field label="Qual é o @ do Instagram da sua marca?" required>
          <input
            type="text"
            required
            placeholder="@suamarca"
            value={form.instagram}
            onChange={(e) => set("instagram", e.target.value)}
          />
        </Field>

        {/* TikTok */}
        <Field label="Qual é o @ do TikTok da sua marca?" optional>
          <input
            type="text"
            placeholder="@suamarca"
            value={form.tiktok}
            onChange={(e) => set("tiktok", e.target.value)}
          />
        </Field>

        <div className="divider" />

        {/* Tempo no mercado */}
        <Field label="Há quanto tempo sua marca está no mercado?" required>
          <RadioGroup
            options={tempoMercado}
            value={form.tempo_mercado}
            onChange={(v) => set("tempo_mercado", v)}
          />
        </Field>

        {/* Frequência */}
        <Field label="Com que frequência você publica conteúdo?" required>
          <RadioGroup
            options={frequencias}
            value={form.frequencia}
            onChange={(v) => set("frequencia", v)}
          />
        </Field>

        {/* Presença digital */}
        <Field label="Como você descreveria sua presença digital hoje?" required>
          <RadioGroup
            options={presencas}
            value={form.presenca_digital}
            onChange={(v) => set("presenca_digital", v)}
          />
        </Field>

        {/* Situação */}
        <Field label="Quando você pensa na sua marca, qual dessas situações mais te representa?" required>
          <RadioGroup
            options={situacoes.map((s) => s.label)}
            value={form.situacao}
            onChange={(v) => set("situacao", v)}
          />
        </Field>

        <div className="divider" />

        {/* Tentativas */}
        <Field label="O que você já tentou fazer para mudar essa situação?" required>
          <textarea
            required
            rows={3}
            value={form.tentativas}
            onChange={(e) => set("tentativas", e.target.value)}
          />
        </Field>

        {/* Resultado ideal */}
        <Field label="O que seria o resultado ideal para você daqui a 6 meses?" required>
          <textarea
            required
            rows={3}
            value={form.resultado_ideal}
            onChange={(e) => set("resultado_ideal", e.target.value)}
          />
        </Field>

        {status === "error" && (
          <div className="font-nunito text-red-400 text-sm text-center">
            <p>Ops! Algo deu errado.</p>
            {errorMsg && <p className="text-xs mt-1 opacity-75">{errorMsg}</p>}
          </div>
        )}

        <button
          type="submit"
          disabled={status === "sending"}
          className="btn-primary justify-center text-base py-4 mt-2"
        >
          {status === "sending" ? "Enviando..." : "Quero meu diagnóstico →"}
        </button>
      </form>
    </main>
  );
}

function Field({
  label,
  required,
  optional,
  children,
}: {
  label: string;
  required?: boolean;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-nunito font-semibold text-sm text-creme">
        {label}{" "}
        {required && <span className="text-roxo">*</span>}
        {optional && <span className="text-creme/40 font-normal">(opcional)</span>}
      </label>
      <div className="[&_input]:w-full [&_input]:bg-card [&_input]:border [&_input]:border-white/10 [&_input]:rounded-lg [&_input]:px-4 [&_input]:py-3 [&_input]:font-nunito [&_input]:text-sm [&_input]:text-creme [&_input]:outline-none [&_input:focus]:border-roxo/50 [&_select]:w-full [&_select]:bg-card [&_select]:border [&_select]:border-white/10 [&_select]:rounded-lg [&_select]:px-4 [&_select]:py-3 [&_select]:font-nunito [&_select]:text-sm [&_select]:text-creme [&_select]:outline-none [&_select:focus]:border-roxo/50 [&_textarea]:w-full [&_textarea]:bg-card [&_textarea]:border [&_textarea]:border-white/10 [&_textarea]:rounded-lg [&_textarea]:px-4 [&_textarea]:py-3 [&_textarea]:font-nunito [&_textarea]:text-sm [&_textarea]:text-creme [&_textarea]:outline-none [&_textarea:focus]:border-roxo/50 [&_textarea]:resize-none">
        {children}
      </div>
    </div>
  );
}

function RadioGroup({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      {options.map((opt) => (
        <label
          key={opt}
          className={`flex items-center gap-3 px-4 py-3 rounded-lg border cursor-pointer transition-all duration-150 font-nunito text-sm ${
            value === opt
              ? "border-roxo/60 bg-roxo/10 text-creme"
              : "border-white/10 bg-card text-creme/60 hover:border-white/20"
          }`}
        >
          <input
            type="radio"
            name={options[0]}
            value={opt}
            checked={value === opt}
            onChange={() => onChange(opt)}
            className="hidden"
          />
          <span
            className={`w-4 h-4 rounded-full border-2 flex-shrink-0 ${
              value === opt ? "border-roxo bg-roxo" : "border-white/30"
            }`}
          />
          {opt}
        </label>
      ))}
    </div>
  );
}
