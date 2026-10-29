"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

type CopyCommandProps = {
  command: string;
};

function copyWithExecCommand(command: string): boolean {
  const input = document.createElement("textarea");
  input.value = command;
  input.setAttribute("readonly", "");
  input.style.position = "fixed";
  input.style.left = "-9999px";
  document.body.appendChild(input);
  input.select();
  const ok = document.execCommand("copy");
  document.body.removeChild(input);
  return ok;
}

export function CopyCommand({ command }: CopyCommandProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    let ok = false;

    try {
      if (navigator.clipboard?.writeText) {
        await Promise.race([
          navigator.clipboard.writeText(command),
          new Promise<never>((_, reject) => {
            window.setTimeout(() => reject(new Error("clipboard timeout")), 400);
          }),
        ]);
        ok = true;
      }
    } catch {
      ok = false;
    }

    if (!ok) {
      ok = copyWithExecCommand(command);
    }

    if (!ok) return;

    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-line bg-panel/80 p-4 sm:flex-row sm:items-center sm:gap-4 sm:p-5">
      <code className="min-w-0 flex-1 overflow-x-auto font-mono text-sm text-paper sm:text-[15px]">
        {command}
      </code>
      <button
        type="button"
        onClick={handleCopy}
        aria-label="Copy install command"
        className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full border border-signal/30 bg-signal/10 px-4 text-sm font-semibold text-signal transition-colors hover:border-signal/70 hover:bg-signal/20"
      >
        {copied ? (
          <>
            <Check className="size-4" aria-hidden />
            Copied
          </>
        ) : (
          <>
            <Copy className="size-4" aria-hidden />
            Copy
          </>
        )}
      </button>
    </div>
  );
}
