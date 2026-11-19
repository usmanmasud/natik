import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Terms of Service — NATIK" };

export default function Terms() {
  return (
    <LegalPage title="Terms of Service" updated="November 19, 2026">
      <p>
        These Terms govern your use of the {site.name} website and platform. By creating an account or using the
        service you agree to these Terms.
      </p>

      <h2>Your account</h2>
      <p>
        You must provide accurate information and keep your login credentials secure. You are responsible for
        activity that happens under your account.
      </p>

      <h2>Your data</h2>
      <p>
        You keep ownership of the business data you upload. You grant us permission to process it solely to
        provide and improve the service for you, as described in our <a href="/privacy">Privacy Policy</a>.
      </p>

      <h2>Acceptable use</h2>
      <ul>
        <li>Do not use the service for unlawful purposes or to process data you have no right to use.</li>
        <li>Do not attempt to disrupt, reverse engineer or gain unauthorised access to the platform.</li>
      </ul>

      <h2>Plans and billing</h2>
      <p>
        Paid plans are billed in advance on a monthly basis. You can cancel at any time and your plan will remain
        active until the end of the current billing period.
      </p>

      <h2>AI-generated insights</h2>
      <p>
        NATIK provides automated analysis and recommendations. They are intended to support, not replace, your
        own business judgement.
      </p>

      <h2>Availability and liability</h2>
      <p>
        We work to keep the service available and secure but provide it &ldquo;as is&rdquo;. To the extent permitted
        by law, our total liability is limited to the fees you paid in the 12 months before the claim.
      </p>

      <h2>Changes</h2>
      <p>We may update these Terms and will notify account holders of material changes.</p>

      <h2>Governing law</h2>
      <p>These Terms are governed by the laws of the Federal Republic of Nigeria.</p>

      <h2>Contact</h2>
      <p><a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a></p>
    </LegalPage>
  );
}
