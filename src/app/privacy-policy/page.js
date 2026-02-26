import PrivacyPolicySectionPage from "@/components/section/PrivacyPolicySectionPage";
import WebPageSchema from "@/components/seo/WebPageSchema";
import { Const } from "@/utils/Constants";

export const metadata = {
    title: "Privacy Policy — Wrexon",
    description:
        "Read Wrexon’s privacy policy to understand how we collect, use, and protect your data.",

    robots: "index, follow",
};

export default function Page() {
    return (
        <main className="pt-32 px-6 max-w-5xl mx-auto">
            <WebPageSchema
                name="Privacy Policy"
                description="Wrexon’s privacy policy and data protection practices."
                url={`${Const.ClientLink}/privacy-policy`}
            />
        <PrivacyPolicySectionPage/>
        </main>
    );
}