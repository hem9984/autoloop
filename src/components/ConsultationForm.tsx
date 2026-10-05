"use client";

import { useState, type FormEvent } from "react";

const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

const teamSizes = ["1–10", "11–50", "51–200", "201–1000", "1000+"];

type Status = "idle" | "pending" | "success" | "error";

const fieldClass =
  "mt-2 w-full rounded-xl border border-line bg-ink px-4 py-3 text-base text-paper outline-none placeholder:text-mist/70 focus:border-signal";

export function ConsultationForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  if (!accessKey) {
    return (
      <div
        role="status"
        className="rounded-2xl border border-amber/40 bg-amber/10 p-5 text-sm leading-relaxed text-amber"
      >
        The consultation form is not configured yet. Set{" "}
        <code className="font-mono text-paper">NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY</code>{" "}
        and rebuild.
      </div>
    );
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const teamSize = String(data.get("team_size") ?? "").trim();
    const stack = String(data.get("stack") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const botcheck = data.get("botcheck");

    if (botcheck) {
      setStatus("success");
      return;
    }

    if (!name || !email || !company || !teamSize || !message) {
      setStatus("error");
      setError("Name, work email, company, team size, and the request are required.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setError("Enter a valid work email.");
      return;
    }

    setStatus("pending");
    setError("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: "AutoLoop consultation request",
          from_name: name,
          name,
          email,
          company,
          team_size: teamSize,
          stack,
          message,
          botcheck: "",
        }),
      });
      const payload = (await response.json()) as {
        success?: boolean;
        message?: string;
      };
      if (!response.ok || !payload.success) {
        setStatus("error");
        setError(payload.message || "The form could not be sent. Try again in a moment.");
        return;
      }
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setError("The form could not be sent. Check the connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-signal/40 bg-signal/10 p-6"
      >
        <h3 className="font-display text-3xl text-paper">Request received.</h3>
        <p className="mt-3 text-sm leading-relaxed text-mist">
          We will reply to the work email you entered. If you want to add
          context, send another note from the same address.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="relative space-y-4">
      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
        <label>
          Leave this empty
          <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-paper">
          Name
          <input name="name" type="text" autoComplete="name" required className={fieldClass} />
        </label>
        <label className="block text-sm font-medium text-paper">
          Work email
          <input
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            required
            className={fieldClass}
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-paper">
          Company
          <input name="company" type="text" autoComplete="organization" required className={fieldClass} />
        </label>
        <label className="block text-sm font-medium text-paper">
          Team size
          <select name="team_size" required defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Select
            </option>
            {teamSizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="block text-sm font-medium text-paper">
        Stack
        <input
          name="stack"
          type="text"
          placeholder="Languages, repos, stores, CI"
          className={fieldClass}
        />
      </label>

      <label className="block text-sm font-medium text-paper">
        What do you want automated?
        <textarea name="message" required rows={5} className={fieldClass} />
      </label>

      {status === "error" ? (
        <p role="alert" className="text-sm text-rose">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "pending"}
        className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-signal px-5 text-sm font-semibold text-ink transition-colors hover:bg-paper disabled:cursor-wait disabled:opacity-70"
      >
        {status === "pending" ? "Sending…" : "Request a consultation"}
      </button>
    </form>
  );
}
