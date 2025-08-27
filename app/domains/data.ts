// app/domains/data.ts

export type DomainItem = {
  name: string; // e.g. "unspent.capital"
  category?: string; // e.g. "Bitcoin", "Gaming", "Brandable"
  monthly?: number; // suggested monthly lease price (sats)
  buyNow?: number; // optional buy‑now price (sats)
  status?: "available" | "on hold" | "unavailable";
  notes?: string;
};

// ✅ Replace this list with your actual inventory
export const INVENTORY: DomainItem[] = [
  { name: "btcplaylist.com", category: "Bitcoin", monthly: 21_000, buyNow: "", status: "on hold", notes: "Bitcoin entertainment" },
  { name: "btcpreview.com", category: "Bitcoin", monthly: 10_000, buyNow: 420_000, status: "available", notes: "Sneak peak into the future" },
  { name: "btcshowcase.com", category: "Bitcoin", monthly: 21_000, buyNow: 888_000, status: "available", notes: "Show off your bitcoin content" },
  { name: "casinostrip.club", category: "Nostr", monthly: 21_000, buyNow: "", status: "available", notes: "Keywords with subtle nostr nod" },
  { name: "nostrip.club", category: "Nostr", monthly: 10_000, buyNow: "", status: "available", notes: "No Strip Club #NOSTR" },
  { name: "cryptsheets.com", category: "Cryptography", monthly: 21_000, buyNow: 888_000, status: "available", notes: "Cheatsheets for cryptography" },
  { name: "cryptsheet.com", category: "Cryptography", monthly: 21_000, buyNow: 888_000, status: "available", notes: "Cheatsheet for cryptography" },
  { name: "notyourbitcoin.com", category: "Bitcoin", monthly: 21_000, buyNow: "", status: "available", notes: "Not your keys" },
  { name: "nyetcoin.com", category: "Bitcoin", monthly: 10_000, buyNow: 420_000, status: "available", notes: "не твои ключи, не твои монеты" },
  { name: "socialcrapital.com", category: "Finance", monthly: 10_000, buyNow: "", status: "available", notes: "Every VC's dream" },
  { name: "abillionsats.com", category: "Bitcoin", monthly: 21_000, buyNow: "", status: "available", notes: "Billionaire status" },
  { name: "spent.capital", category: "Finance", monthly: 0, status: "unavailable", notes: "Unavailable" },
  { name: "theorangemart.com", category: "Shop", monthly: 0, status: "unavailable", notes: "Unavailable" },
  // { name: "example.co.nz", category: "NZ", monthly: 95_000, ltoMonthly: 150_000, buyNow: 5_000_000, status: "available" },
];
