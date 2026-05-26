// Root layout — minimal, just wraps [locale] layout
// Note: [locale]/layout.tsx provides the actual <html> and <body> tags
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
