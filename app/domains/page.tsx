"use client";

// app/domains/lease/page.tsx
// Next.js (App Router) – drop this file into your project
// TailwindCSS for styling; no extra component libs required

import React from "react";
import { INVENTORY, type DomainItem } from "@/app/domains/data";

// Pricing constants (satoshis)
const RENT_SATS = 10_000;      // Rent per month
const BUY_SATS = 420_000;      // Buy-now price

// ---- Utility helpers -------------------------------------------------------
function classNames(...cls: (string | false | undefined)[]) {
  return cls.filter(Boolean).join(" ");
}

function formatSats(n?: number) {
  if (typeof n !== "number" || n === 0) return "—";
  const bitcoinSymbol = "₿";
  if (n >= 1_000_000) {
    return `${bitcoinSymbol}${(n / 1_000_000).toLocaleString("en-US", {
      maximumSignificantDigits: 3,
      maximumFractionDigits: 2,
    })}M`;
  }
  if (n >= 10_000) {
    return `${bitcoinSymbol}${Math.floor(n / 1000)}k`;
  }
  return `${bitcoinSymbol}${n.toLocaleString("en-US")}`;
}

function mailtoFor(domain: DomainItem, mode: "rent" | "buy" | "ask") {
  const subject = encodeURIComponent(
    mode === "ask"
      ? `Domain availability inquiry: ${domain.name}`
      : `Domain inquiry: ${domain.name} (${mode.toUpperCase()})`
  );
  const enquiryBody = `Hi Orangemart team,\n\nI'm interested in the domain ${domain.name} and would like to know about its availability.\n\nMy details:\nName:\nPreferred contact method:\n\nThanks!`;
  const transactionBody = `Hi Orangemart team,\n\nI'd like to discuss the ${mode.toUpperCase()} option for ${domain.name}.\n\nMy details:\nName:\nPreferred contact method:\n\nThanks!`;
  const body = encodeURIComponent(mode === "ask" ? enquiryBody : transactionBody);
  return `mailto:orangemart@orangem.art?subject=${subject}&body=${body}`;
}

// ---- Page ------------------------------------------------------------------
export default function DomainLeasePage() {
  const [query, setQuery] = React.useState("");
  const [status, setStatus] = React.useState<string>(""); // Default to "All"
  const [sortBy, setSortBy] = React.useState<string>("name");

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!Array.isArray(INVENTORY)) {
      return [];
    }

    return INVENTORY
      .filter((d) => {
        // Status filter
        return !status || (d.status ?? "available") === status;
      })
      .filter((d) => {
        // Query filter
        if (!q) return true;
        return [d.name, d.category, d.notes]
          .filter(Boolean).some((v) => String(v).toLowerCase().includes(q));
      })
      .sort((a, b) => {
        if (sortBy === "price") {
          const priceA = a.monthly ?? a.buyNow ?? Infinity;
          const priceB = b.monthly ?? b.buyNow ?? Infinity;
          return priceA - priceB;
        }
        return a.name.localeCompare(b.name);
      });
  }, [query, status, sortBy]);

  const contactHref = `mailto:orangemart@orangem.art?subject=${encodeURIComponent(
    "Domain Request for Info"
  )}&body=${encodeURIComponent(
    "Hi Orangemart, I’d like to discuss renting or purchasing a domain.\n\nMy details:\nName:\nDomain(s):\nPreferred Contact Method:"
  )}`;
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-28 pb-12">
      {/* Hero */}
      <section className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
          Rent Bitcoin Domains from Orangemart
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-zinc-600 dark:text-gray-300">
          Got a project and need the perfect name? Rent a premium domain monthly or make a buy-now offer.
          Flexible terms. Fast onboarding. <strong>Free support</strong>.
        </p>
      </section>

      {/* Offer cards */}
      <section className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4 mb-10">
        <OfferCard
          title="Rent"
          blurb={`Use the domain while you build, with plans from as little as ${formatSats(RENT_SATS)} per month. Cancel anytime.`}
          bullets={["Full DNS control via Cloudflare", "Save with multi-month prepayment"]}
        />
        <OfferCard
          title="Buy"
          blurb={`Prefer full ownership today? Make a one-time payment to secure your domain immediately. See table for prices.`}
          bullets={["Buyout anytime", "Immediate transfer of ownership"]}
        />
      </section>

      {/* Controls */}
      <section className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between mb-6">
        <div className="flex gap-2">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search domains, categories, notes…"
            className="w-full md:w-96 rounded-2xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="rounded-2xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            title="Filter by status"
          >
            <option value="">All</option>
            <option value="available">Available</option>
            <option value="on hold">On hold</option>
            <option value="unavailable">Unavailable</option>
          </select>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="rounded-2xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            title="Sort by"
          >
            <option value="name">Sort: Name</option>
            <option value="price">Sort: Price</option>
          </select>
        </div>
        <a
          href={contactHref}
          className="inline-flex items-center justify-center rounded-2xl border border-orange-600 px-4 py-2 font-medium text-orange-400 hover:bg-orange-600/10"
        >
          Contact Orangemart
        </a>
      </section>

      {/* Table */}
      <section>
        <table className="w-full">
          <thead className="hidden md:table-header-group bg-zinc-50 dark:bg-zinc-950/60">
            <tr>
              <Th>Name</Th>
              <Th>Category</Th>
              <Th className="text-right">Monthly (sats)</Th>
              <Th className="text-right">Buy</Th>
              <Th>Status</Th>
              <Th>Action</Th>
            </tr>
          </thead>
          <tbody className="block md:table-row-group">
            {filtered.length > 0 ? (
              filtered.map((d) => (
                <tr
                  key={d.name}
                  className="block md:table-row mb-4 md:mb-0 rounded-lg border border-zinc-200 dark:border-zinc-800 md:border-none shadow md:shadow-none md:hover:bg-zinc-50 md:dark:hover:bg-zinc-900/40"
                >
                  <td className="block md:table-cell p-4 md:px-4 md:py-3 text-sm">
                    <div className="font-semibold text-zinc-900 dark:text-white">{d.name}</div>
                    {d.notes && <div className="text-xs text-zinc-400">{d.notes}</div>}
                  </td>
                  <Td label="Category">{d.category ?? "—"}</Td>
                  <Td label="Monthly" alignRight>
                    {formatSats(d.monthly)}
                  </Td>
                  <Td label="Buy" alignRight>{formatSats(d.buyNow)}</Td>
                  <Td label="Status"><DomainStatusBadge status={d.status} /></Td>
                  <Td label="Action"><DomainActionButtons domain={d} /></Td>
                </tr>
              ))
            ) : (
              <tr className="block md:table-row">
                <td colSpan={6} className="block md:table-cell text-center py-10 text-zinc-500">
                  No domains match your criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </section>

      {/* FAQ */}
      <section className="mt-12 grid md:grid-cols-2 gap-6">
        <Faq
          q="How does renting work?"
          a="You pay a monthly fee to use the domain. We provide you with full DNS control. We provide free support and you can cancel anytime."
        />
        <Faq
          q="How is the domain managed during rental?"
          a="We use a secure Cloudflare account for each domain. We invite your account to be an Administrator, giving you full control to manage DNS records. We provide free support to help you get set up."
        />
        <Faq
          q="Can I purchase a domain outright?"
          a="Yes. Domains are available for purchase. If you buy the domain, we transfer complete ownership of the domain to you. It's a clean and secure process."
        />
        <Faq
          q="Do you support branded email and lightning addresses?"
          a="Yes. We can help you configure your DNS at no extra charge, and help you get branded email or lightning address set up via your provider."
        />
      </section>

      <style>{`
        .btn { @apply inline-flex items-center rounded-xl border border-orange-600 px-3 py-1.5 text-sm font-medium text-orange-700 dark:text-orange-300 hover:bg-orange-600/10; }
        .btn.subtle { @apply border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-600/10; }
      `}</style>
    </main>
  );
}

