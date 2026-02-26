import TermsSectionPage from "@/components/section/TermsSectionPage";
import WebPageSchema from "@/components/seo/WebPageSchema";
import { Const } from "@/utils/Constants";

export const metadata = {
    title: "Terms & Conditions — Wrexon",
    description:
        "Review Wrexon’s terms and conditions governing the use of our SaaS and digital services.",

    robots: "index, follow",
};

export default function Page() {
    return (
        <main className="pt-32 px-6 max-w-5xl mx-auto">
            <WebPageSchema
                name="Terms & Conditions"
                description="Wrexon’s terms and conditions for using our services."
                url={`${Const.ClientLink}/terms`}
            />
        <TermsSectionPage/>    
        </main>
    );
}