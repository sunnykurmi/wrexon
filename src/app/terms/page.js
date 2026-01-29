import SectionHeading from "@/components/ui/SectionHeading";

export default function Page() {
    return (
        <main className="pt-32 px-6 max-w-5xl mx-auto">
            <SectionHeading title="Terms & Conditions" />
            <p className="mt-6 text-white/70">
                By using Wrexon services, you agree to our terms and conditions.
            </p>
        </main>
    );
}