// ---- Small components ------------------------------------------------------

function DomainStatusBadge({ status }: { status: DomainItem["status"] }) {
  const currentStatus = status ?? "available";
  const statusClasses = {
    available: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30",
    "on hold": "bg-amber-500/10 text-amber-400 border border-amber-500/30",
    unavailable: "bg-zinc-600/20 text-zinc-400 border border-zinc-500/30",
  };

  return (
    <span
      className={classNames(
        "inline-flex items-center rounded-full px-2 py-1 text-xs font-medium",
        statusClasses[currentStatus]
      )}
    >
      {currentStatus}
    </span>
  );
}

function DomainActionButtons({ domain }: { domain: DomainItem }) {
  const currentStatus = domain.status ?? "available";

  if (currentStatus === "available") {
    return (
      <div className="flex flex-wrap gap-2">
        <a href={mailtoFor(domain, "rent")} className="btn">Rent</a>
        {typeof domain.buyNow === "number" && <a href={mailtoFor(domain, "buy")} className="btn subtle">Buy</a>}
      </div>
    );
  }
  return <a href={mailtoFor(domain, "ask")} className="btn subtle">Ask</a>;
}

function OfferCard({ title, blurb, bullets, highlight }: { title: string; blurb: string; bullets: string[]; highlight?: boolean }) {
  return (
    <div
      className={classNames(
        "rounded-2xl border p-5 shadow-sm",
        highlight ? "border-orange-600/70 bg-orange-50/60 dark:bg-orange-950/10" : "border-zinc-200 dark:border-zinc-800"
      )}
    >
      <div className="text-lg font-semibold">{title}</div>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{blurb}</p>
      <ul className="mt-3 space-y-1 text-sm text-zinc-600 dark:text-zinc-300 list-disc list-inside">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

function Th({ children, className = "" }: React.PropsWithChildren<{ className?: string }>) {
  return (
    <th
      scope="col"
      className={classNames(
        "px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-300",
        className
      )}
    >
      {children}
    </th>
  );
}

function Td({ children, alignRight = false, label }: React.PropsWithChildren<{ label: string; alignRight?: boolean }>) {
  return (
    <td className="block md:table-cell px-4 py-3 border-t border-zinc-200 dark:border-zinc-800 md:border-none text-sm">
      <div className="flex justify-between items-center md:block">
        <span className="md:hidden font-bold text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
          {label}
        </span>
        <div className={classNames("text-zinc-800 dark:text-zinc-200", alignRight && "md:text-right md:tabular-nums")}>
          {children}
        </div>
      </div>
    </td>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-5">
      <div className="font-medium">{q}</div>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{a}</p>
    </div>
  );
}
