# Soroswap API fixtures

Real responses captured from `https://api.soroswap.finance` for issue #1084.

Every fixture is a JSON file with this shape:

    {
      "capturedAt": "2026-09-27T20:53:52Z",
      "capturedFrom": { "method": "POST", "url": "https://api.soroswap.finance/quote?network=mainnet" },
      "status": 403,
      "body": { ... },
      "responseHeaders": { ... }
    }

## Fixtures

| File | Captured | Status | What it is |
|---|---|---|---|
| `403-forbidden.json` | 2026-09-27 | 403 | POST `/quote` with no Authorization header. |
| `400-no-path-found.json` | 2026-09-27 | 400 | POST `/quote` with valid auth and valid assets (USDC to XLM), but no route exists on mainnet. |
| `400-invalid-address.json` | 2026-09-27 | 400 | POST `/quote` with a non-contract `assetIn`. |
| `400-bad-protocol.json` | 2026-09-27 | 400 | POST `/quote` with an unrecognised protocol name. |

Two distinct error body shapes are in scope for `SoroswapApiError`:

- **`{ message, error, statusCode }`** — standard NestJS Bad Request shape (403 and validation errors).
- **`{ title, detail, extra, error }`** — NestJS Problem Details, used when no route is found.

## Why no success fixtures

The success endpoints (`/quote` returning 200, `/quote/build` returning an XDR)
require a live route for the USDC to XLM pair on mainnet. As of the capture date
no such route exists. Recording invented success payloads would defeat the point
of the fixture — the value is that it is what the API actually returned.

If a route becomes available, re-run `node scripts/capture-soroswap-fixtures.mjs`
and add the new files to `index.ts`.

## Re-capturing

    node scripts/capture-soroswap-fixtures.mjs

Requires `SOROSWAP_API_KEY` in `.env` or the environment.