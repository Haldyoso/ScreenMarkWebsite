# Security and analytics decisions

## Current state

The website is a static GitHub Pages export. It has no forms, accounts, analytics, advertising, third-party scripts or tracking cookies. The only browser storage is the local light/dark theme preference. A cookie banner would therefore add complexity without reflecting the technology currently in use.

External links that open a new tab use `rel="noopener"`. JSON-LD is serialized from typed repository-owned content, and changelog HTML is generated at build time from a committed file. No user-supplied HTML is rendered.

## Analytics options

- **No analytics (current and recommended for launch):** lowest privacy and maintenance burden; no cookie consent UI; no behavioural data.
- **Privacy-friendly analytics:** useful for aggregate traffic and download attribution when configured without cross-site tracking or persistent identifiers. Review the provider, data location, retention, data-processing agreement and local consent rules before adding it.
- **Google Analytics:** richest reporting and integration, but usually the highest GDPR/ePrivacy assessment and consent-management burden. Do not add it by copying a script alone; first define lawful basis, consent flow, retention, IP/data settings and the updated Privacy Policy.

If analytics are added later, update the Privacy Policy before deployment and add a consent mechanism only when the actual implementation and applicable law require it.

## HTTP security headers

GitHub Pages does not allow this Next.js static export to configure arbitrary response headers. A `headers()` block would be ignored and must not be presented as active protection.

When moving to a controllable host, define and test at least:

- `Content-Security-Policy`, including a restrictive `default-src`, explicit script/style/image/font rules and `frame-ancestors 'none'` unless embedding is required.
- `X-Content-Type-Options: nosniff`.
- `Referrer-Policy: strict-origin-when-cross-origin` or stricter.
- A minimal `Permissions-Policy` disabling unused capabilities.
- Clickjacking protection through CSP `frame-ancestors`; `X-Frame-Options: DENY` may be retained for older clients.

Also enable HTTPS redirection, HSTS only after HTTPS is stable, dependency and secret scanning, and least-privilege deployment credentials.

