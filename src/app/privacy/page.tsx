import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy — NATIK" };

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy" updated="November 19, 2026">
      <p>
        This Privacy Policy explains how {site.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) collects, uses and protects
        personal information when you use our website and platform. We process personal data in line with the
        Nigeria Data Protection Act 2023 and other applicable laws.
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li><strong>Account information</strong> — your name, email address and a securely hashed password.</li>
        <li><strong>Business data</strong> — customer, order, payment and task records you upload or connect so that NATIK can analyse them for you.</li>
        <li><strong>Usage data</strong> — basic technical logs (such as IP address, browser type and pages visited) used to keep the service secure and reliable.</li>
      </ul>

      <h2>How we use information</h2>
      <ul>
        <li>To create and secure your account and provide the service.</li>
        <li>To generate insights, alerts and recommendations from your business data.</li>
        <li>To respond to support requests and send important service notices.</li>
        <li>To improve the reliability and performance of the platform.</li>
      </ul>
      <p>We do not sell your personal data or your business data.</p>

      <h2>Storage and security</h2>
      <p>
        Data is stored with reputable cloud infrastructure providers and encrypted in transit (TLS). Passwords are
        stored only as salted one-way hashes. Access to production systems is restricted to authorised personnel.
      </p>

      <h2>Sharing</h2>
      <p>
        We share data only with service providers who help us operate the platform (for example hosting and
        database providers), under contractual confidentiality and security obligations, or where required by law.
      </p>

      <h2>Retention</h2>
      <p>
        We keep your data for as long as your account is active. You can ask us to delete your account and
        associated data at any time.
      </p>

      <h2>Your rights</h2>
      <p>
        You may request access to, correction of, or deletion of your personal data, or object to its processing.
        Contact us at <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a> and we will respond within 30 days.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy can be sent to <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
      </p>
    </LegalPage>
  );
}
