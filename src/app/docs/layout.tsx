import { DocsHeader } from "@/components/docs/DocsHeader";
import { DocsSidebar } from "@/components/docs/DocsSidebar";
import { Footer } from "@/components/Footer";

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div id="top" className="min-h-screen">
      <DocsHeader />
      <div className="mx-auto flex max-w-[90rem] gap-10 px-5 py-10 sm:px-8 lg:gap-14 lg:py-14">
        <aside className="hidden w-56 shrink-0 lg:block xl:w-64">
          <div className="sticky top-24">
            <DocsSidebar />
          </div>
        </aside>
        <div className="min-w-0 flex-1">
          <div className="mb-8 lg:hidden">
            <DocsSidebar />
          </div>
          <main id="main">{children}</main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
